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
  const xAxisData = ref(['一月', '二月', '三月', '四月', '五月', '六月'])
  const labeldata = ref(['大米', '当季蔬菜', '绿头鸭', '柠檬', '黄牛肉', '生态鸡肉'])
  const damidata = ref(Array.from({ length: 12 }, () => Math.floor(Math.random() * 1400)))
  const shucaidata = ref(Array.from({ length: 12 }, () => Math.floor(Math.random() * 1400)))
  const yadata = ref(Array.from({ length: 12 }, () => Math.floor(Math.random() * 1400)))
  const nmdata = ref(Array.from({ length: 12 }, () => Math.floor(Math.random() * 1400)))
  const hnrdata = ref(Array.from({ length: 12 }, () => Math.floor(Math.random() * 1400)))
  const jrdata = ref(Array.from({ length: 12 }, () => Math.floor(Math.random() * 1400)))
  const initChart = () => {
    if (chartRef.value) {
      var myChart = echarts.init(chartRef.value)
      var option = {
        grid: { top: '30%' },
        center: ['100%', '0%'],
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            return params
              .map(item => {
                return `${item.seriesName}: ${item.value}KG`
              })
              .join('<br/>')
          },
        },
        legend: {
          data: labeldata.value,
          icon: 'rent',
          textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 700,
          },
          itemWidth: 12,
          itemHeight: 12,
          top: 16,
          left: 10,
        },
        xAxis: [
          {
            type: 'category',
            data: xAxisData.value,
            // boundaryGap: false, // 取消坐标轴留白
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
            // name: '单位：KG',
            min: 0,
            max: 1400,
            // nameLocation: 'end', // 新增
            position: 'left', // 新增
            interval: 200,
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
          {
            type: 'value',
            position: 'right',
            name: '单位：KG',
            nameLocation: 'end',
            min: 0,
            max: 1400,
            axisLabel: { show: false }, // 隐藏数值标签
            axisLine: { show: false }, // 隐藏轴线
            splitLine: { show: false }, // 隐藏分割线
            nameTextStyle: {
              color: '#fff',
              padding: [0, 0, 0, -50], // 右侧留出间距
            },
          },
        ],
        series: [
          {
            name: '大米',
            type: 'bar',
            showSymbol: false,
            barWidth: 10,
            stack: 'a',
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              color: 'rgba(55, 248, 255, 1)',
            },
            data: damidata.value,
          },
          {
            name: '当季蔬菜',
            type: 'bar',
            stack: 'a',
            showSymbol: false,
            barWidth: 10,
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              color: 'rgba(34, 234, 100, 1)',
            },
            data: shucaidata.value,
          },
          {
            name: '绿头鸭',
            barWidth: 10,
            stack: 'a',
            showSymbol: false,
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              color: 'rgba(255, 255, 255, 1)',
            },
            data: yadata.value,
          },
          {
            name: '柠檬',
            barWidth: 10,
            showSymbol: false,
            type: 'bar',
            stack: 'b',
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              color: 'rgba(240, 250, 68, 1)',
            },
            data: nmdata.value,
          },
          {
            name: '黄牛肉',
            barWidth: 10,
            type: 'bar',
            stack: 'b',
            showSymbol: false,
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              color: 'rgba(229, 89, 20, 1)',
            },
            data: hnrdata.value,
          },
          {
            name: '生态鸡肉',
            barWidth: 10,
            type: 'bar',
            stack: 'b',
            showSymbol: false,
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              color: 'rgba(13, 80, 224, 1)',
            },
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
    width: 28.75rem;
    height: 18.75rem;
    // margin-left: -3rem;
    // margin: auto;
  }
</style>