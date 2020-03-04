<template>
  <div class='login-wrap'
       v-show='showLogin'>
    <h3>登录</h3>
    <p v-show='showTishi'>{{tishi}}</p>
    <input type="text"
           class='login-input'
           placeholder="请输入用户名"
           v-model='username'>
    <input type="text"
           class='login-input'
           placeholder="请输入密码"
           v-model='password'>
    <div class='loginAuto'>
      <label for="">
        <input type="checkbox"
               @click='checkbox'>自动登录
      </label>
      <span>忘记密码？</span>
    </div>
    <button v-on:click='login'
            :loading='loading'>登录</button>

  </div>
</template>
<script>
// import { setCookie, getCookie } from '@/assets/js/cookie.js'
export default {
  name: 'Login',
  data () {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: '',
      username: '',
      password: '',
      newUsername: '',
      newPassword: '',
      loading: false
    }
  },
  mounted () {

  },
  methods: {
    login () {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名或密码")
      } else {
        this.loading = true


      }
    },
    forgetPassword () {
      // this.$router.push('/register')
      console.log('忘记密码')
    },
    checkbox () {
      console.log('忘记密码')
    }
  }
}
</script>
<style scoped>
.login-wrap {
  width: 80%;
  margin: 50px auto;
  text-align: center;
  font-size: 24px;
}
.login-input {
  font-size: 16px;
  display: block;
  width: 20em;
  height: 2em;
  line-height: 2em;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}
p {
  color: red;
}
button {
  display: block;
  width: 20em;
  height: 2em;
  line-height: 2em;
  margin: 0 auto;
  border: none;
  background-color: #409eff;
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
}
span {
  cursor: pointer;
}
span:hover {
  color: #409eff;
}
.loginAuto {
  font-size: 12px;
  display: flex;
  width: 300px;
  height: 1.5em;
  line-height: 1.5em;
  margin: 10px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>

