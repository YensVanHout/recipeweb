<script setup lang="ts">
import { data } from "../data/data";
import RecipePreview from "../components/RecipePreview.vue";
</script>
<template>
  <div class="container mx-auto">
    <div
      class="recipeContainer md:grid grid-cols-4 gap-4 justify-around md:mx-6"
    >
      <div v-for="(item, index) in data">
        <RecipePreview :title="item" :key="index" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
