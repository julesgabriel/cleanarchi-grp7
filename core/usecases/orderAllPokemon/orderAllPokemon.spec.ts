import {orderAllPokemon} from "./orderAllPokemon";
import {PokemonTypeEnum} from "../../enums/PokemonTypeEnum";
import {configureStore} from "@reduxjs/toolkit";
import {reducerPokemonStore} from "../../../adapters/secondary/store/pokemonStore";

describe('Order a list of Pokemon inside the store', function () {
    let pokemonStore;
    beforeEach(() => {
        pokemonStore = configureStore({reducer: reducerPokemonStore});
    })
    it('Should return empty when empty', () => {
        expect(orderAllPokemon(pokemonStore)).toEqual([]);
    });
    it('should return ordered list of ordered pokemons', function () {
        pokemonStore.dispatch({
            type: 'listPokemons', payload: [{
                id: "bulbasaurId",
                name: "bulbasaur",
                type: PokemonTypeEnum.plante
            },
                {
                    id: "salamecheId",
                    name: "salameche",
                    type: PokemonTypeEnum.feu
                }
            ]
        })

        expect(orderAllPokemon(pokemonStore)).toEqual([
            {
                id: "bulbasaurId",
                name: "bulbasaur",
                type: PokemonTypeEnum.plante
            },
            {
                id: "salamecheId",
                name: "salameche",
                type: PokemonTypeEnum.feu
            }
        ]);
    });
    it('should return ordered list of unordered pokemons', function () {
        pokemonStore.dispatch({
            type: 'listPokemons', payload: [{
                id: "salamecheId",
                name: "salameche",
                type: PokemonTypeEnum.feu
            },
                {
                    id: "bulbasaurId",
                    name: "bulbasaur",
                    type: PokemonTypeEnum.plante
                },
                {
                    id: "pikachuId",
                    name: "pikachu",
                    type: PokemonTypeEnum.electrique
                }
            ]
        })

        expect(orderAllPokemon(pokemonStore)).toEqual([
            {
                id: "bulbasaurId",
                name: "bulbasaur",
                type: PokemonTypeEnum.plante
            },
            {
                id: "pikachuId",
                name: "pikachu",
                type: PokemonTypeEnum.electrique
            },
            {
                id: "salamecheId",
                name: "salameche",
                type: PokemonTypeEnum.feu
            }
        ]);
    });
})