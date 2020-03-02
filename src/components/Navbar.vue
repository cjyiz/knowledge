<template>
  <div class='navbar'>
    <img src=""
         class='span1'
         alt="">
    <span class='span2'>知识库管理</span>
    <span class='span3'>
      <router-link to="/home">主菜单</router-link>
    </span>
    <span class='span4'>
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
      nowTime: null
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

  }
}
</script>
<style lang='scss'>
.navbar {
  position: relative;
  height: 80px;
  width: 100%;
  .span1 {
    left: 0;
    position: absolute;
  }
  .span2 {
    left: 20px;
    position: absolute;
  }
  .sapn3 {
    left: 150px;
    position: absolute;
  }
  .sapn4 {
    left: 300px;
    position: absolute;
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
}
</style>