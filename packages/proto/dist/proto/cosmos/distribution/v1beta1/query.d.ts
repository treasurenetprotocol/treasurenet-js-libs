/// <reference types="node" />
import * as dependency_1 from "./../../base/query/v1beta1/pagination";
import * as dependency_4 from "./../../base/v1beta1/coin";
import * as dependency_5 from "./distribution";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.distribution.v1beta1 {
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
            params?: dependency_5.cosmos.distribution.v1beta1.Params;
        });
        get params(): dependency_5.cosmos.distribution.v1beta1.Params;
        set params(value: dependency_5.cosmos.distribution.v1beta1.Params);
        get has_params(): boolean;
        static fromObject(data: {
            params?: ReturnType<typeof dependency_5.cosmos.distribution.v1beta1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: ReturnType<typeof dependency_5.cosmos.distribution.v1beta1.Params.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    export class QueryValidatorOutstandingRewardsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validator_address?: string;
        });
        get validator_address(): string;
        set validator_address(value: string);
        static fromObject(data: {
            validator_address?: string;
        }): QueryValidatorOutstandingRewardsRequest;
        toObject(): {
            validator_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorOutstandingRewardsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorOutstandingRewardsRequest;
    }
    export class QueryValidatorOutstandingRewardsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            rewards?: dependency_5.cosmos.distribution.v1beta1.ValidatorOutstandingRewards;
        });
        get rewards(): dependency_5.cosmos.distribution.v1beta1.ValidatorOutstandingRewards;
        set rewards(value: dependency_5.cosmos.distribution.v1beta1.ValidatorOutstandingRewards);
        get has_rewards(): boolean;
        static fromObject(data: {
            rewards?: ReturnType<typeof dependency_5.cosmos.distribution.v1beta1.ValidatorOutstandingRewards.prototype.toObject>;
        }): QueryValidatorOutstandingRewardsResponse;
        toObject(): {
            rewards?: ReturnType<typeof dependency_5.cosmos.distribution.v1beta1.ValidatorOutstandingRewards.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorOutstandingRewardsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorOutstandingRewardsResponse;
    }
    export class QueryValidatorCommissionRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validator_address?: string;
        });
        get validator_address(): string;
        set validator_address(value: string);
        static fromObject(data: {
            validator_address?: string;
        }): QueryValidatorCommissionRequest;
        toObject(): {
            validator_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorCommissionRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorCommissionRequest;
    }
    export class QueryValidatorCommissionResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            commission?: dependency_5.cosmos.distribution.v1beta1.ValidatorAccumulatedCommission;
        });
        get commission(): dependency_5.cosmos.distribution.v1beta1.ValidatorAccumulatedCommission;
        set commission(value: dependency_5.cosmos.distribution.v1beta1.ValidatorAccumulatedCommission);
        get has_commission(): boolean;
        static fromObject(data: {
            commission?: ReturnType<typeof dependency_5.cosmos.distribution.v1beta1.ValidatorAccumulatedCommission.prototype.toObject>;
        }): QueryValidatorCommissionResponse;
        toObject(): {
            commission?: ReturnType<typeof dependency_5.cosmos.distribution.v1beta1.ValidatorAccumulatedCommission.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorCommissionResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorCommissionResponse;
    }
    export class QueryValidatorSlashesRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validator_address?: string;
            starting_height?: number;
            ending_height?: number;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get validator_address(): string;
        set validator_address(value: string);
        get starting_height(): number;
        set starting_height(value: number);
        get ending_height(): number;
        set ending_height(value: number);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            validator_address?: string;
            starting_height?: number;
            ending_height?: number;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryValidatorSlashesRequest;
        toObject(): {
            validator_address?: string;
            starting_height?: number;
            ending_height?: number;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorSlashesRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorSlashesRequest;
    }
    export class QueryValidatorSlashesResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            slashes?: dependency_5.cosmos.distribution.v1beta1.ValidatorSlashEvent[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get slashes(): dependency_5.cosmos.distribution.v1beta1.ValidatorSlashEvent[];
        set slashes(value: dependency_5.cosmos.distribution.v1beta1.ValidatorSlashEvent[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            slashes?: ReturnType<typeof dependency_5.cosmos.distribution.v1beta1.ValidatorSlashEvent.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryValidatorSlashesResponse;
        toObject(): {
            slashes?: ReturnType<typeof dependency_5.cosmos.distribution.v1beta1.ValidatorSlashEvent.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorSlashesResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorSlashesResponse;
    }
    export class QueryDelegationRewardsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegator_address?: string;
            validator_address?: string;
        });
        get delegator_address(): string;
        set delegator_address(value: string);
        get validator_address(): string;
        set validator_address(value: string);
        static fromObject(data: {
            delegator_address?: string;
            validator_address?: string;
        }): QueryDelegationRewardsRequest;
        toObject(): {
            delegator_address?: string;
            validator_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegationRewardsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegationRewardsRequest;
    }
    export class QueryDelegationRewardsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            rewards?: dependency_4.cosmos.base.v1beta1.DecCoin[];
        });
        get rewards(): dependency_4.cosmos.base.v1beta1.DecCoin[];
        set rewards(value: dependency_4.cosmos.base.v1beta1.DecCoin[]);
        static fromObject(data: {
            rewards?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.DecCoin.prototype.toObject>[];
        }): QueryDelegationRewardsResponse;
        toObject(): {
            rewards?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.DecCoin.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegationRewardsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegationRewardsResponse;
    }
    export class QueryDelegationTotalRewardsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegator_address?: string;
        });
        get delegator_address(): string;
        set delegator_address(value: string);
        static fromObject(data: {
            delegator_address?: string;
        }): QueryDelegationTotalRewardsRequest;
        toObject(): {
            delegator_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegationTotalRewardsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegationTotalRewardsRequest;
    }
    export class QueryDelegationTotalRewardsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            rewards?: dependency_5.cosmos.distribution.v1beta1.DelegationDelegatorReward[];
            total?: dependency_4.cosmos.base.v1beta1.DecCoin[];
        });
        get rewards(): dependency_5.cosmos.distribution.v1beta1.DelegationDelegatorReward[];
        set rewards(value: dependency_5.cosmos.distribution.v1beta1.DelegationDelegatorReward[]);
        get total(): dependency_4.cosmos.base.v1beta1.DecCoin[];
        set total(value: dependency_4.cosmos.base.v1beta1.DecCoin[]);
        static fromObject(data: {
            rewards?: ReturnType<typeof dependency_5.cosmos.distribution.v1beta1.DelegationDelegatorReward.prototype.toObject>[];
            total?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.DecCoin.prototype.toObject>[];
        }): QueryDelegationTotalRewardsResponse;
        toObject(): {
            rewards?: ReturnType<typeof dependency_5.cosmos.distribution.v1beta1.DelegationDelegatorReward.prototype.toObject>[];
            total?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.DecCoin.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegationTotalRewardsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegationTotalRewardsResponse;
    }
    export class QueryDelegatorValidatorsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegator_address?: string;
        });
        get delegator_address(): string;
        set delegator_address(value: string);
        static fromObject(data: {
            delegator_address?: string;
        }): QueryDelegatorValidatorsRequest;
        toObject(): {
            delegator_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegatorValidatorsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegatorValidatorsRequest;
    }
    export class QueryDelegatorValidatorsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validators?: string[];
        });
        get validators(): string[];
        set validators(value: string[]);
        static fromObject(data: {
            validators?: string[];
        }): QueryDelegatorValidatorsResponse;
        toObject(): {
            validators?: string[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegatorValidatorsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegatorValidatorsResponse;
    }
    export class QueryDelegatorWithdrawAddressRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegator_address?: string;
        });
        get delegator_address(): string;
        set delegator_address(value: string);
        static fromObject(data: {
            delegator_address?: string;
        }): QueryDelegatorWithdrawAddressRequest;
        toObject(): {
            delegator_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegatorWithdrawAddressRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegatorWithdrawAddressRequest;
    }
    export class QueryDelegatorWithdrawAddressResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            withdraw_address?: string;
        });
        get withdraw_address(): string;
        set withdraw_address(value: string);
        static fromObject(data: {
            withdraw_address?: string;
        }): QueryDelegatorWithdrawAddressResponse;
        toObject(): {
            withdraw_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegatorWithdrawAddressResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegatorWithdrawAddressResponse;
    }
    export class QueryCommunityPoolRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryCommunityPoolRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCommunityPoolRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCommunityPoolRequest;
    }
    export class QueryCommunityPoolResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            pool?: dependency_4.cosmos.base.v1beta1.DecCoin[];
        });
        get pool(): dependency_4.cosmos.base.v1beta1.DecCoin[];
        set pool(value: dependency_4.cosmos.base.v1beta1.DecCoin[]);
        static fromObject(data: {
            pool?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.DecCoin.prototype.toObject>[];
        }): QueryCommunityPoolResponse;
        toObject(): {
            pool?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.DecCoin.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCommunityPoolResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCommunityPoolResponse;
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
            ValidatorOutstandingRewards: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryValidatorOutstandingRewardsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryValidatorOutstandingRewardsRequest;
                responseSerialize: (message: QueryValidatorOutstandingRewardsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryValidatorOutstandingRewardsResponse;
            };
            ValidatorCommission: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryValidatorCommissionRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryValidatorCommissionRequest;
                responseSerialize: (message: QueryValidatorCommissionResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryValidatorCommissionResponse;
            };
            ValidatorSlashes: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryValidatorSlashesRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryValidatorSlashesRequest;
                responseSerialize: (message: QueryValidatorSlashesResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryValidatorSlashesResponse;
            };
            DelegationRewards: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDelegationRewardsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDelegationRewardsRequest;
                responseSerialize: (message: QueryDelegationRewardsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDelegationRewardsResponse;
            };
            DelegationTotalRewards: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDelegationTotalRewardsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDelegationTotalRewardsRequest;
                responseSerialize: (message: QueryDelegationTotalRewardsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDelegationTotalRewardsResponse;
            };
            DelegatorValidators: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDelegatorValidatorsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDelegatorValidatorsRequest;
                responseSerialize: (message: QueryDelegatorValidatorsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDelegatorValidatorsResponse;
            };
            DelegatorWithdrawAddress: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDelegatorWithdrawAddressRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDelegatorWithdrawAddressRequest;
                responseSerialize: (message: QueryDelegatorWithdrawAddressResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDelegatorWithdrawAddressResponse;
            };
            CommunityPool: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryCommunityPoolRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryCommunityPoolRequest;
                responseSerialize: (message: QueryCommunityPoolResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryCommunityPoolResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
        abstract ValidatorOutstandingRewards(call: grpc_1.ServerUnaryCall<QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse>, callback: grpc_1.sendUnaryData<QueryValidatorOutstandingRewardsResponse>): void;
        abstract ValidatorCommission(call: grpc_1.ServerUnaryCall<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>, callback: grpc_1.sendUnaryData<QueryValidatorCommissionResponse>): void;
        abstract ValidatorSlashes(call: grpc_1.ServerUnaryCall<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>, callback: grpc_1.sendUnaryData<QueryValidatorSlashesResponse>): void;
        abstract DelegationRewards(call: grpc_1.ServerUnaryCall<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>, callback: grpc_1.sendUnaryData<QueryDelegationRewardsResponse>): void;
        abstract DelegationTotalRewards(call: grpc_1.ServerUnaryCall<QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse>, callback: grpc_1.sendUnaryData<QueryDelegationTotalRewardsResponse>): void;
        abstract DelegatorValidators(call: grpc_1.ServerUnaryCall<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>, callback: grpc_1.sendUnaryData<QueryDelegatorValidatorsResponse>): void;
        abstract DelegatorWithdrawAddress(call: grpc_1.ServerUnaryCall<QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse>, callback: grpc_1.sendUnaryData<QueryDelegatorWithdrawAddressResponse>): void;
        abstract CommunityPool(call: grpc_1.ServerUnaryCall<QueryCommunityPoolRequest, QueryCommunityPoolResponse>, callback: grpc_1.sendUnaryData<QueryCommunityPoolResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
        ValidatorOutstandingRewards: GrpcUnaryServiceInterface<QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse>;
        ValidatorCommission: GrpcUnaryServiceInterface<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>;
        ValidatorSlashes: GrpcUnaryServiceInterface<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>;
        DelegationRewards: GrpcUnaryServiceInterface<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>;
        DelegationTotalRewards: GrpcUnaryServiceInterface<QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse>;
        DelegatorValidators: GrpcUnaryServiceInterface<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>;
        DelegatorWithdrawAddress: GrpcUnaryServiceInterface<QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse>;
        CommunityPool: GrpcUnaryServiceInterface<QueryCommunityPoolRequest, QueryCommunityPoolResponse>;
    }
    export {};
}
//# sourceMappingURL=query.d.ts.map