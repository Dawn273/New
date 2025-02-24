import { Link } from "wouter";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Dawn M. Kamara</h3>
            <p className="text-gray-600">
              Practice Manager & CLE Director at Georgia Association of Paralegals
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-gray-600 hover:text-primary">About</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-600 hover:text-primary">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-gray-600 hover:text-primary">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-600 hover:text-primary">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/dmkamara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-primary"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Dawn M. Kamara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}