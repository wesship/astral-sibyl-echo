
export interface NumerologyNumber {
  number: number;
  name: string;
  meaning: string;
  personality: string;
  strengths: string[];
  challenges: string[];
  spiritualSignificance: string;
  symbolism: string;
  correspondence: {
    planet: string;
    element: string;
    color: string;
    crystal: string;
    tarot: string;
  };
}

export interface NumerologyCalculation {
  type: string;
  description: string;
  calculation: string;
  significance: string;
}

export const numerologyNumbersData: NumerologyNumber[] = [
  {
    number: 1,
    name: "The Leader",
    meaning: "Independence, leadership, new beginnings, originality",
    personality: "Natural born leader, independent, ambitious, pioneering spirit",
    strengths: ["Leadership", "Independence", "Innovation", "Determination", "Courage"],
    challenges: ["Impatience", "Selfishness", "Domination", "Stubbornness", "Isolation"],
    spiritualSignificance: "Unity, the divine source, beginning of all manifestation",
    symbolism: "The point, the individual, the self, divine unity",
    correspondence: {
      planet: "Sun",
      element: "Fire",
      color: "Red",
      crystal: "Ruby",
      tarot: "The Magician"
    }
  },
  {
    number: 2,
    name: "The Diplomat",
    meaning: "Cooperation, partnership, sensitivity, peace-making",
    personality: "Diplomatic, cooperative, sensitive, supportive, intuitive",
    strengths: ["Cooperation", "Diplomacy", "Sensitivity", "Intuition", "Support"],
    challenges: ["Indecision", "Over-sensitivity", "Dependency", "Passivity", "Doubt"],
    spiritualSignificance: "Duality, choice, reflection, the divine feminine",
    symbolism: "The line, partnership, reflection, balance",
    correspondence: {
      planet: "Moon",
      element: "Water",
      color: "Orange",
      crystal: "Moonstone",
      tarot: "The High Priestess"
    }
  },
  {
    number: 3,
    name: "The Creator",
    meaning: "Creativity, expression, communication, joy, optimism",
    personality: "Creative, expressive, optimistic, artistic, communicative",
    strengths: ["Creativity", "Communication", "Optimism", "Artistic ability", "Inspiration"],
    challenges: ["Scattered energy", "Superficiality", "Gossip", "Criticism", "Mood swings"],
    spiritualSignificance: "Trinity, creation, manifestation through word and thought",
    symbolism: "The triangle, creation, expression, synthesis",
    correspondence: {
      planet: "Jupiter",
      element: "Fire",
      color: "Yellow",
      crystal: "Citrine",
      tarot: "The Empress"
    }
  },
  {
    number: 11,
    name: "The Intuitive",
    meaning: "Intuition, inspiration, illumination, spiritual messenger",
    personality: "Highly intuitive, spiritual, inspirational, visionary, sensitive",
    strengths: ["Intuition", "Inspiration", "Spiritual insight", "Healing ability", "Wisdom"],
    challenges: ["Over-sensitivity", "Nervousness", "Impracticality", "Extremes", "Intensity"],
    spiritualSignificance: "Master number representing intuition and spiritual illumination",
    symbolism: "Gateway, pillars of wisdom, spiritual awakening",
    correspondence: {
      planet: "Neptune",
      element: "Water",
      color: "Silver",
      crystal: "Amethyst",
      tarot: "Justice"
    }
  },
  {
    number: 22,
    name: "The Master Builder",
    meaning: "Master building, practical idealism, material mastery",
    personality: "Practical visionary, master builder, disciplined, ambitious",
    strengths: ["Practical vision", "Building ability", "Leadership", "Discipline", "Achievement"],
    challenges: ["Pressure", "Perfectionism", "Overwhelm", "Materialism", "Stress"],
    spiritualSignificance: "Master number representing material mastery and spiritual building",
    symbolism: "The master architect, building heaven on earth",
    correspondence: {
      planet: "Uranus",
      element: "Earth",
      color: "Gold",
      crystal: "Diamond",
      tarot: "The Fool"
    }
  },
  {
    number: 33,
    name: "The Master Teacher",
    meaning: "Master teaching, compassion, healing, spiritual service",
    personality: "Compassionate healer, master teacher, selfless service, spiritual guide",
    strengths: ["Healing", "Teaching", "Compassion", "Service", "Spiritual wisdom"],
    challenges: ["Martyrdom", "Over-responsibility", "Emotional burden", "Sacrifice", "Burnout"],
    spiritualSignificance: "Master number representing the Christ consciousness and unconditional love",
    symbolism: "The master healer, divine compassion, spiritual service",
    correspondence: {
      planet: "Neptune",
      element: "Water",
      color: "Blue-Green",
      crystal: "Emerald",
      tarot: "The World"
    }
  }
];

export const numerologyCalculationsData: NumerologyCalculation[] = [
  {
    type: "Life Path Number",
    description: "Your life's purpose and the lessons you're here to learn",
    calculation: "Add all digits of birth date until single digit (or master number 11, 22, 33)",
    significance: "Reveals your soul's purpose and the main theme of your life journey"
  },
  {
    type: "Expression Number",
    description: "Your natural talents and abilities",
    calculation: "Add numerical values of all letters in your full birth name",
    significance: "Shows how you express yourself and your natural gifts to the world"
  },
  {
    type: "Soul Urge Number",
    description: "Your inner desires and what motivates you",
    calculation: "Add numerical values of vowels in your full birth name",
    significance: "Reveals your heart's desire and what truly fulfills you"
  },
  {
    type: "Personality Number",
    description: "How others perceive you",
    calculation: "Add numerical values of consonants in your full birth name",
    significance: "Shows the mask you wear and how you appear to others"
  }
];
