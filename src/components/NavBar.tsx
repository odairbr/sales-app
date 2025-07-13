'use client'

import { Book } from 'lucide-react';
import Link from 'next/link'
import CartWidget from './CartWidget'
import Login from './Login'

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-br from-amber-600 to-orange-700 p-2 rounded-lg">
            <Book className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent">
            SalesApp
          </span>
        </div>

        <span className="text-xl bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent">
          <Link href='/produtos'>Produtos</Link>
        </span>

        <div className="flex items-center space-x-6">
          {/* Cart Widget */}
          <CartWidget />

          {/* Login Button */}
          <Login />
        </div>
      </div>
    </header>
  );
};

export default Header;
