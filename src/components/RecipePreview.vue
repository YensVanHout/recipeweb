<script setup lang="ts">
const props = defineProps<{
  title: string;
  id: string | null | undefined;
  tags: string[] | null | undefined;
}>();
</script>
<template>
  <div class="card dark:bg-stone-200 my-2 lg:w-1/4 flex md:w-full">
    <a :href="`/recipe/${props.id}`" class="w-full">
      <h3>
        {{ props.title }}
      </h3>
      <div class="tags flex flex-wrap justify-around h-fit align-bottom w-full">
        <span v-for="tag in tags" class="pill">{{ tag }}</span>
      </div>
    </a>
  </div>
</template>
<style scoped></style>
