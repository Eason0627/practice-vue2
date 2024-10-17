<template>
  <div class="board">
    <div class="title">回复消息</div>
    <ul class="d-flex justify-content-start">
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.board {
  .title {
    padding-left: 20px;
    line-height: 35px;
    font-weight: 600;
  }
  ul {
    height: 100%;
    li {
      width: 100%;
      height: 100px;
      border-top: 1px solid rgb(0 0 0 / 5%);
      border-bottom: 1px solid rgb(0 0 0 / 5%);
    }
  }
}
</style>