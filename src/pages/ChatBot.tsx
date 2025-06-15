
import React from 'react';
import { ChatInterface } from '../components/ChatInterface';

const ChatBot = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-indigo-950 py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
            🔮 Sacred Knowledge Oracle
          </h1>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Converse with the ancient wisdom of the ages. Ask about holy scrolls, mystical practices, 
            divine texts, and esoteric knowledge spanning all traditions and cultures.
          </p>
        </div>
        
        <ChatInterface />
      </div>
    </div>
  );
};

export default ChatBot;
