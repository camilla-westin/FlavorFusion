<script setup lang="ts">
import { type Post } from "~/types/Post";
import Card from "~/components/Card.vue";

const postQuery = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`;
const { data: posts } = await useSanityQuery<Post[]>(postQuery);
</script>
<template>
  <section class="py-4 md:py-8">
    <h1 class="font-semibold text-5xl p-8">Articles</h1>
    <div class="">
      <Card
        v-if="posts"
        v-for="post in posts"
        :key="post._id"
        :postid="post._id"
        :post="post"
      />
    </div>
  </section>
</template>
