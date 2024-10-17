<template>
  <div class="box">
    <Aside ref="aside"></Aside>
    <Main></Main>
  </div>
</template>

<script>
import Aside from "@/components/parts/Aside.vue";
import Main from "@/components/parts/Main.vue";
export default {
  name: "Home",
  components: {
    Aside,
    Main,
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>