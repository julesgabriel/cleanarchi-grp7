import {configureStore} from "@reduxjs/toolkit";
import {ActionsPokemonStore, reducerPokemonStore} from "../../../secondary/store/pokemonStore";
import {listAllPokemonPresenter} from "./listAllPokemonPresenter";
import {PokemonTypeEnum} from "../../../../core/enums/PokemonTypeEnum";

describe('List all products Presenter', () => {

    describe('Empty', function () {
        it('should return a message when there is no pokemon in store', () => {
            const pokemonStore = configureStore({reducer: reducerPokemonStore});
            expect(listAllPokemonPresenter(pokemonStore)).toEqual([]);
        })
    });


    describe('Populated', () => {
        const pokemonStore = configureStore({reducer: reducerPokemonStore});
        const salameche = {
            id: "salamecheId",
            name: "salameche",
            type: PokemonTypeEnum.feu
        }
        it('should return array of pokemon with type, name and id when store is populated', () => {
            pokemonStore.dispatch({
                type: ActionsPokemonStore.addPokemon,
                payload: salameche
            })
            expect(listAllPokemonPresenter(pokemonStore)).toEqual([salameche])
        })
    })
})