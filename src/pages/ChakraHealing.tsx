
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Circle } from 'lucide-react';

const ChakraHealing = () => {
  const [selectedChakra, setSelectedChakra] = useState<any>(null);

  const chakras = [
    { name: 'Root Chakra', color: 'red', location: 'Base of spine', element: 'Earth', healing: 'Grounding exercises, red foods, walking barefoot' },
    { name: 'Sacral Chakra', color: 'orange', location: 'Lower abdomen', element: 'Water', healing: 'Creative expression, orange foods, hip circles' },
    { name: 'Solar Plexus', color: 'yellow', location: 'Upper abdomen', element: 'Fire', healing: 'Confidence building, yellow foods, core strengthening' },
    { name: 'Heart Chakra', color: 'green', location: 'Center of chest', element: 'Air', healing: 'Love meditation, green foods, heart opening poses' },
    { name: 'Throat Chakra', color: 'blue', location: 'Throat', element: 'Sound', healing: 'Singing, blue foods, neck stretches' },
    { name: 'Third Eye', color: 'indigo', location: 'Between eyebrows', element: 'Light', healing: 'Meditation, purple foods, eye exercises' },
    { name: 'Crown Chakra', color: 'violet', location: 'Top of head', element: 'Thought', healing: 'Spiritual practice, fasting, headstand' }
  ];

  const analyzeChakra = (chakra: any) => {
    setSelectedChakra(chakra);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-black to-orange-950 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-orange-600 bg-clip-text text-transparent mb-4">
            💖 Chakra Healing
          </h1>
          <p className="text-rose-200 max-w-2xl mx-auto">
            Balance your energy centers and promote healing through ancient chakra wisdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {chakras.map((chakra, index) => (
            <Card 
              key={chakra.name} 
              className={`bg-black/40 border-rose-500/30 cursor-pointer hover:border-rose-400/50 transition-all ${
                selectedChakra?.name === chakra.name ? 'border-rose-400 bg-rose-900/20' : ''
              }`}
              onClick={() => analyzeChakra(chakra)}
            >
              <CardHeader className="text-center">
                <Circle className={`w-8 h-8 mx-auto text-${chakra.color}-400 mb-2`} />
                <CardTitle className="text-rose-200">{chakra.name}</CardTitle>
                <CardDescription className="text-rose-300">{chakra.location}</CardDescription>
              </CardHeader>
              {selectedChakra?.name === chakra.name && (
                <CardContent>
                  <p className="text-rose-100 text-sm mb-2">
                    <strong>Element:</strong> {chakra.element}
                  </p>
                  <p className="text-rose-100 text-sm">
                    <strong>Healing:</strong> {chakra.healing}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChakraHealing;
