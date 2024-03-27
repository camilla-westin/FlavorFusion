<script setup>
const props = defineProps({
  chef: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article>
    <img
      :src="$urlFor(chef.mainImage).width(400).height(400).url()"
      :alt="chef.imageAlt"
      class="object-cover object-center"
    />
    <div class="shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4">
      <h2 class="text-xl">
        <a :href="`/chef/${chef.slug.current}`">{{ chef.name }}</a>
      </h2>
    </div>
  </article>
</template>
