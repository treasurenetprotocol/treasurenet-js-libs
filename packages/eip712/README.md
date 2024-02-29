<p align="center">
  <a href="https://treasurenet.io">
    <img alt="treasurenetLogo" src="https://raw.githubusercontent.com/treasurenetprotocol/docs/feature/1.0.3/static/img/logo_tn_github.png" width="250" />
  </a>
</p>

# Treasurenet

Treasurenet proposes a solution for the critical lack of sustaining and tangible value in the crypto world. Our goal is the combine real world economic drivers and distributed ledger scalability. As a layer 1 protocol, TN will become a model for sustaining value in the fiat world and the digital world.

# Treasurenet Javascript Libraries - EIP712

<a href="https://github.com/treasurenetprotocol/treasurenet-js-libs/blob/master/LICENSE"><img alt="License: Apache-2.0" src="https://img.shields.io/badge/license-Apache_2.0-blue"/></a>  <img alt="npm: v9.5.1" src="https://img.shields.io/badge/npm-v9.5.1-yellow" />

EIP712 transaction creator. 

## Installation

```shell
    npm install @treasurenet/eip712
```

## Usage and Example

```javascript

import {
  createEIP712,
  generateFee,
  generateMessage,
  generateTypes,
  createMsgSend,
  MSG_SEND_TYPES,
} from '@treasurenet/eip712'

let fee = generateFee(
  '20',
  'aunit',
  '20000',
  'treasurenet1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048',
)
let types = generateTypes(MSG_SEND_TYPES)
let msg = createMsgSend(
  '1',
  'aunit',
  'treasurenet1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048',
  'treasurenet1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048',
)
let messages = generateMessage('9', '0', 'treasurnet-9000-1', '', fee, msg)
let complete = createEIP712(types, 9000, messages)
console.log(complete);

```

```

{
    types: {
        EIP712Domain: [ [Object], [Object], [Object], [Object], [Object] ],
            Tx: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
            Fee: [ [Object], [Object], [Object] ],
            Coin: [ [Object], [Object] ],
            Msg: [ [Object], [Object] ],
            MsgValue: [ [Object], [Object], [Object] ],
            TypeAmount: [ [Object], [Object] ]
    },
    primaryType: 'Tx',
        domain: {
    name: 'Cosmos Web3',
        version: '1.0.0',
        chainId: 9000,
        verifyingContract: 'cosmos',
        salt: '0'
},
    message: {
        account_number: '9',
            chain_id: 'treasurnet-9000-1',
            fee: {
            amount: [Array],
                gas: '20000',
                feePayer: 'treasurenet1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048'
        },
        memo: '',
            msgs: [ [Object] ],
            sequence: '0'
    }
}


```

## npmjs.com

- https://www.npmjs.com/package/@treasurenet/eip712


-----
_Treasurenet Foundation 2024_
