<script setup lang="ts">
import { type Chef } from "~/types/Chef";
import BlockContent from "~/components/BlockContent.vue";

const route = useRoute();

const query = groq`*[ _type == "chef" && slug.current == $slug][0]`;
const { data: chef } = await useSanityQuery<Chef>(query, {
  slug: route.params.slug,
});
</script>

<template>
  <section class="py-8 px-4 md:px-6">
    <img
      v-if="chef.mainImage"
      class="cover w-full lg:w-2/3 h-1/3 object-cover"
      :src="$urlFor(chef.mainImage).width(900).height(800).url()"
      :alt="chef.imageAlt"
    />
    <div v-else class="post__cover--none" />
    <div class="p-4 md:p-0">
      <h1 class="font-bold text-2xl md:text-7xl font-headings my-2 md:my-6">
        {{ chef.name }}
      </h1>
      <div v-if="chef.body" class="md:w-2/3 py-4">
        <BlockContent :blocks="chef.body" />
      </div>
    </div>
  </section>
</template>
