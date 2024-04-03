<script setup>
defineProps({
  categories: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <ul class="flex flex-wrap mt-8">
    <li
      v-for="(category, index) in categories"
      :key="index"
      class="rounded-full py-2 px-4 bg-lightpurpple mr-2 mb-2"
    >
      <a :href="`/category/${category}`">{{ category }}</a>
    </li>
  </ul>
</template>
