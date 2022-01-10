<!-- 入屏动效 -->
<template>
  <div ref="targetRef">
    <transition :name="animationType">
      <div v-if="animate" class="animated-component">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
/**
 * @desc 入屏动效组件
 * @author DuPeng
 * @date 2021-08-18
 */
import { onMounted, onUnmounted, ref, toRefs } from "vue";

const props = defineProps({
  animationType: {
    type: String,
    required: false,
    default: "up",
  },
  duration: {
    type: String,
    default: "500ms",
  },
  delay: {
    type: String,
    default: "0ms",
  },
  // 入屏动效是否仅播放一次，默认是
  showOnce: {
    type: Boolean,
    default: true,
  },
  threshold: {
    type: Number,
    default: 0.3,
  },
});

const emit = defineEmits(["init"]);

const showed = ref(false);
const animate = ref(false);
const targetRef = ref("targetRef");
const { showOnce, threshold } = toRefs(props);

const observer = new IntersectionObserver(
  ([entries]) => {
    animate.value = entries.isIntersecting || (showOnce.value && showed.value);
    if (showOnce.value && !showed.value && entries.isIntersecting) {
      showed.value = true;
    }
    emit("init", true);
    // 取消订阅
    if (showed.value && showOnce.value && animate.value) {
      observer.unobserve(targetRef.value);
    }
  },
  { threshold: threshold.value }
);
onMounted(() => {
  observer.observe(targetRef.value);
});
onUnmounted(() => {
  observer.disconnect();
});
</script>

<style lang="scss" scoped>
.animated-component.fade-enter-from,
.animated-component.zoom-enter-from,
.animated-component.up-enter-from,
.animated-component.down-enter-from,
.animated-component.left-enter-from,
.animated-component.right-enter-from {
  transition: none;
}
/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: v-bind(duration);
  transition-timing-function: ease;
  transition-delay: v-bind(delay);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
  transition-property: transform, opacity;
  transition-duration: v-bind(duration);
  transition-timing-function: ease;
  transition-delay: v-bind(delay);
}
.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
/* Slide up animation */
.up-enter-active,
.up-leave-active {
  transition-property: transform, opacity;
  transition-duration: v-bind(duration);
  transition-timing-function: ease;
  transition-delay: v-bind(delay);
}
.up-enter-from,
.up-leave-to {
  transform: translateY(50%);
  opacity: 0;
}
/* Slide down animation */
.down-enter-active,
.down-leave-active {
  transition-property: transform, opacity;
  transition-duration: v-bind(duration);
  transition-timing-function: ease;
  transition-delay: v-bind(delay);
}
.down-enter-from,
.down-leave-to {
  transform: translateY(-50%);
  opacity: 0;
}
/* Slide left animation */
.left-enter-active,
.left-leave-active {
  transition-property: transform, opacity;
  transition-duration: v-bind(duration);
  transition-timing-function: ease;
  transition-delay: v-bind(delay);
}
.left-enter-from,
.left-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
/* Slide left animation */
.right-enter-active,
.right-leave-active {
  transition-property: transform, opacity;
  transition-duration: v-bind(duration);
  transition-timing-function: ease;
  transition-delay: v-bind(delay);
}
.right-enter-from,
.right-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}
</style>
