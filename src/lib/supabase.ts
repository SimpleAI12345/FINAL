import { createClient } from '@supabase/supabase-js'

// These should be your actual Supabase project values
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://mcgwmosxmghufkgkitjb.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZ3dtb3N4bWdodWZrZ2tpdGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzMjI4NDQsImV4cCI6MjA0MTg5ODg0NH0.example'

console.log('🔧 Supabase URL:', supabaseUrl)
console.log('🔧 Supabase Key exists:', !!supabaseAnonKey)

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test the connection
export const testSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase.from('inquiries').select('count', { count: 'exact', head: true })
    if (error) {
      console.error('❌ Supabase connection test failed:', error)
      return false
    }
    console.log('✅ Supabase connection successful')
    return true
  } catch (err) {
    console.error('❌ Supabase connection error:', err)
    return false
  }
}

export const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseAnonKey && supabaseUrl.includes('supabase.co')
}