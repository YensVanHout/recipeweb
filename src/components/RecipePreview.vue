<script setup lang="ts">
const props = defineProps<{
  title: string;
  id: string | undefined;
}>();
const url = "/recipe/" + props.id;
</script>
<template>
  <div>
    <!-- <img
      src="https://www.placeholder.co/400x300"
      alt=""
    /> -->
    <div>
      <a :href="url">{{ props.title }}</a>
    </div>
  </div>
</template>
<style scoped></style>
