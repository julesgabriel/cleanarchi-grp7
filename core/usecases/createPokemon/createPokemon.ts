import {CreatePokemonDTO} from "../../../adapters/primary/dto/createPokemonDTO";
import {PokemonRepositoryInterface} from "../../../adapters/secondary/repository/PokemonRepositoryInterface";
import {ActionsPokemonStore} from "../../../adapters/secondary/store/pokemonStore";

export const createPokemon = async (pokemon: CreatePokemonDTO, repository: PokemonRepositoryInterface, pokemonStore): Promise<CreatePokemonDTO> => {
    const insertedPokemon = repository.addPokemon(pokemon)
    await pokemonStore.dispatch({type: ActionsPokemonStore.addPokemon, payload: insertedPokemon})
    return insertedPokemon;
}