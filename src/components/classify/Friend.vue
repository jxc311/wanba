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
// 好友在玩
.friend
   width 92px
   height 22px
   font-size 23px
   font-family PingFang
   font-weight bold
   color #333333   
   margin 21px 0 35px 18px
// 好友在玩列表
.friendlist
   width 347px
   height 81px
   margin-left 14px
   display flex
   justify-content space-between
   align-items center
   .circle
      width: 51px;
      height: 51px;
      border-radius: 50%;  
   .renju
      width 284px
      height 100%
      display flex
      justify-content space-between
      align-items center  
      border-bottom 1px solid #E0DBE1
      .left
         height 33px
         div
           height 15px
           font-size 16px
           font-family PingFang
           font-weight bold
           color #333333  
           margin-bottom 8px
         p
           height 10px
           font-size 11px
           font-family PingFang
           font-weight 500
           color #333333    
      .right
         width 62px
         height 33px
         border-radius 7px                  
         font-size 14px
         font-family PingFang
         font-weight 500
         color #333333    
         display flex
         justify-content center
         align-items center     
// 划分线
.divide
   width 375px
   height 10px
   background #FCF7FB
   margin-top 33px
   margin-bottom 19px
// 可能认识的人
.may
   height 15px
   font-size 16px
   font-family PingFang
   font-weight 500
   color #333333  
   margin-left 15px
   margin-bottom 17px 
// 小麻雀外层
.outer
 display flex 
 overflow auto
// 小麻雀
 .sparrow
    width 150px
    height 222px
    border 1px solid #FCF7FB
    border-radius 3px   
    margin 0 9px 0 22px
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    .round
       width 77px
       height 77px
       border 1px solid #FCF7FB
       border-radius 50%
    .content
       height 13px
       font-size 14px
       font-family PingFang
       font-weight bold
       color #333333
    .distance
       width 67px
       height 13px
       font-size 14px
       font-family PingFang
       font-weight 500
       color #333333  
    .neighbouring
       height 11px
       font-size 11px
       font-family PingFang
       font-weight 500
       color #666666 
    button
       width 131px
       height 27px
       background #FFE204
       border-radius 13px    
       font-size 14px
       font-family PingFang
       font-weight bold
       color #333333
       border none

</style>