<script setup>
  import VScaleScreen from 'v-scale-screen'
  import PageHeader from './components/PageHeader.vue'
</script>

<template>
  <v-scale-screen width="1920" height="1080">
    <div class="index-main">
      <div class="fullscreen-bg">
        <img src="./assets/index/bgImager.png" class="bg-image">

      </div>
      <PageHeader />
      <div class="content">
        <router-view />
      </div>

    </div>
  </v-scale-screen>
</template>

<style lang="less" scoped>
  // .content {
  //   width: 114.25rem;
  // }
  .index-main {
    // width: 100vw;
    padding: 0 2.875rem;
  }
  /* 全屏容器 */
  .fullscreen-bg {
    position: fixed;
    top: 0;
    left: 0;
    // width: 100vw;
    // height: 100vh;
    overflow: hidden;
    z-index: -1;

    .bg-image {
      width: 100%;
      height: 100%;
      object-fit: cover; /* 关键属性 */
      object-position: center;
    }
  }
</style>
