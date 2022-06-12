// eslint-disable-next-line import/no-named-as-default
import Router from "@capri-js/preact-router";

import { Root } from "./components/Root";
import { Home } from "./Home";
import { Page } from "./Page";
import { Doc } from "./Doc";

import "./global.css";
import "./highlight.css";

type Props = {
  url?: string;
};

export function App({ url }: Props) {
  return (
    <Root>
      <Router url={url}>
        <Home path="/" />
        <Doc path="/docs/:slug*" />
        <Page path="/:slug" />
      </Router>
    </Root>
  );
}
