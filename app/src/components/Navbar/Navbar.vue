<template>
  <div id="navbar">
    <div class="navbar">
      <ul class="navList">
        <a
          :href="item.href"
          v-for="(item, index) in navList"
          :key="index"
          @click="checked(index)"
          class="navItem"
          ><li>
            <img class="navImg" :src="item.src" alt="" />
            <span class="navText">{{ item.name }}</span>
          </li></a
        >
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
          href: "/cloudMusic",
        },
        {
          name: "丘丘音乐",
          src: "/image/qq.png",
          href: "/qqMusic",
        },
        {
          name: "我的我的",
          src: "/image/logo.png",
          href: "/my",
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
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
a {
  color: #000;
}
ul {
  list-style: none;
}
.noCheck {
  color: #000;
}
.navbar {
  width: 100%;
  background-color: #fbfbfb;

  .navList {
    width: 100%;
    height: 500px;
    display: flex;
    margin-top: 80px;
    flex-direction: column;

    .navItem {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40%;
      margin: 20px auto;
      box-shadow: 0 0 8px #f9cccc;
      border-radius: 8px;

      .navImg {
        display: block;
        width: 32px;
        margin: auto;
        margin-top: 12px;
        height: 32px;
        animation: scrollImg 2s linear infinite;
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
