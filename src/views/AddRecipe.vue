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
    <div>
      <div>
        <label for="title">Title:</label>
        <input type="text" name="title" id="title" v-model="title" />
      </div>
      <!-- <div >
        <label for="image">Image:</label>
        <input
          type="file"
          accept="image/*"
          name="image"
          id="image"
        />
        <p
          id="file_input_help"
        >
          SVG, PNG, JPG or GIF (MAX. 800x400px).
        </p>
      </div> -->
      <div>
        <FormFieldset Name="Ingredient" :Array="ingredients" />
        <FormFieldset Name="Step" :Array="steps" />
        <FormFieldset Name="Tags" :Array="tags" />
      </div>
    </div>
    <div>
      <button type="button" @click="submitRecipe()">Submit</button>
    </div>
  </form>
</template>

<style scoped></style>
