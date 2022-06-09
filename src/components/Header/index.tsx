import { TopNav } from "./TopNav";
import { BurgerButtonIsland } from "./BurgerButton.island";
import styles from "./index.module.css";
import logo from "./logo.svg";

type Props = {
  noMenu?: boolean;
};
export function Header({ noMenu }: Props) {
  return (
    <div class={styles.root}>
      {!noMenu && <BurgerButtonIsland />}
      <a class={styles.logo} href="/">
        <img src={logo} width="152" height="39" alt="Capri Logo" />
      </a>
      <TopNav />
    </div>
  );
}
