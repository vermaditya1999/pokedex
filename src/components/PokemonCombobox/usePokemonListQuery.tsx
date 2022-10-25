import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { PokemonListServerData, PokemonData } from './types';

function usePokemonListQuery() {
	const { isLoading, error, data } = useQuery(['pokemonListServerData'], function () {
		return axios
			.get('https://pokeapi.co/api/v2/pokemon')
			.then((res) => res.data.count)
			.then((count) => axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${count}`))
			.then((res) => {
				const data = res.data as PokemonListServerData;
				const pokemonData: PokemonData = {};
				data.results.forEach((obj) => (pokemonData[obj.name] = obj.url));
				return pokemonData;
			});
	});

	return { isLoading, error, data };
}

export { usePokemonListQuery };
