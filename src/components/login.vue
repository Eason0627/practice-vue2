<template>
  <form>
    <div class="logBox">
      <h4 class="text-center">
        <span v-if="confirm">账号注册</span><span v-else>用户登录</span>
      </h4>
      <div class="form-group">
        <label for="exampleInputEmail1">用户名 username</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="请输入邮箱地址"
          v-model.trim="username"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密码 password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入密码"
          v-model.trim="password"
        />
      </div>
      <div class="form-group" v-if="confirm">
        <label for="exampleInputPassword2">确认密码 password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword2"
          placeholder="请再次确认密码"
        />
      </div>
      <!-- <div class="form-group clearfix emCode" v-if="confirm">
        <p>邮箱验证码</p>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="请输入邮箱验证码">
        <button type="button" class="btn btn-info getCode">点击发送</button>
      </div> -->
      <div class="form-group form-check rememberMe" v-else>
        <label class="form-check-label" for="exampleCheck1">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            @click="rememberMe"
          />记住我
        </label>
        <a
          href="#"
          class="forget float-right text-decoration-none"
          @click.prevent="forget"
          >忘记密码?</a
        >
      </div>
      <div class="form-group" v-if="confirm">
        <span class="back" @click="confirm = false">立即登录!</span>
        <button
          type="submit"
          class="btn btn-primary float-right submit"
          @click.prevent="submit"
        >
          提交
        </button>
      </div>
      <div class="form-group" v-else>
        <button
          type="submit"
          class="btn btn-info float-left register"
          @click.prevent="register"
        >
          注册
        </button>
        <button
          type="submit"
          class="btn btn-primary float-right login"
          @click.prevent="login"
        >
          登录
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import $ from "jquery";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      confirm: "",
    };
  },
  methods: {
    // 记住用户信息功能
    rememberMe() {
      const sure = alert("请勿在公共电脑保存账号信息！！！");
    },
    // 忘记密码功能
    forget() {
      console.log(222);
    },
    // 注册功能
    register() {
      this.confirm = true;
      this.username = "";
      this.password = "";
    },
    // 提交表单信息功能
    submit() {
      const username = $.trim($('input[type="email"]').val());
      const password1 = $.trim($("#exampleInputPassword1").val());
      const password2 = $.trim($("#exampleInputPassword2").val());
      const regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      const regPwd = /^[a-zA-Z]\w{5,17}$/;
      if (!username || !password1) {
        alert("请输入用户名和密码!");
      } else if (!regEmail.test(username)) {
        alert("用户名为邮箱格式!");
      } else if (!regPwd.test(password1)) {
        alert("密码以字母开头,长度在6~18之间，只能包含字母、数字和下划线!");
      } else if (password2 !== password1) {
        alert("两次密码输入不一致!");
      } else {
        const data = this.$qs.stringify({
          username: this.username,
          password: password1,
        });
        this.$http.post("/user/register", data).then((res) => {
          alert(res.Message);
        });
      }
    },
    // 登录功能
    login() {
      const data = this.$qs.stringify({
        username: this.username,
        password: this.password,
      });
      this.$http
        .post("/user/login", data)
        .then((res) => {
          alert(res.Message);
          this.$store.commit("setToken", res.token);
          localStorage.setItem("token", res.token);
          this.$store.commit("setUsername", res.user.username);
          localStorage.setItem("username", res.user.username);
          this.$store.commit("setNickName", res.user.nickname);
          localStorage.setItem("nickname", res.user.nickname);
          this.$store.commit("setUserImg", res.user.userImg);
          localStorage.setItem("userImg", res.user.userImg);
          this.$store.commit("setUserLevel", res.user.level);
          localStorage.setItem("level", res.user.level);
          this.$router.push("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less" scoped>
@bodyColor: #455a64;
@boxColor: #cfd8dc;

form {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: @bodyColor;
  .logBox {
    width: 400px;
    padding: 20px;
    font-size: 14px;
    border-radius: 15px;
    background: @boxColor;
    box-shadow: 0 5px 10px rgba(255, 255, 255, 0.4);
    .emCode {
      input {
        float: left;
        width: 60%;
      }
      .getCode {
        float: right;
      }
    }

    .rememberMe {
      font-size: 14px;
    }
    .submit {
      float: none !important;
      margin-left: 40%;
    }
    .back {
      float: right;
      line-height: 36px;
      color: #007bff;
      text-decoration: underline;
      cursor: pointer;
    }

    button {
      padding: 5px 20px;
      font-size: 16px;
    }
  }
}

@media (max-width: 576px) {
  form {
    .logBox {
      display: flex;
      width: 100%;
      height: unset;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 0;
      font-size: 16px;
      .form-group {
        width: 90%;
      }
      .form-control {
        height: 50px;
      }
      .rememberMe {
        font-size: 16px;
      }

      button {
        padding: 10px 30px;
      }
    }
  }
}
</style>
