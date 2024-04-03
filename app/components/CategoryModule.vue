<script setup>
import CategoryList from "./CategoryList.vue";

const query = groq`*[ _type == "recipe"]{
    categories[],
}`;

const { data: recipe } = await useSanityQuery(query);

const categoryNames = recipe.value.flatMap(
  (recipeItem) => recipeItem.categories
);

const uniqueCategoryNames = Array.from(new Set(categoryNames));
</script>

<template>
  <section class="flex justify-center text-center">
    <div class="w-2/3">
      <CategoryList :categories="uniqueCategoryNames" />
    </div>
  </section>
</template>
