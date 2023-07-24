<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { recipe } from "../interfaces/interfaces.ts";
import Recipe from "../components/Recipe.vue";

const recipe = ref<recipe>();
const apiURL = "http://localhost:8080/randomRecipe";
let loading = true;
if (loading == true) {
  axios
    .get(apiURL)
    .then((res) => {
      recipe.value = res.data;
      loading = !loading;
      console.log(recipe.value);
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
<template>
  <div class="content w-1/2 mx-auto">
    <Recipe :recipe="recipe" v-show="loading == false" />
  </div>
</template>
