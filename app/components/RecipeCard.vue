<script setup>
import { formatDate } from "~/utils";

defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    v-if="recipe"
    class="recipe-card border rounded mt-4 flex justify-between flex-col"
  >
    <div class="card__container">
      <img
        v-if="recipe.mainImage"
        class="cover"
        :src="$urlFor(recipe.mainImage).width(500).height(300).url()"
        :alt="recipe.imageAlt"
      />

      <div v-else class="card__cover--none" />
      <h3 class="text-lg mt-2 mb-2 p-4">
        <a class="card__link" :href="`/recipe/${recipe.slug.current}`">
          {{ recipe.title }}
        </a>
      </h3>
    </div>
    <div class="p-2">
      <div class="bg-mint 00 rounded p-2 flex justify-center">
        <div class="flex">
          <span class="i-mdi-clock-time-five-outline relative mr-1"></span>
          <span class="leading-none text-sm">{{ recipe.cookingtime }}</span>
        </div>
        <div class="text-sm ml-1 leading-none">| {{ recipe.complexity }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card__cover {
  height: 231px;
  width: 100%;
}
</style>
