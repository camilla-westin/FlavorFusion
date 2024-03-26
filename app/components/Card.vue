<script setup>
import { formatDate } from "~/utils";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  postid: {
    type: String,
    required: true,
  },
});

const postQuery = groq`*[_type == "post"]{
  _id,
        "recipe": recipe.recipe->{
        mainImage
      }
}`;
const { data: postData } = await useSanityQuery(postQuery);

//Data from referenced recipe in post
const postRecipeRef = postData.value.filter((post) => {
  return post._id === props.postid;
});
</script>

<template>
  <div v-if="post" class="card my-8 sm:flex mx-auto px-4 md:px-8">
    <div class="sm:w-1/2">
      <img
        v-if="post.mainImage"
        :src="$urlFor(post.mainImage).width(550).height(350).url()"
        alt="Cover image"
      />
      <img
        v-else
        :src="
          $urlFor(postRecipeRef[0].recipe.mainImage)
            .width(550)
            .height(350)
            .url()
        "
        alt="Cover image"
      />
    </div>

    <div class="sm:w-1/2 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div class="flex flex-col justify-between">
        <h2 class="text-1xl md:text-2xl">
          <a :href="`/post/${post.slug.current}`">
            {{ post.title }}
          </a>
        </h2>
        <p class="md:text-xl mt-4">{{ post.excerpt }}</p>
      </div>
      <p class="mt-4 md:mt-8 text-sm">{{ formatDate(post._createdAt) }}</p>
    </div>
  </div>
</template>
