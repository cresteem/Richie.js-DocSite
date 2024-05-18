const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
});

console.log(
  "\n###################################################\n",
  "Localhost: http://localhost:3000/opensource/richie-js",
  "\n####################################################\n"
);
module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  basePath: "/opensource/richie-js",
  output: "export",
  distDir: "opensource/richie-js",
};
