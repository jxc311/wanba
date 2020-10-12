<template>
  <div id="app">
   <router-view></router-view>
        <van-tabbar v-model="active" :route="true" active-color='yellow' :placeholder="true">
          <van-tabbar-item icon="coupon-o" to="/home">玩吧</van-tabbar-item>
          <van-tabbar-item icon="smile-comment-o" to="/classify">消息</van-tabbar-item>
          <van-tabbar-item icon="bar-chart-o" to="/shopping">语音房</van-tabbar-item>
          <van-tabbar-item icon="aim" to="/discover">发现</van-tabbar-item>
          <van-tabbar-item icon="contact" to="/mine">我</van-tabbar-item>
        </van-tabbar>
  </div>
</template>

<script>
export default {
    data(){
        return{
            active:0
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
