<script setup lang="ts">
import axios from "axios";
import RecipePreview from "../components/RecipePreview.vue";
import { recipe } from "../interfaces/interfaces";
import { ref } from "vue";

const recipes = ref<recipe[]>();
let apiURL = "http://localhost:8080/recipes/";

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
  <div>
    <div>
      <div v-for="(item, index) in recipes">
        <RecipePreview :title="item.title" :id="item._id" :key="index" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
