import { FC } from 'react';
import { FavoriteCardPokemon } from '.';

interface Props {
    pokemons: number[]
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {

    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-4">
            {
                pokemons.map(id => (
                <FavoriteCardPokemon
                    key={id}
                    pokemonId={id} />
                ))
            }
        </div>
    );
}
