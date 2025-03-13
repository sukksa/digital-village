<template>
  <div class="box">
    <div style="height: 0.75rem;"></div>
    <div class="item" v-for="item,index in data" :key="index">
      <div>
        <div style="position: relative;">
          <img src="../assets/no.png" alt="">
          <div class="no">NO.{{index+1}}</div>
          {{item.name}}
        </div>
        <div class="kg">
          <span>{{item.kg}}</span>kg
        </div>
        <div class="monry">
          <span>{{item.money}}</span> 元
        </div>
      </div>

      <img src="../assets/line.png" alt="">
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  const data = ref([
    {
      name: '有机大米',
      kg: 321080,
      money: 4568640,
    },
    {
      name: '有机蔬菜',
      kg: 301474,
      money: 3584160,
    },
    {
      name: '绿头鸭',
      kg: 80485,
      money: 3081542,
    },
    {
      name: '鸡蛋',
      kg: 79518,
      money: 1562540,
    },
    {
      name: '番茄',
      kg: 121080,
      money: 1282540,
    },
  ])
</script>

<style lang="less" scoped>
  .box {
    // margin-top: 0.75rem;

    .item {
      position: relative;
    }
    .item > img {
      width: 28rem;
      height: 1rem;
      // margin-top: -10rem;
      position: absolute;
      top: 2rem;
    }
    .item > div {
      width: 28rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-weight: bold;
        font-size: 1rem;
      }
      .money {
        width: 10rem;
      }
      > div {
        display: flex;
        align-items: center;
        height: 3rem;
        > div {
          width: 9rem;
        }
        img {
          margin-right: 0.5rem;
        }
        .no {
          position: absolute;
          font-weight: bold;
          font-size: 0.5rem;
          color: #e5df2c;
        }
      }
    }
  }
</style>