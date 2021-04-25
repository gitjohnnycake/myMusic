<template>
  <div id="myLikeRecommendFm">
    <div class="myLikeRecommendFm">
      <div class="myLike">
        <a href=""><img src="@/assets/image/start.png" alt="" /></a>
        <span>我喜欢的音乐 </span>
        <p>200 首</p>
        <p>已下载 100 首</p>
      </div>
      <div class="recommend">
        <a href=""><img src="@/assets/image/start1.png" alt="" /></a>
        <span>每日推荐</span>
      </div>
        <div class="fm">
          <a href=""><img src="@/assets/image/start.png" alt="" /></a>
          <span>私人FM</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "#myLikeRecommendFm",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.myLikeRecommendFm {
  width: 90%;
  height: 160px;
  margin: 14px auto;
  display: flex;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(250, 128, 114, 0.61);

  .myLike,
  .recommend,
  .fm {
    flex: 1;
    border-radius: 8px;
    margin: 10px;

    img {
      width: 100%;
      height: 70%;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(250, 128, 114, 0.61);
    }

    span {
      font-size: 12px;
      position: relative;
      top: -6px;
      left: 4px;
    }
  }

  p {
    float: right;
    color: #9b9b9b;
    font-size: 12px;
    position: relative;
    top: -10px;
  }
}
</style>
