import { TopNav } from "./TopNav";
import BurgerButton from "./BurgerButton.island";
import styles from "./index.module.css";

export function Header() {
  return (
    <div class={styles.root}>
      <BurgerButton />
      <a class={styles.logo} href="/">
        <img src="/capri.svg" width="152" height="39" alt="Capri" />
      </a>
      <TopNav />
    </div>
  );
}
