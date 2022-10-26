import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import type { Pokemon, PokemonStats } from './types';
import { PokemonType } from './types';

export default function usePokemonQuery(dataURL: string) {
	const { status, data } = useQuery([dataURL], () =>
		axios.get<PokemonServerData>(dataURL).then((res) => {
			const data = res.data;
			const pokemon: Pokemon = {
				name: data.name,
				height: data.height,
				weight: data.weight,
				types: data.types.map((obj) => obj.type.name as PokemonType),
				abilities: data.abilities.map((obj) => obj.ability.name),
				stats: mapStats(data.stats),
				sprite: data.sprites.other['official-artwork'].front_default,
			};
			return pokemon;
		})
	);

	return { status, data };
}

function mapStats(serverStats: PokemonServerStat[]): PokemonStats {
	const stats: PokemonStats = {
		hp: 0,
		speed: 0,
		attack: 0,
		defense: 0,
		specialAttack: 0,
		specialDefense: 0,
	};

	for (const obj of serverStats) {
		if (obj.stat.name === 'hp') {
			stats.hp = obj.base_stat;
		}
		if (obj.stat.name === 'speed') {
			stats.speed = obj.base_stat;
		}
		if (obj.stat.name === 'attack') {
			stats.attack = obj.base_stat;
		}
		if (obj.stat.name === 'defense') {
			stats.defense = obj.base_stat;
		}
		if (obj.stat.name === 'specialAttack') {
			stats.specialAttack = obj.base_stat;
		}
		if (obj.stat.name === 'specialDefense') {
			stats.specialDefense = obj.base_stat;
		}
	}
	return stats;
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
