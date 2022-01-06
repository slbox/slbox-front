import packageData from "@/package.json";

export const defaultConf = {
  title: packageData.title,
  meta: [
    [
      { key: "name", value: "version" },
      { key: "content", value: packageData.version },
    ],
    [
      { key: "name", value: "name" },
      { key: "content", value: packageData.name },
    ],
    [
      { key: "name", value: "author" },
      {
        key: "content",
        value: `${packageData.author.name} || ${packageData.author.email}`,
      },
    ],
    [
      { key: "name", value: "keyword" },
      { key: "content", value: packageData.keywords.join(", ") },
    ],
    [
      { key: "name", value: "description" },
      { key: "content", value: packageData.description },
    ],
  ],
  link: [
    [
      { key: "rel", value: "stylesheet" },
      { key: "href", value: "//at.alicdn.com/t/font_2501889_rbzklrk5gpd.css" },
    ],
    [
      { key: "rel", value: "stylesheet" },
      { key: "href", value: "//at.alicdn.com/t/font_2938724_rlwoqjc3ps8.css" },
    ],
  ],
  script: [
    [
      { key: "type", value: "text/javascript" },
      { key: "src", value: "https://chenxiaosong1996.github.io/assets/scripts/nprogress.min.js" },
    ],
  ],
};
export default defaultConf;
