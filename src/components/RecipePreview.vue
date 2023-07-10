<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
<template>
  <div
    class="w-full h-full flex md:block mx-3 my-2 border-black dark:border-white border-2 rounded-md items-center"
  >
    <!-- <img
      src="https://www.placeholder.co/400x300"
      alt=""
      class="w-1/2 md:w-full border-black border-r-2 md:border-b-2 md:border-r-0"
    /> -->
    <div class="details p-2 font-bold text-center">{{ props.title }}</div>
  </div>
</template>
<style scoped></style>
