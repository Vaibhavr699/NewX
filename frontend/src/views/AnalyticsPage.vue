<template>
  <div class="p-6 items-center">
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Analytics</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        v-for="(card, index) in cards"
        :key="index"
        :image="card.image"
        :title="card.title"
        :description="card.description"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'AnalyticsPage',
  components: { Card },
  data() {
    return {
      cards: [
        {
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
          title: 'Traffic',
          description: 'Visitors and sessions'
        },
        {
          image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80',
          title: 'Conversions',
          description: 'Goals and funnels'
        },
        {
          image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80',
          title: 'Reports',
          description: 'Download detailed reports'
        }
      ]
    }
  }
}
</script>
