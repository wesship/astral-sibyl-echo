
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Moon, Star } from 'lucide-react';

const Horoscope = () => {
  const [selectedSign, setSelectedSign] = useState<string>('');

  const zodiacSigns = [
    { name: 'Aries', dates: 'Mar 21 - Apr 19', horoscope: 'Today brings new opportunities for leadership and initiative.' },
    { name: 'Taurus', dates: 'Apr 20 - May 20', horoscope: 'Focus on stability and building lasting foundations today.' },
    { name: 'Gemini', dates: 'May 21 - Jun 20', horoscope: 'Communication and learning are highlighted in your day.' },
    { name: 'Cancer', dates: 'Jun 21 - Jul 22', horoscope: 'Trust your intuition and nurture your emotional well-being.' },
    { name: 'Leo', dates: 'Jul 23 - Aug 22', horoscope: 'Your creativity and confidence shine brightly today.' },
    { name: 'Virgo', dates: 'Aug 23 - Sep 22', horoscope: 'Attention to detail and practical matters serve you well.' }
  ];

  const getHoroscope = (sign: string) => {
    setSelectedSign(sign);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-black to-purple-950 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent mb-4">
            🌙 Daily Horoscope
          </h1>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            Discover what the stars have aligned for you today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {zodiacSigns.map((sign) => (
            <Card 
              key={sign.name} 
              className={`bg-black/40 border-indigo-500/30 cursor-pointer hover:border-indigo-400/50 transition-all ${
                selectedSign === sign.name ? 'border-indigo-400 bg-indigo-900/20' : ''
              }`}
              onClick={() => getHoroscope(sign.name)}
            >
              <CardHeader className="text-center">
                <Star className="w-8 h-8 mx-auto text-indigo-400 mb-2" />
                <CardTitle className="text-indigo-200">{sign.name}</CardTitle>
                <CardDescription className="text-indigo-300">{sign.dates}</CardDescription>
              </CardHeader>
              {selectedSign === sign.name && (
                <CardContent>
                  <p className="text-indigo-100 text-center">{sign.horoscope}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Horoscope;
