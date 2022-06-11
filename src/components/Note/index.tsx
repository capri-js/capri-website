import { ComponentChildren } from "preact";
import { ChevronRight } from "../../icons/ChevronRight";
import { LightBulbIcon } from "../../icons/LightBulbIcon";
import styles from "./index.module.css";

type Props = {
  title: string;
  children: ComponentChildren;
};
export function Note({ title = "Note", children }: Props) {
  return (
    <div class={styles.root}>
      <div class={styles.title}>
        <LightBulbIcon />
        {title}
      </div>
      {children}
    </div>
  );
}
