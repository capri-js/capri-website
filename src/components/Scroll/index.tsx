import { ComponentChildren } from "preact";
import styles from "./index.module.css";

type Props = {
  children: ComponentChildren;
};

export function Scroll({ children }: Props) {
  return (
    <div class={styles.root}>
      <div class={styles.inner}>{children}</div>
    </div>
  );
}
