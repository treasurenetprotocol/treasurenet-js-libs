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
