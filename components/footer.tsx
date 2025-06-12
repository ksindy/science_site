import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Information</h3>
            <div className="space-y-2 text-slate-600">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>sarah.chen@university.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/blog" className="block text-slate-600 hover:text-blue-600 transition-colors">
                Recent Blog Posts
              </Link>
              <Link href="/lab-tools" className="block text-slate-600 hover:text-blue-600 transition-colors">
                Lab Management Tools
              </Link>
              <Link href="/microbiology-class" className="block text-slate-600 hover:text-blue-600 transition-colors">
                Student Resources
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/sarahchen"
                className="text-slate-600 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/sarahchen"
                className="text-slate-600 hover:text-slate-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-slate-600">
          <p>&copy; 2025 Karly Sindy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
