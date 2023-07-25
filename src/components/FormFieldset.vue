<script setup lang="ts">
const props = defineProps({
  Name: String,
  Array: Array<String | undefined>,
});
</script>
<template>
  <div>
    <fieldset v-for="(item, index) in $props.Array">
      <label :for="`{{props.Name}}_{{ index }}`">
        {{ props.Name }} {{ index + 1 }} :
      </label>
      <div>
        <input
          type="text"
          name="{{props.Name}}_{{ index }}"
          id="{{props.Name}}_{{index}}"
          v-model="props.Array![index]"
        />

        <button type="button" @click="() => props.Array!.splice(index, 1)">
          Delete
        </button>
      </div>
    </fieldset>
    <button type="button" @click="() => props.Array!.push(undefined)">
      Add ingredient
    </button>
  </div>
</template>
<style scoped></style>
