<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { type Recipe } from "~/types/Recipe";

const route = useRoute();
let slug = ref(route.params.slug);

const recipeQuery = groq`*[_type == "recipe"][] {
                _id,
                title,
                categories[],
                "slug": slug.current,
                mainImage,
                cookingtime,
                complexity,

        }`;
const { data: recipes } = await useSanityQuery<Recipe[]>(recipeQuery);

const filterRecipes = recipes.value.filter((recipe) => {
  return recipe.categories.some((category) => category === slug.value);
});
</script>

<template>
  <section>
    <h1>{{ slug }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      <RecipeCard
        v-if="recipes"
        v-for="(recipe, index) in filterRecipes"
        :key="index"
        :recipe="recipe"
      />
    </div>
  </section>
</template>
