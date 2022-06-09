import { Scroll } from "../Scroll";
import { Nav } from "./Nav";
import styles from "./index.module.css";
import { CloseIcon } from "../../icons/CloseIcon";

export function SideNav() {
  return (
    <div class={styles.root} data-menu>
      <button class={styles.close}>
        <CloseIcon />
      </button>
      <Scroll>
        <Nav />
      </Scroll>
    </div>
  );
}
