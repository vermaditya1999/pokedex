import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { getRandomArrayElement } from 'shared/utils/random';
import { PokemonList } from './types';

function usePokemonListQuery() {
	const [pokemon, setPokemon] = useState('pikachu');
	const { status, data } = useQuery(['pokemonListServerData'], function () {
		return axios
			.get('https://pokeapi.co/api/v2/pokemon')
			.then((res) => res.data.count)
			.then((count) => axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${count}`))
			.then((res) => {
				const data = res.data as PokemonListServerData;
				const pokemonList: PokemonList = {};
				data.results.forEach((obj) => (pokemonList[obj.name] = obj.url));
				setPokemon(getRandomArrayElement(Object.keys(pokemonList)));
				return pokemonList;
			});
	});

	return { status, data, pokemon, setPokemon };
}

interface PokemonServerData {
	name: string;
	url: string;
}

interface PokemonListServerData {
	results: PokemonServerData[];
}

export { usePokemonListQuery };
