"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"
import { personalInfo } from "@/data/personal-info"

export default function Education() {
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
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education</h2>

        <motion.div
          className="max-w-3xl mx-auto mt-12 space-y-8"
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
              <GraduationCap className="text-primary h-6 w-6 mr-3" />
              <h3 className="text-xl font-semibold">{personalInfo.education.degree}</h3>
            </div>

            <div className="mb-4 text-gray-600 dark:text-gray-400">
              <p>{personalInfo.education.university}</p>
              <p>
                {personalInfo.education.period} | {personalInfo.education.year}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Relevant Coursework</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {personalInfo.education.courses.map((course, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

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
              <Award className="text-primary h-6 w-6 mr-3" />
              <h3 className="text-xl font-semibold">{personalInfo.scholarship.name}</h3>
            </div>

            <div className="mb-4 text-gray-600 dark:text-gray-400">
              <p>{personalInfo.scholarship.provider}</p>
              <p>
                {personalInfo.scholarship.year} | {personalInfo.scholarship.grade}
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-400">{personalInfo.scholarship.description}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
