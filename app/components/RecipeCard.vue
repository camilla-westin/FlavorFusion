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
  <div v-if="recipe" class="recipe-card border rounded mt-4">
    <img
      v-if="recipe.mainImage"
      class="cover"
      :src="$urlFor(recipe.mainImage).width(500).height(300).url()"
      alt="Cover image"
    />

    <div v-else class="card__cover--none" />

    <div class="card__container">
      <h3 class="text-xl mt-2 mb-2">
        <a class="card__link" :href="`/post/${recipe.slug.current}`">
          {{ recipe.title }}
        </a>
      </h3>
      <p class="text-sm">{{ recipe.excerpt }}</p>
    </div>
  </div>
</template>

<style scoped>
.recipe-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-2);
  padding: 9px;
  position: relative;
  border-bottom: 1px solid #ced2d9;
}

.card__cover {
  height: 231px;
  width: 100%;
}
</style>
