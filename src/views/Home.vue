<script setup lang="ts">
import axios from "axios";
import RecipePreview from "../components/RecipePreview.vue";
import { recipe } from "../interfaces/interfaces";
import { ref } from "vue";

const recipes = ref<recipe[]>();
let apiURL = process.env.API_URL + "?sort=desc";

axios
  .get(apiURL)
  .then((res) => {
    recipes.value = res.data;
  })
  .catch((error) => {
    console.log(error);
  });
</script>
<template>
  <div class="md:w-2/3 mx-auto">
    <h2 class="text-3xl">Latest recipes:</h2>
    <div class="md:flex flex-wrap justify-around">
      <RecipePreview
        v-for="(item, index) in recipes"
        :title="item.title"
        :id="item._id"
        :tags="item.tags"
        :key="index"
      />
    </div>
  </div>
</template>
<style scoped></style>
