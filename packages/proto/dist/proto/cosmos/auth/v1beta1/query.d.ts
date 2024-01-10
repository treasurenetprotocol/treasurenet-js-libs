import * as dependency_1 from "./../../base/query/v1beta1/pagination";
import * as dependency_3 from "./../../../google/protobuf/any";
import * as dependency_5 from "./auth";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.auth.v1beta1 {
    export class QueryAccountsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryAccountsRequest;
        toObject(): {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAccountsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAccountsRequest;
    }
    export class QueryAccountsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            accounts?: dependency_3.google.protobuf.Any[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get accounts(): dependency_3.google.protobuf.Any[];
        set accounts(value: dependency_3.google.protobuf.Any[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            accounts?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryAccountsResponse;
        toObject(): {
            accounts?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAccountsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAccountsResponse;
    }
    export class QueryAccountRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            address?: string;
        });
        get address(): string;
        set address(value: string);
        static fromObject(data: {
            address?: string;
        }): QueryAccountRequest;
        toObject(): {
            address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAccountRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAccountRequest;
    }
    export class QueryAccountResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            account?: dependency_3.google.protobuf.Any;
        });
        get account(): dependency_3.google.protobuf.Any;
        set account(value: dependency_3.google.protobuf.Any);
        get has_account(): boolean;
        static fromObject(data: {
            account?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
        }): QueryAccountResponse;
        toObject(): {
            account?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAccountResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAccountResponse;
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
            params?: dependency_5.cosmos.auth.v1beta1.Params;
        });
        get params(): dependency_5.cosmos.auth.v1beta1.Params;
        set params(value: dependency_5.cosmos.auth.v1beta1.Params);
        get has_params(): boolean;
        static fromObject(data: {
            params?: ReturnType<typeof dependency_5.cosmos.auth.v1beta1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: ReturnType<typeof dependency_5.cosmos.auth.v1beta1.Params.prototype.toObject>;
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
            Accounts: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryAccountsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryAccountsRequest;
                responseSerialize: (message: QueryAccountsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryAccountsResponse;
            };
            Account: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryAccountRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryAccountRequest;
                responseSerialize: (message: QueryAccountResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryAccountResponse;
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
        abstract Accounts(call: grpc_1.ServerUnaryCall<QueryAccountsRequest, QueryAccountsResponse>, callback: grpc_1.sendUnaryData<QueryAccountsResponse>): void;
        abstract Account(call: grpc_1.ServerUnaryCall<QueryAccountRequest, QueryAccountResponse>, callback: grpc_1.sendUnaryData<QueryAccountResponse>): void;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Accounts: GrpcUnaryServiceInterface<QueryAccountsRequest, QueryAccountsResponse>;
        Account: GrpcUnaryServiceInterface<QueryAccountRequest, QueryAccountResponse>;
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
    }
    export {};
}
//# sourceMappingURL=query.d.ts.map