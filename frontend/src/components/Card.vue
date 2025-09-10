<template>
  <div
    class="rounded-2xl bg-white/90 backdrop-blur border border-gray-200 w-full  md:max-w-sm overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out mx-auto"
  >
    <div v-if="image" class="overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>

    <div class="p-5 flex flex-col justify-between h-full">
      <h2 v-if="title" class="text-lg sm:text-xl font-semibold text-gray-900">
        {{ title }}
      </h2>

    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: { type: String, default: "" },
    title: { type: String, default: "" },
    showAction: { type: Boolean, default: false },
    actionText: { type: String, default: "Action" }
  }
}
</script>
