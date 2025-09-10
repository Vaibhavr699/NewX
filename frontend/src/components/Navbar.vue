<template>
  <nav class="bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-30">
    <div class="flex items-center">
      <button 
        @click="toggleSidebar" 
        class="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
      >
        <Bars3Icon class="h-6 w-6" />
      </button>
      <h1 class="ml-4 text-xl font-semibold text-gray-800">{{ pageTitle }}</h1>
    </div>
  </nav>
</template>

<script>
import { Bars3Icon, BellIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Navbar',
  components: {
    Bars3Icon,
    BellIcon,
    ChevronDownIcon
  },
  computed: {
    ...mapState(['sidebarOpen']),
    pageTitle() {
      const r = this.$route
      return (r.meta && r.meta.title) || r.name || 'App'
    }
  },
  methods: {
    ...mapActions(['toggleSidebar'])
  }
}
</script>