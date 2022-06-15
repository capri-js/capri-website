import capri from "@capri-js/preact/vite-plugin";
import preact from "@preact/preset-vite";

export default {
  plugins: [
    preact(),
    capri({
      spa: "/preview",
    }),
  ],
};
