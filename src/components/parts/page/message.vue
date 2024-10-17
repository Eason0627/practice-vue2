<template>
  <div class="col-12 col-md-10 mx-auto message">
    <div class="shadow link">
      <!-- 顶部路由链接 -->
      <ul class="text-center mt-3">
        <!-- 1. 我的评论 -->
        <li>
          <router-link to="/home/message/myComment">我的评论</router-link>
        </li>
        <!-- 2. 留言板消息 -->
        <li>
          <router-link to="/home/message/msgBoard">留言板</router-link>
        </li>
        <!-- 3. 回复我的 -->
        <li>
          <router-link to="/home/message/reply">评论和回复</router-link>
        </li>
        <!-- 4. 私密评论 -->
        <li>
          <router-link to="/home/message/secret">私密评论</router-link>
        </li>
        <!-- 5. 文章收到的赞 -->
        <li>
          <router-link to="/home/message/support">收到的赞</router-link>
        </li>
        <!-- 6. 系统通知: 文章审核状态通知 -->
        <li>
          <router-link to="/home/message/system">系统通知</router-link>
        </li>
      </ul>
      <!-- 内容路由  -->
      <div class="shadow router">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.message {
  max-width: 960px;
  padding: 5px;
  .link {
    background: #607d8b;
    ul {
      height: 45px;
      white-space: nowrap;
      overflow: hidden;
      overflow-x: auto;
      li {
        display: inline-block;
        width: 100px;
        line-height: 45px;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          background: #384a52;
        }
        a {
          display: block;
          width: 100%;
          height: 100%;
          color: #fff;
          user-select: none;
        }
      }
      &::-webkit-scrollbar {
        height: 5px;
      }
      &::-webkit-scrollbar-thumb {
        width: 50px;
        height: 5px;
        border-radius: 10px;
        background: rgb(189, 189, 189);
      }
    }
    .router-link-exact-active {
      color: #fff;
    }
    .router-link-exact-active::after {
      top: unset;
      left: 25%;
      bottom: 3px;
      width: 50px;
      height: 4px;
      box-shadow: 0px 0px 10px rgb(255, 255, 255);
    }
  }
  .router {
    background: #fff;
  }
}
</style>