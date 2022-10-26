import type { PokemonType } from './types';

// Need to map the pokemon type to full gradient tailwind classes as
// tailwind needs to know them in compile time
function getGradientColorFromPokemonType(type: PokemonType): string {
	switch (type) {
		case 'normal':
			return 'bg-gradient-to-b from-slate-50 to-slate-700';
		case 'fighting':
			return 'bg-gradient-to-b from-orange-50 to-orange-700';
		case 'flying':
			return 'bg-gradient-to-b from-sky-50 to-sky-700';
		case 'poison':
			return 'bg-gradient-to-b from-red-50 to-red-700';
		case 'ground':
			return 'bg-gradient-to-b from-stone-50 to-stone-700';
		case 'rock':
			return 'bg-gradient-to-b from-stone-50 to-stone-700';
		case 'bug':
			return 'bg-gradient-to-b from-lime-50 to-lime-700';
		case 'ghost':
			return 'bg-gradient-to-b from-indigo-50 to-indigo-700';
		case 'steel':
			return 'bg-gradient-to-b from-zinc-50 to-zinc-700';
		case 'fire':
			return 'bg-gradient-to-b from-amber-50 to-amber-700';
		case 'water':
			return 'bg-gradient-to-b from-blue-50 to-blue-700';
		case 'grass':
			return 'bg-gradient-to-b from-green-50 to-green-700';
		case 'electric':
			return 'bg-gradient-to-b from-yellow-50 to-yellow-700';
		case 'psychic':
			return 'bg-gradient-to-b from-violet-50 to-violet-700';
		case 'ice':
			return 'bg-gradient-to-b from-cyan-50 to-cyan-700';
		case 'dragon':
			return 'bg-gradient-to-b from-orange-50 to-orange-700';
		case 'dark':
			return 'bg-gradient-to-b from-neutral-50 to-neutral-700';
		case 'fairy':
			return 'bg-gradient-to-b from-purple-50 to-purple-700';
		case 'unknown':
			return 'bg-gradient-to-b from-neutral-50 to-neutral-700';
		case 'shadow':
			return 'bg-gradient-to-b from-neutral-50 to-neutral-700';
	}
}

function getRandomArrayElement<T>(arr: T[]) {
	return arr[Math.floor(Math.random() * arr.length)];
}

export { getRandomArrayElement, getGradientColorFromPokemonType };
