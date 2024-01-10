export const MSG_SENDTOETH_TYPES = {
    MsgValue: [
        {name: 'sender', type: 'string'},
        {name: 'eth_dest', type: 'string'},
        {name: 'amount', type: 'TypeAmount'},
        {name: 'bridge_fee', type: 'TypeBridgeFee'},
    ],
    TypeAmount: [
        {name: 'denom', type: 'string'},
        {name: 'amount', type: 'string'},
    ],
    TypeBridgeFee: [
        {name: 'denom', type: 'string'},
        {name: 'amount', type: 'string'},
    ]
};

export function createMsgSendToEth(
    sender: string,
    eth_dest: string,
    amount: string,
    denom: string,
    bfAmount: string,
    bfDenom: string
) {
    return {
        type: 'gravity/MsgSendToEth',
        value: {
            amount: {
                amount,
                denom,
            },
            bridge_fee: {
                amount: bfAmount,
                denom: bfDenom,
            },
            sender,
            eth_dest,
        },
    };
}
