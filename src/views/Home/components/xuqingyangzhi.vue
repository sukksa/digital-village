<template>
  <div class="box">
    <!-- <div ref="chartRef" class="chart"></div> -->
    <div class="left-box">
      <div class="left-title">
        家禽牲畜价格浮动情况
      </div>
      <div class="left">
        <div class="left-item" v-for="item,index in data" :key="index">
          <div class="index">{{ index +1}}.{{ item.name }}</div>
          <div class="price" :class="item.isUp ? 'price-red' : 'price-green'">
            ￥ {{ item.price }}/斤
          </div>
          <img v-if="item.isUp" src="../assets/img/up.png" alt="">
          <img v-else src="../assets/img/down.png" alt="">
        </div>
      </div>
    </div>
    <div class="right-box">
      <div class="right-title">
        家禽牲畜增长比例
      </div>
      <div class="charts">
        <div id="bubbleImg"></div>
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
  const data = ref([
    {
      name: '绿头鸭',
      price: 18.8,
      isUp: true,
    },
    {
      name: '黄牛',
      price: 24.0,
      isUp: true,
    },
    {
      name: '黑山羊',
      price: 28.5,
      isUp: true,
    },
    {
      name: '肉鸡',
      price: 8.8,
      isUp: false,
    },
    {
      name: '鸭',
      price: 7.0,
      isUp: false,
    },
    {
      name: '猪',
      price: 8.1,
      isUp: false,
    },
  ])

  const bubbleData = (data, format, dom) => {
    let [maxValue, temp] = [0, []]
    data.forEach(item => {
      temp.push(item[format[1]])
    })
    maxValue = Math.max.apply(null, temp)

    // 气泡颜色数组
    let color = [
      'rgba(223, 172, 122, 0.5)',
      'rgba(43, 243, 118, 0.5)',
      'rgba(43, 212, 243,0.5)',
      'rgba(243, 236, 43, 0.5)',
      'rgba(95, 43, 243, 0.5)',
      'rgba(43, 151, 243, 0.5)',
    ]
    // 气泡颜色备份
    let bakeColor = [...color]
    // 气泡数据
    let bubbleData = []
    // 气泡基础大小
    let basicSize = 70
    // 节点之间的斥力因子,值越大,气泡间距越大
    let repulsion = 380
    // 根据气泡数量配置基础大小和斥力因子（以实际情况进行适当调整，使气泡合理分布）
    if (data.length >= 5 && data.length < 10) {
      basicSize = 50
      repulsion = 65
    }
    if (data.length >= 10 && data.length < 20) {
      basicSize = 40
      repulsion = 150
    } else if (data.length >= 20) {
      basicSize = 30
      repulsion = 75
    }

    // 填充气泡数据数组bubbleData
    for (let item of data) {
      // 确保气泡数据条数少于或等于气泡颜色数组大小时，气泡颜色不重复
      if (!bakeColor.length) bakeColor = [...color]
      let colorSet = new Set(bakeColor)
      let curIndex = Math.round(Math.random() * (colorSet.size - 1))
      let curColor = bakeColor[curIndex]
      colorSet.delete(curColor)
      bakeColor = [...colorSet]
      // 气泡大小设置
      let size = (item[format[1]] * basicSize * 2) / maxValue
      if (size < basicSize) size = basicSize
      // 生成渐变色
      const gradientColor = {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.8,
        colorStops: [
          { offset: 0, color: curColor.replace('0.5', '0.8') }, // 中心颜色加深
          { offset: 1, color: curColor }, // 边缘保持原色
        ],
      }
      bubbleData.push({
        name: item[format[0]],
        value: item[format[1]],
        symbolSize: size,
        draggable: true,
        itemStyle: {
          // normal: { color: curColor },
          normal: {
            color: gradientColor, // 渐变色
            borderColor: curColor.replace('0.5', '1'), // 边框颜色（去透明度）
            borderWidth: 2, // 边框宽度
            shadowBlur: 15, // 阴影模糊度
            shadowColor: curColor, // 阴影颜色
            shadowOffsetY: 5, // 阴影垂直偏移
          },
        },
      })
    }

    let bubbleId = document.getElementById(dom)
    let bubbleChart = echarts.init(bubbleId)
    let bubbleOptions = {
      // backgroundColor: '#fff',
      animationEasingUpdate: 'bounceIn',
      series: [
        {
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: repulsion,
            edgeLength: 10,
            gravity: 0.1, // 增加引力防止节点分散
          },
          itemStyle: {
            emphasis: {
              // 高亮状态样式
              borderWidth: 3,
              shadowBlur: 25,
              shadowOffsetY: 8,
            },
          },
          // 是否开启鼠标缩放和平移漫游
          roam: false,
          label: {
            normal: {
              show: true,
              color: '#FFF', // 新增字体颜色
              fontSize: 14, // 新增字体大小
              fontWeight: 'bold', // 新增字体粗细
            },
          },
          data: bubbleData,
        },
      ],
    }
    bubbleChart.setOption(bubbleOptions)
  }
  onMounted(() => {
    bubbleData(data.value, ['name', 'price'], 'bubbleImg')
  })
</script>

<style lang="less" scoped>
  #bubbleImg {
    width: 12.5rem;
    height: 14.375rem;
  }
  .box {
    display: flex;
    justify-content: space-between;
    margin-left: 1rem;
  }
  .left-box {
    .left-title {
      font-weight: 400;
      font-size: 1rem;
      color: #ffffff;
      margin-top: 0.625rem;
      margin-bottom: 1.5rem;
    }
    .left-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      .index {
        width: 5rem;
      }
      .price {
        width: 5rem;
        font-weight: 600;
      }
      .price-red {
        color: #ff2c2c;
      }
      .price-green {
        color: #31ff2c;
      }
    }
  }
  .right-title {
    font-weight: 400;
    font-size: 1rem;
    color: #ffffff;
    margin-top: 0.625rem;
    // margin-bottom: 1.5rem;
  }
</style>