
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useUser } from '@/contexts/UserContext';
import { History, Trash2, Eye, Calendar } from 'lucide-react';
import { format } from 'date-fns';

const ReadingHistory = () => {
  const { readings, deleteReading } = useUser();
  const [selectedReading, setSelectedReading] = useState<any>(null);

  const getReadingTypeIcon = (type: string) => {
    switch (type) {
      case 'tarot': return '🔮';
      case 'oracle': return '✨';
      case 'rune': return '⚡';
      case 'horoscope': return '🌙';
      default: return '📖';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-indigo-950 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
            📜 Reading History
          </h1>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Review your past divination sessions and track your spiritual journey.
          </p>
        </div>

        {readings.length === 0 ? (
          <Card className="bg-black/40 border-purple-500/30 max-w-md mx-auto">
            <CardHeader className="text-center">
              <History className="w-12 h-12 mx-auto text-purple-400 mb-4" />
              <CardTitle className="text-purple-200">No Readings Yet</CardTitle>
              <CardDescription className="text-purple-300">
                Start your spiritual journey by getting your first reading!
              </CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {readings.map((reading) => (
              <Card 
                key={reading.id} 
                className="bg-black/40 border-purple-500/30 hover:border-purple-400/50 transition-all cursor-pointer"
                onClick={() => setSelectedReading(reading)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl">{getReadingTypeIcon(reading.type)}</div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteReading(reading.id);
                      }}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-purple-200 capitalize">{reading.type} Reading</CardTitle>
                  <CardDescription className="text-purple-300 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {format(reading.date, 'MMM dd, yyyy')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {selectedReading && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="bg-black/90 border-purple-500/50 max-w-2xl w-full max-h-96 overflow-y-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-200 capitalize">
                    {selectedReading.type} Reading
                  </CardTitle>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedReading(null)}
                    className="text-purple-400"
                  >
                    ✕
                  </Button>
                </div>
                <CardDescription className="text-purple-300">
                  {format(selectedReading.date, 'MMMM dd, yyyy \'at\' h:mm a')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedReading.cards && (
                  <div className="mb-4">
                    <h3 className="text-purple-200 font-semibold mb-2">Cards Drawn:</h3>
                    <div className="space-y-2">
                      {selectedReading.cards.map((card: any, index: number) => (
                        <div key={index} className="text-purple-100">
                          {card.name || card.symbol} - {card.meaning}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {selectedReading.result && (
                  <div className="mb-4">
                    <h3 className="text-purple-200 font-semibold mb-2">Reading:</h3>
                    <p className="text-purple-100">{selectedReading.result}</p>
                  </div>
                )}
                {selectedReading.notes && (
                  <div>
                    <h3 className="text-purple-200 font-semibold mb-2">Personal Notes:</h3>
                    <p className="text-purple-100">{selectedReading.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadingHistory;
