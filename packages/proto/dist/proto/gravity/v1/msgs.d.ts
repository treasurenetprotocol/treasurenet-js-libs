import * as dependency_1 from "./../../cosmos/base/v1beta1/coin";
import * as dependency_4 from "./types";
import * as dependency_5 from "./../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace gravity.v1 {
    export class MsgSetOrchestratorAddress extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validator?: string;
            orchestrator?: string;
            eth_address?: string;
        });
        get validator(): string;
        set validator(value: string);
        get orchestrator(): string;
        set orchestrator(value: string);
        get eth_address(): string;
        set eth_address(value: string);
        static fromObject(data: {
            validator?: string;
            orchestrator?: string;
            eth_address?: string;
        }): MsgSetOrchestratorAddress;
        toObject(): {
            validator?: string;
            orchestrator?: string;
            eth_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSetOrchestratorAddress;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSetOrchestratorAddress;
    }
    export class MsgSetOrchestratorAddressResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgSetOrchestratorAddressResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSetOrchestratorAddressResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSetOrchestratorAddressResponse;
    }
    export class MsgValsetConfirm extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            nonce?: number;
            orchestrator?: string;
            eth_address?: string;
            signature?: string;
        });
        get nonce(): number;
        set nonce(value: number);
        get orchestrator(): string;
        set orchestrator(value: string);
        get eth_address(): string;
        set eth_address(value: string);
        get signature(): string;
        set signature(value: string);
        static fromObject(data: {
            nonce?: number;
            orchestrator?: string;
            eth_address?: string;
            signature?: string;
        }): MsgValsetConfirm;
        toObject(): {
            nonce?: number;
            orchestrator?: string;
            eth_address?: string;
            signature?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgValsetConfirm;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgValsetConfirm;
    }
    export class MsgValsetConfirmResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgValsetConfirmResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgValsetConfirmResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgValsetConfirmResponse;
    }
    export class MsgSendToEth extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            sender?: string;
            eth_dest?: string;
            amount?: dependency_1.cosmos.base.v1beta1.Coin;
            bridge_fee?: dependency_1.cosmos.base.v1beta1.Coin;
        });
        get sender(): string;
        set sender(value: string);
        get eth_dest(): string;
        set eth_dest(value: string);
        get amount(): dependency_1.cosmos.base.v1beta1.Coin;
        set amount(value: dependency_1.cosmos.base.v1beta1.Coin);
        get has_amount(): boolean;
        get bridge_fee(): dependency_1.cosmos.base.v1beta1.Coin;
        set bridge_fee(value: dependency_1.cosmos.base.v1beta1.Coin);
        get has_bridge_fee(): boolean;
        static fromObject(data: {
            sender?: string;
            eth_dest?: string;
            amount?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>;
            bridge_fee?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>;
        }): MsgSendToEth;
        toObject(): {
            sender?: string;
            eth_dest?: string;
            amount?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>;
            bridge_fee?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSendToEth;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSendToEth;
    }
    export class MsgSendToEthResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgSendToEthResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSendToEthResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSendToEthResponse;
    }
    export class MsgRequestBatch extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            sender?: string;
            denom?: string;
        });
        get sender(): string;
        set sender(value: string);
        get denom(): string;
        set denom(value: string);
        static fromObject(data: {
            sender?: string;
            denom?: string;
        }): MsgRequestBatch;
        toObject(): {
            sender?: string;
            denom?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRequestBatch;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRequestBatch;
    }
    export class MsgRequestBatchResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgRequestBatchResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRequestBatchResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRequestBatchResponse;
    }
    export class MsgConfirmBatch extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            nonce?: number;
            token_contract?: string;
            eth_signer?: string;
            orchestrator?: string;
            signature?: string;
        });
        get nonce(): number;
        set nonce(value: number);
        get token_contract(): string;
        set token_contract(value: string);
        get eth_signer(): string;
        set eth_signer(value: string);
        get orchestrator(): string;
        set orchestrator(value: string);
        get signature(): string;
        set signature(value: string);
        static fromObject(data: {
            nonce?: number;
            token_contract?: string;
            eth_signer?: string;
            orchestrator?: string;
            signature?: string;
        }): MsgConfirmBatch;
        toObject(): {
            nonce?: number;
            token_contract?: string;
            eth_signer?: string;
            orchestrator?: string;
            signature?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConfirmBatch;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConfirmBatch;
    }
    export class MsgConfirmBatchResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgConfirmBatchResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConfirmBatchResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConfirmBatchResponse;
    }
    export class MsgConfirmLogicCall extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            invalidation_id?: string;
            invalidation_nonce?: number;
            eth_signer?: string;
            orchestrator?: string;
            signature?: string;
        });
        get invalidation_id(): string;
        set invalidation_id(value: string);
        get invalidation_nonce(): number;
        set invalidation_nonce(value: number);
        get eth_signer(): string;
        set eth_signer(value: string);
        get orchestrator(): string;
        set orchestrator(value: string);
        get signature(): string;
        set signature(value: string);
        static fromObject(data: {
            invalidation_id?: string;
            invalidation_nonce?: number;
            eth_signer?: string;
            orchestrator?: string;
            signature?: string;
        }): MsgConfirmLogicCall;
        toObject(): {
            invalidation_id?: string;
            invalidation_nonce?: number;
            eth_signer?: string;
            orchestrator?: string;
            signature?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConfirmLogicCall;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConfirmLogicCall;
    }
    export class MsgConfirmLogicCallResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgConfirmLogicCallResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConfirmLogicCallResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConfirmLogicCallResponse;
    }
    export class MsgSendToCosmosClaim extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            event_nonce?: number;
            block_height?: number;
            token_contract?: string;
            amount?: string;
            ethereum_sender?: string;
            cosmos_receiver?: string;
            orchestrator?: string;
        });
        get event_nonce(): number;
        set event_nonce(value: number);
        get block_height(): number;
        set block_height(value: number);
        get token_contract(): string;
        set token_contract(value: string);
        get amount(): string;
        set amount(value: string);
        get ethereum_sender(): string;
        set ethereum_sender(value: string);
        get cosmos_receiver(): string;
        set cosmos_receiver(value: string);
        get orchestrator(): string;
        set orchestrator(value: string);
        static fromObject(data: {
            event_nonce?: number;
            block_height?: number;
            token_contract?: string;
            amount?: string;
            ethereum_sender?: string;
            cosmos_receiver?: string;
            orchestrator?: string;
        }): MsgSendToCosmosClaim;
        toObject(): {
            event_nonce?: number;
            block_height?: number;
            token_contract?: string;
            amount?: string;
            ethereum_sender?: string;
            cosmos_receiver?: string;
            orchestrator?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSendToCosmosClaim;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSendToCosmosClaim;
    }
    export class MsgSendToCosmosClaimResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgSendToCosmosClaimResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSendToCosmosClaimResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSendToCosmosClaimResponse;
    }
    export class MsgBatchSendToEthClaim extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            event_nonce?: number;
            block_height?: number;
            batch_nonce?: number;
            token_contract?: string;
            orchestrator?: string;
        });
        get event_nonce(): number;
        set event_nonce(value: number);
        get block_height(): number;
        set block_height(value: number);
        get batch_nonce(): number;
        set batch_nonce(value: number);
        get token_contract(): string;
        set token_contract(value: string);
        get orchestrator(): string;
        set orchestrator(value: string);
        static fromObject(data: {
            event_nonce?: number;
            block_height?: number;
            batch_nonce?: number;
            token_contract?: string;
            orchestrator?: string;
        }): MsgBatchSendToEthClaim;
        toObject(): {
            event_nonce?: number;
            block_height?: number;
            batch_nonce?: number;
            token_contract?: string;
            orchestrator?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgBatchSendToEthClaim;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgBatchSendToEthClaim;
    }
    export class MsgBatchSendToEthClaimResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgBatchSendToEthClaimResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgBatchSendToEthClaimResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgBatchSendToEthClaimResponse;
    }
    export class MsgERC20DeployedClaim extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            event_nonce?: number;
            block_height?: number;
            cosmos_denom?: string;
            token_contract?: string;
            name?: string;
            symbol?: string;
            decimals?: number;
            orchestrator?: string;
        });
        get event_nonce(): number;
        set event_nonce(value: number);
        get block_height(): number;
        set block_height(value: number);
        get cosmos_denom(): string;
        set cosmos_denom(value: string);
        get token_contract(): string;
        set token_contract(value: string);
        get name(): string;
        set name(value: string);
        get symbol(): string;
        set symbol(value: string);
        get decimals(): number;
        set decimals(value: number);
        get orchestrator(): string;
        set orchestrator(value: string);
        static fromObject(data: {
            event_nonce?: number;
            block_height?: number;
            cosmos_denom?: string;
            token_contract?: string;
            name?: string;
            symbol?: string;
            decimals?: number;
            orchestrator?: string;
        }): MsgERC20DeployedClaim;
        toObject(): {
            event_nonce?: number;
            block_height?: number;
            cosmos_denom?: string;
            token_contract?: string;
            name?: string;
            symbol?: string;
            decimals?: number;
            orchestrator?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgERC20DeployedClaim;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgERC20DeployedClaim;
    }
    export class MsgERC20DeployedClaimResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgERC20DeployedClaimResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgERC20DeployedClaimResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgERC20DeployedClaimResponse;
    }
    export class MsgLogicCallExecutedClaim extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            event_nonce?: number;
            block_height?: number;
            invalidation_id?: Uint8Array;
            invalidation_nonce?: number;
            orchestrator?: string;
        });
        get event_nonce(): number;
        set event_nonce(value: number);
        get block_height(): number;
        set block_height(value: number);
        get invalidation_id(): Uint8Array;
        set invalidation_id(value: Uint8Array);
        get invalidation_nonce(): number;
        set invalidation_nonce(value: number);
        get orchestrator(): string;
        set orchestrator(value: string);
        static fromObject(data: {
            event_nonce?: number;
            block_height?: number;
            invalidation_id?: Uint8Array;
            invalidation_nonce?: number;
            orchestrator?: string;
        }): MsgLogicCallExecutedClaim;
        toObject(): {
            event_nonce?: number;
            block_height?: number;
            invalidation_id?: Uint8Array;
            invalidation_nonce?: number;
            orchestrator?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgLogicCallExecutedClaim;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgLogicCallExecutedClaim;
    }
    export class MsgLogicCallExecutedClaimResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgLogicCallExecutedClaimResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgLogicCallExecutedClaimResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgLogicCallExecutedClaimResponse;
    }
    export class MsgValsetUpdatedClaim extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            event_nonce?: number;
            valset_nonce?: number;
            block_height?: number;
            members?: dependency_4.gravity.v1.BridgeValidator[];
            reward_amount?: string;
            reward_token?: string;
            orchestrator?: string;
        });
        get event_nonce(): number;
        set event_nonce(value: number);
        get valset_nonce(): number;
        set valset_nonce(value: number);
        get block_height(): number;
        set block_height(value: number);
        get members(): dependency_4.gravity.v1.BridgeValidator[];
        set members(value: dependency_4.gravity.v1.BridgeValidator[]);
        get reward_amount(): string;
        set reward_amount(value: string);
        get reward_token(): string;
        set reward_token(value: string);
        get orchestrator(): string;
        set orchestrator(value: string);
        static fromObject(data: {
            event_nonce?: number;
            valset_nonce?: number;
            block_height?: number;
            members?: ReturnType<typeof dependency_4.gravity.v1.BridgeValidator.prototype.toObject>[];
            reward_amount?: string;
            reward_token?: string;
            orchestrator?: string;
        }): MsgValsetUpdatedClaim;
        toObject(): {
            event_nonce?: number;
            valset_nonce?: number;
            block_height?: number;
            members?: ReturnType<typeof dependency_4.gravity.v1.BridgeValidator.prototype.toObject>[];
            reward_amount?: string;
            reward_token?: string;
            orchestrator?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgValsetUpdatedClaim;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgValsetUpdatedClaim;
    }
    export class MsgValsetUpdatedClaimResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgValsetUpdatedClaimResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgValsetUpdatedClaimResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgValsetUpdatedClaimResponse;
    }
    export class MsgCancelSendToEth extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            transaction_id?: number;
            sender?: string;
        });
        get transaction_id(): number;
        set transaction_id(value: number);
        get sender(): string;
        set sender(value: string);
        static fromObject(data: {
            transaction_id?: number;
            sender?: string;
        }): MsgCancelSendToEth;
        toObject(): {
            transaction_id?: number;
            sender?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelSendToEth;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCancelSendToEth;
    }
    export class MsgCancelSendToEthResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgCancelSendToEthResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelSendToEthResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCancelSendToEthResponse;
    }
    export class MsgSubmitBadSignatureEvidence extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            subject?: dependency_5.google.protobuf.Any;
            signature?: string;
            sender?: string;
        });
        get subject(): dependency_5.google.protobuf.Any;
        set subject(value: dependency_5.google.protobuf.Any);
        get has_subject(): boolean;
        get signature(): string;
        set signature(value: string);
        get sender(): string;
        set sender(value: string);
        static fromObject(data: {
            subject?: ReturnType<typeof dependency_5.google.protobuf.Any.prototype.toObject>;
            signature?: string;
            sender?: string;
        }): MsgSubmitBadSignatureEvidence;
        toObject(): {
            subject?: ReturnType<typeof dependency_5.google.protobuf.Any.prototype.toObject>;
            signature?: string;
            sender?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSubmitBadSignatureEvidence;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSubmitBadSignatureEvidence;
    }
    export class MsgSubmitBadSignatureEvidenceResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgSubmitBadSignatureEvidenceResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSubmitBadSignatureEvidenceResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSubmitBadSignatureEvidenceResponse;
    }
    export class EventSetOperatorAddress extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            message?: string;
            address?: string;
        });
        get message(): string;
        set message(value: string);
        get address(): string;
        set address(value: string);
        static fromObject(data: {
            message?: string;
            address?: string;
        }): EventSetOperatorAddress;
        toObject(): {
            message?: string;
            address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventSetOperatorAddress;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventSetOperatorAddress;
    }
    export class EventValsetConfirmKey extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            message?: string;
            key?: string;
        });
        get message(): string;
        set message(value: string);
        get key(): string;
        set key(value: string);
        static fromObject(data: {
            message?: string;
            key?: string;
        }): EventValsetConfirmKey;
        toObject(): {
            message?: string;
            key?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventValsetConfirmKey;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventValsetConfirmKey;
    }
    export class EventBatchCreated extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            message?: string;
            batch_nonce?: string;
        });
        get message(): string;
        set message(value: string);
        get batch_nonce(): string;
        set batch_nonce(value: string);
        static fromObject(data: {
            message?: string;
            batch_nonce?: string;
        }): EventBatchCreated;
        toObject(): {
            message?: string;
            batch_nonce?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventBatchCreated;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventBatchCreated;
    }
    export class EventBatchConfirmKey extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            message?: string;
            batch_confirm_key?: string;
        });
        get message(): string;
        set message(value: string);
        get batch_confirm_key(): string;
        set batch_confirm_key(value: string);
        static fromObject(data: {
            message?: string;
            batch_confirm_key?: string;
        }): EventBatchConfirmKey;
        toObject(): {
            message?: string;
            batch_confirm_key?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventBatchConfirmKey;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventBatchConfirmKey;
    }
    export class EventBatchSendToEthClaim extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            nonce?: string;
        });
        get nonce(): string;
        set nonce(value: string);
        static fromObject(data: {
            nonce?: string;
        }): EventBatchSendToEthClaim;
        toObject(): {
            nonce?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventBatchSendToEthClaim;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventBatchSendToEthClaim;
    }
    export class EventClaim extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            message?: string;
            claim_hash?: string;
            attestation_id?: string;
        });
        get message(): string;
        set message(value: string);
        get claim_hash(): string;
        set claim_hash(value: string);
        get attestation_id(): string;
        set attestation_id(value: string);
        static fromObject(data: {
            message?: string;
            claim_hash?: string;
            attestation_id?: string;
        }): EventClaim;
        toObject(): {
            message?: string;
            claim_hash?: string;
            attestation_id?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventClaim;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventClaim;
    }
    export class EventBadSignatureEvidence extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            message?: string;
            bad_eth_signature?: string;
            bad_eth_signature_subject?: string;
        });
        get message(): string;
        set message(value: string);
        get bad_eth_signature(): string;
        set bad_eth_signature(value: string);
        get bad_eth_signature_subject(): string;
        set bad_eth_signature_subject(value: string);
        static fromObject(data: {
            message?: string;
            bad_eth_signature?: string;
            bad_eth_signature_subject?: string;
        }): EventBadSignatureEvidence;
        toObject(): {
            message?: string;
            bad_eth_signature?: string;
            bad_eth_signature_subject?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventBadSignatureEvidence;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventBadSignatureEvidence;
    }
    export class EventERC20DeployedClaim extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            token?: string;
            nonce?: string;
        });
        get token(): string;
        set token(value: string);
        get nonce(): string;
        set nonce(value: string);
        static fromObject(data: {
            token?: string;
            nonce?: string;
        }): EventERC20DeployedClaim;
        toObject(): {
            token?: string;
            nonce?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventERC20DeployedClaim;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventERC20DeployedClaim;
    }
    export class EventValsetUpdatedClaim extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            nonce?: string;
        });
        get nonce(): string;
        set nonce(value: string);
        static fromObject(data: {
            nonce?: string;
        }): EventValsetUpdatedClaim;
        toObject(): {
            nonce?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventValsetUpdatedClaim;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventValsetUpdatedClaim;
    }
    export class EventMultisigUpdateRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            bridge_contract?: string;
            bridge_chain_id?: string;
            multisig_id?: string;
            nonce?: string;
        });
        get bridge_contract(): string;
        set bridge_contract(value: string);
        get bridge_chain_id(): string;
        set bridge_chain_id(value: string);
        get multisig_id(): string;
        set multisig_id(value: string);
        get nonce(): string;
        set nonce(value: string);
        static fromObject(data: {
            bridge_contract?: string;
            bridge_chain_id?: string;
            multisig_id?: string;
            nonce?: string;
        }): EventMultisigUpdateRequest;
        toObject(): {
            bridge_contract?: string;
            bridge_chain_id?: string;
            multisig_id?: string;
            nonce?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventMultisigUpdateRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventMultisigUpdateRequest;
    }
    export class EventOutgoingLogicCallCanceled extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            logic_call_invalidation_id?: string;
            logic_call_invalidation_nonce?: string;
        });
        get logic_call_invalidation_id(): string;
        set logic_call_invalidation_id(value: string);
        get logic_call_invalidation_nonce(): string;
        set logic_call_invalidation_nonce(value: string);
        static fromObject(data: {
            logic_call_invalidation_id?: string;
            logic_call_invalidation_nonce?: string;
        }): EventOutgoingLogicCallCanceled;
        toObject(): {
            logic_call_invalidation_id?: string;
            logic_call_invalidation_nonce?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventOutgoingLogicCallCanceled;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventOutgoingLogicCallCanceled;
    }
    export class EventSignatureSlashing extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            type?: string;
            address?: string;
        });
        get type(): string;
        set type(value: string);
        get address(): string;
        set address(value: string);
        static fromObject(data: {
            type?: string;
            address?: string;
        }): EventSignatureSlashing;
        toObject(): {
            type?: string;
            address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventSignatureSlashing;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventSignatureSlashing;
    }
    export class EventOutgoingTxId extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            message?: string;
            tx_id?: string;
        });
        get message(): string;
        set message(value: string);
        get tx_id(): string;
        set tx_id(value: string);
        static fromObject(data: {
            message?: string;
            tx_id?: string;
        }): EventOutgoingTxId;
        toObject(): {
            message?: string;
            tx_id?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventOutgoingTxId;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventOutgoingTxId;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            ValsetConfirm: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgValsetConfirm) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgValsetConfirm;
                responseSerialize: (message: MsgValsetConfirmResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgValsetConfirmResponse;
            };
            SendToEth: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgSendToEth) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgSendToEth;
                responseSerialize: (message: MsgSendToEthResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgSendToEthResponse;
            };
            RequestBatch: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgRequestBatch) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgRequestBatch;
                responseSerialize: (message: MsgRequestBatchResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgRequestBatchResponse;
            };
            ConfirmBatch: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgConfirmBatch) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgConfirmBatch;
                responseSerialize: (message: MsgConfirmBatchResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgConfirmBatchResponse;
            };
            ConfirmLogicCall: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgConfirmLogicCall) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgConfirmLogicCall;
                responseSerialize: (message: MsgConfirmLogicCallResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgConfirmLogicCallResponse;
            };
            SendToCosmosClaim: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgSendToCosmosClaim) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgSendToCosmosClaim;
                responseSerialize: (message: MsgSendToCosmosClaimResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgSendToCosmosClaimResponse;
            };
            BatchSendToEthClaim: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgBatchSendToEthClaim) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgBatchSendToEthClaim;
                responseSerialize: (message: MsgBatchSendToEthClaimResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgBatchSendToEthClaimResponse;
            };
            ValsetUpdateClaim: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgValsetUpdatedClaim) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgValsetUpdatedClaim;
                responseSerialize: (message: MsgValsetUpdatedClaimResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgValsetUpdatedClaimResponse;
            };
            ERC20DeployedClaim: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgERC20DeployedClaim) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgERC20DeployedClaim;
                responseSerialize: (message: MsgERC20DeployedClaimResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgERC20DeployedClaimResponse;
            };
            LogicCallExecutedClaim: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgLogicCallExecutedClaim) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgLogicCallExecutedClaim;
                responseSerialize: (message: MsgLogicCallExecutedClaimResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgLogicCallExecutedClaimResponse;
            };
            SetOrchestratorAddress: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgSetOrchestratorAddress) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgSetOrchestratorAddress;
                responseSerialize: (message: MsgSetOrchestratorAddressResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgSetOrchestratorAddressResponse;
            };
            CancelSendToEth: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgCancelSendToEth) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgCancelSendToEth;
                responseSerialize: (message: MsgCancelSendToEthResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgCancelSendToEthResponse;
            };
            SubmitBadSignatureEvidence: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgSubmitBadSignatureEvidence) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgSubmitBadSignatureEvidence;
                responseSerialize: (message: MsgSubmitBadSignatureEvidenceResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgSubmitBadSignatureEvidenceResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract ValsetConfirm(call: grpc_1.ServerUnaryCall<MsgValsetConfirm, MsgValsetConfirmResponse>, callback: grpc_1.sendUnaryData<MsgValsetConfirmResponse>): void;
        abstract SendToEth(call: grpc_1.ServerUnaryCall<MsgSendToEth, MsgSendToEthResponse>, callback: grpc_1.sendUnaryData<MsgSendToEthResponse>): void;
        abstract RequestBatch(call: grpc_1.ServerUnaryCall<MsgRequestBatch, MsgRequestBatchResponse>, callback: grpc_1.sendUnaryData<MsgRequestBatchResponse>): void;
        abstract ConfirmBatch(call: grpc_1.ServerUnaryCall<MsgConfirmBatch, MsgConfirmBatchResponse>, callback: grpc_1.sendUnaryData<MsgConfirmBatchResponse>): void;
        abstract ConfirmLogicCall(call: grpc_1.ServerUnaryCall<MsgConfirmLogicCall, MsgConfirmLogicCallResponse>, callback: grpc_1.sendUnaryData<MsgConfirmLogicCallResponse>): void;
        abstract SendToCosmosClaim(call: grpc_1.ServerUnaryCall<MsgSendToCosmosClaim, MsgSendToCosmosClaimResponse>, callback: grpc_1.sendUnaryData<MsgSendToCosmosClaimResponse>): void;
        abstract BatchSendToEthClaim(call: grpc_1.ServerUnaryCall<MsgBatchSendToEthClaim, MsgBatchSendToEthClaimResponse>, callback: grpc_1.sendUnaryData<MsgBatchSendToEthClaimResponse>): void;
        abstract ValsetUpdateClaim(call: grpc_1.ServerUnaryCall<MsgValsetUpdatedClaim, MsgValsetUpdatedClaimResponse>, callback: grpc_1.sendUnaryData<MsgValsetUpdatedClaimResponse>): void;
        abstract ERC20DeployedClaim(call: grpc_1.ServerUnaryCall<MsgERC20DeployedClaim, MsgERC20DeployedClaimResponse>, callback: grpc_1.sendUnaryData<MsgERC20DeployedClaimResponse>): void;
        abstract LogicCallExecutedClaim(call: grpc_1.ServerUnaryCall<MsgLogicCallExecutedClaim, MsgLogicCallExecutedClaimResponse>, callback: grpc_1.sendUnaryData<MsgLogicCallExecutedClaimResponse>): void;
        abstract SetOrchestratorAddress(call: grpc_1.ServerUnaryCall<MsgSetOrchestratorAddress, MsgSetOrchestratorAddressResponse>, callback: grpc_1.sendUnaryData<MsgSetOrchestratorAddressResponse>): void;
        abstract CancelSendToEth(call: grpc_1.ServerUnaryCall<MsgCancelSendToEth, MsgCancelSendToEthResponse>, callback: grpc_1.sendUnaryData<MsgCancelSendToEthResponse>): void;
        abstract SubmitBadSignatureEvidence(call: grpc_1.ServerUnaryCall<MsgSubmitBadSignatureEvidence, MsgSubmitBadSignatureEvidenceResponse>, callback: grpc_1.sendUnaryData<MsgSubmitBadSignatureEvidenceResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        ValsetConfirm: GrpcUnaryServiceInterface<MsgValsetConfirm, MsgValsetConfirmResponse>;
        SendToEth: GrpcUnaryServiceInterface<MsgSendToEth, MsgSendToEthResponse>;
        RequestBatch: GrpcUnaryServiceInterface<MsgRequestBatch, MsgRequestBatchResponse>;
        ConfirmBatch: GrpcUnaryServiceInterface<MsgConfirmBatch, MsgConfirmBatchResponse>;
        ConfirmLogicCall: GrpcUnaryServiceInterface<MsgConfirmLogicCall, MsgConfirmLogicCallResponse>;
        SendToCosmosClaim: GrpcUnaryServiceInterface<MsgSendToCosmosClaim, MsgSendToCosmosClaimResponse>;
        BatchSendToEthClaim: GrpcUnaryServiceInterface<MsgBatchSendToEthClaim, MsgBatchSendToEthClaimResponse>;
        ValsetUpdateClaim: GrpcUnaryServiceInterface<MsgValsetUpdatedClaim, MsgValsetUpdatedClaimResponse>;
        ERC20DeployedClaim: GrpcUnaryServiceInterface<MsgERC20DeployedClaim, MsgERC20DeployedClaimResponse>;
        LogicCallExecutedClaim: GrpcUnaryServiceInterface<MsgLogicCallExecutedClaim, MsgLogicCallExecutedClaimResponse>;
        SetOrchestratorAddress: GrpcUnaryServiceInterface<MsgSetOrchestratorAddress, MsgSetOrchestratorAddressResponse>;
        CancelSendToEth: GrpcUnaryServiceInterface<MsgCancelSendToEth, MsgCancelSendToEthResponse>;
        SubmitBadSignatureEvidence: GrpcUnaryServiceInterface<MsgSubmitBadSignatureEvidence, MsgSubmitBadSignatureEvidenceResponse>;
    }
    export {};
}
//# sourceMappingURL=msgs.d.ts.map