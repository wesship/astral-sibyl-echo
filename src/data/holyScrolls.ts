
import { KnowledgeNode } from '../types/knowledge';

export const holyScrollsData: KnowledgeNode[] = [
  {
    id: 'emerald-tablet',
    type: 'scroll',
    title: 'The Emerald Tablet of Hermes',
    content: `"As above, so below; as below, so above." The fundamental principle of hermetic philosophy that reveals the correspondence between the macrocosm and microcosm. This sacred text teaches that understanding the patterns of the universe allows one to understand the patterns within oneself.`,
    connections: ['hermetic-principles', 'alchemy-basics', 'astrology-correspondence'],
    metadata: {
      origin: 'Hermetic Tradition',
      category: 'Sacred Text',
      tags: ['hermeticism', 'alchemy', 'correspondence', 'ancient-wisdom'],
      significance: 'Foundation of Western esoteric tradition'
    }
  },
  {
    id: 'book-of-thoth',
    type: 'codex',
    title: 'The Book of Thoth',
    content: `Sacred Egyptian text attributed to Thoth, the god of wisdom and writing. Contains the secrets of divine magic, the nature of reality, and the path to enlightenment. The book describes 78 principles corresponding to the Tarot archetypes, teaching that all knowledge exists within the seeker.`,
    connections: ['egyptian-mythology', 'tarot-origins', 'divine-wisdom'],
    metadata: {
      origin: 'Ancient Egypt',
      category: 'Divine Codex',
      tags: ['thoth', 'egyptian-magic', 'tarot', 'divine-knowledge'],
      significance: 'Source of Tarot wisdom and Egyptian magic'
    }
  },
  {
    id: 'sefer-yetzirah',
    type: 'codex',
    title: 'Sefer Yetzirah (Book of Creation)',
    content: `Ancient Kabbalistic text describing how God created the universe through 32 paths of wisdom - 10 Sefirot and 22 Hebrew letters. Each letter corresponds to cosmic forces and divine emanations. The text reveals the mystical structure underlying all existence.`,
    connections: ['kabbalah-tree', 'hebrew-letters', 'divine-emanations'],
    metadata: {
      origin: 'Jewish Mysticism',
      category: 'Kabbalistic Text',
      tags: ['kabbalah', 'creation', 'sefirot', 'hebrew-mysticism'],
      significance: 'Foundation of Kabbalistic understanding'
    }
  },
  {
    id: 'corpus-hermeticum',
    type: 'scroll',
    title: 'Corpus Hermeticum',
    content: `Collection of 17 Greek and Latin texts attributed to Hermes Trismegistus. Contains dialogues on divine nature, gnosis, and the path of spiritual ascension. Teaches that humans contain a divine spark and can achieve union with the divine through knowledge and practice.`,
    connections: ['hermetic-principles', 'gnostic-wisdom', 'divine-spark'],
    metadata: {
      origin: 'Greco-Egyptian',
      category: 'Hermetic Collection',
      tags: ['hermes-trismegistus', 'gnosis', 'divine-union', 'spiritual-ascension'],
      significance: 'Core text of Western esotericism'
    }
  },
  {
    id: 'tibetan-book-dead',
    type: 'codex',
    title: 'Bardo Thodol (Tibetan Book of the Dead)',
    content: `Sacred Tibetan text guiding consciousness through the intermediate states (bardos) between death and rebirth. Describes the journey of the soul through various realms and provides instructions for achieving liberation or favorable rebirth.`,
    connections: ['tibetan-buddhism', 'consciousness-states', 'death-transition'],
    metadata: {
      origin: 'Tibetan Buddhism',
      category: 'Death Manual',
      tags: ['bardo', 'consciousness', 'death', 'rebirth', 'liberation'],
      significance: 'Guide for consciousness transition'
    }
  },
  {
    id: 'golden-dawn-cipher',
    type: 'scroll',
    title: 'Golden Dawn Cipher Manuscripts',
    content: `Encrypted magical instructions forming the foundation of the Hermetic Order of the Golden Dawn. Contains rituals, correspondences, and magical techniques synthesizing Kabbalah, Tarot, astrology, and ceremonial magic into a complete system of spiritual development.`,
    connections: ['golden-dawn-system', 'ceremonial-magic', 'magical-correspondences'],
    metadata: {
      origin: 'Golden Dawn Order',
      category: 'Magical Manual',
      tags: ['golden-dawn', 'ceremonial-magic', 'initiation', 'magical-system'],
      significance: 'Modern magical system foundation'
    }
  }
];
