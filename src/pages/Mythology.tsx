
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scroll, Crown } from 'lucide-react';

const Mythology = () => {
  const [selectedMyth, setSelectedMyth] = useState<any>(null);

  const mythologies = [
    { 
      name: 'Norse Mythology', 
      origin: 'Scandinavia',
      description: 'Tales of Odin, Thor, and the Nine Realms connected by Yggdrasil.',
      keyFigures: 'Odin, Thor, Freya, Loki'
    },
    { 
      name: 'Egyptian Mythology', 
      origin: 'Ancient Egypt',
      description: 'Stories of gods ruling over life, death, and the afterlife.',
      keyFigures: 'Ra, Isis, Osiris, Anubis'
    },
    { 
      name: 'Greek Mythology', 
      origin: 'Ancient Greece',
      description: 'Epic tales of Olympian gods and heroic adventures.',
      keyFigures: 'Zeus, Athena, Apollo, Aphrodite'
    },
    { 
      name: 'Celtic Mythology', 
      origin: 'Celtic Lands',
      description: 'Mystical stories of druids, faeries, and sacred groves.',
      keyFigures: 'Brigid, Cernunnos, Morrigan, Lugh'
    },
    { 
      name: 'Hindu Mythology', 
      origin: 'Ancient India',
      description: 'Sacred stories of divine incarnations and cosmic cycles.',
      keyFigures: 'Brahma, Vishnu, Shiva, Lakshmi'
    },
    { 
      name: 'Mesopotamian Mythology', 
      origin: 'Ancient Mesopotamia',
      description: 'Ancient tales from the cradle of civilization.',
      keyFigures: 'Marduk, Ishtar, Gilgamesh, Enlil'
    }
  ];

  const exploreMythology = (mythology: any) => {
    setSelectedMyth(mythology);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-black to-red-950 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent mb-4">
            📜 Ancient Mythology
          </h1>
          <p className="text-amber-200 max-w-2xl mx-auto">
            Journey through the sacred stories and legends of ancient civilizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mythologies.map((mythology) => (
            <Card 
              key={mythology.name} 
              className={`bg-black/40 border-amber-500/30 cursor-pointer hover:border-amber-400/50 transition-all ${
                selectedMyth?.name === mythology.name ? 'border-amber-400 bg-amber-900/20' : ''
              }`}
              onClick={() => exploreMythology(mythology)}
            >
              <CardHeader className="text-center">
                <Scroll className="w-8 h-8 mx-auto text-amber-400 mb-2" />
                <CardTitle className="text-amber-200">{mythology.name}</CardTitle>
                <CardDescription className="text-amber-300">{mythology.origin}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-amber-100 text-sm mb-2">{mythology.description}</p>
                {selectedMyth?.name === mythology.name && (
                  <p className="text-amber-100 text-sm">
                    <strong>Key Figures:</strong> {mythology.keyFigures}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mythology;
