import {
    createMsgSendtoEth as protoMsgSendtoEth,
    createTransaction
} from '@treasurenet/proto'
import {
    createEIP712,
    MSG_SENDTOETH_TYPES,
    createMsgSendToEth,
    generateFee,
    generateTypes,
    generateMessage
} from '@treasurenet/eip712'
import {Chain, Fee, Sender} from './common'

export interface MsgSendtoEthParams {
    ethDest: string,
    amount: string,
    denom: string,
    bfAmount: string,
    bfDenom: string
}

export function createTxMsgSendtoEth(
    chain: Chain,
    sender: Sender,
    fee: Fee,
    memo: string,
    params: MsgSendtoEthParams,
) {
    // EIP712
    const feeObject = generateFee(
        fee.amount,
        fee.denom,
        fee.gas,
        sender.accountAddress,
    )
    const types = generateTypes(MSG_SENDTOETH_TYPES)
    const msg = createMsgSendToEth(
        sender.accountAddress, params.ethDest, params.amount, params.denom, params.bfAmount, params.bfDenom
    )
    const messages = generateMessage(
        sender.accountNumber.toString(),
        sender.sequence.toString(),
        chain.cosmosChainId,
        memo,
        feeObject,
        msg,
    )
    const eipToSign = createEIP712(types, chain.chainId, messages)

    // Cosmos
    const protoMessage = protoMsgSendtoEth(
        sender.accountAddress, params.ethDest, params.amount, params.denom, params.bfAmount, params.bfDenom
    )
    const tx = createTransaction(
        protoMessage,
        memo,
        fee.amount,
        fee.denom,
        parseInt(fee.gas, 10),
        'ethsecp256',
        sender.pubkey,
        sender.sequence,
        sender.accountNumber,
        chain.cosmosChainId,
    )

    return {
        signDirect: tx.signDirect,
        legacyAmino: tx.legacyAmino,
        eipToSign,
    }
}
