import styles from "./index.module.css";
import { Content } from "../Content";
import { ComponentChildren } from "preact";

type Props = {
  heading: string;
  text: ComponentChildren;
};

export function Hero({ heading, text }: Props) {
  return (
    <section class={styles.root}>
      <Content>
        <div class={styles.heading}>{heading}</div>
        <h1 class={styles.text}>{text}</h1>
      </Content>
    </section>
  );
}
