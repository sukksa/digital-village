<template>
  <div class="title-box">
    <img v-if="titleText" src="./assets/img/title.png" alt="">
    <div class="title-text">{{ titleText }}</div>

  </div>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script setup>
  defineProps({
    titleText: {
      type: String,
      default: '',
    },
  })
</script>

<style lang="less" scoped>
  .title-box {
    position: relative;
    width: 25.9375rem;
    height: 2rem;
    line-height: 2rem;
    .title-text {
      z-index: 999;
      position: relative;
      margin-left: 1.75rem;
      font-size: 1.125rem;
      font-weight: bold;
    }
    img {
      width: 25.9375rem;
      height: 2rem;
      position: absolute;
      z-index: 99;
      top: 0;
      left: 0;
    }
  }
  .content {
    height: 17.1875rem;
  }
</style>