import {PokemonRepositoryInMemory} from "../../../adapters/secondary/repository/PokemonRepositoryInMemory";
import {PokemonTypeEnum} from "../../enums/PokemonTypeEnum";
import {listSinglePokemon} from "./listSinglePokemon";

describe('get single pokemon by id', () => {
    let pokemonRepository: PokemonRepositoryInMemory;
    beforeEach(() => {
        pokemonRepository = new PokemonRepositoryInMemory();
        pokemonRepository.feedsWith({
            id: 'salamecheId',
            name: 'salameche',
            type: PokemonTypeEnum.feu
        }, {
            id: 'carapuceId',
            name: 'carapuce',
            type: PokemonTypeEnum.eau,
        })
    })

    describe('Populate', () => {
        it('should return a pokemon object when id is provided', async () => {
            const expected = await listSinglePokemon('salamecheId', pokemonRepository);
            await expect(expected).toEqual({
                id: 'salamecheId',
                name: 'salameche',
                type: PokemonTypeEnum.feu
            });
        })
    })

    describe('Empty', () => {
        it('should throw error when no pokemon have this id', async () => {
            await expect(listSinglePokemon('bulbizareId', pokemonRepository)).rejects.toThrow(new Error())
        });
    })
});