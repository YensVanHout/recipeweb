<script setup lang="ts">
import axios from "axios";
import RecipePreview from "../../components/RecipePreview.vue";
import { recipe } from "../../interfaces/interfaces";
import { ref } from "vue";
import Title from "../../components/Title.vue";
import SubTitle from "../../components/SubTitle.vue";

interface CollectionCall {
  recipes: recipe[];
  amount: number;
}

const recipes = ref<CollectionCall>();
let apiURL = import.meta.env.VITE_API_URL;

let loading: boolean = true;

axios.get(apiURL + "recipes?sort=desc").then((res) => {
  recipes.value = res.data;
  loading = false;
});
</script>
<template>
  <div class="md:w-2/3 mx-auto">
    <Title class="md:w-2/3 mx-auto" title="Collection" />
    <SubTitle
      class="md:w-2/3 mx-auto"
      :title="loading == true ? 'Fetching recipes ...' : loading == false && recipes!.recipes.length >= 0 ? recipes?.amount.toString() + ' recipes found' : 'Error fetching recipes ...'"
    />
    <div class="md:flex flex-wrap justify-around">
      <RecipePreview
        class="mx-2"
        v-for="(item, index) in recipes?.recipes"
        :title="item.title"
        :id="item._id"
        :tags="item.tags"
        :key="index"
      />
    </div>
  </div>
</template>
<style scoped></style>
