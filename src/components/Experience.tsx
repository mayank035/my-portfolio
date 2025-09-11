import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Building, Calendar, ExternalLink } from 'lucide-react'
import { supabase, Experience as ExperienceType } from '../lib/supabase'

export function Experience() {
  const [experiences, setExperiences] = useState<ExperienceType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchExperience()
  }, [])

  const fetchExperience = async () => {
    try {
      const { data, error } = await supabase
        .from('experiences')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching experience:', error)
        // Fallback data
        setExperiences([
          {
            id: '1',
            company: 'Agriculture Insurance Company of India Limited (AIC)',
            position: 'DevOps Engineer',
            duration: '2024 - Present',
            description: [
              'Provisioned Azure Virtual Machines as per environment needs, ensuring optimized performance and cost control',
              'Automated infrastructure deployments using Terraform and Azure DevOps, ensuring consistency across environments',
              'Containerized applications using Docker and deployed to AKS, utilizing namespaces and autoscaling for efficient orchestration',
              'Used Terraform modules, for_each, and maps to build scalable, reusable infrastructure from a unified codebase',
              'Followed structured branching strategies in Azure Repos to streamline collaboration and code management',
              'Enabled full traceability by integrating Git-based version control into infrastructure provisioning workflows'
            ],
            technologies: ['Azure', 'Terraform', 'Docker', 'Kubernetes', 'Azure DevOps', 'Git']
          },
          {
            id: '2',
            company: 'Wipro Technology',
            position: 'DevOps Engineer',
            duration: '2022 - 2024',
            description: [
              'Automated Azure infrastructure provisioning using Terraform',
              'Built CI/CD pipelines in Azure DevOps (YAML & Classic), integrating Terraform for infra and Docker for application deployments with quality gates',
              'Containerized apps with Docker to ensure consistency and ease of deployment across environments',
              'Deployed and managed workloads on AKS (Azure Kubernetes Service), leveraging namespaces and resource limits for efficient orchestration',
              'Managed Git operations—branching, pull request, and code reviews—on GitHub to ensure clean, collaborative delivery',
              'Developed reusable Terraform modules using for_each, maps, and variables for scalable infra'
            ],
            technologies: ['Azure', 'Terraform', 'Docker', 'AKS', 'Azure DevOps', 'Git', 'YAML']
          }
        ])
      } else {
        setExperiences(data)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const education = [
        {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Lovely Professional University',
      year: '2026',
      type: 'Post Graduation'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Mahatma Gandhi Kashi Vidyapith University',
      year: '2022',
      type: 'Graduation'
    },
    {
      degree: 'Senior Secondary (12th)',
      institution: 'Board of High School and Intermediate Education Uttar Pradesh',
      year: '2019',
      type: 'Higher Secondary'
    },
    {
      degree: 'Secondary (10th)',
      institution: 'Board of High School and Intermediate Education Uttar Pradesh',
      year: '2017',
      type: 'Secondary Education'
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Professional Experience</h3>
            {loading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
              </div>
            ) : (
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
                    <div className="ml-8 bg-white/10 dark:bg-gray-900/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {exp.position}
                          </h4>
                          <div className="flex items-center text-cyan-400 mb-2">
                            <Building className="h-4 w-4 mr-2" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-purple-400/20 text-purple-400 rounded border border-purple-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education & Certifications</h3>
            
            <div className="space-y-6 mb-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400">{edu.type}</span>
                    <span className="text-gray-500 dark:text-gray-400">{edu.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                🏆 Certifications
              </h4>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-4 bg-white/10 rounded-lg border border-white/20"
              >
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    Azure Fundamentals (AZ-900)
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Microsoft Azure</p>
                </div>
                <motion.a
                  href="https://learn.microsoft.com/en-us/users/mayanksrivastava-4951/credentials/9ef31969ceaaa6be?ref=https%3A%2F%2Fwww.naukri.com%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Certificate
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}