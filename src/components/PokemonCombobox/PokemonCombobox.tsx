import { useState } from 'react';
import { Combobox } from '@headlessui/react';

import { PokemonData } from './types';

export default function PokemonCombobox({
	selectedPokemon,
	setSelectedPokemon,
	pokemonData,
}: PokemonComboboxProps) {
	const [query, setQuery] = useState('');

	const filteredPokemons =
		query === ''
			? []
			: Object.keys(pokemonData).filter((pokemon) =>
					pokemon.toLowerCase().startsWith(query.toLowerCase())
			  );

	return (
		<div className='text-lg'>
			<Combobox value={selectedPokemon} onChange={setSelectedPokemon}>
				<Combobox.Input
					autoComplete='off'
					onChange={(event) => setQuery(event.target.value)}
					className='w-80 border-4 border-stone-900 rounded-t-xl px-4 py-1 outline-none'
				/>
				<Combobox.Options className='w-80 max-h-28 border-4 border-t-0 border-stone-900 bg-white overflow-y-scroll'>
					{filteredPokemons.map((pokemon) => (
						<Combobox.Option
							key={pokemon}
							value={pokemon}
							className={({ active }) => `px-4 py-1 ${active && 'bg-stone-900 text-stone-50'}`}>
							{pokemon}
						</Combobox.Option>
					))}
				</Combobox.Options>
			</Combobox>
		</div>
	);
}

interface PokemonComboboxProps {
	selectedPokemon: string;
	setSelectedPokemon: React.Dispatch<React.SetStateAction<string>>;
	pokemonData: PokemonData;
}
