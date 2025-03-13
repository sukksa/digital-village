<template>
  <div style="position: relative;">
    <div class="pie3d">
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>

</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  const props = defineProps({
    data: {
      type: Array,
      default: () => [
        { name: '满意', y: 72, color: '#4BED4B' },
        { name: '未评价', y: 10, color: '#F7B42C' },
        { name: '不满意', y: 8, color: '#E9FB71' },
      ],
    },
  })

  const data = ref([
    { name: '未评价', y: 10, color: '#F7B42C' },
    { name: '不满意', y: 8, color: '#E9FB71' },
    { name: '满意', y: 72, color: '#4BED4B' },
  ])

  const chartOptions = ref({
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 75, // 3D倾斜角度
        beta: 0,
        // viewDistance: 60,
      },
      backgroundColor: 'transparent', // 透明背景
    },
    title: { text: '' },
    credits: { enabled: false },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 50, // 饼图厚度
        dataLabels: {
          enabled: false,
          // format: '{point.name}: {point.percentage:.1f}%',
          // format: '{point.name}',
          // style: {
          //   color: '#fff',
          //   fontSize: '14px',
          //   textOutline: 'none',
          // },
        },
        slicedOffset: 25, // 分离距离
        showInLegend: false,
      },
    },
    series: [
      {
        name: '满意度',
        colorByPoint: true,
        data: data.value.map(item => ({
          ...item,
          sliced: true, // 默认全部分离
        })),
      },
    ],
  })
  // let chart = null

  // onMounted(() => {
  //   if (!chartContainer.value) return
  // })

  // onBeforeUnmount(() => {
  //   if (chart) chart.destroy()
  // })
</script>

<style lang='less'  scoped>
  .pie3d {
    width: 9.5rem;
    // height: 22.375rem;
    position: absolute;
    top: -8.75rem;
    left: -1.25rem;
  }
</style>