import { useState } from 'react';
import usePokemonDataQuery from './usePokemonDataQuery';
import { getGradientColorFromPokemonType, getRandomArrayElement } from './utils';

export default function PokemonCard({ dataURL }: PokemonCardProps) {
	const { isLoading, error, data } = usePokemonDataQuery(dataURL);
	const [imageLoaded, setImageLoaded] = useState(false);

	if (isLoading) {
		return (
			<div className='flex justify-center items-center w-64 h-96 rounded-xl border-2 border-stone-900 text-stone-900 bg-stone-100'></div>
		);
	}

	if (error || !data) {
		return (
			<div className='flex justify-center items-center w-64 h-96 rounded-xl border-2 border-stone-900 text-stone-900'>
				<p>Something went wrong!</p>
			</div>
		);
	}

	const randomPokemonType = getRandomArrayElement(data.types);

	return (
		<div
			className={`relative w-64 h-96 rounded-xl border-2 border-stone-900 ${getGradientColorFromPokemonType(
				randomPokemonType
			)} flex flex-col text-stone-900 transition duration-500`}>
			<div className='flex-grow flex flex-col my-2 bg-white py-2 px-3 border-y-2 border-stone-900'>
				<div className='flex flex-col mt-2'>
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
						{!imageLoaded && <div className='h-40 w-full p-4 bg-stone-200'></div>}
						<img
							className={`h-40 ${imageLoaded ? 'visible' : 'hidden'}`}
							src={data.sprite}
							alt={`Sprite of ${data.name}`}
							onLoad={() => setImageLoaded(true)}
						/>
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
								{data.stats.defense}
							</span>
							<span className='text-xs text-stone-400'>Defense</span>
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
				)} rounded-xl opacity-25`}></div>
		</div>
	);
}

interface PokemonCardProps {
	dataURL: string;
}
