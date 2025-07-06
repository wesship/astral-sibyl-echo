import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { numerologyNumbersData } from '@/data/numerology';
import { Hash, Calendar, User, Star } from 'lucide-react';

export const NumerologyAnalyzer = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);

  const calculateLifePath = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return null;

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const total = day + month + year;
    return reduceToSingleDigit(total);
  };

  const calculateNameNumber = (name: string) => {
    const values: { [key: string]: number } = {
      'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
      'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
      'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    };

    let total = 0;
    for (const char of name.toUpperCase()) {
      if (values[char]) {
        total += values[char];
      }
    }

    return reduceToSingleDigit(total);
  };

  const reduceToSingleDigit = (num: number): number => {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
      num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
  };

  const calculatePersonalYear = (birthDate: string) => {
    const currentYear = new Date().getFullYear();
    const birth = new Date(birthDate);
    const month = birth.getMonth() + 1;
    const day = birth.getDate();
    
    const personalYearTotal = day + month + currentYear;
    return reduceToSingleDigit(personalYearTotal);
  };

  const getSoulUrge = (name: string) => {
    const vowels = 'AEIOU';
    const values: { [key: string]: number } = {
      'A': 1, 'E': 5, 'I': 9, 'O': 6, 'U': 3
    };

    let total = 0;
    for (const char of name.toUpperCase()) {
      if (vowels.includes(char) && values[char]) {
        total += values[char];
      }
    }

    return reduceToSingleDigit(total);
  };

  const getPersonality = (name: string) => {
    const consonants = 'BCDFGHJKLMNPQRSTVWXYZ';
    const values: { [key: string]: number } = {
      'B': 2, 'C': 3, 'D': 4, 'F': 6, 'G': 7, 'H': 8, 'J': 1, 'K': 2,
      'L': 3, 'M': 4, 'N': 5, 'P': 7, 'Q': 8, 'R': 9, 'S': 1, 'T': 2,
      'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    };

    let total = 0;
    for (const char of name.toUpperCase()) {
      if (consonants.includes(char) && values[char]) {
        total += values[char];
      }
    }

    return reduceToSingleDigit(total);
  };

  const getNumerologyMeaning = (number: number) => {
    return numerologyNumbersData.find(n => n.number === number) || {
      number,
      name: `Number ${number}`,
      meaning: 'Unique spiritual significance',
      traits: ['Individual path', 'Special mission'],
      challenges: [],
      spiritualSignificance: 'Carries special divine purpose',
      colors: ['White'],
      crystals: ['Clear Quartz'],
      compatibility: []
    };
  };

  useEffect(() => {
    if (name.trim() || birthDate) {
      const lifePath = birthDate ? calculateLifePath(birthDate) : null;
      const nameNumber = name.trim() ? calculateNameNumber(name) : null;
      const personalYear = birthDate ? calculatePersonalYear(birthDate) : null;
      const soulUrge = name.trim() ? getSoulUrge(name) : null;
      const personality = name.trim() ? getPersonality(name) : null;

      setAnalysis({
        lifePath,
        nameNumber,
        personalYear,
        soulUrge,
        personality,
        lifePathMeaning: lifePath ? getNumerologyMeaning(lifePath) : null,
        nameNumberMeaning: nameNumber ? getNumerologyMeaning(nameNumber) : null,
        personalYearMeaning: personalYear ? getNumerologyMeaning(personalYear) : null,
        soulUrgeMeaning: soulUrge ? getNumerologyMeaning(soulUrge) : null,
        personalityMeaning: personality ? getNumerologyMeaning(personality) : null
      });
    } else {
      setAnalysis(null);
    }
  }, [name, birthDate]);

  const NumberCard = ({ title, number, meaning, icon: Icon }: any) => {
    if (!number || !meaning) return null;

    return (
      <Card className="bg-black/20 border-purple-500/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-medium">{title}</span>
            <Badge className="bg-purple-600 text-white ml-auto">
              {number}
            </Badge>
          </div>
          
          <h4 className="text-purple-200 font-semibold mb-1">{meaning.name}</h4>
          <p className="text-purple-300 text-sm mb-2">{meaning.meaning}</p>
          
          <div className="space-y-2">
            <div>
              <span className="text-xs text-purple-400">Traits: </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {meaning.traits.slice(0, 3).map((trait: string, i: number) => (
                  <Badge key={i} variant="outline" className="text-xs border-purple-500/30 text-purple-300">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <span className="text-xs text-purple-400">Colors: </span>
              <div className="flex gap-1 mt-1">
                {meaning.colors.map((color: string, i: number) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full border border-purple-500/30"
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Card className="bg-gradient-to-br from-purple-950/50 to-indigo-950/50 border-purple-500/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-purple-200">
          <Hash className="w-5 h-5" />
          Numerology Analyzer
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-purple-300 text-sm mb-1 block">Full Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name..."
              className="bg-black/30 border-purple-500/30 text-purple-100"
            />
          </div>
          
          <div>
            <label className="text-purple-300 text-sm mb-1 block">Birth Date</label>
            <Input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="bg-black/30 border-purple-500/30 text-purple-100"
            />
          </div>
        </div>

        {analysis && (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <NumberCard
                title="Life Path"
                number={analysis.lifePath}
                meaning={analysis.lifePathMeaning}
                icon={Star}
              />
              
              <NumberCard
                title="Name Number"
                number={analysis.nameNumber}
                meaning={analysis.nameNumberMeaning}
                icon={User}
              />
              
              <NumberCard
                title="Personal Year"
                number={analysis.personalYear}
                meaning={analysis.personalYearMeaning}
                icon={Calendar}
              />
              
              <NumberCard
                title="Soul Urge"
                number={analysis.soulUrge}
                meaning={analysis.soulUrgeMeaning}
                icon={Hash}
              />
            </div>
            
            <NumberCard
              title="Personality Number"
              number={analysis.personality}
              meaning={analysis.personalityMeaning}
              icon={User}
            />
          </div>
        )}

        {!name && !birthDate && (
          <div className="text-center text-purple-400 py-8">
            <Hash className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Enter your name and birth date to discover your numerological profile</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};