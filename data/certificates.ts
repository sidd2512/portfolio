export interface Certificate {
  id: number
  title: string
  organization: string
  date: string
  skills: string[]
  imageUrl: string | null
  verificationUrl: string | null
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "TCS CodeVita - Round 1 Qualifier",
    organization: "TCS",
    date: "2023 & 2024",
    skills: ["Competitive Programming", "Problem Solving", "Algorithms"],
    imageUrl: null,
    verificationUrl: null,
  },
  {
    id: 2,
    title: "Accenture Go for Gold - Profile Completed",
    organization: "Accenture",
    date: "2024",
    skills: ["Technical Skills", "Soft Skills", "Industry Readiness"],
    imageUrl: null,
    verificationUrl: "https://drive.google.com/file/d/1ESXblqjuEDxGn0taSSE8i6QveN6vuxAC/view",
  },
  {
    id: 3,
    title: "Docker Foundations Professional Certificate",
    organization: "Docker, Inc",
    date: "April 2024",
    skills: ["Docker Products", "Containerization"],
    imageUrl: null,
    verificationUrl: "https://drive.google.com/file/d/1c8XVKlGUHKXLhO-_Ss6onn9baJA-X-VE/view?usp=sharing",
  },
  {
    id: 4,
    title: "Career Essentials in GitHub Professional Certificate",
    organization: "GitHub",
    date: "March 2024",
    skills: ["GitHub"],
    imageUrl: null,
    verificationUrl: "https://drive.google.com/file/d/1Enut8M9hqUCZTsDz_IhUoQWyvGKYMe_y/view?usp=sharing",
  },
]
