import { ComponentChildren } from "preact";
import { Center } from "../Center";
import { Section } from "../Section";
import styles from "./index.module.css";

type Props = {
  children: ComponentChildren;
};

export function Sponsors({ children }: Props) {
  return (
    <Center>
      <div class={styles.root}>
        <div class={styles.sponsoredBy}>Sponsored by</div>
        {children}
      </div>
    </Center>
  );
}
