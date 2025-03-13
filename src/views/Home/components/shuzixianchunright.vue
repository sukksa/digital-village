<template>
  <div style="position:relative">
    <div class="box">
      <div ref="chartRef" class="chart"></div>
    </div>

    <div class="text-wrapper_42">
      <div class="text-box">
        当月系统入驻 <span style="color: #FDBC39">917</span> 人
      </div>
      <div class="text-box">
        当月系统认证 <span style="color: #50B2EB"> 886</span> 人
      </div>
      <div class="text-box">
        系统已覆盖 <span style="color: #FDBC39"> 2</span> 镇
      </div>
      <div class="text-box">
        预计覆盖 <span style="color: #50B2EB"> 16</span> 村
      </div>
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
  const data = ref([800, 450, 1200, 750, 1600, 2010])
  const initChart = () => {
    if (chartRef.value) {
      var myChart = echarts.init(chartRef.value)
      var option = {
        center: ['50%', '50%'],
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
            name: '人口增长情况',
            min: 0,
            max: 2500,
            interval: 500,
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
            type: 'line',
            smooth: true,
            symbol: 'none',
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              color: 'rgba(88, 194, 255, 0.75)',
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(88, 194, 255,0.8)',
                },
                {
                  offset: 1,
                  color: 'rgba(88, 194, 255,0)',
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
    width: 24.75rem;
    height: 14.75rem;
    margin: auto;
  }

  .text-wrapper_42 {
    background: rgba(14, 62, 90, 0.4);
    height: 4.375rem;
    border: 0.125rem solid rgba(34, 165, 240, 1);
    margin-top: 2.9375rem;
    width: 25.25rem;
    position: absolute;
    top: 9rem;
    padding: 0.75rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .text-box {
      width: 45%;
      font-weight: 400;
      font-size: 1rem;
      color: #ffffff;
      span {
        font-weight: 700;
      }
    }
  }
</style>