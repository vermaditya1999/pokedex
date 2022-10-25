import usePokemonDataQuery from './usePokemonDataQuery';
import { getGradientColorFromPokemonType, getRandomPokemonType } from './utils';

export default function PokemonCard({ dataURL }: PokemonCardProps) {
	const { isLoading, error, data } = usePokemonDataQuery(dataURL);

	if (isLoading) {
		return (
			<div className='flex justify-center items-center w-64 h-96 rounded-xl border-2 border-stone-900 text-stone-900'>
				<p>Loading ...</p>
			</div>
		);
	}

	if (error || !data) {
		return (
			<div className='flex justify-center items-center w-64 h-96 rounded-xl border-2 border-stone-900 text-stone-900'>
				<p>Something went wrong!.</p>
			</div>
		);
	}

	const randomPokemonType = getRandomPokemonType(data.types);

	return (
		<div
			className={`relative group hover:scale-110 w-64 h-96 rounded-xl border-2 border-stone-900 ${getGradientColorFromPokemonType(
				randomPokemonType
			)} flex flex-col text-stone-900 transition duration-500`}>
			<div className='flex-grow flex flex-col my-2 bg-white py-2 px-3 border-y-2 border-stone-900'>
				<div className='flex flex-col'>
					<p className='leading-none text-xl font-bold'>{data.name}</p>
					<p className='text-xs text-stone-400'>
						{data.types.map((type, index) => (
							<span key={type}>
								{type}
								{index < data.types.length - 1 && ','}{' '}
							</span>
						))}
					</p>
					<div className='flex justify-center'>
						<img className='w-40' src={data.sprite} alt={`Sprite of ${data.name}`} />
					</div>
				</div>
				<div className='flex flex-col flex-grow my-2'>
					<div className='flex justify-around border-x-2 border-stone-600'>
						<div className='flex flex-col items-center'>
							<span className='flex justify-center items-center font-semibold text-xl'>
								{data.stats.hp}
							</span>
							<span className='text-xs text-stone-400'>HP</span>
						</div>
						<div className='flex flex-col items-center'>
							<span className='flex justify-center items-center font-semibold text-xl '>
								{data.stats.attack}
							</span>
							<span className='text-xs text-stone-400'>Attack</span>
						</div>
						<div className='flex flex-col items-center'>
							<span className='flex justify-center items-center font-semibold text-xl '>
								{data.stats.defence}
							</span>
							<span className='text-xs text-stone-400'>Defence</span>
						</div>
						<div className='flex flex-col items-center'>
							<span className='flex justify-center items-center font-semibold text-xl '>
								{data.stats.speed}
							</span>
							<span className='text-xs text-stone-400'>Speed</span>
						</div>
					</div>
					<div className='my-auto text-center text-sm text-stone-600'>
						<p className='italic font-bold'>Abilities</p>
						{data.abilities.map((ability, index) => (
							<span key={ability}>
								{ability}
								{index < data.abilities.length - 1 && ', '}
							</span>
						))}
					</div>
				</div>
			</div>
			<div
				className={`absolute inset-0 ${getGradientColorFromPokemonType(
					randomPokemonType
				)} rounded-xl opacity-25 transition duration-500 group-hover:opacity-5`}></div>
		</div>
	);
}

interface PokemonCardProps {
	dataURL: string;
}
