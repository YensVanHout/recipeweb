<script setup lang="ts">
import { ref } from "vue";
import Title from "../../components/Title.vue";
import { supabase } from "../../lib/supabaseClient";
import ErrorMsg from "../../components/ErrorMsg.vue";

const registrationDone = ref<boolean>(false);
const email = ref<string>("");
const password = ref<string>("");
const confirmPassword = ref<string>("");

const errorMsg = ref();

const signUpNewUser = async () => {
  if (password.value == confirmPassword.value) {
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        emailRedirectTo: "https://localhost:5173",
      },
    });
    errorMsg.value = error;
  } else {
    errorMsg.value = "Passwords don't match";
  }

  errorMsg ? undefined : (registrationDone.value = true);
};
</script>

<template>
  <div id="container h-screen flex">
    <Title class="md:w-2/3 mx-auto" title="Register" />
    <form
      autocomplete="off"
      class="w-fit md:w-1/2 mx-auto"
      v-if="!registrationDone"
    >
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
        <label for="cpassword" class="block text-2xl dark:text-slate-200"
          >Confirm Password:</label
        >
        <input
          type="cpassword"
          name="cpassword"
          id="cpassword"
          class="p-1 rounded"
          v-model="confirmPassword"
          required
        />
      </fieldset>
      <ErrorMsg v-if="errorMsg" :message="errorMsg" />
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
    <div v-if="registrationDone" class="w-full text-center items-center">
      <h2 class="text-2xl dark:text-slate-200">Thank you for registering!</h2>
      <p class="text-xl dark:text-slate-200">
        Almost there!<br />
        We've sent you an email to <strong>{{ email }}</strong> with a link to
        activate your recipeweb account. <br />
        Please click on the link to complete the registration process.<br />Once
        your account is activated, you'll be able to sign in and access all the
        features.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
