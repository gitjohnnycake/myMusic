<template>
  <div id="qqMusic">
    <Search></Search>
    <Newsong></Newsong>
    <Recommend></Recommend>
    <MyLikeRecommendFm></MyLikeRecommendFm>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Search from "components/Search/Search";
import Recommend from "components/Recommend/Recommend";
import Navbar from "components/Navbar/Navbar";
import Newsong from "components/Newsong/Newsong";
import MyLikeRecommendFm from "components/MyLikeRecommendFm/MyLikeRecommendFm";
export default {
  name: "#qqMusic",
  data() {
    return {};
  },
  components: {
    Navbar,
    Search,
    Recommend,
    Newsong,
    MyLikeRecommendFm,
  },
};
</script>

<style lang="less" scoped></style>
