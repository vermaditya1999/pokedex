import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import type { PokemonData, PokemonServerData, PokemonServerStat, PokemonStats } from './types';
import { PokemonType } from './types';

export default function usePokemonDataQuery(dataURL: string) {
	const { isLoading, error, data } = useQuery([dataURL], () =>
		axios.get<PokemonServerData>(dataURL).then((res) => {
			const data = res.data;
			const pokemonData: PokemonData = {
				name: data.name,
				height: data.height,
				weight: data.weight,
				types: data.types.map((obj) => obj.type.name as PokemonType),
				abilities: data.abilities.map((obj) => obj.ability.name),
				stats: mapStats(data.stats),
				sprite: data.sprites.other['official-artwork'].front_default,
			};
			return pokemonData;
		})
	);

	return { isLoading, error, data };
}

function mapStats(serverStats: PokemonServerStat[]): PokemonStats {
	const stats: PokemonStats = {
		hp: 0,
		speed: 0,
		attack: 0,
		defence: 0,
		specialAttack: 0,
		specialDefence: 0,
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
		if (obj.stat.name === 'defence') {
			stats.defence = obj.base_stat;
		}
		if (obj.stat.name === 'specialAttack') {
			stats.specialAttack = obj.base_stat;
		}
		if (obj.stat.name === 'specialDefence') {
			stats.specialDefence = obj.base_stat;
		}
	}
	return stats;
}
