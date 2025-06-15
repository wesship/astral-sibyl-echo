
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Clock } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding the Major Arcana",
      excerpt: "Dive deep into the 22 cards of the Major Arcana and their profound spiritual meanings.",
      readTime: "5 min read",
      category: "Tarot"
    },
    {
      id: 2,
      title: "Crystal Healing for Beginners",
      excerpt: "Learn how to harness the energy of crystals for healing and spiritual growth.",
      readTime: "8 min read",
      category: "Crystals"
    },
    {
      id: 3,
      title: "The History of Oracle Cards",
      excerpt: "Explore the fascinating origins and evolution of oracle card divination.",
      readTime: "6 min read",
      category: "Oracle"
    },
    {
      id: 4,
      title: "Chakra Balancing Techniques",
      excerpt: "Discover ancient methods to align and balance your seven energy centers.",
      readTime: "10 min read",
      category: "Chakras"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-black to-teal-950 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent mb-4">
            📚 Sacred Knowledge Blog
          </h1>
          <p className="text-emerald-200 max-w-2xl mx-auto">
            Explore articles on ancient wisdom, mystical practices, and spiritual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {articles.map((article) => (
            <Card key={article.id} className="bg-black/40 border-emerald-500/30 hover:border-emerald-400/50 transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-400 text-sm font-medium">{article.category}</span>
                  <div className="flex items-center text-emerald-300 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="text-emerald-200">{article.title}</CardTitle>
                <CardDescription className="text-emerald-300">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-emerald-400">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="text-sm">Read Article</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
