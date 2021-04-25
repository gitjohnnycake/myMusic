<template>
  <div id="back">
    <div class="back">
      <img src="@/assets/image/back02.png" alt="" @click="goBack">
    </div>
  </div>
</template>

<script>
export default {
  name: '#back',
  data () {
    return {

    }
  },
  methods: {
    goBack () {
      window.history.back(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.back {
  width: 100%;
  height: 88px;

  img {
    width: 20px;
    height: 20px;
    top: 50px;
    left: 20px;
    position: relative;
  }
}
</style>