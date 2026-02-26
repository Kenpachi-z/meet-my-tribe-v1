import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";

// Private (service_role) client — NEVER expose to the browser
// Used exclusively in API route handlers (server-side only)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dummy.supabase.co";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "dummy";

export const supabaseServer = createClient<Database>(supabaseUrl, supabaseServiceKey, {
    auth: {
        // Prevents this server client from persisting sessions
        persistSession: false,
        autoRefreshToken: false,
    },
});
