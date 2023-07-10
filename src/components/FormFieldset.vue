<script setup lang="ts">
const props = defineProps({
  Name: String,
  Array: Array<String | undefined>,
});
</script>
<template>
  <div class="ingredients flex flex-col">
    <fieldset v-for="(item, index) in $props.Array">
      <label :for="`{{props.Name}}_{{ index }}`" class="text-xl">
        {{ props.Name }} {{ index + 1 }} :
      </label>
      <div class="flex">
        <input
          type="text"
          name="{{props.Name}}_{{ index }}"
          id="{{props.Name}}_{{index}}"
          class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="props.Array![index]"
        />

        <button
          type="button"
          class="ml-4 mb-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          @click="() => props.Array!.splice(index, 1)"
        >
          Delete
        </button>
      </div>
    </fieldset>
    <button
      type="button"
      class="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="() => props.Array!.push(undefined)"
    >
      Add ingredient
    </button>
  </div>
</template>
<style scoped></style>
