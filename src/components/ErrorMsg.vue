<script lang="ts" setup>
const props = defineProps({
  message: {
    required: true,
    type: String,
  },
});
</script>
<template>
  <div
    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    role="alert"
  >
    <span class="block sm:inline">{{ props.message }}</span>
  </div>
</template>
<style scoped></style>
