import { MenuIcon } from "../../icons/MenuIcon";
import styles from "./BurgerButton.module.css";

function openMenu(ev: MouseEvent) {
  ev.stopPropagation();
  const menu = document.querySelector("[data-menu]");
  if (!menu || menu.getAttribute("data-menu") === "open") return;

  const onMouseUp = (ev: any) => {
    const insideMenu = menu.contains(ev.target);
    if (!insideMenu || ev.target.matches(["a", "button", "button *"])) {
      closeMenu();
    }
  };

  const closeMenu = () => {
    menu.setAttribute("data-menu", "closed");
    document.body.removeEventListener("mouseup", onMouseUp);
  };

  menu.setAttribute("data-menu", "open");
  document.body.addEventListener("mouseup", onMouseUp);
}

export const options = {
  media: "(max-width: 720px)",
};

export default function BurgerButton() {
  return (
    <button class={styles.root} onClick={openMenu} aria-label="Menu">
      <MenuIcon />
    </button>
  );
}
