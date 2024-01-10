import * as dependency_1 from "./../../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_2 from "./client";
import * as dependency_3 from "./../../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace ibc.core.client.v1 {
    export class QueryClientStateRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            client_id?: string;
        });
        get client_id(): string;
        set client_id(value: string);
        static fromObject(data: {
            client_id?: string;
        }): QueryClientStateRequest;
        toObject(): {
            client_id?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClientStateRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryClientStateRequest;
    }
    export class QueryClientStateResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            client_state?: dependency_3.google.protobuf.Any;
            proof?: Uint8Array;
            proof_height?: dependency_2.ibc.core.client.v1.Height;
        });
        get client_state(): dependency_3.google.protobuf.Any;
        set client_state(value: dependency_3.google.protobuf.Any);
        get has_client_state(): boolean;
        get proof(): Uint8Array;
        set proof(value: Uint8Array);
        get proof_height(): dependency_2.ibc.core.client.v1.Height;
        set proof_height(value: dependency_2.ibc.core.client.v1.Height);
        get has_proof_height(): boolean;
        static fromObject(data: {
            client_state?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryClientStateResponse;
        toObject(): {
            client_state?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClientStateResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryClientStateResponse;
    }
    export class QueryClientStatesRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryClientStatesRequest;
        toObject(): {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClientStatesRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryClientStatesRequest;
    }
    export class QueryClientStatesResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            client_states?: dependency_2.ibc.core.client.v1.IdentifiedClientState[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get client_states(): dependency_2.ibc.core.client.v1.IdentifiedClientState[];
        set client_states(value: dependency_2.ibc.core.client.v1.IdentifiedClientState[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            client_states?: ReturnType<typeof dependency_2.ibc.core.client.v1.IdentifiedClientState.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryClientStatesResponse;
        toObject(): {
            client_states?: ReturnType<typeof dependency_2.ibc.core.client.v1.IdentifiedClientState.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClientStatesResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryClientStatesResponse;
    }
    export class QueryConsensusStateRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            client_id?: string;
            revision_number?: number;
            revision_height?: number;
            latest_height?: boolean;
        });
        get client_id(): string;
        set client_id(value: string);
        get revision_number(): number;
        set revision_number(value: number);
        get revision_height(): number;
        set revision_height(value: number);
        get latest_height(): boolean;
        set latest_height(value: boolean);
        static fromObject(data: {
            client_id?: string;
            revision_number?: number;
            revision_height?: number;
            latest_height?: boolean;
        }): QueryConsensusStateRequest;
        toObject(): {
            client_id?: string;
            revision_number?: number;
            revision_height?: number;
            latest_height?: boolean;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryConsensusStateRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryConsensusStateRequest;
    }
    export class QueryConsensusStateResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            consensus_state?: dependency_3.google.protobuf.Any;
            proof?: Uint8Array;
            proof_height?: dependency_2.ibc.core.client.v1.Height;
        });
        get consensus_state(): dependency_3.google.protobuf.Any;
        set consensus_state(value: dependency_3.google.protobuf.Any);
        get has_consensus_state(): boolean;
        get proof(): Uint8Array;
        set proof(value: Uint8Array);
        get proof_height(): dependency_2.ibc.core.client.v1.Height;
        set proof_height(value: dependency_2.ibc.core.client.v1.Height);
        get has_proof_height(): boolean;
        static fromObject(data: {
            consensus_state?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryConsensusStateResponse;
        toObject(): {
            consensus_state?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryConsensusStateResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryConsensusStateResponse;
    }
    export class QueryConsensusStatesRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            client_id?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get client_id(): string;
        set client_id(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            client_id?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryConsensusStatesRequest;
        toObject(): {
            client_id?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryConsensusStatesRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryConsensusStatesRequest;
    }
    export class QueryConsensusStatesResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            consensus_states?: dependency_2.ibc.core.client.v1.ConsensusStateWithHeight[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get consensus_states(): dependency_2.ibc.core.client.v1.ConsensusStateWithHeight[];
        set consensus_states(value: dependency_2.ibc.core.client.v1.ConsensusStateWithHeight[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            consensus_states?: ReturnType<typeof dependency_2.ibc.core.client.v1.ConsensusStateWithHeight.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryConsensusStatesResponse;
        toObject(): {
            consensus_states?: ReturnType<typeof dependency_2.ibc.core.client.v1.ConsensusStateWithHeight.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryConsensusStatesResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryConsensusStatesResponse;
    }
    export class QueryClientStatusRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            client_id?: string;
        });
        get client_id(): string;
        set client_id(value: string);
        static fromObject(data: {
            client_id?: string;
        }): QueryClientStatusRequest;
        toObject(): {
            client_id?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClientStatusRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryClientStatusRequest;
    }
    export class QueryClientStatusResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            status?: string;
        });
        get status(): string;
        set status(value: string);
        static fromObject(data: {
            status?: string;
        }): QueryClientStatusResponse;
        toObject(): {
            status?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClientStatusResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryClientStatusResponse;
    }
    export class QueryClientParamsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryClientParamsRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClientParamsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryClientParamsRequest;
    }
    export class QueryClientParamsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            params?: dependency_2.ibc.core.client.v1.Params;
        });
        get params(): dependency_2.ibc.core.client.v1.Params;
        set params(value: dependency_2.ibc.core.client.v1.Params);
        get has_params(): boolean;
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.ibc.core.client.v1.Params.prototype.toObject>;
        }): QueryClientParamsResponse;
        toObject(): {
            params?: ReturnType<typeof dependency_2.ibc.core.client.v1.Params.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClientParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryClientParamsResponse;
    }
    export class QueryUpgradedClientStateRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryUpgradedClientStateRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryUpgradedClientStateRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryUpgradedClientStateRequest;
    }
    export class QueryUpgradedClientStateResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            upgraded_client_state?: dependency_3.google.protobuf.Any;
        });
        get upgraded_client_state(): dependency_3.google.protobuf.Any;
        set upgraded_client_state(value: dependency_3.google.protobuf.Any);
        get has_upgraded_client_state(): boolean;
        static fromObject(data: {
            upgraded_client_state?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
        }): QueryUpgradedClientStateResponse;
        toObject(): {
            upgraded_client_state?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryUpgradedClientStateResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryUpgradedClientStateResponse;
    }
    export class QueryUpgradedConsensusStateRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryUpgradedConsensusStateRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryUpgradedConsensusStateRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryUpgradedConsensusStateRequest;
    }
    export class QueryUpgradedConsensusStateResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            upgraded_consensus_state?: dependency_3.google.protobuf.Any;
        });
        get upgraded_consensus_state(): dependency_3.google.protobuf.Any;
        set upgraded_consensus_state(value: dependency_3.google.protobuf.Any);
        get has_upgraded_consensus_state(): boolean;
        static fromObject(data: {
            upgraded_consensus_state?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
        }): QueryUpgradedConsensusStateResponse;
        toObject(): {
            upgraded_consensus_state?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryUpgradedConsensusStateResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryUpgradedConsensusStateResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            ClientState: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryClientStateRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryClientStateRequest;
                responseSerialize: (message: QueryClientStateResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryClientStateResponse;
            };
            ClientStates: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryClientStatesRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryClientStatesRequest;
                responseSerialize: (message: QueryClientStatesResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryClientStatesResponse;
            };
            ConsensusState: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryConsensusStateRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryConsensusStateRequest;
                responseSerialize: (message: QueryConsensusStateResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryConsensusStateResponse;
            };
            ConsensusStates: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryConsensusStatesRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryConsensusStatesRequest;
                responseSerialize: (message: QueryConsensusStatesResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryConsensusStatesResponse;
            };
            ClientStatus: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryClientStatusRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryClientStatusRequest;
                responseSerialize: (message: QueryClientStatusResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryClientStatusResponse;
            };
            ClientParams: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryClientParamsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryClientParamsRequest;
                responseSerialize: (message: QueryClientParamsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryClientParamsResponse;
            };
            UpgradedClientState: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryUpgradedClientStateRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryUpgradedClientStateRequest;
                responseSerialize: (message: QueryUpgradedClientStateResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryUpgradedClientStateResponse;
            };
            UpgradedConsensusState: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryUpgradedConsensusStateRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryUpgradedConsensusStateRequest;
                responseSerialize: (message: QueryUpgradedConsensusStateResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryUpgradedConsensusStateResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract ClientState(call: grpc_1.ServerUnaryCall<QueryClientStateRequest, QueryClientStateResponse>, callback: grpc_1.sendUnaryData<QueryClientStateResponse>): void;
        abstract ClientStates(call: grpc_1.ServerUnaryCall<QueryClientStatesRequest, QueryClientStatesResponse>, callback: grpc_1.sendUnaryData<QueryClientStatesResponse>): void;
        abstract ConsensusState(call: grpc_1.ServerUnaryCall<QueryConsensusStateRequest, QueryConsensusStateResponse>, callback: grpc_1.sendUnaryData<QueryConsensusStateResponse>): void;
        abstract ConsensusStates(call: grpc_1.ServerUnaryCall<QueryConsensusStatesRequest, QueryConsensusStatesResponse>, callback: grpc_1.sendUnaryData<QueryConsensusStatesResponse>): void;
        abstract ClientStatus(call: grpc_1.ServerUnaryCall<QueryClientStatusRequest, QueryClientStatusResponse>, callback: grpc_1.sendUnaryData<QueryClientStatusResponse>): void;
        abstract ClientParams(call: grpc_1.ServerUnaryCall<QueryClientParamsRequest, QueryClientParamsResponse>, callback: grpc_1.sendUnaryData<QueryClientParamsResponse>): void;
        abstract UpgradedClientState(call: grpc_1.ServerUnaryCall<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>, callback: grpc_1.sendUnaryData<QueryUpgradedClientStateResponse>): void;
        abstract UpgradedConsensusState(call: grpc_1.ServerUnaryCall<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>, callback: grpc_1.sendUnaryData<QueryUpgradedConsensusStateResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        ClientState: GrpcUnaryServiceInterface<QueryClientStateRequest, QueryClientStateResponse>;
        ClientStates: GrpcUnaryServiceInterface<QueryClientStatesRequest, QueryClientStatesResponse>;
        ConsensusState: GrpcUnaryServiceInterface<QueryConsensusStateRequest, QueryConsensusStateResponse>;
        ConsensusStates: GrpcUnaryServiceInterface<QueryConsensusStatesRequest, QueryConsensusStatesResponse>;
        ClientStatus: GrpcUnaryServiceInterface<QueryClientStatusRequest, QueryClientStatusResponse>;
        ClientParams: GrpcUnaryServiceInterface<QueryClientParamsRequest, QueryClientParamsResponse>;
        UpgradedClientState: GrpcUnaryServiceInterface<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>;
        UpgradedConsensusState: GrpcUnaryServiceInterface<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>;
    }
    export {};
}
//# sourceMappingURL=query.d.ts.map