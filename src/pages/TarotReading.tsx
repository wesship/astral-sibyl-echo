
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shuffle, Eye } from 'lucide-react';

const TarotReading = () => {
  const [selectedCards, setSelectedCards] = useState<any[]>([]);
  const [reading, setReading] = useState<string>('');

  const tarotCards = [
    { id: 1, name: "The Fool", meaning: "New beginnings, innocence, spontaneity", reversed: "Recklessness, taken advantage of, inconsideration" },
    { id: 2, name: "The Magician", meaning: "Manifestation, resourcefulness, power", reversed: "Manipulation, poor planning, untapped talents" },
    { id: 3, name: "The High Priestess", meaning: "Intuition, sacred knowledge, divine feminine", reversed: "Secrets, disconnected from intuition, withdrawal" }
  ];

  const drawCards = () => {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    const drawn = shuffled.slice(0, 3);
    setSelectedCards(drawn);
    setReading("Your three-card spread reveals insights into your past, present, and future. Reflect on the messages these cards bring to your journey.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-indigo-950 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
            🔮 Tarot Reading
          </h1>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Discover the wisdom of the tarot cards and gain insight into your life's journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Button 
              onClick={drawCards}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition-opacity"
            >
              <Shuffle className="w-4 h-4 mr-2" />
              Draw Three Cards
            </Button>
          </div>

          {selectedCards.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {selectedCards.map((card, index) => (
                <Card key={card.id} className="bg-black/40 border-purple-500/30">
                  <CardHeader className="text-center">
                    <Eye className="w-8 h-8 mx-auto text-purple-400 mb-2" />
                    <CardTitle className="text-purple-200">{card.name}</CardTitle>
                    <CardDescription className="text-purple-300 text-sm">
                      {index === 0 ? 'Past' : index === 1 ? 'Present' : 'Future'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-100 text-sm mb-2">
                      <strong>Upright:</strong> {card.meaning}
                    </p>
                    <p className="text-purple-200 text-sm">
                      <strong>Reversed:</strong> {card.reversed}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {reading && (
            <Card className="bg-black/40 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-purple-200 text-center">Your Reading</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-100 text-center">{reading}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default TarotReading;
