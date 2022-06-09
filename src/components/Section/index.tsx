import { ComponentChildren } from "preact";
import { Content } from "../Content";
import styles from "./index.module.css";

type Props = {
  children?: ComponentChildren;
};
export function Section({ children }: Props) {
  return (
    <section class={styles.root}>
      <Content>{children}</Content>
    </section>
  );
}
