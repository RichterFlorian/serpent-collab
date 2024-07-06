const { lancerDe } = require('../fonctions');

let pos1, pos2;
beforeAll(() => {
    pos1 = 1;
    pos2 = 1;
}); 

describe('test premier lancée dé', () => {
    it('J1', () => {   
        expect(1 < lancerDe(1, true) < 7).toBe(true)
    })

    it('J2', () => {   
        expect(1 < lancerDe(2, true) < 7).toBe(true)
    })
})

