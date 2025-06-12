import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, FlaskConical, GraduationCap, Users, Microscope } from "lucide-react"

export default function AboutPage() {
  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence in Laboratory Management Award",
      year: "2023",
      organization: "National Laboratory Association",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Outstanding Teaching Award",
      year: "2022",
      organization: "University Teaching Excellence Committee",
    },
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: "Laboratory Safety Innovation Grant",
      year: "2021",
      organization: "Department of Education",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Published Research in Applied Microbiology",
      year: "2020-2024",
      organization: "15+ Peer-reviewed Publications",
    },
  ]

  const expertise = [
    "Laboratory Management & Operations",
    "Microbiology & Infectious Diseases",
    "Laboratory Safety & Compliance",
    "Scientific Education & Curriculum Development",
    "Quality Assurance & Control",
    "Research Methodology",
    "Team Leadership & Training",
    "Laboratory Information Systems",
  ]

  const education = [
    {
      degree: "Ph.D. in Microbiology",
      institution: "Stanford University",
      year: "2015",
      focus: "Bacterial Pathogenesis and Host-Microbe Interactions",
    },
    {
      degree: "M.S. in Laboratory Management",
      institution: "University of California, Berkeley",
      year: "2011",
      focus: "Laboratory Operations and Quality Systems",
    },
    {
      degree: "B.S. in Biology",
      institution: "University of Washington",
      year: "2009",
      focus: "Microbiology and Molecular Biology",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-slate-900">About Dr. Sarah Chen</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              With over a decade of experience in laboratory management and microbiology education, I am passionate
              about advancing scientific excellence through innovative laboratory practices and inspiring the next
              generation of scientists.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              My work focuses on optimizing laboratory operations, implementing cutting-edge safety protocols, and
              developing engaging educational resources that make complex microbiological concepts accessible to
              students at all levels.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1">
                <FlaskConical className="h-4 w-4 mr-1" />
                10+ Years Experience
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Users className="h-4 w-4 mr-1" />
                500+ Students Taught
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Microscope className="h-4 w-4 mr-1" />
                15+ Publications
              </Badge>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Dr. Sarah Chen in laboratory setting"
              width={400}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <Badge variant="outline">{edu.year}</Badge>
                  </div>
                  <CardDescription className="text-lg font-medium text-blue-600">{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Focus: {edu.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((skill, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-0">
                  <p className="font-medium text-slate-900">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements & Recognition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Achievements & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-600">{achievement.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <CardDescription>
                        {achievement.organization} • {achievement.year}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Professional Philosophy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Professional Philosophy</h2>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <blockquote className="text-lg text-slate-700 leading-relaxed italic">
                "Excellence in laboratory science comes from the perfect balance of rigorous methodology, innovative
                thinking, and unwavering commitment to safety. My goal is to create environments where scientific
                discovery thrives while maintaining the highest standards of operational excellence and educational
                impact."
              </blockquote>
              <footer className="mt-4 text-right">
                <cite className="text-slate-600 font-medium">— Dr. Sarah Chen</cite>
              </footer>
            </CardContent>
          </Card>
        </section>

        {/* Current Projects */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Current Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Digital Laboratory Transformation</CardTitle>
                <CardDescription>2024 - Ongoing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Leading the implementation of comprehensive digital systems for inventory management, equipment
                  tracking, and data analysis across multiple research laboratories.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Microbiology Curriculum Innovation</CardTitle>
                <CardDescription>2023 - 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Developing interactive learning modules and virtual laboratory experiences to enhance student
                  engagement and understanding of complex microbiological concepts.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Laboratory Safety Protocol Standardization</CardTitle>
                <CardDescription>2023 - Ongoing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Creating standardized safety protocols and training programs for academic laboratories to improve
                  compliance and reduce incident rates.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Open Source Lab Management Tools</CardTitle>
                <CardDescription>2022 - Ongoing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Developing and maintaining open-source tools for laboratory management, making professional-grade
                  resources accessible to educational institutions worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
