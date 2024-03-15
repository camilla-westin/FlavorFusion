<script setup>
defineProps({
  categories: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <ul class="flex mt-8">
    <li
      v-for="category in categories"
      class="rounded-xl py-2 px-4 bg-mint mr-2"
    >
      <a :href="`/category/${category}`">{{ category }}</a>
    </li>
  </ul>
</template>
