

<template>
  <div class="box">
    <div class="headerImage">
      <img src="../assets/index/bgHeader.png" class="bg-header" />

    </div>
    <div class="title">数字乡村大数据管理平台</div>
    <div class="header">
      <div class="top">
        <div class="logo">
          <img src="../assets/index/LOGO.png" alt="" srcset="">

        </div>
        <div class="date">星期四</div>
        <div class="date">2022.07.07 12:30</div>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="button" v-for="(item, index)  in listLeft" :key="index" @click="listClick(item)">
            <img :src="item.src" alt="">
            <div class="text">{{ item.name }}</div>
          </div>
        </div>
        <div class="right">
          <div class="button" v-for="(item, index)  in listRight" :key="index" @click="listClick(item)">
            <img :src="item.src" alt="">
            <div class="text">{{ item.name }}</div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>
<script setup>
  import { ref, onMounted, watch } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import activeSrc from '@/assets/index/btn-active.png'
  import unActiveSrc from '@/assets/index/btn-unActive.png'

  const router = useRouter()
  const route = useRoute()
  const listLeft = ref([
    {
      name: '首页',
      src: activeSrc,
      url: 'Home',
    },
    {
      name: '基础设施管理',
      src: unActiveSrc,
      url: 'InfrastructureManagement',
    },
    {
      name: '农产品商城',
      src: unActiveSrc,
      url: 'AgriculturalProducts',
    },
  ])
  const listRight = ref([])

  // const listLeft = ref([
  //   {
  //     name: '乡村产业',
  //     src: unActiveSrc,
  //   },
  //   {
  //     name: '农业资源',
  //     src: unActiveSrc,
  //   },
  //   {
  //     name: '人才培养',
  //     src: unActiveSrc,
  //   },
  //   {
  //     name: '农产品商城',
  //     src: unActiveSrc,
  //     url: 'AgriculturalProducts',
  //   },
  // ])
  // const listRight = ref([
  //   {
  //     name: '首页',
  //     src: activeSrc,
  //     url: 'Home',
  //   },
  //   {
  //     name: '基础设施管理',
  //     src: unActiveSrc,
  //     url: 'InfrastructureManagement',
  //   },
  //   {
  //     name: '人员管理',
  //     src: unActiveSrc,
  //   },
  //   {
  //     name: '土地管理',
  //     src: unActiveSrc,
  //   },
  // ])
  const listClick = ({ name, url }) => {
    if (route.name === url) return
    updateButtonState(name)
    router.push({ name: url })
  }

  // 添加对路由变化的监听
  watch(
    () => route.name,
    newName => {
      if (newName) {
        updateButtonState(newName)
      }
    },
    { immediate: true }, // 立即触发一次
  )

  // 提取公共逻辑
  const updateButtonState = routeName => {
    listLeft.value.forEach(item => {
      item.src = item.url === routeName ? activeSrc : unActiveSrc
    })
    listRight.value.forEach(item => {
      item.src = item.url === routeName ? activeSrc : unActiveSrc
    })
  }
</script>
<style scoped lang="less">
  .box {
    width: 100%;
    position: relative;
    margin-bottom: 1.75rem;
  }
  .headerImage {
    position: relative;
    .bg-header {
      position: absolute;
      z-index: 9;
    }
  }
  .title {
    position: relative;
    font-weight: bold;
    font-size: 1.875rem;
    color: #ffffff;
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    font-weight: 700;
    // 保留原有样式...
    background-image: linear-gradient(to right, #8ffdef 100%, #ffffff 50%, #8ffdef 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .header {
    .top {
      display: flex;
      align-items: center;
      // justify-content: center;
      height: 2.85rem;
      img {
        display: block;
      }
      .date {
        font-weight: 500;
        font-size: 1rem;
        color: #ffffff;
        margin-left: 2.25rem;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      .left,
      .right {
        font-weight: 400;
        font-size: 1rem;
        color: #ffffff;
        display: flex;
        .button {
          margin-right: 0.75rem;
          position: relative;
          width: 8rem;
          text-align: center;
          height: 1.875rem;
          line-height: 1.875rem;
          cursor: pointer;
          .text {
            z-index: 999;
            position: relative;
          }
          img {
            width: 8rem;
            height: 1.875rem;
            position: absolute;
            z-index: 99;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }
</style>
