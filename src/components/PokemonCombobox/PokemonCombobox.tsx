import { useState } from 'react';
import { Combobox } from '@headlessui/react';

import type { PokemonList } from 'components/Pokedex';

export default function PokemonCombobox({
	pokemon,
	setPokemon,
	pokemonList,
}: PokemonComboboxProps) {
	const [query, setQuery] = useState('');

	const filteredPokemons =
		query === ''
			? []
			: Object.keys(pokemonList).filter((pokemon) =>
					pokemon.toLowerCase().startsWith(query.toLowerCase())
			  );

	return (
		<div className='text-lg'>
			<Combobox value={pokemon} onChange={setPokemon}>
				<Combobox.Input
					autoComplete='off'
					onChange={(event) => setQuery(event.target.value)}
					className='w-80 border-4 border-stone-900 rounded-t-lg px-4 py-1 outline-none'
					placeholder='search pokemon'
				/>
				<Combobox.Options className='w-80 max-h-56 border-4 border-t-0 border-stone-900 bg-white overflow-y-scroll'>
					{filteredPokemons.map((pokemon) => (
						<Combobox.Option
							key={pokemon}
							value={pokemon}
							className={({ active }) => `px-4 py-2 ${active && 'bg-stone-900 text-stone-50'}`}>
							{pokemon}
						</Combobox.Option>
					))}
				</Combobox.Options>
			</Combobox>
		</div>
	);
}

interface PokemonComboboxProps {
	pokemon: string;
	setPokemon: React.Dispatch<React.SetStateAction<string>>;
	pokemonList: PokemonList;
}
