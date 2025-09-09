import React from 'react'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './contexts/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { AIAssistant } from './components/AIAssistant'
import { TerminalSection } from './components/TerminalSection'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-all duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <TerminalSection />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <AIAssistant />
        <Toaster 
          position="top-right"
          toastOptions={{
            className: 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-900 dark:text-white',
            duration: 4000,
          }}
        />
      </div>
    </ThemeProvider>
  )
}

export default App