<template>
  <div class="container-fuild px-5 artBox">
    <div class="d-flex flex-column justify-content-between">
      <div class="row">
        <div
          class="select d-flex justify-content-between w-100 shadow-sm border"
        >
          <Select :State="true" @getInfo="getInfo" ref="select"></Select>
          <div class="order">
            <button class="btn btn-dark" @click="category">筛选文章</button>
          </div>
        </div>
        <div class="article">
          <table class="text-center mx-auto w-100 table table-hover">
            <thead class="border-bottom table-head">
              <tr>
                <td>
                  <label for="id">
                    <input
                      type="checkbox"
                      id="id"
                      @change="checkAll"
                      v-model="checked"
                    />
                  </label>
                </td>
                <td>文章ID</td>
                <td>文章标题</td>
                <td>文章作者</td>
                <td>文章状态</td>
                <td>文章发布时间</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
              <tr
                class="list-item border-bottom"
                v-for="item in currentArticle"
                :key="item.id"
              >
                <td>
                  <label :for="item.artID">
                    <input
                      type="checkbox"
                      :id="item.artID"
                      v-model="checkboxList"
                      :value="item.artID"
                    />
                  </label>
                </td>
                <td>
                  <span>{{ item.id + 1 }}</span>
                </td>
                <td>
                  <span>{{ item.artTitle }}</span>
                </td>
                <td>
                  <span class="bg-dark">{{ item.artAuthor }}</span>
                </td>
                <td>
                  <span
                    style="font-size: 14px"
                    :class="
                      item.artState === 0
                        ? `bg-warning p-1 text-light rounded-lg`
                        : item.artState === 1
                        ? `bg-success p-1 text-light rounded-lg`
                        : `bg-danger p-1 text-light rounded-lg`
                    "
                    >{{ item.artState | changState }}</span
                  >
                </td>
                <td>
                  <span>{{ item.artTime }}</span>
                </td>
                <td class="d-flex justify-content-around">
                  <button class="btn btn-primary" @click="editorArt(item.id)">
                    编辑
                  </button>
                  <button class="btn btn-info" @click="updataArt(item.id)">
                    更新
                  </button>
                </td>
              </tr>
              <tr class="none" v-show="article.length === 0">
                <td colspan="6">暂无文章</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row w-100 ml-0 px-3 justify-content-between table-bottom">
          <div class="manger">
            <button
              class="btn btn-danger"
              v-show="checked || checkboxList.length"
              @click="deleteArt"
            >
              删除
            </button>
          </div>
          <div class="pl-5">
            <ul class="pagination" ref="pageNum"></ul>
          </div>
          <div>
            共有
            <a href="javascript:;" class="text-warning font-weight-bold">{{
              article.length
            }}</a>
            篇文章
          </div>
        </div>
      </div>
    </div>
    <div class="editor" ref="editor">
      <transition name="slide-fade">
        <div class="editor-content" v-if="show">
          <div class="select d-flex justify-content-between">
            <Select
              :State="this.$store.state.level === '超级管理员' ? true : false"
            ></Select>
            <div class="confirm">
              <button class="btn btn-success" @click="editor">完成修改</button>
            </div>
          </div>
          <div class="editor-title">
            <input
              type="text"
              placeholder="请输入文章标题"
              v-model="title"
              @change="upTitle"
            />
          </div>
          <editor-art></editor-art>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Select from "@/components/parts/tools/Select";
