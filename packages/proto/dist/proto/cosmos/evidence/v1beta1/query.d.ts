/// <reference types="node" />
import * as dependency_1 from "./../../base/query/v1beta1/pagination";
import * as dependency_3 from "./../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.evidence.v1beta1 {
    export class QueryEvidenceRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            evidence_hash?: Uint8Array;
        });
        get evidence_hash(): Uint8Array;
        set evidence_hash(value: Uint8Array);
        static fromObject(data: {
            evidence_hash?: Uint8Array;
        }): QueryEvidenceRequest;
        toObject(): {
            evidence_hash?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryEvidenceRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryEvidenceRequest;
    }
    export class QueryEvidenceResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            evidence?: dependency_3.google.protobuf.Any;
        });
        get evidence(): dependency_3.google.protobuf.Any;
        set evidence(value: dependency_3.google.protobuf.Any);
        get has_evidence(): boolean;
        static fromObject(data: {
            evidence?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
        }): QueryEvidenceResponse;
        toObject(): {
            evidence?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryEvidenceResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryEvidenceResponse;
    }
    export class QueryAllEvidenceRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryAllEvidenceRequest;
        toObject(): {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllEvidenceRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAllEvidenceRequest;
    }
    export class QueryAllEvidenceResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            evidence?: dependency_3.google.protobuf.Any[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get evidence(): dependency_3.google.protobuf.Any[];
        set evidence(value: dependency_3.google.protobuf.Any[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            evidence?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryAllEvidenceResponse;
        toObject(): {
            evidence?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllEvidenceResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAllEvidenceResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            Evidence: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryEvidenceRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryEvidenceRequest;
                responseSerialize: (message: QueryEvidenceResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryEvidenceResponse;
            };
            AllEvidence: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryAllEvidenceRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryAllEvidenceRequest;
                responseSerialize: (message: QueryAllEvidenceResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryAllEvidenceResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Evidence(call: grpc_1.ServerUnaryCall<QueryEvidenceRequest, QueryEvidenceResponse>, callback: grpc_1.sendUnaryData<QueryEvidenceResponse>): void;
        abstract AllEvidence(call: grpc_1.ServerUnaryCall<QueryAllEvidenceRequest, QueryAllEvidenceResponse>, callback: grpc_1.sendUnaryData<QueryAllEvidenceResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Evidence: GrpcUnaryServiceInterface<QueryEvidenceRequest, QueryEvidenceResponse>;
        AllEvidence: GrpcUnaryServiceInterface<QueryAllEvidenceRequest, QueryAllEvidenceResponse>;
    }
    export {};
}
//# sourceMappingURL=query.d.ts.map