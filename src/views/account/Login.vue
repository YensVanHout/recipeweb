<script setup lang="ts">
import { reactive, ref } from "vue";
import axios from "axios";
import Title from "../../components/Title.vue";

const email = ref<string>("");
const password = ref<string>("");

let apiURL = import.meta.env.VITE_API_URL + "auth/login";

const submitLogin = () => {
  const login = reactive({
    email: email.value,
    password: password.value,
  });

  axios
    .post(apiURL, login)
    .then((res) =>
      res.status === 201
        ? (window.location.href = `/`)
        : console.log(res.data.Message)
    );
};
</script>

<template>
  <div id="container">
    <Title class="md:w-2/3 mx-auto" title="Login" />
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
          @click="submitLogin()"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
