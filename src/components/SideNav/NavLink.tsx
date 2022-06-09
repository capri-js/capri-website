import { Link, useRouter } from "@capri-js/preact-router";

export function NavLink({ activeClass, ...props }: any) {
  const [router] = useRouter();
  const matches = router.url.startsWith(props.href);
  props.class = [props.class, matches && activeClass].filter(Boolean).join(" ");
  return <Link {...props} />;
}
