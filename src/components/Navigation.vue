<script setup lang="ts"></script>

<template>
  <nav
    class="m-2 mx-auto rounded-md bg-gray-300 dark:bg-gray-700 md:w-1/2 md:text-xl text-xs"
  >
    <ul class="md:flex p-4 justify-around">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/randomRecipe">Random Recipe</router-link></li>
      <li><router-link to="/addRecipe">Add Recipe</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>
