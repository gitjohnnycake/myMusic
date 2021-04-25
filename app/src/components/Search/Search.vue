<template>
  <div id="search">
    <div class="serach">
      <div class="inputBox">
        <img class="searchIcon" src="@/assets/image/lock.png" alt="" />
        <input type="text" placeholder="搜索热门歌曲" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#search {
  margin: 20px auto;

  .serach {
    width: 100%;

    .inputBox {
      width: 70%;
      margin: auto;
      background-color: #f5f5f5;
      border-radius: 10px;

      .searchIcon {
        width: 18px;
        height: 18px;
        top: 4px;
        left: 10px;
        position: relative;
      }

      input {
        width: 80%;
        height: 30px;
        border: none;
        outline: none;
        font-size: 12px;
        background-color: transparent;
        padding: 2px;
        margin-left: 14px;
      }
    }
  }
}
</style>
