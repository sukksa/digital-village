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
  const damidata = ref(Array.from({ length: 6 }, () => Math.floor(Math.random() * 1400)))
  const shucaidata = ref(Array.from({ length: 6 }, () => Math.floor(Math.random() * 1400)))
  const initChart = () => {
    if (chartRef.value) {
      var myChart = echarts.init(chartRef.value)
      var option = {
        center: ['100%', '0%'],
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            return params
              .map(item => {
                return `${item.seriesName}: ${item.value}吨`
              })
              .join('<br/>')
          },
        },
        legend: {
          data: ['供应', '需求'],
          itemGap: 84, // 新增间距配置（默认10）
          icon: 'rent',
          textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 700,
          },
          itemWidth: 12,
          itemHeight: 12,
          top: 16,
          left: 44,
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
            // name: '单位：吨',
            min: 0,
            max: 1400,
            nameLocation: 'end', // 新增
            // position: 'right',   // 新增
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
            name: '单位：吨',
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
            name: '供应',
            type: 'line',
            showSymbol: false,
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              color: 'rgba(253, 167, 31, 0.75)',
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(253, 167, 31,0.8)',
                },
                {
                  offset: 1,
                  color: 'rgba(253, 167, 31,0)',
                },
              ]),
            },
            data: damidata.value,
          },
          {
            name: '需求',
            type: 'line',
            showSymbol: false,
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              color: 'rgba(85, 141, 255, 0.75)',
              borderColor: 'rgba(85, 141, 255, 1)', // 边框颜色（不透明）
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(85, 141, 255,0.8)',
                },
                {
                  offset: 1,
                  color: 'rgba(85, 141, 255,0)',
                },
              ]),
            },
            data: shucaidata.value,
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