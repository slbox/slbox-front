<template>
  <!-- 移动端展示 -->
  <!-- <div class="my-nav"></div> -->
  <div class="my-nav" :class="{ 'is-fixed': scrollTop >= 60 }">
    <!-- 左侧logo -->
    <div class="my-nav__logo">
      <a :href="menus[0].path">{{ logo }}</a>
    </div>
    <!-- 右侧菜单 -->
    <!-- PC端展示 -->
    <ul class="my-nav__menu">
      <li
        v-for="(item, index) in menus"
        :key="'menuItem' + index"
        class="my-nav__menu--item"
      >
        <a :href="item.path">{{ item.name }}</a>
      </li>
    </ul>
    <!-- 移动端端展示 -->
    <div
      class="my-nav__prover"
      :class="{ 'is-proving': isExpand }"
      @click.stop="toggle"
    >
      <i class="iconfont icon-menu"></i>

      <ul class="my-nav__prover--menu">
        <li v-for="(item, index) in menus" :key="'menuItem' + index">
          <a :href="item.path">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import config from "@/config";
import { useStore } from "vuex";
import { computed, toRefs, ref, onMounted } from "vue";

const store = useStore();
const isExpand = ref(false);
const scrollTop = computed(() => store.state.scrollTop);
const { logo, menus } = toRefs(config.header);

const toggle = () => {
  isExpand.value = !isExpand.value;
};

onMounted(() => {
  document.addEventListener("click", () => {
    if (isExpand.value) {
      toggle();
    }
  });
});
</script>

<style lang="scss" scoped>
.my-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  height: 60px;
  z-index: 2000;
  transition: all 0.3s ease-in-out;

  a {
    padding: 20px;
    display: inline-block;
    line-height: 20px;
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    &:focus,
    &:active,
    &:visited {
      color: rgba(255, 255, 255, 1);
    }
    &:hover {
      color: rgba(255, 255, 255, 0.75);
    }
  }

  &.is-fixed {
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0 0 8px var(--color-primary);

    a {
      color: rgba(0, 0, 0, 1);
      &:focus,
      &:active,
      &:visited {
        color: rgba(0, 0, 0, 1);
      }
      &:hover {
        color: var(--color-primary);
      }
    }

    .icon-menu {
      color: rgba(0, 0, 0, 1);
      &:hover {
        color: var(--color-primary);
      }
    }
  }
  &__logo a {
    font-size: 18px;
  }
  &__menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
  }
  &__prover {
    display: none;
    cursor: pointer;
    position: relative;

    &--menu {
      position: absolute;
      right: 15px;
      bottom: 0;
      list-style: none;
      background: white;
      border-radius: 4px;
      transform: scale(0) translateY(100%);
      transform-origin: right bottom;
      transition: all 0.3s ease-in-out;
    }

    &.is-proving {
      .my-nav__prover--menu {
        transform: scale(1) translateY(100%);
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .my-nav {
    height: 48px;
    a {
      padding: 15px;
      line-height: 18px;
      display: block;
      color: rgba(255, 255, 255, 1);

      &:focus,
      &:active,
      &:visited {
        color: rgba(255, 255, 255, 1);
      }
      &:hover {
        color: rgba(255, 255, 255, 0.75);
      }
    }
    .icon-menu {
      color: rgba(255, 255, 255, 1);
      &:hover {
        color: rgba(255, 255, 255, 0.75);
      }
    }
    &__logo a {
      font-size: 16px;
    }
    &__menu {
      display: none;
    }
    &__prover {
      display: block;
      padding: 15px;

      > .icon-menu {
        font-size: 18px;
        line-height: 18px;
        font-weight: bold;
      }

      a {
        color: rgba(0, 0, 0, 1);

        &:focus,
        &:active,
        &:visited {
          color: rgba(0, 0, 0, 1);
        }
        &:hover {
          color: rgba(0, 0, 0, 0.75);
        }
      }
    }
  }
}
</style>
