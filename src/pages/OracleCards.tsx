
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart } from 'lucide-react';

const OracleCards = () => {
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const oracleCards = [
    { id: 1, name: "Divine Guidance", message: "Trust in the universe's plan for you. Your path is unfolding perfectly." },
    { id: 2, name: "Inner Strength", message: "You possess all the strength you need within you. Believe in yourself." },
    { id: 3, name: "New Beginnings", message: "A fresh chapter is beginning. Embrace the opportunities ahead." },
    { id: 4, name: "Love & Compassion", message: "Open your heart to love, both for yourself and others." },
    { id: 5, name: "Wisdom", message: "The answers you seek are already within you. Listen to your inner voice." }
  ];

  const drawCard = () => {
    const randomCard = oracleCards[Math.floor(Math.random() * oracleCards.length)];
    setSelectedCard(randomCard);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-950 via-black to-purple-950 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
            ✨ Oracle Cards
          </h1>
          <p className="text-pink-200 max-w-2xl mx-auto">
            Receive divine guidance and messages of love, hope, and inspiration.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Button 
              onClick={drawCard}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Draw Oracle Card
            </Button>
          </div>

          {selectedCard && (
            <Card className="bg-black/40 border-pink-500/30">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 mx-auto text-pink-400 mb-4" />
                <CardTitle className="text-pink-200 text-2xl">{selectedCard.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pink-100 text-center text-lg">{selectedCard.message}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default OracleCards;
