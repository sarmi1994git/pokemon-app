import React, { FC } from 'react';
import { Card, Image } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
    pokemonId: number
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
    const router = useRouter();

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokemonId}`);
    }

    return (
        <div className='grid' onClick={onFavoriteClicked}>
            <Card isHoverable style={{ padding: 10 }}>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
                width="100%"
                height={140} />
            </Card>
        </div>
    );
}
