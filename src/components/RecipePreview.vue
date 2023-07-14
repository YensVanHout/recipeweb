<script setup lang="ts">
const props = defineProps<{
  title: string;
  id: string | undefined;
}>();
const url = "/recipe/" + props.id;
</script>
<template>
  <div
    class="flex md:block mx-3 my-2 border-black dark:border-white border-2 rounded-md"
  >
    <!-- <img
      src="https://www.placeholder.co/400x300"
      alt=""
      class="w-1/2 md:w-full"
    /> -->
    <div class="details bg-white text-black text-xl p-2 font-bold text-center">
      <a :href="url">{{ props.title }}</a>
    </div>
  </div>
</template>
<style scoped></style>
