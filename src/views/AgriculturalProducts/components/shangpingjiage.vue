<template>
  <div style="position:relative">
    <div class="box">
      <div ref="chartRef" class="chart"></div>
    </div>

  </div>

</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as echarts from 'echarts'
  const chartRef = ref(null)
  const option = ref({})
  const myChart = ref({})
  const xAxisData = ref([
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
  ])
  const damidata = ref(Array.from({ length: 12 }, () => Math.floor(Math.random() * 23) + 2))
  const shucaidata = ref(Array.from({ length: 12 }, () => Math.floor(Math.random() * 23) + 2))
  const yadata = ref(Array.from({ length: 12 }, () => Math.floor(Math.random() * 23) + 2))
  const nmdata = ref(Array.from({ length: 12 }, () => Math.floor(Math.random() * 23) + 2))
  const hnrdata = ref(Array.from({ length: 12 }, () => Math.floor(Math.random() * 23) + 2))
  const jrdata = ref(Array.from({ length: 12 }, () => Math.floor(Math.random() * 23) + 2))
  const initChart = () => {
    if (chartRef.value) {
      var myChart = echarts.init(chartRef.value)
      var option = {
        center: ['110%', '0%'],
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            return params
              .map(item => {
                return `${item.seriesName}: ${item.value}元`
              })
              .join('<br/>')
          },
        },
        legend: {
          data: ['大米', '当季蔬菜', '绿头鸭', '柠檬', '黄牛肉', '生态鸡肉'],
          icon: 'line',
          textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 700,
          },
          itemWidth: 24,
          itemGap: 30,
          // itemHeight: 12,
          top: 24,
          left: 100,
        },
        xAxis: [
          {
            type: 'category',
            data: xAxisData.value,
            boundaryGap: false, // 取消坐标轴留白
            axisPointer: {
              type: 'shadow',
            },
            axisLine: {
              show: true, // 显示轴线
              lineStyle: {
                color: '#22A5F0', // 轴线颜色
                width: 1, // 轴线粗细
              },
            },
            axisLabel: {
              formatter: '{value}',
              color: '#fff',
              showMinLabel: true,
              showMaxLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            // name: '人口增长情况',
            min: 0,
            max: 24,
            interval: 4,
            axisLabel: {
              formatter: '{value}',
              color: '#fff',
            },
            axisLine: {
              show: true, // 显示轴线
              lineStyle: {
                color: '#22A5F0', // 轴线颜色
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
        ],
        series: [
          {
            name: '大米',
            type: 'line',
            showSymbol: false,
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              symbol: 'none',
              color: 'rgba(55, 248, 255, 1)',
              borderColor: 'rgba(55, 248, 255, 1)',
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式
            },
            lineStyle: {
              width: 3,
              shadowBlur: 4,
              shadowColor: 'rgba(55,248,255,1)', // 更深阴影
              shadowOffsetY: 2,
              // 添加渐变效果（可选）
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(55,248,255,1)' },
                { offset: 1, color: 'rgba(55,248,255,0.5)' },
              ]),
            },
            // areaStyle: {
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     {
            //       offset: 0,
            //       color: 'rgba(55, 248, 255,0.8)',
            //     },
            //     {
            //       offset: 1,
            //       color: 'rgba(55, 248, 255,0)',
            //     },
            //   ]),
            // },
            data: damidata.value,
          },
          {
            name: '当季蔬菜',
            type: 'line',
            showSymbol: false,
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              symbol: 'none',
              // color: '#FACA4A',
              color: 'rgba(34, 234, 100, 0.75)',
              borderColor: 'rgba(34, 234, 100, 1)', // 边框颜色（不透明）
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式
            },
            lineStyle: {
              width: 3,
              shadowBlur: 4,
              shadowColor: 'rgba(34, 234, 100,1)', // 更深阴影
              shadowOffsetY: 2,
              // 添加渐变效果（可选）
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(34, 234, 100,1)' },
                { offset: 1, color: 'rgba(34, 234, 100,0.5)' },
              ]),
            },
            // areaStyle: {
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     {
            //       offset: 0,
            //       color: 'rgba(34, 234, 100,0.8)',
            //     },
            //     {
            //       offset: 1,
            //       color: 'rgba(34, 234, 100,0)',
            //     },
            //   ]),
            // },
            data: shucaidata.value,
          },
          {
            name: '绿头鸭',
            smooth: true,
            showSymbol: false,
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              symbol: 'none',
              color: 'rgba(255, 255, 255, 0.75)',
              borderColor: 'rgba(255, 255, 255,  1)', // 边框颜色（不透明）
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式
            },
            lineStyle: {
              width: 3,
              shadowBlur: 4,
              shadowColor: 'rgba(255, 255, 255,1)', // 更深阴影
              shadowOffsetY: 2,
              // 添加渐变效果（可选）
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(255, 255, 255,1)' },
                { offset: 1, color: 'rgba(255, 255, 255,0.5)' },
              ]),
            },
            // areaStyle: {
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     {
            //       offset: 0,
            //       color: 'rgba(255, 255, 255,0.8)',
            //     },
            //     {
            //       offset: 1,
            //       color: 'rgba(255, 255, 255,0)',
            //     },
            //   ]),
            // },
            data: yadata.value,
          },
          {
            name: '柠檬',
            smooth: true,
            showSymbol: false,
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              symbol: 'none',
              color: 'rgba(240, 250, 68, 0.75)',
              borderColor: 'rgba(240, 250, 68,  1)', // 边框颜色（不透明）
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式
            },
            lineStyle: {
              width: 3,
              shadowBlur: 4,
              shadowColor: 'rgba(240, 250, 68,1)', // 更深阴影
              shadowOffsetY: 2,
              // 添加渐变效果（可选）
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(240, 250, 68,1)' },
                { offset: 1, color: 'rgba(240, 250, 68,0.5)' },
              ]),
            },
            // areaStyle: {
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     {
            //       offset: 0,
            //       color: 'rgba(240, 250, 68,0.8)',
            //     },
            //     {
            //       offset: 1,
            //       color: 'rgba(240, 250, 68,0)',
            //     },
            //   ]),
            // },
            data: nmdata.value,
          },
          {
            name: '黄牛肉',
            smooth: true,
            type: 'line',
            showSymbol: false,
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              symbol: 'none',
              color: 'rgba(229, 89, 20, 0.75)',
              borderColor: 'rgba(229, 89, 20,  1)', // 边框颜色（不透明）
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式
            },
            lineStyle: {
              width: 3,
              shadowBlur: 4,
              shadowColor: 'rgba(229, 89, 20,1)', // 更深阴影
              shadowOffsetY: 2,
              // 添加渐变效果（可选）
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(229, 89, 20,1)' },
                { offset: 1, color: 'rgba(229, 89, 20,0.5)' },
              ]),
            },
            // areaStyle: {
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     {
            //       offset: 0,
            //       color: 'rgba(229, 89, 20,0.8)',
            //     },
            //     {
            //       offset: 1,
            //       color: 'rgba(229, 89, 20,0)',
            //     },
            //   ]),
            // },
            data: hnrdata.value,
          },
          {
            name: '生态鸡肉',
            smooth: true,
            type: 'line',
            showSymbol: false,
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              symbol: 'none',
              color: 'rgba(13, 80, 224, 0.75)',
              borderColor: 'rgba(13, 80, 224,  1)', // 边框颜色（不透明）
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式
            },
            lineStyle: {
              width: 3,
              shadowBlur: 4,
              shadowColor: 'rgba(13, 80, 224,1)', // 更深阴影
              shadowOffsetY: 2,
              // 添加渐变效果（可选）
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(13, 80, 224,1)' },
                { offset: 1, color: 'rgba(13, 80, 224,0.5)' },
              ]),
            },
            // areaStyle: {
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     {
            //       offset: 0,
            //       color: 'rgba(13, 80, 224,0.8)',
            //     },
            //     {
            //       offset: 1,
            //       color: 'rgba(13, 80, 224,0)',
            //     },
            //   ]),
            // },
            data: jrdata.value,
          },
        ],
      }

      option && myChart.setOption(option)
    }
  }
  onMounted(() => {
    initChart()
  })
</script>

<style lang="less" scoped>
  .chart {
    width: 60.75rem;
    height: 18.75rem;
    margin-left: -3rem;
    // margin: auto;
  }
</style>