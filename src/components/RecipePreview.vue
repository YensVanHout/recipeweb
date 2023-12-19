<script setup lang="ts">
const props = defineProps<{
  title: string;
  id: string | null | undefined;
  tags: string[] | null | undefined;
}>();
</script>
<template>
  <div class="card dark:bg-stone-200 my-2 md:w-1/4">
    <a :href="`/recipe/${props.id}`">
      <h3>
        {{ props.title }}
      </h3>
      <div class="tags flex justify-around">
        <span v-for="tag in tags" class="pill">{{ tag }}</span>
      </div>
    </a>
  </div>
</template>
<style scoped></style>
