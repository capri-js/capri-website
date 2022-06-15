import styles from "./index.module.css";
import { Content } from "../Content";
import { ComponentChildren } from "preact";

type Props = {
  text: ComponentChildren;
};

export function Hero({ text }: Props) {
  return (
    <section class={styles.root}>
      <Content>
        <img src="/capri.svg" width="500" height="129" alt="Capri" />
        <h1 class={styles.text}>{text}</h1>
      </Content>
    </section>
  );
}
