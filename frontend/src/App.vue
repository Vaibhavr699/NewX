<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar />
    <Sidebar />
    <main class="lg:ml-0 transition-all duration-300" :class="{ 'lg:ml-64': sidebarOpen }">
      <router-view />
    </main>
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar
  },
  computed: {
    ...mapState(['sidebarOpen'])
  }
}
</script>