<template>
  <div class="box">
    <!-- <div ref="chartRef" class="chart"></div> -->
    <div class="title">
      <img src="../assets/img/renkou.png" />
      <div class="text">总人口 <span style="color:#FFBC36;">18672</span> 人</div>
      <div class="text">男性 <span style="color:#4EEDF9;">9332</span> 人</div>
      <div class="text">女性 <span style="color:#FF5252;">9340</span> 人</div>
    </div>
    <div class="bottom">
      <div class="left-box">
        <div class="left-title">年龄区间</div>
        <div class="left">
          <div class="ring">
            <RingProgress :progress="20" bgcolor="255, 122, 33" />
            <div class="age-box">
              <div class="age">0~17岁</div>
              <div class="num" style="color: #FF7A21;">3734</div>
            </div>
          </div>
          <div class="ring">
            <RingProgress :progress="50" bgcolor="47, 233, 64" />
            <div class="age-box">
              <div class="age">18~35岁</div>
              <div class="num" style="color: #2FE940;">9336</div>
            </div>
          </div>

          <div class="ring">
            <RingProgress :progress="30" bgcolor="255, 122, 33" />
            <div class="age-box">
              <div class="age">36~55岁</div>
              <div class="num" style="color: #F8E944;">5602</div>
            </div>
          </div>
          <div class="ring">
            <RingProgress :progress="10" bgcolor="198, 245, 244" />
            <div class="age-box">
              <div class="age">55岁以上</div>
              <div class="num" style="color: #C5F5F4;">1867</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-box">
        <div class="right-title">需要帮助人口类型</div>
        <div class="right">
          <div>
            <div class="people">孤寡老人</div>
            <div class="num">800</div>
          </div>
          <div>
            <div class="people">留守儿童</div>
            <div class="num">1800</div>
          </div>
          <div>
            <div class="people">贫困家庭</div>
            <div class="num">500</div>
          </div>
          <div>
            <div class="people">残疾人群</div>
            <div class="num">100</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as echarts from 'echarts'
  import RingProgress from '@/components/RingProgress.vue'
  const chartRef = ref(null)
  const option = ref({})
  const myChart = ref({})

  const initChart = () => {
    if (chartRef.value) {
      myChart.value = echarts.init(chartRef.value)
      option.value

      option.value && myChart.value.setOption(option.value)
    }
  }
  onMounted(() => {
    initChart()
  })
</script>

<style lang="less" scoped>
  .box {
    padding: 0 1rem;
  }
  .title {
    width: 24.5rem;
    height: 2.5rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -0.375rem;
    margin-bottom: 0.75rem;
    img {
      position: absolute;
      width: 25rem;
      height: 2.8rem;
      top: 0;
      left: 0;
    }
    .text {
      font-family: Microsoft YaHei;
      font-weight: bold;
      font-size: 1rem;
      color: #ffffff;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    .left-box {
      width: 16rem;
      .left-title {
        font-weight: 400;
        font-size: 0.875rem;
        color: #ffffff;
        margin-bottom: 1rem;
      }
      .left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .ring {
          width: 8rem;
          display: flex;
          align-items: center;
          justify-content: left;
          margin-bottom: 2rem;
          .age-box {
            font-weight: 400;
            font-size: 0.875rem;
            color: #ffffff;
            margin-left: 0.375rem;
          }
          .num {
            font-weight: 600;
          }
        }
      }
    }
    .right-box {
      font-weight: 400;
      font-size: 0.875rem;
      color: #ffffff;
      .right-title {
        margin-bottom: 1rem;
      }
      .right > div {
        display: flex;
        margin-bottom: 1rem;
        align-items: center;
        .people {
          font-weight: bold;
        }
        .num {
          margin-left: 0.75rem;
          font-weight: bold;
          font-size: 1rem;
        }
      }
    }
  }
</style>