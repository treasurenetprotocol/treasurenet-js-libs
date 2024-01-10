import * as dependency_2 from "./../../cosmos/bank/v1beta1/bank";
import * as pb_1 from "google-protobuf";
export declare namespace gravity.v1 {
    class BridgeValidator extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            power?: number;
            ethereum_address?: string;
        });
        get power(): number;
        set power(value: number);
        get ethereum_address(): string;
        set ethereum_address(value: string);
        static fromObject(data: {
            power?: number;
            ethereum_address?: string;
        }): BridgeValidator;
        toObject(): {
            power?: number;
            ethereum_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BridgeValidator;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BridgeValidator;
    }
    class Valset extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            nonce?: number;
            members?: BridgeValidator[];
            height?: number;
            reward_amount?: string;
            reward_token?: string;
        });
        get nonce(): number;
        set nonce(value: number);
        get members(): BridgeValidator[];
        set members(value: BridgeValidator[]);
        get height(): number;
        set height(value: number);
        get reward_amount(): string;
        set reward_amount(value: string);
        get reward_token(): string;
        set reward_token(value: string);
        static fromObject(data: {
            nonce?: number;
            members?: ReturnType<typeof BridgeValidator.prototype.toObject>[];
            height?: number;
            reward_amount?: string;
            reward_token?: string;
        }): Valset;
        toObject(): {
            nonce?: number;
            members?: ReturnType<typeof BridgeValidator.prototype.toObject>[];
            height?: number;
            reward_amount?: string;
            reward_token?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Valset;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Valset;
    }
    class LastObservedEthereumBlockHeight extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            cosmos_block_height?: number;
            ethereum_block_height?: number;
        });
        get cosmos_block_height(): number;
        set cosmos_block_height(value: number);
        get ethereum_block_height(): number;
        set ethereum_block_height(value: number);
        static fromObject(data: {
            cosmos_block_height?: number;
            ethereum_block_height?: number;
        }): LastObservedEthereumBlockHeight;
        toObject(): {
            cosmos_block_height?: number;
            ethereum_block_height?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LastObservedEthereumBlockHeight;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): LastObservedEthereumBlockHeight;
    }
    class ERC20ToDenom extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            erc20?: string;
            denom?: string;
        });
        get erc20(): string;
        set erc20(value: string);
        get denom(): string;
        set denom(value: string);
        static fromObject(data: {
            erc20?: string;
            denom?: string;
        }): ERC20ToDenom;
        toObject(): {
            erc20?: string;
            denom?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ERC20ToDenom;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ERC20ToDenom;
    }
    class UnhaltBridgeProposal extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            target_nonce?: number;
        });
        get title(): string;
        set title(value: string);
        get description(): string;
        set description(value: string);
        get target_nonce(): number;
        set target_nonce(value: number);
        static fromObject(data: {
            title?: string;
            description?: string;
            target_nonce?: number;
        }): UnhaltBridgeProposal;
        toObject(): {
            title?: string;
            description?: string;
            target_nonce?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UnhaltBridgeProposal;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): UnhaltBridgeProposal;
    }
    class AirdropProposal extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            denom?: string;
            recipients?: Uint8Array;
            amounts?: number[];
        });
        get title(): string;
        set title(value: string);
        get description(): string;
        set description(value: string);
        get denom(): string;
        set denom(value: string);
        get recipients(): Uint8Array;
        set recipients(value: Uint8Array);
        get amounts(): number[];
        set amounts(value: number[]);
        static fromObject(data: {
            title?: string;
            description?: string;
            denom?: string;
            recipients?: Uint8Array;
            amounts?: number[];
        }): AirdropProposal;
        toObject(): {
            title?: string;
            description?: string;
            denom?: string;
            recipients?: Uint8Array;
            amounts?: number[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AirdropProposal;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): AirdropProposal;
    }
    class IBCMetadataProposal extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            metadata?: dependency_2.cosmos.bank.v1beta1.Metadata;
            ibc_denom?: string;
        });
        get title(): string;
        set title(value: string);
        get description(): string;
        set description(value: string);
        get metadata(): dependency_2.cosmos.bank.v1beta1.Metadata;
        set metadata(value: dependency_2.cosmos.bank.v1beta1.Metadata);
        get has_metadata(): boolean;
        get ibc_denom(): string;
        set ibc_denom(value: string);
        static fromObject(data: {
            title?: string;
            description?: string;
            metadata?: ReturnType<typeof dependency_2.cosmos.bank.v1beta1.Metadata.prototype.toObject>;
            ibc_denom?: string;
        }): IBCMetadataProposal;
        toObject(): {
            title?: string;
            description?: string;
            metadata?: ReturnType<typeof dependency_2.cosmos.bank.v1beta1.Metadata.prototype.toObject>;
            ibc_denom?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IBCMetadataProposal;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): IBCMetadataProposal;
    }
}
//# sourceMappingURL=types.d.ts.map