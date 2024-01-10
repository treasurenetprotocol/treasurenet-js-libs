/// <reference types="node" />
import * as dependency_1 from "./feegrant";
import * as dependency_2 from "./../../base/query/v1beta1/pagination";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.feegrant.v1beta1 {
    export class QueryAllowanceRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            granter?: string;
            grantee?: string;
        });
        get granter(): string;
        set granter(value: string);
        get grantee(): string;
        set grantee(value: string);
        static fromObject(data: {
            granter?: string;
            grantee?: string;
        }): QueryAllowanceRequest;
        toObject(): {
            granter?: string;
            grantee?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllowanceRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAllowanceRequest;
    }
    export class QueryAllowanceResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            allowance?: dependency_1.cosmos.feegrant.v1beta1.Grant;
        });
        get allowance(): dependency_1.cosmos.feegrant.v1beta1.Grant;
        set allowance(value: dependency_1.cosmos.feegrant.v1beta1.Grant);
        get has_allowance(): boolean;
        static fromObject(data: {
            allowance?: ReturnType<typeof dependency_1.cosmos.feegrant.v1beta1.Grant.prototype.toObject>;
        }): QueryAllowanceResponse;
        toObject(): {
            allowance?: ReturnType<typeof dependency_1.cosmos.feegrant.v1beta1.Grant.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllowanceResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAllowanceResponse;
    }
    export class QueryAllowancesRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            grantee?: string;
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageRequest;
        });
        get grantee(): string;
        set grantee(value: string);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            grantee?: string;
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryAllowancesRequest;
        toObject(): {
            grantee?: string;
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllowancesRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAllowancesRequest;
    }
    export class QueryAllowancesResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            allowances?: dependency_1.cosmos.feegrant.v1beta1.Grant[];
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageResponse;
        });
        get allowances(): dependency_1.cosmos.feegrant.v1beta1.Grant[];
        set allowances(value: dependency_1.cosmos.feegrant.v1beta1.Grant[]);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            allowances?: ReturnType<typeof dependency_1.cosmos.feegrant.v1beta1.Grant.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryAllowancesResponse;
        toObject(): {
            allowances?: ReturnType<typeof dependency_1.cosmos.feegrant.v1beta1.Grant.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllowancesResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAllowancesResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            Allowance: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryAllowanceRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryAllowanceRequest;
                responseSerialize: (message: QueryAllowanceResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryAllowanceResponse;
            };
            Allowances: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryAllowancesRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryAllowancesRequest;
                responseSerialize: (message: QueryAllowancesResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryAllowancesResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Allowance(call: grpc_1.ServerUnaryCall<QueryAllowanceRequest, QueryAllowanceResponse>, callback: grpc_1.sendUnaryData<QueryAllowanceResponse>): void;
        abstract Allowances(call: grpc_1.ServerUnaryCall<QueryAllowancesRequest, QueryAllowancesResponse>, callback: grpc_1.sendUnaryData<QueryAllowancesResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Allowance: GrpcUnaryServiceInterface<QueryAllowanceRequest, QueryAllowanceResponse>;
        Allowances: GrpcUnaryServiceInterface<QueryAllowancesRequest, QueryAllowancesResponse>;
    }
    export {};
}
//# sourceMappingURL=query.d.ts.map