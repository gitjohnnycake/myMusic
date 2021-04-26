<template>
  <div id="qqMusic">
    <Back></Back>
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
import Back from "components/Back/Back";
export default {
  name: "#qqMusic",
  data() {
    return {};
  },
  components: {
    Back,
    Search,
    Recommend,
    Newsong,
    MyLikeRecommendFm,
  }
};
</script>

<style lang="less" scoped>

</style>
