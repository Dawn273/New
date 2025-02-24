import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Leadership Development in 2025",
    excerpt: "Explore emerging trends in leadership development and how organizations can prepare their leaders for tomorrow's challenges.",
    date: "February 20, 2025",
    author: {
      name: "Dawn M. Kamara",
      image: "https://ui-avatars.com/api/?name=Dawn+Kamara&background=random",
    },
    category: "Leadership",
  },
  {
    id: 2,
    title: "Understanding EEO Investigations: A Comprehensive Guide",
    excerpt: "A detailed look at the EEO investigation process and best practices for maintaining workplace equality.",
    date: "February 15, 2025",
    author: {
      name: "Dawn M. Kamara",
      image: "https://ui-avatars.com/api/?name=Dawn+Kamara&background=random",
    },
    category: "Legal",
  },
  {
    id: 3,
    title: "Building a Culture of Continuous Learning",
    excerpt: "How to create an environment that promotes professional growth and development within your organization.",
    date: "February 10, 2025",
    author: {
      name: "Dawn M. Kamara",
      image: "https://ui-avatars.com/api/?name=Dawn+Kamara&background=random",
    },
    category: "Professional Development",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert perspectives on leadership, legal practice management, and
            professional development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.image} alt={post.author.name} />
                      </Avatar>
                      <span className="ml-2 text-sm text-gray-600">{post.author.name}</span>
                    </div>
                    <Button variant="ghost" size="sm">Read More</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
