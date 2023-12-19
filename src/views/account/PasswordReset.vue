<script setup lang="ts">
import { ref } from "vue";
import Title from "../../components/Title.vue";
import { supabase } from "../../lib/supabaseClient";

const resetDone = ref<boolean>(false);
const email = ref<string>("");

const passwordReset = async () => {
  await supabase.auth.resetPasswordForEmail(email.value, {
    redirectTo: "https://lq7m8kv0-5173.euw.devtunnels.ms/change-password",
  });

  resetDone.value = true;
};
</script>

<template>
  <div id="container h-screen flex">
    <Title class="md:w-2/3 mx-auto" title="Forgot password" />
    <form autocomplete="off" class="w-fit md:w-1/2 mx-auto" v-if="!resetDone">
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
    <div v-if="resetDone" class="w-full text-center items-center">
      <p class="text-xl dark:text-slate-200">
        Password reset has been successfully received<br />
        We've sent you an email to <strong>{{ email }}</strong> with a link to
        reset your recipeweb password. <br />
        Please click on the link to reset your password.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
