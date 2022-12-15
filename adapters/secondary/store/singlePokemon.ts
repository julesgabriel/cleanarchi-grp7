import {configureStore} from "@reduxjs/toolkit";

const currentState = {
    pokemon: {}
}

export enum ActionsSinglePokemonStore {
    listOnePokemon= "listOnePokemon"
}

export const reducerPokemonStore = (state = currentState, {type, payload}) => {
    if(type === ActionsSinglePokemonStore.listOnePokemon){
        return {
            ...state,
            pokemon: payload
        }
    }
    return state
};

export const pokemonStore = configureStore({reducer: reducerPokemonStore});