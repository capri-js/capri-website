import { GitHubIcon } from "../../icons/GitHubIcon";
import styles from "./TopNav.module.css";

export function TopNav() {
  return (
    <nav class={styles.root}>
      <a
        href="https://github.com/capri-js/capri"
        target="_blank"
        title="GitHub"
      >
        <GitHubIcon />
      </a>
    </nav>
  );
}
