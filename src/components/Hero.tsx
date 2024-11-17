import React from 'react';
import { Search, MapPin, Tag, DollarSign, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-blue-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580674285054-bb0e9e7b8b6a?auto=format&fit=crop&q=80&w=2000"
          alt="Professional trailer dealership"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-flex items-center bg-blue-800/50 backdrop-blur-sm text-blue-200 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            Over 10,000 trailers listed from verified dealers
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Perfect Trailer
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            The largest marketplace connecting trailer buyers with trusted dealers and manufacturers
          </p>
          
          <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search trailers..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select Location</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="MX">Mexico</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                </select>
              </div>
              
              <div className="relative">
                <Tag className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">All Categories</option>
                  <option value="boat">Boat Trailers</option>
                  <option value="cattle">Cattle Trailers</option>
                  <option value="dog">Dog Trailers</option>
                  <option value="dolly">Dolly Trailers</option>
                  <option value="drop-deck">Drop Deck Trailers</option>
                  <option value="flat-top">Flat Top Trailers</option>
                  <option value="pig">Pig Trailers</option>
                  <option value="semi">Semi Trailers</option>
                  <option value="sheep">Sheep Trailers</option>
                  <option value="skeletal">Skeletal Trailers</option>
                  <option value="tag">Tag Trailers</option>
                  <option value="tanker">Tanker Trailers</option>
                  <option value="tautliner">Tautliner Trailers</option>
                  <option value="tipper">Tipper Trailers</option>
                  <option value="tradesman">Tradesman Trailers</option>
                  <option value="camping">Camping Trailers</option>
                </select>
              </div>

              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Price Range</option>
                  <option value="0-5000">$0 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-20000">$10,000 - $20,000</option>
                  <option value="20000+">$20,000+</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200">
                New Arrivals
              </button>
              <button className="px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200">
                Featured Dealers
              </button>
              <button className="px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200">
                Special Offers
              </button>
              <button className="px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200">
                Financing Available
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}