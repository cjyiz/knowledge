<template>
  <div class="home">
    <Navbar></Navbar>
    <div class='content'>
      <Sidebar></Sidebar>
      <UserEdit></UserEdit>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import UserEdit from '@/components/UserEdit'
export default {
  name: 'Home',
  components: {
    Sidebar,
    Navbar,
    UserEdit
  }
}
</script>
<style lang="scss">
.home {
  height: 100%;
  width: 100%;
  .content {
    border: 1px solid green;
    display: flex;
    flex-direction: row;
  }
}
</style>