<script setup lang="ts">
import RecipePreview from "../../components/RecipePreview.vue";
import { recipe } from "../../interfaces/interfaces";
import { onMounted, ref } from "vue";
import Title from "../../components/Title.vue";
import SubTitle from "../../components/SubTitle.vue";
import { getCollection } from "../../helpers/helpers";

type CollectionCall = {
  recipes: recipe[];
  amount: number;
};
let loading: boolean = true;
const recipes = ref<CollectionCall>();
onMounted(async () => {
  recipes.value = (await getCollection(8, 0)) as unknown as CollectionCall;
  loading = false;
});
</script>
<template>
  <div class="md:w-2/3 mx-auto">
    <Title title="Collection" />
    <SubTitle
      class="dark:text-slate-300"
      :title="loading == true ? 'Fetching recipes ...' : loading == false && recipes!.recipes.length >= 0 ? recipes?.amount.toString() + ' recipes found' : 'Error fetching recipes ...'"
    />
    <div class="md:flex flex-wrap justify-around" :v-if="recipes?.recipes">
      <RecipePreview
        class="mx-2"
        v-for="(item, index) in recipes?.recipes"
        :key="index"
        :id="item.id"
        :title="item.title"
        :tags="item.tags"
      />
    </div>
  </div>
</template>
<style scoped></style>
