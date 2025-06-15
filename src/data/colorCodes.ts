
export interface ColorCode {
  color: string;
  hex: string;
  frequency: number;
  wavelength: number;
  meaning: string;
  spiritualSignificance: string;
  chakraAssociation: string;
  psychologicalEffects: string[];
  healingProperties: string[];
  symbolism: string[];
  culturalMeanings: { [culture: string]: string };
}

export const colorCodesData: ColorCode[] = [
  {
    color: "Red",
    hex: "#FF0000",
    frequency: 460,
    wavelength: 700,
    meaning: "Passion, energy, strength, courage, life force",
    spiritualSignificance: "Root chakra, grounding, survival instinct, material world connection",
    chakraAssociation: "Muladhara (Root Chakra)",
    psychologicalEffects: ["Increases energy", "Stimulates appetite", "Raises blood pressure", "Creates urgency"],
    healingProperties: ["Circulation improvement", "Energy boost", "Confidence building", "Motivation enhancement"],
    symbolism: ["Fire", "Blood", "Life force", "Power", "War", "Love"],
    culturalMeanings: {
      "Western": "Passion, danger, love",
      "Chinese": "Good fortune, joy, prosperity",
      "Indian": "Purity, fertility",
      "Ancient Egyptian": "Life, victory, power"
    }
  },
  {
    color: "Orange",
    hex: "#FFA500",
    frequency: 508,
    wavelength: 590,
    meaning: "Creativity, enthusiasm, joy, warmth, social connection",
    spiritualSignificance: "Sacral chakra, creativity, sexuality, emotional expression",
    chakraAssociation: "Svadhisthana (Sacral Chakra)",
    psychologicalEffects: ["Enhances creativity", "Improves mood", "Increases social interaction", "Stimulates appetite"],
    healingProperties: ["Emotional healing", "Creative blocks removal", "Sexual energy balance", "Joy restoration"],
    symbolism: ["Sunset", "Autumn", "Creativity", "Warmth", "Energy"],
    culturalMeanings: {
      "Western": "Enthusiasm, creativity, warmth",
      "Buddhist": "Illumination, highest state of perfection",
      "Hindu": "Sacred, courage",
      "Dutch": "National color, royalty"
    }
  },
  {
    color: "Yellow",
    hex: "#FFFF00",
    frequency: 526,
    wavelength: 570,
    meaning: "Intellect, clarity, confidence, mental energy, wisdom",
    spiritualSignificance: "Solar plexus chakra, personal power, intellect, confidence",
    chakraAssociation: "Manipura (Solar Plexus Chakra)",
    psychologicalEffects: ["Enhances concentration", "Boosts confidence", "Stimulates mental activity", "Increases optimism"],
    healingProperties: ["Mental clarity", "Confidence building", "Digestive health", "Nervous system support"],
    symbolism: ["Sun", "Gold", "Intellect", "Enlightenment", "Happiness"],
    culturalMeanings: {
      "Western": "Happiness, caution, cowardice",
      "Chinese": "Imperial color, sacred, prosperity",
      "Egyptian": "Gold, eternal, divine",
      "Buddhist": "Rootlessness, humility"
    }
  },
  {
    color: "Green",
    hex: "#008000",
    frequency: 566,
    wavelength: 530,
    meaning: "Growth, healing, balance, nature, harmony, abundance",
    spiritualSignificance: "Heart chakra, love, compassion, healing, growth",
    chakraAssociation: "Anahata (Heart Chakra)",
    psychologicalEffects: ["Reduces stress", "Balances emotions", "Enhances healing", "Promotes growth"],
    healingProperties: ["Heart healing", "Emotional balance", "Physical healing", "Growth acceleration"],
    symbolism: ["Nature", "Growth", "Renewal", "Fertility", "Peace"],
    culturalMeanings: {
      "Western": "Nature, growth, money, envy",
      "Islamic": "Paradise, prophet's color",
      "Irish": "National color, luck",
      "Ancient Egyptian": "Rebirth, good health"
    }
  },
  {
    color: "Blue",
    hex: "#0000FF",
    frequency: 668,
    wavelength: 450,
    meaning: "Communication, truth, peace, wisdom, spiritual connection",
    spiritualSignificance: "Throat chakra, communication, truth, expression",
    chakraAssociation: "Vishuddha (Throat Chakra)",
    psychologicalEffects: ["Calms mind", "Reduces blood pressure", "Enhances communication", "Promotes peace"],
    healingProperties: ["Throat healing", "Communication enhancement", "Stress reduction", "Peace restoration"],
    symbolism: ["Sky", "Ocean", "Infinity", "Truth", "Loyalty"],
    culturalMeanings: {
      "Western": "Calm, trust, sadness",
      "Hindu": "Krishna, divine love",
      "Chinese": "Immortality, healing",
      "Ancient Egyptian": "Heaven, water, primeval flood"
    }
  },
  {
    color: "Indigo",
    hex: "#4B0082",
    frequency: 700,
    wavelength: 430,
    meaning: "Intuition, perception, spiritual sight, inner wisdom",
    spiritualSignificance: "Third eye chakra, intuition, psychic abilities, inner vision",
    chakraAssociation: "Ajna (Third Eye Chakra)",
    psychologicalEffects: ["Enhances intuition", "Deepens meditation", "Increases perception", "Promotes introspection"],
    healingProperties: ["Third eye activation", "Psychic development", "Mental clarity", "Spiritual insight"],
    symbolism: ["Night sky", "Mystery", "Depth", "Wisdom", "Royalty"],
    culturalMeanings: {
      "Western": "Mystery, spirituality, nobility",
      "Tibetan": "Wisdom, compassion",
      "Ancient": "Rare, precious, divine"
    }
  },
  {
    color: "Violet",
    hex: "#8B00FF",
    frequency: 750,
    wavelength: 400,
    meaning: "Spiritual connection, divine consciousness, transformation",
    spiritualSignificance: "Crown chakra, divine connection, enlightenment, cosmic consciousness",
    chakraAssociation: "Sahasrara (Crown Chakra)",
    psychologicalEffects: ["Enhances spirituality", "Promotes transformation", "Increases divine connection", "Elevates consciousness"],
    healingProperties: ["Spiritual awakening", "Divine connection", "Consciousness expansion", "Enlightenment"],
    symbolism: ["Crown", "Royalty", "Divine", "Transformation", "Magic"],
    culturalMeanings: {
      "Western": "Royalty, luxury, spirituality",
      "Christian": "Penance, humility",
      "Japanese": "Virtue, faith",
      "Roman": "Imperial purple, divine authority"
    }
  }
];
