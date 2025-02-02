import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://frhcglxipnxpqttwzyus.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaGNnbHhpcG54cHF0dHd6eXVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MzA2ODAsImV4cCI6MjA1NDAwNjY4MH0.z_PLEOLfMGF6MaGfF-Hz_xVOYmTERLw39tofMe-tasU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});