<script setup lang="ts">
const props = defineProps({
  Recipe: Object,
});
</script>
<template>
  <div v-if="props.Recipe?.title">
    <div id="title">
      <h2 class="text-3xl text-center">{{ props.Recipe?.title }}</h2>
    </div>
    <!-- <div class="image">
      <img
        src="https://static.ah.nl/static/recepten/img_RAM_PRD178796_1224x900_JPG.jpg"
        alt="Chili con carne"
      />
    </div> -->
    <div id="recipeDetails" class="ml-6 md:flex justify-evenly md:text-xl">
      <div id="ingredientList">
        <h2 class="text-2xl">Ingredients:</h2>
        <ul class="list-disc">
          <li v-for="ingredient in props.Recipe?.ingredients">
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div id="stepList" class="mt-6 w-1/6 md:text-xl">
        <h2 class="text-2xl">Steps:</h2>
        <ol class="list-decimal">
          <li v-for="step in props.Recipe?.steps">
            {{ step }}
          </li>
        </ol>
      </div>
    </div>
    <div id="tagList" class="mt-6 flex justify-center">
      <span class="pill" v-for="tag in props.Recipe?.tags">
        {{ tag }}
      </span>
    </div>
  </div>

  <div v-else>
    <h1 class="text-center text-3xl">Recipe not found</h1>
  </div>
</template>
