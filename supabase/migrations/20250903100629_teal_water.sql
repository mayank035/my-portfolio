/*
  # Portfolio Website Database Schema

  1. New Tables
    - `projects` - Portfolio projects with tech stack and links
    - `skills` - Technical skills with proficiency levels and categories
    - `experiences` - Professional work experience
    - `contact_messages` - Contact form submissions
    - `ai_logs` - AI assistant interaction logs

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access and authenticated admin access
    - Contact messages and AI logs are insert-only for public users

  3. Sample Data
    - Pre-populated with Mayank's professional information
    - Skills, experience, and project data included
*/

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  tech_stack text[] DEFAULT '{}',
  github_link text,
  demo_link text,
  thumbnail text,
  created_at timestamptz DEFAULT now()
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  level integer NOT NULL CHECK (level >= 0 AND level <= 100),
  category text NOT NULL CHECK (category IN ('frontend', 'backend', 'devops', 'cloud')),
  icon text,
  created_at timestamptz DEFAULT now()
);

-- Experiences table
CREATE TABLE IF NOT EXISTS experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company text NOT NULL,
  position text NOT NULL,
  duration text NOT NULL,
  description text[] DEFAULT '{}',
  technologies text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- AI logs table
CREATE TABLE IF NOT EXISTS ai_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  query text NOT NULL,
  response text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Public can read projects" ON projects FOR SELECT TO anon USING (true);
CREATE POLICY "Public can read skills" ON skills FOR SELECT TO anon USING (true);
CREATE POLICY "Public can read experiences" ON experiences FOR SELECT TO anon USING (true);
CREATE POLICY "Public can insert contact messages" ON contact_messages FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Public can insert AI logs" ON ai_logs FOR INSERT TO anon WITH CHECK (true);

-- Admin policies (for authenticated users)
CREATE POLICY "Authenticated can manage projects" ON projects FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated can manage skills" ON skills FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated can manage experiences" ON experiences FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated can read contact messages" ON contact_messages FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated can read AI logs" ON ai_logs FOR SELECT TO authenticated USING (true);

-- Insert sample data
INSERT INTO skills (name, level, category) VALUES
  ('Microsoft Azure', 92, 'cloud'),
  ('Terraform', 90, 'devops'),
  ('Docker', 88, 'devops'),
  ('Kubernetes (AKS)', 85, 'devops'),
  ('Azure DevOps', 95, 'devops'),
  ('Git & GitHub', 90, 'devops'),
  ('Azure Repos', 88, 'devops'),
  ('YAML Pipelines', 92, 'devops');

INSERT INTO experiences (company, position, duration, description, technologies) VALUES
  (
    'Agriculture Insurance Company of India Limited (AIC)',
    'DevOps Engineer',
    '2024 - Present',
    ARRAY[
      'Provisioned Azure Virtual Machines as per environment needs, ensuring optimized performance and cost control',
      'Automated infrastructure deployments using Terraform and Azure DevOps, ensuring consistency across environments',
      'Containerized applications using Docker and deployed to AKS, utilizing namespaces and autoscaling for efficient orchestration',
      'Used Terraform modules, for_each, and maps to build scalable, reusable infrastructure from a unified codebase',
      'Followed structured branching strategies in Azure Repos to streamline collaboration and code management',
      'Enabled full traceability by integrating Git-based version control into infrastructure provisioning workflows'
    ],
    ARRAY['Azure', 'Terraform', 'Docker', 'Kubernetes', 'Azure DevOps', 'Git', 'Azure Repos']
  ),
  (
    'Wipro Technology',
    'DevOps Engineer',
    '2022 - 2024',
    ARRAY[
      'Automated Azure infrastructure provisioning using Terraform (IaC) with remote state and locking for secure, multi-environment setup',
      'Built CI/CD pipelines in Azure DevOps (YAML & Classic), integrating Terraform for infra and Docker for application deployments with quality gates',
      'Containerized apps with Docker to ensure consistency and ease of deployment across environments',
      'Deployed and managed workloads on AKS (Azure Kubernetes Service), leveraging namespaces and resource limits for efficient orchestration',
      'Managed Git operations—branching, pull request, and code reviews—on GitHub to ensure clean, collaborative delivery',
      'Developed reusable Terraform modules using for_each, maps, and variables for scalable infra'
    ],
    ARRAY['Azure', 'Terraform', 'Docker', 'AKS', 'Azure DevOps', 'Git', 'GitHub', 'YAML']
  );

INSERT INTO projects (title, description, tech_stack, github_link, demo_link, thumbnail) VALUES
  (
    'Azure Infrastructure Automation',
    'Complete infrastructure provisioning using Terraform and Azure DevOps for scalable cloud deployments with remote state management and multi-environment setup.',
    ARRAY['Terraform', 'Azure', 'Azure DevOps', 'YAML'],
    '#',
    '#',
    'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
  ),
  (
    'Kubernetes Cluster Management',
    'Automated AKS cluster deployment with monitoring, autoscaling, namespaces, and resource optimization for efficient container orchestration.',
    ARRAY['Kubernetes', 'Docker', 'Azure', 'AKS', 'Terraform'],
    '#',
    '#',
    'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg'
  ),
  (
    'CI/CD Pipeline Optimization',
    'Streamlined deployment pipelines with automated testing, quality gates, security scanning, and multi-environment deployment using Azure DevOps.',
    ARRAY['Azure DevOps', 'Docker', 'Terraform', 'Git', 'YAML'],
    '#',
    '#',
    'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg'
  );