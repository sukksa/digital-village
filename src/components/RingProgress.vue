<template>
  <div :style="{width, height}" ref="chartRef" class="chart-container"></div>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import * as echarts from 'echarts'

  const chartRef = ref(null)
  let chartInstance = null

  const props = defineProps({
    // 进度值（0-100）
    progress: {
      type: Number,
      default: 75,
      validator: value => value >= 0 && value <= 100,
    },
    bgcolor: {
      type: String,
      default: '255, 255, 255',
    },
    width: {
      type: String,
      default: '3.5rem',
    },
    height: {
      type: String,
      default: '3.5rem',
    },
  })

  const initChart = () => {
    if (!chartRef.value) return

    const option = {
      title: {
        text: `${props.progress}%`,
        left: 'center',
        top: 'center',
        textStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          color: `rgba(${props.bgcolor}, 1)`,
        },
      },
      series: [
        {
          type: 'pie',
          radius: ['85%', '95%'], // 内外半径控制环形宽度
          startAngle: 90, // 起始角度（12点钟方向）
          hoverAnimation: false,
          silent: true,
          label: {
            show: false,
          },
          itemStyle: {
            borderColor: 'rgba(250, 202, 74, 0)', // 边框颜色（不透明）
            borderWidth: 1, // 边框宽度
            borderType: 'solid', // 边框样式
          },
          data: [
            // 进度部分
            {
              value: props.progress,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: `rgba(${props.bgcolor}, 1)` }, // 渐变起始颜色
                  { offset: 1, color: `rgba(${props.bgcolor}, 1)` }, // 渐变结束颜色
                ]),
                borderColor: `rgba(${props.bgcolor},1)`, // 边框颜色（不透明）
                borderWidth: 2, // 边框宽度
                borderType: 'solid', // 边框样式

                // 阴影设置
                shadowBlur: 2, // 阴影模糊大小
                shadowColor: `rgba(${props.bgcolor}, 0.5)`, // 阴影颜色
                shadowOffsetX: 1, // 水平偏移量
                shadowOffsetY: 1, // 垂直偏移量
              },
            },
            // 剩余部分
            {
              value: 100 - props.progress,
              itemStyle: {
                color: `rgba(${props.bgcolor}, 0.3)`,
              },
            },
          ],
        },
      ],
      animationDuration: 1000, // 动画时长
      animationEasing: 'cubicOut', // 缓动效果
    }

    if (!chartInstance) {
      chartInstance = echarts.init(chartRef.value)
    }
    chartInstance.setOption(option)
  }

  onMounted(() => {
    initChart()
    window.addEventListener('resize', () => chartInstance?.resize())
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', () => chartInstance?.resize())
    chartInstance?.dispose()
  })
</script>

<style scoped>
</style>