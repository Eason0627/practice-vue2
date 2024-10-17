<template>
  <div class="d-flex justify-content-between mb-3 header">
    <div class="aside" @click="closeAside">
      <svg
        t="1652443865959"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4215"
        width="200"
        height="200"
      >
        <path
          d="M901.632 896H122.368c-30.72 0-55.808-25.088-55.808-55.808v-1.536c0-30.72 25.088-55.808 55.808-55.808h779.776c30.72 0 55.808 25.088 55.808 55.808v1.536c-0.512 30.72-25.6 55.808-56.32 55.808zM901.632 568.32H122.368c-30.72 0-55.808-25.088-55.808-55.808v-1.536c0-30.72 25.088-55.808 55.808-55.808h779.776c30.72 0 55.808 25.088 55.808 55.808v1.536c-0.512 30.72-25.6 55.808-56.32 55.808zM901.632 240.64H122.368c-30.72 0-55.808-25.088-55.808-55.808v-1.536c0-30.72 25.088-55.808 55.808-55.808h779.776c30.72 0 55.808 25.088 55.808 55.808v1.536c-0.512 30.72-25.6 55.808-56.32 55.808z"
          p-id="4216"
        ></path>
      </svg>
    </div>
    <div class="d-flex justify-content-between user">
      <div
        class="message"
        @click="
          $route.path === '/home/message/myComment'
            ? ''
            : $router.push('/home/message/myComment')
        "
      >
        <a href="javascript:;">
          <svg
            t="1652444200199"
            class="icon"
            viewBox="0 0 1027 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5757"
            width="200"
            height="200"
          >
            <path
              d="M1025.631 317.162c0.002-0.1 0.002-0.199 0.002-0.3l0-46.471-1.254-3.683c-13.853-40.689-46.175-66.979-82.341-66.979L81.968 199.729c-18.908 0-38.212 5.804-52.964 15.923-18.704 12.83-29.004 31.316-29.004 52.054l0 481.568c0 42.391 42.384 70.867 81.968 70.867L942.038 820.141c39.987 0 69.107-30.795 81.893-57.167l2.354-4.854L1026.285 322.687C1026.284 320.784 1026.058 318.934 1025.631 317.162zM526.531 495.854c-8.833 5.669-20.222 5.674-29.056 0.01l-88.244-57.875c-0.022-0.017-0.047-0.03-0.071-0.047L117.595 246.72l788.806 0L526.531 495.854zM46.989 749.273 46.989 267.705c0-3.182 1.304-6.145 3.515-8.789L357.688 460.382 47.025 750.052C47.01 749.792 46.989 749.535 46.989 749.273zM398.143 486.912l73.641 48.299 0.147 0.095c12.17 7.853 26.114 11.776 40.064 11.776 13.946 0 27.896-3.926 40.065-11.775l79.249-51.975 307.465 289.818L91.159 773.15 398.143 486.912zM671.708 456.837l297.348-195.012c3.976 4.977 7.227 10.75 9.585 16.642l0 38.395c0 1.903 0.226 3.753 0.653 5.526-0.001 0.1-0.002 0.2-0.002 0.301l0 424.075L671.708 456.837z"
              p-id="5758"
            ></path>
          </svg>
        </a>
      </div>
      <div class="level">
        <a href="javascript:;" class="text-primary">{{ level }}</a>
      </div>
      <div class="userInfo">
        <a href="javascript:;" @click="showInfo" @blur="closeInfo">
          <img :src="userImg" alt="" />
        </a>
        <div class="shadow infoBox" v-show="show">
          <ul class="list-unstyled">
            <li>
              <div class="d-flex headBox">
                <img :src="userImg" />
                <div class="textBox">
                  <div class="nickname">{{ nickname }}</div>
                  <div class="username">{{ username }}</div>
                </div>
              </div>
            </li>
            <li>
              <div class="bodyBox">
                <a href="javascript:;">
                  <i
                    ><svg
                      t="1652452702700"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="7231"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M510 64.4c-246.5 0-447.6 200-447.6 447.6 0 246.5 200 447.6 447.6 447.6 246.5 0 447.6-200 447.6-447.6 0-246.5-200.1-447.6-447.6-447.6z m0 831.9c-212.3 0-384.3-172-384.3-384.3s172-384.3 384.3-384.3 384.3 172 384.3 384.3-172 384.3-384.3 384.3z m229.1-181.2c-18.4-70.4-67.9-125.5-131.2-153.6 48-30.6 79.6-84.2 79.6-144.9 0-94.9-77.1-172-172-172s-172 77.1-172 172c0 61.2 31.6 114.8 79.6 144.9-63.8 27.6-113.3 83.2-131.7 153.6-4.1 16.3 5.6 33.2 21.9 37.3 2.6 0.5 5.1 1 7.7 1 13.8 0 26-9.2 29.6-23 19.4-75 87.3-127.1 164.3-127.1S660 655.4 679.4 730.4c4.1 16.3 20.9 26 37.3 21.9 16.8-4 27-20.9 22.4-37.2zM515.6 305.8c61.2 0 110.7 49.5 110.7 110.7s-49.5 110.7-110.7 110.7-110.7-49.5-110.7-110.7 49.5-110.7 110.7-110.7z"
                        p-id="7232"
                      ></path></svg
                  ></i>
                  <span>个人中心</span>
                </a>
                <a href="javascript:;" @click="logOut">
                  <i>
                    <svg
                      t="1652453435477"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="12089"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M64 790.51V233.49c0-26.12 9.13-48.17 27.13-66.43 18.25-18.25 40.31-27.13 66.43-27.13h430.25c26.11 0 48.17 9.13 66.43 27.13 18.25 18.25 27.13 40.31 27.13 66.43v139.19h-93.56V233.49H157.56v557.02h430.25V651.32h93.56v139.19c0 26.12-9.13 48.17-27.13 66.43-18.25 18.25-40.31 27.13-66.43 27.13H157.56c-26.11 0-48.17-9.13-66.43-27.13-18-18.01-27.13-40.32-27.13-66.43z m896-278.38L772.89 327.3v139.19H355.06v91.28h417.83v139.19L960 512.13z"
                        p-id="12090"
                      ></path>
                    </svg>
                  </i>
                  <span>退出登录</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: this.$store.state.nickname,
      username: this.$store.state.username,
      userImg: this.$store.state.userImg,
      level: this.$store.state.level,
      show: false,
    };
  },
  methods: {
    closeAside() {
      this.$parent.$parent.$refs.aside.close();
      if (this.$parent.$refs.current.myEcharts) {
        setTimeout(() => {
          this.$parent.$refs.current.myEcharts.resize();
        }, 300);
      }
    },
    logOut() {
      const dec = confirm("是否退出登录!");
      if (dec) {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("nickname");
        localStorage.removeItem("userImg");
        localStorage.removeItem("level");
        this.$router.replace("/");
      }
    },
    showInfo() {
      this.show = !this.show;
    },
    closeInfo() {
      setTimeout(() => {
        this.show = false;
      }, 300);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  box-shadow: 0 2px 7px 0 rgb(5 34 97 / 10%);
  background: #fff;
  z-index: 100;
  .aside {
    width: 60px;
    text-align: center;
    font-size: 20px;
    line-height: 60px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
  .user {
    & > a,
    .message > a,
    .level > a,
    .userInfo > a,
    .logout > a {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0 20px;
      line-height: 60px;
      font-size: 14px;
      color: #c2c2c2;
      border-left: 1px solid #f2f3f5;
      transition: all 0.3s;
      &:hover {
        color: #999;
      }
    }
    .message {
      a {
        font-size: 20px;
      }
    }
    .userInfo {
      position: relative;
      img {
        width: 40px;
        border-radius: 50%;
      }
      .infoBox {
        position: absolute;
        top: 65px;
        left: -220px;
        width: 300px;
        background: #fff;
        z-index: 100;
        .headBox {
          padding: 20px;
          background-color: #242d4e;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          border-radius: 4px 4px 0 0;
          img {
            margin-top: 10px;
          }
          .textBox {
            flex: 1;
            margin-left: 16px;
            font-size: 14px;
            color: #fff;
            line-height: 2;
            word-break: keep-all;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .bodyBox {
          padding: 12px 0;
        }
      }
      .bodyBox {
        a {
          padding: 8px 28px;
          display: flex;
          flex-direction: row;
          align-items: center;
          color: #242d4e;
          font-size: 14px;
          &:hover {
            transition: background 0.25s;
            background-color: #e8edf6;
          }
          i {
            display: inline-block;
            width: 24px;
            height: 24px;
            line-height: 24px;
            font-size: 24px;
          }
          span {
            margin-left: 15px;
          }
        }
      }
    }
  }
}
</style>