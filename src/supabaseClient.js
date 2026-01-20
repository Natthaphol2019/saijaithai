// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// ไปเอาค่าจาก Supabase -> Project Settings -> API
const supabaseUrl = 'https://uyvoxwnjmvevvtoqpdzq.supabase.co' 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5dm94d25qbXZldnZ0b3FwZHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4OTE3OTAsImV4cCI6MjA4NDQ2Nzc5MH0.gPXwyrQS9IXTZLXGK5X1q5ZyS-4sLA5skzozFgIeBkM'

export const supabase = createClient(supabaseUrl, supabaseKey)