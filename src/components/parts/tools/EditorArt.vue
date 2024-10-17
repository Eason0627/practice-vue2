<template>
  <div class="editorBox">
    <Toolbar
      class="toolbar"
      :editorId="editorId"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      class="text"
      v-model="html"
      :editorId="editorId"
      :defaultConfig="editorConfig"
      :mode="mode"
      ref="text"
      @onChange="onChange"
      @onCreated="onCreated"
    />
  </div>
</template>

<script>
import "@wangeditor/editor/dist/css/style.css";
import {
  Editor,
  Toolbar,
  getEditor,
  removeEditor,
} from "@wangeditor/editor-for-vue";
export default {
  data() {
    return {
      editor: "",
      html: "",
      // wangEditor 编辑器初始化数据
      editorId: `w-e-${Math.random().toString().slice(-5)}`, //【注意】编辑器 id ，要全局唯一
      toolbarConfig: {
        excludeKeys: ["fullScreen"],
      },
      editorConfig: {
        placeholder: "请输入内容...",
        // 所有的菜单配置，都要在 MENU_CONF 属性下
        MENU_CONF: {
          // 配置上传图片
          uploadImage: {
            server: "http://127.0.0.1:3000/upload/images",
            fieldName: "file",
          },
        },
      },

      mode: "default", // or 'simple'
      // defaultContent （JSON 格式） 和 defaultHtml（HTML 格式）二选一
      // defaultContent: [{ type: "paragraph", children: [{ text: "一行文字" }] }],
      // defaultHtml: "<p>hello</p>",
    };
  },
  components: { Editor, Toolbar },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
    },
    // 当文本域内容改变获取文本域内的实时html结构
    onChange(editor) {
      this.editor = editor;
      const editorData = {
        text: editor.getText(),
        html: editor.getHtml(),
      };
      this.$EventBus.$emit("editorData", editorData);
    },
  },
  mounted() {
    this.$EventBus.$off("setEditor").$EventBus.$on("setEditor", (data) => {
      // 模拟 ajax 请求，异步渲染编辑器
      // setTimeout(() => {
      this.html = data;
      // }, 500);
    });
  },
  beforeDestroy() {
    const editor = getEditor(this.editorId);
    if (editor == null) return;

    // 【注意】组件销毁时，及时销毁编辑器
    editor.destroy();
    removeEditor(this.editorId);
  },
};
</script>

<style lang="less" scoped>
.editorBox {
  height: auto;
  .toolbar {
    border-bottom: 1px solid rgb(66 66 66 / 5%);
  }
  .text {
    height: 300px;
  }
}
</style>