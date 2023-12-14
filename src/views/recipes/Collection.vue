<script setup lang="ts">
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

let loading: boolean = true;
</script>
<template>
  <div class="md:w-2/3 mx-auto">
    <Title title="Collection" />
    <SubTitle
      :title="loading == true ? 'Fetching recipes ...' : loading == false && recipes!.recipes.length >= 0 ? recipes?.amount.toString() + ' recipes found' : 'Error fetching recipes ...'"
    />
    <div class="md:flex flex-wrap justify-around">
      <RecipePreview
        class="mx-2"
        v-for="(item, index) in recipes?.recipes"
        :title="item.title"
        :id="item.id"
        :tags="item.tags"
        :key="index"
      />
    </div>
  </div>
</template>
<style scoped></style>
