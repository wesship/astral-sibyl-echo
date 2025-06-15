
export interface SoundFrequency {
  frequency: number;
  name: string;
  description: string;
  effects: string[];
  chakraAlignment: string;
  scientificBasis: string;
  ancientUse: string;
  healing: string[];
}

export const soundFrequenciesData: SoundFrequency[] = [
  {
    frequency: 528,
    name: "Love Frequency / Miracle Tone",
    description: "Known as the 'Love Frequency' or 'Miracle Tone', believed to repair DNA and bring transformation.",
    effects: ["DNA repair", "Increased energy", "Clarity of mind", "Peace and love"],
    chakraAlignment: "Heart Chakra",
    scientificBasis: "Studies suggest 528 Hz can reduce stress hormones and increase life energy",
    ancientUse: "Used in Gregorian chants and ancient spiritual ceremonies",
    healing: ["Emotional healing", "Physical regeneration", "Stress reduction", "Enhanced creativity"]
  },
  {
    frequency: 432,
    name: "Natural Frequency / Earth Tone",
    description: "Mathematically consistent with the universe, resonates with the Schumann resonance of Earth.",
    effects: ["Deep relaxation", "Enhanced meditation", "Connection to nature", "Mental clarity"],
    chakraAlignment: "All Chakras",
    scientificBasis: "Aligns with natural mathematical ratios found in nature and cosmic frequencies",
    ancientUse: "Tuning used by ancient civilizations and classical composers",
    healing: ["Nervous system balance", "Blood pressure regulation", "Enhanced intuition"]
  },
  {
    frequency: 396,
    name: "Liberation Frequency",
    description: "Associated with liberating guilt and fear, turning grief into joy.",
    effects: ["Release of fear", "Guilt elimination", "Emotional cleansing", "Inner peace"],
    chakraAlignment: "Root Chakra",
    scientificBasis: "Helps balance the autonomic nervous system",
    ancientUse: "Part of ancient Solfeggio frequencies used in sacred music",
    healing: ["Trauma release", "Anxiety reduction", "Grounding", "Security enhancement"]
  },
  {
    frequency: 741,
    name: "Consciousness Expansion",
    description: "Promotes intuition, awakening of intuition, and solving problems.",
    effects: ["Enhanced intuition", "Problem solving", "Creativity boost", "Self-expression"],
    chakraAlignment: "Throat Chakra",
    scientificBasis: "Stimulates brain waves associated with creative thinking",
    ancientUse: "Used in monastery chants for spiritual awakening",
    healing: ["Communication enhancement", "Creative blocks removal", "Self-confidence"]
  },
  {
    frequency: 852,
    name: "Third Eye Activation",
    description: "Returns to spiritual order, awakens intuition and helps see through illusions.",
    effects: ["Spiritual awakening", "Enhanced perception", "Intuitive insights", "Inner knowing"],
    chakraAlignment: "Third Eye Chakra",
    scientificBasis: "May influence pineal gland function and melatonin production",
    ancientUse: "Sacred frequency in Tibetan singing bowls",
    healing: ["Psychic abilities", "Meditation enhancement", "Clarity of vision"]
  },
  {
    frequency: 963,
    name: "Divine Connection",
    description: "Frequency of the Gods, connects to higher consciousness and divine realms.",
    effects: ["Divine connection", "Spiritual transcendence", "Unity consciousness", "Enlightenment"],
    chakraAlignment: "Crown Chakra",
    scientificBasis: "Associated with gamma brain waves and states of expanded consciousness",
    ancientUse: "Used in highest spiritual practices across cultures",
    healing: ["Spiritual awakening", "Consciousness expansion", "Divine alignment"]
  }
];
