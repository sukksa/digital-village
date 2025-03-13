<template>
  <div class="container" :style="{ width: size + 'px', height: size + 'px' }">
    <!-- 背景圆形 -->
    <div class="background" :style="{ backgroundColor: bgColor }"></div>

    <!-- 波浪层 -->
    <div class="wave" :style="{
        top: wavePosition + '%',
        background: waveColor,
        animationDuration: speed + 's'
      }"></div>

    <!-- 百分比显示 -->
    <div class="percent">{{ percentage }}%</div>
  </div>
</template>

<script setup>
  import { ref, computed, watch } from 'vue'

  const props = defineProps({
    percentage: { type: Number, default: 50 }, // 百分比值
    size: { type: Number, default: 200 }, // 圆形直径
    bgColor: { type: String, default: '#e0e0e0' }, // 背景色
    waveColor: { type: String, default: '#41b883' }, // 波浪颜色
    speed: { type: Number, default: 4 }, // 波浪动画速度
  })

  const wavePosition = ref(0)

  // 根据百分比计算波浪位置
  watch(
    () => props.percentage,
    val => {
      wavePosition.value = 100 - val
    },
  )
</script>

<style scoped>
  .container {
    position: relative;
    border-radius: 50%;
    overflow: hidden;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .wave {
    position: absolute;
    left: -25%;
    width: 150%;
    height: 150%;
    background: #41b883;
    animation: wave linear infinite;
    border-radius: 40%;
    transform: rotate(360deg);
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .percent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2em;
    font-weight: bold;
    color: #333;
  }
</style>