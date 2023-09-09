import type { AppProps } from 'next/app';
import { NextUIProvider } from "@nextui-org/react";
import { DarkTheme } from '../themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextUIProvider>
            <DarkTheme>
                <Component {...pageProps} />
            </DarkTheme>
        </NextUIProvider>
    );
}

export default MyApp;