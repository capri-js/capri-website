import { ComponentChildren } from "preact";
import styles from "./GridItem.module.css";

type Props = {
  emoji: string;
  title: string;
  children: ComponentChildren;
};

export function GridItem({ emoji, title, children }: Props) {
  return (
    <div class={styles.root}>
      <div class={styles.title}>
        <div class={styles.icon}>{emoji}</div>
        {title}
      </div>
      <div class={styles.text}>{children}</div>
    </div>
  );
}
