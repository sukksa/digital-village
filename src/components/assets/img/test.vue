<template>
  <div class="box">
    <!-- <div ref="chartRef" class="chart"></div> -->
    <div class="left-box">
      <div class="left-title">
      </div>
      <div class="left">
        <div class="left-item" v-for="item,index in data" :key="index">
          <div class="name">{{ item.name }}</div>
          <div class="number">{{ item.number }}亩</div>
        </div>
      </div>
    </div>
    <div class="right-box">
      <div class="right-title">
      </div>
      <div class="charts" ref="chartRef">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as echarts from 'echarts'
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
  .chart {
    width: 20.75rem;
    height: 12.75rem;
    margin: auto;
  }
  .box {
    display: flex;
    justify-content: space-between;
    margin-left: 1rem;
  }
  .left-box {
    .left-title {
      font-weight: 400;
      font-size: 1rem;
      color: #ffffff;
      margin-top: 0.625rem;
      margin-bottom: 1.5rem;
    }
    .left-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }
  }
  .right-title {
    font-weight: 400;
    font-size: 1rem;
    color: #ffffff;
    margin-top: 0.625rem;
    // margin-bottom: 1.5rem;
  }
</style>