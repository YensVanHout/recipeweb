<script lang="ts" setup>
const props = defineProps({
  message: {
    required: true,
    type: String,
  },
});
</script>
<template>
  <div id="errorBox" class="w-full h-8 bg-red-500">
    <icon />
    <p class="dark:text-white text-center w-full">{{ props.message }}</p>
  </div>
</template>
<style scoped></style>
