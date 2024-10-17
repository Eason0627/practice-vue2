<template>
  <div class="container-fuild px-5">
    <div class="content">
      <div class="top clearfix mb-3 d-flex justify-content-between">
        <Select @getInfo="getInfo" ref="select"></Select>
        <div class="ml-auto subimt">
          <button class="btn btn-outline-primary" @click="getContent">
            发布文章
          </button>
        </div>
      </div>
      <div class="title">
        <input type="text" placeholder="请输入文章标题" v-model="title" />
      </div>
      <!-- 编辑文章 -->
      <div class="editor">
        <editor-art ref="editor"></editor-art>
      </div>
    </div>
  </div>
  <!-- 注意： defaultContent （JSON 格式） 和 defaultHtml （HTML 格式），二选一 -->
</template>

<script>
import Select from "@/components/parts/tools/Select";
import EditorArt from "@/components/parts/tools/EditorArt";

export default {
  data() {
    return {
      title: "", // 文章标题
      text: "",
      html: "", // 文章内容
      author: this.$store.state.username, // 文章作者
      data: new Date().toLocaleString(), // 文章发表时间
      IsSort: "",
      IsKeywords: "",
    };
  },
  components: { Select, EditorArt },
  methods: {
    // 提交文章的函数
    getContent() {
      if (this.title === "") {
        alert("请输入文章标题");
      } else if (this.isSort === "") {
        alert("必须选择文章分类");
      } else if (this.isKeywords === "") {
        alert("必须添加文章关键字");
      } else if (this.text === "") {
        alert("必须输入文章内容");
      } else {
        // // 因为参数是 JSON 对象，axios 做了一个 stringify 的处理 以致于后台接收不到传参
        // // 使用 Qs 将参数转换为 query 参数
        const article = this.$qs.stringify({
          artTitle: this.title,
          artContent: this.html,
          artAuthor: this.author,
          artTime: this.data,
          sort: this.IsSort,
          keywords: this.IsKeywords, // 将关键词数组转化为字符串格式
        });
        this.$http
          .post("/article/submit", article)
          .then((res) => {
            alert(res.Message);
            if (res.status === 0) {
              this.title = "";
              this.$refs.editor.html = "";
              this.$refs.select.clearInfo();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    // 从子组件获取文章分类与关键词信息
    getInfo(data) {
      this.IsSort = data.isSort;
      this.IsKeywords = data.isKeywords;
    },
  },
  created() {
    this.$EventBus.$off("editorData").$EventBus.$on("editorData", (data) => {
      this.text = data.text;
      this.html = data.html;
    });
  },
};
</script>

<style lang="less" scoped>
.content {
  height: 650px;
  .title {
    width: 100%;
    height: 60px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 12%);
    input {
      width: 100%;
      height: 100%;
      padding-left: 10px;
      border: none;
      outline: none;
      font-size: 30px;
      font-weight: 700;
      &::-webkit-input-placeholder {
        color: #000;
        opacity: 0.5;
      }
    }
  }
  .top {
    position: relative;
    width: 100%;
    height: 50px;
    padding: 5px 0;
    padding-left: 10px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 12%);
    background: #fff;
    label {
      margin: 0;
      line-height: 30px;
    }
  }
  .subimt {
    height: 100%;
    margin-top: 5px;
    margin-right: 10px;
    button {
      height: 30px;
      padding: 0 10px;
      font-size: 14px;
    }
  }
  .editor {
    height: 650px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 12%);
    background: #fff;
  }
}
</style>