
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Sparkles, 
  Moon, 
  BookOpen, 
  Zap, 
  Heart, 
  Gem, 
  Scroll,
  MessageCircle,
  History,
  PenTool,
  Star
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: "Sacred Oracle Chat",
      description: "Converse with ancient wisdom through our AI-powered chatbot connected to holy scrolls and mystical codex",
      icon: MessageCircle,
      path: "/chatbot",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Reading History",
      description: "Track and review all your past divination sessions and spiritual readings",
      icon: History,
      path: "/history",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Spiritual Journal",
      description: "Record your insights, dreams, and spiritual experiences in your personal journal",
      icon: PenTool,
      path: "/journal",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Tarot Reading",
      description: "Unlock the mysteries of your past, present, and future with our comprehensive Tarot card readings",
      icon: Eye,
      path: "/tarot",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Oracle Cards",
      description: "Receive divine guidance and insight with our collection of beautifully illustrated oracle cards",
      icon: Sparkles,
      path: "/oracle",
      gradient: "from-pink-500 to-red-500"
    },
    {
      title: "Daily Horoscope",
      description: "Discover what the stars have in store for you with our personalized daily horoscopes",
      icon: Moon,
      path: "/horoscope",
      gradient: "from-red-500 to-yellow-500"
    },
    {
      title: "Planetary Chart",
      description: "Master the 24-layer planetary correspondence system for ritual, meditation, and alchemical work with complete planetary wisdom",
      icon: Star,
      path: "/planetary-chart",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Esoteric Blog",
      description: "Delve into the depths of mystical knowledge with our blog featuring articles on ancient wisdom and spiritual practices",
      icon: BookOpen,
      path: "/blog",
      gradient: "from-yellow-500 to-green-500"
    },
    {
      title: "Rune Casting",
      description: "Unleash the power of the Norse runes to gain clarity and direction in your life",
      icon: Zap,
      path: "/runes",
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Chakra Healing",
      description: "Balance your energy centers and promote overall well-being with our chakra healing techniques",
      icon: Heart,
      path: "/chakras",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Crystal Guide",
      description: "Explore the healing properties of crystals and learn how to harness their energy for personal growth",
      icon: Gem,
      path: "/crystals",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Mythology",
      description: "Journey through the fascinating world of myths and legends from various cultures around the globe",
      icon: Scroll,
      path: "/mythology",
      gradient: "from-pink-600 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-indigo-950">
      <header className="py-24 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
          Welcome to the Sacred Grove
        </h1>
        <p className="text-xl text-purple-200 mb-8">
          Embark on a journey of self-discovery and connect with the mystical arts.
        </p>
        <Button asChild className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition-opacity">
          <Link to="/chatbot">Explore the Sacred Oracle</Link>
        </Button>
      </header>
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Sacred Practices & Ancient Wisdom
          </h2>
          <p className="text-center text-purple-200 mb-12 max-w-2xl mx-auto">
            Explore the mystical arts and connect with the divine wisdom of our ancestors through interactive experiences and sacred knowledge.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-black/40 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <CardHeader className="text-center">
                  <div className={`mx-auto w-12 h-12 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-purple-200">{feature.title}</CardTitle>
                  <CardDescription className="text-purple-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    asChild 
                    className={`bg-gradient-to-r ${feature.gradient} hover:opacity-90 transition-opacity`}
                  >
                    <Link to={feature.path}>
                      Explore {feature.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-purple-300">
        <p>&copy; 2024 Sacred Grove. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
