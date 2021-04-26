<template>
  <div id="favoriteSongList">
    <div class="title">
      <img src="@/assets/image/start.png" alt="" />
      <span>我的最爱</span>
    </div>
    <div class="commentBox">
      <ul>
        <li class="comments">评论</li>
        <li class="line">|</li>
        <li class="share">分享</li>
      </ul>
    </div>
    <div class="list">
      <ul class="listBox">
        <a href="cloudMusicLyric"><li class="listItem">
          <div class="itemId">
            1
          </div>
          <div class="image"><img src="@/assets/image/start.png" alt="" /></div>
          <div class="songName">
            <span class="name">我是歌曲名字</span>
            <span class="singer">我是歌手</span>
          </div>
          <div class="more">···</div>
        </li></a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "#favoriteSongList",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@listItemWidth: 40px;
@font-12: 12px;
@font-14: 14px;
@fontLowerColor: #858383;
@fontUperColor: #000;
ul {
  list-style: none;
}
.title {
  box-shadow: 0 0 8px #f9cccc;
  padding: 30px;

  img {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
  }

  span {
    display: block;
    margin: 10px auto;
    text-align: center;
  }
}

.commentBox {
  width: 80%;
  background-color: #fff;
  margin: -30px auto;
  border-radius: 10px;
  box-shadow: 0 0 8px #f9cccc;

  ul {
    display: flex;

    li {
      flex: 1;
      text-align: center;
      padding: 20px;
      font-size: @font-14;
    }

    .line {
      color: @fontLowerColor;
    }
  }
}

.list {
  margin-top: 50px;

  .listItem {
    display: flex;
    margin: 10px 0;

    .itemId {
      flex: 1;
      text-align: center;
      font-size: @font-14;
      line-height: @listItemWidth;
      color: @fontLowerColor;
    }

    .image {
      flex: 2;

      img {
        width: @listItemWidth;
        height: @listItemWidth;
        display: block;
        border-radius: 10px;
      }
    }

    .songName {
      flex: 12;
      display: flex;
      flex-direction: column;

      .name,
      .singer {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .name {
        font-size: @font-14;
        color: @fontUperColor;
      }

      .singer {
        font-size: @font-12;
        color: @fontLowerColor;
      }
    }

    .more {
      flex: 1;
      line-height: @listItemWidth;
      margin-right: 10px;
    }
  }
}
</style>
