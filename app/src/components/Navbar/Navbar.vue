<template>
  <div id="navbar">
    <div class="navbar">
      <ul class="navList">
        <li
          class="navItem"
          v-for="(item, index) in navList"
          :key="index"
          @click="checked(index)"
        >
          <router-link :to="{ path : item.router }">
          <a
            :class="[isIndex == index ? 'checkText' : 'noCheck']"
            ><img
              class="navImg"
              :src="item.src"
              alt=""
              :class="{ check: isIndex == index }"
            />
            <span class="navText">{{ item.name }}</span></a
          >
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "云音乐",
          src: "/image/wyyyy.png",
          router: 'cloudMusic'
        },
        {
          name: "丘丘音乐",
          src: "/image/qq.png",
          router: 'qqMusic'
        },
        {
          name: "我的我的",
          src: "/image/logo.png",
          router: 'my'
        },
      ],
      tranitionClass: "jump",
      isIndex: 0,
    };
  },
  methods: {
    checked(index) {
      console.log(index);
      this.isIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
@keyframes scrollImg {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
a {
  color: #000;
}
.check {
  animation: scrollImg 1s ease;
  animation-fill-mode: forwards;
}
.checkText {
  color: rgb(253, 154, 154);
}
.noCheck {
  color: #000;
}
.navbar {
  width: 100%;
  height: 76px;
  background-color: #fff;
  bottom: 0;
  position: absolute;

  .navList {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    .navItem {
      flex: 1;
      display: block;

      .navImg {
        display: block;
        width: 32px;
        margin: auto;
        margin-top: 12px;
        height: 32px;
      }

      .navText {
        display: block;
        font-size: 12px;
        text-align: center;
        padding: 4px;
      }
    }
  }
}
</style>
