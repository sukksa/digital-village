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
  const xAxisData = ref(['2016', '2017', '2018', '2019', '2020', '2021'])
  const damidata = ref(Array.from({ length: 6 }, () => Math.floor(Math.random() * 1400)))
  const shucaidata = ref(Array.from({ length: 6 }, () => Math.floor(Math.random() * 1400)))
  const rgsddata = ref(Array.from({ length: 6 }, () => Math.floor(Math.random() * 1400)))
  const yldata = ref(Array.from({ length: 6 }, () => Math.floor(Math.random() * 1400)))
  const initChart = () => {
    if (chartRef.value) {
      var myChart = echarts.init(chartRef.value)
      var option = {
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            return params
              .map(item => {
                return `${item.seriesName}: ${item.value}亩`
              })
              .join('<br/>')
          },
        },
        grid: { top: '25%' },
        center: ['100%', '0%'],
        legend: {
          data: ['公园', '绿化带', '人工湿地', '园林'],
          itemGap: 44, // 新增间距配置（默认10）
          icon: 'rent',
          textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 700,
          },
          itemWidth: 12,
          itemHeight: 12,
          top: 12,
          left: 36,
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
            // name: '单位：家',
            min: 0,
            max: 1400,
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
            name: '单位：亩',
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
            name: '公园',
            type: 'bar',
            showSymbol: false,
            smooth: true,
            barWidth: 10,
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              color: '#37F8FF',
            },
            data: damidata.value,
          },
          {
            name: '绿化带',
            type: 'bar',
            barWidth: 10,
            showSymbol: false,
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              color: '#22EA64',
            },
            data: shucaidata.value,
          },
          {
            name: '人工湿地',
            type: 'bar',
            barWidth: 10,
            showSymbol: false,
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              color: '#F0FA44',
            },
            data: rgsddata.value,
          },
          {
            name: '园林',
            type: 'bar',
            barWidth: 10,
            showSymbol: false,
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              color: '#0D50E0',
            },
            data: yldata.value,
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