

<template>
  <div class="main">
    <div class="box">
      <div>
        <Box :title-text="'一村一品商城分析'">
          <template v-slot:default>
            <yicunyiping></yicunyiping>
          </template>
        </Box>
        <!-- <div class="title-box">
          <img src="./assets/img/title.png" alt="">
          <div class="title-text">一村一品商城分析</div>
          <yicunyiping></yicunyiping>
        </div> 
        <div class="content"></div>-->
      </div>
      <div>
        <Box :title-text="'人员状态属性占比'">
          <template v-slot:default>
            <renyuanzhaungtai></renyuanzhaungtai>
          </template>
        </Box>
      </div>
      <div>
        <Box :title-text="'土地使用面积分析'">
          <template v-slot:default>
            <tudishiyongmianji></tudishiyongmianji>
          </template>
        </Box>
      </div>

    </div>
    <div class="box">
      <div>
        <Box title-text="农业概况">
          <template v-slot:default>
            <nongyegaikuang></nongyegaikuang>
          </template>
        </Box>

      </div>
      <div>
        <Box title-text="数字乡村覆盖分析">
          <template v-slot:default>
            <shuzixianchunleft></shuzixianchunleft>
          </template>
        </Box>
      </div>
      <div>
        <Box :title-text="'人员结构'">
          <template v-slot:default>
            <renyuanjiegou></renyuanjiegou>
          </template>
        </Box>
      </div>

    </div>
    <div class="box">
      <div>
        <Box :title-text="'农村概况'">
          <template v-slot:default>
            <nongcungaikuang></nongcungaikuang>
          </template>
        </Box>
      </div>
      <div>
        <Box>
          <template v-slot:default>
            <shuzixianchunright></shuzixianchunright>
          </template>
        </Box>
      </div>
      <div>
        <Box :title-text="'帮扶救助'">
          <template v-slot:default>
            <bangfujiuzhu></bangfujiuzhu>
          </template>
        </Box>
      </div>

    </div>
    <div class="box">
      <div>
        <Box :title-text="'村民家庭收入统计分析'">
          <template v-slot:default>
            <cunminjiatingshouru></cunminjiatingshouru>
          </template>
        </Box>
      </div>
      <div>
        <Box :title-text="'畜禽养殖分析'">
          <template v-slot:default>
            <xuqingyangzhi></xuqingyangzhi>
          </template>
        </Box>
      </div>
      <div>
        <Box title-text="农作物种类与产值分析">
          <template v-slot:default>
            <nongzuowu></nongzuowu>
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
  import yicunyiping from './components/yicunyiping.vue'
  import tudishiyongmianji from './components/tudishiyongmianji.vue'
  import cunminjiatingshouru from './components/cunminjiatingshouru.vue'
  import shuzixianchunright from './components/shuzixianchunright.vue'
  import shuzixianchunleft from './components/shuzixianchunleft.vue'
  import renyuanzhaungtai from './components/renyuanzhaungtai.vue'
  import nongyegaikuang from './components/nongyegaikuang.vue'
  import nongcungaikuang from './components/nongcungaikuang.vue'
  import renyuanjiegou from './components/renyuanjiegou.vue'
  import bangfujiuzhu from './components/bangfujiuzhu.vue'
  import xuqingyangzhi from './components/xuqingyangzhi.vue'
  import nongzuowu from './components/nongzuowu.vue'
</script>
<style scoped lang="less">
  .main {
    display: flex;
    justify-content: space-between;
  }
  .box {
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
</style>
