<script setup lang="ts">
import { ref } from "vue";
import Title from "../../components/Title.vue";
import { supabase } from "../../lib/supabaseClient";
import router from "../../router";

const password = ref<string>("");

const passwordReset = async () => {
  await supabase.auth.updateUser({ password: password.value });

  router.push("/login");
};
</script>

<template>
  <div id="container h-screen flex">
    <Title class="md:w-2/3 mx-auto" title="Change password" />
    <form autocomplete="off" class="w-fit md:w-1/2 mx-auto">
      <fieldset class="text-center mb-3">
        <label for="password" class="block text-2xl dark:text-slate-200"
          >Password:</label
        >
        <input
          type="password"
          name="password"
          id="password"
          class="p-1 rounded"
          v-model="password"
          required
        />
      </fieldset>
      <div>
        <button
          class="btn-complementary mt-2 mx-auto px-6"
          type="button"
          @click="passwordReset()"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
