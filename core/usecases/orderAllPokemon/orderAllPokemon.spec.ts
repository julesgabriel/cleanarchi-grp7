import {configureStore} from "@reduxjs/toolkit";
import {reducerPokemonStore} from "../../../adapters/secondary/store/pokemonStore";

describe('Order a list of Pokemon inside the store', () => {
    it('Should edit the store to order alphabetically by name pokemons', () => {
        const pokemonStore = configureStore({reducer: reducerPokemonStore});
        expect().toBe(true)
    });
})