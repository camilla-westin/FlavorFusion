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
  <section class="post">
    <img
      v-if="recipe.mainImage"
      class="post__cover"
      :src="$urlFor(recipe.mainImage).width(1920).url()"
      alt="Cover image"
    />
    <div v-else class="post__cover--none" />
    <div class="post__container">
      <h1 class="post__title">{{ recipe.title }}</h1>
      <p class="post__excerpt">{{ recipe.excerpt }}</p>
      <div class="bg-mint text-center py-2 px-4 inline-block">
        <span class="mr-1">{{ recipe.cookingtime }}</span>
        |
        <span class="ml-1"> {{ recipe.complexity }}</span>
      </div>
      <section class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div v-if="recipe.ingredients" class="post__content">
          <BlockContent :blocks="recipe.ingredients" />
        </div>
        <ul class="mt-4">
          <li v-for="instruction in recipe.instructions">{{ instruction }}</li>
        </ul>
      </section>
    </div>
  </section>
</template>

<style scoped>
.post {
  width: 100%;
  margin: var(--space-1) 0 var(--space-4);

  & .post__cover,
  & .post__cover--none {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  & .post__cover--none {
    background: var(--black);
  }

  & .post__container {
    padding: 0 var(--space-3);
  }

  & .post__content {
    font-family: var(--font-family-serif);
    font-weight: 400;
    font-size: var(--font-size-4);
    line-height: var(--line-height-5);
    letter-spacing: -0.02em;

    /* Targeting tags in PortableText */
    & blockquote {
      border-left: 5px solid var(--black);
      padding-left: var(--space-3);
      margin-left: var(--space-4);
    }

    & a {
      color: var(--blue-600);
      text-decoration: none;
    }
  }

  & .post__title {
    font-family: var(--font-family-sans);
    font-size: var(--font-size-7);
    line-height: var(--line-height-6);
    margin: var(--space-4) 0;
    font-weight: 800;
  }

  & .post__excerpt {
    font-family: var(--font-family-serif);
    font-size: var(--font-size-5);
    line-height: var(--line-height-4);
    margin-top: 0;
    font-weight: 400;
  }
}

@media (min-width: 800px) {
  .post {
    & .post__cover,
    & .post__cover--none {
      width: 750px;
      height: 380px;
    }

    & .post__title {
      font-size: var(--font-size-10);
      line-height: var(--line-height-10);
      margin: var(--space-6) 0 0;
      letter-spacing: -0.025em;
    }

    & .post__excerpt {
      font-size: var(--font-size-5);
      line-height: var(--line-height-5);
      margin-top: var(--space-3);
      margin-bottom: var(--space-3);
    }

    & .post__date {
      font-size: var(--font-size-3);
      line-height: var(--line-height-2);
      margin-top: var(--space-0);
    }

    & .post__content {
      margin-top: var(--space-7);
    }
  }
}
</style>
