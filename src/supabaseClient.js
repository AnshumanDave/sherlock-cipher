import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Environment variable
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Environment variable

if (!supabaseUrl || !supabaseKey) {
  throw new Error('supabaseUrl and supabaseKey are required');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
