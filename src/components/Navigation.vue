<script setup lang="ts"></script>

<template>
  <nav>
    <div id="main">
      <router-link to="/">Home</router-link>
      <router-link to="/collection">Collection</router-link>
      <router-link to="/randomrecipe">Random</router-link>
      <router-link to="/addRecipe">Add</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div id="auth">
      <router-link to="/login">Log in</router-link>
      <router-link to="/register">Register</router-link>
    </div>
  </nav>
</template>

<style scoped>
nav {
  @apply pb-4
    border-b-2 border-gray-200
    flex items-center gap-5
    my-10 mx-auto
    max-w-5xl justify-between;
}

#main {
  @apply w-3/4 md:w-1/3 flex justify-around;
}
nav a {
  @apply text-gray-500 text-clip;
}
nav a:hover {
  @apply text-black;
}
#main nav {
  @apply border-0;
}

#auth {
  @apply w-1/5 flex justify-around;
}
</style>
