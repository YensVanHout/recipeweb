<script setup lang="ts">
import axios from "axios";

const props = defineProps<{
  title: string;
  id: string | undefined;
  tags: [string | undefined];
}>();

const deleteRecipe = (id: string | undefined) => {
  console.log(id);
  axios.delete(`http://localhost:8080/recipes/delete/${id}`).then(() => {
    window.location.href = "/";
  });
};
</script>
<template>
  <div class="card my-2 md:w-1/4">
    <a :href="`/recipe/${props.id}`">
      <h3>
        {{ props.title }}
      </h3>
      <div class="tags flex justify-around">
        <span v-for="tag in tags" class="pill">{{ tag }}</span>
      </div>
    </a>
    <button @click="deleteRecipe(props.id)">Delete Recipe</button>
  </div>
</template>
<style scoped></style>
