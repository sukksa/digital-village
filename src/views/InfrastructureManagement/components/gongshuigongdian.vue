<template>
  <div style="position:relative">
    <div class="box">
      <div ref="chartRef" class="chart"></div>
      <div class="text">7月11日18点至18：42分出现电路故障及时进行了抢修。</div>
    </div>

  </div>

</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as echarts from 'echarts'
  const chartRef = ref(null)
  const option = ref({})
  const myChart = ref({})
  const xAxisData = ref(['7.10', '7.11', '7.12', '7.13', '7.14', '7.15', '7.16'])
  const data = ref([24, 22, 24, 24, 24, 24, 24])
  const initChart = () => {
    if (chartRef.value) {
      var myChart = echarts.init(chartRef.value)
      var option = {
        center: ['100%', '0%'],
        tooltip: {
          trigger: 'axis',
          // 可以在这里添加更多 tooltip 配置
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        grid: {
          top: '20%',
          backgroundColor: 'rgba(49,43,177,0.8)', // 带透明度
          borderWidth: 0,
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
            name: '单位：小时',
            min: 0,
            max: 24,
            // nameLocation: 'end', // 新增
            position: 'left', // 新增
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
            name: '时间',
            type: 'line',
            showSymbol: false,
            // smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              color: 'rgba(73, 25, 229, 1)',
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(73, 25, 229,0.8)',
                },
                {
                  offset: 1,
                  color: 'rgba(73, 25, 229,0)',
                },
              ]),
            },
            data: data.value,
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
    height: 14.75rem;
    // margin-left: -3rem;
    // margin: auto;
  }
  .text {
    margin-top: -2rem;
    margin-left: 2rem;
    font-weight: 400;
    font-size: 0.875rem;
    color: #ffffff;
  }
</style>