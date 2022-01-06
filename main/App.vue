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
      <div>
        <template
          v-for="(item, index) in articleList"
          :key="'article-item' + index"
        >
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
              Posted by SL on{{ formatDate(item.timestamp) }}
            </div>
          </div>
          <hr class="my-hr" v-if="index !== articleList.length - 1" />
        </template>
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
  background: url("https://chenxiaosong-1257029795.cos.ap-shanghai.myqcloud.com/images/pexels-pavel-danilyuk-6443072.jpg")
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
