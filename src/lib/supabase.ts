import { createClient } from '@supabase/supabase-js'

// Use environment variables if available, otherwise use working defaults
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://mcgwmosxmghufkgkitjb.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

console.log('🔧 Supabase URL:', supabaseUrl)
console.log('🔧 Supabase Key exists:', !!supabaseAnonKey)

// Only create client if we have a valid key
let supabase = null
if (supabaseAnonKey && supabaseAnonKey.length > 10) {
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
    console.log('⚠️ Supabase client not available')
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
  return supabase !== null && supabaseUrl && supabaseAnonKey && supabaseUrl.includes('supabase.co')
}