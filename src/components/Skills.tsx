import React, { useState, useEffect } from 'react';
import { AzureIcon } from "../icons/AzureIcon";
import { PowerShellIcon } from "../icons/PowerShellIcon";

import { 
  
  SiTerraform, 
  SiDocker, 
  SiKubernetes, 
  SiGit, 
  SiGithub, 
  SiLinux,

  SiHelm,
  SiYaml
} from 'react-icons/si';
import { Cloud, Key, FileCode, Server, GitBranch, Settings, Container, HardDrive } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
  description: string;
  link: string;
}

const skillsData: Skill[] = [
  {
    id: '1',
    name: 'Microsoft Azure',
    level: 92,
    category: 'Cloud Platforms',
    icon: <AzureIcon className="w-8 h-8 text-sky-600" />,
    description: 'Comprehensive cloud platform for building, deploying, and managing applications',
    link: 'https://azure.microsoft.com/'
  },
  {
    id: '2',
    name: 'Terraform',
    level: 88,
    category: 'IaC Tools',
    icon: <SiTerraform className="w-8 h-8" />,
    description: 'Infrastructure as Code tool for building, changing, and versioning infrastructure',
    link: 'https://www.terraform.io/'
  },
  {
    id: '3',
    name: 'Docker',
    level: 85,
    category: 'Containerization',
    icon: <SiDocker className="w-8 h-8" />,
    description: 'Platform for developing, shipping, and running applications in containers',
    link: 'https://www.docker.com/'
  },
  {
    id: '4',
    name: 'Kubernetes',
    level: 82,
    category: 'Orchestration',
    icon: <SiKubernetes className="w-8 h-8" />,
    description: 'Container orchestration platform for automating deployment and scaling',
    link: 'https://kubernetes.io/'
  },
  {
    id: '5',
    name: 'Azure DevOps',
    level: 90,
    category: 'CI/CD Pipeline',
    icon: <Settings className="w-8 h-8" />,
    description: 'Complete DevOps toolchain for planning, developing, delivering, and operating',
    link: 'https://azure.microsoft.com/en-us/services/devops/'
  },
  {
    id: '6',
    name: 'Git',
    level: 87,
    category: 'Version Control',
    icon: <SiGit className="w-8 h-8" />,
    description: 'Distributed version control system for tracking changes in source code',
    link: 'https://git-scm.com/'
  },
  {
    id: '7',
    name: 'GitHub',
    level: 85,
    category: 'Version Control',
    icon: <SiGithub className="w-8 h-8" />,
    description: 'Web-based platform for version control and collaboration',
    link: 'https://github.com/'
  },
  {
    id: '8',
    name: 'Azure Key Vault',
    level: 80,
    category: 'Azure Infrastructure',
    icon: <Key className="w-8 h-8" />,
    description: 'Cloud service for securely storing and accessing secrets',
    link: 'https://azure.microsoft.com/en-us/services/key-vault/'
  },
  {
    id: '9',
    name: 'Helm',
    level: 78,
    category: 'Orchestration',
    icon: <SiHelm className="w-8 h-8" />,
    description: 'Package manager for Kubernetes applications',
    link: 'https://helm.sh/'
  },
  {
    id: '10',
    name: 'YAML',
    level: 85,
    category: 'CI/CD Pipeline',
    icon: <SiYaml className="w-8 h-8" />,
    description: 'Human-readable data serialization standard for configuration files',
    link: 'https://yaml.org/'
  },
  {
    id: '11',
    name: 'Linux',
    level: 83,
    category: 'Operating Systems',
    icon: <SiLinux className="w-8 h-8" />,
    description: 'Open-source operating system widely used in server environments',
    link: 'https://www.linux.org/'
  },
  {
    id: '12',
    name: 'PowerShell',
    level: 75,
    category: 'Automation Tools',
    icon: <PowerShellIcon className="w-8 h-8 text-blue-500" />,
    description: 'Task automation and configuration management framework',
    link: 'https://docs.microsoft.com/en-us/powershell/'
  },
  {
    id: '13',
    name: 'Bash',
    level: 80,
    category: 'Automation Tools',
    icon: <FileCode className="w-8 h-8" />,
    description: 'Unix shell and command language for system administration',
    link: 'https://www.gnu.org/software/bash/'
  },
  {
    id: '14',
    name: 'Azure Pipelines',
    level: 88,
    category: 'CI/CD Pipeline',
    icon: <GitBranch className="w-8 h-8" />,
    description: 'Cloud service for building and deploying applications',
    link: 'https://azure.microsoft.com/en-us/services/devops/pipelines/'
  },
  {
    id: '15',
    name: 'Azure Repos',
    level: 85,
    category: 'Version Control',
    icon: <Server className="w-8 h-8" />,
    description: 'Git repositories with unlimited private repos',
    link: 'https://azure.microsoft.com/en-us/services/devops/repos/'
  },
  {
    id: '16',
    name: 'IaaS Services',
    level: 87,
    category: 'Azure Infrastructure',
    icon: <Cloud className="w-8 h-8" />,
    description: 'Infrastructure as a Service offerings on Azure',
    link: 'https://azure.microsoft.com/en-us/overview/what-is-iaas/'
  },
  {
    id: '17',
    name: 'PaaS',
    level: 82,
    category: 'Azure Infrastructure',
    icon: <Server className="w-8 h-8" />,
    description: 'Platform as a Service for application development and deployment',
    link: 'https://azure.microsoft.com/en-us/overview/what-is-paas/'
  },
  {
    id: '18',
    name: 'ARM Templates',
    level: 78,
    category: 'IaC Tools',
    icon: <FileCode className="w-8 h-8" />,
    description: 'Azure Resource Manager templates for infrastructure deployment',
    link: 'https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/'
  },
  {
    id: '19',
    name: 'Virtual Machines',
    level: 85,
    category: 'Azure Infrastructure',
    icon: <HardDrive className="w-8 h-8" />,
    description: 'Scalable computing resources in the cloud',
    link: 'https://azure.microsoft.com/en-us/services/virtual-machines/'
  },
  {
    id: '20',
    name: 'Container',
    level: 83,
    category: 'Containerization',
    icon: <Container className="w-8 h-8" />,
    description: 'Lightweight, portable application packaging technology',
    link: 'https://www.docker.com/resources/what-container'
  }
];

export function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSkills(skillsData);
      setLoading(false);
    }, 1000);
  }, []);

  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))];
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const handleSkillClick = (skill: Skill) => {
    window.open(skill.link, '_blank');
  };

  if (loading) {
    return (
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading skills...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expertise in modern DevOps tools and cloud technologies
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => handleSkillClick(skill)}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
            >
              <div className="flex items-center mb-4">
                <div className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white ml-3">{skill.name}</h3>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-sm font-semibold text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-3">{skill.description}</p>
              
              <div className="text-xs text-gray-500 bg-white/5 rounded-lg px-3 py-1 inline-block">
                {skill.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}