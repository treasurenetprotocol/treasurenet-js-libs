import * as dependency_2 from "./../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
export declare namespace gravity.v1 {
    enum ClaimType {
        CLAIM_TYPE_UNSPECIFIED = 0,
        CLAIM_TYPE_SEND_TO_COSMOS = 1,
        CLAIM_TYPE_BATCH_SEND_TO_ETH = 2,
        CLAIM_TYPE_ERC20_DEPLOYED = 3,
        CLAIM_TYPE_LOGIC_CALL_EXECUTED = 4,
        CLAIM_TYPE_VALSET_UPDATED = 5
    }
    class Attestation extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            observed?: boolean;
            votes?: string[];
            height?: number;
            claim?: dependency_2.google.protobuf.Any;
        });
        get observed(): boolean;
        set observed(value: boolean);
        get votes(): string[];
        set votes(value: string[]);
        get height(): number;
        set height(value: number);
        get claim(): dependency_2.google.protobuf.Any;
        set claim(value: dependency_2.google.protobuf.Any);
        get has_claim(): boolean;
        static fromObject(data: {
            observed?: boolean;
            votes?: string[];
            height?: number;
            claim?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        }): Attestation;
        toObject(): {
            observed?: boolean;
            votes?: string[];
            height?: number;
            claim?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Attestation;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Attestation;
    }
    class ERC20Token extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            contract?: string;
            amount?: string;
        });
        get contract(): string;
        set contract(value: string);
        get amount(): string;
        set amount(value: string);
        static fromObject(data: {
            contract?: string;
            amount?: string;
        }): ERC20Token;
        toObject(): {
            contract?: string;
            amount?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ERC20Token;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ERC20Token;
    }
    class EventObservation extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            attestation_type?: string;
            bridge_contract?: string;
            bridge_chain_id?: string;
            attestation_id?: string;
            nonce?: string;
        });
        get attestation_type(): string;
        set attestation_type(value: string);
        get bridge_contract(): string;
        set bridge_contract(value: string);
        get bridge_chain_id(): string;
        set bridge_chain_id(value: string);
        get attestation_id(): string;
        set attestation_id(value: string);
        get nonce(): string;
        set nonce(value: string);
        static fromObject(data: {
            attestation_type?: string;
            bridge_contract?: string;
            bridge_chain_id?: string;
            attestation_id?: string;
            nonce?: string;
        }): EventObservation;
        toObject(): {
            attestation_type?: string;
            bridge_contract?: string;
            bridge_chain_id?: string;
            attestation_id?: string;
            nonce?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventObservation;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventObservation;
    }
    class EventInvalidSendToCosmosReceiver extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            amount?: string;
            nonce?: string;
            token?: string;
            sender?: string;
        });
        get amount(): string;
        set amount(value: string);
        get nonce(): string;
        set nonce(value: string);
        get token(): string;
        set token(value: string);
        get sender(): string;
        set sender(value: string);
        static fromObject(data: {
            amount?: string;
            nonce?: string;
            token?: string;
            sender?: string;
        }): EventInvalidSendToCosmosReceiver;
        toObject(): {
            amount?: string;
            nonce?: string;
            token?: string;
            sender?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventInvalidSendToCosmosReceiver;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventInvalidSendToCosmosReceiver;
    }
    class EventSendToCosmos extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            amount?: string;
            nonce?: string;
            token?: string;
        });
        get amount(): string;
        set amount(value: string);
        get nonce(): string;
        set nonce(value: string);
        get token(): string;
        set token(value: string);
        static fromObject(data: {
            amount?: string;
            nonce?: string;
            token?: string;
        }): EventSendToCosmos;
        toObject(): {
            amount?: string;
            nonce?: string;
            token?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventSendToCosmos;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventSendToCosmos;
    }
    class EventSendToCosmosLocal extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            nonce?: string;
            receiver?: string;
            token?: string;
            amount?: string;
        });
        get nonce(): string;
        set nonce(value: string);
        get receiver(): string;
        set receiver(value: string);
        get token(): string;
        set token(value: string);
        get amount(): string;
        set amount(value: string);
        static fromObject(data: {
            nonce?: string;
            receiver?: string;
            token?: string;
            amount?: string;
        }): EventSendToCosmosLocal;
        toObject(): {
            nonce?: string;
            receiver?: string;
            token?: string;
            amount?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventSendToCosmosLocal;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventSendToCosmosLocal;
    }
    class EventSendToCosmosIbc extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            nonce?: string;
            receiver?: string;
            token?: string;
            amount?: string;
            channel?: string;
        });
        get nonce(): string;
        set nonce(value: string);
        get receiver(): string;
        set receiver(value: string);
        get token(): string;
        set token(value: string);
        get amount(): string;
        set amount(value: string);
        get channel(): string;
        set channel(value: string);
        static fromObject(data: {
            nonce?: string;
            receiver?: string;
            token?: string;
            amount?: string;
            channel?: string;
        }): EventSendToCosmosIbc;
        toObject(): {
            nonce?: string;
            receiver?: string;
            token?: string;
            amount?: string;
            channel?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventSendToCosmosIbc;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventSendToCosmosIbc;
    }
}
//# sourceMappingURL=attestation.d.ts.map