import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase";
export const supabase = createClient<Database>(
  import.meta.env.VITE_DATABASE_URL,
  import.meta.env.VITE_ANON_KEY
);
