import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import NextLink from 'next/link';

export const Navbar = () => {

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: '#272727'
        }}>
            <Image
                alt="Icono de la app" 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                width={70}
                height={70} />
            <NextLink href="/" passHref>
                <span color="white">P</span>
                <span color="white">okemón!</span>
            </NextLink>
            <Spacer style={ { flex: 1 } } />
            <NextLink href="/favorites" passHref>
                <span color="white">Favoritos</span>
            </NextLink>
        </div>
    );
}
