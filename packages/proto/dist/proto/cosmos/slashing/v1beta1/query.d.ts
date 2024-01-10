/// <reference types="node" />
import * as dependency_1 from "./../../base/query/v1beta1/pagination";
import * as dependency_4 from "./slashing";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.slashing.v1beta1 {
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
            params?: dependency_4.cosmos.slashing.v1beta1.Params;
        });
        get params(): dependency_4.cosmos.slashing.v1beta1.Params;
        set params(value: dependency_4.cosmos.slashing.v1beta1.Params);
        get has_params(): boolean;
        static fromObject(data: {
            params?: ReturnType<typeof dependency_4.cosmos.slashing.v1beta1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: ReturnType<typeof dependency_4.cosmos.slashing.v1beta1.Params.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    export class QuerySigningInfoRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            cons_address?: string;
        });
        get cons_address(): string;
        set cons_address(value: string);
        static fromObject(data: {
            cons_address?: string;
        }): QuerySigningInfoRequest;
        toObject(): {
            cons_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySigningInfoRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QuerySigningInfoRequest;
    }
    export class QuerySigningInfoResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            val_signing_info?: dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo;
        });
        get val_signing_info(): dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo;
        set val_signing_info(value: dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo);
        get has_val_signing_info(): boolean;
        static fromObject(data: {
            val_signing_info?: ReturnType<typeof dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo.prototype.toObject>;
        }): QuerySigningInfoResponse;
        toObject(): {
            val_signing_info?: ReturnType<typeof dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySigningInfoResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QuerySigningInfoResponse;
    }
    export class QuerySigningInfosRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QuerySigningInfosRequest;
        toObject(): {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySigningInfosRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QuerySigningInfosRequest;
    }
    export class QuerySigningInfosResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            info?: dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get info(): dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo[];
        set info(value: dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            info?: ReturnType<typeof dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QuerySigningInfosResponse;
        toObject(): {
            info?: ReturnType<typeof dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySigningInfosResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QuerySigningInfosResponse;
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
            SigningInfo: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QuerySigningInfoRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QuerySigningInfoRequest;
                responseSerialize: (message: QuerySigningInfoResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QuerySigningInfoResponse;
            };
            SigningInfos: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QuerySigningInfosRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QuerySigningInfosRequest;
                responseSerialize: (message: QuerySigningInfosResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QuerySigningInfosResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
        abstract SigningInfo(call: grpc_1.ServerUnaryCall<QuerySigningInfoRequest, QuerySigningInfoResponse>, callback: grpc_1.sendUnaryData<QuerySigningInfoResponse>): void;
        abstract SigningInfos(call: grpc_1.ServerUnaryCall<QuerySigningInfosRequest, QuerySigningInfosResponse>, callback: grpc_1.sendUnaryData<QuerySigningInfosResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
        SigningInfo: GrpcUnaryServiceInterface<QuerySigningInfoRequest, QuerySigningInfoResponse>;
        SigningInfos: GrpcUnaryServiceInterface<QuerySigningInfosRequest, QuerySigningInfosResponse>;
    }
    export {};
}
//# sourceMappingURL=query.d.ts.map