import React from 'react';
import { Clock, ArrowRight, User, Calendar } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "Essential Maintenance Tips for Commercial Trailers",
    excerpt: "Learn key maintenance practices to keep your commercial trailer fleet in top condition and maximize ROI...",
    author: "Mike Johnson",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800",
    category: "Maintenance"
  },
  {
    id: 2,
    title: "2024 Trailer Industry Market Analysis",
    excerpt: "Comprehensive analysis of market trends, emerging technologies, and growth opportunities in the trailer sector...",
    author: "Sarah Miller",
    date: "Mar 12, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1580674287405-80cd77a2fee2?auto=format&fit=crop&q=80&w=800",
    category: "Industry Insights"
  }
];

export default function BlogSection() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Industry Insights</h2>
            <p className="mt-2 text-gray-600">Expert analysis and tips from trailer industry leaders</p>
          </div>
          <a href="/blog" className="text-blue-600 hover:text-blue-700 flex items-center">
            View all articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-500">By {post.author}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}