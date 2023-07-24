import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddRecipe from "../views/AddRecipe.vue";
import RecipePage from "../views/RecipePage.vue";
import RandomRecipe from "../views/RandomRecipe.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/addrecipe", name: "Add Recipe", component: AddRecipe },
  { path: "/recipe/:id", name: "Recipe", component: RecipePage },
  { path: "/randomRecipe", name: "Random Recipe", component: RandomRecipe },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
