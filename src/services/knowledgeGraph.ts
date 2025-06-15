
import { KnowledgeNode } from '../types/knowledge';
import { holyScrollsData } from '../data/holyScrolls';

// Simple tarot and runes data for the knowledge graph
const simpleTarotData = [
  { id: 'fool', name: 'The Fool', meaning: 'New beginnings, innocence, spontaneity', suit: 'Major Arcana', element: 'Air' },
  { id: 'magician', name: 'The Magician', meaning: 'Manifestation, resourcefulness, power', suit: 'Major Arcana', element: 'Air' },
  { id: 'high-priestess', name: 'The High Priestess', meaning: 'Intuition, sacred knowledge, divine feminine', suit: 'Major Arcana', element: 'Water' }
];

const simpleRunesData = [
  { name: 'Fehu', meaning: 'Wealth, abundance, success', description: 'Material prosperity and new beginnings', symbolism: 'Cattle, moveable wealth' },
  { name: 'Uruz', meaning: 'Strength, vitality, determination', description: 'Raw strength and primal energy', symbolism: 'Wild ox, untamed power' },
  { name: 'Thurisaz', meaning: 'Protection, defense, conflict', description: 'Protective force and defensive action', symbolism: 'Thorn, Thor\'s hammer' }
];

class KnowledgeGraph {
  private nodes: Map<string, KnowledgeNode> = new Map();
  private connections: Map<string, Set<string>> = new Map();

  constructor() {
    this.initializeGraph();
  }

  private initializeGraph() {
    // Load all knowledge data
    const allNodes = [
      ...holyScrollsData,
      ...this.convertTarotToNodes(),
      ...this.convertRunesToNodes()
    ];

    allNodes.forEach(node => {
      this.nodes.set(node.id, node);
      this.connections.set(node.id, new Set(node.connections));
    });

    console.log(`Knowledge graph initialized with ${this.nodes.size} nodes`);
  }

  private convertTarotToNodes(): KnowledgeNode[] {
    return simpleTarotData.map(card => ({
      id: `tarot-${card.id}`,
      type: 'symbol' as const,
      title: card.name,
      content: `${card.meaning} - Tarot card from the ${card.suit}.`,
      connections: [`tarot-suit-${card.suit}`, 'tarot-system'],
      metadata: {
        origin: 'Tarot Tradition',
        category: 'Divination',
        tags: ['tarot', card.suit, card.element],
        significance: `${card.name} represents ${card.meaning}`
      }
    }));
  }

  private convertRunesToNodes(): KnowledgeNode[] {
    return simpleRunesData.map(rune => ({
      id: `rune-${rune.name.toLowerCase()}`,
      type: 'symbol' as const,
      title: rune.name,
      content: `${rune.meaning} - ${rune.description}`,
      connections: ['norse-mythology', 'rune-system'],
      metadata: {
        origin: 'Norse Tradition',
        category: 'Divination',
        tags: ['runes', 'norse', 'divination'],
        significance: rune.symbolism
      }
    }));
  }

  searchNodes(query: string): KnowledgeNode[] {
    const searchTerms = query.toLowerCase().split(' ');
    const results: KnowledgeNode[] = [];

    for (const node of this.nodes.values()) {
      const searchableText = `${node.title} ${node.content} ${node.metadata.tags.join(' ')}`.toLowerCase();
      
      if (searchTerms.some(term => searchableText.includes(term))) {
        results.push(node);
      }
    }

    return results.slice(0, 10); // Limit results
  }

  getConnectedNodes(nodeId: string): KnowledgeNode[] {
    const connections = this.connections.get(nodeId);
    if (!connections) return [];

    return Array.from(connections)
      .map(id => this.nodes.get(id))
      .filter((node): node is KnowledgeNode => node !== undefined);
  }

  getRandomNode(): KnowledgeNode | null {
    const nodes = Array.from(this.nodes.values());
    return nodes[Math.floor(Math.random() * nodes.length)] || null;
  }

  getNodeById(id: string): KnowledgeNode | null {
    return this.nodes.get(id) || null;
  }
}

export const knowledgeGraph = new KnowledgeGraph();
