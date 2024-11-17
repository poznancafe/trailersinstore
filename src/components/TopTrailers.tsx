import React, { useState } from 'react';
import { ThumbsUp, MessageCircle, ExternalLink, Share2, Info } from 'lucide-react';

const topTrailers = [
  {
    id: 1,
    title: "Premium Car Hauler - Limited Edition",
    price: "$15,999",
    dealer: "Elite Trailers",
    image: "https://images.unsplash.com/photo-1580674285054-bb0e9e7b8b6a?auto=format&fit=crop&q=80&w=800",
    votes: 234,
    activeChats: 12,
    specs: {
      type: "Car Hauler",
      condition: "New",
      length: "20 ft",
      capacity: "7,000 lbs"
    }
  },
  {
    id: 2,
    title: "Heavy-Duty Equipment Trailer",
    price: "$12,500",
    dealer: "Industrial Trailers Co.",
    image: "https://images.unsplash.com/photo-1579189880841-43ddba8d8df4?auto=format&fit=crop&q=80&w=800",
    votes: 189,
    activeChats: 8,
    specs: {
      type: "Equipment",
      condition: "New",
      length: "24 ft",
      capacity: "14,000 lbs"
    }
  },
  {
    id: 3,
    title: "Enclosed Cargo Trailer - Premium",
    price: "$8,999",
    dealer: "Cargo Solutions Inc.",
    image: "https://images.unsplash.com/photo-1586786301290-af7ea2c4e751?auto=format&fit=crop&q=80&w=800",
    votes: 156,
    activeChats: 15,
    specs: {
      type: "Enclosed",
      condition: "New",
      length: "16 ft",
      capacity: "5,200 lbs"
    }
  },
  {
    id: 4,
    title: "Utility Landscape Pro Trailer",
    price: "$4,999",
    dealer: "Pro Trailers LLC",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=800",
    votes: 142,
    activeChats: 6,
    specs: {
      type: "Utility",
      condition: "New",
      length: "12 ft",
      capacity: "2,990 lbs"
    }
  },
  {
    id: 5,
    title: "Dump Trailer - Commercial Grade",
    price: "$9,499",
    dealer: "Commercial Trailers Direct",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800",
    votes: 128,
    activeChats: 9,
    specs: {
      type: "Dump",
      condition: "New",
      length: "14 ft",
      capacity: "8,400 lbs"
    }
  }
];

export default function TopTrailers() {
  const [votedTrailers, setVotedTrailers] = useState<number[]>([]);
  const [showChatHint, setShowChatHint] = useState(false);

  const handleVote = (id: number) => {
    if (!votedTrailers.includes(id)) {
      setVotedTrailers([...votedTrailers, id]);
    }
  };

  const handleChatClick = () => {
    setShowChatHint(true);
    setTimeout(() => setShowChatHint(false), 3000);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">5 Trailers You Need to See Today</h2>
            <p className="mt-2 text-gray-600">Top-rated listings with active buyer interest</p>
          </div>
          <div className="relative">
            {showChatHint && (
              <div className="absolute right-0 bottom-full mb-2 w-64 p-2 bg-blue-600 text-white text-sm rounded-lg shadow-lg">
                Live chat feature coming soon! Stay tuned for instant dealer communication.
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {topTrailers.map((trailer) => (
            <div 
              key={trailer.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src={trailer.image}
                    alt={trailer.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {trailer.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{trailer.dealer}</p>
                      <p className="text-2xl font-bold text-green-600 mb-4">{trailer.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleVote(trailer.id)}
                        className={`flex items-center space-x-1 px-3 py-1 rounded-full ${
                          votedTrailers.includes(trailer.id)
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                        }`}
                      >
                        <ThumbsUp className="h-4 w-4" />
                        <span>{trailer.votes + (votedTrailers.includes(trailer.id) ? 1 : 0)}</span>
                      </button>
                      <button 
                        onClick={handleChatClick}
                        className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>{trailer.activeChats} active</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
                    {Object.entries(trailer.specs).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 px-3 py-2 rounded-md">
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                        <div className="text-sm font-medium">{value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <div className="flex space-x-2">
                      <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
                        <Info className="h-4 w-4" />
                        <span>Details</span>
                      </button>
                      <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
                        <Share2 className="h-4 w-4" />
                        <span>Share</span>
                      </button>
                    </div>
                    <a 
                      href={`/trailer/${trailer.id}`}
                      className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      <span>View Listing</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}