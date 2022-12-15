import {Pokemon} from "../../entities/Pokemon";
import {PokemonRepositoryInterface} from "../../../adapters/secondary/repository/PokemonRepositoryInterface";
import {ActionsPokemonStore} from "../../../adapters/secondary/store/pokemonStore";
import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";

export const listAllPokemon = async (repository: PokemonRepositoryInterface,pokemonStore: ToolkitStore ): Promise<Array<Pokemon>> => {
    const allPokemon = await repository.listAll()
    pokemonStore.dispatch({type: ActionsPokemonStore.listPokemons, payload: allPokemon})
    return allPokemon;
}