import { useState } from 'react';

import { PokemonCombobox } from 'components/PokemonCombobox';
import { usePokemonListQuery } from 'components/PokemonCombobox/usePokemonListQuery';
import { PokemonCard } from 'components/PokemonCard';

export default function App() {
	const { isLoading, error, data } = usePokemonListQuery();
	const [selectedPokemon, setSelectedPokemon] = useState('pikachu');

	if (isLoading) {
		return (
			<div>
				<p>Loading ...</p>
			</div>
		);
	}

	if (error || !data) {
		return (
			<div>
				<p>Something went wrong!</p>
			</div>
		);
	}

	return (
		<div className='p-4 flex justify-center'>
			<div className='mt-4 py-2 px-12 border-4 border-stone-900 flex flex-col pt-16 rounded-xl bg-gradient-to-b from-stone-50 to-stone-200'>
				<div className='relative flex-grow flex flex-col items-center'>
					<img className='h-24' src='pokedex.png' alt='Pokedex' />
					<div className='absolute left-1/2 -translate-x-1/2 bottom-12'>
						<PokemonCard dataURL={data[selectedPokemon]} />
					</div>
					<div className='absolute mt-32'>
						<PokemonCombobox
							selectedPokemon={selectedPokemon}
							setSelectedPokemon={setSelectedPokemon}
							pokemonData={data}
						/>
					</div>
					<div className='flex justify-center pt-52 mt-96 text-sm text-stone-400'>
						<p>
							created by{' '}
							<a
								href='https://github.com/vermaditya1999'
								target='_blank'
								rel='noreferrer noopenner'
								className='underline'>
								@vermaditya1999
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
