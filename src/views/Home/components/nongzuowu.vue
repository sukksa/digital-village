<template>
  <div class="box">
    <!-- <div ref="chartRef" class="chart"></div> -->
    <div class="left-box">
      <div class="left-title">
        农作物占地分析
      </div>
      <div class="left">
        <div class="left-item" v-for="item,index in data" :key="index">
          <div class="name">{{ item.name }}</div>
          <div class="number" v-if="index===0" style="color: #F8E474">{{ item.number }}亩</div>
          <div class="number" v-else-if="index===1" style="color:#79E96A">{{ item.number }}亩</div>
          <div class="number" v-else-if="index===2" style="color: #47B6EF">{{ item.number }}亩</div>
        </div>
        <div class="chart-title" style="color: #85D5FE;">增长分析曲线</div>
        <div class="chart" ref="chartRef">
        </div>
      </div>
    </div>
    <div class="right-box">
      <div class="right-title">
        作物分类
      </div>
      <div class="pie">
        <highcharts :options="chartOptions"></highcharts>
      </div>
      <div class="catecogy-box">
        <div class="catecogy" v-for="(item, index) in pie_data" :key="index">
          <div class="icon" :style="{ backgroundColor: item[2] }"></div>
          <div class="c-name">
            {{ item[0] }}
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
  const option = ref({})
  const myChart = ref({})
  const data = ref([
    {
      name: '粮油作物占地',
      number: 2418,
    },
    {
      name: '经济作物占地',
      number: 2301,
    },
    {
      name: '本年度增长',
      number: 984,
    },
  ])
  const pie_data = ref([
    ['水果类', 0.12, '#E3C240'],
    ['饲料类', 0.23, '#C6FD7A'],
    ['蔬菜类', 0.35, '#FC6019'],
    ['油料类', 0.1, '#077CF4'],
    ['药用类', 0.08, '#3CD255'],
    ['粮食类', 0.09, '#FC8DF0'],
    ['其他', 0.03, '#24D4F4'],
  ])
  const z_init = () => {
    if (chartRef.value) {
      var myChart = echarts.init(chartRef.value)
      var option
      option = {
        center: ['0%', '0%'],
        grid: {
          top: 15, // 上边距
          bottom: 10, // 下边距
          left: 0, // 左边距（为y轴标签留空间）
          containLabel: true, // 确保标签包含在grid内
        },
        xAxis: {
          type: 'category',
          data: ['2022', '2023', '2024'],
          axisLine: {
            show: true, // 显示轴线
            lineStyle: {
              color: '#86D5FE', // 轴线颜色
              width: 1, // 轴线粗细
            },
          },
          boundaryGap: false, // 取消坐标轴留白
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 200,
          interval: 100,
          axisLabel: {
            color: '#fff',
            fontSize: 12,
            margin: 8,
            // formatter: value => value.toFixed(0), // 确保整数显示
          },
          axisLine: {
            show: true, // 显示轴线
            lineStyle: {
              color: '#86D5FE', // 轴线颜色
              width: 1, // 轴线粗细
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            symbol: 'none', // 新增这行配置
            data: [100, 130, 200],
            type: 'line',
          },
        ],
      }

      option && myChart.setOption(option)
    }
  }

  const chartOptions = ref({
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 60,
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
    colors: pie_data.value.map(item => item[2]),
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
        innerSize: '90%',
        depth: 10,
        dataLabels: {
          enabled: true,
          connectorWidth: 0, // 隐藏连接线
          formatter: function () {
            return `${this.percentage.toFixed(2)}%`
          }, // 只显示百分比
          style: {
            color: '#fff', // 文字颜色
            fontSize: '12px',
            textOutline: 'none', // 去除文字描边
            // fontWeight: 'bold',
          },
          distance: -10, // 将标签移动到饼图内部
          align: 'center', // 居中对齐
          verticalAlign: 'middle',
        },
      },
    },
    allowPointSelect: true,
    series: [
      {
        name: '',
        data: pie_data.value.map(item => [item[0], item[1]]),
      },
    ],
  })
  onMounted(() => {
    z_init()
  })
</script>

<style lang="less" scoped>
  .chart {
    width: 12rem;
    height: 6rem;
    // margin-left: 0.2rem;
  }
  .box {
    display: flex;
    justify-content: space-between;
    margin-left: 1rem;
  }
  .left-box {
    .left-title {
      width: 12.5rem;
      font-weight: 400;
      font-size: 1rem;
      color: #ffffff;
      margin-top: 0.625rem;
      margin-bottom: 1rem;
    }
    .left-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      .number {
        margin-left: 0.75rem;
      }
    }
  }
  .right-box {
    width: 12.5rem;
    position: relative;
    .right-title {
      font-weight: 400;
      font-size: 1rem;
      color: #ffffff;
      margin-top: 0.625rem;
      // margin-bottom: 1.5rem;
    }
    .pie {
      width: 15.4375rem;
      height: 8.375rem;
      position: absolute;
      top: -6rem;
      left: -2rem;
    }
    .catecogy-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 7.5rem;
      .catecogy {
        display: flex;
        align-items: center;
        width: 6.25rem;

        .icon {
          width: 1.125rem;
          height: 0.625rem;
          margin-right: 0.625rem;
        }
        .c-name {
          font-weight: 400;
          font-size: 0.875rem;
          color: #ffffff;
        }
      }
    }
  }
</style>