import { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import { localFavorites } from "@/utils";

export const NoFavorites = () => {

    return (
        <div className="flex flex-col items-center justify-center" style={{ height: 'calc(100vh - 100px)' }}>
            <h1>No hay favoritos</h1>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
                width={250}
                style={{ opacity: 0.1 }} />
        </div>
    );
}
