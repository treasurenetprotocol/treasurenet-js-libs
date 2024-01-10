import * as dependency_2 from "./attestation";
import * as pb_1 from "google-protobuf";
export declare namespace gravity.v1 {
    class OutgoingTxBatch extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            batch_nonce?: number;
            batch_timeout?: number;
            transactions?: OutgoingTransferTx[];
            token_contract?: string;
            block?: number;
        });
        get batch_nonce(): number;
        set batch_nonce(value: number);
        get batch_timeout(): number;
        set batch_timeout(value: number);
        get transactions(): OutgoingTransferTx[];
        set transactions(value: OutgoingTransferTx[]);
        get token_contract(): string;
        set token_contract(value: string);
        get block(): number;
        set block(value: number);
        static fromObject(data: {
            batch_nonce?: number;
            batch_timeout?: number;
            transactions?: ReturnType<typeof OutgoingTransferTx.prototype.toObject>[];
            token_contract?: string;
            block?: number;
        }): OutgoingTxBatch;
        toObject(): {
            batch_nonce?: number;
            batch_timeout?: number;
            transactions?: ReturnType<typeof OutgoingTransferTx.prototype.toObject>[];
            token_contract?: string;
            block?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OutgoingTxBatch;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): OutgoingTxBatch;
    }
    class OutgoingTransferTx extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            id?: number;
            sender?: string;
            dest_address?: string;
            erc20_token?: dependency_2.gravity.v1.ERC20Token;
            erc20_fee?: dependency_2.gravity.v1.ERC20Token;
        });
        get id(): number;
        set id(value: number);
        get sender(): string;
        set sender(value: string);
        get dest_address(): string;
        set dest_address(value: string);
        get erc20_token(): dependency_2.gravity.v1.ERC20Token;
        set erc20_token(value: dependency_2.gravity.v1.ERC20Token);
        get has_erc20_token(): boolean;
        get erc20_fee(): dependency_2.gravity.v1.ERC20Token;
        set erc20_fee(value: dependency_2.gravity.v1.ERC20Token);
        get has_erc20_fee(): boolean;
        static fromObject(data: {
            id?: number;
            sender?: string;
            dest_address?: string;
            erc20_token?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>;
            erc20_fee?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>;
        }): OutgoingTransferTx;
        toObject(): {
            id?: number;
            sender?: string;
            dest_address?: string;
            erc20_token?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>;
            erc20_fee?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OutgoingTransferTx;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): OutgoingTransferTx;
    }
    class OutgoingLogicCall extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            transfers?: dependency_2.gravity.v1.ERC20Token[];
            fees?: dependency_2.gravity.v1.ERC20Token[];
            logic_contract_address?: string;
            payload?: Uint8Array;
            timeout?: number;
            invalidation_id?: Uint8Array;
            invalidation_nonce?: number;
            block?: number;
        });
        get transfers(): dependency_2.gravity.v1.ERC20Token[];
        set transfers(value: dependency_2.gravity.v1.ERC20Token[]);
        get fees(): dependency_2.gravity.v1.ERC20Token[];
        set fees(value: dependency_2.gravity.v1.ERC20Token[]);
        get logic_contract_address(): string;
        set logic_contract_address(value: string);
        get payload(): Uint8Array;
        set payload(value: Uint8Array);
        get timeout(): number;
        set timeout(value: number);
        get invalidation_id(): Uint8Array;
        set invalidation_id(value: Uint8Array);
        get invalidation_nonce(): number;
        set invalidation_nonce(value: number);
        get block(): number;
        set block(value: number);
        static fromObject(data: {
            transfers?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>[];
            fees?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>[];
            logic_contract_address?: string;
            payload?: Uint8Array;
            timeout?: number;
            invalidation_id?: Uint8Array;
            invalidation_nonce?: number;
            block?: number;
        }): OutgoingLogicCall;
        toObject(): {
            transfers?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>[];
            fees?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>[];
            logic_contract_address?: string;
            payload?: Uint8Array;
            timeout?: number;
            invalidation_id?: Uint8Array;
            invalidation_nonce?: number;
            block?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OutgoingLogicCall;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): OutgoingLogicCall;
    }
    class EventOutgoingBatchCanceled extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            bridge_contract?: string;
            bridge_chain_id?: string;
            batch_id?: string;
            nonce?: string;
        });
        get bridge_contract(): string;
        set bridge_contract(value: string);
        get bridge_chain_id(): string;
        set bridge_chain_id(value: string);
        get batch_id(): string;
        set batch_id(value: string);
        get nonce(): string;
        set nonce(value: string);
        static fromObject(data: {
            bridge_contract?: string;
            bridge_chain_id?: string;
            batch_id?: string;
            nonce?: string;
        }): EventOutgoingBatchCanceled;
        toObject(): {
            bridge_contract?: string;
            bridge_chain_id?: string;
            batch_id?: string;
            nonce?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventOutgoingBatchCanceled;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventOutgoingBatchCanceled;
    }
    class EventOutgoingBatch extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            bridge_contract?: string;
            bridge_chain_id?: string;
            batch_id?: string;
            nonce?: string;
        });
        get bridge_contract(): string;
        set bridge_contract(value: string);
        get bridge_chain_id(): string;
        set bridge_chain_id(value: string);
        get batch_id(): string;
        set batch_id(value: string);
        get nonce(): string;
        set nonce(value: string);
        static fromObject(data: {
            bridge_contract?: string;
            bridge_chain_id?: string;
            batch_id?: string;
            nonce?: string;
        }): EventOutgoingBatch;
        toObject(): {
            bridge_contract?: string;
            bridge_chain_id?: string;
            batch_id?: string;
            nonce?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventOutgoingBatch;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventOutgoingBatch;
    }
}
//# sourceMappingURL=batch.d.ts.map