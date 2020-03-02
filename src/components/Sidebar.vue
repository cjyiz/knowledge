<template>
  <div class='sidebar'>
    <div>
      <img src=""
           alt="">
      <span>{{user}}</span>
    </div>

    <div>
      <span>部门</span>
      <span>{{department}}</span>
    </div>

    <div class='record'>
      <p>最新登录记录:</p>
      <ul>
        <li v-for='(item,index) in loginRecord'
            :key='index'>
          <span>{{item.date}}</span>
          <span>{{item.time}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sidebar',
  data () {
    return {
      user: '陈骥',
      department: '部门',
      loginRecord: [
        {
          date: '2019-10-13',
          time: '13:33:44'
        },
        {
          date: '2019-10-2',
          time: '13:44:12'
        }
      ]
    }
  },

}
</script>