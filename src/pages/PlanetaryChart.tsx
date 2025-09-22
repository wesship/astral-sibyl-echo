import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { planetaryCorrespondences, getHourlyRuler, type PlanetaryCorrespondence } from '@/data/planetaryCorrespondences';
import { Clock, Calendar, Zap, Heart, Brain, Gem, Music, Star, Sun, Moon } from 'lucide-react';

const PlanetaryChart = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetaryCorrespondence | null>(null);
  const [viewMode, setViewMode] = useState<'table' | 'cards' | 'wheel'>('table');

  const currentHour = new Date().getHours();
  const currentDay = new Date().getDay();
  const currentPlanetaryRuler = getHourlyRuler(currentDay, currentHour);

  const planetIcons = {
    'Saturn': '♄',
    'Sun': '☉',
    'Moon': '☾',
    'Mars': '♂',
    'Mercury': '☿',
    'Jupiter': '♃',
    'Venus': '♀'
  };

  const layerCategories = [
    { name: 'Temporal', layers: ['planet', 'day', 'rulingDay', 'planetaryHour'] },
    { name: 'Spiritual', layers: ['archon', 'demon', 'angel', 'tarot'] },
    { name: 'Physical', layers: ['organ', 'metal', 'gem', 'herb'] },
    { name: 'Psychological', layers: ['passion', 'color', 'element', 'humor'] },
    { name: 'Vibrational', layers: ['harmonicNote', 'cymaticForm', 'seedSyllable', 'scent'] },
    { name: 'Energetic', layers: ['chakra', 'direction', 'sigil'] },
    { name: 'Practical', layers: ['ritualUse', 'integrationNotes'] }
  ];

  const renderPlanetCard = (planet: PlanetaryCorrespondence) => {
    const isCurrentRuler = currentPlanetaryRuler === planet.planet;
    
    return (
      <Card 
        key={planet.planet} 
        className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
          isCurrentRuler ? 'ring-2 ring-primary shadow-lg bg-primary/5' : ''
        }`}
        onClick={() => setSelectedPlanet(planet)}
      >
        <CardHeader className="text-center pb-3">
          <div className="text-4xl mb-2">{planetIcons[planet.planet as keyof typeof planetIcons]}</div>
          <CardTitle className="text-xl">{planet.planet}</CardTitle>
          <CardDescription className="text-sm">
            {planet.day} • {planet.element}
            {isCurrentRuler && <Badge className="ml-2 text-xs">Current Ruler</Badge>}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div><strong>Angel:</strong> {planet.angel}</div>
          <div><strong>Organ:</strong> {planet.organ}</div>
          <div><strong>Passion:</strong> {planet.passion}</div>
          <div><strong>Metal:</strong> {planet.metal}</div>
          <div><strong>Note:</strong> {planet.harmonicNote}</div>
          <div><strong>Chakra:</strong> {planet.chakra}</div>
        </CardContent>
      </Card>
    );
  };

  const renderMasterTable = () => (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-32">Layer</TableHead>
            {planetaryCorrespondences.map(planet => (
              <TableHead key={planet.planet} className="text-center min-w-24">
                <div className="flex flex-col items-center">
                  <span className="text-2xl">{planetIcons[planet.planet as keyof typeof planetIcons]}</span>
                  <span className="text-xs">{planet.planet}</span>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(planetaryCorrespondences[0]).slice(1).map((layer) => (
            <TableRow key={layer}>
              <TableCell className="font-medium capitalize">
                {layer.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </TableCell>
              {planetaryCorrespondences.map(planet => (
                <TableCell key={`${planet.planet}-${layer}`} className="text-center text-xs">
                  {planet[layer as keyof PlanetaryCorrespondence]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  const renderCategoryTabs = () => (
    <Tabs defaultValue="Temporal" className="w-full">
      <TabsList className="grid w-full grid-cols-7">
        {layerCategories.map(category => (
          <TabsTrigger key={category.name} value={category.name} className="text-xs">
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {layerCategories.map(category => (
        <TabsContent key={category.name} value={category.name}>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Layer</TableHead>
                  {planetaryCorrespondences.map(planet => (
                    <TableHead key={planet.planet} className="text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-xl">{planetIcons[planet.planet as keyof typeof planetIcons]}</span>
                        <span className="text-xs">{planet.planet}</span>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {category.layers.map(layer => (
                  <TableRow key={layer}>
                    <TableCell className="font-medium capitalize">
                      {layer.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </TableCell>
                    {planetaryCorrespondences.map(planet => (
                      <TableCell key={`${planet.planet}-${layer}`} className="text-center text-sm">
                        {planet[layer as keyof PlanetaryCorrespondence]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          🌌 Planetary Correspondence Master Chart
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Complete 24-layer planetary correspondence system integrating temporal, spiritual, physical, 
          psychological, vibrational, and energetic dimensions for ritual, meditation, and alchemical work.
        </p>
        
        {/* Current Planetary Hour */}
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center pb-3">
            <CardTitle className="flex items-center justify-center gap-2">
              <Clock className="h-5 w-5" />
              Current Planetary Hour
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl mb-2">
              {planetIcons[currentPlanetaryRuler as keyof typeof planetIcons]}
            </div>
            <div className="text-xl font-semibold">{currentPlanetaryRuler}</div>
            <div className="text-sm text-muted-foreground">
              Hour {currentHour + 1} • {new Date().toLocaleDateString()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* View Mode Selection */}
      <div className="flex justify-center gap-2">
        <Button 
          variant={viewMode === 'table' ? 'default' : 'outline'} 
          onClick={() => setViewMode('table')}
          size="sm"
        >
          Master Table
        </Button>
        <Button 
          variant={viewMode === 'cards' ? 'default' : 'outline'} 
          onClick={() => setViewMode('cards')}
          size="sm"
        >
          Planet Cards
        </Button>
      </div>

      {/* Content */}
      {viewMode === 'table' && (
        <Card>
          <CardHeader>
            <CardTitle>Complete Correspondence Table</CardTitle>
            <CardDescription>
              All 24 layers of planetary correspondences in one comprehensive view
            </CardDescription>
          </CardHeader>
          <CardContent>
            {renderCategoryTabs()}
          </CardContent>
        </Card>
      )}

      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {planetaryCorrespondences.map(renderPlanetCard)}
        </div>
      )}

      {/* Selected Planet Details */}
      {selectedPlanet && (
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <span className="text-3xl">
                {planetIcons[selectedPlanet.planet as keyof typeof planetIcons]}
              </span>
              {selectedPlanet.planet} - Complete Correspondence
            </CardTitle>
            <CardDescription>
              Full 24-layer correspondence for {selectedPlanet.planet}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(selectedPlanet).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <div className="text-sm font-medium capitalize text-muted-foreground">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </div>
                  <div className="text-sm bg-muted p-2 rounded">
                    {value}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Integration Practice
              </h4>
              <p className="text-sm">{selectedPlanet.integrationNotes}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Usage Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            How to Use This Master Chart
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">1. Choose Planetary Focus</h4>
              <p className="text-sm text-muted-foreground">
                Select a planet based on your intention (Mars for courage, Venus for love, etc.)
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">2. Check Timing</h4>
              <p className="text-sm text-muted-foreground">
                Work during the planet's day or hour for maximum resonance
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">3. Activate Layers</h4>
              <p className="text-sm text-muted-foreground">
                Use colors, metals, gems, scents, herbs, notes, and mantras together
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">4. Integrate Practice</h4>
              <p className="text-sm text-muted-foreground">
                Follow the integration notes for combining multiple correspondences
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlanetaryChart;