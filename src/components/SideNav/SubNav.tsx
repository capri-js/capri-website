import styles from "./index.module.css";
import { NavLink } from "./NavLink";
import { TreeNode } from "./docTree";

type Props = {
  nodes: TreeNode[];
};

export function SubNav({ nodes }: Props) {
  return (
    <ul class={styles.subNav}>
      {nodes.map(({ doc, childNodes }) => (
        <li>
          <NavLink href={doc.url} activeClass={styles.active}>
            {doc.title}
          </NavLink>
          {childNodes && <SubNav nodes={childNodes} />}
        </li>
      ))}
    </ul>
  );
}
