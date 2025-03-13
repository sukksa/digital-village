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
  const xAxisData = ref(['2016', '2017', '2018', '2019', '2020', '2021'])
  const damidata = ref(Array.from({ length: 6 }, () => Math.floor(Math.random() * 24)))
  const shucaidata = ref(Array.from({ length: 6 }, () => Math.floor(Math.random() * 24)))
  const initChart = () => {
    if (chartRef.value) {
      var myChart = echarts.init(chartRef.value)
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          formatter: function (params) {
            return params
              .map(item => {
                return `${item.seriesName}: ${item.value}家` // "家"为单位
              })
              .join('<br/>')
          },
        },
        center: ['100%', '0%'],
        legend: {
          data: ['学校', '图书室'],
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
          left: 148,
        },
        xAxis: [
          {
            type: 'category',
            data: xAxisData.value,
            // boundaryGap: false, // 取消坐标轴留白
            // axisPointer: {
            //   type: 'shadow',
            // },
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
            name: '',
            min: 0,
            max: 24,
            // nameLocation: 'end', // 新增
            // position: 'right',   // 新增
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
            name: '学校',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              color: '#FDA71F',
            },
            data: damidata.value,
          },
          {
            name: '图书室',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              color: '#19C1E5',
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