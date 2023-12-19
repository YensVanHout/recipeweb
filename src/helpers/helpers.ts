import { recipe } from "../interfaces/interfaces";
import { supabase } from "../lib/supabaseClient";

export const getRecipes = async (amount?: number, skip?: number) => {
  const sample: number = amount || 6;
  const skipRows: number = skip || 0;

  const { data, error } = await supabase
    .from("recipes")
    .select()
    .limit(amount || 6)
    .range(skip || 0, sample + skipRows);

  return { data: data as unknown as recipe[], error: error };
};

export const getCollection = async (amount: number, skip: number) => {
  const recipes = await getRecipes(amount || 6, skip);
  const recipeCount = await supabase.rpc("getcount");

  const errors = [recipes.error, recipeCount.error];

  return { recipes: recipes.data, amount: recipeCount.data, errors: errors };
};

export const getUsername = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user?.email;
};

export const checkUserState = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session ? true : false;
};
