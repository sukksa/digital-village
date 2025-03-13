<template>
  <div class="box nongcungaikuang-box">
    <div class="nongcungaikuang">
      <img class="image" referrerpolicy="no-referrer" src="../assets/img/nc1.png" />
      <div class="text-wrapper">
        <span class="text_31">数字乡村总数</span>
        <span class="text-wrapper_24">
          <span class="text_52">2</span>
          <span class="text_53">个镇 </span>
        </span>
        <span class="text-wrapper_24">
          <span class="text_52">8</span>
          <span class="text_53">个村</span>
        </span>
      </div>
    </div>
    <div class="nongcungaikuang">
      <img class="image" referrerpolicy="no-referrer" src="../assets/img/nc2.png" />
      <div class="text-wrapper">
        <span class="text_31">数字乡村建设进程</span>
        <span class="text-wrapper_24">
          <span class="text_52">78.43</span>
          <span class="text_53">%</span>
        </span>
      </div>
    </div>
    <div class="nongcungaikuang">
      <img class="image" referrerpolicy="no-referrer" src="../assets/img/nc3.png" />
      <div class="text-wrapper">
        <span class="text_31">户籍人口总数</span>
        <span class="text-wrapper_24">
          <span class="text_52">78456</span>
          <span class="text_53">人</span>
        </span>
      </div>
    </div>
    <div class="nongcungaikuang">
      <img class="image" referrerpolicy="no-referrer" src="../assets/img/nc4.png" />
      <div class="text-wrapper">
        <span class="text_31">从事农业生产人数</span>
        <span class="text-wrapper_24">
          <span class="text_52">78456</span>
          <span class="text_53">人</span>
        </span>
      </div>
    </div>
    <div class="nongcungaikuang">
      <img class="image" referrerpolicy="no-referrer" src="../assets/img/nc5.png" />
      <div class="text-wrapper">
        <span class="text_31">每年外来人口数</span>
        <span class="text-wrapper_24">
          <span class="text_52">78456</span>
          <span class="text_53">人</span>
        </span>
      </div>
    </div>
    <div class="nongcungaikuang">
      <img class="image" referrerpolicy="no-referrer" src="../assets/img/nc6.png" />
      <div class="text-wrapper">
        <span class="text_31">每年提供产值</span>
        <span class="text-wrapper_24">
          <span class="text_52">60854237</span>
          <span class="text_53">元</span>
        </span>
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
  .nongcungaikuang-box {
    display: flex;
    align-items: center;
    // justify-content: space-between;

    flex-wrap: wrap;
    margin-left: 0.8125rem;
    .nongcungaikuang {
      box-shadow: 0px 0px 0.375rem 0px rgba(98, 245, 250, 1);
      background-color: rgba(33, 86, 111, 0.3);
      width: 11.7rem;
      height: 5.0625rem;
      border: 0.0625rem solid rgba(74, 244, 250, 1);
      // margin-left: 0.0625rem;
      position: relative;
      margin-right: 1rem;
      .image {
        width: 3.125rem;
        height: 3.125rem;
        margin: 0.8125rem 0 0 0.125rem;
      }
      .text_31 {
        color: rgba(255, 255, 255, 1);
        font-size: 1rem;
        font-weight: 700;
        text-align: left;
        white-space: nowrap;
        margin-top: -0.375rem;
      }
      .text-wrapper {
        // width: 4.8rem;
        height: 2.9375rem;
        margin: 0.6875rem 3.75rem 0 1.0625rem;
        position: absolute;
        top: 0;
        left: 2.175rem;
        .text-wrapper_24 {
          // margin-top: 14px;
          .text_52 {
            color: rgba(57, 225, 255, 1);
            font-size: 1.125rem;
            font-weight: 700;
          }

          .text_53 {
            color: rgba(255, 255, 255, 1);
            font-size: 14px;
          }
        }
      }
    }
  }
</style>