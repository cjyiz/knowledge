<template>
  <div class='head'>
    <span>
      <router-link to="/home">主菜单</router-link>
    </span>
    <span>
      <router-link to="/userManage"> 用户管理</router-link>
    </span>
    <span>当前时间</span>
    <span>{{nowDate}}</span>
    <span></span>
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
<style lang="scss">
</style>