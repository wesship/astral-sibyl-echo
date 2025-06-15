
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gem, Sparkles } from 'lucide-react';

const CrystalGuide = () => {
  const [selectedCrystal, setSelectedCrystal] = useState<any>(null);

  const crystals = [
    { name: 'Amethyst', color: 'Purple', properties: 'Spiritual growth, protection, intuition', chakra: 'Crown & Third Eye' },
    { name: 'Rose Quartz', color: 'Pink', properties: 'Love, emotional healing, self-acceptance', chakra: 'Heart' },
    { name: 'Clear Quartz', color: 'Clear', properties: 'Amplification, clarity, healing', chakra: 'All Chakras' },
    { name: 'Black Tourmaline', color: 'Black', properties: 'Protection, grounding, cleansing', chakra: 'Root' },
    { name: 'Citrine', color: 'Yellow', properties: 'Abundance, confidence, creativity', chakra: 'Solar Plexus' },
    { name: 'Lapis Lazuli', color: 'Blue', properties: 'Truth, wisdom, communication', chakra: 'Throat' }
  ];

  const exploreCrystal = (crystal: any) => {
    setSelectedCrystal(crystal);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-black to-pink-950 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-pink-600 bg-clip-text text-transparent mb-4">
            💎 Crystal Guide
          </h1>
          <p className="text-violet-200 max-w-2xl mx-auto">
            Discover the healing properties and metaphysical powers of sacred crystals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {crystals.map((crystal) => (
            <Card 
              key={crystal.name} 
              className={`bg-black/40 border-violet-500/30 cursor-pointer hover:border-violet-400/50 transition-all ${
                selectedCrystal?.name === crystal.name ? 'border-violet-400 bg-violet-900/20' : ''
              }`}
              onClick={() => exploreCrystal(crystal)}
            >
              <CardHeader className="text-center">
                <Gem className="w-8 h-8 mx-auto text-violet-400 mb-2" />
                <CardTitle className="text-violet-200">{crystal.name}</CardTitle>
                <CardDescription className="text-violet-300">{crystal.color}</CardDescription>
              </CardHeader>
              {selectedCrystal?.name === crystal.name && (
                <CardContent>
                  <p className="text-violet-100 text-sm mb-2">
                    <strong>Properties:</strong> {crystal.properties}
                  </p>
                  <p className="text-violet-100 text-sm">
                    <strong>Chakra:</strong> {crystal.chakra}
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

export default CrystalGuide;
