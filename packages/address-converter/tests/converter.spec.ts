import {
    ETH, TREASURENET, COSMOS,
    ethToCosmos,
    cosmosToEth,
    ethToTreasurenet,
    treasurenetToEth
} from '../src'

describe('converter tests', () => {
    it('decoders', () => {
        // ETH
        let hex = ETH.decoder('0xCef7fccBD38A940DAFAC9F6D2567Fd51C4Da6926')
        expect(hex.toString('hex')).toBe('cef7fccbd38a940dafac9f6d2567fd51c4da6926')

        // TREASURENET
        hex = TREASURENET.decoder('treasurenet1emmlej7n322qmtavnakj2ela28zd56fxa0a27u')
        expect(hex.toString('hex')).toBe('cef7fccbd38a940dafac9f6d2567fd51c4da6926')

        // COSMOS
        hex = COSMOS.decoder('cosmos1emmlej7n322qmtavnakj2ela28zd56fxf4c3jq')
        expect(hex.toString('hex')).toBe('cef7fccbd38a940dafac9f6d2567fd51c4da6926')
    })

    it('encoders', () => {
        // ETH
        let address = ETH.encoder(
            Buffer.from('cef7fccbd38a940dafac9f6d2567fd51c4da6926', 'hex'),
        )
        expect(address).toBe('0xCef7fccBD38A940DAFAC9F6D2567Fd51C4Da6926')

        // TREASURENET
        address = TREASURENET.encoder(
            Buffer.from('cef7fccbd38a940dafac9f6d2567fd51c4da6926', 'hex'),
        )
        expect(address).toBe('treasurenet1emmlej7n322qmtavnakj2ela28zd56fxa0a27u')

        // COSMOS
        address = COSMOS.encoder(
            Buffer.from('cef7fccbd38a940dafac9f6d2567fd51c4da6926', 'hex'),
        )
        expect(address).toBe('cosmos1emmlej7n322qmtavnakj2ela28zd56fxf4c3jq')
    })

    it('converters', () => {
        // ETH to COSMOS
        let address = ethToCosmos('0xCef7fccBD38A940DAFAC9F6D2567Fd51C4Da6926')
        expect(address).toBe('cosmos1emmlej7n322qmtavnakj2ela28zd56fxf4c3jq')

        // COSMOS to ETH
        address = cosmosToEth('cosmos1emmlej7n322qmtavnakj2ela28zd56fxf4c3jq')
        expect(address).toBe('0xCef7fccBD38A940DAFAC9F6D2567Fd51C4Da6926')

        // ETH to TREASURENET
        address = ethToTreasurenet('0xCef7fccBD38A940DAFAC9F6D2567Fd51C4Da6926')
        expect(address).toBe('treasurenet1emmlej7n322qmtavnakj2ela28zd56fxa0a27u')

        // TREASURENET to ETH
        address = treasurenetToEth('treasurenet1emmlej7n322qmtavnakj2ela28zd56fxa0a27u')
        expect(address).toBe('0xCef7fccBD38A940DAFAC9F6D2567Fd51C4Da6926')


    })
})
