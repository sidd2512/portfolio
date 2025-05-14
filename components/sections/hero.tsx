"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import { personalInfo } from "@/data/personal-info"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative pt-20">
      <ParticleBackground />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">{personalInfo.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">{personalInfo.title}</h2>
            <p className="text-lg mb-8 max-w-2xl">{personalInfo.bio}</p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg">
                  <a href="#contact">Let's Connect</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" asChild>
                  <a href="#projects">View My Work</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src="/dp.png"
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {isMounted && isDesktop && (
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 0.2,
            }}
          >
            <a href="#skills" aria-label="Scroll down">
              <ArrowDown className="h-8 w-8 text-primary" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
