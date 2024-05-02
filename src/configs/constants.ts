import { JokeTypeColorMap } from '@/data/types'
import MemeJulio from '@/assets/img/julio.jpeg'
import MemeJoker from '@/assets/img/joker.jpeg'
import MemeMoria from '@/assets/img/moria.jpeg'
import MemeEinstein from '@/assets/img/einstein.jpeg'
import MemePachu from '@/assets/img/pachu.jpeg'
import MemeYayo from '@/assets/img/yayo.jpeg'

export const API_URL = 'https://official-joke-api.appspot.com/'

export const JOKE_TYPES = {
  general: 'general',
  'knock-knock': 'knock-knock',
  programming: 'programming',
  dad: 'dad',
}

export const JOKE_TYPE_COLORS: JokeTypeColorMap = {
  general: 'yellow',
  'knock-knock': 'blue',
  programming: 'green',
  dad: 'red',
}

export const IMG_MEME = [MemeJulio, MemeJoker, MemeMoria, MemeEinstein, MemePachu, MemeYayo]
