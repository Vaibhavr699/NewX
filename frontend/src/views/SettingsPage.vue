<template>
  <div class="p-6">
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Settings</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center place-items-center">
      <Card
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
        title="Activity3"
        description="Recent user activity"
      >
      </Card>
      <Card
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
        title="Activity4"
        description="Recent user activity"
      >
      </Card>
      <Card
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
        title="Activity 5"
        description="Recent user activity"
      >
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'SettingsPage',
  components: { Card }
}
</script>


