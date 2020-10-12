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


</style>