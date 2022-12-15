import {generateIdForPokemon} from "./generateIdForPokemon";

describe('Generate Id for pokemon', () => {
    it('Should return a concatenation of name with Id', () => {
        expect(generateIdForPokemon("salameche")).toEqual('salamecheId')
    })
})