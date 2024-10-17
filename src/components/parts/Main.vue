<template>
  <main ref="main">
    <Header></Header>
    <transition name="fade" mode="out-in" class="contentBox">
      <router-view v-if="showRouterView" ref="current"></router-view>
    </transition>
  </main>
</template>

<script>
import Header from "./page/header";
export default {
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      showRouterView: true,
    };
  },
  components: { Header },
  methods: {
    reload() {
      // 改变this.showRouterView的状态，控制路由出口的显示隐藏
      this.showRouterView = false;
      this.$nextTick(() => {
        // 必须使用nextTick，否则最新dom可能未更新，导致刷新失败
        this.showRouterView = true;
      });
    },
  },
};
</script>

<style lang="less" scoped>
main {
  height: 100%;
  overflow-x: hidden;
  background: #f5f5f5;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    height: 100px;
    border-radius: 10px;
    background: #384a52;
  }

  &::-webkit-scrollbar-track {
    background: #ccc;
  }
}
</style>