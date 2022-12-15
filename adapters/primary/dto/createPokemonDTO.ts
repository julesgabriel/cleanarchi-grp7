import {PokemonTypeEnum} from "../../../core/enums/PokemonTypeEnum";

export type CreatePokemonDTO = {
    name: string
    type: PokemonTypeEnum
}