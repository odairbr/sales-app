import { Book } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 p-2 rounded-lg">
                <Book className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">BookHaven</span>
            </div>
            <p className="text-amber-200">
              Your gateway to endless stories and knowledge. Discover, read, and grow with BookHaven.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">New Releases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bestsellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Authors</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Stay Connected</h3>
            <p className="text-amber-200 mb-4">
              Subscribe to our newsletter for the latest book recommendations and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-lg bg-amber-800 border border-amber-700 text-white placeholder-amber-300 focus:outline-none focus:border-amber-500"
              />
              <button className="bg-gradient-to-r from-amber-600 to-orange-700 text-white px-4 py-2 rounded-lg hover:from-amber-700 hover:to-orange-800 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8 text-center">
          <p className="text-amber-200">&copy; 2024 BookHaven. All rights reserved. Made with love for book enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
