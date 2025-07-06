import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { gematriaSystemsData, sacredGematriaValues, GematriaCalculation } from '@/data/gematria';
import { Calculator, BookOpen, Star } from 'lucide-react';

export const GematriaCalculator = () => {
  const [inputText, setInputText] = useState('');
  const [calculations, setCalculations] = useState<GematriaCalculation[]>([]);
  const [selectedSystem, setSelectedSystem] = useState('English Simple');

  const calculateGematria = (text: string, systemName: string) => {
    const system = gematriaSystemsData.find(s => s.name === systemName);
    if (!system) return 0;

    let total = 0;
    const upperText = text.toUpperCase();
    
    for (const char of upperText) {
      if (system.alphabet[char]) {
        total += system.alphabet[char];
      }
    }
    
    return total;
  };

  const findSacredMeaning = (value: number, system: string) => {
    const match = sacredGematriaValues.find(
      sv => sv.value === value && sv.system.includes(system.split(' ')[0])
    );
    return match;
  };

  const generateMeaning = (value: number, word: string) => {
    const meanings = [
      `${word} carries the vibrational frequency of ${value}, representing transformation and spiritual growth.`,
      `The number ${value} in ${word} signifies balance between material and spiritual realms.`,
      `${word} with value ${value} resonates with ancient wisdom and hidden knowledge.`,
      `The gematria ${value} of ${word} indicates a connection to divine consciousness.`,
      `${word} (${value}) represents the integration of cosmic forces and earthly manifestation.`
    ];
    return meanings[value % meanings.length];
  };

  useEffect(() => {
    if (!inputText.trim()) {
      setCalculations([]);
      return;
    }

    const words = inputText.split(/\s+/).filter(word => word.length > 0);
    const newCalculations: GematriaCalculation[] = [];

    words.forEach(word => {
      gematriaSystemsData.forEach(system => {
        const value = calculateGematria(word, system.name);
        if (value > 0) {
          const sacredMatch = findSacredMeaning(value, system.name);
          
          newCalculations.push({
            word: word.toUpperCase(),
            value,
            system: system.name,
            meaning: sacredMatch?.meaning || generateMeaning(value, word),
            correspondences: sacredMatch?.correspondences || [
              `Numerological essence: ${value % 9 || 9}`,
              `Chakra resonance: ${['Root', 'Sacral', 'Solar Plexus', 'Heart', 'Throat', 'Third Eye', 'Crown'][value % 7]}`,
              `Element: ${['Earth', 'Water', 'Fire', 'Air'][value % 4]}`
            ]
          });
        }
      });
    });

    setCalculations(newCalculations);
  }, [inputText]);

  const getValueColor = (value: number) => {
    const hue = (value * 13) % 360;
    return `hsl(${hue}, 70%, 60%)`;
  };

  return (
    <Card className="bg-gradient-to-br from-purple-950/50 to-indigo-950/50 border-purple-500/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-purple-200">
          <Calculator className="w-5 h-5" />
          Gematria Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter words to calculate gematria values..."
            className="bg-black/30 border-purple-500/30 text-purple-100"
          />
          
          <div className="flex flex-wrap gap-2">
            {gematriaSystemsData.map(system => (
              <Button
                key={system.name}
                variant={selectedSystem === system.name ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSystem(system.name)}
                className="text-xs border-purple-500/30"
              >
                {system.name}
              </Button>
            ))}
          </div>
        </div>

        {calculations.length > 0 && (
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {calculations
              .filter(calc => calc.system === selectedSystem)
              .map((calc, index) => (
                <Card key={index} className="bg-black/20 border-purple-500/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge 
                          className="text-white border-0"
                          style={{ backgroundColor: getValueColor(calc.value) }}
                        >
                          {calc.word}
                        </Badge>
                        <span className="text-2xl font-bold text-purple-200">
                          {calc.value}
                        </span>
                      </div>
                      <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                        {calc.system}
                      </Badge>
                    </div>
                    
                    <p className="text-purple-200 text-sm mb-3">{calc.meaning}</p>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-xs text-purple-300">
                        <Star className="w-3 h-3" />
                        Correspondences:
                      </div>
                      {calc.correspondences.map((corr, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className="text-xs border-purple-500/20 text-purple-400 mr-1"
                        >
                          {corr}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        )}

        {inputText && calculations.length === 0 && (
          <div className="text-center text-purple-400 py-4">
            <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>Enter text to reveal its gematria wisdom...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};