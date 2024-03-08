<script setup lang="ts">
import { type Recipe } from "~/types/Recipe";
import BlockContent from "~/components/BlockContent.vue";

defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});

const route = useRoute();

const query = groq`*[ _type == "recipe" && slug.current == $slug][0]`;
const { data: recipe } = await useSanityQuery<Recipe>(query, {
  slug: route.params.slug,
});
</script>
<template>
  <section>
    <img
      v-if="recipe.mainImage"
      class="cover w-2/3 h-96 object-cover"
      :src="$urlFor(recipe.mainImage).width(1920).url()"
      alt="Cover image"
    />
    <div>
      <h1 class="font-bold text-7xl font-headings my-6">{{ recipe.title }}</h1>
      <p class="text-xl w-3/4 mb-4">{{ recipe.excerpt }}</p>
      <div class="bg-mint text-center py-2 px-4 inline-block">
        <span class="mr-1">{{ recipe.cookingtime }}</span>
        |
        <span class="ml-1"> {{ recipe.complexity }}</span>
      </div>
      <section class="flex mt-10">
        <div v-if="recipe.ingredients" class="w-1/2 pr-8 font-primary">
          <h2 class="text-lg font-bold pb-4">Ingredienser</h2>
          <BlockContent :blocks="recipe.ingredients" />
        </div>
        <div class="">
          <h2 class="text-lg font-bold">Instruktioner</h2>
          <ul class="mt-4">
            <li v-for="instruction in recipe.instructions">
              <p class="pb-2 text-lg">{{ instruction }}</p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <ul class="flex">
          <li
            v-for="category in recipe.categories"
            class="rounded-xl py-2 px-4 bg-mint mr-2"
          >
            {{ category }}
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>
