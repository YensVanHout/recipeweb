<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
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
        >Add</router-link
      >
      <router-link
        class="text-gray dark:text-slate-200 hover:text-black dark:hover:text-white"
        to="/about"
        >About</router-link
      >
    </div>
    <div id="auth-and-theme" class="w-1/5 flex justify-around">
      <div id="auth" class="flex justify-around w-2/3">
        <router-link
          class="text-gray dark:text-slate-200 hover:text-black dark:hover:text-white"
          to="/login"
          >Log in</router-link
        >
        <router-link
          class="text-gray dark:text-slate-200 hover:text-black dark:hover:text-white"
          to="/register"
          >Register</router-link
        >
      </div>
      <div id="theme">
        <span class="text-gray dark:text-slate-200" @click="toggleDark()">
          {{ isDark ? "Dark" : "Light" }}</span
        >
      </div>
    </div>
  </nav>
</template>
