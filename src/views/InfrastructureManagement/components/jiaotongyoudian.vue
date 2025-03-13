<template>
  <div class="box">
    <div class="img-box">
      <img src="../assets/img/car.png" alt="">
      <div class="text-box" style="margin-top: 0.85rem;">
        <div class="title">交通设施建设进程</div>
        <div class="num"><span>82.5</span>%</div>
      </div>
      <div class="text-box">
        <div class="title">邮电设施建设进程</div>
        <div class="num"><span>99.5</span>%</div>
      </div>
      <div class="text-box">
        <div class="title">交通邮电设施数字化覆盖率</div>
        <div class="num"><span>76.5</span>%</div>
      </div>
    </div>
    <div class="bottom">
      <div class="rent">
        <div class="title"> 通车道路 </div>
        <div class="num"> <span>483</span>条 </div>
      </div>
      <div class="rent">
        <div class="title"> 邮局快递点 </div>
        <div class="num"> <span>248</span>家 </div>
      </div>
      <div class="rent">
        <div class="title"> 物流覆盖面积 </div>
        <div class="num"> <span>2万</span>平方公里 </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
</script>

<style lang="less" scoped>
  .box {
    width: 27.1875rem;
    .img-box {
      position: relative;
      overflow: hidden;
      height: 11.5rem;
      width: 27.1875rem;
      > img {
        position: absolute;
        top: 2rem;
      }
      .text-box {
        display: flex;
        justify-content: space-between;
        width: 27.1875rem;
        padding-left: 7.75rem;
        height: 1.5rem;
        align-items: end;
        font-weight: 400;
        font-size: 1rem;
        color: #ffffff;
        margin-top: 2.125rem;
        span {
          font-size: 1.5rem;
          font-weight: bold;
          color: #19c1e5;
          text-shadow: 0px 0px 6px #196fe5;
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .rent {
        text-align: center;
        width: 7.75rem;
        height: 4rem;
        line-height: 1.5rem;
        background: rgba(29, 172, 205, 0.4);
        border: rgba(29, 172, 205, 1) 0.0625rem solid;
        font-weight: 400;
        font-size: 1rem;
        color: #ffffff;
        padding-top: 0.375rem;
        span {
          font-weight: bold;
          font-size: 1.5rem;
          color: #ffffff;
        }
      }
    }
  }
</style>