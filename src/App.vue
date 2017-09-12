<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab border-1px">
      <router-link tag="div" class="tab-item" :to="{path:'/goods'}">
        <a>商品</a>
      </router-link>
      <router-link tag="div" class="tab-item" :to="{path:'/comment'}">
        <a>评论</a>
      </router-link>
      <router-link tag="div" class="tab-item" :to="{path:'/seller'}">
        <a>商家</a>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header.vue';

  const ERR_OK = 0;

  export default {
    name: 'app',
    created () {
      this.$http.get('/api/seller').then((response) => {
        response = response.json();
        if (response.errno === ERR_OK) {
          console.log(11);
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl"
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, .1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
      &.router-link-active > a
        color: rgb(240, 20, 20)
</style>
