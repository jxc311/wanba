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





</style>