import {PokemonTypeEnum} from "../enums/PokemonTypeEnum";

export type Pokemon = {
    id: string
    name: string
    type: PokemonTypeEnum
}