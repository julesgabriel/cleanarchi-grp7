import {configureStore} from "@reduxjs/toolkit";

const currentState = {
    pokemons: [], // toute ma data ==> cold
}

export enum ActionsPokemonStore {
    addPokemon = "addPokemon",
    listPokemons = "listPokemons",
    listOnePokemon= "listOnePokemon"
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