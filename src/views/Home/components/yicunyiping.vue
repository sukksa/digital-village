
<template>
  <div class="box">
    <div ref="chartRef" class="chart"></div>
    <div class="bottom-box">
      <div class="bottom">
        <span class="text_22">今日成交</span>
        <div class="text-wrapper_134 ">
          <span class="text_23">423</span>
          <span class="text_24">笔</span>
        </div>
      </div>
      <div class="bottom">
        <span class="text_22">本周成交</span>
        <div class="text-wrapper_134 ">
          <span class="text_23">2547</span>
          <span class="text_24">笔</span>
        </div>
      </div>
      <div class="bottom">
        <span class="text_22">本月成交</span>
        <div class="text-wrapper_134 ">
          <span class="text_23">10559</span>
          <span class="text_24">笔</span>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
  import { ref, onMounted, transformVNodeArgs } from 'vue'
  import * as echarts from 'echarts'
  const chartRef = ref(null)
  const data = ref([802, 784, 1198, 775, 632])
  // const data = ref([
  //   { name: '家禽', value: 802 },
  //   { name: '水果', value: 784 },
  //   { name: '粮食', value: 1198 },
  //   { name: '有机蔬菜', value: 775 },
  //   { name: '大棚蔬菜', value: 632 },
  // ])
  onMounted(() => {
    console.log(chartRef.value)
    if (chartRef.value) {
      var myChart = echarts.init(chartRef.value)
      var option = (option = {
        // color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
        title: {
          text: '',
        },
        legend: {},
        radar: [
          {
            indicator: [
              { name: '家禽', max: 1500, value: 802 },
              { name: '水果', max: 1500, value: 784 },
              { name: '粮食', max: 1500, value: 1198 },
              { name: '有机蔬菜', max: 1500, value: 775 },
              { name: '大棚蔬菜', max: 1500, value: 632 },
            ],
            // center: ['50%', '50%'],
            radius: '70%',
            center: ['50%', '55%'],
            startAngle: 90,
            splitNumber: 8,
            shape: 'circle',
            axisName: {
              show: true,
              formatter: function (value, indicator) {
                return `{name|${value}}{value|${indicator.value}}`
              },
              rich: {
                name: {
                  color: '#FFFFFF', // 白色显示维度名称
                  fontSize: 14,
                  fontWeight: 'bold',
                  // lineHeight: 14,
                },
                value: {
                  color: '#FFE11B', // 黄色显示数值
                  fontSize: 14,
                  fontWeight: 'bold',
                  padding: [0, 0, 0, 3],
                },
              },
            },
            splitArea: {
              areaStyle: {
                color: 'transparent',
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10,
              },
            },
            axisLine: {
              symbol: 'none',
              show: false,
              lineStyle: {
                color: 'rgba(211, 253, 250, 0.8)',
              },
            },
            axisTick: {
              show: true,
              // length: 8,
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(211, 253, 250, 0.8)',
              },
            },
          },
        ],
        series: [
          {
            type: 'radar',

            emphasis: {
              lineStyle: {
                width: 4,
              },
            },
            data: [
              {
                value: data.value,
                label: {
                  show: false, // 显示标签
                  formatter: function (params) {
                    console.log(params)
                    // 自定义标签格式化函数
                    return params.value // 使用 value 作为标签内容
                  },
                  color: 'rgba(255, 225, 27, 1)',
                  position: 'outside', // 外部显示
                  distance: 0, // 调整标签与数据线的距离
                  padding: [0, 10],
                },
                rich: {
                  value: {
                    color: '#FFE11B',
                    fontSize: 14,
                    align: 'center',
                    padding: [2, 5], // 文字内边距
                  },
                },
                // symbol: 'none',

                symbolSize: 0,
                areaStyle: {
                  color: 'rgba(231, 153, 50, 0.6)',
                },
                lineStyle: {
                  width: 3, // 增强线宽提升可视性
                  color: '#FFE11B',
                },
              },
            ],
          },
        ],
      })

      option && myChart.setOption(option)
    }
  })
</script>
<style lang="less" scoped>
  .chart {
    width: 20.75rem;
    height: 12.25rem;
    margin: auto;
  }
  .bottom-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bottom {
    background-color: rgba(33, 86, 111, 0.6);
    width: 7.5rem;
    height: 3.75rem;
    border: 1px solid rgba(85, 206, 228, 1);
  }

  .text_22 {
    color: rgba(255, 255, 255, 1);
    font-size: 1rem;
    margin-top: 0.175rem;
    display: block;
    text-align: center;
  }

  .text-wrapper_134 {
    // height: 15px;
    // margin-top: 0.5rem;
    text-align: center;
  }

  .text_23 {
    color: rgba(255, 225, 27, 1);
    font-size: 1.125rem;
    font-weight: 700;
  }

  .text_24 {
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    // margin-top: 1px;
  }
</style>