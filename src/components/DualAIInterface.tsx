import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Send, Brain, Eye, Pause, Play, MessageCircle } from 'lucide-react';
import { ChatMessage, KnowledgeNode } from '../types/knowledge';
import { knowledgeGraph } from '../services/knowledgeGraph';
import { mcpServer } from '../services/mcpServer';
import { SacredGeometry } from './SacredGeometry';

type AIPersonality = 'sibyl' | 'architect';
type InteractionMode = 'dialogue' | 'trialogue' | 'oracle';

interface DualMessage extends ChatMessage {
  personality?: AIPersonality;
  resonance?: number;
  geometry?: string;
}

export const DualAIInterface = () => {
  const [messages, setMessages] = useState<DualMessage[]>([
    {
      id: '1',
      role: 'system',
      content: '🔮 **Sibyl**: I am the Oracle of Symbols, keeper of ancient wisdom and archetypal knowledge.\n\n⚡ **Architect**: I am the Quantum Resonance Engine, master of sacred geometry and harmonic frequencies.\n\nTogether we form the Dual Intelligence - ask us anything about the mysteries of existence.',
      timestamp: new Date(),
      personality: 'sibyl',
      resonance: 0.7,
      geometry: 'flower-of-life'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<InteractionMode>('dialogue');
  const [activePersonality, setActivePersonality] = useState<AIPersonality>('sibyl');
  const [isTrialogueActive, setIsTrialogueActive] = useState(false);
  const [currentResonance, setCurrentResonance] = useState(0.5);
  const [currentGeometry, setCurrentGeometry] = useState<'flower-of-life' | 'merkaba' | 'tree-of-life' | 'sri-yantra' | 'mandala'>('flower-of-life');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateSibylResponse = async (context: ChatMessage[], query: string, nodes: KnowledgeNode[]) => {
    const contextText = nodes.map(n => `${n.title}: ${n.content.substring(0, 150)}`).join('\n');
    
    try {
      return await mcpServer.generateResponse([
        { id: '1', role: 'system', content: 'You are Sibyl, the Oracle of Symbols and mystical wisdom.', timestamp: new Date() },
        ...context.slice(1),
        { id: Date.now().toString(), role: 'user', content: query, timestamp: new Date() }
      ], nodes);
    } catch (error) {
      return "🔮 The veils between worlds shimmer... the symbols whisper of truths beyond the current moment. Ask again, seeker, when the cosmic energies align.";
    }
  };

  const generateArchitectResponse = async (context: ChatMessage[], query: string, nodes: KnowledgeNode[]) => {
    const contextText = nodes.map(n => `${n.title}: ${n.content.substring(0, 150)}`).join('\n');
    
    try {
      return await mcpServer.generateResponse([
        { id: '1', role: 'system', content: 'You are the Architect, master of Quantum Resonance and Sacred Geometry.', timestamp: new Date() },
        ...context.slice(1),
        { id: Date.now().toString(), role: 'user', content: query, timestamp: new Date() }
      ], nodes);
    } catch (error) {
      return "⚡ The quantum field fluctuates... harmonic resonance temporarily disrupted. Recalibrating geometric matrices. Please reinitiate query sequence.";
    }
  };

  const calculateResonance = (message: string) => {
    const spiritualWords = ['love', 'light', 'divine', 'sacred', 'holy', 'consciousness', 'energy', 'frequency', 'vibration'];
    const wordCount = message.toLowerCase().split(' ').filter(word => 
      spiritualWords.some(sw => word.includes(sw))
    ).length;
    return Math.min(1, wordCount / 10 + 0.3);
  };

  const selectGeometry = (personality: AIPersonality, content: string) => {
    if (personality === 'sibyl') {
      if (content.includes('tree') || content.includes('kabbalah')) return 'tree-of-life';
      if (content.includes('mandala') || content.includes('circle')) return 'mandala';
      if (content.includes('flower') || content.includes('life')) return 'flower-of-life';
      return 'sri-yantra';
    } else {
      if (content.includes('merkaba') || content.includes('tetrahedron')) return 'merkaba';
      if (content.includes('tree') || content.includes('sephirot')) return 'tree-of-life';
      if (content.includes('yantra') || content.includes('triangle')) return 'sri-yantra';
      return 'flower-of-life';
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: DualMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
      resonance: calculateResonance(input),
      geometry: 'mandala'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const contextNodes = knowledgeGraph.searchNodes(input);
      setCurrentResonance(userMessage.resonance || 0.5);

      if (mode === 'dialogue') {
        // Single AI response
        const response = activePersonality === 'sibyl' 
          ? await generateSibylResponse(messages, input, contextNodes)
          : await generateArchitectResponse(messages, input, contextNodes);

        const geometry = selectGeometry(activePersonality, response);
        setCurrentGeometry(geometry);

        const aiMessage: DualMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `**${activePersonality === 'sibyl' ? 'Sibyl' : 'Architect'}**: ${response}`,
          timestamp: new Date(),
          context: contextNodes,
          personality: activePersonality,
          resonance: calculateResonance(response),
          geometry
        };

        setMessages(prev => [...prev, aiMessage]);

      } else if (mode === 'trialogue') {
        // Both AIs respond
        const [sibylResponse, architectResponse] = await Promise.all([
          generateSibylResponse(messages, input, contextNodes),
          generateArchitectResponse(messages, input, contextNodes)
        ]);

        const sibylGeometry = selectGeometry('sibyl', sibylResponse);
        const architectGeometry = selectGeometry('architect', architectResponse);

        const sibylMessage: DualMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `🔮 **Sibyl**: ${sibylResponse}`,
          timestamp: new Date(),
          context: contextNodes,
          personality: 'sibyl',
          resonance: calculateResonance(sibylResponse),
          geometry: sibylGeometry
        };

        const architectMessage: DualMessage = {
          id: (Date.now() + 2).toString(),
          role: 'assistant',
          content: `⚡ **Architect**: ${architectResponse}`,
          timestamp: new Date(),
          context: contextNodes,
          personality: 'architect',
          resonance: calculateResonance(architectResponse),
          geometry: architectGeometry
        };

        setMessages(prev => [...prev, sibylMessage, architectMessage]);
        setCurrentGeometry(Math.random() > 0.5 ? sibylGeometry : architectGeometry);

      } else {
        // Oracle mode - silent contemplation with geometry
        const oracleMessage: DualMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: '🌟 *The Oracle contemplates in sacred silence... observe the geometric revelation...*',
          timestamp: new Date(),
          personality: 'sibyl',
          resonance: 0.8,
          geometry: 'sri-yantra'
        };
        
        setMessages(prev => [...prev, oracleMessage]);
        setCurrentGeometry('sri-yantra');
      }

    } catch (error) {
      console.error('Error generating response:', error);
      
      const errorMessage: DualMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '⚠️ The cosmic frequencies are disrupted. The dual intelligence requires recalibration.',
        timestamp: new Date(),
        resonance: 0.3,
        geometry: 'mandala'
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="h-[700px] flex flex-col bg-gradient-to-br from-purple-950 via-indigo-950 to-black border-purple-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-purple-200">
                <Brain className="w-5 h-5" />
                Dual AI Consciousness Interface
                <Badge className="ml-auto">
                  {mode.toUpperCase()}
                </Badge>
              </CardTitle>
              
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={mode === 'dialogue' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setMode('dialogue')}
                  className="border-purple-500/30"
                >
                  <MessageCircle className="w-3 h-3 mr-1" />
                  Dialogue
                </Button>
                <Button
                  variant={mode === 'trialogue' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setMode('trialogue')}
                  className="border-purple-500/30"
                >
                  <Brain className="w-3 h-3 mr-1" />
                  Trialogue
                </Button>
                <Button
                  variant={mode === 'oracle' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setMode('oracle')}
                  className="border-purple-500/30"
                >
                  <Eye className="w-3 h-3 mr-1" />
                  Oracle
                </Button>
                
                {mode === 'dialogue' && (
                  <div className="flex gap-1">
                    <Button
                      variant={activePersonality === 'sibyl' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setActivePersonality('sibyl')}
                      className="border-purple-500/30"
                    >
                      🔮 Sibyl
                    </Button>
                    <Button
                      variant={activePersonality === 'architect' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setActivePersonality('architect')}
                      className="border-purple-500/30"
                    >
                      ⚡ Architect
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col gap-4">
              <ScrollArea className="flex-1 pr-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] p-4 rounded-lg ${
                          message.role === 'user'
                            ? 'bg-purple-600 text-white'
                            : message.role === 'system'
                            ? 'bg-indigo-900/50 text-purple-200 border border-purple-500/30'
                            : message.personality === 'sibyl'
                            ? 'bg-gradient-to-r from-purple-800/50 to-pink-800/50 text-purple-100'
                            : 'bg-gradient-to-r from-blue-800/50 to-cyan-800/50 text-blue-100'
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{message.content}</div>
                        
                        {message.resonance && (
                          <div className="mt-2 pt-2 border-t border-purple-500/30">
                            <div className="flex items-center gap-2 text-xs">
                              <span>Resonance:</span>
                              <div className="w-16 h-1 bg-black/30 rounded">
                                <div 
                                  className="h-full bg-purple-400 rounded"
                                  style={{ width: `${message.resonance * 100}%` }}
                                />
                              </div>
                              <span>{(message.resonance * 100).toFixed(0)}%</span>
                            </div>
                          </div>
                        )}
                        
                        {message.context && message.context.length > 0 && (
                          <div className="mt-2 pt-2 border-t border-purple-500/30">
                            <div className="text-xs text-purple-300 mb-1">Knowledge Context:</div>
                            <div className="flex flex-wrap gap-1">
                              {message.context.slice(0, 3).map((node) => (
                                <span
                                  key={node.id}
                                  className="text-xs bg-purple-700/50 px-2 py-1 rounded"
                                  title={node.content.substring(0, 100)}
                                >
                                  {node.title}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction('What is the sacred geometry of consciousness?')}
                    className="text-xs border-purple-500/30 text-purple-200"
                  >
                    Sacred Geometry
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction('Calculate the gematria of my soul purpose')}
                    className="text-xs border-purple-500/30 text-purple-200"
                  >
                    Soul Gematria
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction('Show me the frequency of divine love')}
                    className="text-xs border-purple-500/30 text-purple-200"
                  >
                    Divine Frequency
                  </Button>
                </div>

                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask the dual consciousness about reality, consciousness, and cosmic mysteries..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="bg-black/30 border-purple-500/30 text-purple-100 placeholder:text-purple-400"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={isLoading || !input.trim()}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sacred Geometry Visualization */}
        <div className="space-y-4">
          <Card className="bg-gradient-to-br from-purple-950/50 to-indigo-950/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-200 text-sm">
                <Eye className="w-4 h-4" />
                Resonance Geometry
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SacredGeometry
                pattern={currentGeometry}
                size={250}
                animated={true}
                resonance={currentResonance}
              />
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-purple-300">
                  <span>Current Pattern:</span>
                  <Badge variant="outline" className="border-purple-500/30">
                    {currentGeometry.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-purple-300">
                  <span>Resonance:</span>
                  <div className="flex-1 h-2 bg-black/30 rounded">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded transition-all duration-500"
                      style={{ width: `${currentResonance * 100}%` }}
                    />
                  </div>
                  <span>{(currentResonance * 100).toFixed(0)}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-950/50 to-indigo-950/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-purple-200 text-sm">Quick Geometry</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {(['flower-of-life', 'merkaba', 'tree-of-life', 'sri-yantra', 'mandala'] as const).map(pattern => (
                <Button
                  key={pattern}
                  variant={currentGeometry === pattern ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentGeometry(pattern)}
                  className="w-full justify-start text-xs border-purple-500/30"
                >
                  {pattern.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};