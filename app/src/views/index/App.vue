<template>
  <div id="start">
    <div class="startbg">
      <img src="@/assets/image/start.png" alt="" />
    </div>
    <div class="logo"><img src="@/assets/image/logo.png" alt="" /></div>
    <div class="text">打开生活，发现美好</div>
    <a href="login"><div class="next"><img src="@/assets/image/arrow-right.png" alt="" /></div></a>
  </div>
</template>

<script>
export default {
  name: "#app",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@keyframes slide {
  0% {
    opacity: 0;
    transform: translate(-50px, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes scrollImg {
  0% {
    opacity: 0;
    //transform: rotate(-360deg);
    transform: rotate(-180deg) translate(50px, 0);
  }
  100% {
    opacity: 1;
    //transform: rotate(0);
    transform: rotate(0) translate(0, 0);
  }
}
#start {
  width: 100%;
  height: 100%;

  .startbg img {
    width: 100%;
    height: 100%;
  }

  .logo img {
    position: absolute;
    width: 60px;
    height: 60px;
    margin-left: -30px;
    left: 50%;
    top: 36%;
    animation: scrollImg 2s ease;
    animation-fill-mode: forwards;
  }

  .next {
    position: absolute;
    background-color: #e83434;
    width: 54px;
    height: 54px;
    left: 50%;
    top: 56%;
    margin-left: -27px;
    border-radius: 50%;
    box-shadow: 0 0 20px #e83434;
    animation: slide 2s ease;
    animation-fill-mode: forwards;

    img {
      width: 24px;
      height: 24px;
      margin: 15px;
    }
  }

  .text {
    position: absolute;
    display: inline-block;
    left: 50%;
    top: 48%;
    margin-left: -77px;
  }
}
</style>
