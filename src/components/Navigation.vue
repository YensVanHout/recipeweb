<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { supabase } from "../lib/supabaseClient";
import { onMounted, ref } from "vue";
import { checkUserState } from "../helpers/helpers";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const userLoggedIn = ref<boolean>(false);

const errorMsg = ref();
const open = ref<boolean>(false)

const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  errorMsg.value = error;
  window.location.pathname = "/";
};

const toggle = () => {
  open.value = !open.value
}

onMounted(async () => {
  userLoggedIn.value = await checkUserState()
});
</script>

<template>



  <nav>
    <div class="block sm:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 border text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:w-auto items-center sm:bg-transparent border border-white border-radius px-4 pb-4 mt-[-1px]">
      <div class="text-sm sm:flex sm:flex-grow justify-around">
        <router-link
        class="text-gray block sm:inline-block dark:text-slate-200 hover:text-black dark:hover:text-white mt-4 text-center"
        to="/"
        >Home</router-link
      >
      <router-link
        class="text-gray block sm:inline-block dark:text-slate-200 hover:text-black dark:hover:text-white mt-4 text-center"
        to="/collection"
        >Collection</router-link
      >
      <router-link
        class="text-gray block sm:inline-block dark:text-slate-200 hover:text-black dark:hover:text-white mt-4 text-center"
        to="/randomrecipe"
        >Random</router-link
      >
      <router-link
        class="text-gray block sm:inline-block dark:text-slate-200 hover:text-black dark:hover:text-white mt-4 text-center"
        to="/addRecipe"
        v-show="userLoggedIn"
        >Add</router-link
      >
      <router-link
        class="text-gray block sm:inline-block dark:text-slate-200 hover:text-black dark:hover:text-white mt-4 text-center"
        to="/about"
        >About</router-link
      >
      </div>
      <div>
        <div id="auth" class="flex justify-around" v-show="!userLoggedIn">
        <router-link
          class="text-gray dark:text-slate-200 hover:text-black dark:hover:text-white cursor-pointer px-4 py-2 mr-4 leading-none border rounded border-slate-400 hover:text-white hover:bg-slate-400 dark:border-white inline-block"
          to="/login"
          >Log in</router-link
        >
        <router-link
          class="text-gray dark:text-slate-200 hover:text-black dark:hover:text-white cursor-pointer px-4 py-2 leading-none border rounded border-slate-400 hover:text-white hover:bg-slate-400 dark:border-white inline-block"
          to="/register"
          >Register</router-link
        >
      </div>
      
      </div>
      <div id="theme">
        <p
          class="text-gray dark:text-slate-200 cursor-pointer hover:text-black sm:ml-5 select-none text-center"
          @click="toggleDark()"
        >
          {{ isDark ? "Dark" : "Light" }}</p
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

#auth .router-link-active{
  text-decoration: none
}

#auth .router-link-active:is(a){
  background-color: #7a9c6f;
  color:white;
}
</style>
