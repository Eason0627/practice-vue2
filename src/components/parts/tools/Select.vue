<template>
  <div class="selectBox d-flex flex-column flex-md-row clearfix">
    <div class="clearfix mr-3 position-relative float-left box">
      <div class="float-left d-none d-xl-block tips">分类</div>
      <div id="sort" class="float-left position-relative sort">
        <input
          type="text"
          placeholder="请选择文章分类"
          ref="sortBox"
          v-model="isSort"
          @click="addSort"
          readonly
        />
        <svg
          class="icon arrow position-absolute"
          aria-hidden="true"
          ref="arrow_1"
        >
          <use xlink:href="#icon-jiantoushang"></use>
        </svg>
      </div>
      <ul class="position-absolute shadow text-left option" v-show="flag_1">
        <li v-for="(item, index) in sortname" :key="index" @click="choiceSort">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="clearfix mr-3 position-relative float-left box">
      <div class="float-left d-none d-xl-block tips">关键词</div>
      <div id="sort" class="float-left position-relative sort">
        <input
          type="text"
          placeholder="请选择文章关键词"
          ref="keywords"
          v-model="isKeywords"
          readonly
        />
        <svg
          class="icon arrow position-absolute"
          aria-hidden="true"
          ref="arrow_2"
        >
          <use xlink:href="#icon-jiantoushang"></use>
        </svg>
      </div>
      <ul class="position-absolute shadow text-left option" v-show="flag_2">
        <li v-for="(item, index) in keywords" :key="index" @click="addKeywords">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="clearfix position-relative float-left box" v-if="state">
      <div class="float-left d-none d-xl-block tips">文章状态</div>
      <div id="sort" class="float-left position-relative sort">
        <input
          type="text"
          placeholder="文章状态"
          ref="artState"
          v-model="isArtState"
          readonly
        />
        <svg
          class="icon arrow position-absolute"
          aria-hidden="true"
          ref="arrow_3"
        >
          <use xlink:href="#icon-jiantoushang"></use>
        </svg>
      </div>
      <ul class="position-absolute shadow text-left option" v-show="flag_3">
        <li v-for="(item, index) in artState" :key="index" @click="addArtState">
          {{ item }}
        </li>
      </ul>
    </div>
    <!-- <div class="clearfix position-relative float-left box" v-if="!state">
      <div
        id="file-btn"
        class="float-left position-relative btn btn-outline-primary"
      >
        <input type="file" />
        <span>上传文章封面</span>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: false || this.State, // 控制文章状态栏的显示
      sortname: [], // 分类名称
      keywords: [], // 关键词
      artState: ["待审核", "已发布", "已删除"], // 文章状态
      isSort: "", // 显示的分类名
      isKeywords: "", // 显示的关键词
      isArtState: "", // 显示的文章状态
      flag_1: false, // 控制箭头1旋转
      flag_2: false, // 控制箭头2旋转
      flag_3: false, // 控制箭头3旋转
      updata: {},
    };
  },
  props: {
    State: {
      type: Boolean,
    },
  },
  methods: {
    // 选择文章分类的函数
    addSort() {
      this.$http.get("/article/getArtSort").then((res) => {
        this.sortname = [];
        res.data.forEach((value) => {
          this.sortname.push(value.sortname);
        });
      });
    },
    choiceSort(event) {
      const sortname = event.target.innerText;
      this.updata.sortname = sortname;
      this.isSort = sortname;
      // 将文章的分类与关键字传回父组件
      let data = {
        isSort: this.isSort,
      };
      this.$emit("getInfo", data);
      this.$http.get("/article/getArtKeywords", sortname).then((res) => {
        if (res.data.length > 0) {
          res.data.forEach((value, index) => {
            this.keywords[index] = res.data[index].keywords;
          });
        }
      });
    },
    // 选择文章关键词的函数
    addKeywords(event) {
      const keywords = event.target.innerText;
      this.updata.keywords = keywords;
      this.isKeywords = keywords;
      // 将文章的分类与关键字传回父组件
      let data = {
        isSort: this.isSort,
        isKeywords: this.isKeywords,
      };
      this.$emit("getInfo", data);
    },
    // 文章状态栏点击事件
    addArtState(event) {
      const artState = event.target.innerText;
      this.updata.artState = artState;
      this.isArtState = artState;
      // 将文章的分类与关键字传回父组件
      let data = {
        isSort: this.isSort,
        isKeywords: this.isKeywords,
        isArtState: this.isArtState,
      };
      this.$emit("getInfo", data);
    },
    clearInfo() {
      this.isSort = "";
      this.isKeywords = "";
      this.isArtState = "";
    },
  },
  created() {
    this.$EventBus.$off("setSelect").$EventBus.$on("setSelect", (data) => {
      setTimeout(() => {
        this.isSort = data.sortname;
        this.isKeywords = data.keywords;
        this.isArtState = this.artState[data.artState];
      }, 500);
      this.$http.get("/article/getArtKeywords", data.sortname).then((res) => {
        if (res.data) {
          res.data.forEach((value, index) => {
            this.keywords[index] = res.data[index].keywords;
          });
        }
      });
    });
  },
  mounted() {
    // 控制下拉菜单箭头旋转的函数
    this.$nextTick(function () {
      const sortBox = this.$refs.sortBox;
      const keywords = this.$refs.keywords;
      const arrow_1 = this.$refs.arrow_1;
      const arrow_2 = this.$refs.arrow_2;
      const arrow_3 = this.$refs.arrow_3;
      sortBox.onclick = () => {
        if (!this.flag_1) {
          arrow_1.style.transform = "rotate(0deg)";
          this.flag_1 = true;
        } else {
          arrow_1.style.transform = "rotate(180deg)";
          this.flag_1 = false;
        }
        sortBox.onblur = () => {
          setTimeout(() => {
            this.flag_1 = false;
            arrow_1.style.transform = "rotate(180deg)";
          }, 250);
        };
      };
      keywords.onclick = () => {
        if (!this.flag_2) {
          arrow_2.style.transform = "rotate(0deg)";
          this.flag_2 = true;
        } else {
          arrow_2.style.transform = "rotate(180deg)";
          this.flag_2 = false;
        }
        keywords.onblur = () => {
          setTimeout(() => {
            this.flag_2 = false;
            arrow_2.style.transform = "rotate(180deg)";
          }, 250);
        };
      };
      const artState = this.$refs.artState;
      if (artState) {
        artState.onclick = () => {
          if (!this.flag_3) {
            arrow_3.style.transform = "rotate(0deg)";
            this.flag_3 = true;
          } else {
            arrow_3.style.transform = "rotate(180deg)";
            this.flag_3 = false;
          }
          artState.onblur = () => {
            setTimeout(() => {
              this.flag_3 = false;
              arrow_3.style.transform = "rotate(180deg)";
            }, 250);
          };
        };
      }
    });
  },
  destroyed() {
    this.$EventBus.$emit("updata", this.updata);
  },
};
</script>

