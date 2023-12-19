<script setup lang="ts">
import { ref } from "vue";
import FormFieldset from "../../components/FormFieldset.vue";
import Title from "../../components/Title.vue";
import { getUsername } from "../../helpers/helpers";
import { supabase } from "../../lib/supabaseClient";
import { recipe } from "../../interfaces/interfaces";
import router from "../../router";

const errorMsg = ref();

const image = ref<string>("");
const ingredients = ref<string[] | null>(["", ""]);
const steps = ref<string[] | null>(["", ""]);
const tags = ref<string[] | null>([""]);
const time = ref<string>("");
const title = ref<string>("");
const tools = ref<string[] | null>([""]);

//WIP IMAGES FOR RECIPES

// const file = ref();

// const uploadImage = async (fileName: string, file: any) => {
//   const { data, error } = await supabase.storage
//     .from("recipe_images")
//     .upload(`public/${fileName}.png`, file, {
//       cacheControl: "3600",
//       upsert: false,
//     });
//   return !error ? data : error;
// };

// const handleImage = (event: any) => {
//   file.value = event.target.files[0];
//   console.log(file.value);
//   console.log("test");
// };

const submitRecipe = async (recipe: recipe) => {
  const { data, error } = await supabase
    .from("recipes")
    .insert(recipe)
    .select("id");
  console.log(data);
  error ? (errorMsg.value = error) : router.push("/recipe/" + data[0].id);
};

const handleSubmit = async () => {
  const username = await getUsername();

  const recipe = ref<recipe>({
    creator: "",
    image: image.value,
    ingredients: ingredients.value?.filter((str) => str !== "") as string[],
    steps: steps.value?.filter((str) => str !== "") as string[],
    tags: tags.value?.filter((str) => str !== "") as string[],
    time: time.value,
    title: title.value,
    tools: tools.value?.filter((str) => str !== "") as string[],
  });

  recipe.value.creator = username;

  submitRecipe(recipe.value);
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
      <fieldset class="w-2/3 m-auto hidden">
        <label
          for="image"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Image:</label
        >
        <input
          type="file"
          accept="image/*"
          name="image"
          id="image"
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-white focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-200"
        />
        <p id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
      </fieldset>
      <div class="md:flex">
        <FormFieldset
          class="w-full md:w-1/3 md:m-4"
          Name="Ingredient"
          :Array="(ingredients as String[])"
        />
        <FormFieldset
          class="w-full md:w-1/3 md:m-4"
          Name="Step"
          :Array="(steps as String[])"
        />
        <FormFieldset
          class="w-full md:w-1/3 md:m-4"
          Name="Tool"
          :Array="(tools as String[])"
        />
        <FormFieldset
          class="w-full md:w-1/3 md:m-4"
          Name="Tags"
          :Array="(tags as String[])"
        />
      </div>
      <div>
        <button
          class="btn-complementary mt-2 mx-auto px-6"
          type="button"
          @click="handleSubmit()"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
