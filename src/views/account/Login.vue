<script setup lang="ts">
import { onMounted, ref } from "vue";
import Title from "../../components/Title.vue";
import { supabase } from "../../lib/supabaseClient";
import ErrorMsg from "../../components/ErrorMsg.vue";
import router from "../../router";

import { checkUserState } from "../../helpers/helpers";

const email = ref<string>("");
const password = ref<string>("");

const errorMsg = ref();

const signInWithEmail = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  error ? (errorMsg.value = error) : router.go(0);
};

onMounted(async () => {
  const userLoggedIn = await checkUserState();

  userLoggedIn ? router.push("/") : undefined;
});
</script>

<template>
  <div id="container h-screen flex">
    <Title class="md:w-2/3 mx-auto" title="Log in" />
    <form autocomplete="off" class="w-fit md:w-1/2 mx-auto">
      <fieldset class="text-center mb-3">
        <label for="email" class="block text-2xl dark:text-slate-200"
          >E-mail:</label
        >
        <input
          type="email"
          name="email"
          id="email"
          class="p-1 rounded"
          v-model="email"
          required
        />
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
      <router-link
        to="/password-forgotten"
        class="dark:text-slate-200 text-center w-full block"
        >Password forgotten?</router-link
      >
      <ErrorMsg :message="errorMsg" v-if="errorMsg" />

      <div>
        <button
          class="btn-complementary mt-2 mx-auto px-6"
          type="button"
          @click="signInWithEmail()"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
