import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Calendar, Clock } from "lucide-react"

export default function MicrobiologyClassPage() {
  const resources = [
    {
      title: "Lecture Slides - Bacterial Structure and Function",
      type: "PDF",
      size: "2.4 MB",
      updated: "March 10, 2024",
      category: "Lectures",
      description:
        "Comprehensive overview of bacterial cell structure, including cell walls, membranes, and specialized structures.",
      week: "Week 3",
    },
    {
      title: "Lab Manual - Gram Staining Protocol",
      type: "PDF",
      size: "1.8 MB",
      updated: "March 5, 2024",
      category: "Lab Manuals",
      description: "Step-by-step protocol for Gram staining with troubleshooting guide and quality control measures.",
      week: "Week 4",
    },
    {
      title: "Interactive Activity - Microbial Growth Curves",
      type: "HTML",
      size: "850 KB",
      updated: "February 28, 2024",
      category: "Activities",
      description: "Interactive simulation for understanding bacterial growth phases and environmental factors.",
      week: "Week 5",
    },
    {
      title: "Study Guide - Exam 2 Review",
      type: "PDF",
      size: "1.2 MB",
      updated: "February 25, 2024",
      category: "Study Guides",
      description: "Comprehensive review covering microbial metabolism, genetics, and control methods.",
      week: "Week 8",
    },
    {
      title: "Lab Report Template",
      type: "DOCX",
      size: "45 KB",
      updated: "February 20, 2024",
      category: "Templates",
      description: "Standardized template for lab reports with grading rubric and formatting guidelines.",
      week: "All Weeks",
    },
    {
      title: "Microbial Identification Flowchart",
      type: "PDF",
      size: "3.1 MB",
      updated: "February 15, 2024",
      category: "Reference",
      description: "Visual flowchart for systematic identification of common bacterial species.",
      week: "Week 10",
    },
    {
      title: "Lecture Slides - Viral Replication",
      type: "PDF",
      size: "2.8 MB",
      updated: "February 12, 2024",
      category: "Lectures",
      description: "Detailed presentation on viral life cycles, replication strategies, and host interactions.",
      week: "Week 6",
    },
    {
      title: "Lab Exercise - Antibiotic Sensitivity Testing",
      type: "PDF",
      size: "1.5 MB",
      updated: "February 8, 2024",
      category: "Lab Manuals",
      description: "Protocol for disk diffusion method with interpretation guidelines and clinical relevance.",
      week: "Week 9",
    },
    {
      title: "Video Tutorial - Aseptic Technique",
      type: "MP4",
      size: "45 MB",
      updated: "February 5, 2024",
      category: "Videos",
      description: "Demonstration video showing proper aseptic technique for laboratory work.",
      week: "Week 1",
    },
    {
      title: "Practice Quiz - Microbial Genetics",
      type: "PDF",
      size: "680 KB",
      updated: "January 30, 2024",
      category: "Assessments",
      description: "Practice questions covering DNA replication, transcription, and genetic regulation in microbes.",
      week: "Week 7",
    },
    {
      title: "Reference Sheet - Media Preparation",
      type: "PDF",
      size: "920 KB",
      updated: "January 25, 2024",
      category: "Reference",
      description: "Quick reference for preparing common microbiological media with recipes and sterilization notes.",
      week: "All Weeks",
    },
    {
      title: "Case Study - Hospital-Acquired Infections",
      type: "PDF",
      size: "1.7 MB",
      updated: "January 20, 2024",
      category: "Case Studies",
      description:
        "Real-world case study examining infection control and microbial identification in healthcare settings.",
      week: "Week 12",
    },
  ]

  const categories = [
    "All",
    "Lectures",
    "Lab Manuals",
    "Activities",
    "Study Guides",
    "Templates",
    "Reference",
    "Videos",
    "Assessments",
    "Case Studies",
  ]

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
        return "📄"
      case "docx":
        return "📝"
      case "html":
        return "🌐"
      case "mp4":
        return "🎥"
      default:
        return "📁"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Microbiology Class Resources</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Essential resources for students including lecture materials, lab protocols, and study guides
          </p>
        </div>

        {/* Course Information */}
        <div className="bg-blue-50 rounded-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Course Code</h3>
              <p className="text-blue-600 font-medium">BIOL 3200</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Semester</h3>
              <p className="text-blue-600 font-medium">Spring 2024</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Credits</h3>
              <p className="text-blue-600 font-medium">4 Credits</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className="cursor-pointer hover:bg-blue-100 transition-colors px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getFileIcon(resource.type)}</span>
                    <div>
                      <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" size="sm">
                          {resource.category}
                        </Badge>
                        <Badge variant="secondary" size="sm">
                          {resource.week}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500 mt-2">
                  <span>
                    {resource.type} • {resource.size}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {resource.updated}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4">{resource.description}</CardDescription>
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-slate-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Course Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Office Hours</h3>
              <div className="space-y-2 text-slate-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Tuesdays: 2:00 PM - 4:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Thursdays: 10:00 AM - 12:00 PM</span>
                </div>
                <p className="text-sm mt-2">Location: Science Building, Room 204</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Important Dates</h3>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>Midterm Exam</span>
                  <span>March 15, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Final Project Due</span>
                  <span>April 20, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Final Exam</span>
                  <span>May 8, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
