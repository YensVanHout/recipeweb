<script setup lang="ts">
import { reactive, ref } from "vue";
import FormFieldset from "../../components/FormFieldset.vue";
import axios from "axios";
import Title from "../../components/Title.vue";
//import { useVuelidate } from "@vuelidate/core";
//import { email, required } from "@vuelidate/validators";

const title = ref<string>("");
const ingredients = ref<string[] | undefined>(["", ""]);
const steps = ref<string[] | undefined>(["", ""]);
const tags = ref<string[] | undefined>([""]);
const tools = ref<string[] | undefined>([""]);
const time = ref<string>("");
//const image = ref<File>();

let apiURL = import.meta.env.VITE_API_URL + "recipes/create";

const submitRecipe = () => {
  const recipe = reactive({
    title: title.value,
    ingredients: ingredients.value?.filter((str) => str !== ""),
    steps: steps.value?.filter((str) => str !== ""),
    tags: tags.value?.filter((str) => str !== ""),
    tools: tools.value?.filter((str) => str !== ""),
    time: time.value,
    //  Image: image.value,
  });

  axios
    .post(apiURL, recipe)
    .then((res) =>
      res.status === 201
        ? (window.location.href = `recipe/${res.data._id}`)
        : null
    );
};
</script>

<template>
  <div id="container">
    <Title class="md:w-2/3 mx-auto" title="Add recipe" />
    <form class="w-fit md:w-1/2 mx-auto">
      <fieldset class="text-center mb-3">
        <label for="title" class="block text-2xl dark:text-stone-200"
          >Title:</label
        >
        <input
          type="text"
          name="title"
          id="title"
          class="p-1 rounded"
          v-model="title"
          required
        />
      </fieldset>
      <fieldset class="text-center mb-3">
        <label for="time" class="block text-2xl dark:text-stone-200"
          >Time to cook:</label
        >
        <input
          type="text"
          name="time"
          id="time"
          class="p-1 rounded"
          v-model="time"
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
        <FormFieldset
          class="w-full md:w-1/3 md:m-4"
          Name="Step"
          :Array="steps"
        />
        <FormFieldset
          class="w-full md:w-1/3 md:m-4"
          Name="Tool"
          :Array="tools"
        />
        <FormFieldset
          class="w-full md:w-1/3 md:m-4"
          Name="Tags"
          :Array="tags"
        />
      </div>
      <div>
        <button
          class="btn-complementary mt-2 mx-auto px-6"
          type="button"
          @click="submitRecipe()"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
