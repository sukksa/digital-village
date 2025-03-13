<template>
  <div class="box nongyegaikuang-box">
    <div class="nongyegaikuang">
      <img class="image" referrerpolicy="no-referrer" src="../assets/img/ny1.png" />
      <div class="text-wrapper">
        <span class="text_31">耕地面积</span>
        <span class="text_32">6807亩</span>
      </div>
    </div>
    <div class="nongyegaikuang">
      <img class="image" referrerpolicy="no-referrer" src="../assets/img/ny1.png" />
      <div class="text-wrapper">
        <span class="text_31">作物种类信息</span>
        <span class="text_32">水稻 玉米</span>
        <span class="text_32">油菜 小麦</span>
      </div>
    </div>
    <div class="nongyegaikuang">
      <img class="image" referrerpolicy="no-referrer" src="../assets/img/ny2.png" />
      <div class="text-wrapper">
        <span class="text_31">作物种植面积</span>
        <span class="text_32">4719亩</span>
      </div>
    </div>
    <div class="nongyegaikuang">
      <img class="image" referrerpolicy="no-referrer" src="../assets/img/ny2.png" />
      <div class="text-wrapper">
        <span class="text_31">粮食预计销售额</span>
        <span class="text_32">7048750元</span>
      </div>
    </div>
    <div class="nongyegaikuang">
      <img class="image" referrerpolicy="no-referrer" src="../assets/img/ny3.png" />
      <div class="text-wrapper">
        <span class="text_31">养殖占地面积</span>
        <span class="text_32">2004亩</span>
      </div>
    </div>
    <div class="nongyegaikuang">
      <img class="image" referrerpolicy="no-referrer" src="../assets/img/ny3.png" />
      <div class="text-wrapper">
        <span class="text_31">养殖出栏数量</span>
        <span class="text_32">18541头</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  const option = ref({})

  onMounted(() => {})
</script>

<style lang="less" scoped>
  .box {
    height: 17.1875rem;
  }
  .nongyegaikuang-box {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    flex-wrap: wrap;
    margin-left: 0.8125rem;
    .nongyegaikuang {
      box-shadow: 0px 0px 0.375rem 0px rgba(98, 245, 250, 1);
      background-color: rgba(33, 86, 111, 0.3);
      width: 11.5rem;
      height: 5.0625rem;
      border: 0.0625rem solid rgba(74, 244, 250, 1);
      margin-right: 1.3rem;
      position: relative;
      .image {
        width: 3.125rem;
        height: 3.125rem;
        margin: 0.8125rem 0 0 0.125rem;
      }

      .text-wrapper {
        width: 4.5rem;
        height: 2.9375rem;
        margin: 0.6875rem 3.75rem 0 1.0625rem;
        position: absolute;
        top: 0;
        left: 2.875rem;
      }
      .text_31 {
        color: rgba(255, 255, 255, 1);
        font-size: 1rem;
        font-weight: 700;
        text-align: left;
        white-space: nowrap;
        margin-top: -0.375rem;
      }

      .text_32 {
        color: rgba(255, 225, 29, 1);
        font-size: 1rem;
        font-weight: 700;
        text-align: left;
        white-space: nowrap;
        margin-top: 0.875rem;
      }
    }
  }
</style>