<style lang="less" scoped>
.selectBox {
  .box {
    height: 35px;
    .tips {
      height: 100%;
      padding: 0 10px;
      line-height: 35px;
      color: #fff;
      font-size: 14px;
      text-align: center;
      border-radius: 5px 0 0 5px;
      background: #384a52;
    }
    .sort {
      input {
        height: 35px;
        padding: 0;
        color: #333;
        font-size: 14px;
        padding-left: 10px;
        border: none;
        outline: none;
        border: 1px solid #ccc;
        transition: all 0.4s;
        cursor: pointer;
        &:hover {
          border: 1px solid #007bff;
        }
        &:focus {
          border: 1px solid #007bff;
          box-shadow: 0 1px 5px #3994f7;
        }
      }
    }
    .arrow {
      right: 10px;
      top: 10px;
      transform: rotate(180deg);
      font-size: 14px;
      color: #c5c5c5;
      transition: all 0.4s;
      pointer-events: none;
    }
    .option {
      top: 40px;
      right: 0;
      width: 170px;
      background: #fff;
      z-index: 10;
      li {
        height: 30px;
        padding: 0 10px;
        font-size: 14px;
        line-height: 30px;
        cursor: default;
        &:hover {
          background: #f1f1f1;
        }
      }
    }
    #file-btn {
      width: 100px;
      height: 35px;
      padding: 0;
      font-size: 14px;
      text-align: center;
      line-height: 35px;
      overflow: hidden;
      input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
  }
}
</style>