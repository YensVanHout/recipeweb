<script setup lang="ts">
import { onMounted, ref } from "vue";
import { recipe } from "../../interfaces/interfaces.ts";
import Recipe from "../../components/Recipe.vue";
import { supabase } from "../../lib/supabaseClient";

const recipe = ref<recipe>();
const errorMsg = ref();
const loading = ref<boolean>(true);

const getRandomRecipe = async () => {
  const { data, error } = await supabase.rpc("random_recipe");
  loading.value = false;

  !error ? (recipe.value = data) : (errorMsg.value = error);
};

onMounted(() => {
  getRandomRecipe();
});
</script>
<template>
  <div>
    <Recipe :Recipe="recipe" v-if="loading == false" />
  </div>
</template>
