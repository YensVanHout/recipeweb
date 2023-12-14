<script setup lang="ts">
import { recipe } from "../../interfaces/interfaces.ts";
import { ComputedRef, computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Recipe from "../../components/Recipe.vue";
import { supabase } from "../../lib/supabaseClient";

const route = useRoute();
const id: ComputedRef<string> = computed(() => route.params.id.toString());
const recipe = ref<recipe>();
const errorMsg = ref();

async function getRecipeById(id: ComputedRef<string>) {
  const { data, error } = await supabase.from("recipes").select().eq("id", id);

  !error
    ? (recipe.value = data as unknown as recipe)
    : (errorMsg.value = error);
}

onMounted(() => {
  getRecipeById(id);
});
</script>
<template>
  <div v-if="recipe">
    <Recipe :Recipe="recipe" />
  </div>
</template>
<style scoped></style>
