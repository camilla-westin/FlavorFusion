<script setup lang="ts">
import { type Post } from "~/types/Post";
import BlockContent from "~/components/BlockContent.vue";

defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const route = useRoute();

const query = groq`*[ _type == "post" && slug.current == $slug][0]`;
const { data: post } = await useSanityQuery<Post>(query, {
  slug: route.params.slug,
});
</script>

<template>
  <section class="py-8 px-4 md:px-6">
    <img
      v-if="post.mainImage"
      class="cover w-full lg:w-2/3 h-96 object-cover"
      :src="$urlFor(post.mainImage).width(1920).url()"
      alt="Cover image"
    />
    <div v-else class="post__cover--none" />
    <div class="p-4 md:p-0">
      <h1 class="font-bold text-2xl md:text-7xl font-headings my-2 md:my-6">
        {{ post.title }}
      </h1>
      <p class="md:text-xl w-full md:w-3/4 mb-4">{{ post.excerpt }}</p>
      <div v-if="post.body" class="md:w-2/3 py-4">
        <BlockContent :blocks="post.body" />
      </div>
      <p class="text-sm">{{ formatDate(post._createdAt) }}</p>
    </div>
  </section>
</template>
