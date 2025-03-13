<template>
  <div style="position: relative;">
    <div class="box">
      <div class="chart-title">
        数字乡村整体占比
      </div>
      <div class="chart">
        <highcharts :options="chartOptions"></highcharts>
      </div>
    </div>
    <div class="left-box">
      <div class="left" v-for="(item, index) in data" :key='index'>
        <div class="icon" :style="{backgroundColor:item[2]}">
        </div>
        <div class="title">{{item[0]}}</div>
        <div class="num" :style="{color:item[2]}">{{item[1]*100}}%</div>
      </div>
    </div>
    <div class="text-wrapper_42">
      <span class="paragraph_1">预计将在2025年实现青神县全县乡村的数字化，数字乡村覆盖率将达到100%
      </span>
    </div>
  </div>

</template>

<script setup>
  import { ref } from 'vue'
  const data = ref([
    ['城市', 0.18, '#FFFFFF'],
    ['城镇', 0.39, '#4EEDF9'],
    ['村落', 0.43, '#FFDF9E'],
  ])
  console.log(data.value.map(item => item[2]))
  console.log(data.value.map(item => [item[0], item[1]]))
  const chartOptions = ref({
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 75,
      },
      backgroundColor: 'transparent',
    },
    tooltip: {
      backgroundColor: '#fff',
      enabled: true, // 确保启用提示框
      formatter: function () {
        return `<b>${this.point.name}</b>: ${(this.point.y * 100).toFixed(1)}%`
      },
      style: {
        color: '#333', // 文字颜色
        fontSize: '14px',
      },
    },
    colors: data.value.map(item => item[2]),
    title: {
      text: '',
      style: {
        display: 'none',
      },
    },
    credits: {
      enabled: false, //去掉hightchats水印
    },
    // subtitle: {
    //   text: '3D donut in Highcharts',
    // },
    plotOptions: {
      pie: {
        innerSize: '85%',
        depth: 20,
        dataLabels: {
          enabled: false,
        },
      },
    },
    allowPointSelect: true,
    series: [
      {
        name: '',
        data: data.value.map(item => ({
          name: item[0],
          y: item[1],
          depth: item[1] * 40,
        })),
      },
    ],
  })
</script>

<style  lang='less' scoped>
  .box {
    // width: 21.75rem;
    // height: 16.75rem;
    position: relative;
    .chart {
      width: 14.4375rem;
      // height: 22.375rem;
      position: absolute;
      top: -4rem;
      left: 1.5rem;
      z-index: 9999;
    }
  }
  .left-box {
    width: 21.75rem;
    color: #fff;
    position: absolute;
    right: 0;
    top: 3rem;
    .left {
      display: flex;
      justify-content: right;
      align-items: center;
      margin-bottom: 1rem;
      .icon {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        margin-right: 0.4rem;
      }
      .title,
      .num {
        font-weight: 400;
        font-size: 1rem;
        color: #ffffff;
        margin-right: 0.4rem;
      }
      .num {
        width: 4rem;
      }
    }
  }

  .text-wrapper_42 {
    background-color: rgba(83, 80, 66, 0.4);
    height: 4.375rem;
    border: 0.125rem solid rgba(210, 182, 119, 1);
    margin-top: 2.9375rem;
    width: 25.25rem;
    position: absolute;
    top: 9rem;
    padding: 0.75rem;
  }
  .paragraph_1 {
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 1rem;
    text-align: left;
  }
  .chart-title {
    font-weight: 400;
    font-size: 0.75rem;
    color: #ffffff;
    position: absolute;
    top: 1.75rem;
    left: 0.75rem;
  }
</style>