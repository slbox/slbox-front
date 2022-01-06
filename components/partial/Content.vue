<template>
  <div class="my-content"><slot></slot></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.my-content {
  padding: 20px;
  margin: 0 auto;
  max-width: 1100px;
  overflow-x: hidden;
  transition: all 0.3s ease-in;
}

@media screen and (max-width: 1280px) {
  .my-content {
    max-width: 90%;
  }
}

@media screen and (max-width: 480px) {
  .my-content {
    max-width: 100%;
    padding: 15px;
  }
}
</style>
