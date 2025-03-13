<template>
  <div style="position: relative;">
    <div class="box">

      <div class="chart">
        <highcharts style="height: 14rem;" :options="chartOptions"></highcharts>
      </div>
    </div>
    <div class="left-box">
      <div class="left" v-for="(item, index) in data" :key='index'>
        <div class="left-item">
          <div class="icon" :style="{backgroundColor:item[2]}">
          </div>
          <div class="title">{{item[0]}}</div>
        </div>

        <div class="num">{{item[1]*100}}%</div>
      </div>
    </div>
  </div>

</template>

<script setup>
  import { ref } from 'vue'
  const data = ref([
    ['灌溉设施', 0.16, '#1BCEB0'],
    ['耕地设施', 0.37, '#EDC556'],
    ['引水设施', 0.18, '#2374F7'],
    ['务农设施', 0.19, '#0FD68A'],
    ['施肥设施', 0.06, '#37D35C'],
    ['储水设施', 0.06, '#8DF283'],
  ])

  const chartOptions = ref({
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 50,
        beta: 0,
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
        // innerSize: '75%',
        depth: 10,
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
          depth: item[1] * 100,
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
    .img {
      position: absolute;
      width: 17.4375rem;
      height: 12.375rem;
      top: 3.5rem;
    }
    .chart {
      width: 14.4375rem;
      // height: 16.375rem;
      position: absolute;
      top: 2rem;
      left: 1.5rem;
      z-index: 9999;
    }
  }
  .left-box {
    width: 21.75rem;
    color: #fff;
    position: absolute;
    right: 0;
    top: 1.75rem;
    .left-item {
      display: flex;
      width: 6rem;
      justify-content: left;
      align-items: center;
    }
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
        font-weight: 600;
      }
    }
  }
</style>