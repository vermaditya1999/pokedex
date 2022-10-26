interface Pokemon {
	name: string;
	height: number;
	weight: number;
	types: PokemonType[];
	abilities: string[];
	stats: PokemonStats;
	sprite: string;
}

type PokemonType =
	| 'normal'
	| 'fighting'
	| 'flying'
	| 'poison'
	| 'ground'
	| 'rock'
	| 'bug'
	| 'ghost'
	| 'steel'
	| 'fire'
	| 'water'
	| 'grass'
	| 'electric'
	| 'psychic'
	| 'ice'
	| 'dragon'
	| 'dark'
	| 'fairy'
	| 'unknown'
	| 'shadow';

interface PokemonStats {
	hp: number;
	attack: number;
	defense: number;
	specialAttack: number;
	specialDefense: number;
	speed: number;
}

export type { Pokemon, PokemonStats, PokemonType };
