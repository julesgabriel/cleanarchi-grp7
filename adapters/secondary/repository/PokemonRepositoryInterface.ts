import {Pokemon} from "../../../core/entities/Pokemon";
import {CreatePokemonDTO} from "../../primary/dto/createPokemonDTO";

export interface PokemonRepositoryInterface {
    addPokemon(pokemon: CreatePokemonDTO): Pokemon
    listAll(): Promise<Array<Pokemon>>
    listSingle(id: string): Promise<Pokemon>
}