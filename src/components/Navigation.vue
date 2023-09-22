<script setup lang="ts"></script>

<template>
  <nav class="flex justify-between">
    <div id="main" class="w-1/2 flex justify-around">
      <router-link to="/">Home</router-link>
      <router-link to="/randomrecipe">Random Recipe</router-link>
      <router-link to="/addRecipe">Add Recipe</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div id="auth">
      <router-link to="/login">Log in</router-link>
    </div>
  </nav>
</template>

<style scoped>
nav {
  @apply pb-4
    border-b-2 border-gray-200
    flex items-center gap-5
    my-10 mx-auto
    max-w-5xl;
}
nav a,
nav span {
  @apply text-gray-500;
}
nav a:hover {
  @apply text-black;
}
main nav {
  @apply border-0;
}
</style>
