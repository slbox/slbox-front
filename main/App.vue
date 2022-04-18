<template>
  <!-- 导航栏 -->
  <Nav></Nav>
  <!-- 顶部内容 -->
  <div class="my-header">
    <h2>SL BLOG</h2>
    <h5>The harder you work, the more successful you will be</h5>
  </div>
  <!-- 主体内容 -->
  <ScrollAnim animationType="up">
    <Content class="my-body">
      <!-- 文章列表 -->
      <div v-if="articleList && articleList.length">
        <template
          v-for="(item, index) in articleList"
          :key="'article-item' + index"
        >
          <a :href="'/detail?id=' + item.id" style="text-decoration: none;">
            <div
              class="my-article"
              :style="{ 'margin-top': index > 0 ? '20px' : '0px' }"
            >
              <!-- 标题 -->
              <div class="my-article__title">{{ item.title }}</div>
              <!-- 副标题 -->
              <div class="my-article__subtitle">{{ item.tags }}</div>
              <!-- 内容简介 -->
              <div class="my-article__desc">{{ item.description }}</div>
              <!-- 发布时间 -->
              <div class="my-article__time">
                Posted by SL on {{ formatDate(item.timestamp) }}
              </div>
            </div>
          </a>
          <hr class="my-hr" v-if="index !== articleList.length - 1" />
        </template>
        <p style="text-align: center; margin-top: 100px">没有更多了~~~</p>
      </div>
      <!-- 空列表 -->
      <div v-else style="flex: 1; text-align: center">
        <br /><br /><br /><br />
        <svg
          style="width: 160px"
          viewBox="0 0 79 86"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient
              id="linearGradient-1-1"
              x1="38.8503086%"
              y1="0%"
              x2="61.1496914%"
              y2="100%"
            >
              <stop stop-color="#FCFCFD" offset="0%"></stop>
              <stop stop-color="#EEEFF3" offset="100%"></stop>
            </linearGradient>
            <linearGradient
              id="linearGradient-2-1"
              x1="0%"
              y1="9.5%"
              x2="100%"
              y2="90.5%"
            >
              <stop stop-color="#FCFCFD" offset="0%"></stop>
              <stop stop-color="#E9EBEF" offset="100%"></stop>
            </linearGradient>
            <rect id="path-3-1" x="0" y="0" width="17" height="36"></rect>
          </defs>
          <g
            id="Illustrations"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="B-type" transform="translate(-1268.000000, -535.000000)">
              <g id="Group-2" transform="translate(1268.000000, 535.000000)">
                <path
                  id="Oval-Copy-2"
                  d="M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z"
                  fill="#F7F8FC"
                ></path>
                <polygon
                  id="Rectangle-Copy-14"
                  fill="#E5E7E9"
                  transform="translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) "
                  points="13 58 53 58 42 45 2 45"
                ></polygon>
                <g
                  id="Group-Copy"
                  transform="translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"
                >
                  <polygon
                    id="Rectangle-Copy-10"
                    fill="#E5E7E9"
                    transform="translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) "
                    points="2.84078316e-14 3 18 3 23 7 5 7"
                  ></polygon>
                  <polygon
                    id="Rectangle-Copy-11"
                    fill="#EDEEF2"
                    points="-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
                  ></polygon>
                  <rect
                    id="Rectangle-Copy-12"
                    fill="url(#linearGradient-1-1)"
                    transform="translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) "
                    x="38"
                    y="7"
                    width="17"
                    height="36"
                  ></rect>
                  <polygon
                    id="Rectangle-Copy-13"
                    fill="#F8F9FB"
                    transform="translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) "
                    points="24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
                  ></polygon>
                </g>
                <rect
                  id="Rectangle-Copy-15"
                  fill="url(#linearGradient-2-1)"
                  x="13"
                  y="45"
                  width="40"
                  height="36"
                ></rect>
                <g
                  id="Rectangle-Copy-17"
                  transform="translate(53.000000, 45.000000)"
                >
                  <mask id="mask-4-1" fill="white">
                    <use xlink:href="#path-3-1"></use>
                  </mask>
                  <use
                    id="Mask"
                    fill="#E0E3E9"
                    transform="translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) "
                    xlink:href="#path-3-1"
                  ></use>
                  <polygon
                    id="Rectangle-Copy"
                    fill="#D5D7DE"
                    mask="url(#mask-4-1)"
                    transform="translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) "
                    points="7 0 24 0 20 18 -1.70530257e-13 16"
                  ></polygon>
                </g>
                <polygon
                  id="Rectangle-Copy-18"
                  fill="#F8F9FB"
                  transform="translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) "
                  points="62 45 79 45 70 58 53 58"
                ></polygon>
              </g>
            </g>
          </g>
        </svg>
        <br /><br /><br /><br /><br /><br />
        <p>正在疯狂催更中。。。</p>
        <br /><br /><br /><br />
      </div>
      <div class="my-info">
        <h5 class="my-info__title">ABOUT ME</h5>
        <img src="/assets/img/avator.jpg" class="my-info__avator" />
        <p class="my-info__desc">
          The harder you work, the more successful you will be
        </p>
        <div class="my-info__tools">
          <i
            class="iconfont icon-github-fill"
            @click="pathRoute('https://github.com/slbox')"
          ></i>
          <i class="iconfont icon-google-circle-fill"></i>
          <i class="iconfont icon-dingtalk-circle-fill"></i>
          <i class="iconfont icon-twitter-circle-fill"></i>
        </div>
      </div>
    </Content>
  </ScrollAnim>
  <!-- 返回顶部 -->
  <BackTop></BackTop>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Nav from "@/components/partial/Nav.vue";
