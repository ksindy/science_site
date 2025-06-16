import { notFound } from "next/navigation"
import { blogPosts } from "../../data/blogPosts"
import { User, Calendar, Clock } from "lucide-react"
// Optionally import a Markdown renderer if you use markdown for post content

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl bg-white shadow rounded-lg">
      {/* Optional: Show featured image */}
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full mb-6 rounded"
        />
      )}

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-6 text-slate-500 mb-6 text-sm">
        <div className="flex items-center"><User className="h-4 w-4 mr-1" />Karly Sindy</div>
        <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" />{post.date}</div>
        <div className="flex items-center"><Clock className="h-4 w-4 mr-1" />{post.readTime}</div>
      </div>
      {/* Replace excerpt with full content if available */}
      <div className="prose prose-lg">
        {/* If using markdown: <Markdown>{post.content}</Markdown> */}
 
      </div>
    </article>
  )
}

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}