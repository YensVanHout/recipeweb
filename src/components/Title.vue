<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>
<template>
  <h2 class="text-3xl">{{ props.title }}</h2>
</template>
