interface PokemonData {
	name: string;
	height: number;
	weight: number;
	types: string[];
	abilities: string[];
	stats: {
		name: string;
		baseVal: number;
	}[];
	sprite: string;
}

interface PokemonServerData {
	name: string;
	height: number;
	weight: number;
	types: {
		type: {
			name: string;
		};
	}[];
	abilities: {
		ability: {
			name: string;
			url: string;
		};
	}[];
	stats: {
		base_stat: number;
		stat: {
			name: string;
			url: string;
		};
	}[];
	sprites: {
		other: {
			'official-artwork': {
				front_default: string;
			};
		};
	};
}

export type { PokemonData, PokemonServerData };
