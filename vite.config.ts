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
    {
      name: "print-options",
      options(options) {
        console.log(
          "ENV -----------------------------------------------------"
        );
        console.log(process.env);
        console.log(
          "OPTIONS -------------------------------------------------"
        );
        console.log(options);
      },
    },
  ],
};
