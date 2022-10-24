import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { PokemonData, PokemonServerData } from './types';

export default function usePokemonDataQuery(dataURL: string) {
	const { isLoading, error, data } = useQuery(['pokemonData'], () =>
		axios.get<PokemonServerData>(dataURL).then((res) => {
			const data = res.data;
			const pokemonData: PokemonData = {
				name: data.name,
				height: data.height,
				weight: data.weight,
				types: data.types.map((obj) => obj.type.name),
				abilities: data.abilities.map((obj) => obj.ability.name),
				stats: data.stats.map((obj) => ({
					name: obj.stat.name,
					baseVal: obj.base_stat,
				})),
				sprite: data.sprites.other['official-artwork'].front_default,
			};
			return pokemonData;
		})
	);

	return { isLoading, error, data };
}
