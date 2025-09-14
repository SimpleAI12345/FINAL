import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Inquiry = {
  id?: string;
  name: string;
  email: string;
  selected_service: string;
  company_name: string;
  problem_to_solve: string;
  additional_info?: string;
  created_at?: string;
};