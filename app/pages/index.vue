<script setup lang="ts">
import { computed } from "vue";
import { type Post } from "~/types/Post";
import { type Recipe } from "~/types/Recipe";
import { useSearchStore } from "~/plugins/pinia/store/search";

const postQuery = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`;
const { data: posts } = await useSanityQuery<Post[]>(postQuery);

const recipeQuery = groq`*[ _type == "recipe" && defined(slug.current) ] | order(_createdAt desc)`;
const { data: recipes } = await useSanityQuery<Recipe[]>(recipeQuery);

const searchStore = useSearchStore();

let searchInput = computed(() => searchStore.searchTerm);

const filteredRecipes = computed(() => {
  if (searchInput.value) {
    return recipes.value.filter((recipe) => {
      return recipe.title
        .toLowerCase()
        .includes(searchInput.value.toLowerCase());
    });
  }
  return recipes.value;
});
</script>

<template>
  <section>
    <Card
      v-if="posts && !searchInput"
      v-for="post in posts"
      :key="post._id"
      :post="post"
    />
    <Welcome v-if="posts?.length === 0" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      <RecipeCard
        v-if="recipes"
        v-for="recipe in filteredRecipes"
        :key="recipe._id"
        :recipe="recipe"
      />
    </div>
  </section>
</template>
