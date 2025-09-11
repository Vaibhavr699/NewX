<template>
  <div class="p-6">
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Select</h2>
    </div>
    <SelectCard v-on:confirm="onConfirm" />
  </div>
</template>

<script>
import SelectCard from '@/components/SelectCard.vue'

export default {
  name: 'SelectPage',
  components: { SelectCard },
  data() {
    return { last: null }
  },
  computed: {
    lastString() {
      if (!this.last) return ''
      const { country, state, city, district } = this.last
      return [country, state, city, district].filter(Boolean).join(' / ')
    }
  },
  methods: {
    onConfirm(payload) {
      this.last = payload
      console.log('Selected location:', payload)
    }
  }
}
</script>
