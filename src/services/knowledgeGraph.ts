
import { KnowledgeNode } from '../types/knowledge';
import { holyScrollsData } from '../data/holyScrolls';
import { tarotData } from '../data/tarot';
import { runesData } from '../data/runes';

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
    return tarotData.map(card => ({
      id: `tarot-${card.id}`,
      type: 'symbol' as const,
      title: card.name,
      content: `${card.meaning} - ${card.description}. Reversed: ${card.reversed}`,
      connections: [`tarot-suit-${card.suit}`, 'tarot-system'],
      metadata: {
        origin: 'Tarot Tradition',
        category: 'Divination',
        tags: ['tarot', card.suit, card.element],
        significance: card.symbolism
      }
    }));
  }

  private convertRunesToNodes(): KnowledgeNode[] {
    return runesData.map(rune => ({
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
