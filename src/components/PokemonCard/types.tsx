interface PokemonData {
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
	defence: number;
	specialAttack: number;
	specialDefence: number;
	speed: number;
}

interface PokemonServerData {
	name: string;
	height: number;
	weight: number;
	types: PokemonServerType[];
	abilities: {
		ability: {
			name: string;
			url: string;
		};
	}[];
	stats: PokemonServerStat[];
	sprites: {
		other: {
			'official-artwork': {
				front_default: string;
			};
		};
	};
}

interface PokemonServerStat {
	base_stat: number;
	stat: {
		name: string;
	};
}

interface PokemonServerType {
	type: {
		name: string;
	};
}

export type {
	PokemonData,
	PokemonServerData,
	PokemonStats,
	PokemonServerStat,
	PokemonServerType,
	PokemonType,
};
