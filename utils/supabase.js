import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ldgnpdudaohjifgktmst.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZ25wZHVkYW9oamlmZ2t0bXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMDM3NDQsImV4cCI6MjAxNDU3OTc0NH0.CPreG3IrfxuKiM4irARV-O2Jwtcx7f8f6CiokNqQOHE"
export const supabase = createClient(supabaseUrl, supabaseKey)