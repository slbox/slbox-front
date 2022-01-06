<template>
  <div
    class="my-backtop"
    v-if="scrollTop >= props.visibilityHeight"
    :style="{ right: props.right + 'px', bottom: props.bottom + 'px' }"
    @click="scrollToTop"
  >
    <i class="iconfont icon-caret-up"></i>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const props = defineProps({
  visibilityHeight: {
    type: Number,
    default: 100,
  },
  right: {
    type: Number,
    default: 40,
  },
  bottom: {
    type: Number,
    default: 40,
  },
});

const store = useStore();
const scrollTop = computed(() => store.state.scrollTop);

const scrollToTop = () => {
  store.dispatch("ScrollUp", scrollTop.value);
};
</script>

<style lang="scss" scoped>
.my-backtop {
  width: 40px;
  height: 40px;
  position: fixed;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  z-index: 2000;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 8px var(--color-primary);

  &:hover {
    color: var(--color-primary);
  }

  .iconfont {
    font-size: 18px;
  }
}
</style>
