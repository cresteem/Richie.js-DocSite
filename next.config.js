const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
});

console.log(
  "\n###################################################\n",
  "Localhost: http://localhost:3000/opensource/boost-seo-with-richie-js",
  "\n####################################################\n"
);
module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  basePath: "/opensource/boost-seo-with-richie-js",
  output: "export",
  distDir: "opensource/boost-seo-with-richie-js",
};
