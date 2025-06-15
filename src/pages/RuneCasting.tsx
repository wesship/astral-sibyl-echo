
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Shield } from 'lucide-react';

const RuneCasting = () => {
  const [selectedRunes, setSelectedRunes] = useState<any[]>([]);

  const runes = [
    { name: 'Fehu', meaning: 'Wealth, abundance, success', symbol: 'ᚠ' },
    { name: 'Uruz', meaning: 'Strength, vitality, determination', symbol: 'ᚢ' },
    { name: 'Thurisaz', meaning: 'Protection, defense, conflict', symbol: 'ᚦ' },
    { name: 'Ansuz', meaning: 'Communication, wisdom, divine message', symbol: 'ᚨ' },
    { name: 'Raidho', meaning: 'Journey, travel, progress', symbol: 'ᚱ' }
  ];

  const castRunes = () => {
    const shuffled = [...runes].sort(() => Math.random() - 0.5);
    const cast = shuffled.slice(0, 3);
    setSelectedRunes(cast);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-blue-950 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-400 to-blue-600 bg-clip-text text-transparent mb-4">
            ⚡ Rune Casting
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto">
            Cast the ancient Norse runes to gain wisdom and guidance from the old ways.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Button 
              onClick={castRunes}
              className="bg-gradient-to-r from-slate-500 to-blue-600 hover:opacity-90 transition-opacity"
            >
              <Zap className="w-4 h-4 mr-2" />
              Cast Runes
            </Button>
          </div>

          {selectedRunes.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedRunes.map((rune, index) => (
                <Card key={rune.name} className="bg-black/40 border-slate-500/30">
                  <CardHeader className="text-center">
                    <Shield className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                    <div className="text-4xl text-slate-200 mb-2">{rune.symbol}</div>
                    <CardTitle className="text-slate-200">{rune.name}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {index === 0 ? 'Past' : index === 1 ? 'Present' : 'Future'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-100 text-center">{rune.meaning}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RuneCasting;
