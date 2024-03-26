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
        title,
        mainImage
      }
}`;
const { data: postData } = await useSanityQuery(postQuery);

const filteredPostData = postData.value.filter((post) => {
  return post._id === props.postid;
});
</script>

<template>
  <div v-if="post" class="card my-8 flex">
    <img
      v-if="filteredPostData.length > 0"
      class="card__cover"
      :src="
        $urlFor(filteredPostData[0].recipe.mainImage)
          .width(500)
          .height(300)
          .url()
      "
      alt="Cover image"
    />

    <div class="card__container px-4">
      <div class="flex flex-col justify-between">
        <h2 class="text-2xl">
          <a :href="`/post/${post.slug.current}`">
            {{ post.title }}
          </a>
        </h2>
        <p class="text-xl mt-4">{{ post.excerpt }}</p>
      </div>
      <p>{{ formatDate(post._createdAt) }}</p>
    </div>
  </div>
</template>
