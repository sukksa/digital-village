<template>
  <div class="box">
    <div ref="chartRef" class="chart"></div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as echarts from 'echarts'
  const chartRef = ref(null)

  onMounted(() => {
    if (chartRef.value) {
      var myChart = echarts.init(chartRef.value)
      var option
      option = {
        // silent: true,
        tooltip: {
          // 新增tooltip配置
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          formatter: function (params) {
            return params
              .map(item => {
                return `${item.seriesName}: ${item.value}亩`
              })
              .join('<br/>')
          },
        },
        center: ['40%', '50%'],
        legend: {
          // data: ['耕地面积', '种植地面积', '住宅地面积', '土地变动'],
          data: [
            {
              name: '耕地面积',
              icon: 'rent',
              textStyle: {
                color: '#fff',
                fontSize: 14,
                fontWeight: 700,
              },
            },
            {
              name: '种植地面积',
              icon: 'rent',
              textStyle: {
                color: '#fff',
                fontSize: 12,
                fontWeight: 700,
              },
            },
            {
              name: '住宅地面积',
              icon: 'rent',
              textStyle: {
                color: '#fff',
                fontSize: 14,
                fontWeight: 700,
              },
            },
            {
              name: '土地变动',
              icon: 'rent',
              textStyle: {
                color: '#fff',
                fontSize: 14,
                fontWeight: 700,
              },
            },
          ],
          itemWidth: 12, // 新增
          itemHeight: 12,
        },
        xAxis: [
          {
            type: 'category',
            data: ['2016', '2017', '2018', '2019', '2020', '2021'],
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
            name: '单位：亩',
            min: 0,
            max: 9000,
            interval: 1000,
            axisLabel: {
              formatter: '{value}',
              color: '#fff',
            },
            axisLine: {
              show: true, // 显示轴线
              lineStyle: {
                color: '#fff', // 轴线颜色
                width: 1, // 轴线粗细
              },
            },
            nameTextStyle: {
              color: '#fff', // 单位名称颜色
            },
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
            name: '耕地面积',
            type: 'bar',

            itemStyle: {
              color: 'rgba(250, 202, 74, 0.75)',
              borderColor: 'rgba(250, 202, 74, 1)', // 边框颜色（不透明）
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
            name: '种植地面积',
            type: 'bar',

            itemStyle: {
              // color: '#FACA4A',
              color: 'rgba(74, 250, 103, 0.75)',
              borderColor: 'rgba(74, 250, 103, 1)', // 边框颜色（不透明）
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
            name: '住宅地面积',
            type: 'bar',

            itemStyle: {
              color: 'rgba(74, 244, 250, 0.75)',
              borderColor: 'rgba(74, 244, 250,  1)', // 边框颜色（不透明）
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
            name: '土地变动',
            type: 'line',
            // yAxisIndex: 1,

            itemStyle: {
              color: 'rgba(249, 36, 71, 1)',
              borderColor: 'rgba(249, 36, 71,  1)', // 边框颜色（不透明）
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式
            },
            data: [4000, 6500, 6800, 6689, 7358, 7894],
          },
        ],
      }

      option && myChart.setOption(option)
    }
  })
</script>

<style lang="less" scoped>
  .chart {
    width: 25.75rem;
    height: 18.75rem;
    margin: auto;
  }
</style>