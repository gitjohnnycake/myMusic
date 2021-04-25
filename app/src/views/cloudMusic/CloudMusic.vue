<template>
  <div id="cloudMusic">
    <Search></Search>
    <Newsong></Newsong>
    <Recommend></Recommend>
    <MyLikeRecommendFm></MyLikeRecommendFm>
  </div>
</template>

<script>
import Search from "components/Search/Search";
import Recommend from "components/Recommend/Recommend";
import Newsong from "components/Newsong/Newsong";
import MyLikeRecommendFm from "components/MyLikeRecommendFm/MyLikeRecommendFm";

export default {
  name: "#cloudMusic",
  data() {
    return {
      recommendList: [],
    };
  },
  components: {
    Search,
    Recommend,
    Newsong,
    MyLikeRecommendFm
  },
  computed: {},
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
