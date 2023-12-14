<script setup lang="ts">
import RecipePreview from "../components/RecipePreview.vue";
import { recipe } from "../interfaces/interfaces";
import { onMounted, ref } from "vue";

import { supabase } from "../lib/supabaseClient";

const recipes = ref<recipe[]>();

async function getRecipes() {
  const { data } = await supabase.from("recipes").select().limit(6);
  recipes.value = data as unknown as recipe[];
}

onMounted(() => {
  getRecipes();
});
</script>
<template>
  <div class="md:w-2/3 mx-auto">
    <h2 class="text-3xl">Latest recipes:</h2>
    <div class="md:flex flex-wrap justify-around">
      <RecipePreview
        class="mx-2"
        v-for="(item, index) in recipes"
        :title="item.title"
        :id="item.id"
        :tags="item.tags"
        :key="index"
      />
    </div>
  </div>
</template>
<style scoped></style>
