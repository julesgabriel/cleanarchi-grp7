import {Pokemon} from "../../entities/Pokemon";
import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";

export const orderAllPokemon = (pokemonStore: ToolkitStore): Array<Pokemon> => {
    const pokemons = pokemonStore.getState().pokemons;
    return pokemons.sort((a, b) => {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }
    })
}