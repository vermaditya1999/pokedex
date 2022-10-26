import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import type { Pokemon, PokemonStats } from './types';
import { PokemonType } from './types';

export default function usePokemonQuery(dataURL: string) {
	const { status, data } = useQuery([dataURL], () =>
		axios.get<PokemonServerData>(dataURL).then((res) => {
			const data = res.data;

			const stats: PokemonStats = {
				hp: 0,
				attack: 0,
				defense: 0,
				speed: 0,
			};
			data.stats.forEach((obj) => (stats[obj.stat.name] = obj.base_stat));

			const pokemon: Pokemon = {
				name: data.name,
				height: data.height,
				weight: data.weight,
				types: data.types.map((obj) => obj.type.name as PokemonType),
				abilities: data.abilities.map((obj) => obj.ability.name),
				stats: stats,
				sprite: data.sprites.other['official-artwork'].front_default,
			};

			return pokemon;
		})
	);

	return { status, data };
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
			name: 'hp' | 'speed' | 'attack' | 'defense';
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
