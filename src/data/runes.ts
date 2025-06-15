
export interface RuneStone {
  name: string;
  symbol: string;
  meaning: string;
  description: string;
  symbolism: string;
  element: string;
}

export const runesData: RuneStone[] = [
  {
    name: "Fehu",
    symbol: "ᚠ",
    meaning: "Wealth, abundance, success, new beginnings",
    description: "Fehu represents material wealth, success in endeavors, and the energy needed to start new projects. It signifies prosperity and achievement.",
    symbolism: "Originally meaning cattle, it represents moveable wealth and the power of prosperity.",
    element: "Fire"
  },
  {
    name: "Uruz",
    symbol: "ᚢ",
    meaning: "Strength, vitality, determination, wild energy",
    description: "Uruz embodies raw strength, vitality, and the primal force of life. It represents physical and mental endurance and the will to overcome obstacles.",
    symbolism: "The aurochs (wild ox) represents untamed strength and the power of nature.",
    element: "Earth"
  },
  {
    name: "Thurisaz",
    symbol: "ᚦ",
    meaning: "Protection, defense, conflict, Thor's hammer",
    description: "Thurisaz represents protective force, defensive action, and the power to overcome enemies. It can indicate conflict but also the strength to prevail.",
    symbolism: "The thorn or giant represents protection through strength and the hammer of Thor.",
    element: "Fire"
  },
  {
    name: "Ansuz",
    symbol: "ᚨ",
    meaning: "Communication, wisdom, divine message, inspiration",
    description: "Ansuz represents divine communication, wisdom from the gods, and inspiration. It signifies receiving important messages or guidance.",
    symbolism: "Associated with Odin, it represents divine wisdom and the power of the spoken word.",
    element: "Air"
  },
  {
    name: "Raidho",
    symbol: "ᚱ",
    meaning: "Journey, travel, progress, rhythm",
    description: "Raidho represents journeys both physical and spiritual, progress towards goals, and the rhythm of life. It signifies movement and positive change.",
    symbolism: "The wagon wheel represents the journey of life and forward movement.",
    element: "Air"
  },
  {
    name: "Kenaz",
    symbol: "ᚲ",
    meaning: "Knowledge, creativity, inspiration, torch",
    description: "Kenaz represents the flame of knowledge, creative inspiration, and inner wisdom. It signifies learning and enlightenment.",
    symbolism: "The torch represents the light of knowledge dispelling darkness and ignorance.",
    element: "Fire"
  }
];
