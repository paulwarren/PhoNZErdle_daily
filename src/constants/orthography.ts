import { CONFIG } from './config';

export const ORTHOGRAPHY = [
 "ɘ",
 "e",
 "ɛ",
 "ɒ",
 "ɐ",
 "ʊ",
 "iː",
 "ɐː",
 "oː",
 "ʉː",
 "ɵː",
 "æe",
 "ɑe",
 "oe",
 "æʉ",
 "ɐʉ",
 "iɘ",
 "eɘ",
 "ʉɘ",
 "i",
 "p",
 "b",
 "t",
 "d",
 "k",
 "ɡ",
 "f",
 "v",
 "s",
 "z",
 "θ",
 "ð",
 "ʃ",
 "ʒ",
 "m",
 "n",
 "ŋ",
 "l",
 "w",
 "ɹ",
 "j",
 "h",
 "ʧ",
 "ʤ",
]

export const TOOLTIPS: any = {
 "ɘ": 'KIT, commA, lettER',
 "e": 'DRESS',
 "ɛ": 'TRAP',
 "ɒ": 'LOT, CLOTH',
 "ɐ": 'STRUT',
 "ʊ": 'FOOT',
 "iː": 'FLEECE',
 "ɐː": 'START, BATH, PALM',
 "oː": 'THOUGHT, NORTH',
 "ʉː": 'GOOSE',
 "ɵː": 'NURSE',
 "æe": 'FACE',
 "ɑe": 'PRICE',
 "oe": 'CHOICE',
 "æʉ": 'MOUTH',
 "ɐʉ": 'GOAT',
 "iɘ": 'NEAR',
 "eɘ": 'SQUARE',
 "ʉɘ": 'CURE',
 "i": 'happY',
 "p": '',
 "b": '',
 "t": '',
 "d": '',
 "k": '',
 "ɡ": '',
 "f": '',
 "v": '',
 "s": '',
 "z": '',
 "θ": 'THorn (voiceless)',
 "ð": 'THen (voiced)',
 "ʃ": 'SHarp',
 "ʒ": 'meaSure',
 "m": '',
 "n": '',
 "ŋ": 'siNG',
 "l": '',
 "w": '',
 "ɹ": 'Red',
 "j": 'Yard',
 "h": '',
 "ʧ": 'CHap',
 "ʤ": 'Jog',
}

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
