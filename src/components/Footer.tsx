'use client'

import { Book } from 'lucide-react';
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 p-2 rounded-lg">
                <Book className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">SalesApp</span>
            </div>
            <p className="text-amber-200">
              Aproveite nossos produtos, eletrônicos, moveis e mais!
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Button asChild variant='link'>
                  <a href="#">Novidades</a>
                </Button>
              </li>
              <li>
                <Button asChild variant='link'>
                  <a target="_blank"
                    href="https://github.com/odairbr/sales-app"
                  >
                    Github
                  </a>
                </Button>
              </li>

            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8 text-center">
          <p className="text-amber-200">&copy; 2025 SalesApp.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
