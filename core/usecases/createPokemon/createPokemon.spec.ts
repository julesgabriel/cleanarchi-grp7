import {createPokemon} from "./createPokemon";
import {CreatePokemonDTO} from "../../../adapters/primary/dto/createPokemonDTO";
import {PokemonTypeEnum} from "../../enums/PokemonTypeEnum";
import {PokemonRepositoryInMemory} from "../../../adapters/secondary/repository/PokemonRepositoryInMemory";
import {configureStore} from "@reduxjs/toolkit";
import {ActionsPokemonStore, reducerPokemonStore} from "../../../adapters/secondary/store/pokemonStore";

describe('Create a pokemon use case', function () {
    const pokemon: CreatePokemonDTO = {
        name: "bulbizarre",
        type: PokemonTypeEnum.plante
    };

    let repository
    let pokemonStore
    beforeEach(() => {
        repository = new PokemonRepositoryInMemory();
        pokemonStore = configureStore({reducer: reducerPokemonStore})
    })

    it('should return a pokemon when a pokemon instance object is provided', async () => {
        await expect(createPokemon(pokemon, repository, pokemonStore)).resolves.toEqual({
            id: "bulbizarreId",
            ...pokemon,
        })
    })

    describe('Repository', () => {
        it('should repository contain pokemon when use case is called', async () => {
            await createPokemon(pokemon, repository, pokemonStore)
            await expect(repository.listAll()).resolves.toEqual([{
                id: "bulbizarreId",
                ...pokemon
            }])
        })

        it('should repository contain initial array and pokemon inserted when use case is called', async () => {
            // INIT REPOSITORY
            repository.feedsWith({
                id: 'salamecheId',
                name: "salameche",
                type: PokemonTypeEnum.feu
            })
            // END INIT
            await createPokemon(pokemon, repository, pokemonStore)
            await expect(repository.listAll()).resolves.toEqual([
                {
                    id: 'salamecheId',
                    name: "salameche",
                    type: PokemonTypeEnum.feu
                },
                {
                    id: "bulbizarreId",
                    ...pokemon,
                }
            ])
        })
    })

    describe('Store', () => {
        it('should store contain pokemon given when use case is called', async () => {
            await createPokemon(pokemon, repository, pokemonStore)
            const storeState = pokemonStore.getState().pokemons;
            expect(storeState).toEqual([{
                id: "bulbizarreId",
                ...pokemon
            }]);
        })
        it('should store contain pokemon given when one pokemon is already in store', async () => {
            pokemonStore.dispatch({
                    type: ActionsPokemonStore.addPokemon,
                    payload: {
                        id: 'salamecheId', name: 'salameche', type: PokemonTypeEnum.feu
                    }
                }
            )
            await createPokemon(pokemon, repository, pokemonStore)
            const storeState = pokemonStore.getState().pokemons;
            expect(storeState).toEqual([
                {
                    id: "bulbizarreId",
                    ...pokemon
                },
                {
                    id: 'salamecheId', name: 'salameche', type: PokemonTypeEnum.feu
                }
            ]);
        })
    })
});
