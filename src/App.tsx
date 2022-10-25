import { PokemonCard } from 'components/PokemonCard';

export default function App() {
	return (
		<div className='flex justify-around mt-32'>
			<PokemonCard dataURL='https://pokeapi.co/api/v2/pokemon/89' />
			<PokemonCard dataURL='https://pokeapi.co/api/v2/pokemon/41' />
			<PokemonCard dataURL='https://pokeapi.co/api/v2/pokemon/314' />
		</div>
	);
}
