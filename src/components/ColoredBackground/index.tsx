import { ComponentChildren } from "preact";
import styles from "./index.module.css";

type Props = {
  children: ComponentChildren;
};

export function ColoredBackground({ children }: Props) {
  return (
    <div class={styles.root}>
      <div class={styles.cloud} />
      <div class={styles.cloud} />
      {children}
    </div>
  );
}
