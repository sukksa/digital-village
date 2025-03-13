<template>
  <div class="box">
    <div class="item" v-for="item,index in data" :key="index">
      <div class="data">
        <div class="icon">
          <img :src="item.icon" alt="">
        </div>
        <div class="name">{{item.name}}</div>
      </div>
      <img src="../assets/line.png" alt="">
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import icon1 from '../assets/icon1.png'
  import icon2 from '../assets/icon2.png'
  const data = ref([
    {
      name: '四川豫记食品股份有限公司',
      icon: icon1,
    },
    {
      name: '四川金宫川源味业有限公司',
      icon: icon2,
    },
    {
      name: '新希望六和股份有限公司',
      icon: icon1,
    },
    {
      name: '成都市新兴粮油有限公司',
      icon: icon2,
    },
    {
      name: '四川天嘉种业有限公司',
      icon: icon1,
    },
    {
      name: '仲行种业股份有限公司',
      icon: icon2,
    },
  ])
</script>

<style lang="less" scoped>
  .chart {
    width: 20.75rem;
    height: 12.75rem;
    margin: auto;
  }
  .box {
    margin-top: 0.75rem;
    // padding-left: 0.75rem;
    .item {
      position: relative;
      > img {
        position: absolute;
        top: 1.75rem;
      }
      .data {
        display: flex;
        align-items: center;
        height: 2.5rem;
        // line-hei
        .name {
          margin-left: 2rem;
        }
      }
    }
  }
</style>