import { RenderFunction, renderToString } from "@capri-js/preact/server";

import { App } from "./App";

export const render: RenderFunction = async (url: string) => {
  const html = await renderToString(<App url={url} />);
  return {
    "#root": html,
  };
};
