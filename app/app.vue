<script setup>
import Header from "~/components/Header.vue";
import Hero from "~/components/Hero.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isStartPage = computed(() => route.path === "/");
</script>

<template>
  <Header />
  <Hero v-if="isStartPage" />
  <div class="container">
    <main>
      <NuxtPage />
    </main>
  </div>
  <Footer />
</template>
