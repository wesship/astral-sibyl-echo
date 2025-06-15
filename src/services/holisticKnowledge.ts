
import { KnowledgeNode } from '../types/knowledge';
import { soundFrequenciesData } from '../data/soundFrequencies';
import { gematriaSystemsData, sacredGematriaValues } from '../data/gematria';
import { numerologyNumbersData } from '../data/numerology';
import { colorCodesData } from '../data/colorCodes';
import { lightOriginsData } from '../data/lightOrigins';
import { etymologyData } from '../data/etymology';

class HolisticKnowledgeService {
  private holisticNodes: Map<string, KnowledgeNode> = new Map();

  constructor() {
    this.initializeHolisticKnowledge();
  }

  private initializeHolisticKnowledge() {
    // Convert sound frequencies to knowledge nodes
    soundFrequenciesData.forEach(freq => {
      const node: KnowledgeNode = {
        id: `frequency-${freq.frequency}`,
        type: 'practice',
        title: `${freq.frequency} Hz - ${freq.name}`,
        content: `${freq.description} This frequency aligns with the ${freq.chakraAlignment} and has been used in ${freq.ancientUse}. Scientific basis: ${freq.scientificBasis}`,
        connections: ['sound-healing', 'chakra-system', 'frequency-medicine'],
        metadata: {
          origin: 'Sound Healing Tradition',
          category: 'Frequency Healing',
          tags: ['frequency', 'healing', 'sound', 'vibration', freq.chakraAlignment.toLowerCase()],
          significance: `${freq.name} - ${freq.effects.join(', ')}`
        }
      };
      this.holisticNodes.set(node.id, node);
    });

    // Convert gematria to knowledge nodes
    sacredGematriaValues.forEach(gem => {
      const node: KnowledgeNode = {
        id: `gematria-${gem.word.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        type: 'symbol',
        title: `${gem.word} (${gem.value})`,
        content: `${gem.meaning} In ${gem.system} gematria, this sacred word has the numerical value of ${gem.value}. Correspondences: ${gem.correspondences.join(', ')}`,
        connections: ['kabbalah', 'sacred-geometry', 'numerology'],
        metadata: {
          origin: `${gem.system} Tradition`,
          category: 'Sacred Numerology',
          tags: ['gematria', 'numerology', 'sacred-text', gem.system.toLowerCase()],
          significance: `Sacred numerical value revealing divine patterns and correspondences`
        }
      };
      this.holisticNodes.set(node.id, node);
    });

    // Convert numerology to knowledge nodes
    numerologyNumbersData.forEach(num => {
      const node: KnowledgeNode = {
        id: `numerology-${num.number}`,
        type: 'symbol',
        title: `Number ${num.number} - ${num.name}`,
        content: `${num.meaning} Personality: ${num.personality} Spiritual significance: ${num.spiritualSignificance} Symbolism: ${num.symbolism}`,
        connections: ['sacred-geometry', 'gematria', 'astrology'],
        metadata: {
          origin: 'Pythagorean Tradition',
          category: 'Sacred Numerology',
          tags: ['numerology', 'sacred-numbers', 'personality', num.correspondence.planet.toLowerCase()],
          significance: `${num.name} - Planetary correspondence: ${num.correspondence.planet}`
        }
      };
      this.holisticNodes.set(node.id, node);
    });

    // Convert color codes to knowledge nodes
    colorCodesData.forEach(color => {
      const node: KnowledgeNode = {
        id: `color-${color.color.toLowerCase()}`,
        type: 'symbol',
        title: `${color.color} Light (${color.frequency} THz)`,
        content: `${color.meaning} Wavelength: ${color.wavelength}nm. Spiritual significance: ${color.spiritualSignificance} Healing properties: ${color.healingProperties.join(', ')}`,
        connections: ['chakra-system', 'light-therapy', 'color-healing'],
        metadata: {
          origin: 'Color Science & Mysticism',
          category: 'Light Spectrum',
          tags: ['color', 'light', 'frequency', 'chakra', color.chakraAssociation.toLowerCase()],
          significance: `${color.chakraAssociation} - ${color.meaning}`
        }
      };
      this.holisticNodes.set(node.id, node);
    });

    // Convert light origins to knowledge nodes
    lightOriginsData.forEach(light => {
      const node: KnowledgeNode = {
        id: `light-${light.concept.toLowerCase().replace(/\s+/g, '-')}`,
        type: 'text',
        title: light.concept,
        content: `${light.description} Scientific origin: ${light.scientificOrigin} Spiritual origin: ${light.spiritualOrigin} Quantum perspective: ${light.quantumPerspective}`,
        connections: ['quantum-physics', 'consciousness-studies', 'sacred-science'],
        metadata: {
          origin: 'Quantum Physics & Mysticism',
          category: 'Light Science',
          tags: ['light', 'quantum', 'consciousness', 'physics', 'spirituality'],
          significance: light.significance
        }
      };
      this.holisticNodes.set(node.id, node);
    });

    // Convert etymology to knowledge nodes
    etymologyData.forEach(word => {
      const node: KnowledgeNode = {
        id: `etymology-${word.word.toLowerCase()}`,
        type: 'text',
        title: `Etymology: ${word.word}`,
        content: `Modern meaning: ${word.modernMeaning} Etymology: ${word.etymology} Original meaning: ${word.originalMeaning} Spiritual significance: ${word.spiritualSignificance} Numerological value: ${word.numerologicalValue}`,
        connections: ['sacred-language', 'linguistics', 'mythology'],
        metadata: {
          origin: word.rootLanguage,
          category: 'Sacred Etymology',
          tags: ['etymology', 'language', 'words', 'meaning', word.rootLanguage.toLowerCase()],
          significance: `${word.word} - ${word.spiritualSignificance}`
        }
      };
      this.holisticNodes.set(node.id, node);
    });

    console.log(`Holistic knowledge initialized with ${this.holisticNodes.size} nodes`);
  }

  searchHolisticKnowledge(query: string): KnowledgeNode[] {
    const searchTerms = query.toLowerCase().split(' ');
    const results: KnowledgeNode[] = [];

    for (const node of this.holisticNodes.values()) {
      const searchableText = `${node.title} ${node.content} ${node.metadata.tags.join(' ')}`.toLowerCase();
      
      if (searchTerms.some(term => searchableText.includes(term))) {
        results.push(node);
      }
    }

    return results.slice(0, 8);
  }

  getRandomHolisticNode(): KnowledgeNode | null {
    const nodes = Array.from(this.holisticNodes.values());
    return nodes[Math.floor(Math.random() * nodes.length)] || null;
  }

  getAllHolisticNodes(): KnowledgeNode[] {
    return Array.from(this.holisticNodes.values());
  }
}

export const holisticKnowledge = new HolisticKnowledgeService();
