

<template>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
    <div class="grid-item">10</div>
    <div class="grid-item">11</div>
    <div class="grid-item">12</div>
  </div>
</template>
<script setup>
  // TODO
  import { ref, onMounted } from 'vue'
  import Box from '@/components/Box.vue'
  import yicunyiping from './components/yicunyiping.vue'
  import tudishiyongmianji from './components/tudishiyongmianji.vue'
  import cunminjiatingshouru from './components/cunminjiatingshouru.vue'
  import shuzixianchunright from './components/shuzixianchunright.vue'
  import shuzixianchunleft from './components/shuzixianchunleft.vue'
  import renyuanzhaungtai from './components/renyuanzhaungtai.vue'
  import nongyegaikuang from './components/nongyegaikuang.vue'
  import nongcungaikuang from './components/nongcungaikuang.vue'
  import renyuanjiegou from './components/renyuanjiegou.vue'
  import bangfujiuzhu from './components/bangfujiuzhu.vue'
  import xuqingyangzhi from './components/xuqingyangzhi.vue'
  import nongzuowu from './components/nongzuowu.vue'
</script>
<style  >
  :root {
    /* 定义基础单位 */
    --cell-width: 25.9375rem;
    --cell-height: 19.25rem;
    --gap-size: 1rem;
  }

  .grid-container {
    width: 114.25rem;
    display: grid;
    /* 计算列宽：4列 × 宽度 + 3间隔 */
    grid-template-columns: repeat(4, var(--cell-width));
    /* 计算行高：3行 × 高度 + 2间隔 */
    grid-template-rows: repeat(3, var(--cell-height));
    gap: var(--gap-size);
    /* padding: var(--gap-size); */
    background-color: #f0f0f0;
    /* 容器尺寸自动适应内容 */
    width: max-content;
    height: max-content;
  }

  .grid-item {
    width: var(--cell-width);
    height: var(--cell-height);
    background-color: #4caf50;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    /* border-radius: 0.5rem; */
    box-sizing: border-box;
  }
</style>
