<template>
  <div id="recommend">
    <div class="recommend">
      <div class="title">
        <span>推荐歌单</span>
      </div>
      <div class="listBox">
        <div class="list">
          <div class="listItem">
            <a href=""><img src="@/assets/image/start1.png" alt=""/></a>
            <span>文字描述asdasdasd</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "#recommend",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.recommend {
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(250, 128, 114, 0.61);
  width: 90%;
  margin: 10px auto;
  border-radius: 8px;

  .title {
    flex: 1;
    font-size: 14px;
    margin-top: 4px;

    span {
      margin-left: 14px;
    }
  }
  .listBox {
    width: 93%;
    margin: auto;
    overflow: hidden;

    .list {
      margin: 6px auto;
      flex: 4;
      display: flex;
      overflow-x: scroll;
      overflow-y: hidden;
      width: 1000px;

      .listItem {
        width: 78px;
        height: 100%;
        margin-right: 10px;

        a {
          display: block;
          width: 100%;
          height: 78px;
          border-radius: 8px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
          }
        }

        span {
          font-size: 12px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          display: block;
          margin: 2px 4px;
        }
      }
    }
  }
}
</style>
