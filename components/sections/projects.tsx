"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Github, ExternalLink, X } from "lucide-react"
import Image from "next/image"
import { projects, otherProjects, type OtherProject } from "@/data/projects"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [selectedOtherProject, setSelectedOtherProject] = useState<OtherProject | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const mainProjects = projects.filter((project) => project.category === "main")

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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Main Projects</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {mainProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-800 h-full cursor-pointer"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                  transition: { duration: 0.2 },
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(project)
                      }}
                    >
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-3 w-3" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Other Projects</h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white/80 dark:bg-gray-900/80 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800"
                variants={itemVariants}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 0 8px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.2 },
                }}
                onClick={() => setSelectedOtherProject(project)}
              >
                <div className="p-3 cursor-pointer">
                  <h3 className="text-base font-medium mb-1 truncate">{project.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2">{project.shortDescription}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl w-[90vw] max-h-[85vh] overflow-hidden p-0">
          <div className="relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-1 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="overflow-y-auto max-h-[85vh] p-6">
              <DialogHeader className="mb-4">
                <DialogTitle>{selectedProject?.title}</DialogTitle>
                <DialogDescription>{selectedProject?.shortDescription}</DialogDescription>
              </DialogHeader>

              {selectedProject && (
                <div className="space-y-6">
                  <div className="relative w-full flex justify-center items-center" style={{ height: "60vh" }}>
                    <Image
                      src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                      alt={`${selectedProject.title} screenshot`}
                      fill
                      className="object-contain"
                      style={{ background: "#fff" }}
                    />
                    {selectedProject.images.length > 1 && (
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                              index === currentImageIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                            aria-label={`View image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Description</h4>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">{selectedProject.fullDescription}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Challenges & Solutions</h4>
                    <p className="text-gray-600 dark:text-gray-400">{selectedProject.challenges}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    {selectedProject.liveUrl && (
                      <Button asChild>
                        <a
                          href={selectedProject.liveUrl ?? undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" asChild>
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Other Project Details Dialog */}
      <Dialog open={!!selectedOtherProject} onOpenChange={(open) => !open && setSelectedOtherProject(null)}>
        <DialogContent className="max-w-4xl w-[90vw] max-h-[85vh] overflow-hidden p-0">
          <div className="relative">
            <button
              onClick={() => setSelectedOtherProject(null)}
              className="absolute top-4 right-4 z-10 p-1 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="overflow-y-auto max-h-[85vh] p-6">
              <DialogHeader className="mb-4">
                <DialogTitle>{selectedOtherProject?.title}</DialogTitle>
                <DialogDescription>{selectedOtherProject?.shortDescription}</DialogDescription>
              </DialogHeader>

              {selectedOtherProject && (
                <div className="space-y-6">
                  <div className="relative h-64 sm:h-80 w-full rounded-lg overflow-hidden">
                    <Image
                      src={selectedOtherProject.images[currentImageIndex] || "/placeholder.svg"}
                      alt={`${selectedOtherProject.title} screenshot`}
                      fill
                      className="object-cover"
                    />

                    {selectedOtherProject.images.length > 1 && (
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {selectedOtherProject.images.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                              index === currentImageIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                            aria-label={`View image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Description</h4>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">{selectedOtherProject.fullDescription}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedOtherProject.techStack.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Challenges & Solutions</h4>
                    <p className="text-gray-600 dark:text-gray-400">{selectedOtherProject.challenges}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    {selectedOtherProject.liveUrl && (
                      <Button asChild>
                        <a
                          href={selectedOtherProject.liveUrl ?? undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" asChild>
                      <a
                        href={selectedOtherProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
