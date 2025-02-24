import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director, Tech Solutions Inc.",
      image: "/assets/1728064803030.jpeg",
      content: "Dawn's leadership development program transformed our management team. Her insights and strategies have had a lasting impact on our organization's culture."
    },
    {
      name: "Michael Chen",
      role: "Managing Partner, Chen & Associates",
      image: "/assets/1728136811635.jpeg",
      content: "Working with Dawn on EEO investigations has been exceptional. Her thoroughness and professionalism set the standard in the industry."
    },
    {
      name: "Lisa Martinez",
      role: "President, Legal Professionals Association",
      image: "/assets/1731650447801.jpeg",
      content: "Dawn's speaking engagements are always inspiring and packed with actionable insights. She has a unique ability to connect with her audience."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Client Testimonials</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear what professionals and organizations say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}