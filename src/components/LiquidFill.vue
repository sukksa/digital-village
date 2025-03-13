<template>
  <div ref="chartContainer" :style="{width: size, height: size}"></div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import * as echarts from 'echarts'
  import 'echarts-liquidfill'
  import { color } from 'highcharts'
  const props = defineProps({
    percentage: { type: Number, default: 0.5 }, // 百分比值
    size: { type: String, default: '4rem' }, // 圆形直径
    bgColor: { type: String, default: '#e0e0e0' }, // 背景色
    waveColor: { type: String, default: '#41b883' }, // 波浪颜色
    speed: { type: Number, default: 4 }, // 波浪动画速度
  })
  const chartContainer = ref(null)
  let chartInstance = null

  onMounted(() => {
    initChart()
  })

  onUnmounted(() => {
    if (chartInstance) {
      chartInstance.dispose()
    }
  })

  const initChart = () => {
    chartInstance = echarts.init(chartContainer.value)

    const option = {
      series: [
        {
          type: 'liquidFill',
          data: [props.percentage], // 水球比例（0-1）
          radius: '80%',
          outline: {
            show: false, // 是否显示轮廓
          },
          backgroundStyle: {
            color: props.bgColor, // 背景色
          },
          label: {
            position: ['50%', '50%'],
            fontSize: 14,
            color: '#fff',
            formatter: ({ value }) => `${value * 100}%`, // 自定义标签
          },
          color: [props.waveColor], // 水球颜色
          waveAnimation: true, // 启用波浪动画
        },
      ],
    }

    chartInstance.setOption(option)
  }
</script>