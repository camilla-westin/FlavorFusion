<script setup lang="ts">
import { type Chef } from "~/types/Chef";
import ChefCard from "@/components/ChefCard.vue";

const chefQuery = groq`*[ _type == "chef" && defined(slug.current) ] | order(_createdAt desc)`;
const { data: chefs } = await useSanityQuery<Chef[]>(chefQuery);
</script>
<template>
  <section class="p-4 md:p-8">
    <h1 class="font-semibold text-5xl pb-8">Chefs at FlavorFusion</h1>
    <div class="grid grid-cols-1 2 md:grid-cols-4 gap-6 mt-4">
      <ChefCard v-for="chef in chefs" :key="chef._id" :chef="chef" />
    </div>
  </section>
</template>
