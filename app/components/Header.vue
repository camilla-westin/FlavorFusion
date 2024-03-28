<template>
  <header class="bg-mint h-12 w-full p-4">
    <nav class="container">
      <div class="flex justify-between">
        <span class="-mt-1 font-semibold">
          <nuxt-link to="/">FlavorFusion</nuxt-link></span
        >
        <ul class="flex gap-4 -mt-1">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/chef/cheflist">Chefs</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/post/articles">Articles</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
