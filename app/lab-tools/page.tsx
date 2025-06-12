import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Star } from "lucide-react"

export default function LabToolsPage() {
  const tools = [
    {
      title: "Hazardous Waste Label Generator",
      description:
        "Generate compliant hazardous waste labels with proper classifications, disposal codes, and safety information. Supports multiple waste categories and regulatory standards.",
      type: "Web Tool",
      category: "Safety",
      featured: true,
      downloads: "2.3k",
      rating: 4.9,
    },
    {
      title: "Equipment Maintenance Tracker",
      description:
        "Comprehensive Excel template for tracking equipment maintenance schedules, service records, and warranty information. Includes automated reminder system.",
      type: "Download",
      category: "Maintenance",
      downloads: "1.8k",
      rating: 4.7,
    },
    {
      title: "Chemical Inventory Database",
      description:
        "Access database template for comprehensive chemical inventory management with safety data sheets, expiration tracking, and usage logs.",
      type: "Download",
      category: "Inventory",
      downloads: "1.5k",
      rating: 4.8,
    },
    {
      title: "Lab Safety Checklist",
      description:
        "Comprehensive safety inspection checklist covering all aspects of laboratory compliance, from PPE to waste disposal and emergency procedures.",
      type: "Download",
      category: "Safety",
      downloads: "3.1k",
      rating: 4.9,
    },
    {
      title: "Budget Planning Calculator",
      description:
        "Interactive Excel tool for planning and tracking laboratory budget allocations across equipment, supplies, maintenance, and personnel costs.",
      type: "Web Tool",
      category: "Finance",
      downloads: "890",
      rating: 4.6,
    },
    {
      title: "Training Record System",
      description:
        "Database system for tracking staff training requirements, certifications, and compliance records with automated renewal notifications.",
      type: "Download",
      category: "HR",
      downloads: "1.2k",
      rating: 4.5,
    },
    {
      title: "Quality Control Log Template",
      description:
        "Standardized templates for documenting quality control procedures, calibrations, and performance verification activities.",
      type: "Download",
      category: "Quality",
      downloads: "967",
      rating: 4.7,
    },
    {
      title: "Incident Report Generator",
      description:
        "Web-based tool for creating detailed incident reports with proper documentation, root cause analysis, and corrective action tracking.",
      type: "Web Tool",
      category: "Safety",
      downloads: "756",
      rating: 4.8,
    },
    {
      title: "Lab Protocol Template Library",
      description:
        "Collection of standardized protocol templates for common laboratory procedures with built-in quality assurance checkpoints.",
      type: "Download",
      category: "Protocols",
      downloads: "2.1k",
      rating: 4.9,
    },
  ]

  const categories = ["All", "Safety", "Maintenance", "Inventory", "Finance", "HR", "Quality", "Protocols"]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Lab Manager Tools</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Practical tools and resources developed to streamline laboratory operations and improve efficiency
          </p>
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

        {/* Featured Tools */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tools
              .filter((tool) => tool.featured)
              .map((tool, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-blue-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-xl">{tool.title}</CardTitle>
                        <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                          <Star className="h-3 w-3 mr-1 fill-current" />
                          Featured
                        </Badge>
                      </div>
                      <Badge variant={tool.type === "Web Tool" ? "default" : "secondary"}>{tool.type}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span>{tool.downloads} downloads</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {tool.rating}
                      </div>
                     <Badge variant="outline">
                        {tool.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-6">{tool.description}</CardDescription>
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
        </div>

        {/* All Tools */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">All Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools
              .filter((tool) => !tool.featured)
              .map((tool, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <Badge variant={tool.type === "Web Tool" ? "default" : "secondary"}>{tool.type}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span>{tool.downloads} downloads</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {tool.rating}
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit text-sm px-2 py-0.5">
                      {tool.category}
                    </Badge>
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
        </div>
      </div>
    </div>
  )
}
