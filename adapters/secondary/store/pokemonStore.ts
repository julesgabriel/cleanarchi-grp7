import {configureStore} from "@reduxjs/toolkit";
import {Pokemon} from "../../../core/entities/Pokemon";

export type PokemonsStoreType = {
    pokemons: Array<Pokemon>
}

const currentState : PokemonsStoreType = {
    pokemons: [],
}

export enum ActionsPokemonStore {
    addPokemon = "addPokemon",
    listPokemons = "listPokemons",
}

export const reducerPokemonStore = (state = currentState, {type, payload}) => {
    if (type === ActionsPokemonStore.addPokemon) {
        return {
            ...state,
            pokemons: [payload, ...state.pokemons]
        }
    }
    if (type === ActionsPokemonStore.listPokemons) {
        return {
            ...state,
            pokemons: [...payload]
        }
    }
    return state
};

export const pokemonStore = configureStore({reducer: reducerPokemonStore});