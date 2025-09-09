import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database types
export interface Project {
  id: string
  title: string
  description: string
  tech_stack: string[]
  github_link?: string
  demo_link?: string
  thumbnail?: string
  created_at: string
}

export interface Skill {
  id: string
  name: string
  level: number
  category: 'frontend' | 'backend' | 'devops' | 'cloud'
  icon?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string[]
  technologies: string[]
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}

export interface AILog {
  id: string
  query: string
  response: string
  created_at: string
}