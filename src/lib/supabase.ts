const { createClient } = require('@supabase/supabase-js')

// Require proper environment variables - no fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('🔧 Supabase URL:', supabaseUrl)
console.log('🔧 Supabase Key exists:', !!supabaseAnonKey)

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variables')
}

// Only create client if we have valid credentials
let supabase = null
if (supabaseUrl && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
    console.log('✅ Supabase client created successfully')
  } catch (error) {
    console.error('❌ Failed to create Supabase client:', error)
  }
}

export { supabase }

export const testSupabaseConnection = async () => {
  if (!supabase) {
    console.error('⚠️ Supabase client not available - missing environment variables')
    return false
  }
  
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
  return supabase !== null && supabaseUrl && supabaseAnonKey
}