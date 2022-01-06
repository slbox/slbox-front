<template>
  <!-- 导航栏 -->
  <Nav></Nav>
  <div style="max-height: 650px; overflow: hidden">
    <img
      src="https://chenxiaosong-1257029795.cos.ap-shanghai.myqcloud.com/images%2Fpexels-pavel-danilyuk-6443072.jpg"
      style="width: 100%"
    />
  </div>
  <!-- 文章列表 -->
  <template v-for="(item, index) in articleList" :key="'article-item' + index">
    <el-card shadow="hover" class="cursor-pointer hover:text-theme mb-20px">
      <div
        class="flex flex-row <md:flex-col items-center <md:items-start justify-start"
      >
        <div
          v-if="item.cover"
          class="w-158px flex flex-row items-center justify-center border-1px border-gray-200 border-opacity-75 rounded-md min-h-90px max-h-120px <md:hidden"
        >
          <img :src="item.cover" class="inline-block max-w-150px max-h-118px" />
        </div>
        <div :class="{ 'pl-15px <md:pl-0px': item.cover }">
          <h4 class="text-xl <md:text-lg" :title="item.title">
            {{ item.title }}
          </h4>
          <div
            class="truncate whitespace-normal line-clamp-2 !text-blue-gray-700 my-10px"
            :title="item.description"
          >
            {{ item.description }}
          </div>
          <div class="-m-5px">
            <template
              v-for="(tag, tagIndex) in item.tags.split(',')"
              :key="index + 'tag-item' + tagIndex"
            >
              <el-tag size="small" class="m-5px">{{ tag }}</el-tag>
            </template>
          </div>
          <div class="!text-blue-gray-700 text-opacity-75 mt-10px">
            {{ item.timestamp }}
          </div>
        </div>
      </div>
    </el-card>
  </template>
  <!-- 返回顶部 -->
  <BackTop></BackTop>
</template>

<script setup>
import { computed } from "vue";
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

const loading = computed(() => {
  return store.state.articleLoading;
});
const articleList = computed(() => {
  return store.state.articleList;
});
store.dispatch("GetArticleList");
</script>
