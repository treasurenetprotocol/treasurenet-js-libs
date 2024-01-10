import * as pb_1 from "google-protobuf";
export declare namespace gravity.v1 {
    class IDSet extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            ids?: number[];
        });
        get ids(): number[];
        set ids(value: number[]);
        static fromObject(data: {
            ids?: number[];
        }): IDSet;
        toObject(): {
            ids?: number[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IDSet;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): IDSet;
    }
    class BatchFees extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            token?: string;
            total_fees?: string;
            tx_count?: number;
        });
        get token(): string;
        set token(value: string);
        get total_fees(): string;
        set total_fees(value: string);
        get tx_count(): number;
        set tx_count(value: number);
        static fromObject(data: {
            token?: string;
            total_fees?: string;
            tx_count?: number;
        }): BatchFees;
        toObject(): {
            token?: string;
            total_fees?: string;
            tx_count?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BatchFees;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BatchFees;
    }
    class EventWithdrawalReceived extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            bridge_contract?: string;
            bridge_chain_id?: string;
            outgoing_tx_id?: string;
            nonce?: string;
        });
        get bridge_contract(): string;
        set bridge_contract(value: string);
        get bridge_chain_id(): string;
        set bridge_chain_id(value: string);
        get outgoing_tx_id(): string;
        set outgoing_tx_id(value: string);
        get nonce(): string;
        set nonce(value: string);
        static fromObject(data: {
            bridge_contract?: string;
            bridge_chain_id?: string;
            outgoing_tx_id?: string;
            nonce?: string;
        }): EventWithdrawalReceived;
        toObject(): {
            bridge_contract?: string;
            bridge_chain_id?: string;
            outgoing_tx_id?: string;
            nonce?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventWithdrawalReceived;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventWithdrawalReceived;
    }
    class EventWithdrawCanceled extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            sender?: string;
            tx_id?: string;
            bridge_contract?: string;
            bridge_chain_id?: string;
        });
        get sender(): string;
        set sender(value: string);
        get tx_id(): string;
        set tx_id(value: string);
        get bridge_contract(): string;
        set bridge_contract(value: string);
        get bridge_chain_id(): string;
        set bridge_chain_id(value: string);
        static fromObject(data: {
            sender?: string;
            tx_id?: string;
            bridge_contract?: string;
            bridge_chain_id?: string;
        }): EventWithdrawCanceled;
        toObject(): {
            sender?: string;
            tx_id?: string;
            bridge_contract?: string;
            bridge_chain_id?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventWithdrawCanceled;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventWithdrawCanceled;
    }
}
//# sourceMappingURL=pool.d.ts.map