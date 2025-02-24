import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a newsletter service
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our updates soon.",
    });
    setEmail("");
  };

  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Dawn's Insights
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to receive leadership tips, event announcements, and
            professional development resources.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white"
              required
            />
            <Button type="submit" variant="secondary">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