import BackTop from "@/components/partial/BackTop.vue";
import Content from "@/components/partial/Content.vue";
import ScrollAnim from "@/components/ScrollAnim.vue";
const store = useStore();

window.onscroll = function () {
  //为了保证兼容性，这里取两个值，哪个有值取哪一个
  //scrollTop就是触发滚轮事件时滚轮的高度
  store.commit(
    "SET_SCROLL_TOP",
    document.documentElement.scrollTop || document.body.scrollTop
  );
};

const loading = computed(() => {
  return store.state.articleLoading;
});
const articleList = computed(() => {
  return store.state.articleList;
});
store.dispatch("GetArticleList");

const formatDate = (time) => {
  return moment(time).format("dddd, MMMM Do YYYY");
};

const pathRoute = (route) => {
  location.href = route;
};
</script>

<style lang="scss" scoped>
.my-header {
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: url("https://chenxiaosong1996.top/cloudobs/images/pexels-pavel-danilyuk-6443072.jpg")
    no-repeat center;
  background-size: cover;
  padding: 200px 50px;

  h2 {
    margin-top: 50px;
    font-size: 54px;
  }

  h5 {
    margin-top: 30px;
    margin-bottom: 50px;
    font-size: 36px;
    font-style: italic;
    font-family: Lora, "Times New Roman", serif;
  }
}

.my-body {
  display: flex;
  flex-direction: row;
}

.my-info {
  width: 200px;
  flex: 0 0 200px;
  padding-left: 20px;

  &__title {
    font-size: 16px;
    color: var(--color-text-primary);
    margin-bottom: 20px;
  }

  &__avator {
    width: 180px;
    border-radius: 4px;
    margin-bottom: 20px;
    filter: blur(1px);
  }

  &__desc {
    font-style: italic;
    font-family: Lora, "Times New Roman", serif;
    margin-bottom: 20px;
  }

  &__tools {
    .iconfont {
      font-size: 30px;
      margin-right: 20px;
      cursor: pointer;
      &:hover {
        color: var(--color-primary);
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .my-body {
    display: block;
  }
  .my-info {
    display: none;
  }
}
.my-hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid var(--border-color-base);
}
.my-article {
  cursor: pointer;
  &__title {
    color: var(--color-text-primary);
    font-size: 24px;
    margin-bottom: 10px;
  }

  &__subtitle {
    color: var(--color-text-primary);
    font-size: 16px;
    margin-bottom: 10px;
  }

  &__desc {
    font-style: italic;
    color: var(--color-text-secondary);
    margin-bottom: 10px;
  }

  &__time {
    cursor: auto;
    font-size: 18px;
    font-style: italic;
    font-family: Lora, "Times New Roman", serif;
  }

  &:hover {
    .my-article__title,
    .my-article__subtitle,
    .my-article__desc {
      color: var(--color-primary);
    }
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

  .my-article {
    &__title {
      font-size: 18px;
    }
    &__subtitle {
      font-size: 14px;
    }
    &__time {
      font-size: 16px;
    }
  }
}
</style>
