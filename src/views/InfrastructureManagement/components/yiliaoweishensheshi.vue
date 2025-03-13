<template>
  <div style="position:relative">
    <div class="box">
      <div class="left">
        <div class="title">医疗卫生设施历年变化</div>
        <div ref="chartRef" class="chart"></div>
      </div>
      <div class="right">
        <div class="title">
          农业生产污水处理设施运转情况
        </div>
        <div ref="chartRefBar" class="chart bar"></div>
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
  const chartRefBar = ref(null)
  const optionBar = ref({})
  const myChartBar = ref({})
  const xAxisData = ref(['2016', '2017', '2018', '2019', '2020', '2021'])
  const data = ref([8, 10, 12, 14, 14, 18, 20])
  const wsdata = ref([8, 10, 14, 16, 18, 20, 22])
  const cldata = ref([8, 10, 12, 14, 14, 18, 20])
  const initChart = () => {
    if (chartRef.value) {
      var myChart = echarts.init(chartRef.value)
      var option = {
        center: ['50%', '0%'],
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
          top: '5%',
          left: '5%',
          right: '15%',
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
            // name: '单位：小时',
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
            name: '医疗卫生设施',
            type: 'line',
            showSymbol: false,
            // smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value
              },
            },
            itemStyle: {
              color: 'rgba(25, 193, 229, 1)',
              borderWidth: 3, // 边框宽度
              borderType: 'solid', // 边框样式
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(25, 193, 229,0.8)',
                },
                {
                  offset: 1,
                  color: 'rgba(25, 193, 229,0)',
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

  const initChartBar = () => {
    if (chartRefBar.value) {
      var myChartBar = echarts.init(chartRefBar.value)
      var optionBar = {
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
          data: [
            {
              name: '污水',
              itemStyle: { color: 'rgba(114, 73, 250, 1)' }, // 单独设置颜色
            },
            {
              name: '处理',
              itemStyle: { color: 'rgba(73, 206, 250, 1)' },
            },
          ],
          itemGap: 14, // 新增间距配置（默认10）
          icon: 'circle',
          textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 700,
          },
          itemWidth: 12,
          itemHeight: 12,
          top: -5,
          left: 70,
        },
        grid: {
          left: '0%',
          right: '4%',
          bottom: '5%',
          top: '8%',
          containLabel: true,
        },
        xAxis: {
          show: false,
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLine: {
            show: false, // 显示轴线
            lineStyle: {
              color: '#22A5F0', // 轴线颜色
              width: 1, // 轴线粗细
            },
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: 'category',
          data: xAxisData.value.reverse(),
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            formatter: '{value}',
            color: '#fff',
          },
        },
        series: [
          {
            name: '污水',
            type: 'bar',
            data: wsdata.value,
            label: {
              // 新增标签配置
              show: true,
              position: 'right', // 定位到柱子右侧
              color: '#fff', // 白色文字
              fontSize: 12,
              fontWeight: 'bold',
              formatter: '{c}吨', // 显示原始数值
            },
            itemStyle: {
              barBorderRadius: [0, 20, 20, 0],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: 'rgba(114, 73, 250,0)',
                },
                {
                  offset: 0.2,
                  color: 'rgba(114, 73, 250,0.6)',
                },
                {
                  offset: 1,
                  color: 'rgba(114, 73, 250,1)',
                },
              ]),
            },
          },
          {
            name: '处理',
            type: 'bar',
            data: cldata.value,
            label: {
              // 新增标签配置
              show: true,
              position: 'right', // 定位到柱子右侧
              color: '#fff', // 白色文字
              fontSize: 12,
              fontWeight: 'bold',
              formatter: '{c}吨', // 显示原始数值
            },
            itemStyle: {
              barBorderRadius: [0, 20, 20, 0],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: 'rgba(73, 206, 250,0)',
                },
                {
                  offset: 0.4,
                  color: 'rgba(73, 206, 250,0.3)',
                },
                {
                  offset: 1,
                  color: 'rgba(73, 206, 250,1)',
                },
              ]),
            },
          },
        ],
      }

      optionBar && myChartBar.setOption(optionBar)
    }
  }
  onMounted(() => {
    initChart()
    initChartBar()
  })
</script>

<style lang="less" scoped>
  .chart {
    width: 30.75rem;
    height: 15.75rem;
    margin-top: 0.5rem;
    // margin: auto;
  }
  .text {
    margin-top: -2rem;
    margin-left: 2rem;
    font-weight: 400;
    font-size: 0.875rem;
    color: #ffffff;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    font-size: 1rem;
    color: #fffffb;
    .left {
      .title {
        margin-top: 1rem;
        margin-left: 2rem;
      }
    }
    .right {
      .bar {
        height: 15rem;
        width: 28rem;
      }
    }
  }
</style>