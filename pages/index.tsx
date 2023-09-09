import { Layout } from "@/components/layouts";
import { NextPage, GetStaticProps } from "next";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemon";

interface Props {
    pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

    return (
        <>
            <Layout title="Listado de Pokemons">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-12 gap-4">
                    {
                        pokemons.map(item => {
                            return (
                                <PokemonCard
                                    key={item.id}
                                    pokemon={item} />
                            );
                        })
                    }
                </div>
            </Layout>
        </>
    );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemons: SmallPokemon[] = data.results.map((item, i) => {
        return { 
            ...item, 
            id: i + 1, 
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
        };
    })
    
    return {
        props: {
            pokemons
        }
    }
}

export default HomePage;