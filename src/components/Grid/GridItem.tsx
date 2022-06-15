import { ComponentChildren } from "preact";
import styles from "./GridItem.module.css";

type Props = {
  icon: ComponentChildren;
  title: string;
  children: ComponentChildren;
};

export function GridItem({ icon, title, children }: Props) {
  return (
    <div class={styles.root}>
      <div class={styles.icon}>{icon}</div>
      <div class={styles.title}>{title}</div>
      <div class={styles.text}>{children}</div>
    </div>
  );
}
