<script setup lang="ts">
import { reactive, ref } from "vue";
import FormFieldset from "../../components/FormFieldset.vue";
import Title from "../../components/Title.vue";
import { getUsername } from "../../helpers/helpers";
import { supabase } from "../../lib/supabaseClient";

const errorMsg = ref();

const file = ref<File>();

const creator = getUsername();
const image = ref<string>("");
const ingredients = ref<string[] | undefined>(["", ""]);
const steps = ref<string[] | undefined>(["", ""]);
const tags = ref<string[] | undefined>([""]);
const time = ref<string>("");
const title = ref<string>("");
const tools = ref<string[] | undefined>([""]);

const recipe = reactive({
  creator: creator,
  date_create: undefined,
  id: undefined,
  image: image.value,
  ingredients: ingredients.value?.filter((str) => str !== ""),
  steps: steps.value?.filter((str) => str !== ""),
  tags: tags.value?.filter((str) => str !== ""),
  time: time.value,
  title: title.value,
  tools: tools.value?.filter((str) => str !== ""),
});

const uploadImage = async (fileName: string, file: any) => {
  const { data, error } = await supabase.storage
    .from("recipe_images")
    .upload(`public/${fileName}.png`, file, {
      cacheControl: "3600",
      upsert: false,
    });
  return !error ? data : error;
};

const handleImage = (event: any) => {
  const file = event.target.files;
  file.value = file[0];
};

const submitRecipe = async () => {
  //image.value = uploadImage(
  //  title.value.replace(" ", "_").toLowerCase(),
  //  file.value
  //);
  //const { error } = await supabase.from("recipes").insert(recipe);
  //error ? (errorMsg.value = error) : null;
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
      <fieldset class="w-2/3 m-auto">
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
