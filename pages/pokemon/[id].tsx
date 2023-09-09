import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/layouts';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Pokemon } from '@/interfaces';
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { getPokemonInfo, localFavorites } from '@/utils';

interface Props {
    pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    const [isInFavorites, setIsInFavorites] = useState(false);

    const onToggleFavorite = () => {
        localFavorites.toggleFavorites(pokemon.id);
        setIsInFavorites(!isInFavorites);
        if (isInFavorites) return;
        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }
        });
    }

    useEffect(() => {
        setIsInFavorites(localFavorites.existInFavorites(pokemon.id));
    }, []);

    return (
        <Layout title={pokemon.name}>
            <div className="grid grid-cols-12 gap-4" style={{ marginTop: 5 }}>
                <div className="xs:col-span-12 sm:col-span-4">
                    <Card isHoverable style={{ padding: 30 }}>
                        <CardBody>
                            <Image
                                alt={pokemon.name}
                                radius="sm"
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                width="100%"
                                style={{ height: 200 }} />
                        </CardBody>
                    </Card>
                </div>
                <div className="xs:col-span-12 sm:col-span-8">
                    <Card style={{ height: "100%" }}>
                        <CardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h1 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h1>
                            <Button
                                color="primary"
                                onClick={onToggleFavorite} >
                                { isInFavorites ? 'En Favoritos' : 'Guardar en favoritos'}
                            </Button>
                        </CardHeader>
                        <CardBody>
                            <p style={{ fontSize: 30 }}>Sprites:</p>
                            <div className="flex justify-around">
                                <Image 
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    style={{ width: 100, height: 100 }} />
                                <Image 
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    style={{ width: 100, height: 100 }} />
                                <Image 
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    style={{ width: 100, height: 100 }} />
                                <Image 
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    style={{ width: 100, height: 100 }} />
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string };

    return {
        props: {
            pokemon: await getPokemonInfo(id)
        }
    }
}

export default PokemonPage;