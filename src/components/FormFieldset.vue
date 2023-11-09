<script setup lang="ts">
const props = defineProps({
  Name: String,
  Array: Array<String | undefined>,
});
</script>
<template>
  <div>
    <fieldset v-for="(item, index) in $props.Array">
      <label class="dark:text-stone-200" :for="`{{props.Name}}_{{ index }}`">
        {{ props.Name }} {{ index + 1 }} :
      </label>
      <div class="flex">
        <input
          type="text"
          name="{{ props.Name }}_{{ index }}"
          id="{{
          props.Name
        }}_{{ index }}"
          v-model="props.Array![index]"
          class="mr-2"
          :required="index === 0"
        />

        <button
          type="button"
          @click="() => props.Array!.splice(index, 1)"
          class="bg-red-700 p-1.5 font-bold rounded h-1/2 m-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="#fff"
          >
            <path
              fill-rule="evenodd"
              d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </fieldset>
    <button
      class="btn-primary whitespace-nowrap"
      type="button"
      @click="() => props.Array!.push(undefined)"
    >
      Add {{ props.Name }}
    </button>
  </div>
</template>
<style scoped>
form {
  @apply py-4 px-7
    block
    mx-auto
    min-w-fit w-1/4;
}
form label {
  @apply block;
}
form input,
form textarea,
form select {
  @apply block
    mt-2 my-4 px-2 py-1
    rounded-sm w-full;
}
form button {
  @apply block mx-auto;
}

/* feedback styles */
.error {
  @apply border-2
    border-red-500
    bg-red-300
    text-red-800
    py-1 px-2
    rounded-sm
    block
    max-w-fit
    my-4 mx-auto;
}
</style>
