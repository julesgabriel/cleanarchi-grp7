import {PokemonRepositoryInMemory} from "../../../adapters/secondary/repository/PokemonRepositoryInMemory";
import {listAllPokemon} from "./listAllPokemon";
import {PokemonTypeEnum} from "../../enums/PokemonTypeEnum";
import {reducerPokemonStore} from "../../../adapters/secondary/store/pokemonStore";
import {configureStore} from "@reduxjs/toolkit";

describe('list all pokemon', function () {
    let repositoryPokemon
    let pokemonStore
    beforeEach(() => {
        repositoryPokemon = new PokemonRepositoryInMemory();
        pokemonStore = configureStore({reducer: reducerPokemonStore});
    })

    describe('Empty', () => {
        it('should return empty array when repository is empty', async () => {
            await expect(listAllPokemon(repositoryPokemon, pokemonStore)).resolves.toEqual([]);
        });
    })

    describe('Populated', () => {
        it('should return an array of pokemon when repository has data', async () => {
            let salameche = {
                id: "salamecheId",
                name: "Salameche",
                type: PokemonTypeEnum.feu
            }
            repositoryPokemon.feedsWith(salameche)
            await expect(listAllPokemon(repositoryPokemon, pokemonStore)).resolves.toEqual([salameche])
        });

        it('should update the store when repository has data', async () => {
            let salameche = {
                id: "salamecheId",
                name: "Salameche",
                type: PokemonTypeEnum.feu
            }
            repositoryPokemon.feedsWith(salameche)
            await listAllPokemon(repositoryPokemon, pokemonStore)
            expect(pokemonStore.getState().pokemons).toEqual([
                salameche
            ])
        });
    })

});