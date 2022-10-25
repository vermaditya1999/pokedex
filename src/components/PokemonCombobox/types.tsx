interface PokemonData {
	[name: string]: string;
}

interface PokemonServerData {
	name: string;
	url: string;
}

interface PokemonListServerData {
	results: PokemonServerData[];
}

export type { PokemonData, PokemonListServerData };
