import { Pokedex } from 'components/Pokedex';

export default function App() {
	return (
		<div className='p-2 h-screen bg-red-50'>
			<div className='mt-16 flex justify-center'>
				<Pokedex />
			</div>
		</div>
	);
}
