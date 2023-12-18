import { recipe } from "../interfaces/interfaces";
import { supabase } from "../lib/supabaseClient";

export const getRecipes = async (amount?: number) => {
  const { data, error } = await supabase
    .from("recipes")
    .select()
    .limit(amount || 6);
  return { data: data as unknown as recipe[], error: error };
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
