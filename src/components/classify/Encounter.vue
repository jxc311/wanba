<template>
    <div>
        <van-nav-bar
          title="遇到的人"
          left-arrow
          @click-left="onClickLeft"
          :placeholder="true"
          :fixed="true"
          :border="false"
        />
        <!-- 你画我猜 -->
        <div class="drawing" v-for="(num,index) in 4" :key="index">
            <!-- 左日期 -->
            <div class="date">
                <span>15</span>5月23:06
            </div>
            <!-- 右半部分 -->
            <div class="wonder">
                <!-- 你画我猜6人 7158房 -->
                <div class="title">你画我猜6人 7158房</div>
                <div class="figure">
                    <div class="head" v-for="(elm,idx) in 6" :key="idx">
                        <div class="circle"></div>
                        <div class="content">七几</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
      onClickLeft() {
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="stylus" scoped>
// 你画我猜
.drawing
   width 345px   
   height 241px
   border-radius 7px
   margin 28px 0 26px 16px
   display flex
   justify-content space-between
   //左日期
   .date
     height 27px
     font-size 11px
     font-family LaoUI
     font-weight bold
     color #999999 
     margin-top 20px 
     span             
       font-size: 18px;
       font-family: LaoUI;
       font-weight: bold;
       color: #333333; 
   //右半部分
   .wonder
     width 294px
     height 241px
     background #F7F8FA
     border-radius 7px  
     //你画我猜6人 7158房 
     .title
         width 148px
         height 15px
         font-size 16px
         font-family PingFang
         font-weight bold
         color #333333   
         margin 18px 0 20px 14px 
     .figure
         width 266px
         margin-left 13px       
         display flex
         flex-wrap wrap
         .head
            width 52px
            height 70px
            display flex
            flex-direction column
            justify-content space-between
            align-items center
            margin-bottom 24px
            margin-right 14px
            .circle
                width 100%
                height 52px                
                background #D1CAD1
                border-radius 50%
            .content                             
                font-size 11px
                font-family PingFang
                font-weight bold
                color #333333

</style>