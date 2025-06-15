
export interface GematriaSystem {
  name: string;
  origin: string;
  description: string;
  alphabet: { [key: string]: number };
  significance: string;
}

export interface GematriaCalculation {
  word: string;
  value: number;
  system: string;
  meaning: string;
  correspondences: string[];
}

export const gematriaSystemsData: GematriaSystem[] = [
  {
    name: "Hebrew Gematria",
    origin: "Ancient Hebrew Tradition",
    description: "The original gematria system using Hebrew alphabet numerical values",
    alphabet: {
      "א": 1, "ב": 2, "ג": 3, "ד": 4, "ה": 5, "ו": 6, "ז": 7, "ח": 8, "ט": 9, "י": 10,
      "כ": 20, "ל": 30, "מ": 40, "נ": 50, "ס": 60, "ע": 70, "פ": 80, "צ": 90, "ק": 100,
      "ר": 200, "ש": 300, "ת": 400
    },
    significance: "Foundation of Kabbalistic numerology and divine name analysis"
  },
  {
    name: "English Gematria (Simple)",
    origin: "Modern Western Tradition",
    description: "A=1, B=2, C=3... Z=26 system for English alphabet",
    alphabet: {
      "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, "I": 9, "J": 10,
      "K": 11, "L": 12, "M": 13, "N": 14, "O": 15, "P": 16, "Q": 17, "R": 18, "S": 19, "T": 20,
      "U": 21, "V": 22, "W": 23, "X": 24, "Y": 25, "Z": 26
    },
    significance: "Modern adaptation for analyzing English words and names"
  },
  {
    name: "Greek Isopsephy",
    origin: "Ancient Greek Tradition",
    description: "Greek system of numerical equivalence similar to Hebrew gematria",
    alphabet: {
      "Α": 1, "Β": 2, "Γ": 3, "Δ": 4, "Ε": 5, "Ϝ": 6, "Ζ": 7, "Η": 8, "Θ": 9, "Ι": 10,
      "Κ": 20, "Λ": 30, "Μ": 40, "Ν": 50, "Ξ": 60, "Ο": 70, "Π": 80, "Ϙ": 90, "Ρ": 100,
      "Σ": 200, "Τ": 300, "Υ": 400, "Φ": 500, "Χ": 600, "Ψ": 700, "Ω": 800
    },
    significance: "Used in ancient Greek mysticism and early Christian symbolism"
  }
];

export const sacredGematriaValues: GematriaCalculation[] = [
  {
    word: "YHVH (יהוה)",
    value: 26,
    system: "Hebrew",
    meaning: "The Tetragrammaton - the ineffable name of God",
    correspondences: ["Divine unity", "Creation force", "Sacred geometry", "26 generations from Adam to Moses"]
  },
  {
    word: "EHYEH (אהיה)",
    value: 21,
    system: "Hebrew",
    meaning: "I AM - God's response to Moses at the burning bush",
    correspondences: ["Divine presence", "Eternal being", "Self-existence", "Crown of Kether"]
  },
  {
    word: "LOVE",
    value: 54,
    system: "English Simple",
    meaning: "Universal force of attraction and unity",
    correspondences: ["Venus energy", "Heart chakra", "Emotional healing", "Divine compassion"]
  },
  {
    word: "LIGHT",
    value: 56,
    system: "English Simple",
    meaning: "Divine illumination and consciousness",
    correspondences: ["Spiritual awakening", "Wisdom", "Truth", "Higher knowledge"]
  },
  {
    word: "WISDOM",
    value: 83,
    system: "English Simple",
    meaning: "Divine knowledge and understanding",
    correspondences: ["Chokmah", "Sophia", "Sacred knowledge", "Illumination"]
  }
];
