import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddRecipe from "../views/recipes/AddRecipe.vue";
import RecipePage from "../views/recipes/RecipePage.vue";
import RandomRecipe from "../views/recipes/RandomRecipe.vue";
import About from "../views/misc/About.vue";
import Login from "../views/account/Login.vue";
import Register from "../views/account/Register.vue";
import Collection from "../views/recipes/Collection.vue";
import PasswordReset from "../views/account/PasswordReset.vue";
import ChangePassword from "../views/account/ChangePassword.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/collection", name: "Collection", component: Collection },
  { path: "/addrecipe", name: "Add Recipe", component: AddRecipe },
  { path: "/recipe/:id", name: "Recipe", component: RecipePage },
  { path: "/randomrecipe", name: "Random Recipe", component: RandomRecipe },
  { path: "/about", name: "About", component: About },
  { path: "/login", name: "Log in", component: Login },
  { path: "/register", name: "register", component: Register },
  {
    path: "/password-forgotten",
    name: "password-forgotten",
    component: PasswordReset,
  },
  {
    path: "/change-password",
    name: "change-password",
    component: ChangePassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
