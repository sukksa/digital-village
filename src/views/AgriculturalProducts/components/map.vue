<template>
  <div class="map-wrapper">
    <div class="title-box">
      <img src="../assets/mapTitle.png" alt="">
      <div class="title">主要销售地</div>
      <div class="city-box">
        <div class="city" v-for="item,index in city" :key="index">{{ item }}</div>
      </div>
    </div>
    <div ref="chartRef" class="map-container"></div>
  </div>

</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import * as echarts from 'echarts'
  import chinaJson from '../assets/china.json' // 官方地图数据
  import sichuan from '../assets/sichuan.json'
  const city = ref(['甘肃', '陕西', '湖北', '贵州', '云南'])
  const chartRef = ref(null)
  let chartInstance = null

  // 注册地图
  echarts.registerMap('china', chinaJson)
  echarts.registerMap('sichuan', sichuan)
  const adjacentProvinces = ['重庆市', '贵州省', '云南省', '西藏自治区', '青海省', '甘肃省', '陕西省']
  // 初始化图表
  const initChart = () => {
    if (!chartRef.value) return

    chartInstance = echarts.init(chartRef.value)

    const option = {
      backgroundColor: 'transparent',
      // title: {
      //   text: '中国地图',
      //   left: 'center',
      //   textStyle: {
      //     color: '#333',
      //     fontSize: 20,
      //   },
      // },
      // tooltip: {
      //   trigger: 'item',
      //   formatter: '{b}',
      // },
      // geo: {
      //   map: 'china',
      //   zoom: 1.7,
      //   top: '30%',
      //   label: {
      //     show: true,
      //     fontSize: '14',
      //     color: '#00D9A9',
      //   },
      // },
      geo: {
        map: 'china',
        roam: false, // 保持与地图系列同步
        zoom: 1.7, // 与地图系列同步缩放
        top: '30%', // 与地图系列位置一致
        silent: true, // 禁用geo的交互事件
        roam: false, // 允许缩放拖动
        label: {
          show: true,
          fontSize: 12,
          color: 'rgba(25,192,181,1)',
          fontWeight: 'bold',
        },
        // emphasis: {
        //   // 高亮状态
        //   label: {
        //     show: true,
        //     color: '#fff',
        //   },
        //   itemStyle: {
        //     areaColor: '#389BB7',
        //   },
        // },
        itemStyle: {
          opacity: 0,
          areaColor: 'rgba(0,0,0,0)', // 透明背景
          // borderColor: 'rgba(74,152,165,1)', // 保留白色边界
          // borderWidth: 1, // 边界线宽
        },
      },
      series: [
        {
          name: '四川',
          type: 'map',
          map: 'sichuan',
          zoom: 0.27,
          top: 143,
          left: 145,
          silent: true,
          roam: false, // 允许缩放拖动
          label: {
            show: false,
            fontSize: 12,
            color: 'rgba(25,192,181,1)',
            fontWeight: 'bold',
          },
          emphasis: {
            // 高亮状态
            label: {
              show: false,
              color: '#fff',
            },
            itemStyle: {
              areaColor: '#389BB7',
            },
          },
          zlevel: 2, // 更高层级
          itemStyle: {
            areaColor: 'rgba(0,0,0,0)', // 透明背景
            borderColor: '#FFEB3B', // 黄色
            borderWidth: 2,
            borderType: 'solid', // 可选实线
          },
          data: generateRandomData(),
        },
        {
          name: '中国',
          type: 'map',
          map: 'china',
          zoom: 1.7,
          top: '30%',
          silent: true,
          roam: false, // 允许缩放拖动
          label: {
            show: true,
            fontSize: 12,
            color: 'rgba(25,192,181,1)',
            fontWeight: 'bold',
          },
          emphasis: {
            // 高亮状态
            label: {
              show: true,
              color: '#fff',
            },
            itemStyle: {
              areaColor: '#389BB7',
            },
          },
          zlevel: 0, // 更高层级
          itemStyle: {
            areaColor: 'rgba(0,0,0,0)', // 透明背景
            borderColor: 'rgba(74,152,165,1)', // 保留白色边界
            borderWidth: 2, // 边界线宽
            shadowColor: 'rgba(74,152,165,1)', // 半透明阴影
            shadowBlur: 20,
            shadowOffsetX: 2,
            shadowOffsetY: 2,
          },
          // data: generateRandomData().map(item => ({
          //   ...item,
          //   itemStyle:
          //     item.name === '四川省'
          //       ? {
          //           borderColor: '#FFEB3B', // 黄色
          //           borderWidth: 3,
          //           borderType: 'solid', // 可选实线
          //           z: 10,
          //         }
          //       : {},
          // })),
          data: generateRandomData(),
        },

        {
          type: 'lines',
          coordinateSystem: 'geo',
          zlevel: 4,
          effect: {
            show: true,
            period: 6, // 动画周期
            trailLength: 0.2,
            symbol: 'arrow', // 箭头图标
            symbolSize: 8,
          },
          lineStyle: {
            // color: 'rgba(219,215,73,1)',
            color: '#FFC107',
            width: 2,
            curveness: 0.3, // 曲线弧度
          },
          data: [
            {
              coords: [
                [106.713478, 26.578343], // 贵州坐标
                [104.065735, 30.659462], // 四川坐标
              ],
            }, // 新增省份坐标
            {
              coords: [
                [102.712251, 25.040609], // 云南（昆明）
                [104.065735, 30.659462], // 四川
              ],
            },
            {
              coords: [
                [108.948024, 34.263161], // 陕西（西安）
                [104.065735, 30.659462], // 四川
              ],
            },
            {
              coords: [
                [114.298572, 30.584355], // 湖北（武汉）
                [104.065735, 30.659462], // 四川
              ],
            },
            {
              coords: [
                [103.823557, 36.058039], // 甘肃（兰州）
                [104.065735, 30.659462], // 四川
              ],
            },
          ],
        },
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 5, // 置于最上层
          symbol: 'circle',
          symbolSize: 12,
          itemStyle: {
            color: '#FFEB3B', // 黄色
          },
          data: [[104.065735, 30.659462]], // 四川坐标
          emphasis: {
            // 高亮效果
            scale: 1.5,
            itemStyle: {
              color: '#FFC107',
            },
          },
          // silent: true, // 禁用交互
        },
      ],
    }

    chartInstance.setOption(option)
  }

  // 生成模拟数据
  const generateRandomData = () => {
    return chinaJson.features.map(item => {
      return {
        name: item.properties.name,
        value: Math.floor(Math.random() * 1000),
      }
    })
  }

  // 响应式调整
  // const handleResize = () => {
  //   chartInstance?.resize()
  // }

  onMounted(() => {
    initChart()
    // window.addEventListener('resize', handleResize)
  })

  // onBeforeUnmount(() => {
  //   window.removeEventListener('resize', handleResize)
  //   chartInstance?.dispose()
  // })
</script>

<style scoped lang="less">
  .map-container {
    width: 48.75rem;
    height: 35.25rem;
    /* height: 600px; */
  }
  .map-wrapper {
    position: relative;
    color: #fff;
    .title-box {
      position: absolute;
      top: 0;
      left: 15rem;
    }
    img {
      position: absolute;
      top: 0;
      left: -2rem;
    }
    .title {
      font-weight: 400;
      font-size: 1rem;
    }
    .city-box {
      font-weight: bold;
      font-size: 16px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 18rem;
    }
  }
</style>