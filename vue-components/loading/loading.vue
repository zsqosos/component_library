<template>
  <div class="loading">
    <img height="24" width="24" src="./loading.gif">
    <p class="text">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable"

  .loading
    width: 100%
    text-align: center
    .text
      line-height: 20px
      font-size: $font-size-small
      color: $color-text-l
</style>
