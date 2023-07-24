<script setup lang="ts">
import { ref } from "vue";
import { recipe } from "../interfaces/interfaces.ts";
import FormFieldset from "../components/FormFieldset.vue";
import axios from "axios";

const title = ref<string>("");
const ingredients = ref<[string | undefined]>([""]);
const steps = ref<[string | undefined]>([""]);
const tags = ref<[string | undefined]>([""]);
//const image = ref<File>();

let apiURL = "http://localhost:8080/recipes/create";

const submitRecipe = () => {
  const recipe = ref<recipe>({
    title: title.value,
    ingredients: ingredients.value,
    steps: steps.value,
    tags: tags.value,
    //  Image: image.value,
  });
  console.log(recipe);
  axios.post(apiURL, recipe.value);
};
</script>

<template>
  <form>
    <div class="container mx-auto h-full">
      <div class="title w-1/3 mx-auto">
        <label for="title" class="text-3xl">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="title"
        />
      </div>
      <!-- <div class="image w-1/3 mx-auto mb-4">
        <label for="image">Image:</label>
        <input
          class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          type="file"
          accept="image/*"
          name="image"
          id="image"
        />
        <p
          class="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="file_input_help"
        >
          SVG, PNG, JPG or GIF (MAX. 800x400px).
        </p>
      </div> -->
      <div class="flex flex-col md:flex-row justify-around">
        <FormFieldset Name="Ingredient" :Array="ingredients" />
        <FormFieldset Name="Step" :Array="steps" />
        <FormFieldset Name="Tags" :Array="tags" />
      </div>
    </div>
    <div class="submit w-full flex justify-around">
      <button
        type="button"
        class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="submitRecipe()"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<style scoped></style>
