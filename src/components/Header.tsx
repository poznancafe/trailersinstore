import React, { useState } from 'react';
import { Menu, X, Search, User, Globe, Heart, Caravan } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'MX', name: 'Mexico' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'AU', name: 'Australia' }
  ];

  const trailerCategories = [
    { href: '/marketplace/boat', name: 'Boat Trailers' },
    { href: '/marketplace/cattle', name: 'Cattle Trailers' },
    { href: '/marketplace/dog', name: 'Dog Trailers' },
    { href: '/marketplace/dolly', name: 'Dolly Trailers' },
    { href: '/marketplace/drop-deck', name: 'Drop Deck Trailers' },
    { href: '/marketplace/flat-top', name: 'Flat Top Trailers' },
    { href: '/marketplace/pig', name: 'Pig Trailers' },
    { href: '/marketplace/semi', name: 'Semi Trailers' },
    { href: '/marketplace/sheep', name: 'Sheep Trailers' },
    { href: '/marketplace/skeletal', name: 'Skeletal Trailers' },
    { href: '/marketplace/tag', name: 'Tag Trailers' },
    { href: '/marketplace/tanker', name: 'Tanker Trailers' },
    { href: '/marketplace/tautliner', name: 'Tautliner Trailers' },
    { href: '/marketplace/tipper', name: 'Tipper Trailers' },
    { href: '/marketplace/tradesman', name: 'Tradesman Trailers' },
    { href: '/marketplace/camping', name: 'Camping Trailers' }
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="flex items-center space-x-2 hover:text-gray-300"
              >
                <Globe className="h-4 w-4" />
                <span>Select Region</span>
              </button>
              
              {isCountryOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    {countries.map((country) => (
                      <a
                        key={country.code}
                        href={`/${country.code.toLowerCase()}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {country.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <span>|</span>
            <a href="/dealer-support" className="hover:text-gray-300">Dealer Support</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/login" className="hover:text-gray-300">Login</a>
            <span>|</span>
            <a href="/register" className="hover:text-gray-300">Register</a>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Caravan className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">TrailersInStore</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <a href="/marketplace" className="text-gray-700 hover:text-blue-600">Marketplace</a>
              <div className="absolute hidden group-hover:block w-64 top-full left-0 pt-2 z-50">
                <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 grid grid-cols-2 gap-2 p-4">
                  {trailerCategories.map((category) => (
                    <a
                      key={category.href}
                      href={category.href}
                      className="text-sm text-gray-700 hover:text-blue-600 py-1"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <a href="/dealers" className="text-gray-700 hover:text-blue-600">Dealers</a>
              <div className="absolute hidden group-hover:block w-48 top-full left-0 pt-2 z-50">
                <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <a href="/dealers/directory" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dealer Directory</a>
                  <a href="/dealers/become-dealer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Become a Dealer</a>
                  <a href="/dealers/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dealer Resources</a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <a href="/manufacturers" className="text-gray-700 hover:text-blue-600">Manufacturers</a>
              <div className="absolute hidden group-hover:block w-48 top-full left-0 pt-2 z-50">
                <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <a href="/manufacturers/directory" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Manufacturer Directory</a>
                  <a href="/manufacturers/join" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Join as Manufacturer</a>
                  <a href="/manufacturers/showcase" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Showcase</a>
                </div>
              </div>
            </div>
            <a href="/blog" className="text-gray-700 hover:text-blue-600">Blog</a>
            <a href="/saved" className="text-gray-700 hover:text-blue-600">
              <Heart className="h-5 w-5" />
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              List Your Trailer
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="border-b border-gray-200 pb-2">
                <a href="/marketplace" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Marketplace</a>
                {trailerCategories.map((category) => (
                  <a
                    key={category.href}
                    href={category.href}
                    className="block px-6 py-1 text-sm text-gray-600 hover:text-blue-600"
                  >
                    {category.name}
                  </a>
                ))}
              </div>
              <div className="border-b border-gray-200 pb-2">
                <a href="/dealers" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Dealers</a>
                <a href="/dealers/directory" className="block px-6 py-1 text-sm text-gray-600 hover:text-blue-600">Dealer Directory</a>
                <a href="/dealers/become-dealer" className="block px-6 py-1 text-sm text-gray-600 hover:text-blue-600">Become a Dealer</a>
                <a href="/dealers/resources" className="block px-6 py-1 text-sm text-gray-600 hover:text-blue-600">Dealer Resources</a>
              </div>
              <div className="border-b border-gray-200 pb-2">
                <a href="/manufacturers" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Manufacturers</a>
                <a href="/manufacturers/directory" className="block px-6 py-1 text-sm text-gray-600 hover:text-blue-600">Manufacturer Directory</a>
                <a href="/manufacturers/join" className="block px-6 py-1 text-sm text-gray-600 hover:text-blue-600">Join as Manufacturer</a>
                <a href="/manufacturers/showcase" className="block px-6 py-1 text-sm text-gray-600 hover:text-blue-600">Showcase</a>
              </div>
              <a href="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blog</a>
              <a href="/saved" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Saved Items</a>
              <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                List Your Trailer
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}