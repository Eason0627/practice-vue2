<template>
  <aside ref="menu">
    <div class="logo">My Blog</div>
    <ul class="d-flex flex-column justify-content-start align-items-start">
      <li>
        <router-link to="/home/index" replace>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
          首页
        </router-link>
      </li>
      <li>
        <router-link to="/home/article" replace>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wenzhangguanli"></use>
          </svg>
          文章管理
        </router-link>
      </li>
      <li>
        <router-link to="/home/putArt" replace>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bianjiwenzhang_huaban"></use>
          </svg>
          发布文章
        </router-link>
      </li>
      <li>
        <router-link to="/home/message" replace>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglun"></use>
          </svg>
          访客互动
        </router-link>
      </li>
      <li>
        <router-link to="/home/setting" replace>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shezhi"></use>
          </svg>
          其他设置
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  methods: {
    close() {
      if (this.$refs.menu.style.transform === "translateX(-180px)") {
        this.$refs.menu.style.transform = "translateX(0px)";
        this.$refs.menu.style.width = "180px";
      } else {
        this.$refs.menu.style.transform = "translateX(-180px)";
        this.$refs.menu.style.width = "0px";
      }
    },
  },
  mounted() {
    function getWindowInfo() {
      let timer = null;

      return function () {
        if (timer !== null) {
          clearTimeout(timer);
        }

        timer = setTimeout(() => {
          const windowInfo = {
            width: window.innerWidth,
            hight: window.innerHeight,
          };
          console.log(windowInfo);
        }, 500);
      };
    }
    window.addEventListener("resize", getWindowInfo);
  },
};
</script>

<style lang="less" scoped>
aside {
  float: left;
  width: 180px;
  height: 100%;
  background: linear-gradient(to bottom, #607d8b, #384a52);
  transition: all 0.4s;
  .logo {
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 30px;
    font-style: italic;
    letter-spacing: 3px;
    font-weight: 600;
    color: #fff;
    text-shadow: 0px 8px 4px #91ffda, 0px -4px 4px #68fdcc;
  }
  ul {
    li {
      position: relative;
      width: 100%;
      height: 50px;
      line-height: 50px;
      // border-bottom: 1px solid #384a52;
      a {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        color: #fff;
        overflow: hidden;
        &:hover {
          background: #384a52;
        }
      }
    }
  }
}
</style>