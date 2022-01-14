export const defaultConf = {
  base: "/slblog/",
  baseApiUrl: "https://chenxiaosong1996.top/api",
  baseOssUrl: "https://chenxiaosong-1257029795.cos.ap-shanghai.myqcloud.com",
  baseToken: "61e39d8ff7b7ac0f984b895fa42d02a9",
  header: {
    logo: "SL BLOG",
    menus: [
      { name: "HOME", path: "/slblog/" },
      { name: "ABOUT", path: "/slblog/about" },
    ],
  },
  // gitalk 配置
  gitalk: {
    clientId: "49eecdd5630a0f171ead",
    clientSecret: "7e90b607b82e3a48f95684b371e6016feeaa22a9",
    repo: "gitalk",
    owner: "slbox",
    admin: ["slbox"],
  },
};
export default defaultConf;
