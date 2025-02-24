import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Dawn M. Kamara</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-gray-600">
                As a multi-faceted professional, I bring extensive experience in law, 
                leadership development, and organizational management. Currently serving 
                as a Practice Manager and CLE Director for the Georgia Association of 
                Paralegals (GAP), I'm passionate about empowering professionals to 
                reach their full potential.
              </p>
              <p className="text-gray-600 mt-4">
                Through The Grind Network, LLC, I provide comprehensive leadership 
                development training and strategic guidance to organizations and 
                individuals. My expertise in EEO investigations and legal practice 
                management allows me to offer unique insights into workplace dynamics 
                and professional growth.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Areas of Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Practice Management
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  EEO Investigations
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Leadership Development
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Empowerment Speaking
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Professional Journey</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold">Founder - The Grind Network, LLC</h3>
              <p className="text-gray-600">Present</p>
              <p className="mt-2">
                Leading transformative leadership development and professional growth 
                initiatives through coaching, training, and strategic consulting.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold">CLE Director - Georgia Association of Paralegals</h3>
              <p className="text-gray-600">Present</p>
              <p className="mt-2">
                Directing continuing legal education programs and professional 
                development initiatives for legal professionals across Georgia.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold">Practice Manager & EEO Investigator</h3>
              <p className="text-gray-600">Present</p>
              <p className="mt-2">
                Managing legal practice operations and conducting thorough EEO 
                investigations to ensure workplace compliance and fairness.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}