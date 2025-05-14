"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, X } from "lucide-react"
import Image from "next/image"
import { certificates } from "@/data/certificates"

export default function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[0] | null>(null)

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
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Achievements & Certificates</h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-800"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex flex-col items-center text-center">
                <Award className="text-primary h-12 w-12 mb-4" />
                <h3 className="text-lg font-semibold mb-1">{certificate.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{certificate.organization}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{certificate.date}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {certificate.skills.slice(0, 2).map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                  {certificate.skills.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                      +{certificate.skills.length - 2}
                    </span>
                  )}
                </div>

                {certificate.verificationUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={certificate.verificationUrl ?? undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Certificate
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedCertificate} onOpenChange={(open) => !open && setSelectedCertificate(null)}>
        <DialogContent className="max-w-3xl w-[90vw] max-h-[85vh] overflow-hidden p-0">
          <div className="relative">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 p-1 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="overflow-y-auto max-h-[85vh] p-6">
              <DialogHeader className="mb-4">
                <DialogTitle>{selectedCertificate?.title}</DialogTitle>
              </DialogHeader>

              {selectedCertificate && (
                <div className="space-y-6">
                  <div className="relative h-96 w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                    <Image
                      src={selectedCertificate.imageUrl || "/placeholder.svg"}
                      alt={`${selectedCertificate.title} certificate`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">Organization:</span> {selectedCertificate.organization}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">Date:</span> {selectedCertificate.date}
                      </p>
                    </div>

                    <Button asChild>
                      <a
                        href={selectedCertificate.verificationUrl ?? undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Verify Certificate
                      </a>
                    </Button>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
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
