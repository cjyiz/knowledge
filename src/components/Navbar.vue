<template>
  <div class='navbar'>
    <img src=""
         class='span1'
         alt="">
    <span class='span2'>知识库管理</span>
    <span class='span3'
          @click='change'
          :class={active:isActive}>
      <router-link to="/">主菜单</router-link>
    </span>
    <span class='span4'
          @click='change'
          :class={active:!isActive}>
      <router-link to="/userManage"> 用户管理</router-link>
    </span>
    <span class='span5'>当前时间</span>
    <span class='span6'>{{nowDate}}</span>
    <span class='span7'>{{nowTime}}</span>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data () {
    return {
      nowDate: null,
      nowTime: null,
      isActive: true
    }
  },
  components: {

  },
  mounted () {
    let d = new Date()
    this.nowDate = d.getFullYear()
    console.log(this.nowDate)
  },
  methods: {
    change () {
      this.isActive = !this.isActive
      console.log('123')
    }
  }
}
</script>
<style lang='scss'>
.navbar {
  position: relative;
  height: 65px;
  width: 100%;
  line-height: 65px;
  background-color: rgb(12, 4, 31);
  color: #777;
  .span1 {
    left: 0;
    position: absolute;
  }
  .span2 {
    left: 50px;
    color: #fff;
    font-size: 30px;
    position: absolute;
  }
  .span3 {
    left: 250px;
    position: absolute;
    a {
      color: #777;
    }
  }
  .span4 {
    left: 450px;
    position: absolute;
    a {
      color: #777;
    }
  }
  .span5 {
    right: 60px;
    position: absolute;
  }
  .span6 {
    position: absolute;
    right: 20px;
  }
  .span7 {
    position: absolute;
    right: 0;
  }
  .active {
    background-color: #fff;
  }
}
</style>