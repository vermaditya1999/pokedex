import PokemonCard from 'components/PokemonCard';

export default function App() {
	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div>
				<PokemonCard dataURL='https://pokeapi.co/api/v2/pokemon/1' />
			</div>
		</div>
	);
}
