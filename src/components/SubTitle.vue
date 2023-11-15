<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>
<template>
  <h3 class="text-xl">{{ props.title }}</h3>
</template>
