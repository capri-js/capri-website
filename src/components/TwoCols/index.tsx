import { ComponentChildren } from "preact";
import styles from "./index.module.css";

type Props = {
  children: ComponentChildren;
};
export function TwoCols({ children }: Props) {
  return <div class={styles.root}>{children}</div>;
}
