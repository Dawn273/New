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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Dawn</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-gray-600">
                As the CLE Director for the Georgia Association of Paralegals (GAP),
                I am passionate about advancing the professional development of
                legal professionals through comprehensive continuing education
                programs.
              </p>
              <p className="text-gray-600 mt-4">
                With over 15 years of experience in the legal field, I have
                dedicated my career to ensuring that paralegals and legal
                professionals have access to high-quality educational resources
                and opportunities for growth.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Excellence in Education
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professional Growth
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Community Building
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold">CLE Director - Georgia Association of Paralegals</h3>
              <p className="text-gray-600">2018 - Present</p>
              <p className="mt-2">
                Leading continuing legal education initiatives and professional
                development programs for paralegals across Georgia.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold">Senior Paralegal</h3>
              <p className="text-gray-600">2010 - 2018</p>
              <p className="mt-2">
                Specialized in corporate law and litigation support at a leading
                Atlanta law firm.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
