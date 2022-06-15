import { ComponentChildren } from "preact";
import { Content } from "../Content";
import styles from "./index.module.css";

type Props = {
  children: ComponentChildren;
};

export function CallToAction({ children }: Props) {
  return (
    <Content>
      <div class={styles.root}>{children}</div>
    </Content>
  );
}
