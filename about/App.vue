<template>
  <!-- 导航栏 -->
  <Nav></Nav>
  <!-- 顶部内容 -->
  <div class="my-header">
    <h2>SL BLOG</h2>
    <h5>The harder you work, the more successful you will be</h5>
  </div>
  <!-- 主体内容 -->
  <ScrollAnim animationType="up" @init="initGitalk()">
    <Content>
      <blockquote>
        <p>
          冰冻三尺 非一日之寒<br />
          积土成山 非斯须之作
        </p>
      </blockquote>

      <p>Hey，我是<strong>孙小莉(SL)</strong>，一名产品经理，现在青岛工作。</p>
      <br />
      <p>工作、学习之余，我还是非常喜欢读书。</p>
      <br />
      <p>
        这是利用 <a href="https://pages.github.com/">GitHub Pages</a> 与
        <a href="http://vitejs.cn/">vite</a> 搭建的 个人博客。我在GitHub主页<a
          href="https://github.com/slbox"
          >👉GitHub·SL</a
        >。如果有什么问题，欢迎提出探讨~
      </p>
      <br />
      <br />
      <br />
      <h3>Talks</h3>
      <br />
      <ul>
        <li><a href="https://github.com">GitHub</a></li>
        <li><a href="https://github.com/slbox">孙小莉</a></li>
        <li><a href="https://github.com/chenxiaosong1996">陈小松</a></li>
        <li><a href="https://chenxiaosong1996.top/admin/">Admin</a></li>
      </ul>

      <!-- 评论系统 -->
      <div ref="gitalkContainerRef"></div>
    </Content>
  </ScrollAnim>

  <!-- 返回顶部 -->
  <BackTop></BackTop>
</template>

<script setup>
import { useStore } from "vuex";
import { defaultConf } from "@/config";
import { ref, nextTick, onMounted } from "vue";
import Nav from "@/components/partial/Nav.vue";
import BackTop from "@/components/partial/BackTop.vue";
import Content from "@/components/partial/Content.vue";
import ScrollAnim from "@/components/ScrollAnim.vue";
const store = useStore();
const gitalkContainerRef = ref("gitalkContainerRef");

window.onscroll = function () {
  //为了保证兼容性，这里取两个值，哪个有值取哪一个
  //scrollTop就是触发滚轮事件时滚轮的高度
  store.commit(
    "SET_SCROLL_TOP",
    document.documentElement.scrollTop || document.body.scrollTop
  );
};

// 评论区初始化
const initGitalk = () => {
  nextTick(() => {
    // 主要是针对翻页时，清空原来的内容
    if (gitalkContainerRef.value) {
      gitalkContainerRef.value.innerHTML = "";
    }
    // 重新挂载评论功能
    const gitalk = new Gitalk({
      clientID: defaultConf.gitalk.clientId,
      clientSecret: defaultConf.gitalk.clientSecret,
      repo: defaultConf.gitalk.repo,
      owner: defaultConf.gitalk.owner,
      admin: defaultConf.gitalk.admin,
      labels: [],
      id: `slbox.github.io`, // 如果要每篇文章都使用独立评论 需要改为 location.hash
      // 或者md5(location.hash)注意md5包需要单独引入
      distractionFreeMode: false, // 无干扰模式
      perPage: 50,
    });
    gitalk.render(gitalkContainerRef.value);
  });
};
</script>

<style lang="scss" scoped>
.my-header {
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: url("https://chenxiaosong-1257029795.cos.ap-shanghai.myqcloud.com/images/pexels-pavel-danilyuk-6443072.jpg")
    no-repeat center;
  background-size: cover;
  padding: 200px 50px;

  h2 {
    margin-top: 50px;
    font-size: 50px;
  }

  h5 {
    margin-top: 30px;
    margin-bottom: 50px;
    font-size: 36px;
    font-style: italic;
    font-family: Lora, "Times New Roman", serif;
  }
}
@media screen and (max-width: 480px) {
  .my-header {
    padding: 160px 10px;
    h2 {
      font-size: 24px;
    }

    h5 {
      font-size: 14px;
    }
  }
}
</style>
