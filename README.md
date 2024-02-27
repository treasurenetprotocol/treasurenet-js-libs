<p align="center">
  <a href="https://treasurenet.io">
    <img alt="treasurenetLogo" src="https://raw.githubusercontent.com/treasurenetprotocol/docs/feature/1.0.3/static/img/logo_tn_github.png" width="250" />
  </a>
</p>

# Treasurenet

Treasurenet proposes a solution for the critical lack of sustaining and tangible value in the crypto world. Our goal is the combine real world economic drivers and distributed ledger scalability. As a layer 1 protocol, TN will become a model for sustaining value in the fiat world and the digital world.

# Treasurenet Javascript Libraries

This tool library is used to help Nodejs (Javascript) developers easily use various functions of Treasurenet.

include:
- address-converter : A simple converter between ETH address and Treasurenet addresses.
- proto : Protobuf files used to generate cosmos and Treasurenet transactions.
- provider : A simple provider to query the Treasurenet rest api.
- eip712 : EIP712 transaction creator
- transactions : Transactions generator for Treasurenet
- hash : 

## Installation

```shell
    npm install @treasurenet/address-converter
    npm install @treasurenet/proto
    npm install @treasurenet/provider
    npm install @treasurenet/eip712
    npm install @treasurenet/transactions
    npm install @treasurenet/hash
```

## Usage and Example

### @treasurenet/address-converter

#### Converter

```javascript
import {ethToTreasurenet, treasurenetToEth, ethToCosmos, cosmosToEth} from "@treasurenet/address-converter"

let address = ethToTreasurenet("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71")
// "treasurenet1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048"

let address = treasurenetToEth("treasurenet1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048")
// "0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71"

let address = ethToCosmos("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71");
// "cosmos1uttpuj0l32whynx9f5ecmqrklpu2c6m37sldk9"

let address = cosmosToEth("cosmos1uttpuj0l32whynx9f5ecmqrklpu2c6m37sldk9");
// "0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71"

```

#### Decoders

```javascript
import {ETH, TREASURENET, COSMOS} from "@treasurenet/address-converter"

let hex = ETH.decoder("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71")
// hex.toString('hex') === "e2d61e49ff8a9d724cc54d338d8076f878ac6b71"

hex = TREASURENET.decoder("treasurenet1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048")
// hex.toString('hex') === "e2d61e49ff8a9d724cc54d338d8076f878ac6b71"

hex = COSMOS.decoder("cosmos1uttpuj0l32whynx9f5ecmqrklpu2c6m37sldk9");
// hex.toString('hex') === "e2d61e49ff8a9d724cc54d338d8076f878ac6b71"
```
#### Encoders

```javascript
import {ETH, TREASURENET, COSMOS} from "@treasurenet/address-converter"

let address = ETH.encoder(Buffer.from("e2d61e49ff8a9d724cc54d338d8076f878ac6b71", "hex"))
// address === "0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71"

address = TREASURENET.encoder(Buffer.from("e2d61e49ff8a9d724cc54d338d8076f878ac6b71", "hex"))
// address === "treasurenet1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048"

address = COSMOS.encoder(Buffer.from("e2d61e49ff8a9d724cc54d338d8076f878ac6b71", "hex"))
// address === "cosmos1uttpuj0l32whynx9f5ecmqrklpu2c6m37sldk9"
```
## npmjs.com

- https://www.npmjs.com/package/@treasurenet/address-converter
- https://www.npmjs.com/package/@treasurenet/proto
- https://www.npmjs.com/package/@treasurenet/provider
- https://www.npmjs.com/package/@treasurenet/eip712
- https://www.npmjs.com/package/@treasurenet/transactions
- https://www.npmjs.com/package/@treasurenet/hash

-----
_Treasurenet Foundation 2024_
