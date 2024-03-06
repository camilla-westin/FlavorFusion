<script setup lang="ts">
import { type Post } from "~/types/Post";
import { type Recipe } from "~/types/Recipe";

const postQuery = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`;
const { data: posts } = await useSanityQuery<Post[]>(postQuery);

const recipeQuery = groq`*[ _type == "recipe" && defined(slug.current) ] | order(_createdAt desc)`;
const { data: recipes } = await useSanityQuery<Recipe[]>(recipeQuery);
</script>

<template>
  <section>
    <Card v-if="posts" v-for="post in posts" :key="post._id" :post="post" />
    <Welcome v-if="posts?.length === 0" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <RecipeCard
        v-if="recipes"
        v-for="recipe in recipes"
        :key="recipe._id"
        :recipe="recipe"
      />
    </div>
  </section>
</template>
