import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Grouping Microorganisms Activity",
      date: "June 12, 2024",
      readTime: "8 min read",
      excerpt:
        "Teaching students about grouping organisms. Emphasis on microorganisms in relation to taxonomy, pylogeny, and size.",
      image: "/grouping_microorganisms.png?height=200&width=400",
      category: "Activity",
      featured: true,
      slug: "grouping-microorganisms-activity",
    },
    {
      title: "Safety Protocol Updates for Biosafety Level 2 Labs",
      date: "March 8, 2024",
      readTime: "6 min read",
      excerpt:
        "Recent updates to BSL-2 safety protocols and their implementation in academic laboratory settings. Key changes include new PPE requirements and updated decontamination procedures.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Safety",
    },
    {
      title: "Student Engagement in Microbiology Labs",
      date: "February 28, 2024",
      readTime: "5 min read",
      excerpt:
        "Innovative teaching methods that increased student participation and understanding in practical microbiology sessions. Includes case studies and assessment results.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Education",
    },
    {
      title: "Optimizing Autoclave Efficiency and Maintenance",
      date: "February 20, 2024",
      readTime: "7 min read",
      excerpt:
        "Best practices for autoclave maintenance that extended equipment lifespan by 40% while reducing energy consumption and improving sterilization reliability.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Equipment",
    },
    {
      title: "Building a Culture of Laboratory Excellence",
      date: "February 12, 2024",
      readTime: "9 min read",
      excerpt:
        "Strategies for fostering a culture of continuous improvement, safety awareness, and scientific rigor in academic laboratory environments.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Leadership",
    },
    {
      title: "Data Management in Modern Microbiology Labs",
      date: "February 5, 2024",
      readTime: "6 min read",
      excerpt:
        "Implementing LIMS systems and digital data management practices to improve research reproducibility and regulatory compliance.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Technology",
    },
  ]

  const categories = ["All", "Lab Management", "Safety", "Education", "Equipment", "Leadership", "Technology"]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Insights on laboratory management, microbiology education, and scientific best practices
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

        {/* Featured Post */}
        {blogPosts
          .filter((post) => post.featured)
          .map((post, index) => (
            <Link href={`/blog/${post.slug}`} passHref>
            <Card key={index} className="mb-12 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto relative">
                  <Image src={post.image || "/grouping_microorganisms.png"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge>{post.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{post.title}</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-slate-500 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      Karly Sindy
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
          ))}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-slate-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
