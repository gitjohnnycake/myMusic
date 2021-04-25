<template>
  <div id="newSong">
    <div class="newSong">
      <swiper
      class="asd"
        :slides-per-view="1"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
        :speed="900"
        :loop="true"
      >
        <swiper-slide
          ><img src="@/assets/image/start.png" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/image/start.png" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/image/start.png" alt=""
        /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
//import 'swiper/components/effectFade/effectFade.less';

// Import Swiper styles
import "swiper/swiper.less";
// install Swiper modules
SwiperCore.use([Autoplay]);
export default {
  name: "#newSong",
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      //console.log("slide change");
    }
  },
};
</script>

<style lang="less" scoped>
.newSong {
  width: 100%;
  border-radius: 8px;
  height: 140px;

  img {
    width: 90%;
    margin: auto;
    display: block;
    height: 135px;
    border-radius: 8px;
    box-shadow: 0 0 4px #f9cccc;
  }
}
</style>
