<template>
  <transition
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-300 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <div v-if="sidebarOpen" class="fixed top-16 inset-y-0 left-0 z-50 w-64 bg-gray-100 text-black border-r-4 border-gray-600 ">
      
      <nav class="p-4">
        <ul class="space-y-2">
          <li v-for="page in pages" :key="page.name">
            <button
              @click="go(page)"
              class="w-full text-left px-4 py-3 rounded-lg transition-colors duration-200"
              :class="[
                isActive(page)
                  ? 'bg-gray-300 text-black' 
                  : 'text-black hover:bg-gray-800 hover:text-white'
              ]"
            >
              <span class="flex items-center">
                <component :is="getIcon(page.name)" class="h-5 w-5 mr-3" />
                {{ page.name }}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </transition>
  
</template>

<script>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { 
  HomeIcon, 
  CubeIcon, 
  ChartBarIcon, 
  Cog6ToothIcon 
} from '@heroicons/vue/24/outline'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Sidebar',
  components: {
    XMarkIcon
  },
  computed: {
    ...mapState(['sidebarOpen', 'pages'])
  },
  methods: {
    ...mapActions(['closeSidebar']),
    go(page) {
      const router = this.$router
      const routeMap = {
        'Dashboard': '/dashboard',
        'Products': '/products',
        'Analytics': '/analytics',
        'Settings': '/settings'
      }
      router.push(routeMap[page.name] || '/dashboard')
      this.closeSidebar()
    },
    isActive(page) {
      const r = this.$route
      return r.name === page.name
    },
    getIcon(pageName) {
      const icons = {
        'Dashboard': HomeIcon,
        'Products': CubeIcon,
        'Analytics': ChartBarIcon,
        'Settings': Cog6ToothIcon
      }
      return icons[pageName] || HomeIcon
    }
  }
}
</script>