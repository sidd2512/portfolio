"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { personalInfo } from "@/data/personal-info"

export default function Experience() {
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

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Experience</h2>

        <motion.div
          className="max-w-3xl mx-auto mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-md border border-gray-200 dark:border-gray-800"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex items-center mb-4">
              <Briefcase className="text-primary h-6 w-6 mr-3" />
              <h3 className="text-xl font-semibold">{personalInfo.experience.position}</h3>
            </div>

            <div className="flex items-center mb-6 text-gray-600 dark:text-gray-400">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{personalInfo.experience.period}</span>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">{personalInfo.experience.company}</h4>
              <p className="text-gray-600 dark:text-gray-400">{personalInfo.experience.description}</p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Key Contributions</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                {personalInfo.experience.contributions.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-medium mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {personalInfo.experience.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
