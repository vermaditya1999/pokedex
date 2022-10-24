import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function PokemonCard({ dataURL }: PokemonCardProps) {
	const { isLoading, error, data } = useQuery(['pokemonData'], () =>
		axios.get<PokemonServerData>(dataURL).then((res) => {
			const data = res.data;
			const pokemonData: PokemonData = {
				name: data.name,
				height: data.height,
				weight: data.weight,
				types: data.types.map((obj) => obj.type.name),
				abilities: data.abilities.map((obj) => obj.ability.name),
				stats: data.stats.map((obj) => ({
					name: obj.stat.name,
					baseVal: obj.base_stat,
				})),
				sprite: data.sprites.other['official-artwork'].front_default,
			};
			return pokemonData;
		})
	);

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
				<p>Something went wrong :(</p>
			</div>
		);
	}

	return (
		<div>
			<img src={data.sprite} alt={`Sprite of ${data.name}`} />
			<p>{data.name}</p>
			<p>{data.height}</p>
			<p>{data.weight}</p>
			<ul>
				{data.types.map((type) => (
					<li id={type}>{type}</li>
				))}
			</ul>
			<ul>
				{data.abilities.map((ability) => (
					<li id={ability}>{ability}</li>
				))}
			</ul>
			<ul>
				{data.stats.map((stat) => (
					<li id={stat.name}>
						{stat.name}: {stat.baseVal}
					</li>
				))}
			</ul>
		</div>
	);
}

interface PokemonCardProps {
	dataURL: string;
}

interface PokemonServerData {
	name: string;
	height: number;
	weight: number;
	types: {
		type: {
			name: string;
		};
	}[];
	abilities: {
		ability: {
			name: string;
			url: string;
		};
	}[];
	stats: {
		base_stat: number;
		stat: {
			name: string;
			url: string;
		};
	}[];
	sprites: {
		other: {
			'official-artwork': {
				front_default: string;
			};
		};
	};
}

interface PokemonData {
	name: string;
	height: number;
	weight: number;
	types: string[];
	abilities: string[];
	stats: {
		name: string;
		baseVal: number;
	}[];
	sprite: string;
}
