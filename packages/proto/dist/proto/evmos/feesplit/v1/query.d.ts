/// <reference types="node" />
import * as dependency_1 from "./../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_2 from "./genesis";
import * as dependency_3 from "./feesplit";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace evmos.feesplit.v1 {
    export class QueryFeeSplitsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryFeeSplitsRequest;
        toObject(): {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryFeeSplitsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryFeeSplitsRequest;
    }
    export class QueryFeeSplitsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            fee_splits?: dependency_3.evmos.feesplit.v1.FeeSplit[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get fee_splits(): dependency_3.evmos.feesplit.v1.FeeSplit[];
        set fee_splits(value: dependency_3.evmos.feesplit.v1.FeeSplit[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            fee_splits?: ReturnType<typeof dependency_3.evmos.feesplit.v1.FeeSplit.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryFeeSplitsResponse;
        toObject(): {
            fee_splits?: ReturnType<typeof dependency_3.evmos.feesplit.v1.FeeSplit.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryFeeSplitsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryFeeSplitsResponse;
    }
    export class QueryFeeSplitRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            contract_address?: string;
        });
        get contract_address(): string;
        set contract_address(value: string);
        static fromObject(data: {
            contract_address?: string;
        }): QueryFeeSplitRequest;
        toObject(): {
            contract_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryFeeSplitRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryFeeSplitRequest;
    }
    export class QueryFeeSplitResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            fee_split?: dependency_3.evmos.feesplit.v1.FeeSplit;
        });
        get fee_split(): dependency_3.evmos.feesplit.v1.FeeSplit;
        set fee_split(value: dependency_3.evmos.feesplit.v1.FeeSplit);
        get has_fee_split(): boolean;
        static fromObject(data: {
            fee_split?: ReturnType<typeof dependency_3.evmos.feesplit.v1.FeeSplit.prototype.toObject>;
        }): QueryFeeSplitResponse;
        toObject(): {
            fee_split?: ReturnType<typeof dependency_3.evmos.feesplit.v1.FeeSplit.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryFeeSplitResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryFeeSplitResponse;
    }
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
            params?: dependency_2.evmos.feesplit.v1.Params;
        });
        get params(): dependency_2.evmos.feesplit.v1.Params;
        set params(value: dependency_2.evmos.feesplit.v1.Params);
        get has_params(): boolean;
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.evmos.feesplit.v1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: ReturnType<typeof dependency_2.evmos.feesplit.v1.Params.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    export class QueryDeployerFeeSplitsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            deployer_address?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get deployer_address(): string;
        set deployer_address(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            deployer_address?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryDeployerFeeSplitsRequest;
        toObject(): {
            deployer_address?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDeployerFeeSplitsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDeployerFeeSplitsRequest;
    }
    export class QueryDeployerFeeSplitsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            contract_addresses?: string[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get contract_addresses(): string[];
        set contract_addresses(value: string[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            contract_addresses?: string[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryDeployerFeeSplitsResponse;
        toObject(): {
            contract_addresses?: string[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDeployerFeeSplitsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDeployerFeeSplitsResponse;
    }
    export class QueryWithdrawerFeeSplitsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            withdrawer_address?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get withdrawer_address(): string;
        set withdrawer_address(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            withdrawer_address?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryWithdrawerFeeSplitsRequest;
        toObject(): {
            withdrawer_address?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryWithdrawerFeeSplitsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryWithdrawerFeeSplitsRequest;
    }
    export class QueryWithdrawerFeeSplitsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            contract_addresses?: string[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get contract_addresses(): string[];
        set contract_addresses(value: string[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            contract_addresses?: string[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryWithdrawerFeeSplitsResponse;
        toObject(): {
            contract_addresses?: string[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryWithdrawerFeeSplitsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryWithdrawerFeeSplitsResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            FeeSplits: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryFeeSplitsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryFeeSplitsRequest;
                responseSerialize: (message: QueryFeeSplitsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryFeeSplitsResponse;
            };
            FeeSplit: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryFeeSplitRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryFeeSplitRequest;
                responseSerialize: (message: QueryFeeSplitResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryFeeSplitResponse;
            };
            Params: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryParamsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryParamsRequest;
                responseSerialize: (message: QueryParamsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryParamsResponse;
            };
            DeployerFeeSplits: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDeployerFeeSplitsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDeployerFeeSplitsRequest;
                responseSerialize: (message: QueryDeployerFeeSplitsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDeployerFeeSplitsResponse;
            };
            WithdrawerFeeSplits: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryWithdrawerFeeSplitsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryWithdrawerFeeSplitsRequest;
                responseSerialize: (message: QueryWithdrawerFeeSplitsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryWithdrawerFeeSplitsResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract FeeSplits(call: grpc_1.ServerUnaryCall<QueryFeeSplitsRequest, QueryFeeSplitsResponse>, callback: grpc_1.sendUnaryData<QueryFeeSplitsResponse>): void;
        abstract FeeSplit(call: grpc_1.ServerUnaryCall<QueryFeeSplitRequest, QueryFeeSplitResponse>, callback: grpc_1.sendUnaryData<QueryFeeSplitResponse>): void;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
        abstract DeployerFeeSplits(call: grpc_1.ServerUnaryCall<QueryDeployerFeeSplitsRequest, QueryDeployerFeeSplitsResponse>, callback: grpc_1.sendUnaryData<QueryDeployerFeeSplitsResponse>): void;
        abstract WithdrawerFeeSplits(call: grpc_1.ServerUnaryCall<QueryWithdrawerFeeSplitsRequest, QueryWithdrawerFeeSplitsResponse>, callback: grpc_1.sendUnaryData<QueryWithdrawerFeeSplitsResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        FeeSplits: GrpcUnaryServiceInterface<QueryFeeSplitsRequest, QueryFeeSplitsResponse>;
        FeeSplit: GrpcUnaryServiceInterface<QueryFeeSplitRequest, QueryFeeSplitResponse>;
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
        DeployerFeeSplits: GrpcUnaryServiceInterface<QueryDeployerFeeSplitsRequest, QueryDeployerFeeSplitsResponse>;
        WithdrawerFeeSplits: GrpcUnaryServiceInterface<QueryWithdrawerFeeSplitsRequest, QueryWithdrawerFeeSplitsResponse>;
    }
    export {};
}
//# sourceMappingURL=query.d.ts.map