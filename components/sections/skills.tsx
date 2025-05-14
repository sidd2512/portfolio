"use client"

import { motion } from "framer-motion"
import { Code, Server, Database, PenToolIcon as Tool, Cpu, Layout } from "lucide-react"
import * as Si from "react-icons/si"
import { skillCategories } from "@/data/skills"

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  // Map icon strings to actual components
  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      Layout,
      Server,
      Code,
      Tool,
      Database,
      Cpu,
    }
    return icons[iconName] || Layout
  }

  // Map skill icon strings to react-icons
  const getSkillIcon = (iconName: string) => {
    // @ts-ignore - dynamically accessing icons from react-icons/si
    return Si[iconName] || Si.SiJavascript
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Tech Stack</h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => {
            const CategoryIcon = getIcon(category.icon)

            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-800"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <CategoryIcon className="skill-icon" />
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = getSkillIcon(skill.icon)

                      return (
                        <motion.div
                          key={skillIndex}
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 p-2 rounded-md"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(59, 130, 246, 0.1)",
                            transition: { duration: 0.2 },
                          }}
                        >
                          <SkillIcon className="text-primary text-lg" />
                          <span>{skill.name}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
