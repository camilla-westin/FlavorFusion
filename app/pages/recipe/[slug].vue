<script setup lang="ts">
import { type Recipe } from "~/types/Recipe";
import BlockContent from "~/components/BlockContent.vue";
import CategoryList from "~/components/CategoryList.vue";
import ChefCard from "~/components/ChefCard.vue";

const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});

const route = useRoute();

const query = groq`*[ _type == "recipe" && slug.current == $slug][0]{
  ...,
  "chef": chef.chef->{
    name, 
    mainImage,
    slug
  }
}`;
const { data: recipe } = await useSanityQuery<Recipe>(query, {
  slug: route.params.slug,
});

const checks: Ref<boolean[]> = ref([]);

const toggleCheck = (index: number) => {
  checks.value[index] = !checks.value[index];
};
</script>
<template>
  <section class="pt-8">
    <img
      v-if="recipe.mainImage"
      class="cover w-full lg:w-2/3 h-96 object-cover"
      :src="$urlFor(recipe.mainImage).width(1920).url()"
      :alt="recipe.imageAlt"
    />
    <div class="p-4 md:p-0">
      <h1 class="font-bold text-2xl md:text-7xl font-headings my-2 md:my-6">
        {{ recipe.title }}
      </h1>
      <p class="md:text-xl w-full md:w-3/4 mb-4">{{ recipe.excerpt }}</p>
      <div class="bg-mint text-center py-2 px-4 inline-block">
        <span class="mr-1">{{ recipe.cookingtime }}</span>
        |
        <span class="ml-1"> {{ recipe.complexity }}</span>
      </div>
      <section class="mt-8 md:mt-10 md:flex">
        <div v-if="recipe.ingredients" class="md:w-1/2 md:pr-8 font-primary">
          <h2 class="text-lg font-bold pb-4">Ingredienser</h2>
          <BlockContent :blocks="recipe.ingredients" />
        </div>
        <div class="mt-8 md:mt-0">
          <h2 class="text-lg font-bold">Instruktioner</h2>
          <ul class="mt-4">
            <li
              v-for="(instruction, index) in recipe.instructions"
              :key="index"
              class="bg-slate-100 p-2 mb-2"
            >
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="mr-4"
                  @click="toggleCheck(index)"
                />
                <p class="text-lg" :class="{ 'line-through': checks[index] }">
                  {{ instruction }}
                </p>
              </label>
            </li>
          </ul>
        </div>
        <div>
          <div class="w-52 mt-3 p-8">
            <ChefCard :key="recipe.chef._ref" :chef="recipe.chef" />
          </div>
        </div>
      </section>
      <section>
        <CategoryList :categories="recipe.categories" />
      </section>
    </div>
  </section>
</template>
