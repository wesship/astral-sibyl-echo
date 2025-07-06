
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DualAIInterface } from '../components/DualAIInterface';
import { GematriaCalculator } from '../components/GematriaCalculator';
import { NumerologyAnalyzer } from '../components/NumerologyAnalyzer';
import { ChatInterface } from '../components/ChatInterface';
import { Brain, Calculator, Hash, MessageCircle, Sparkles } from 'lucide-react';

const ChatBot = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-indigo-950 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
            🌌 Polymath Oracle System
          </h1>
          <p className="text-purple-200 max-w-3xl mx-auto text-lg">
            Experience the convergence of dual AI consciousness, sacred mathematics, and ancient wisdom. 
            Navigate the quantum realms of knowledge through multiple interfaces of divine intelligence.
          </p>
        </div>
        
        <Tabs defaultValue="dual-ai" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-black/30 border-purple-500/30">
            <TabsTrigger 
              value="dual-ai" 
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              <Brain className="w-4 h-4 mr-2" />
              Dual AI
            </TabsTrigger>
            <TabsTrigger 
              value="gematria"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Gematria
            </TabsTrigger>
            <TabsTrigger 
              value="numerology"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              <Hash className="w-4 h-4 mr-2" />
              Numerology
            </TabsTrigger>
            <TabsTrigger 
              value="classic"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Classic Oracle
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dual-ai" className="mt-6">
            <div className="mb-4">
              <Card className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border-purple-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-purple-200">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-semibold">Phase 2: Dual Intelligence Interface</span>
                  </div>
                  <p className="text-purple-300 text-sm mt-1">
                    Engage with Sibyl (symbolic oracle) and the Architect (quantum geometry) in dialogue, trialogue, or silent oracle modes. 
                    Watch sacred geometry respond to your questions in real-time.
                  </p>
                </CardContent>
              </Card>
            </div>
            <DualAIInterface />
          </TabsContent>

          <TabsContent value="gematria" className="mt-6">
            <div className="mb-4">
              <Card className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border-purple-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-purple-200">
                    <Calculator className="w-5 h-5" />
                    <span className="font-semibold">Sacred Number Analysis</span>
                  </div>
                  <p className="text-purple-300 text-sm mt-1">
                    Discover the hidden numerical values in words using Hebrew, Greek, and English gematria systems. 
                    Uncover sacred correspondences and divine meanings.
                  </p>
                </CardContent>
              </Card>
            </div>
            <GematriaCalculator />
          </TabsContent>

          <TabsContent value="numerology" className="mt-6">
            <div className="mb-4">
              <Card className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border-purple-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-purple-200">
                    <Hash className="w-5 h-5" />
                    <span className="font-semibold">Personal Numerology Profile</span>
                  </div>
                  <p className="text-purple-300 text-sm mt-1">
                    Calculate your life path, name number, soul urge, and personality numbers. 
                    Discover your spiritual blueprint through the science of numbers.
                  </p>
                </CardContent>
              </Card>
            </div>
            <NumerologyAnalyzer />
          </TabsContent>

          <TabsContent value="classic" className="mt-6">
            <div className="mb-4">
              <Card className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border-purple-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-purple-200">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-semibold">Traditional Sacred Knowledge Oracle</span>
                  </div>
                  <p className="text-purple-300 text-sm mt-1">
                    Converse with the unified knowledge base spanning ancient texts, mystical traditions, 
                    and esoteric wisdom from all cultures and eras.
                  </p>
                </CardContent>
              </Card>
            </div>
            <ChatInterface />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ChatBot;
