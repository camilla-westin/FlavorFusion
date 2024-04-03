<script setup>
import { useSearchStore } from "@/plugins/pinia/store/search";
import CategoryModule from "./CategoryModule.vue";

let searchTerm = "";

const searchStore = useSearchStore();

const handleSearch = (searchTerm) => {
  searchStore.doSearch(searchTerm);
};
</script>

<template>
  <section class="bg-hero-background h-hero-height w-full cover">
    <div class="container text-center">
      <h1 class="text-center font-semibold text-3xl p-8">
        <a href="/">FlavorFusion</a>
      </h1>
      <form @submit.prevent="handleSearch(searchTerm)">
        <input
          type="search"
          class="border p-3 rounded-3xl w-3/4 mx-auto bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-mint focus:ring-opacity-50"
          placeholder="Search for a recipe"
          v-model="searchTerm"
        />
        <button
          type="submit"
          class="bg-purpple hover:bg-purple-800 hover:text-white transition p-3 rounded-3xl shadow-lg focus:outline-none focus:ring-2 focus:ring-mint focus:ring-opacity-50"
        >
          Search
        </button>
        <CategoryModule />
      </form>
    </div>
  </section>
</template>
