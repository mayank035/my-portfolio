import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { supabase, Project } from '../lib/supabase'

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching projects:', error)
        // Fallback data
        setProjects([
          {
            id: '1',
            title: 'Azure Infrastructure Automation',
            description: 'Complete infrastructure provisioning using Terraform and Azure DevOps for scalable cloud deployments.',
            tech_stack: ['Terraform', 'Azure', 'Azure DevOps', 'YAML'],
            github_link: '#',
            demo_link: '#',
            thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
            created_at: '2024-01-01'
          },
          {
            id: '2',
            title: 'Kubernetes Cluster Management',
            description: 'Automated AKS cluster deployment with monitoring, autoscaling, and resource optimization.',
            tech_stack: ['Kubernetes', 'Docker', 'Azure', 'Helm'],
            github_link: '#',
            demo_link: '#',
            thumbnail: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
            created_at: '2024-02-01'
          },
          {
            id: '3',
            title: 'CI/CD Pipeline Optimization',
            description: 'Streamlined deployment pipelines with automated testing, security scanning, and multi-environment deployment.',
            tech_stack: ['Azure DevOps', 'Docker', 'Terraform', 'Git'],
            github_link: '#',
            demo_link: '#',
            thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
            created_at: '2024-03-01'
          }
        ])
      } else {
        setProjects(data)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-white/10 dark:bg-gray-900/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 group-hover:border-cyan-400/30 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-500/20 relative overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech_stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-cyan-400/20 text-cyan-400 rounded-full border border-cyan-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <motion.a
                        href={project.github_link}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </motion.a>
                      {project.demo_link && (
                        <motion.a
                          href={project.demo_link}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-purple-400 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}