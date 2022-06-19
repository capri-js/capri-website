import { useDoc } from "./useDoc";
import { useMdx } from "./useMdx";
import { Card } from "./components/Card";
import { SplitView } from "./components/SplitView";
import { Scroll } from "./components/Scroll";
import { TwoCols } from "./components/TwoCols";
import { SideNav } from "./components/SideNav";
import { Prose } from "./components/Prose";
import { Header } from "./components/Header";
import { Note } from "./components/Note";
import { Footer } from "./components/Footer";
import { Video } from "./components/Video";

const mdxComponents = {
  Card,
  Note,
  TwoCols,
  Video,
};

type Props = {
  url?: string;
};

export function Doc({ url }: Props) {
  const doc = useDoc(url);
  const Mdx = useMdx(doc.body.code);
  return (
    <>
      <Header />
      <SplitView>
        <SideNav />
        <Scroll>
          <Prose>
            <h1>{doc.title}</h1>
            <Mdx components={mdxComponents} />
          </Prose>
          <Footer />
        </Scroll>
      </SplitView>
    </>
  );
}
