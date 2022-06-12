import { useMdx } from "./useMdx";
import { Card } from "./components/Card";
import { TwoCols } from "./components/TwoCols";
import { Prose } from "./components/Prose";
import { Header } from "./components/Header";
import { Note } from "./components/Note";
import { Footer } from "./components/Footer";
import { usePage } from "./usePage";

const mdxComponents = {
  Card,
  Note,
  TwoCols,
};

type Props = {
  url?: string;
};

export function Page({ url }: Props) {
  const page = usePage(url);
  const Mdx = useMdx(page.body.code);
  return (
    <>
      <Header />
      <Prose>
        <h1>{page.title}</h1>
        <Mdx components={mdxComponents} />
      </Prose>
      <Footer />
    </>
  );
}
