import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Phone, Facebook, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Mayank Srivastava
            </h3>
            <p className="text-gray-400">
              DevOps Engineer | Cloud Enthusiast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com/mayanksrivas', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/mayank-srivastava-6292721a9/', label: 'LinkedIn' },
              { icon: Facebook, href: 'https://www.facebook.com/share/16VM6iQavY/', label: 'Facebook' },
              { icon: Instagram, href: 'https://www.instagram.com/hr26_maan?igsh=amQ3bmh3NGRsZXIy', label: 'Instagram' },
              { icon: Youtube, href: 'https://youtube.com/@hr26_maan?si=oe2qxGAn_Wogh34C', label: 'Youtube' },
              { icon: Mail, href: 'mailto:mayanksrivas11@gmail.com', label: 'Email' },
              { icon: Phone, href: 'tel:+919795165835', label: 'Phone' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, rotateZ: 10 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/10 text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>by Mayank Srivastava</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}