import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TopTrailers from './components/TopTrailers';
import FeaturedListings from './components/FeaturedListings';
import BlogSection from './components/BlogSection';
import ResourcesSection from './components/resources/ResourcesSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <TopTrailers />
        <FeaturedListings />
        <ResourcesSection />
        <BlogSection />
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About TrailersInStore</h3>
              <p className="text-gray-400">
                The premier marketplace connecting trailer dealers with manufacturers and buyers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/marketplace" className="hover:text-white">Marketplace</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/dealers" className="hover:text-white">Find Dealers</a></li>
                <li><a href="/manufacturers" className="hover:text-white">Manufacturers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/help" className="hover:text-white">Help Center</a></li>
                <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@trailersinstore.com</li>
                <li>1-800-TRAILERS</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 TrailersInStore.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;