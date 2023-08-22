<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { recipe } from "../../interfaces/interfaces.ts";
import Recipe from "../../components/Recipe.vue";

const recipe = ref<recipe>();
const apiURL = import.meta.env.VITE_API_URL + "recipes/random?sample=1";
const loading = ref<boolean>(true);
if (loading.value == true) {
  axios
    .get(apiURL)
    .then((res) => {
      recipe.value = res.data[0];
      loading.value = !loading.value;
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
<template>
  <div>
    <Recipe :Recipe="recipe" v-if="loading == false" />
  </div>
</template>
