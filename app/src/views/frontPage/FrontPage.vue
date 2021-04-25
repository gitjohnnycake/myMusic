<template>
  <div id="frontPage">
    <router-view></router-view>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from 'components/Navbar/Navbar'
export default {
  name: '#frontPage',
  data () {
    return {

    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="less" scoped>

</style>