
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, BookOpen, Scroll, Eye } from 'lucide-react';
import { ChatMessage, KnowledgeNode } from '../types/knowledge';
import { knowledgeGraph } from '../services/knowledgeGraph';
import { mcpServer } from '../services/mcpServer';

export const ChatInterface = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'system',
      content: '🌟 Welcome, seeker of ancient wisdom. I am connected to the sacred knowledge of the ages - from the Emerald Tablet to the Book of Thoth, from Norse runes to Kabbalistic mysteries. Ask me anything about the occult, spiritual practices, or ancient wisdom.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const connectToServer = async () => {
      const connected = await mcpServer.connect();
      setIsConnected(connected);
    };
    connectToServer();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Search for relevant knowledge nodes
      const contextNodes = knowledgeGraph.searchNodes(input);
      
      // Generate AI response
      const response = await mcpServer.generateResponse([...messages, userMessage], contextNodes);
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
        context: contextNodes
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '🔮 The mystic energies are disrupted. Please try again, seeker.',
        timestamp: new Date()
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
    <div className="max-w-4xl mx-auto p-4">
      <Card className="h-[600px] flex flex-col bg-gradient-to-br from-purple-950 via-indigo-950 to-black border-purple-500/30">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-purple-200">
            <Eye className="w-5 h-5" />
            Sacred Knowledge Chatbot
            <div className={`ml-auto w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`} />
          </CardTitle>
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
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-purple-600 text-white'
                        : message.role === 'system'
                        ? 'bg-indigo-900/50 text-purple-200 border border-purple-500/30'
                        : 'bg-gray-800 text-gray-200'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    {message.context && message.context.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-purple-500/30">
                        <div className="text-xs text-purple-300 mb-1">Related Knowledge:</div>
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
                onClick={() => handleQuickAction('Tell me about the Emerald Tablet')}
                className="text-xs border-purple-500/30 text-purple-200 hover:bg-purple-900/50"
              >
                <Scroll className="w-3 h-3 mr-1" />
                Emerald Tablet
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuickAction('What do the Norse runes reveal about my path?')}
                className="text-xs border-purple-500/30 text-purple-200 hover:bg-purple-900/50"
              >
                <BookOpen className="w-3 h-3 mr-1" />
                Rune Reading
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuickAction('Explain Kabbalistic Tree of Life')}
                className="text-xs border-purple-500/30 text-purple-200 hover:bg-purple-900/50"
              >
                <Eye className="w-3 h-3 mr-1" />
                Kabbalah
              </Button>
            </div>

            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about ancient wisdom, sacred texts, or mystical practices..."
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
  );
};
