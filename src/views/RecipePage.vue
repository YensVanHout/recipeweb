<script setup lang="ts">
import axios from "axios";
import { recipe } from "../interfaces/interfaces.ts";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import Recipe from "../components/Recipe.vue";

const apiURL = import.meta.env.VUE_APP_API_URL! + "/";
const route = useRoute();
const id = computed(() => route.params.id);
const recipe = ref<recipe>();

if (id) {
  axios
    .get(apiURL + id.value)
    .then((res) => {
      recipe.value = res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
<template>
  <div v-if="recipe">
    <Recipe :Recipe="recipe" />
  </div>
</template>
<style scoped></style>
