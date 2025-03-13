<template>
  <div class="box">
    <div class="btn-list">
      <div :class="isFirstHalfYear?'btn-active':'btn-unactive'" @click='changeIsFirstHalfYear(true)'>上半年</div>
      <div :class="!isFirstHalfYear?'btn-active':'btn-unactive'" @click='changeIsFirstHalfYear(false)'>下半年</div>
    </div>
    <div ref="chartRef" class="chart"></div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as echarts from 'echarts'
  const chartRef = ref(null)
  const firstHalfYear = ref(['一月', '二月', '三月', '四月', '五月', '六月'])
  const secondHalfYear = ref(['七月', '八月', '九月', '十月', '十一月', '十二月'])
  const isFirstHalfYear = ref(true)
  let option = {}
  let myChart = {}
  const changeIsFirstHalfYear = value => {
    isFirstHalfYear.value = value
    option.xAxis[0].data = isFirstHalfYear.value ? firstHalfYear.value : secondHalfYear.value
    option && myChart.setOption(option)
  }
  onMounted(() => {
    if (chartRef.value) {
      myChart = echarts.init(chartRef.value)

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          formatter: function (params) {
            return params
              .map(item => {
                // 根据y轴索引判断单位
                const unit = item.seriesIndex < 3 ? '万元' : '%' // 前3个系列是柱状图（万元），后3个是折线图（%）
                return `${item.seriesName}: ${item.value}${unit}`
              })
              .join('<br/>')
          },
        },
        // tooltip: {
        //   trigger: 'axis',
        //   // 可以在这里添加更多 tooltip 配置
        //   axisPointer: {
        //     type: 'cross',
        //     label: {
        //       backgroundColor: '#6a7985',
        //     },
        //   },
        // },
        center: ['40%', '60%'],
        legend: {
          data: ['家禽', '农作物', '其他'],
          icon: 'rent',
          textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 700,
          },
          itemWidth: 12,
          itemHeight: 12,
          top: 24,
          left: 'center',
        },
        xAxis: [
          {
            type: 'category',
            data: firstHalfYear.value,
            axisPointer: {
              type: 'shadow',
            },
            axisLabel: {
              formatter: '{value}',
              color: '#fff',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '单位：万元',
            min: 0,
            max: 6000,
            interval: 1000,
            axisLabel: {
              formatter: '{value}',
              color: '#fff',
            },
            axisLine: {
              show: true, // 显示轴线
              lineStyle: {
                color: '#AAC6D4', // 轴线颜色
                width: 1, // 轴线粗细
              },
            },
            nameTextStyle: {
              color: '#fff', // 单位名称颜色
            }, // 新增虚线背景配置
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                color: 'rgba(255, 255, 255, 0.6)',
                width: 1,
              },
            },
          },
          {
            type: 'value',
            // name: 'Temperature',
            min: 0,
            max: 100,
            interval: 20,
            splitLine: {
              show: false,
            },
            axisLabel: {
              formatter: '{value}',
              color: '#fff',
            },
          },
        ],
        series: [
          {
            name: '家禽',
            type: 'bar',
            itemStyle: {
              color: 'rgba(236, 235, 231, 0.75)',
              borderColor: 'rgba(236, 235, 231, 1)', // 边框颜色（不透明）
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式

              // 阴影设置
              shadowBlur: 20, // 阴影模糊大小
              shadowColor: 'rgba(0, 0, 0, 0.5)', // 阴影颜色
              shadowOffsetX: 5, // 水平偏移量
              shadowOffsetY: 5, // 垂直偏移量
            },
            data: [4000, 6500, 7000, 4689, 1358, 7894, 1575],
          },
          {
            name: '农作物',
            type: 'bar',
            itemStyle: {
              // color: '#FACA4A',
              color: 'rgba(250, 252, 53, 0.75)',
              borderColor: 'rgba(250, 252, 53, 1)', // 边框颜色（不透明）
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式

              // 阴影设置
              shadowBlur: 20, // 阴影模糊大小
              shadowColor: 'rgba(0, 0, 0, 0.5)', // 阴影颜色
              shadowOffsetX: 5, // 水平偏移量
              shadowOffsetY: 5, // 垂直偏移量
            },
            data: [4000, 6500, 7500, 7689, 8358, 8894, 8575],
          },
          {
            name: '其他',
            type: 'bar',
            itemStyle: {
              color: 'rgba(136, 35, 249, 0.75)',
              borderColor: 'rgba(136, 35, 249,  1)', // 边框颜色（不透明）
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式

              // 阴影设置
              shadowBlur: 20, // 阴影模糊大小
              shadowColor: 'rgba(0, 0, 0, 0.5)', // 阴影颜色
              shadowOffsetX: 5, // 水平偏移量
              shadowOffsetY: 5, // 垂直偏移量
            },
            data: [2000, 3500, 4500, 4689, 5358, 5894, 5575],
          },
          {
            name: '家禽',
            type: 'line',
            yAxisIndex: 1,
            itemStyle: {
              color: 'rgba(236, 235, 231, 0.75)',
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(236, 235, 231,0.8)',
                },
                {
                  offset: 1,
                  color: 'rgba(236, 235, 231,0)',
                },
              ]),
            },
            data: [10, 20, 55, 60, 68, 70],
          },
          {
            name: '农作物',
            type: 'line',
            yAxisIndex: 1,
            itemStyle: {
              // color: '#FACA4A',
              color: 'rgba(250, 252, 53, 0.75)',
              borderColor: 'rgba(250, 252, 53, 1)', // 边框颜色（不透明）
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(250, 252, 53,0.8)',
                },
                {
                  offset: 1,
                  color: 'rgba(250, 252, 53,0)',
                },
              ]),
            },
            data: [10, 20, 55, 10, 98, 60],
          },
          {
            name: '其他',
            type: 'line',
            yAxisIndex: 1,
            itemStyle: {
              color: 'rgba(136, 35, 249, 0.75)',
              borderColor: 'rgba(136, 35, 249,  1)', // 边框颜色（不透明）
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(136, 35, 249,0.8)',
                },
                {
                  offset: 1,
                  color: 'rgba(136, 35, 249,0)',
                },
              ]),
            },
            data: [10, 20, 55, 60, 88, 70],
          },
        ],
      }

      option && myChart.setOption(option)
    }
  })
</script>

<style lang="less" scoped>
  .box {
    position: relative;
  }
  .chart {
    width: 25.75rem;
    height: 17.75rem;
    margin: auto;
    // margin-top: 2rem;
    position: absolute;
    top: 1.5rem;
  }
  .btn-list {
    display: flex;
    justify-content: space-between;
    width: 9rem;
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    height: 1.875rem;
    flex-wrap: nowrap;
    .btn-active {
      box-shadow: 0px 0px 0.625rem 0px rgba(59, 231, 225, 1);
      background-color: rgba(32, 153, 149, 1);
      border-radius: 0.625rem;
      height: 1.875rem;
      border: 1px solid rgba(35, 249, 241, 1);
      width: 3.75rem;
      color: rgba(255, 255, 255, 1);
      font-size: 1rem;
      font-weight: 700;
      text-align: center;
      line-height: 1.875rem;
    }
    .btn-unactive {
      background-color: rgba(32, 153, 149, 0.5);
      border-radius: 0.625rem;
      border: 1px solid rgba(35, 249, 241, 0.5);
      height: 1.875rem;
      width: 3.75rem;
      color: rgba(255, 255, 255, 1);
      font-size: 1rem;
      font-weight: 700;
      text-align: center;
      line-height: 1.875rem;
    }
  }
</style>