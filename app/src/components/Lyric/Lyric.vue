<template>
  <div id="lyric">
    <div class="backGroundImg">
      <div class="rhythm">
        <ul>
          <li class="one"></li>
          <li class="two"></li>
          <li class="three"></li>
          <li class="four"></li>
          <li class="five"></li>
          <li class="six"></li>
        </ul>
      </div>
      <div class="share">

      </div>
      <div class="time">
        <div class="start">0:00</div>
        <div class="line">————————————————</div>
        <div class="end">3:20</div>
      </div>
      <div class="contro">
        <div class="name">我是歌曲名字</div>
        <div class="controler">
          <ul>
            <li>随机</li>
            <li>上一首</li>
            <li>暂停</li>
            <li>下一首</li>
            <li>等等</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "#lyric",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@opacity02: 0.2;
@opacity1: 1;
/* .backGroundImg {
  background: url('../../assets/image/start.png');
} */
@keyframes one {
  0% {
    height: 10px;
    opacity: @opacity02;
    transform: translate(0, 10px);
  }
  50% {
    height: 30px;
    transform: translate(0, 0px);
    opacity: @opacity1;
  }
  100% {
    height: 10px;
    transform: translate(0, 10px);
    opacity: @opacity02;
  }
}
@keyframes two {
  0% {
    height: 20px;
    opacity: @opacity02;
    transform: translate(0, 20px);
  }
  50% {
    height: 60px;
    transform: translate(0, 0px);
    opacity: @opacity1;
  }
  100% {
    height: 20px;
    transform: translate(0, 20px);
    opacity: @opacity02;
  }
}
@keyframes three {
  0% {
    opacity: @opacity02;
    height: 10px;
    transform: translate(0, 10px);
  }
  50% {
    height: 30px;
    transform: translate(0, 0px);
    opacity: @opacity1;
  }
  100% {
    height: 10px;
    opacity: @opacity02;
    transform: translate(0, 10px);
  }
}
@keyframes four {
  0% {
    height: 20px;
    opacity: @opacity02;
    transform: translate(0, 10px);
  }
  50% {
    height: 40px;
    transform: translate(0, 0px);
    opacity: @opacity1;
  }
  100% {
    height: 20px;
    transform: translate(0, 10px);
    opacity: @opacity02;
  }
}
@keyframes five {
  0% {
    height: 15px;
    opacity: @opacity02;
    transform: translate(0, 20px);
  }
  50% {
    height: 45px;
    transform: translate(0, 0px);
    opacity: @opacity1;
  }
  100% {
    height: 15px;
    transform: translate(0, 20px);
    opacity: @opacity02;
  }
}
@keyframes six {
  0% {
    height: 20px;
    opacity: @opacity02;
    transform: translate(0, 10px);
  }
  50% {
    height: 40px;
    transform: translate(0, 0px);
    opacity: @opacity1;
  }
  100% {
    height: 20px;
    opacity: @opacity02;
    transform: translate(0, 10px);
  }
}
.rhythm {
  ul {
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: center;
    height: 300px;

    li {
      width: 8px;
      height: 10px;
      background-color: cornflowerblue;
      margin: 100px 2px;
      border-radius: 10px;
      position: relative;
    }

    .one {
      height: 10px;
      top: 14px;
      animation: one 1.4s ease infinite;
    }

    .two {
      height: 20px;
      animation: two 1.4s 0.5s ease infinite;
    }

    .three {
      height: 10px;
      top: 20px;
      animation: three 1.4s 1s ease infinite;
    }

    .four {
      height: 20px;
      top: 5px;
      animation: four 1.4s 1.4s ease infinite;
    }

    .five {
      height: 15px;
      top: 10px;
      animation: five 1.4s 1.8s ease infinite;
    }

    .six {
      height: 20px;
      top: 18px;
      animation: six 1.4s 2s ease infinite;
    }
  }
}

.share {
  position: absolute;
  width: 40px;
  height: 200px;
  right: 10px;
  border: 1px solid;
}

.time {
  display: flex;
  width: 80%;
  margin: 200px auto 0 auto;
  height: 40px;

  .start,
  .end {
    flex: 1;
    text-align: center;
    line-height: 40px;
  }

  .line {
    flex: 4;
    text-align: center;
    line-height: 40px;
  }
}

.contro {
  position: relative;
  bottom: 0;
  height: 100px;

  .name {
    text-align: center;
    font-size: 12px;
    margin: 4px auto;
  }

  .controler {
    ul {
      display: flex;
      list-style: none;

      li {
        flex: 1;
        text-align: center;
        margin: 10px auto;
      }
    }
  }
}
</style>
