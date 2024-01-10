/// <reference types="node" />
import * as dependency_1 from "./genesis";
import * as dependency_2 from "./types";
import * as dependency_3 from "./msgs";
import * as dependency_4 from "./pool";
import * as dependency_5 from "./batch";
import * as dependency_6 from "./attestation";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace gravity.v1 {
    export class QueryParamsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryParamsRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
    }
    export class QueryParamsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            params?: dependency_1.gravity.v1.Params;
        });
        get params(): dependency_1.gravity.v1.Params;
        set params(value: dependency_1.gravity.v1.Params);
        get has_params(): boolean;
        static fromObject(data: {
            params?: ReturnType<typeof dependency_1.gravity.v1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: ReturnType<typeof dependency_1.gravity.v1.Params.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    export class QueryCurrentValsetRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryCurrentValsetRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCurrentValsetRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCurrentValsetRequest;
    }
    export class QueryCurrentValsetResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            valset?: dependency_2.gravity.v1.Valset;
        });
        get valset(): dependency_2.gravity.v1.Valset;
        set valset(value: dependency_2.gravity.v1.Valset);
        get has_valset(): boolean;
        static fromObject(data: {
            valset?: ReturnType<typeof dependency_2.gravity.v1.Valset.prototype.toObject>;
        }): QueryCurrentValsetResponse;
        toObject(): {
            valset?: ReturnType<typeof dependency_2.gravity.v1.Valset.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCurrentValsetResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCurrentValsetResponse;
    }
    export class QueryValsetRequestRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            nonce?: number;
        });
        get nonce(): number;
        set nonce(value: number);
        static fromObject(data: {
            nonce?: number;
        }): QueryValsetRequestRequest;
        toObject(): {
            nonce?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValsetRequestRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValsetRequestRequest;
    }
    export class QueryValsetRequestResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            valset?: dependency_2.gravity.v1.Valset;
        });
        get valset(): dependency_2.gravity.v1.Valset;
        set valset(value: dependency_2.gravity.v1.Valset);
        get has_valset(): boolean;
        static fromObject(data: {
            valset?: ReturnType<typeof dependency_2.gravity.v1.Valset.prototype.toObject>;
        }): QueryValsetRequestResponse;
        toObject(): {
            valset?: ReturnType<typeof dependency_2.gravity.v1.Valset.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValsetRequestResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValsetRequestResponse;
    }
    export class QueryValsetConfirmRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            nonce?: number;
            address?: string;
        });
        get nonce(): number;
        set nonce(value: number);
        get address(): string;
        set address(value: string);
        static fromObject(data: {
            nonce?: number;
            address?: string;
        }): QueryValsetConfirmRequest;
        toObject(): {
            nonce?: number;
            address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValsetConfirmRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValsetConfirmRequest;
    }
    export class QueryValsetConfirmResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            confirm?: dependency_3.gravity.v1.MsgValsetConfirm;
        });
        get confirm(): dependency_3.gravity.v1.MsgValsetConfirm;
        set confirm(value: dependency_3.gravity.v1.MsgValsetConfirm);
        get has_confirm(): boolean;
        static fromObject(data: {
            confirm?: ReturnType<typeof dependency_3.gravity.v1.MsgValsetConfirm.prototype.toObject>;
        }): QueryValsetConfirmResponse;
        toObject(): {
            confirm?: ReturnType<typeof dependency_3.gravity.v1.MsgValsetConfirm.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValsetConfirmResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValsetConfirmResponse;
    }
    export class QueryValsetConfirmsByNonceRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            nonce?: number;
        });
        get nonce(): number;
        set nonce(value: number);
        static fromObject(data: {
            nonce?: number;
        }): QueryValsetConfirmsByNonceRequest;
        toObject(): {
            nonce?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValsetConfirmsByNonceRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValsetConfirmsByNonceRequest;
    }
    export class QueryValsetConfirmsByNonceResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            confirms?: dependency_3.gravity.v1.MsgValsetConfirm[];
        });
        get confirms(): dependency_3.gravity.v1.MsgValsetConfirm[];
        set confirms(value: dependency_3.gravity.v1.MsgValsetConfirm[]);
        static fromObject(data: {
            confirms?: ReturnType<typeof dependency_3.gravity.v1.MsgValsetConfirm.prototype.toObject>[];
        }): QueryValsetConfirmsByNonceResponse;
        toObject(): {
            confirms?: ReturnType<typeof dependency_3.gravity.v1.MsgValsetConfirm.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValsetConfirmsByNonceResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValsetConfirmsByNonceResponse;
    }
    export class QueryLastValsetRequestsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryLastValsetRequestsRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryLastValsetRequestsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryLastValsetRequestsRequest;
    }
    export class QueryLastValsetRequestsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            valsets?: dependency_2.gravity.v1.Valset[];
        });
        get valsets(): dependency_2.gravity.v1.Valset[];
        set valsets(value: dependency_2.gravity.v1.Valset[]);
        static fromObject(data: {
            valsets?: ReturnType<typeof dependency_2.gravity.v1.Valset.prototype.toObject>[];
        }): QueryLastValsetRequestsResponse;
        toObject(): {
            valsets?: ReturnType<typeof dependency_2.gravity.v1.Valset.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryLastValsetRequestsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryLastValsetRequestsResponse;
    }
    export class QueryLastPendingValsetRequestByAddrRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            address?: string;
        });
        get address(): string;
        set address(value: string);
        static fromObject(data: {
            address?: string;
        }): QueryLastPendingValsetRequestByAddrRequest;
        toObject(): {
            address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryLastPendingValsetRequestByAddrRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryLastPendingValsetRequestByAddrRequest;
    }
    export class QueryLastPendingValsetRequestByAddrResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            valsets?: dependency_2.gravity.v1.Valset[];
        });
        get valsets(): dependency_2.gravity.v1.Valset[];
        set valsets(value: dependency_2.gravity.v1.Valset[]);
        static fromObject(data: {
            valsets?: ReturnType<typeof dependency_2.gravity.v1.Valset.prototype.toObject>[];
        }): QueryLastPendingValsetRequestByAddrResponse;
        toObject(): {
            valsets?: ReturnType<typeof dependency_2.gravity.v1.Valset.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryLastPendingValsetRequestByAddrResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryLastPendingValsetRequestByAddrResponse;
    }
    export class QueryBatchFeeRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryBatchFeeRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBatchFeeRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBatchFeeRequest;
    }
    export class QueryBatchFeeResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            batch_fees?: dependency_4.gravity.v1.BatchFees[];
        });
        get batch_fees(): dependency_4.gravity.v1.BatchFees[];
        set batch_fees(value: dependency_4.gravity.v1.BatchFees[]);
        static fromObject(data: {
            batch_fees?: ReturnType<typeof dependency_4.gravity.v1.BatchFees.prototype.toObject>[];
        }): QueryBatchFeeResponse;
        toObject(): {
            batch_fees?: ReturnType<typeof dependency_4.gravity.v1.BatchFees.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBatchFeeResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBatchFeeResponse;
    }
    export class QueryLastPendingBatchRequestByAddrRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            address?: string;
        });
        get address(): string;
        set address(value: string);
        static fromObject(data: {
            address?: string;
        }): QueryLastPendingBatchRequestByAddrRequest;
        toObject(): {
            address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryLastPendingBatchRequestByAddrRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryLastPendingBatchRequestByAddrRequest;
    }
    export class QueryLastPendingBatchRequestByAddrResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            batch?: dependency_5.gravity.v1.OutgoingTxBatch[];
        });
        get batch(): dependency_5.gravity.v1.OutgoingTxBatch[];
        set batch(value: dependency_5.gravity.v1.OutgoingTxBatch[]);
        static fromObject(data: {
            batch?: ReturnType<typeof dependency_5.gravity.v1.OutgoingTxBatch.prototype.toObject>[];
        }): QueryLastPendingBatchRequestByAddrResponse;
        toObject(): {
            batch?: ReturnType<typeof dependency_5.gravity.v1.OutgoingTxBatch.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryLastPendingBatchRequestByAddrResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryLastPendingBatchRequestByAddrResponse;
    }
    export class QueryLastPendingLogicCallByAddrRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            address?: string;
        });
        get address(): string;
        set address(value: string);
        static fromObject(data: {
            address?: string;
        }): QueryLastPendingLogicCallByAddrRequest;
        toObject(): {
            address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryLastPendingLogicCallByAddrRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryLastPendingLogicCallByAddrRequest;
    }
    export class QueryLastPendingLogicCallByAddrResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            call?: dependency_5.gravity.v1.OutgoingLogicCall[];
        });
        get call(): dependency_5.gravity.v1.OutgoingLogicCall[];
        set call(value: dependency_5.gravity.v1.OutgoingLogicCall[]);
        static fromObject(data: {
            call?: ReturnType<typeof dependency_5.gravity.v1.OutgoingLogicCall.prototype.toObject>[];
        }): QueryLastPendingLogicCallByAddrResponse;
        toObject(): {
            call?: ReturnType<typeof dependency_5.gravity.v1.OutgoingLogicCall.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryLastPendingLogicCallByAddrResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryLastPendingLogicCallByAddrResponse;
    }
    export class QueryOutgoingTxBatchesRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryOutgoingTxBatchesRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryOutgoingTxBatchesRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryOutgoingTxBatchesRequest;
    }
    export class QueryOutgoingTxBatchesResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            batches?: dependency_5.gravity.v1.OutgoingTxBatch[];
        });
        get batches(): dependency_5.gravity.v1.OutgoingTxBatch[];
        set batches(value: dependency_5.gravity.v1.OutgoingTxBatch[]);
        static fromObject(data: {
            batches?: ReturnType<typeof dependency_5.gravity.v1.OutgoingTxBatch.prototype.toObject>[];
        }): QueryOutgoingTxBatchesResponse;
        toObject(): {
            batches?: ReturnType<typeof dependency_5.gravity.v1.OutgoingTxBatch.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryOutgoingTxBatchesResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryOutgoingTxBatchesResponse;
    }
    export class QueryOutgoingLogicCallsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryOutgoingLogicCallsRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryOutgoingLogicCallsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryOutgoingLogicCallsRequest;
    }
    export class QueryOutgoingLogicCallsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            calls?: dependency_5.gravity.v1.OutgoingLogicCall[];
        });
        get calls(): dependency_5.gravity.v1.OutgoingLogicCall[];
        set calls(value: dependency_5.gravity.v1.OutgoingLogicCall[]);
        static fromObject(data: {
            calls?: ReturnType<typeof dependency_5.gravity.v1.OutgoingLogicCall.prototype.toObject>[];
        }): QueryOutgoingLogicCallsResponse;
        toObject(): {
            calls?: ReturnType<typeof dependency_5.gravity.v1.OutgoingLogicCall.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryOutgoingLogicCallsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryOutgoingLogicCallsResponse;
    }
    export class QueryBatchRequestByNonceRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            nonce?: number;
            contract_address?: string;
        });
        get nonce(): number;
        set nonce(value: number);
        get contract_address(): string;
        set contract_address(value: string);
        static fromObject(data: {
            nonce?: number;
            contract_address?: string;
        }): QueryBatchRequestByNonceRequest;
        toObject(): {
            nonce?: number;
            contract_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBatchRequestByNonceRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBatchRequestByNonceRequest;
    }
    export class QueryBatchRequestByNonceResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            batch?: dependency_5.gravity.v1.OutgoingTxBatch;
        });
        get batch(): dependency_5.gravity.v1.OutgoingTxBatch;
        set batch(value: dependency_5.gravity.v1.OutgoingTxBatch);
        get has_batch(): boolean;
        static fromObject(data: {
            batch?: ReturnType<typeof dependency_5.gravity.v1.OutgoingTxBatch.prototype.toObject>;
        }): QueryBatchRequestByNonceResponse;
        toObject(): {
            batch?: ReturnType<typeof dependency_5.gravity.v1.OutgoingTxBatch.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBatchRequestByNonceResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBatchRequestByNonceResponse;
    }
    export class QueryBatchConfirmsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            nonce?: number;
            contract_address?: string;
        });
        get nonce(): number;
        set nonce(value: number);
        get contract_address(): string;
        set contract_address(value: string);
        static fromObject(data: {
            nonce?: number;
            contract_address?: string;
        }): QueryBatchConfirmsRequest;
        toObject(): {
            nonce?: number;
            contract_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBatchConfirmsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBatchConfirmsRequest;
    }
    export class QueryBatchConfirmsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            confirms?: dependency_3.gravity.v1.MsgConfirmBatch[];
        });
        get confirms(): dependency_3.gravity.v1.MsgConfirmBatch[];
        set confirms(value: dependency_3.gravity.v1.MsgConfirmBatch[]);
        static fromObject(data: {
            confirms?: ReturnType<typeof dependency_3.gravity.v1.MsgConfirmBatch.prototype.toObject>[];
        }): QueryBatchConfirmsResponse;
        toObject(): {
            confirms?: ReturnType<typeof dependency_3.gravity.v1.MsgConfirmBatch.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBatchConfirmsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBatchConfirmsResponse;
    }
    export class QueryLogicConfirmsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            invalidation_id?: Uint8Array;
            invalidation_nonce?: number;
        });
        get invalidation_id(): Uint8Array;
        set invalidation_id(value: Uint8Array);
        get invalidation_nonce(): number;
        set invalidation_nonce(value: number);
        static fromObject(data: {
            invalidation_id?: Uint8Array;
            invalidation_nonce?: number;
        }): QueryLogicConfirmsRequest;
        toObject(): {
            invalidation_id?: Uint8Array;
            invalidation_nonce?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryLogicConfirmsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryLogicConfirmsRequest;
    }
    export class QueryLogicConfirmsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            confirms?: dependency_3.gravity.v1.MsgConfirmLogicCall[];
        });
        get confirms(): dependency_3.gravity.v1.MsgConfirmLogicCall[];
        set confirms(value: dependency_3.gravity.v1.MsgConfirmLogicCall[]);
        static fromObject(data: {
            confirms?: ReturnType<typeof dependency_3.gravity.v1.MsgConfirmLogicCall.prototype.toObject>[];
        }): QueryLogicConfirmsResponse;
        toObject(): {
            confirms?: ReturnType<typeof dependency_3.gravity.v1.MsgConfirmLogicCall.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryLogicConfirmsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryLogicConfirmsResponse;
    }
    export class QueryLastEventNonceByAddrRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            address?: string;
        });
        get address(): string;
        set address(value: string);
        static fromObject(data: {
            address?: string;
        }): QueryLastEventNonceByAddrRequest;
        toObject(): {
            address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryLastEventNonceByAddrRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryLastEventNonceByAddrRequest;
    }
    export class QueryLastEventNonceByAddrResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            event_nonce?: number;
        });
        get event_nonce(): number;
        set event_nonce(value: number);
        static fromObject(data: {
            event_nonce?: number;
        }): QueryLastEventNonceByAddrResponse;
        toObject(): {
            event_nonce?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryLastEventNonceByAddrResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryLastEventNonceByAddrResponse;
    }
    export class QueryERC20ToDenomRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            erc20?: string;
        });
        get erc20(): string;
        set erc20(value: string);
        static fromObject(data: {
            erc20?: string;
        }): QueryERC20ToDenomRequest;
        toObject(): {
            erc20?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryERC20ToDenomRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryERC20ToDenomRequest;
    }
    export class QueryERC20ToDenomResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            denom?: string;
            cosmos_originated?: boolean;
        });
        get denom(): string;
        set denom(value: string);
        get cosmos_originated(): boolean;
        set cosmos_originated(value: boolean);
        static fromObject(data: {
            denom?: string;
            cosmos_originated?: boolean;
        }): QueryERC20ToDenomResponse;
        toObject(): {
            denom?: string;
            cosmos_originated?: boolean;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryERC20ToDenomResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryERC20ToDenomResponse;
    }
    export class QueryDenomToERC20Request extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            denom?: string;
        });
        get denom(): string;
        set denom(value: string);
        static fromObject(data: {
            denom?: string;
        }): QueryDenomToERC20Request;
        toObject(): {
            denom?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomToERC20Request;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDenomToERC20Request;
    }
    export class QueryDenomToERC20Response extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            erc20?: string;
            cosmos_originated?: boolean;
        });
        get erc20(): string;
        set erc20(value: string);
        get cosmos_originated(): boolean;
        set cosmos_originated(value: boolean);
        static fromObject(data: {
            erc20?: string;
            cosmos_originated?: boolean;
        }): QueryDenomToERC20Response;
        toObject(): {
            erc20?: string;
            cosmos_originated?: boolean;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomToERC20Response;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDenomToERC20Response;
    }
    export class QueryAttestationsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            limit?: number;
            order_by?: string;
            claim_type?: string;
            nonce?: number;
            height?: number;
        });
        get limit(): number;
        set limit(value: number);
        get order_by(): string;
        set order_by(value: string);
        get claim_type(): string;
        set claim_type(value: string);
        get nonce(): number;
        set nonce(value: number);
        get height(): number;
        set height(value: number);
        static fromObject(data: {
            limit?: number;
            order_by?: string;
            claim_type?: string;
            nonce?: number;
            height?: number;
        }): QueryAttestationsRequest;
        toObject(): {
            limit?: number;
            order_by?: string;
            claim_type?: string;
            nonce?: number;
            height?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAttestationsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAttestationsRequest;
    }
    export class QueryAttestationsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            attestations?: dependency_6.gravity.v1.Attestation[];
        });
        get attestations(): dependency_6.gravity.v1.Attestation[];
        set attestations(value: dependency_6.gravity.v1.Attestation[]);
        static fromObject(data: {
            attestations?: ReturnType<typeof dependency_6.gravity.v1.Attestation.prototype.toObject>[];
        }): QueryAttestationsResponse;
        toObject(): {
            attestations?: ReturnType<typeof dependency_6.gravity.v1.Attestation.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAttestationsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAttestationsResponse;
    }
    export class QueryDelegateKeysByValidatorAddress extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validator_address?: string;
        });
        get validator_address(): string;
        set validator_address(value: string);
        static fromObject(data: {
            validator_address?: string;
        }): QueryDelegateKeysByValidatorAddress;
        toObject(): {
            validator_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegateKeysByValidatorAddress;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegateKeysByValidatorAddress;
    }
    export class QueryDelegateKeysByValidatorAddressResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            eth_address?: string;
            orchestrator_address?: string;
        });
        get eth_address(): string;
        set eth_address(value: string);
        get orchestrator_address(): string;
        set orchestrator_address(value: string);
        static fromObject(data: {
            eth_address?: string;
            orchestrator_address?: string;
        }): QueryDelegateKeysByValidatorAddressResponse;
        toObject(): {
            eth_address?: string;
            orchestrator_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegateKeysByValidatorAddressResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegateKeysByValidatorAddressResponse;
    }
    export class QueryDelegateKeysByEthAddress extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            eth_address?: string;
        });
        get eth_address(): string;
        set eth_address(value: string);
        static fromObject(data: {
            eth_address?: string;
        }): QueryDelegateKeysByEthAddress;
        toObject(): {
            eth_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegateKeysByEthAddress;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegateKeysByEthAddress;
    }
    export class QueryDelegateKeysByEthAddressResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validator_address?: string;
            orchestrator_address?: string;
        });
        get validator_address(): string;
        set validator_address(value: string);
        get orchestrator_address(): string;
        set orchestrator_address(value: string);
        static fromObject(data: {
            validator_address?: string;
            orchestrator_address?: string;
        }): QueryDelegateKeysByEthAddressResponse;
        toObject(): {
            validator_address?: string;
            orchestrator_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegateKeysByEthAddressResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegateKeysByEthAddressResponse;
    }
    export class QueryDelegateKeysByOrchestratorAddress extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            orchestrator_address?: string;
        });
        get orchestrator_address(): string;
        set orchestrator_address(value: string);
        static fromObject(data: {
            orchestrator_address?: string;
        }): QueryDelegateKeysByOrchestratorAddress;
        toObject(): {
            orchestrator_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegateKeysByOrchestratorAddress;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegateKeysByOrchestratorAddress;
    }
    export class QueryDelegateKeysByOrchestratorAddressResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validator_address?: string;
            eth_address?: string;
        });
        get validator_address(): string;
        set validator_address(value: string);
        get eth_address(): string;
        set eth_address(value: string);
        static fromObject(data: {
            validator_address?: string;
            eth_address?: string;
        }): QueryDelegateKeysByOrchestratorAddressResponse;
        toObject(): {
            validator_address?: string;
            eth_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegateKeysByOrchestratorAddressResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegateKeysByOrchestratorAddressResponse;
    }
    export class QueryPendingSendToEth extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            sender_address?: string;
        });
        get sender_address(): string;
        set sender_address(value: string);
        static fromObject(data: {
            sender_address?: string;
        }): QueryPendingSendToEth;
        toObject(): {
            sender_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPendingSendToEth;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPendingSendToEth;
    }
    export class QueryPendingSendToEthResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            transfers_in_batches?: dependency_5.gravity.v1.OutgoingTransferTx[];
            unbatched_transfers?: dependency_5.gravity.v1.OutgoingTransferTx[];
        });
        get transfers_in_batches(): dependency_5.gravity.v1.OutgoingTransferTx[];
        set transfers_in_batches(value: dependency_5.gravity.v1.OutgoingTransferTx[]);
        get unbatched_transfers(): dependency_5.gravity.v1.OutgoingTransferTx[];
        set unbatched_transfers(value: dependency_5.gravity.v1.OutgoingTransferTx[]);
        static fromObject(data: {
            transfers_in_batches?: ReturnType<typeof dependency_5.gravity.v1.OutgoingTransferTx.prototype.toObject>[];
            unbatched_transfers?: ReturnType<typeof dependency_5.gravity.v1.OutgoingTransferTx.prototype.toObject>[];
        }): QueryPendingSendToEthResponse;
        toObject(): {
            transfers_in_batches?: ReturnType<typeof dependency_5.gravity.v1.OutgoingTransferTx.prototype.toObject>[];
            unbatched_transfers?: ReturnType<typeof dependency_5.gravity.v1.OutgoingTransferTx.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPendingSendToEthResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPendingSendToEthResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            Params: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryParamsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryParamsRequest;
                responseSerialize: (message: QueryParamsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryParamsResponse;
            };
            CurrentValset: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryCurrentValsetRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryCurrentValsetRequest;
                responseSerialize: (message: QueryCurrentValsetResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryCurrentValsetResponse;
            };
            ValsetRequest: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryValsetRequestRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryValsetRequestRequest;
                responseSerialize: (message: QueryValsetRequestResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryValsetRequestResponse;
            };
            ValsetConfirm: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryValsetConfirmRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryValsetConfirmRequest;
                responseSerialize: (message: QueryValsetConfirmResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryValsetConfirmResponse;
            };
            ValsetConfirmsByNonce: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryValsetConfirmsByNonceRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryValsetConfirmsByNonceRequest;
                responseSerialize: (message: QueryValsetConfirmsByNonceResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryValsetConfirmsByNonceResponse;
            };
            LastValsetRequests: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryLastValsetRequestsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryLastValsetRequestsRequest;
                responseSerialize: (message: QueryLastValsetRequestsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryLastValsetRequestsResponse;
            };
            LastPendingValsetRequestByAddr: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryLastPendingValsetRequestByAddrRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryLastPendingValsetRequestByAddrRequest;
                responseSerialize: (message: QueryLastPendingValsetRequestByAddrResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryLastPendingValsetRequestByAddrResponse;
            };
            LastPendingBatchRequestByAddr: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryLastPendingBatchRequestByAddrRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryLastPendingBatchRequestByAddrRequest;
                responseSerialize: (message: QueryLastPendingBatchRequestByAddrResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryLastPendingBatchRequestByAddrResponse;
            };
            LastPendingLogicCallByAddr: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryLastPendingLogicCallByAddrRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryLastPendingLogicCallByAddrRequest;
                responseSerialize: (message: QueryLastPendingLogicCallByAddrResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryLastPendingLogicCallByAddrResponse;
            };
            LastEventNonceByAddr: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryLastEventNonceByAddrRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryLastEventNonceByAddrRequest;
                responseSerialize: (message: QueryLastEventNonceByAddrResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryLastEventNonceByAddrResponse;
            };
            BatchFees: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryBatchFeeRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryBatchFeeRequest;
                responseSerialize: (message: QueryBatchFeeResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryBatchFeeResponse;
            };
            OutgoingTxBatches: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryOutgoingTxBatchesRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryOutgoingTxBatchesRequest;
                responseSerialize: (message: QueryOutgoingTxBatchesResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryOutgoingTxBatchesResponse;
            };
            OutgoingLogicCalls: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryOutgoingLogicCallsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryOutgoingLogicCallsRequest;
                responseSerialize: (message: QueryOutgoingLogicCallsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryOutgoingLogicCallsResponse;
            };
            BatchRequestByNonce: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryBatchRequestByNonceRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryBatchRequestByNonceRequest;
                responseSerialize: (message: QueryBatchRequestByNonceResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryBatchRequestByNonceResponse;
            };
            BatchConfirms: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryBatchConfirmsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryBatchConfirmsRequest;
                responseSerialize: (message: QueryBatchConfirmsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryBatchConfirmsResponse;
            };
            LogicConfirms: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryLogicConfirmsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryLogicConfirmsRequest;
                responseSerialize: (message: QueryLogicConfirmsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryLogicConfirmsResponse;
            };
            ERC20ToDenom: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryERC20ToDenomRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryERC20ToDenomRequest;
                responseSerialize: (message: QueryERC20ToDenomResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryERC20ToDenomResponse;
            };
            DenomToERC20: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDenomToERC20Request) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDenomToERC20Request;
                responseSerialize: (message: QueryDenomToERC20Response) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDenomToERC20Response;
            };
            GetAttestations: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryAttestationsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryAttestationsRequest;
                responseSerialize: (message: QueryAttestationsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryAttestationsResponse;
            };
            GetDelegateKeyByValidator: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDelegateKeysByValidatorAddress) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDelegateKeysByValidatorAddress;
                responseSerialize: (message: QueryDelegateKeysByValidatorAddressResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDelegateKeysByValidatorAddressResponse;
            };
            GetDelegateKeyByEth: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDelegateKeysByEthAddress) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDelegateKeysByEthAddress;
                responseSerialize: (message: QueryDelegateKeysByEthAddressResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDelegateKeysByEthAddressResponse;
            };
            GetDelegateKeyByOrchestrator: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDelegateKeysByOrchestratorAddress) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDelegateKeysByOrchestratorAddress;
                responseSerialize: (message: QueryDelegateKeysByOrchestratorAddressResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDelegateKeysByOrchestratorAddressResponse;
            };
            GetPendingSendToEth: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryPendingSendToEth) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryPendingSendToEth;
                responseSerialize: (message: QueryPendingSendToEthResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryPendingSendToEthResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
        abstract CurrentValset(call: grpc_1.ServerUnaryCall<QueryCurrentValsetRequest, QueryCurrentValsetResponse>, callback: grpc_1.sendUnaryData<QueryCurrentValsetResponse>): void;
        abstract ValsetRequest(call: grpc_1.ServerUnaryCall<QueryValsetRequestRequest, QueryValsetRequestResponse>, callback: grpc_1.sendUnaryData<QueryValsetRequestResponse>): void;
        abstract ValsetConfirm(call: grpc_1.ServerUnaryCall<QueryValsetConfirmRequest, QueryValsetConfirmResponse>, callback: grpc_1.sendUnaryData<QueryValsetConfirmResponse>): void;
        abstract ValsetConfirmsByNonce(call: grpc_1.ServerUnaryCall<QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse>, callback: grpc_1.sendUnaryData<QueryValsetConfirmsByNonceResponse>): void;
        abstract LastValsetRequests(call: grpc_1.ServerUnaryCall<QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse>, callback: grpc_1.sendUnaryData<QueryLastValsetRequestsResponse>): void;
        abstract LastPendingValsetRequestByAddr(call: grpc_1.ServerUnaryCall<QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse>, callback: grpc_1.sendUnaryData<QueryLastPendingValsetRequestByAddrResponse>): void;
        abstract LastPendingBatchRequestByAddr(call: grpc_1.ServerUnaryCall<QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse>, callback: grpc_1.sendUnaryData<QueryLastPendingBatchRequestByAddrResponse>): void;
        abstract LastPendingLogicCallByAddr(call: grpc_1.ServerUnaryCall<QueryLastPendingLogicCallByAddrRequest, QueryLastPendingLogicCallByAddrResponse>, callback: grpc_1.sendUnaryData<QueryLastPendingLogicCallByAddrResponse>): void;
        abstract LastEventNonceByAddr(call: grpc_1.ServerUnaryCall<QueryLastEventNonceByAddrRequest, QueryLastEventNonceByAddrResponse>, callback: grpc_1.sendUnaryData<QueryLastEventNonceByAddrResponse>): void;
        abstract BatchFees(call: grpc_1.ServerUnaryCall<QueryBatchFeeRequest, QueryBatchFeeResponse>, callback: grpc_1.sendUnaryData<QueryBatchFeeResponse>): void;
        abstract OutgoingTxBatches(call: grpc_1.ServerUnaryCall<QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse>, callback: grpc_1.sendUnaryData<QueryOutgoingTxBatchesResponse>): void;
        abstract OutgoingLogicCalls(call: grpc_1.ServerUnaryCall<QueryOutgoingLogicCallsRequest, QueryOutgoingLogicCallsResponse>, callback: grpc_1.sendUnaryData<QueryOutgoingLogicCallsResponse>): void;
        abstract BatchRequestByNonce(call: grpc_1.ServerUnaryCall<QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse>, callback: grpc_1.sendUnaryData<QueryBatchRequestByNonceResponse>): void;
        abstract BatchConfirms(call: grpc_1.ServerUnaryCall<QueryBatchConfirmsRequest, QueryBatchConfirmsResponse>, callback: grpc_1.sendUnaryData<QueryBatchConfirmsResponse>): void;
        abstract LogicConfirms(call: grpc_1.ServerUnaryCall<QueryLogicConfirmsRequest, QueryLogicConfirmsResponse>, callback: grpc_1.sendUnaryData<QueryLogicConfirmsResponse>): void;
        abstract ERC20ToDenom(call: grpc_1.ServerUnaryCall<QueryERC20ToDenomRequest, QueryERC20ToDenomResponse>, callback: grpc_1.sendUnaryData<QueryERC20ToDenomResponse>): void;
        abstract DenomToERC20(call: grpc_1.ServerUnaryCall<QueryDenomToERC20Request, QueryDenomToERC20Response>, callback: grpc_1.sendUnaryData<QueryDenomToERC20Response>): void;
        abstract GetAttestations(call: grpc_1.ServerUnaryCall<QueryAttestationsRequest, QueryAttestationsResponse>, callback: grpc_1.sendUnaryData<QueryAttestationsResponse>): void;
        abstract GetDelegateKeyByValidator(call: grpc_1.ServerUnaryCall<QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse>, callback: grpc_1.sendUnaryData<QueryDelegateKeysByValidatorAddressResponse>): void;
        abstract GetDelegateKeyByEth(call: grpc_1.ServerUnaryCall<QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse>, callback: grpc_1.sendUnaryData<QueryDelegateKeysByEthAddressResponse>): void;
        abstract GetDelegateKeyByOrchestrator(call: grpc_1.ServerUnaryCall<QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse>, callback: grpc_1.sendUnaryData<QueryDelegateKeysByOrchestratorAddressResponse>): void;
        abstract GetPendingSendToEth(call: grpc_1.ServerUnaryCall<QueryPendingSendToEth, QueryPendingSendToEthResponse>, callback: grpc_1.sendUnaryData<QueryPendingSendToEthResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
        CurrentValset: GrpcUnaryServiceInterface<QueryCurrentValsetRequest, QueryCurrentValsetResponse>;
        ValsetRequest: GrpcUnaryServiceInterface<QueryValsetRequestRequest, QueryValsetRequestResponse>;
        ValsetConfirm: GrpcUnaryServiceInterface<QueryValsetConfirmRequest, QueryValsetConfirmResponse>;
        ValsetConfirmsByNonce: GrpcUnaryServiceInterface<QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse>;
        LastValsetRequests: GrpcUnaryServiceInterface<QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse>;
        LastPendingValsetRequestByAddr: GrpcUnaryServiceInterface<QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse>;
        LastPendingBatchRequestByAddr: GrpcUnaryServiceInterface<QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse>;
        LastPendingLogicCallByAddr: GrpcUnaryServiceInterface<QueryLastPendingLogicCallByAddrRequest, QueryLastPendingLogicCallByAddrResponse>;
        LastEventNonceByAddr: GrpcUnaryServiceInterface<QueryLastEventNonceByAddrRequest, QueryLastEventNonceByAddrResponse>;
        BatchFees: GrpcUnaryServiceInterface<QueryBatchFeeRequest, QueryBatchFeeResponse>;
        OutgoingTxBatches: GrpcUnaryServiceInterface<QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse>;
        OutgoingLogicCalls: GrpcUnaryServiceInterface<QueryOutgoingLogicCallsRequest, QueryOutgoingLogicCallsResponse>;
        BatchRequestByNonce: GrpcUnaryServiceInterface<QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse>;
        BatchConfirms: GrpcUnaryServiceInterface<QueryBatchConfirmsRequest, QueryBatchConfirmsResponse>;
        LogicConfirms: GrpcUnaryServiceInterface<QueryLogicConfirmsRequest, QueryLogicConfirmsResponse>;
        ERC20ToDenom: GrpcUnaryServiceInterface<QueryERC20ToDenomRequest, QueryERC20ToDenomResponse>;
        DenomToERC20: GrpcUnaryServiceInterface<QueryDenomToERC20Request, QueryDenomToERC20Response>;
        GetAttestations: GrpcUnaryServiceInterface<QueryAttestationsRequest, QueryAttestationsResponse>;
        GetDelegateKeyByValidator: GrpcUnaryServiceInterface<QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse>;
        GetDelegateKeyByEth: GrpcUnaryServiceInterface<QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse>;
        GetDelegateKeyByOrchestrator: GrpcUnaryServiceInterface<QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse>;
        GetPendingSendToEth: GrpcUnaryServiceInterface<QueryPendingSendToEth, QueryPendingSendToEthResponse>;
    }
    export {};
}
//# sourceMappingURL=query.d.ts.map