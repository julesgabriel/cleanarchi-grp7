import {Pokemon} from "../../entities/Pokemon";
import {PokemonRepositoryInterface} from "../../../adapters/secondary/repository/PokemonRepositoryInterface";

export const listSinglePokemon = async (id: string, pokemonRepository: PokemonRepositoryInterface): Promise<Pokemon> => {
    const pokemon = await pokemonRepository.listSingle(id);
    if (!pokemon) throw new Error();
    return pokemon;
}