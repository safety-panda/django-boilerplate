const { resolve } = require("path");

module.exports = {
  plugins: [],
  root: resolve("./static/src"),
  base: "/static/",
  server: {
    host: "localhost",
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  build: {
    outDir: resolve("./static/dist"),
    assetsDir: "",
    manifest: true,
    emptyOutDir: true,
    target: "es2015",
    rollupOptions: {
      input: {
        script: resolve("./static/js/script.js"),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
};
