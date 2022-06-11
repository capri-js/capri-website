// eslint-disable-next-line import/no-named-as-default
import Router from "@capri-js/preact-router";

import { Doc } from "./Doc";
import { Root } from "./components/Root";

import "./global.css";
import "./highlight.css";
import { Home } from "./Home";

type Props = {
  url?: string;
};

export function App({ url }: Props) {
  return (
    <Root>
      <Router url={url}>
        <Home path="/" />
        <Doc path="/docs/:slug*" />
      </Router>
    </Root>
  );
}
