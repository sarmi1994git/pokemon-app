import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
    children: any,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{ title || 'Pokemon App'}</title>
                <meta name="author" content="Jesús Sarmiento" />
                <meta name="description" content={`Información sobre ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
                <meta property="og:title" content={`Información sobre el pokemón ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <Navbar />
            <div style={{
                padding: '20px'
            }}>
                {children}
            </div>
        </>
    );
}
