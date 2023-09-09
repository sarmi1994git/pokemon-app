import { FC } from 'react';
import { SmallPokemon } from "@/interfaces";
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${pokemon.name}`);
    }

    return (
        <div key={pokemon.id} onClick={onClick}>
            <Card 
                isHoverable 
                style={{ height: '100%' }} >
                <CardBody>
                    <Image
                        alt={pokemon.name}
                        radius="sm"
                        src={pokemon.img}
                        width="100%"
                        style={{ height: 140 }} />
                </CardBody>
                <CardFooter>
                    <div className="flex  grow justify-between">
                        <span style={{ textTransform: 'capitalize' }}>{pokemon.name}</span>
                        <span>#{pokemon.id}</span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
