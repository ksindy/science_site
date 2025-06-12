import { notFound } from "next/navigation"
import { blogPosts } from "../../data/blogPosts" // OR define it inline for now
import { Calendar, Clock, User } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) return notFound()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-6 text-slate-500 mb-6">
        <div className="flex items-center"><User className="h-4 w-4 mr-1" />Karly Sindy</div>
        <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" />{post.date}</div>
        <div className="flex items-center"><Clock className="h-4 w-4 mr-1" />{post.readTime}</div>
      </div>
      <p className="text-lg leading-relaxed">{post.excerpt}</p>
      {/* Add full blog content here later */}
    </div>
  )
}
