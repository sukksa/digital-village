

<template>
  <div class="main">
    <div class="box">
      <div>
        <Box title-text="交通邮电信息管理">
          <template v-slot:default>
            <jiaotongyoudian></jiaotongyoudian>
          </template>
        </Box>
      </div>
      <div>
        <Box title-text="供水供电设施运行情况">
          <template v-slot:default>
            <gongshuigongdian></gongshuigongdian>
          </template>
        </Box>
      </div>
      <div>
        <Box title-text="文化教育设施统计">
          <template v-slot:default>
            <wenhuajiaoyusheshi></wenhuajiaoyusheshi>
          </template>
        </Box>
      </div>

    </div>
    <div class="big-box">
      <div>
        <BoxV4>
          <template v-slot:default>
            <mainimg></mainimg>
          </template>
        </BoxV4>

      </div>
      <div>
        <BoxV2 title-text="医疗卫生设施及环境卫生管理设施统计">
          <template v-slot:default>
            <yiliaoweishensheshi></yiliaoweishensheshi>
          </template>
        </BoxV2>
      </div>

    </div>

    <div class="box">
      <div>
        <Box title-text="园林绿化设施变化统计">
          <template v-slot:default>
            <yuanlinluhuasheshi></yuanlinluhuasheshi>
          </template>
        </Box>
      </div>
      <div>
        <Box title-text="农田水利设施占比分析">
          <template v-slot:default>
            <nongtianshuilisheshi></nongtianshuilisheshi>
          </template>
        </Box>
      </div>
      <div>
        <Box title-text="商业服务设施变化情况汇总">
          <template v-slot:default>
            <shangyefuwusheshi></shangyefuwusheshi>
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
  import shangyefuwusheshi from './components/shangyefuwusheshi.vue'
  import wenhuajiaoyusheshi from './components/wenhuajiaoyusheshi.vue'
  import yuanlinluhuasheshi from './components/yuanlinluhuasheshi.vue'
  import mainimg from './components/main.vue'
  import jiaotongyoudian from './components/jiaotongyoudian.vue'
  import gongshuigongdian from './components/gongshuigongdian.vue'
  import yiliaoweishensheshi from './components/yiliaoweishensheshi.vue'
  import nongtianshuilisheshi from './components/nongtianshuilisheshi.vue'
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
