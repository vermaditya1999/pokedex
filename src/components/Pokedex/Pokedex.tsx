import { PokemonCombobox } from 'components/PokemonCombobox';
import { PokemonCard } from 'components/PokemonCard';
import { usePokemonListQuery } from './usePokemonListQuery';

export default function Pokedex() {
	const { status, data, pokemon, setPokemon } = usePokemonListQuery();

	if (status === 'loading') {
		return (
			<div>
				<p>Loading ...</p>
			</div>
		);
	}

	if (status === 'error' || !data) {
		return (
			<div>
				<p>Something went wrong!</p>
			</div>
		);
	}

	return (
		<div className='w-96 bg-gradient-to-b from-red-400 to-red-700 rounded-xl border-8 border-gray-900 flex flex-col'>
			<div className='border-b-xl bg-red-600 my-1 rounded-md'>
				<div className='h-20 flex items-center p-2 border-b-4 border-b-gray-900'>
					<div className='w-14 h-14 rounded-full bg-white border-2 border-gray-900 flex justify-center items-center'>
						<div className='w-12 h-12 border-2 border-gray-900 rounded-full bg-sky-400'>
							<div className='w-5 h-5 bg-sky-300 rounded-full m-2'></div>
						</div>
					</div>
					<div className='ml-2 h-12 w-16'>
						<span className='inline-block h-4 w-4 bg-red-400 rounded-full border-2 border-gray-900'></span>
						<span className='inline-block ml-2 h-4 w-4 bg-yellow-400 rounded-full border-2 border-gray-900'></span>
						<span className='inline-block ml-2 h-4 w-4 bg-green-600 rounded-full border-2 border-gray-900'></span>
					</div>
				</div>
				<div className='relative m-4 rounded flex flex-col items-center'>
					<div className='mt-2 absolute z-10'>
						<PokemonCombobox pokemon={pokemon} setPokemon={setPokemon} pokemonList={data} />
					</div>
					<div className='mt-24'>
						<PokemonCard dataURL={data[pokemon]} />
					</div>
				</div>
				<p className='my-1 text-xs text-center text-red-900'>
					<a href='https://github.com/vermaditya1999' target='_blank'>
						@vermaditya1999
					</a>
				</p>
			</div>
		</div>
	);
}
