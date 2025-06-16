import { notFound } from "next/navigation"
import { blogPosts } from "../../data/blogPosts"

export default function Page({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return notFound()
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content || post.excerpt}</div>
    </article>
  )
}

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}