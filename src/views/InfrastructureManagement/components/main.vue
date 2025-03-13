<template>
  <div class="box">
    <img src="../assets/img/main.png" alt="">
    <div class="data-box">
      <div v-for="item,index in data" :key="index">
        <div class="item" :style="{top:item.top+'px',left:item.left+'px'}">
          <div style="position: relative;">
            <div class="img">
              <img src="../assets/img/main-num.png" alt="">
            </div>
            <div class="text">
              {{ item.name }}{{ item.num }}处
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as echarts from 'echarts'
  const chartRef = ref(null)
  const data = ref([
    { name: '供水供电', num: 1847, top: 8, left: 280 },
    { name: '商业服务', num: 1559, top: 12, left: 450 },
    { name: '医疗卫生', num: 689, top: 240, left: 110 },
    { name: '交通邮电', num: 1254, top: 330, left: 80 },
    { name: '农田水利', num: 2469, top: 410, left: 360 },
    { name: '园林绿化', num: 2481, top: 230, left: 560 },
    { name: '文化教育', num: 452, top: 320, left: 610 },
  ])

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
    position: relative;
    > img {
      width: 55rem;
      position: absolute;
      top: -4.5rem;
    }
    .data-box {
      position: relative;
    }
    .item {
      position: absolute;
      width: 10.125rem;
      text-align: center;
      height: 2rem;
      line-height: 2rem;
      .img {
        position: absolute;
        width: 10.125rem;
      }
      .text {
        position: relative;
        font-weight: bold;
        font-size: 1.25rem;
        color: #ffffff;
      }
    }
  }
</style>