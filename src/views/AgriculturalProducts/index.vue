

<template>
  <div class="main">
    <div class="box">
      <div>
        <Box title-text="一村一品商城分析">
          <template v-slot:default>
            <yicunyiping></yicunyiping>
          </template>
        </Box>
      </div>
      <div>
        <Box title-text="热销商品销量排名">
          <template v-slot:default>
            <rexiaoshangping></rexiaoshangping>
          </template>
        </Box>
      </div>
      <div>
        <Box title-text="主要合作商家">
          <template v-slot:default>
            <zhuyaohezuoshangjia></zhuyaohezuoshangjia>
          </template>
        </Box>
      </div>

    </div>
    <div class="big-box">
      <div>
        <BoxV4>
          <template v-slot:default>
            <chinamap></chinamap>
          </template>
        </BoxV4>

      </div>
      <div>
        <BoxV2 title-text="商品价格走势">
          <template v-slot:default>
            <shangpingjiage></shangpingjiage>
          </template>
        </BoxV2>
      </div>

    </div>

    <div class="box">
      <div>
        <Box title-text="每月商品产出统计">
          <template v-slot:default>
            <meiyueshangping></meiyueshangping>
          </template>
        </Box>
      </div>
      <div>
        <Box title-text="市场需求占比分析">
          <template v-slot:default>
            <shichangxuqiuzhanbi></shichangxuqiuzhanbi>
          </template>
        </Box>
      </div>
      <div>
        <Box title-text="市场供需关系变化情况汇总">
          <template v-slot:default>
            <shichanggongxu></shichanggongxu>
          </template>
        </Box>
      </div>

    </div>
  </div>

</template>
<script setup>
  // TODO
  import { ref, onMounted } from 'vue'
  import Box from '@/components/Box.vue'
  import BoxV4 from '@/components/BoxV4.vue'
  import BoxV2 from '@/components/BoxV2.vue'
  import yicunyiping from '../Home/components/yicunyiping.vue'
  import chinamap from './components/map.vue'
  import rexiaoshangping from './components/rexiaoshangping.vue'
  import zhuyaohezuoshangjia from './components/zhuyaohezuoshangjia.vue'
  import shangpingjiage from './components/shangpingjiage.vue'
  import shichanggongxu from './components/shichanggongxu.vue'
  import shichangxuqiuzhanbi from './components/shichangxuqiuzhanbi.vue'
  import meiyueshangping from './components/meiyueshangping.vue'
</script>
<style scoped lang="less">
  .main {
    display: flex;
    justify-content: space-between;
  }
  .box,
  .big-box {
    width: 25.9375rem;
    .title-box {
      position: relative;
      width: 25.9375rem;
      height: 2rem;
      line-height: 2rem;
      .title-text {
        z-index: 999;
        position: relative;
        margin-left: 1.75rem;
        font-size: 1.125rem;
        font-weight: bold;
      }
      img {
        width: 25.9375rem;
        height: 2rem;
        position: absolute;
        z-index: 99;
        top: 0;
        left: 0;
      }
    }
    .content {
      height: 17.1875rem;
    }
  }
  .big-box {
    width: 52rem;
  }
</style>
