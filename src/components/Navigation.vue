<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { supabase } from "../lib/supabaseClient";
import { onMounted, ref } from "vue";
import { checkUserState } from "../helpers/helpers";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const userLoggedIn = ref<boolean>(false);

const errorMsg = ref();

const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  errorMsg.value = error;
  window.location.pathname = "/";
};

const checkUser = async () => {
  const status = await checkUserState();

  userLoggedIn.value = status;
};

onMounted(() => {
  checkUser();
});
</script>

<template>
  <nav
    class="pb-4 border-b-2 border-gray dark:border-stone-300 flex items-center gap-5 my-10 mx-auto max-w-5xl justify-between"
  >
    <div id="main" class="w-3/4 md:w-1/3 flex justify-around">
      <router-link
        class="text-gray dark:text-slate-200 hover:text-black dark:hover:text-white"
        to="/"
        >Home</router-link
      >
      <router-link
        class="text-gray dark:text-slate-200 hover:text-black dark:hover:text-white"
        to="/collection"
        >Collection</router-link
      >
      <router-link
        class="text-gray dark:text-slate-200 hover:text-black dark:hover:text-white"
        to="/randomrecipe"
        >Random</router-link
      >
      <router-link
        class="text-gray dark:text-slate-200 hover:text-black dark:hover:text-white"
        to="/addRecipe"
        v-show="userLoggedIn"
        >Add</router-link
      >
      <router-link
        class="text-gray dark:text-slate-200 hover:text-black dark:hover:text-white"
        to="/about"
        >About</router-link
      >
    </div>
    <div id="auth-and-theme" class="w-1/5 flex justify-around">
      <div id="auth" class="flex justify-around w-2/3" v-show="!userLoggedIn">
        <router-link
          class="text-gray dark:text-slate-200 hover:text-black dark:hover:text-white cursor-pointer"
          to="/login"
          >Log in</router-link
        >
        <router-link
          class="text-gray dark:text-slate-200 hover:text-black dark:hover:text-white cursor-pointer"
          to="/register"
          >Register</router-link
        >
      </div>
      <div id="logOut" class="flex justify-around w-2/3" v-show="userLoggedIn">
        <a
          class="text-gray dark:text-slate-200 hover:text-black dark:hover:text-white cursor-pointer"
          @click="signOut()"
        >
          Log Out
        </a>
      </div>
      <div id="theme">
        <span
          class="text-gray dark:text-slate-200 cursor-pointer hover:text-black"
          @click="toggleDark()"
        >
          {{ isDark ? "Dark" : "Light" }}</span
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  text-decoration: underline;
  text-underline-offset: 5px;
}
</style>
