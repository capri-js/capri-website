import { GitHubIcon } from "../../icons/GitHubIcon";
import styles from "./TopNav.module.css";

export function TopNav() {
  return (
    <nav class={styles.root}>
      <ul>
        <li>
          <a href="/">Start</a>
        </li>
        <li>
          <a href="/docs">Docs</a>
        </li>
        <li>
          <a
            href="https://github.com/capri-js/capri"
            target="_blank"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}
