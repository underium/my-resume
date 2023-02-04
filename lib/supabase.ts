// lib/supabase.ts

import { createClient } from "supabase";
import "https://deno.land/std@0.175.0/dotenv/load.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "";
const SUPABASE_KEY = Deno.env.get("SUPABASE_KEY") || "";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
