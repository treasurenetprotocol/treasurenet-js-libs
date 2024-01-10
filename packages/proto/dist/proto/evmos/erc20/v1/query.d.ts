/// <reference types="node" />
import * as dependency_1 from "./../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_2 from "./genesis";
import * as dependency_3 from "./erc20";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace evmos.erc20.v1 {
    export class QueryTokenPairsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryTokenPairsRequest;
        toObject(): {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTokenPairsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTokenPairsRequest;
    }
    export class QueryTokenPairsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            token_pairs?: dependency_3.evmos.erc20.v1.TokenPair[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get token_pairs(): dependency_3.evmos.erc20.v1.TokenPair[];
        set token_pairs(value: dependency_3.evmos.erc20.v1.TokenPair[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            token_pairs?: ReturnType<typeof dependency_3.evmos.erc20.v1.TokenPair.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryTokenPairsResponse;
        toObject(): {
            token_pairs?: ReturnType<typeof dependency_3.evmos.erc20.v1.TokenPair.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTokenPairsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTokenPairsResponse;
    }
    export class QueryTokenPairRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            token?: string;
        });
        get token(): string;
        set token(value: string);
        static fromObject(data: {
            token?: string;
        }): QueryTokenPairRequest;
        toObject(): {
            token?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTokenPairRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTokenPairRequest;
    }
    export class QueryTokenPairResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            token_pair?: dependency_3.evmos.erc20.v1.TokenPair;
        });
        get token_pair(): dependency_3.evmos.erc20.v1.TokenPair;
        set token_pair(value: dependency_3.evmos.erc20.v1.TokenPair);
        get has_token_pair(): boolean;
        static fromObject(data: {
            token_pair?: ReturnType<typeof dependency_3.evmos.erc20.v1.TokenPair.prototype.toObject>;
        }): QueryTokenPairResponse;
        toObject(): {
            token_pair?: ReturnType<typeof dependency_3.evmos.erc20.v1.TokenPair.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTokenPairResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTokenPairResponse;
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
            params?: dependency_2.evmos.erc20.v1.Params;
        });
        get params(): dependency_2.evmos.erc20.v1.Params;
        set params(value: dependency_2.evmos.erc20.v1.Params);
        get has_params(): boolean;
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.evmos.erc20.v1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: ReturnType<typeof dependency_2.evmos.erc20.v1.Params.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            TokenPairs: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryTokenPairsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryTokenPairsRequest;
                responseSerialize: (message: QueryTokenPairsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryTokenPairsResponse;
            };
            TokenPair: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryTokenPairRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryTokenPairRequest;
                responseSerialize: (message: QueryTokenPairResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryTokenPairResponse;
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
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract TokenPairs(call: grpc_1.ServerUnaryCall<QueryTokenPairsRequest, QueryTokenPairsResponse>, callback: grpc_1.sendUnaryData<QueryTokenPairsResponse>): void;
        abstract TokenPair(call: grpc_1.ServerUnaryCall<QueryTokenPairRequest, QueryTokenPairResponse>, callback: grpc_1.sendUnaryData<QueryTokenPairResponse>): void;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        TokenPairs: GrpcUnaryServiceInterface<QueryTokenPairsRequest, QueryTokenPairsResponse>;
        TokenPair: GrpcUnaryServiceInterface<QueryTokenPairRequest, QueryTokenPairResponse>;
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
    }
    export {};
}
//# sourceMappingURL=query.d.ts.map