import EditorArt from "@/components/parts/tools/EditorArt";
export default {
  inject: ["reload"],
  data() {
    return {
      checkboxList: [],
      checked: false,
      author: this.$store.state.username,
      article: [],
      currentArticle: [],
      title: "",
      IsSort: "",
      IsKeywords: "",
      IsArtState: "",
      show: false,
      data: {},
    };
  },
  components: {
    Select,
    EditorArt,
  },
  methods: {
    // 复选框全选与反选
    checkAll() {
      if (this.checked === false) {
        this.checkboxList = []; //清空数据
      } else {
        this.article.forEach((value) => {
          if (this.checkboxList.indexOf(value.artID) == -1) {
            this.checkboxList.push(value.artID);
          }
        });
      }
    },
    // 从子组件获取文章分类与关键词信息
    getInfo(data) {
      this.IsSort = data.isSort;
      this.IsKeywords = data.isKeywords;
      switch (data.isArtState) {
        case "待审核":
          this.IsArtState = "0";
          break;
        case "已发布":
          this.IsArtState = "1";
          break;
        case "已删除":
          this.IsArtState = "2";
          break;
      }
    },
    // 文章筛选
    category() {
      if (this.IsKeywords === "请选择文章分类") {
        alert("请先选择文章分类");
        this.IsKeywords = "";
        this.$refs.select.clearInfo();
      }
      const artInfo = {
        author: this.author,
        artSort: "" || this.IsSort,
        artKeywords: "" || this.IsKeywords === undefined ? "" : this.IsKeywords,
        artState: "" || this.IsArtState,
      };
      this.$http.get("/article/getArtInfo", artInfo).then((res) => {
        this.$refs.select.clearInfo();
        this.checked = false;
        this.checkboxList = [];
        this.IsSort = "";
        this.IsKeywords = "";
        this.IsArtState = "";
        this.article = [];
        const article = res.data;
        if (article !== undefined) {
          for (let i = 0; i < article.length; i++) {
            article[i].artTime = new Date(article[i].artTime).toLocaleString();
            article[i].id = i;
            this.article.push(article[i]);
          }
          // 页码初始化
          function getNum(num) {
            switch (num.toString().length) {
              case 1:
                return (num = 1);
              case 2:
                return (num =
                  parseFloat(num / 10) === num / 10 ? num / 10 : num / 10 + 1);
              case 3:
                return (num =
                  parseFloat(num / 10) === num / 10 ? num / 10 : num / 10 + 1);
            }
          }
          const ol = this.$refs.pageNum;
          ol.innerHTML = "";
          let nums = getNum(article.length);
          // 根据筛选出的数据渲染页码
          for (let i = 0; i < nums; i++) {
            const li = document.createElement("li");
            li.className = "page-item";
            li.innerHTML = `<a href="javascript:;" class="page-link">${
              i + 1
            }</a>`;
            ol.appendChild(li);
            ol.children[0].classList.add("active");
            // 当前显示列表数组初始化
            const initCurrent = (start, end) => {
              this.currentArticle = [];
              for (let j = start; j < end; j++) {
                if (this.article[j] !== undefined) {
                  this.currentArticle.push(this.article[j]);
                }
              }
            };
            initCurrent(0, 10);
            li.onclick = () => {
              const lis = ol.children;
              for (let x = 0; x < lis.length; x++) {
                lis[x].classList.remove("active");
                lis[i].classList.add("active");
              }
              initCurrent(i * 10, (i + 1) * 10);
            };
          }
        } else {
          this.currentArticle = [];
          const ol = this.$refs.pageNum;
          ol.innerHTML = "";
        }
      });
    },
    // 修改文章信息
    editorArt(id) {
      this.show = !this.show;
      this.$refs.editor.style.display = "flex";
      this.data = JSON.parse(JSON.stringify(this.article[id]));
      this.$http
        .get("/article/getSortname", this.article[id].sid)
        .then((res) => {
          this.data.sortname = res.data[0].sortname;
        });
      this.$http
        .get("/article/getKeywords", this.article[id].kid)
        .then((res) => {
          this.data.keywords = res.data[0].keywords;
        });
      setTimeout(() => {
        this.title = this.data.artTitle;
        this.$EventBus.$emit("setEditor", this.data.artContent);
        this.$EventBus.$emit("setSelect", this.data);
      });
    },
    // 修改文章标题
    upTitle() {
      this.data.artTitle = this.title;
    },
    // 完成修改
    editor() {
      // 控制文章修改弹窗的显示隐藏
      this.show = !this.show;
      this.$refs.editor.style.display = "";
      // 将Select分类下拉菜单组件数据清空
      this.$refs.select.clearInfo();
      // 更新文章分类，关键词，状态的数据
      this.$EventBus.$off("updata").$EventBus.$on("updata", (data) => {
        if (data.sortname) {
          this.$http.get("/article/getSid", data.sortname).then((res) => {
            this.data.sid = res.data[0].sid;
          });
        }
        if (data.keywords) {
          this.$http.get("/article/getKid", data.keywords).then((res) => {
            this.data.kid = res.data[0].kid;
          });
        }
        if (data.artState) {
          switch (data.artState) {
            case "待审核":
              this.data.artState = 0;
              break;
            case "已发布":
              this.data.artState = 1;
              break;
            case "已删除":
              this.data.artState = 2;
              break;
          }
        }
      });
      // 删除之前追加的分类名称与关键词名称属性
      delete this.data.sortname;
      delete this.data.keywords;
      this.$EventBus.$off("editorData").$EventBus.$on("editorData", (data) => {
        this.data.artContent = data.html;
      });
      // 将修改后的数据同步至视图
      this.article[this.data.id] = this.data;
      this.currentArticle[this.data.id % 10] = this.data;
      alert("别忘记与数据库同步更新咯");
    },
    // 更新文章信息
    updataArt() {
      // 发送更新文章的ajax请求
      this.$http
        .put("/article/updateArt", this.$qs.stringify(this.data))
        .then((res) => {
          alert(res.Message);
          this.reload();
        });
    },
    // 删除该文章
    deleteArt() {
      // 如果勾选了全选按钮，对所有文章状态进行处理
      if (this.checked) {
        const del = confirm("确定要删除该文章吗？");
        for (let i = 0; i < this.article.length; i++) {
          // 将
          if (del && this.article[i].artState !== 2) {
            this.$http
              .put(
                "/article/delArt",
                // 对于urlencoded标头的传参要使用QS.stringify序列化
                this.$qs.stringify({
                  artID: this.article[i].artID,
                })
              )
              .then((res) => {});
            this.reload();
          }
        }
      } else {
        const del = confirm("确定要删除文章吗？");
        if (del) {
          for (let i = 0; i < this.checkboxList.length; i++) {
            this.$http
              .put(
                "/article/delArt",
                // 对于urlencoded标头的传参要使用QS.stringify序列化
                this.$qs.stringify({
                  artID: this.article.find((val) => {
                    return (
                      val.artID === this.checkboxList[i] && val.artState !== 2
                    );
                  }).artID,
                })
              )
              .then((res) => {});
            this.reload();
          }
        }
      }
    },
  },
  created() {
    this.category();
  },
  watch: {
    // 监听已勾选的checkbox实现反选
    checkboxList() {
      if (this.checkboxList.length === this.article.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
  },
  filters: {
    changState(value) {
      switch (value) {
        case 0:
          return "待审核";
        case 1:
          return "已发布";
        case 2:
          return "已删除";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.artBox {
  .select {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    background: #fff;
    .order {
      .btn {
        height: 35px;
        margin-left: 20px;
        font-size: 14px;
        background: #384a52;
      }
    }
  }
  .article {
    height: 572px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 12%);
    background: #fff;
    table {
      margin-bottom: 0;
      table-layout: fixed;
      tbody {
        td {
          &:nth-child(4) {
            font-style: italic;
            span {
              padding: 3px 10px;
              color: #fff;
              font-size: 14px;
              border-radius: 5px;
            }
          }
        }
        .none {
          height: 520px;
          td {
            line-height: 520px;
          }
          &:hover {
            background: none;
          }
        }
        .list-enter-active,
        .list-leave-active {
          transition: all 0.4s;
        }

        .list-enter,
        .list-leave-to {
          opacity: 0;
          transform: translateY(30px);
        }
      }
      td {
        padding: 5px;
        line-height: 40px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:nth-child(1) {
          width: 50px;
        }
        &:nth-child(2) {
          width: 80px;
        }
        &:nth-last-child(1) {
          width: 150px;
        }
        label {
          width: 100%;
          height: 100%;
          margin: 0;
        }
      }
      .table-head {
        font-weight: 600;
      }
      .btn {
        font-size: 14px;
      }
    }
  }
  .table-bottom {
    height: 50px;
    padding: 5px 0;
    color: #fff;
    line-height: 38px;
    background: linear-gradient(to left, #607d8b, #384a52);
    a {
      text-decoration: underline !important;
    }
    .manger {
      width: 60px;
    }
  }
  .editor {
    position: absolute;
    left: 0;
    top: 0;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgb(0 0 0 / 12%);
    .editor-content {
      width: 60%;
      min-width: 700px;
      height: 600px;
      border-radius: 10px;
      background: #fff;
      z-index: 100;
      overflow: hidden;
      .btn {
        height: 35px;
        margin-left: 20px;
        font-size: 14px;
      }
      .toolbar {
        height: auto;
      }
      .text {
        height: auto;
      }
      .editor-title {
        width: 100%;
        font-size: 30px;
        font-weight: 700;
        text-align: center;
        background: #fff;
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
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>