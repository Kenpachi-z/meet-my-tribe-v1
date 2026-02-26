import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";

// Public (anon) client — safe to use in Client Components
// Only has access to data permitted by Supabase RLS policies
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dummy.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "dummy";

export const supabaseClient = createClient<Database>(supabaseUrl, supabaseAnonKey);
