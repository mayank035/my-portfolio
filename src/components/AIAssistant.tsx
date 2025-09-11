import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'
import { supabase } from '../lib/supabase'

interface ChatMessage {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hi! I'm Mayank's AI assistant. I can help you learn about his skills, introduction, projects, experience, and more. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const response = generateAIResponse(inputText)
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setLoading(false)

      // Log to Supabase
      supabase.from('ai_logs').insert([
        { query: inputText, response: response }
      ])
    }, 1000)
  }

  const generateAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()
    
    if (lowerQuery.includes('skill') || lowerQuery.includes('technology')) {
      return "Mayank specializes in Microsoft Azure (cloud platforms), Terraform (automation tools), Git & GitHub (version control), Azure DevOps with YAML & Classic Pipelines (CI/CD), Docker (containerization), and Kubernetes AKS (orchestration). He has 3+ years of hands-on experience in cloud automation and DevOps practices."
    }
      if (lowerQuery.includes('Intro') || lowerQuery.includes('introduction')) {
        return `Hi, my name is Mayank Srivastava. I completed my graduation from Rajarshi School of Management and Technology in 2022. 
      I have a total of 3 years and 7 months of experience at TalentPro, and currently, I’m working as a DevOps Engineer on the AIC project.

      In this project, my main focus has been on Azure Kubernetes Service, where I deployed microservices applications using Docker and Azure Container Registry, along with end-to-end CI/CD pipelines in Azure DevOps. 

      On the infrastructure side, I automated the provisioning of Azure resources using Terraform, and for version control, I managed code through Git and GitHub. 

      Overall, my role revolves around building secure, automated, and scalable infrastructure while ensuring smooth and reliable deployments.`;
      }

    
    if (lowerQuery.includes('experience') || lowerQuery.includes('work')) {
      return "Mayank has 3 years and 7 months of DevOps experience. He currently works at Agriculture Insurance Company of India Limited (AIC) since 2024, focusing on Azure VM provisioning, Terraform automation, and AKS deployments. Previously at Wipro Technology (2022-2024), he automated Azure infrastructure and built comprehensive CI/CD pipelines."
    }
    
    if (lowerQuery.includes('project') || lowerQuery.includes('portfolio')) {
      return "Mayank has worked on several key projects including Azure Infrastructure Automation using Terraform, Kubernetes Cluster Management with AKS, and CI/CD Pipeline Optimization. You can check out the Projects section for more details!"
    }
    
    if (lowerQuery.includes('education') || lowerQuery.includes('qualification')) {
      return "Mayank has a Bachelor of Computer Applications (BCA) degree completed in 2022, Senior Secondary (12th) in 2019, and Secondary (10th) in 2017, all from Board of High School and Intermediate Education Uttar Pradesh. He also holds the Azure Fundamentals (AZ-900) certification from Microsoft Azure."
    }
    
    if (lowerQuery.includes('contact') || lowerQuery.includes('reach')) {
      return "You can reach Mayank at mayanksrivas11@gmail.com or call him at +91 9795165835. He's based in Sector 44, Noida. Feel free to use the contact form below!"
    }
    
    return "I'd be happy to help! You can ask me about Mayank's skills, introduction, experience, projects, education, or how to contact him. What specific information are you looking for?"
  }

  return (
    <>
      {/* Chat Widget Toggle */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        style={{ display: isOpen ? 'none' : 'block' }}
      >
        <MessageCircle className="h-6 w-6 text-white" />
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] max-w-[90vw] max-h-[80vh]"
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl blur-lg"></div>
              <div className="relative h-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-sm rounded-2xl border border-white/20 flex flex-col overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-white/20 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Ask me anything!</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-xl ${
                          message.isUser
                            ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white'
                            : 'bg-white/20 dark:bg-gray-800/20 text-gray-900 dark:text-white border border-white/20'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {loading && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white/20 dark:bg-gray-800/20 border border-white/20 rounded-xl p-4">
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-cyan-400 rounded-full"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-white/20">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Ask me about Mayank..."
                      className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-gray-900 dark:text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backdrop-blur-sm text-sm"
                    />
                    <motion.button
                      onClick={handleSendMessage}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      disabled={loading || !inputText.trim()}
                      className="p-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl text-white hover:shadow-lg transition-all disabled:opacity-50"
                    >
                      <Send className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}