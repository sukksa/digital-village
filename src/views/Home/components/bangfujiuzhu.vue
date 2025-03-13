<template>
  <div class="box">

    <div class="left-box">
      <div class="left-item-box">
        <div class="left-item">
          <div class="title">已办理帮助信息人数</div>
          <div class="num" style=" color: #47da2a;">1804</div>
        </div>
        <div class="pie">
          <LiquidFill bg-color="#91EE91" wave-color="#16D916" :percentage="0.52" />
        </div>
      </div>
      <div class="left-item-box">
        <div class="left-item">
          <div class="title">未办理帮助信息人数</div>
          <div class="num" style="color: #D73E3E;">1000</div>
        </div>
        <div class="pie">
          <LiquidFill bg-color="#FD8282" wave-color="#D73E3E" :percentage="0.31" />
        </div>
      </div>
      <div class="manyi-box">
        <div class="manyi-title">
          满意度统计
        </div>
        <div class="manyi">
          <Pie3D />
          <div class="list">
            <div class="icon"></div>
            <div class="percent">满意72%</div>
          </div>
          <div class="list">
            <div class="icon"></div>
            <div class="percent">未评价10%</div>
          </div>
          <div class="list">
            <div class="icon"></div>
            <div class="percent">不满意8%</div>
          </div>
        </div>
      </div>
    </div>

    <div class="right-box">
      <div class="right">
        <div class="title">当前等待人数</div>
        <div class="num" style="background-color: #47DB2A;">377</div>
      </div>
      <div class="right">
        <div class="title">已办理累计人数</div>
        <div class="num" style="background-color: #F4CC2C;">3554</div>
      </div>
      <div class="right">
        <div class="title">已办业务累计</div>
        <div class="num" style="background-color: #2ADB96;">6007</div>
      </div>
      <div class="right">
        <div class="title">系统运行状态</div>
        <div class="status">运行中</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as echarts from 'echarts'
  import LiquidFill from '@/components/LiquidFill.vue'
  import Pie3D from '@/components/Pie3d.vue'
  const chartRef = ref(null)
  const option = ref({})
  const myChart = ref({})

  const initChart = () => {
    if (chartRef.value) {
      myChart.value = echarts.init(chartRef.value)
      option.value

      option.value && myChart.value.setOption(option.value)
    }
  }
  onMounted(() => {
    initChart()
  })
</script>

<style lang="less" scoped>
  .chart {
    width: 20.75rem;
    height: 12.75rem;
    margin: auto;
  }

  .box {
    display: flex;
    justify-content: space-between;
    padding-left: 0.75rem;
    .left-box {
      .left-item-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.75rem;
        .title {
          font-weight: 400;
          font-size: 1rem;
          color: #ffffff;
        }
        .num {
          font-weight: bold;
          font-size: 1.25rem;
        }
      }
    }
    .manyi-box {
      .manyi-title {
        font-weight: 400;
        font-size: 0.875rem;
        color: #ffffff;
      }
      .manyi {
        position: relative;
        .list {
          padding-left: 7rem;
          color: #ffffff;
          display: flex;
          align-items: center;
          font-weight: 400;
          font-size: 0.875rem;
          color: #ffffff;
          margin-top: 0.25rem;
          .icon {
            width: 0.75rem;
            height: 0.75rem;
            background: #f7b42c;
            border-radius: 50%;
            margin-left: 0.25rem;
            margin-right: 0.5rem;
          }
        }
      }
    }
    .right-box {
      width: 10.5rem;
      font-weight: 400;
      font-size: 0.875rem;
      color: #ffffff;
      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2.25rem;
        height: 1.25rem;
        line-height: 1.25rem;
        .num,
        .status {
          font-size: 1rem;
          font-weight: 600;
          width: 3.75rem;
          text-align: end;
        }
        .status {
          color: #57e288;
        }
      }
    }
  }
</style>