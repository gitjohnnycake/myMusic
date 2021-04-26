<template>
  <div id="my">
    <Back></Back>
    <div class="myProfile">
      <div class="nameImg">
        <div class="info">
          <div class="name">我是签名</div>
          <div class="sign">我是签名</div>
        </div>
        <div class="avatar"><img src="@/assets/image/start.png" alt="" /></div>
      </div>
      <div class="fans">
        <ul>
          <li class="follower">
            200
            <p>粉丝</p>
          </li>
          <li class="following">
            300
            <p>关注</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="domain">
      <a href="" class="download"><div><img src="@/assets/image/download.png" alt="">历史下载</div></a>
      <a href="" class="help"><div><img src="@/assets/image/help.png" alt="">帮助反馈</div></a>
      <a href="" class="setting"><div><img src="@/assets/image/setting.png" alt="">设置中心</div></a>
    </div>
    <div class="logout" @click="logout">退出</div>
  </div>
</template>

<script>
import Back from "components/Back/Back";
export default {
  name: "my",
  data() {
    return {};
  },
  components: {
    Back,
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
  }
};
</script>

<style lang="less" scoped>
.myProfile {
  display: flex;
  flex-direction: column;
  height: 180px;
  background-color: #fbfbfb;
  border-bottom-right-radius: 30%;
  border-bottom-left-radius: 30%;

  .nameImg {
    flex: 1;
    display: flex;

    .info {
      flex: 3;
      margin-left: 20px;
      margin-top: 20px;

      .name {
        font-size: 16px;
      }

      .sign {
        font-size: 12px;
        margin-top: 4px;
        color: #a0a0a0;
      }
    }

    .avatar {
      flex: 1;
      width: 60px;
      height: 95px;
      margin-right: 20px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .fans {
    flex: 1;
    box-shadow: 0 6px 10px -5px #f9cccc;
    border-bottom-right-radius: 30%;
    border-bottom-left-radius: 30%;
    margin-bottom: 10px;

    ul {
      display: flex;
      list-style: none;

      li {
        margin: 12px 30px;
        text-align: center;

        p {
          font-size: 12px;
          color: #c0c0c0;
          font-weight: 300;
        }
      }

      .follower {
        margin-left: 100px;
        font-weight: 800;
      }

      .following {
        font-weight: 800;
      }
    }
  }
}

.domain {
  display: flex;
  margin-top: 10px;

  .download, .help, .setting {
    flex: 1;
    font-size: 12px;
    text-align: center;
    color: #000;

    img {
      width: 30px;
      height: 30px;
      margin: auto;
      display: block;
    }
  }
}

.logout {
  width: 60%;
  height: 20px;
  margin: 40px auto;
  padding: 10px;
  text-align: center;
  box-shadow: 0 0 8px #f9cccc;padding: 10px;
  border-radius: 8px;
  font-size: 14px;
}
</style>
