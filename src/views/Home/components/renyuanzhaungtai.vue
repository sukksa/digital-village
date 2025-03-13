<template>
  <div style="position: relative;">
    <div class="box">
      <div class="img"> <img src='../assets/img/椭圆.png' /></div>

      <div class="chart">
        <highcharts style="height: 16rem;" :options="chartOptions"></highcharts>
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
  </div>

</template>

<script setup>
  import { ref } from 'vue'
  const data = ref([
    ['务农', 0.0814, '#B6F41E'],
    ['学生', 0.2141, '#F2B955'],
    ['务工', 0.3953, '#F4E91E'],
    ['其他', 0.1912, '#2FF220'],
    ['单位', 0.1181, '#35D4F9'],
  ])
  const chartOptions = ref({
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 50,
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
        innerSize: '75%',
        depth: 45,
        dataLabels: {
          enabled: false,
        },
      },
    },
    allowPointSelect: true,
    series: [
      {
        name: '',
        data: data.value.map(item => [item[0], item[1]]),
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
      height: 14.375rem;
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
    top: 2.75rem;
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
</style>