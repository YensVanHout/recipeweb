<script setup lang="ts">
const props = defineProps({
  Recipe: Object,
});
</script>
<template>
  <div v-if="props.Recipe?.title">
    <h2>{{ props.Recipe?.title }}</h2>
    <!-- <div class="image">
      <img
        src="https://static.ah.nl/static/recepten/img_RAM_PRD178796_1224x900_JPG.jpg"
        alt="Chili con carne"
      />
    </div> -->
    <div>
      <div>
        <h2>Ingredients:</h2>
        <ul>
          <li v-for="ingredient in props.Recipe?.ingredients">
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div>
        <h2>Steps:</h2>
        <ol>
          <li v-for="step in props.Recipe?.steps">
            {{ step }}
          </li>
        </ol>
      </div>
      <div>
        <p v-for="tag in props.Recipe?.tags">
          {{ tag }}
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>recipe not found</h1>
  </div>
</template>
