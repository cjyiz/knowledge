<template>
  <div class='navbar'>
    <img src=""
         class='span1'
         alt="">
    <span class='span2'>知识库管理</span>
    <ul>
      <li v-for="(item,index) in navData"
          :key="index">
        <!-- {{item.title}} -->
        <router-link :to="item.src"
                     tag='li'>
          <a href="">{{item.title}}</a>
        </router-link>
      </li>
    </ul>

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
      position: 1,
      isActive1: true,
      isActive2: false,
      navData: [
        {
          id: 1,
          src: '/',
          title: '首页'
        },
        {
          id: 2,
          src: '/usermanage',
          title: '用户管理'
        }
      ]
    }
  },
  components: {

  },
  mounted () {
    let d = new Date()
    this.nowDate = d.getFullYear()
    this.nowTime = d.getHours()
    console.log(this.nowDate)
  },
  methods: {


  }
}
</script>
<style lang='scss'>
a {
  color: #777;
  height: 50px;
  margin: 20px;
}
.router-link-exact-active {
  background-color: #fff !important;
}
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  position: relative;
  height: 65px;
  width: 100%;
  line-height: 65px;
  background-color: rgb(12, 4, 31);
  color: #777;
  ul {
    // width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding-left: 300px;
  }
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