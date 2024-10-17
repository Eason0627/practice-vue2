<template>
  <div class="modalBox">
    <div class="modal">
      <div class="modal-header">
        <h3>我是一个Modal的标题</h3>
      </div>
      <div class="modal-body">
        <p>我是一个Modal的内容</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn-close" @click="closeSelf">关闭</button>
        <button type="button" class="btn-confirm" @click="confirm">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {},
  data() {
    return {};
  },
  methods: {
    closeSelf() {
      this.$emit("closeme");
    },
    confirm() {
      console.log(111);
    },
  },
};
</script>
 
<style>
.modalBox {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
}
.modal {
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 400px;
  background: #fff;
}
.modal-header {
  border-bottom: 1px solid #eee;
  color: #313131;
  justify-content: space-between;
  padding: 15px;
  display: flex;
}
.modal-footer {
  border-top: 1px solid #eee;
  justify-content: flex-end;
  padding: 15px;
  display: flex;
}
.modal-body {
  position: relative;
  padding: 20px 10px;
}
.btn-close,
.btn-confirm {
  border-radius: 8px;
  margin-left: 16px;
  width: 56px;
  height: 36px;
  border: none;
  cursor: pointer;
}
.btn-close {
  color: #313131;
  background-color: transparent;
}
.btn-confirm {
  color: #fff;
  background-color: #2d8cf0;
}
</style>
 
