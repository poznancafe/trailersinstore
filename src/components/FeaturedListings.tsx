import React from 'react';
import { Star, ThumbsUp, MapPin, Tag, DollarSign } from 'lucide-react';

const listings = [
  {
    id: 1,
    title: "2024 Enclosed Cargo Trailer - Premium Build",
    price: "$8,999",
    dealer: "Premium Trailers LLC",
    location: "Dallas, TX",
    image: "https://images.unsplash.com/photo-1586786301290-af7ea2c4e751?auto=format&fit=crop&q=80&w=800",
    featured: true,
    votes: 127,
    category: "Enclosed",
    specs: {
      length: "16 ft",
      width: "7 ft",
      height: "7 ft",
      gvwr: "7,000 lbs"
    }
  },
  {
    id: 2,
    title: "Heavy Duty Equipment Trailer - Industrial Grade",
    price: "$12,500",
    dealer: "TrailerPro Solutions",
    location: "Houston, TX",
    image: "https://images.unsplash.com/photo-1579189880841-43ddba8d8df4?auto=format&fit=crop&q=80&w=800",
    featured: true,
    votes: 98,
    category: "Equipment",
    specs: {
      length: "20 ft",
      width: "8.5 ft",
      capacity: "14,000 lbs",
      ramps: "Included"
    }
  },
  {
    id: 3,
    title: "Professional Landscape Utility Trailer",
    price: "$4,999",
    dealer: "United Trailer Sales",
    location: "Phoenix, AZ",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=800",
    featured: true,
    votes: 85,
    category: "Utility",
    specs: {
      length: "12 ft",
      width: "6.5 ft",
      capacity: "2,990 lbs",
      axles: "Single"
    }
  }
];

export default function FeaturedListings() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Trailers</h2>
            <p className="mt-2 text-gray-600">Top-rated trailers updated daily based on user votes</p>
          </div>
          <a href="/marketplace" className="text-blue-600 hover:text-blue-700 font-medium">
            View All Listings →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Featured
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {listing.votes} votes
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-600">{listing.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {listing.title}
                </h3>
                
                <div className="flex items-center mb-4">
                  <DollarSign className="h-5 w-5 text-green-600 mr-1" />
                  <span className="text-2xl font-bold text-green-600">{listing.price}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(listing.specs).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 px-3 py-2 rounded-md">
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                      <div className="text-sm font-medium">{value}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{listing.location}</span>
                  </div>
                  <span className="text-sm text-gray-600">{listing.dealer}</span>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}