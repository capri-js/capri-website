import { Doc } from "../../../.contentlayer/generated";
import { useRouter } from "@capri-js/preact-router";
import { NavLink } from "./NavLink";
import { rootNodes, TreeNode } from "./docTree";
import { SubNav } from "./SubNav";
import styles from "./index.module.css";

export function Nav() {
  return (
    <ul class={styles.nav}>
      {rootNodes.map(({ doc, childNodes }) => (
        <RootItem doc={doc} childNodes={childNodes} />
      ))}
    </ul>
  );
}

function RootItem({ doc, childNodes }: { doc: Doc; childNodes?: TreeNode[] }) {
  const [router] = useRouter();
  const active = router.url.startsWith(doc.url);
  return (
    <li>
      <NavLink href={doc.url} activeClass={styles.activeRoot}>
        {doc.title}
      </NavLink>
      {active && childNodes && <SubNav nodes={childNodes} />}
    </li>
  );
}
