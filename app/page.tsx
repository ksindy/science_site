import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Download, ExternalLink, FileText, FlaskConical, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">Dr. Sarah Chen</h1>
                <p className="text-xl text-blue-600 font-medium">Lab Manager & Microbiology Instructor</p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Advancing laboratory excellence through innovative management practices and inspiring the next
                  generation of microbiologists through hands-on education.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-3 py-1">
                  <FlaskConical className="h-4 w-4 mr-1" />
                  Lab Management
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Users className="h-4 w-4 mr-1" />
                  Science Education
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <FileText className="h-4 w-4 mr-1" />
                  Research
                </Badge>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=320"
                  alt="Dr. Sarah Chen - Professional headshot"
                  width={320}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Blog Posts</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Insights on lab management, process improvements, and research updates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Implementing Digital Lab Inventory Management",
                date: "March 15, 2024",
                excerpt:
                  "How we reduced inventory errors by 85% through digital tracking systems and automated reorder protocols.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Safety Protocol Updates for Biosafety Level 2 Labs",
                date: "March 8, 2024",
                excerpt:
                  "Recent updates to BSL-2 safety protocols and their implementation in academic laboratory settings.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Student Engagement in Microbiology Labs",
                date: "February 28, 2024",
                excerpt:
                  "Innovative teaching methods that increased student participation and understanding in practical microbiology sessions.",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-slate-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">{post.excerpt}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lab Manager Tools Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Lab Manager Tools</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Practical tools and resources developed to streamline laboratory operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Hazardous Waste Label Generator",
                description:
                  "Generate compliant hazardous waste labels with proper classifications and disposal codes.",
                type: "Web Tool",
              },
              {
                title: "Equipment Maintenance Tracker",
                description: "Excel template for tracking equipment maintenance schedules and service records.",
                type: "Download",
              },
              {
                title: "Chemical Inventory Database",
                description: "Access database template for comprehensive chemical inventory management.",
                type: "Download",
              },
              {
                title: "Lab Safety Checklist",
                description: "Comprehensive safety inspection checklist for laboratory compliance audits.",
                type: "Download",
              },
              {
                title: "Budget Planning Calculator",
                description: "Interactive tool for planning and tracking laboratory budget allocations.",
                type: "Web Tool",
              },
              {
                title: "Training Record System",
                description: "Database system for tracking staff training requirements and certifications.",
                type: "Download",
              },
            ].map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                    <Badge variant={tool.type === "Web Tool" ? "default" : "secondary"}>{tool.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4">{tool.description}</CardDescription>
                  <Button className="w-full" variant={tool.type === "Web Tool" ? "default" : "outline"}>
                    {tool.type === "Web Tool" ? (
                      <>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open Tool
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/lab-tools">View All Tools</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Microbiology Class Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Microbiology Class Resources</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Essential resources for students including lecture materials, lab activities, and study guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Lecture Slides - Bacterial Structure",
                type: "PDF",
                size: "2.4 MB",
                updated: "March 10, 2024",
              },
              {
                title: "Lab Manual - Gram Staining Protocol",
                type: "PDF",
                size: "1.8 MB",
                updated: "March 5, 2024",
              },
              {
                title: "Interactive Activity - Microbial Growth",
                type: "HTML",
                size: "850 KB",
                updated: "February 28, 2024",
              },
              {
                title: "Study Guide - Exam 2 Review",
                type: "PDF",
                size: "1.2 MB",
                updated: "February 25, 2024",
              },
              {
                title: "Lab Report Template",
                type: "DOCX",
                size: "45 KB",
                updated: "February 20, 2024",
              },
              {
                title: "Microbial Identification Flowchart",
                type: "PDF",
                size: "3.1 MB",
                updated: "February 15, 2024",
              },
            ].map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>
                      {resource.type} • {resource.size}
                    </span>
                    <span>Updated {resource.updated}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/microbiology-class">View All Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
