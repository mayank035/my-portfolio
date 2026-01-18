import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Calendar } from 'lucide-react'

export function About() {
  const personalInfo = [
    { icon: Mail, label: 'Email', value: 'mayanksrivas11@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9795165835' },
    { icon: MapPin, label: 'Location', value: 'Sector 44, Noida' },
    { icon: Calendar, label: 'Experience', value: '3 years 7 months' },
  ]

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/resume-mayank-srivastava.pdf'
    link.download = 'Mayank_Srivastava_DevOps_Engineer_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/10 dark:bg-gray-900/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  DevOps Engineer
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  DevOps Engineer with 3 years 7 months of experience in designing, implementing, and managing CI/CD pipelines using Azure DevOps. 
                  Specialized in Infrastructure as Code (IaC) with Terraform for automating and managing scalable cloud resources across IaaS, PaaS, and SaaS 
                  offerings on Microsoft Azure. Hands-on experience with Docker and Azure Kubernetes Service (AKS) for containerization and orchestration. 
                  Strong expertise in Git-based version control, branching strategies, and collaborative development using GitHub/Azure Repos. Proven ability to 
                  optimize infrastructure, enforce security best practices, and enhance system reliability while adopting modern DevOps tools and practices to 
                  deliver secure, automated, and high-quality solutions in fast-paced environments.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {personalInfo.map(({ icon: Icon, label, value }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-400/20 to-purple-500/20">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                  <p className="text-gray-900 dark:text-white font-medium">{value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}