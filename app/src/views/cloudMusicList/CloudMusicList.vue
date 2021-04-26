<template>
  <div id="cloudMusicList">
    <Back></Back>
    <FavoriteSongList></FavoriteSongList>
  </div>
</template>

<script>
import Back from "components/Back/Back";
import FavoriteSongList from "components/FavoriteSongList/FavoriteSongList";
export default {
  name: '#cloudMusicList',
  data () {
    return {

    }
  },
  components: {
    Back,
    FavoriteSongList
  }
}
</script>

<style lang="less" scoped>

</style>