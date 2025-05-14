export interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

export interface Skill {
  name: string
  icon: string
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React.js", icon: "SiReact" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Framer Motion", icon: "SiFramer" },
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss3" },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "MongoDB", icon: "SiMongodb" },
    ],
  },
  {
    title: "Languages",
    icon: "Code",
    skills: [
      { name: "C", icon: "SiC" },
      { name: "C++", icon: "SiCplusplus" },
      { name: "Java", icon: "SiJava" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "Python (Learning)", icon: "SiPython" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "Tool",
    skills: [
      { name: "Docker", icon: "SiDocker" },
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Linux", icon: "SiLinux" },
      { name: "Shell Scripting", icon: "SiGnubash" },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "SQL", icon: "SiMysql" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "MongoDB", icon: "SiMongodb" },
    ],
  },
  {
    title: "Core CS",
    icon: "Cpu",
    skills: [
      { name: "OOP", icon: "SiJava" },
      { name: "Operating Systems", icon: "SiLinux" },
      { name: "Data Structures", icon: "SiJavascript" },
      { name: "Algorithms", icon: "SiPython" },
    ],
  },
]
