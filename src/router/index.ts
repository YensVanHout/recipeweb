import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddRecipe from "../views/AddRecipe.vue";
import RecipePage from "../views/RecipePage.vue";
import "dotenv";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/addrecipe", name: "Add Recipe", component: AddRecipe },
  { path: "/randomrecipe", name: "Recipe", component: RecipePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
