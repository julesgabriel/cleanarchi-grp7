import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";
import {Pokemon} from "../../../../core/entities/Pokemon";

export const listAllPokemonPresenter = (pokemonStore: ToolkitStore) : Array<Pokemon>=> {
    const allPokemons: Array<Pokemon> = pokemonStore.getState().pokemons
    return allPokemons.map(el => {
        return {
            id: el.id,
            name: el.name,
            type: el.type
        }
    })
}