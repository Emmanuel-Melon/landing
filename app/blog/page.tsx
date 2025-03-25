import { Separator } from "@/components/decorative/separators"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"
import { StackedNavbar } from "@/components/stacked-navbar"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Building Scalable Systems with Modern Architecture",
      excerpt:
        "Learn how we approach system design to ensure scalability, reliability, and performance for enterprise applications.",
      date: "March 20, 2024",
      author: "Emmanuel Gatwech",
      readTime: "8 min read",
      slug: "building-scalable-systems",
    },
    {
      title: "The Future of Web Development in East Africa",
      excerpt:
        "Exploring the growing tech ecosystem in East Africa and how local businesses are embracing digital transformation.",
      date: "March 15, 2024",
      author: "Volterra Team",
      readTime: "6 min read",
      slug: "future-web-development-east-africa",
    },
    {
      title: "From Concept to MVP in Two Weeks",
      excerpt:
        "Our approach to rapid prototyping and how we help startups validate their ideas quickly and efficiently.",
      date: "March 5, 2024",
      author: "Emmanuel Gatwech",
      readTime: "5 min read",
      slug: "concept-to-mvp-two-weeks",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <StackedNavbar currentPage="BLOG" />

      {/* Hero Section */}
      <section className="relative border-b border-slate-700/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-slate-400 uppercase tracking-wider">Vol. 1, No. 1</span>
              <span className="text-slate-400">|</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">Insights & Ideas</span>
            </div>
            <h1 className="text-6xl font-serif text-white mb-6">
              THE <span className="text-yellow-300">BLOG</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Thoughts, insights, and perspectives from our team on software development, technology trends, and digital
              innovation.
            </p>
          </div>
        </div>
      </section>

      <Separator variant="olympus" />

      {/* Blog Posts */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {blogPosts.map((post, index) => (
                <div key={index} className="group">
                  <div className="border-b border-slate-700/50 pb-16">
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-3xl font-serif text-white mb-4 group-hover:text-yellow-300 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-slate-300 mb-6">{post.excerpt}</p>
                    <Button variant="link" className="text-yellow-300 hover:text-yellow-400 p-0 h-auto font-normal">
                      <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator variant="olympus" />

      {/* Newsletter Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/5 to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-serif text-white">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-slate-300">
              Stay updated with our latest insights, articles, and project announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-white flex-grow"
              />
              <Button className="bg-yellow-300 text-slate-900 hover:bg-yellow-400">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

