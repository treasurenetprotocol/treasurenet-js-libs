import * as gravity from '../proto/gravity/v1/msgs'
import * as coin from '../proto/cosmos/base/v1beta1/coin'

export function createMsgSendtoEth(
    sender: string, eth_dest: string, amount: string, denom: string, bfAmount: string, bfDenom: string
) {
    const value = new coin.cosmos.base.v1beta1.Coin({
        denom,
        amount,
    })

    const bfvalue = new coin.cosmos.base.v1beta1.Coin({
        denom: bfDenom,
        amount: bfAmount,
    });

    const message = new gravity.gravity.v1.MsgSendToEth({
        sender,
        eth_dest,
        amount: value,
        bridge_fee: bfvalue,
    });
    return {
        message,
        path: 'gravity.v1.MsgSendToEth',
    };
}

