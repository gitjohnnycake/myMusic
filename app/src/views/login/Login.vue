<template>
  <div id="login">
    <Back></Back>
    <div class="title">欢迎来到摄图</div>
    <div class="loginBox">
      <div class="phone">
        <span class="phoneIcon"><img src="@/assets/image/phone.png" alt=""/></span>
        <span class="line">|</span>
        <div class="inputBox">
          <input
            type="text"
            placeholder="请输入手机号码"
            v-model="phone"
            @change="se"
          />
        </div>
      </div>
      <div class="password">
        <span class="psdIcon"><img src="@/assets/image/lock.png" alt=""/></span>
        <span class="line">|</span>
        <div class="inputBox">
          <input type="password" placeholder="请输入密码" v-model="password" />
        </div>
      </div>
    </div>
    <p class="checkBox"><input type="checkbox">记住我</p>
    <div class="loginBtn" @click="checkLogin">登陆</div>
    <div class="agreement"><a href="agreement">登陆即同意 用户协议</a></div>
  </div>
</template>

<script>
//import { getCountInfo } from "@/api/api";
//import { Toast } from "vant";
import Back from 'components/Back/Back'
export default {
  name: "#login",
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  components: {
    Back
  },
  methods: {
    checkLogin() {
      window.location.href = '/frontPage';
      let reg_tel = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
      if (this.phone == "") {
        Toast("手机号不能为空");
      } else if (!reg_tel.test(this.phone) || this.phone.length != 11) {
        Toast("请输入正确的手机号");
      } else if (this.password == "") {
        Toast("密码不能为空");
      } else {
        getCountInfo({
          params: {
            phone: this.phone,
            password: this.password,
          },
        })
          .then((res) => {
            console.log(res);
            if (res.data.code == 502) {
              Toast("密码错误");
            } else if (res.data.code == 200) {
              Toast("登陆成功");
              localStorage.setItem('token', res.token)
              window.location.href = '/cloudMusic';
            }a1043eedb006767e640fac4a56632d0b9daa0bad6d76a4d0e7a43616ccbc10a89cb4377b2d7ba249
          })
          .catch((err) => {
            Toast("网络出错啦！");
            console.log(err);
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@keyframes titleOpen {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes up {
  0% {
    transform: translate(0, 50px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.title {
  text-align: center;
  margin-top: 60px;
  font-size: 22px;
  animation: titleOpen 1s ease;
  animation-fill-mode: forwards;
}

.loginBox {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 80px;
  align-items: center;
  justify-content: center;

  .phone,
  .password {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex: 1;
    width: 70%;
    border-radius: 26px;
    background-color: #f5f5f5;

    .phoneIcon img,
    .psdIcon img {
      padding: 10px;
      float: left;
      width: 22px;
      height: 22px;
      margin-left: 6px;
    }

    .line {
      text-align: center;
      line-height: 40px;
    }

    .inputBox {
      width: 100%;
    }

    .inputBox input {
      width: 80%;
      height: 20px;
      margin: 12px;
      outline: none;
      border: none;
      background-color: #f5f5f5;
    }
  }
}

.loginBox,
.loginBtn {
  animation: up 1s ease;
  animation-fill-mode: forwards;
}

.loginBtn {
  width: 70%;
  background-color: #000;
  height: 44px;
  display: block;
  color: #fff;
  border-radius: 26px;
  margin: 60px auto;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
}
.agreement {
  width: 100%;
  font-size: 10px;
  margin: 50px auto;
  text-align: center;

  a {
    color: #c0c0c0;
    text-decoration: underline;
  }
}

.checkBox {
  display: inline;
  float: right;
  margin: 10px 70px 0 0;
  font-size: 12px;
  text-align: center;
  animation: up 1s ease;
  animation-fill-mode: forwards;
  
  input {
    width: 10px;
    height: 10px;
    margin-right: 2px;
  }
}
</style>
