export type Affix = 'cast-speed' | 'damage';

export type RuneType = 'rune' | 'spell' | 'meta-rune';

export type EssenceFlavor = 'fire' | 'water' | 'air';
export const ALL_RUNE_FLAVORS: EssenceFlavor[] = ['fire', 'water', 'air'];

export interface Rune {
  id: number,
  name: string,
  type: RuneType,
  flavor: EssenceFlavor,
  affixes: Affix[],
}

export const NAME_PREFIXES: Record<EssenceFlavor, string[]> = {
  'fire': ['Flaming', 'Fiery', 'Inferno'],
  'water': ['Moist', 'Torrential', 'Dripping'],
  'air': ['Airy', 'Drafty', 'Soaring'],
};

// Flaming Rune of the Sky
// Flaming Fire Rune of the Earth
// Flaming Fire Rune of Mystery
export const NAME_SUFFIXES: string[]= [
  'of the Sky',
  'of the Earth',
  'of the Core',
  'of the Body',
  'of Mystery',
  'of Dexterity',
  'of Alacrity',
  'born of Sin',
]