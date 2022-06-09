import { ComponentChildren } from "preact";
import { ChevronRight } from "../../icons/ChevronRight";
import styles from "./index.module.css";

type Props = {
  link: string;
  title: string;
  children: ComponentChildren;
};
export function Card({ link, title, children }: Props) {
  return (
    <a href={link} class={styles.root}>
      <div class={styles.title}>
        {title}
        <ChevronRight />
      </div>
      <div class={styles.content}>{children}</div>
    </a>
  );
}
