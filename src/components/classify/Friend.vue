<template>
    <div>
        <van-nav-bar
          right-text="一起玩过"
          :left-arrow="true"
          @click-left="onClickLeft"
          @click-right="onClickRight"
          :placeholder="true"
          :fixed="true"
          :border="false"
        />
        <!-- 好友在玩 -->
        <div class="friend">好友在玩</div>
        <!-- 好友在玩列表 -->
        <div class="friendlist" v-for="(num,index) in list" :key="index">
            <div class="circle" :style="{background:num.color}"></div>
            <div class="renju">
                <div class="left">
                    <div>{{num.person}}</div>
                    <p>{{num.renju}}&emsp;{{num.room}}</p>
                </div>
                <div class="right" :style="{background:num.setting,border:num.bor}">{{num.with}}</div>
            </div>
        </div>
        <!-- 划分线 -->
        <div class="divide"></div>
        <!-- 可能认识的人 -->
        <div class="may">可能认识的人</div>
        <!-- 小麻雀外层 -->
        <div class="outer">
            <!-- 小麻雀 -->
            <div class="sparrow" v-for="(elm,ind) in nearby" :key="ind">
                <div class="round" :style="{background:elm.color}"></div>
                <div class="content">{{elm.cont}}</div>
                <div class="distance">{{elm.dist}}</div>
                <div class="neighbouring">{{elm.neig}}</div>
                <button>{{elm.btn}}</button>
            </div>
        </div>
    </div>
</template>

<script>
// import { Toast } from 'vant';
export default {
    methods: {
        onClickLeft() {
        // Toast('返回');
        this.$router.go(-1)
    },
        onClickRight(){
        this.$router.push('./encounter')
    }
  },
  data(){
      return{
          list:[
              {
                  color:'#F2F2F2',
                  person:'人人',
                  renju:'五子棋',
                  room:'1591668房',
                  with:'跟房',
                  setting:'#FFE204',
                  bor:''
              },
              {
                  color:'#F2F2F2',
                  person:'人人',
                  renju:'五子棋',
                  room:'',
                  with:'预约',
                  setting:'#ffffff',
                  bor:'1px solid #D1CAD1'
              },
              {
                  color:'#F2F2F2',
                  person:'人人',
                  renju:'五子棋',
                  room:'',
                  with:'预约',
                  setting:'#ffffff',
                  bor:'1px solid #D1CAD1'
              },
          ],
          nearby:[
              {
                  color:'#F2F2F2',
                  cont:'小麻雀',
                  dist:'距离1.9km',
                  neig:'附近的人',
                  btn:'+ 好友'
              },
              {
                  color:'#F2F2F2',
                  cont:'小麻雀',
                  dist:'距离1.9km',
                  neig:'附近的人',
                  btn:'+ 好友'
              },
              {
                  color:'#F2F2F2',
                  cont:'小麻雀',
                  dist:'距离1.9km',
                  neig:'附近的人',
                  btn:'+ 好友'
              },
              {
                  color:'#F2F2F2',
                  cont:'小麻雀',
                  dist:'距离1.9km',
                  neig:'附近的人',
                  btn:'+ 好友'
              },
          ]
      }
  }
}
</script>
<style lang="stylus" scoped>


</style>