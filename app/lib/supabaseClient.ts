import { createClient } from "@supabase/supabase-js";
import {
  SUPABASE_APP_NAME,
  SUPABASE_APP_URL,
  SUPABSE_PUBLIC_ANON_KEY,
} from "~/constants/index";
const options = {
  schema: "public",
  headers: { "x-my-custom-header": SUPABASE_APP_NAME },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
};
const supabase = createClient(
  SUPABASE_APP_URL,
  SUPABSE_PUBLIC_ANON_KEY,
  options
);
