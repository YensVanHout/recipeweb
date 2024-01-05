<script setup lang="ts">
import { onMounted, ref } from "vue";
import Modal from "./Modal.vue";
import { checkUserState } from "../helpers/helpers";
import { supabase } from "../lib/supabaseClient";

const props = defineProps({
  Recipe: Object,
});

const showModal = ref<Boolean>(false);
const userLoggedIn = ref<boolean>(false);

const deleteRecipe = (id: string) => {
  supabase.from("recipes").delete().eq("id", id);
};

const checkUser = async () => {
  const status = await checkUserState();
  userLoggedIn.value = status;
};
onMounted(() => {
  checkUser();
});
</script>
<template>
  <div v-if="props.Recipe?.title" class="md:w-2/3 mx-auto dark:text-slate-200">
    <Modal
      @resolve="deleteRecipe(props.Recipe?._id)"
      @close="showModal = !showModal"
      v-if="showModal"
      type="delete"
      :message="`Are you sure you want to delete the following recipe: ${props.Recipe.title}`"
      :title="`Delete recipe ${props.Recipe.title}`"
    />

    <div id="title" class="md:flex w-fit mx-auto">
      <h2 class="text-3xl mr-4 h-full text-center">
        {{ props.Recipe?.title }}
      </h2>
      <button
        class="btn-complementary mx-auto px-4"
        @click="showModal = !showModal"
        v-if="userLoggedIn"
      >
        Delete Recipe
      </button>
    </div>
    <div id="tagList" class="mt-4 flex justify-center">
      <span class="pill" v-for="tag in props.Recipe?.tags">
        {{ tag }}
      </span>
    </div>
    <div class="text-center m-4">
      <h3 class="text-2xl mr-4 h-full">{{ props.Recipe?.time }}</h3>
    </div>
    <!-- <div class="image">
      <img
        src="https://static.ah.nl/static/recepten/img_RAM_PRD178796_1224x900_JPG.jpg"
        alt="Chili con carne"
      />
    </div> -->
    <div id="recipeDetails" class="ml-6 md:flex justify-around md:text-xl">
      <div
        id="ingredientList"
        class="mt-6 w-1/6 md:text-xl"
        :class="props.Recipe.tools.length == 0 ? 'w-1/3' : ''"
      >
        <h2 class="text-2xl">Ingredients:</h2>
        <ul class="list-disc">
          <li v-for="ingredient in props.Recipe?.ingredients" class="pb-4">
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div
        id="toolList"
        class="mt-6 w-1/6 md:text-xl"
        v-if="props.Recipe.tools.length > 0"
      >
        <h2 class="text-2xl">Tools:</h2>
        <ul class="list-disc">
          <li v-for="tool in props.Recipe?.tools" class="pb-4">
            {{ tool }}
          </li>
        </ul>
      </div>
      <div
        id="stepList"
        class="mt-6 w-1/6 md:text-xl"
        :class="props.Recipe.tools.length == 0 ? 'w-1/2' : ''"
      >
        <h2 class="text-2xl">Steps:</h2>
        <ol class="list-decimal">
          <li v-for="step in props.Recipe?.steps" class="pb-4">
            {{ step }}
          </li>
        </ol>
      </div>
    </div>
  </div>

  <div v-else>
    <h1 class="text-center text-3xl">Recipe not found</h1>
  </div>
</template>
