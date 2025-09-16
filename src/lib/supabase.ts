import { createClient } from '@supabase/supabase-js'

// Use the actual environment variables from your .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Only create client if we have valid environment variables
let supabase = null
let isConfigured = false

if (supabaseUrl && supabaseAnonKey && supabaseUrl.includes('supabase.co')) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
    isConfigured = true
    console.log('✅ Supabase connected successfully')
  } catch (error) {
    console.warn('⚠️ Supabase connection failed:', error)
    isConfigured = false
  }
} else {
  console.log('ℹ️ Supabase not configured - using demo mode')
}

// Export a safe client that won't crash the app
export { supabase }

// Export a function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return isConfigured && supabase !== null
}