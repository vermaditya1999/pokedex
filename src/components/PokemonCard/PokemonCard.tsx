import usePokemonDataQuery from './usePokemonDataQuery';

export default function PokemonCard({ dataURL }: PokemonCardProps) {
	const { isLoading, error, data } = usePokemonDataQuery(dataURL);

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
