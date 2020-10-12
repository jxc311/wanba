<template>
    <div>
     <router-view></router-view>
     <van-tabs v-model="active" line-width='0' title-active-color='#000' title-active-style="font-size">
          <van-tab title="聊天" >
             <div class="nearby">
                 <div class="fujin">
                     <div class="title">
                         <p>附近的人</p>
                         <span>></span>
                     </div>
                     <div class="person">
                        <div class="head" v-for="(conu,ind) in img" :key="ind">
                            <div>
                                <img :src="conu.url" alt="">
                            </div>
                            <p>{{conu.content}}</p>
                            <span>{{conu.distance}}</span>
                        </div>
                     </div>
                 </div>
                 <div class="inform" v-for="(num,index) in list" :key="index">
                     <div class="yuan" :style="{background:num.color}"></div>
                     <div class="form">
                         <p class="p1">{{num.content1}}</p>
                         <p class="p2">{{num.content2}}</p>
                     </div>
                 </div>
             </div>
          </van-tab>
          <van-tab title="推荐" >
              <!-- 玩游戏遇到的人 -->
              <div class="game">
                  <div>玩游戏遇到的人</div>
                  <p></p>
                  <span>></span>
              </div>
              <!-- 附近在玩 -->
              <div class="play">附近在玩</div>
              <!-- 狼人游戏列表 -->
              <div class="list">
                  <div class="option" v-for="(num,index) in 9" :key="index" >
                      <div></div>
                      <p class="p1">zhi同学</p>
                      <p class="p2">狼人游戏(试炼)&nbsp;></p>
                      <span>1.9km</span>
                  </div>
              </div>
          </van-tab>
          <van-tab title="好友" to="./friend"></van-tab>
          <van-tab title="群组" ></van-tab>
          <van-tab title=""></van-tab>
          <van-tab title="+"></van-tab>

    </van-tabs>
    </div>
</template>

<script>
// import img1 from '../assets/images/tu1.png';
export default {
    data(){
        return{
            active: 0,
            img:[
                {
                    url:require('../assets/images/tu1.png'),
                    content:'奥....',
                    distance:'298m'
                },
                {
                    url:require('../assets/images/tu2.png'),
                    content:'流年记忆',
                    distance:'298m'
                },
                {
                    url:require('../assets/images/tu3.png'),
                    content:'北落',
                    distance:'298m'
                },
                {
                    url:require('../assets/images/tu4.png'),
                    content:'发君',
                    distance:'298m'
                }
            ],
            list:[
                {
                    color:'#2cfff9',
                    content1:'互动消息',
                    content2:'好友喊你来撸猫了'
                },
                {
                    color:'#fff835',
                    content1:'通知',
                    content2:'好友喊你来撸猫了'
                },
                {
                    color:'#fff835',
                    content1:'小总管',
                    content2:'好友喊你来撸猫了'
                },
                {
                    color:'#fff835',
                    content1:'金凯猛',
                    content2:'好友喊你来撸猫了'
                },
                {
                    color:'#fff835',
                    content1:'人人',
                    content2:'好友喊你来撸猫了'
                },
                {
                    color:'#fff835',
                    content1:'万千世界',
                    content2:'好友喊你来撸猫了'
                },
                {
                    color:'#fff835',
                    content1:'兔爷',
                    content2:'好友喊你来撸猫了'
                },
                {
                    color:'#fff835',
                    content1:'印度小黑猪',
                    content2:'好友喊你来撸猫了'
                },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
// 聊天
.nearby
   width 100%
   padding 0 15px
   
.fujin
  width 345px
  height 178px
  background #eee
  margin-bottom 20px
  padding-left 19px
  padding-top 20px
  .title
   width 307px
   height 16px
   display flex
   justify-content space-between
   p
    // width 65px
    height 16px
    font-size 17px
    font-family PingFang
    font-weight bold
    color #000000
   span 
    display inline-block
    width 12px
    height 7px
    font-size 16px  
    transform rotate(-90deg)
  .person
   width 307px
   height 103px
   margin-top 20px
   display flex
   .head
    // width 56px
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin-right 27px
    div
       width 56px
       height 56px
       border-radius 50%
       margin-bottom 13px
       img 
        width 100%
        height 100%
        border-radius 50%
    p
    //  width: 28px;
     height: 13px;
     font-size: 14px;
     font-family: PingFang;
     font-weight: bold;
     color: #333333;
     line-height: 20px;
     margin-bottom: 13px;
    span 
     width: 26px;
     height: 8px;
     font-size: 11px;
     font-family: LaoUI;
     font-weight: 400;
     color: #333333;
     line-height: 20px;
.inform
    background #fff
    height 88px
    width 100%
    display flex
    justify-content space-between
    .yuan
       width 58px
       height 58px
       border-radius 50%
    .form
       width 303px
       padding-left 14px
       .p1
        height 1  7px
        font-family 'Arial Negreta', 'Arial Normal', 'Arial'
        font-weight 700
        font-style normal
        font-size 16px
        margin-bottom 11px
        margin-top 6px
       .p2
        //   width: 110px;
        height: 13px;
        font-size: 14px;
        font-family: PingFang;
        font-weight: 500;
        color: #666666;
        line-height: 20px;


//推荐
.game
   width: 334px;
   height: 62px;  
   background: #ABFFFD;
   border-radius: 31px;
   margin-left: 20px;
   margin-top: 32px;
   display: flex;
   div
    // width: 111px;
    height: 15px;
    font-size: 16px;
    font-family: PingFang;
    font-weight: 500;
    color: #000000;
    margin: 24px 0 0 22px;
   p
    width: 37px;
    height: 37px;
    background: #FFF234;
    border: 2px solid #FFFFFF;
    border-radius: 50%; 
    margin: 13px 13px 0 122px;
   span 
    width: 7px;
    height: 12px;
    margin-top: 23px;
    font-size: 16px;
// 附近在玩
.play
    // width: 63px;
    height: 15px;
    font-size: 16px;
    font-family: PingFang;
    font-weight: bold;
    color: #000000;   
    margin:35px 0 24px 22px; 
// 狼人游戏列表
.list
    width 334px
    margin-left 17px
    display flex
    flex-wrap wrap
    justify-content space-between
    .option
      display flex
      flex-direction column
      justify-content center
      align-items center
      margin-bottom 24px
      div
       width 89px
       height 89px
       background #FFF234
       border-radius 50%
       margin-bottom 15px
      .p1
       height 13px
       font-size 14px
       font-family PingFang
       font-weight bold
       color #000000
       margin-bottom 8px
      .p2
       height 10px
       font-size 11px
       font-family PingFang
       font-weight 500
       color #666666
       line-height 20px      
       margin-bottom 15px 
      span 
       width 28px
       height 8px
       font-size 11px
       font-family LaoUI
       font-weight 400
       color #666666
       line-height 20px




</style>