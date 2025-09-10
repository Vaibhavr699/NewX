import { createRouter, createWebHistory } from 'vue-router'

const DashboardPage = () => import('@/views/DashboardPage.vue')
const ProductsPage = () => import('@/views/ProductsPage.vue')
const AnalyticsPage = () => import('@/views/AnalyticsPage.vue')
const SettingsPage = () => import('@/views/SettingsPage.vue')

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', name: 'Dashboard', component: DashboardPage, meta: { title: 'Dashboard' } },
  { path: '/products', name: 'Products', component: ProductsPage, meta: { title: 'Products' } },
  { path: '/analytics', name: 'Analytics', component: AnalyticsPage, meta: { title: 'Analytics' } },
  { path: '/settings', name: 'Settings', component: SettingsPage, meta: { title: 'Settings' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title}`
  }
})

export default router

