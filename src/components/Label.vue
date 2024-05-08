<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>
<template>
  <label for="title" class="block text-2xl dark:text-stone-200"
    >{{ props.title }}:</label
  >
</template>
