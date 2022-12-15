import {PokemonRepositoryInterface} from "./PokemonRepositoryInterface";
import {Pokemon} from "../../../core/entities/Pokemon";
import {CreatePokemonDTO} from "../../primary/dto/createPokemonDTO";
import {generateIdForPokemon} from "./helper/generateIdForPokemon";

export class PokemonRepositoryInMemory implements PokemonRepositoryInterface {
    private allPokemon: Array<Pokemon> = []
    addPokemon(pokemon: CreatePokemonDTO): Pokemon {
        const pokemonToInsert = {
            id: generateIdForPokemon(pokemon.name),
            ...pokemon
        }
        this.allPokemon.push(pokemonToInsert)
        return pokemonToInsert;
    }

    listAll(): Promise<Array<Pokemon>> {
        return Promise.resolve(this.allPokemon);
    }

    async listSingle(id: string): Promise<Pokemon> {
        let pokemon =  this.allPokemon.find(el => el.id === id)
        return Promise.resolve(pokemon);
    }

    feedsWith(...pokemon: Array<Pokemon>): void {
        this.allPokemon = pokemon
    }


}