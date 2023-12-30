import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PatFolio",
  description: "Personal Portfolio of Patrick Ambrose with emphasis on Digital Garden and Learning in Public",
  ignoreDeadLinks: true,
  lastUpdated: true,
  appearance: 'dark',
  outDir: '../dist',
  
  head: [
    ['meta', { name: 'author', content: 'Patrick Ambrose' }],
    ['meta', { name: 'keywords', content: 'digital-garden, pkm, second brain' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // Setting up local search with MiniSearch
    search: {
      provider: 'local'
    },
    
    logo: 'logo.png',
    siteTitle: "PatFolio",

    outline: {
      label: "Table of Contents",
      level: [2,3]
    },
    
    externalLinkIcon: true,

    nav: navBar(),

    sidebar: {
      // '/Garden/': sideBarNotes(),
      '/notes/': sideBarNotes(),
      '/guides/': sideBarGuides(),
      '/roadmaps/': sideBarRoadmaps(),
      '/showcase/': sideBarShowcase(),
    },

    socialLinks: [

      { icon: 'instagram', link: 'https://www.instagram.com/PatrickAmbrosso' },
      { icon: 'x', link: 'https://www.x.com/PatrickAmbrosso' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/PatrickAmbrosso' },
      { icon: 'github', link: 'https://github.com/PatrickAmbrosso' },
    ],

    lastUpdated: {
      text: 'Last Updated On',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page'
    },

    footer: {
      copyright: 'Copyright © 2024 <a href="https://github.com/PatrickAmbrosso"><strong>Patrick Ambrose</strong></a>'
    }
  }
})

// Navigation Bar Configuration
function navBar() {
  return [
    { text: 'Mindforest', link: '/mindforest/' },
    { 
      text: 'Learning',
      items: [
        { text: 'Notes', link: '/notes/' },
        { text: 'Guides', link: '/guides/' },
        { text: 'Roadmaps', link: '/roadmaps/' }
      ]
    },
    { 
      text: 'Showcase',
      items: [
        { 
          text: 'DevOps & Cloud Projects',
          items: [
            { text: 'Kubernetes @ Home', link: '/showcase/Kubernetes-K3S/'},
            { text: 'AWS-ome', link: '/aws-cloud-' },
            { text: 'CloudFares', link: 'https://bento.me/patrickambrosso' }
          ]
        },
        { 
          text: 'Dev Projects',
          items: [
            { text: 'Charming AWS CLI', link: '/About-Me' },
            { text: 'Biblically Accurate', link: 'https://bento.me/patrickambrosso' },
            { text: 'Project 2', link: 'https://bento.me/patrickambrosso' }
          ]
        },
        { text: 'Others & Misc', link: '/Roadmaps/' }
      ] 
    },
    {
      text: 'About',
      items: [
        {
          text: 'About Me',
          items: [
            { text: "Hey, It's Patrick", link: '/About-Me' },
            { text: 'Latest Updates?', link: 'https://bento.me/patrickambrosso' },
            { text: 'My Resumé', link: 'https://www.patrickambrose.com/resume-2023.pdf' }
          ]
        },
        {
          text: 'About PatFolio',
          items: [
            { text: 'The PatFolio Project', link: '/About-Me' },
            { text: 'Make your own PortFolio', link: '/guides/Vitepress-Portfolio/' }
          ]
        }
      ]
    }
  ]
}

// Side Bar Configurations
function sideBarNotes() {
  return [
    {
      text: 'Programming & Scripting',
      collapsed: true,
      link: '/notes/programming-languages/',
      items: [
        { text: 'Python', link: '/notes/programming-languages/python/' },
        { text: 'PowerShell', link: '/notes/programming-languages/powershell/' },
      ]
    },
    {
      text: 'DevOps',
      collapsed: true,
      link: '/notes/devops/',
      items: [
        { text: 'Docker', link: '/notes/devops/docker/' },
        { text: 'Kubernetes', link: '/notes/devops/kubernetes/' },
      ]
    },
    {
      text: 'Utilities',
      collapsed: true,
      link: '/notes/utilities/',
      items: [
        { text: 'FFMPEG', link: '/notes/utilities/ffmpeg' }
      ]
    }
  ]
}

function sideBarGuides() {
  return [
    {
      text: 'Configuration Reference',
      collapsed: true,
      link: '/guides/config-ref/',
      items: [
        { text: 'Windows Terminal Config', link: '/guides/config-ref/windows-terminal' },
        { text: 'Bash Terminal', link: '/guides/config-ref/bash-terminal' },
        { text: 'PowerShell Config', link: '/guides/config-ref/pwsh-config' },
        { text: 'Starship Prompt', link: '/guides/config-ref/starship-prompt' },
      ]
    },
    {
      text: 'HomeLab Guides',
      collapsed: true,
      link: '/guides/homelab/',
      items: [
        { text: 'Homer', link: '/guides/homelab/dashboard' },
        { text: 'PiHole', link: '/guides/homelab/pihole' },
      ]
    }
  ]
}

function sideBarRoadmaps() {
  return [
    {
      text: 'HomeLab Guides',
      collapsed: true,
      link: '/roadmaps/homeLab-guides/',
      items: [
        { text: 'HomeLab Considerations', link: '/roadmaps/homeLab-guides/considerations'}
      ]
    },
    {
      text: 'DevOps Guides',
      collapsed: true,
      link: '/roadmaps/devops-guides/',
      items: [
        { text: 'IaC', link: '/roadmaps/devops-guides/Iac' },
        { text: 'Monitoring', link: '/roadmaps/devops-guides/monitoring' },
        { text: 'Logging', link: '/roadmaps/devops-guides/logging' },
        { text: 'Continuous Integration', link: '/roadmaps/devops-guides/ci' }
      ]
    }
  ]
}

function sideBarShowcase() {
  return [
    {
      text: 'DevOps & Cloud Projects',
      collapsed: true,
      link: '/showcase/devops-and-cloud/',
      items: [
        { text: 'Kubernetes @ Home', link: '/showcase/devops-and-cloud/Getting-Started' },
        { text: 'AWS-ome', link: '/Projects/HomeLab/Purchasing-Equipment' },
        { text: 'Cloudfares', link: '/Projects/HomeLab/Configuring-Stacks' },
      ]
    },
    {
      text: 'Dev Projects',
      collapsed: true,
      link: '/showcase/development/',
      items: [
        { text: 'Charming AWS CLI', link: '/Projects/Personal-Website/The-Logistics' },
        { text: 'Biblically Accurate', link: '/Projects/Personal-Website/The-Logistics' },
        { text: 'Project 3', link: '/Projects/Personal-Website/The-Logistics' }
      ]
    },
    {
      text: 'Home Office Setup',
      collapsed: true,
      link: '/showcase/home-office/',
      items: [
        { text: 'Charming AWS CLI', link: '/Projects/Personal-Website/The-Logistics' },
        { text: 'Biblically Accurate', link: '/Projects/Personal-Website/The-Logistics' },
        { text: 'Project 3', link: '/Projects/Personal-Website/The-Logistics' }
      ]
    }
  ]
}