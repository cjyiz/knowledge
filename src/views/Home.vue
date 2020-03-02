<template>
  <div class="home">
    <Navbar></Navbar>
    <div calss='content'>
      <Sidebar></Sidebar>
      <overview></overview>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Overview from '@/views/Overview'
export default {
  name: 'Home',
  components: {
    Sidebar,
    Overview,
    Navbar
  }
}
</script>
