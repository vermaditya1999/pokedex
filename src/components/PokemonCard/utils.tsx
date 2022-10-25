import type { PokemonType } from './types';

function getBgColorFromPokemonType(type: PokemonType): string {
	switch (type) {
		case 'normal':
			return 'bg-slate-50';
		case 'fighting':
			return 'bg-orange-50';
		case 'flying':
			return 'bg-sky-50';
		case 'poison':
			return 'bg-red-50';
		case 'ground':
			return 'bg-stone-50';
		case 'rock':
			return 'bg-stone-50';
		case 'bug':
			return 'bg-lime-50';
		case 'ghost':
			return 'bg-indigo-50';
		case 'steel':
			return 'bg-zinc-50';
		case 'fire':
			return 'bg-amber-50';
		case 'water':
			return 'bg-blue-50';
		case 'grass':
			return 'bg-green-50';
		case 'electric':
			return 'bg-yellow-50';
		case 'psychic':
			return 'bg-violet-50';
		case 'ice':
			return 'bg-cyan-50';
		case 'dragon':
			return 'bg-orange-50';
		case 'dark':
			return 'bg-neutral-50';
		case 'fairy':
			return 'bg-purple-50';
		case 'unknown':
			return 'bg-neutral-50';
		case 'shadow':
			return 'bg-neutral-50';
	}
}

function getGradientColorFromPokemonType(type: PokemonType): string {
	switch (type) {
		case 'normal':
			return 'bg-gradient-to-b from-slate-200 to-slate-700';
		case 'fighting':
			return 'bg-gradient-to-b from-orange-200 to-orange-700';
		case 'flying':
			return 'bg-gradient-to-b from-sky-200 to-sky-700';
		case 'poison':
			return 'bg-gradient-to-b from-red-200 to-red-700';
		case 'ground':
			return 'bg-gradient-to-b from-stone-200 to-stone-700';
		case 'rock':
			return 'bg-gradient-to-b from-stone-200 to-stone-700';
		case 'bug':
			return 'bg-gradient-to-b from-lime-200 to-lime-700';
		case 'ghost':
			return 'bg-gradient-to-b from-indigo-200 to-indigo-700';
		case 'steel':
			return 'bg-gradient-to-b from-zinc-200 to-zinc-700';
		case 'fire':
			return 'bg-gradient-to-b from-amber-200 to-amber-700';
		case 'water':
			return 'bg-gradient-to-b from-blue-200 to-blue-700';
		case 'grass':
			return 'bg-gradient-to-b from-green-200 to-green-700';
		case 'electric':
			return 'bg-gradient-to-b from-yellow-200 to-yellow-700';
		case 'psychic':
			return 'bg-gradient-to-b from-violet-200 to-violet-700';
		case 'ice':
			return 'bg-gradient-to-b from-cyan-200 to-cyan-700';
		case 'dragon':
			return 'bg-gradient-to-b from-orange-200 to-orange-700';
		case 'dark':
			return 'bg-gradient-to-b from-neutral-200 to-neutral-700';
		case 'fairy':
			return 'bg-gradient-to-b from-purple-200 to-purple-700';
		case 'unknown':
			return 'bg-gradient-to-b from-neutral-200 to-neutral-700';
		case 'shadow':
			return 'bg-gradient-to-b from-neutral-200 to-neutral-700';
	}
}

function getRandomArrayElement<T>(arr: T[]) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomPokemonType(types: PokemonType[]): PokemonType {
	return getRandomArrayElement(types);
}

export { getRandomPokemonType, getBgColorFromPokemonType, getGradientColorFromPokemonType };
