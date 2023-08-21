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
  const recipe = ref({
    title: title.value,
    ingredients: ingredients.value.filter((str) => str !== ""),
    steps: steps.value.filter((str) => str !== ""),
    tags: tags.value.filter((str) => str !== ""),
    //  Image: image.value,
  });
  console.log(recipe);
  axios
    .post(apiURL, recipe.value)
    .then((res) =>
      res.status === 201
        ? (window.location.href = `recipe/${res.data._id}`)
        : null
    );
};
</script>

<template>
  <form class="w-fit md:w-1/2 mx-auto">
    <fieldset class="text-center mb-3">
      <label for="title" class="block text-2xl">Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        class="p-1 rounded"
        v-model="title"
        required
      />
    </fieldset>
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
    <div class="md:flex">
      <FormFieldset
        class="w-full md:w-1/3 md:m-4"
        Name="Ingredient"
        :Array="ingredients"
      />
      <FormFieldset class="w-full md:w-1/3 md:m-4" Name="Step" :Array="steps" />
      <FormFieldset class="w-full md:w-1/3 md:m-4" Name="Tags" :Array="tags" />
    </div>
    <div>
      <button class="btn-primary" type="button" @click="submitRecipe()">
        Submit
      </button>
    </div>
  </form>
</template>

<style scoped></style>
