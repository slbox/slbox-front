<template>
  <!-- 导航栏 -->
  <Nav></Nav>
  <div style="max-height: 650px; overflow: hidden">
    <img
      src="https://chenxiaosong-1257029795.cos.ap-shanghai.myqcloud.com/images%2Fpexels-pavel-danilyuk-6443072.jpg"
      style="width: 100%"
    />
  </div>
  <div class="zh post-container">
    <!--copied from markdown -->
    <blockquote>
      <p>
        冰冻三尺 非一日之寒<br />
        积土成山 非斯须之作
      </p>
    </blockquote>

    <p>Hey，我是<strong>孙莉(SL)</strong>，一名产品经理，现在青岛工作。</p>

    <p>工作、学习之余，我还是一个健身爱好者，同时也非常喜欢拳击。</p>

    <p>
      这是我的利用 <a href="https://pages.github.com/">GitHub Pages</a> 与
      <a href="http://jekyll.com.cn/">Jekyll</a> 搭建的
      个人博客。我在GitHub主页<a href="https://github.com/slbox"
        >👉GitHub·SL</a
      >。如果有什么问题，欢迎提出探讨~
    </p>

    <p></p>

    <h5>Talks</h5>

    <ul>
      <li><a href="https://github.com">GitHub</a></li>
      <li><a href="http://jekyll.com.cn/">jekyll</a></li>
      <li><a href="http://huangxuan.me/">Hux</a></li>
      <li>
        <a href="https://analytics.google.com/analytics">Google Analytics</a>
      </li>
    </ul>
  </div>
  <!-- 返回顶部 -->
  <BackTop></BackTop>
</template>

<script setup>
import { useStore } from "vuex";
import Nav from "@/components/partial/Nav.vue";
import BackTop from "@/components/partial/BackTop.vue";
const store = useStore();

window.onscroll = function () {
  //为了保证兼容性，这里取两个值，哪个有值取哪一个
  //scrollTop就是触发滚轮事件时滚轮的高度
  store.commit(
    "SET_SCROLL_TOP",
    document.documentElement.scrollTop || document.body.scrollTop
  );
};
</script>

<style lang="scss" scoped>
@media (min-width: 1200px) {
  .post-container,
  .sidebar-container {
    padding-right: 5%;
  }
}
@media (min-width: 768px) {
  .post-container {
    padding-right: 5%;
  }
}
blockquote {
  color: gray;
  font-style: italic;
  font-size: 0.95em;
  margin: 20px 0 20px;
}
blockquote p {
  margin: 0;
}
.post-container a {
  color: #337ab7;
}
.post-container a:hover,
.post-container a:focus {
  color: #0085a1;
}
.post-container h1,
.post-container h2,
.post-container h3,
.post-container h4,
.post-container h5,
.post-container h6 {
  margin: 30px 0 10px;
}
.post-container h5 {
  font-size: 19px;
  font-weight: 600;
  color: gray;
}
.post-container h5 + p {
  margin-top: 5px;
}
.post-container h6 {
  font-size: 16px;
  font-weight: 600;
  color: gray;
}
.post-container h6 + p {
  margin-top: 5px;
}
.post-container ul,
.post-container ol {
  margin-bottom: 40px;
}
@media screen and (max-width: 768px) {
  .post-container ul,
  .post-container ol {
    padding-left: 30px;
  }
}
@media screen and (max-width: 500px) {
  .post-container ul,
  .post-container ol {
    padding-left: 20px;
  }
}
.post-container ol ol,
.post-container ol ul,
.post-container ul ol,
.post-container ul ul {
  margin-bottom: 5px;
}
.post-container li p {
  margin: 0;
  margin-bottom: 5px;
}
.post-container li h1,
.post-container li h2,
.post-container li h3,
.post-container li h4,
.post-container li h5,
.post-container li h6 {
  line-height: 2;
  margin-top: 20px;
}
.post-container .pager li {
  width: 48%;
}
.post-container .pager li.next {
  float: right;
}
.post-container .pager li.previous {
  float: left;
}
.post-container .pager li > a {
  width: 100%;
}
.post-container .pager li > a > span {
  color: gray;
  font-weight: 400;
  letter-spacing: 0.5px;
}
.post-container img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 1.5em auto 1.6em auto;
}
</style>
