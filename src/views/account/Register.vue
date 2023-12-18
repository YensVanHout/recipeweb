<script setup lang="ts">
import { ref } from "vue";
import Title from "../../components/Title.vue";
import { supabase } from "../../lib/supabaseClient";

const email = ref<string>("");
const password = ref<string>("");

const errorMsg = ref();

const signUpNewUser = async () => {
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      emailRedirectTo: "http://localhost:5173/",
    },
  });

  errorMsg.value = error;
};
</script>

<template>
  <div id="container">
    <Title class="md:w-2/3 mx-auto" title="Register" />
    <form autocomplete="off" class="w-fit md:w-1/2 mx-auto">
      <fieldset class="text-center mb-3">
        <label for="email" class="block text-2xl">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          class="p-1 rounded"
          v-model="email"
          required
        />
        <label for="password" class="block text-2xl">Password:</label>
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
          @click="signUpNewUser()"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
