import { useParams } from "wouter";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Mock blog post data - in a real app this would come from an API
const getBlogPost = (id: string) => {
  const post = {
    id: parseInt(id),
    title: "The Future of Leadership Development in 2025",
    content: `
      <p>The landscape of leadership development is rapidly evolving as we move further into 2025. Organizations are facing unprecedented challenges and opportunities in developing their next generation of leaders.</p>
      
      <h2>Key Trends in Leadership Development</h2>
      <p>Several key trends are shaping the future of leadership development:</p>
      <ul>
        <li>AI-Enhanced Leadership Training</li>
        <li>Remote Team Management Skills</li>
        <li>Emotional Intelligence in the Digital Age</li>
        <li>Cross-Cultural Leadership Competencies</li>
      </ul>

      <h2>The Role of Technology</h2>
      <p>Technology continues to play a crucial role in how we develop leaders. Virtual reality simulations, AI-powered coaching platforms, and data-driven assessment tools are becoming standard components of leadership development programs.</p>

      <h2>Building Resilient Leaders</h2>
      <p>In today's rapidly changing business environment, resilience has become a critical leadership trait. Organizations are focusing on developing leaders who can navigate uncertainty, manage change, and maintain team motivation through challenging times.</p>
    `,
    date: "February 20, 2025",
    author: {
      name: "Dawn M. Kamara",
      image: "https://ui-avatars.com/api/?name=Dawn+Kamara&background=random",
    },
    category: "Leadership",
  };
  return post;
};

export default function BlogPost() {
  const { id } = useParams();
  const post = getBlogPost(id || "1");

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.category}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

          <div className="flex items-center mb-8">
            <Avatar className="h-12 w-12">
              <AvatarImage src={post.author.image} alt={post.author.name} />
            </Avatar>
            <div className="ml-4">
              <p className="font-semibold">{post.author.name}</p>
              <p className="text-sm text-gray-600">Leadership Development Strategist</p>
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t">
            <Link href="/blog">
              <Button variant="outline">← Back to Blog</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
