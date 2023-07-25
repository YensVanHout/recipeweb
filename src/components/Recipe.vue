<script setup lang="ts">
const props = defineProps({
  Recipe: Object,
});
</script>
<template>
  <div v-if="props.Recipe?.title">
    <h2 class="text-5xl my-6 text-center">{{ props.Recipe?.title }}</h2>
    <!-- <div class="image">
      <img
        class="my-6"
        src="https://static.ah.nl/static/recepten/img_RAM_PRD178796_1224x900_JPG.jpg"
        alt="Chili con carne"
      />
    </div> -->
    <div class="recipe grid grid-cols-2">
      <div class="ingredients col-span-1 mx-auto">
        <h2 class="text-4xl mb-6">Ingredients:</h2>
        <ul class="list-disc">
          <li
            class="text-xl mb-2"
            v-for="ingredient in props.Recipe?.ingredients"
          >
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div class="steps col-span-1 mx-auto">
        <h2 class="text-4xl mb-6">Steps:</h2>
        <ol class="list-decimal">
          <li class="text-xl pb-2" v-for="step in props.Recipe?.steps">
            {{ step }}
          </li>
        </ol>
      </div>
      <div class="tags flex col-span-2 justify-center">
        <p
          class="text-xl bg-blue-500 m-4 px-4 py-2 rounded-full"
          v-for="tag in props.Recipe?.tags"
        >
          {{ tag }}
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>recipe not found</h1>
  </div>
</template>
