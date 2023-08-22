import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddRecipe from "../views/recipes/AddRecipe.vue";
import RecipePage from "../views/recipes/RecipePage.vue";
import RandomRecipe from "../views/recipes/RandomRecipe.vue";
import About from "../views/misc/About.vue";
import Login from "../views/account/Login.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/addrecipe", name: "Add Recipe", component: AddRecipe },
  { path: "/recipe/:id", name: "Recipe", component: RecipePage },
  { path: "/randomrecipe", name: "Random Recipe", component: RandomRecipe },
  { path: "/about", name: "About", component: About },
  { path: "/login", name: "Log in", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
