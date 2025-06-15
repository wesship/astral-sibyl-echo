
export interface TarotCard {
  id: number;
  name: string;
  suit: string;
  element: string;
  meaning: string;
  description: string;
  reversed: string;
  symbolism: string;
}

export const tarotData: TarotCard[] = [
  {
    id: 0,
    name: "The Fool",
    suit: "Major Arcana",
    element: "Air",
    meaning: "New beginnings, innocence, spontaneity, free spirit",
    description: "The Fool represents a new journey, optimism, and taking a leap of faith. It signifies the beginning of a spiritual journey and trusting in the universe.",
    reversed: "Recklessness, taken advantage of, inconsideration, foolishness",
    symbolism: "The white rose represents purity, the cliff represents the leap of faith, and the dog represents loyalty and protection."
  },
  {
    id: 1,
    name: "The Magician",
    suit: "Major Arcana",
    element: "Air",
    meaning: "Manifestation, resourcefulness, power, inspired action",
    description: "The Magician represents the power to manifest your desires through focused will and determination. You have all the tools you need to succeed.",
    reversed: "Manipulation, poor planning, untapped talents, illusion",
    symbolism: "The infinity symbol represents unlimited potential, while the four suit symbols show mastery over all elements."
  },
  {
    id: 2,
    name: "The High Priestess",
    suit: "Major Arcana",
    element: "Water",
    meaning: "Intuition, sacred knowledge, divine feminine, subconscious mind",
    description: "The High Priestess represents inner wisdom, intuitive knowledge, and the divine feminine. She encourages you to trust your intuition.",
    reversed: "Secrets, disconnected from intuition, withdrawal, repressed feelings",
    symbolism: "The pillars represent duality and balance, while the veil represents hidden knowledge and mysteries."
  },
  {
    id: 3,
    name: "The Empress",
    suit: "Major Arcana",
    element: "Earth",
    meaning: "Femininity, beauty, nature, abundance, motherhood",
    description: "The Empress represents abundance, nurturing, and creative expression. She embodies the archetypal mother and connection to nature.",
    reversed: "Creative block, dependence on others, smothering, lack of growth",
    symbolism: "The wheat represents fertility and abundance, while the crown of stars represents divine connection."
  },
  {
    id: 4,
    name: "The Emperor",
    suit: "Major Arcana",
    element: "Fire",
    meaning: "Authority, establishment, structure, father figure",
    description: "The Emperor represents leadership, authority, and structure. He provides stability through rules, systems, and logical thinking.",
    reversed: "Tyranny, rigidity, coldness, domination",
    symbolism: "The throne represents authority and power, while the ram heads symbolize determination and leadership."
  }
];
