<script setup lang="ts">
const props = defineProps({
  Recipe: Object,
});
</script>
<template>
  <div v-if="props.Recipe?.title">
    <h2 class="text-2xl text-center">{{ props.Recipe?.title }}</h2>
    <!-- <div class="image">
      <img
        src="https://static.ah.nl/static/recepten/img_RAM_PRD178796_1224x900_JPG.jpg"
        alt="Chili con carne"
      />
    </div> -->
    <div id="recipeDetails" class="ml-6">
      <div id="ingredientList">
        <h2>Ingredients:</h2>
        <ul>
          <li v-for="ingredient in props.Recipe?.ingredients">
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div id="stepList" class="mt-6">
        <h2>Steps:</h2>
        <ol>
          <li v-for="step in props.Recipe?.steps">
            {{ step }}
          </li>
        </ol>
      </div>
      <div id="tagList" class="mt-6">
        <span class="pill" v-for="tag in props.Recipe?.tags">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>recipe not found</h1>
  </div>
</template>
