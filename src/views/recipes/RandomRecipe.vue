<script setup lang="ts">
import { ref } from "vue";
import { recipe } from "../../interfaces/interfaces.ts";
import Recipe from "../../components/Recipe.vue";

const recipe = ref<recipe>();
const loading = ref<boolean>(true);
if (loading.value == true) {
}
</script>
<template>
  <div>
    <Recipe :Recipe="recipe" v-if="loading == false" />
  </div>
</template>
