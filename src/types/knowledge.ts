
export interface KnowledgeNode {
  id: string;
  type: 'text' | 'scroll' | 'codex' | 'symbol' | 'deity' | 'practice';
  title: string;
  content: string;
  connections: string[];
  metadata: {
    origin: string;
    category: string;
    tags: string[];
    significance: string;
  };
}

export interface McpServerConfig {
  endpoint: string;
  apiKey?: string;
  model: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  context?: KnowledgeNode[];
}
