import capri from "@capri-js/preact";
import preact from "@preact/preset-vite";

export default {
  build: {
    dynamicImportVarsOptions: {
      exclude: /\.mjs$/,
    },
  },
  plugins: [
    preact(),
    capri({
      spa: "/preview",
    }),
  ],
};
