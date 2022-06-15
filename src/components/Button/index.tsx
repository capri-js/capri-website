import { ComponentChildren } from "preact";
import styles from "./index.module.css";

type Props = {
  href: string;
  outline?: boolean;
  children: ComponentChildren;
};

export function Button({ href, outline, children }: Props) {
  const classes = [styles.root, outline ? styles.outline : styles.solid];
  return (
    <a href={href} class={classes.join(" ")}>
      {children}
    </a>
  );
}
