import * as dependency_2 from "./../../../../google/protobuf/any";
import * as dependency_4 from "./../../../../tendermint/p2p/types";
import * as dependency_5 from "./../../../../tendermint/types/block";
import * as dependency_6 from "./../../../../tendermint/types/types";
import * as dependency_7 from "./../../query/v1beta1/pagination";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.base.tendermint.v1beta1 {
    export class GetValidatorSetByHeightRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            height?: number;
            pagination?: dependency_7.cosmos.base.query.v1beta1.PageRequest;
        });
        get height(): number;
        set height(value: number);
        get pagination(): dependency_7.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_7.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            height?: number;
            pagination?: ReturnType<typeof dependency_7.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): GetValidatorSetByHeightRequest;
        toObject(): {
            height?: number;
            pagination?: ReturnType<typeof dependency_7.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetValidatorSetByHeightRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetValidatorSetByHeightRequest;
    }
    export class GetValidatorSetByHeightResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            block_height?: number;
            validators?: Validator[];
            pagination?: dependency_7.cosmos.base.query.v1beta1.PageResponse;
        });
        get block_height(): number;
        set block_height(value: number);
        get validators(): Validator[];
        set validators(value: Validator[]);
        get pagination(): dependency_7.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_7.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            block_height?: number;
            validators?: ReturnType<typeof Validator.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_7.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): GetValidatorSetByHeightResponse;
        toObject(): {
            block_height?: number;
            validators?: ReturnType<typeof Validator.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_7.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetValidatorSetByHeightResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetValidatorSetByHeightResponse;
    }
    export class GetLatestValidatorSetRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            pagination?: dependency_7.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_7.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_7.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_7.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): GetLatestValidatorSetRequest;
        toObject(): {
            pagination?: ReturnType<typeof dependency_7.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetLatestValidatorSetRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetLatestValidatorSetRequest;
    }
    export class GetLatestValidatorSetResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            block_height?: number;
            validators?: Validator[];
            pagination?: dependency_7.cosmos.base.query.v1beta1.PageResponse;
        });
        get block_height(): number;
        set block_height(value: number);
        get validators(): Validator[];
        set validators(value: Validator[]);
        get pagination(): dependency_7.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_7.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            block_height?: number;
            validators?: ReturnType<typeof Validator.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_7.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): GetLatestValidatorSetResponse;
        toObject(): {
            block_height?: number;
            validators?: ReturnType<typeof Validator.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_7.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetLatestValidatorSetResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetLatestValidatorSetResponse;
    }
    export class Validator extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            address?: string;
            pub_key?: dependency_2.google.protobuf.Any;
            voting_power?: number;
            proposer_priority?: number;
        });
        get address(): string;
        set address(value: string);
        get pub_key(): dependency_2.google.protobuf.Any;
        set pub_key(value: dependency_2.google.protobuf.Any);
        get has_pub_key(): boolean;
        get voting_power(): number;
        set voting_power(value: number);
        get proposer_priority(): number;
        set proposer_priority(value: number);
        static fromObject(data: {
            address?: string;
            pub_key?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            voting_power?: number;
            proposer_priority?: number;
        }): Validator;
        toObject(): {
            address?: string;
            pub_key?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            voting_power?: number;
            proposer_priority?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Validator;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Validator;
    }
    export class GetBlockByHeightRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            height?: number;
        });
        get height(): number;
        set height(value: number);
        static fromObject(data: {
            height?: number;
        }): GetBlockByHeightRequest;
        toObject(): {
            height?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetBlockByHeightRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetBlockByHeightRequest;
    }
    export class GetBlockByHeightResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            block_id?: dependency_6.tendermint.types.BlockID;
            block?: dependency_5.tendermint.types.Block;
        });
        get block_id(): dependency_6.tendermint.types.BlockID;
        set block_id(value: dependency_6.tendermint.types.BlockID);
        get has_block_id(): boolean;
        get block(): dependency_5.tendermint.types.Block;
        set block(value: dependency_5.tendermint.types.Block);
        get has_block(): boolean;
        static fromObject(data: {
            block_id?: ReturnType<typeof dependency_6.tendermint.types.BlockID.prototype.toObject>;
            block?: ReturnType<typeof dependency_5.tendermint.types.Block.prototype.toObject>;
        }): GetBlockByHeightResponse;
        toObject(): {
            block_id?: ReturnType<typeof dependency_6.tendermint.types.BlockID.prototype.toObject>;
            block?: ReturnType<typeof dependency_5.tendermint.types.Block.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetBlockByHeightResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetBlockByHeightResponse;
    }
    export class GetLatestBlockRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): GetLatestBlockRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetLatestBlockRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetLatestBlockRequest;
    }
    export class GetLatestBlockResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            block_id?: dependency_6.tendermint.types.BlockID;
            block?: dependency_5.tendermint.types.Block;
        });
        get block_id(): dependency_6.tendermint.types.BlockID;
        set block_id(value: dependency_6.tendermint.types.BlockID);
        get has_block_id(): boolean;
        get block(): dependency_5.tendermint.types.Block;
        set block(value: dependency_5.tendermint.types.Block);
        get has_block(): boolean;
        static fromObject(data: {
            block_id?: ReturnType<typeof dependency_6.tendermint.types.BlockID.prototype.toObject>;
            block?: ReturnType<typeof dependency_5.tendermint.types.Block.prototype.toObject>;
        }): GetLatestBlockResponse;
        toObject(): {
            block_id?: ReturnType<typeof dependency_6.tendermint.types.BlockID.prototype.toObject>;
            block?: ReturnType<typeof dependency_5.tendermint.types.Block.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetLatestBlockResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetLatestBlockResponse;
    }
    export class GetSyncingRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): GetSyncingRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetSyncingRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetSyncingRequest;
    }
    export class GetSyncingResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            syncing?: boolean;
        });
        get syncing(): boolean;
        set syncing(value: boolean);
        static fromObject(data: {
            syncing?: boolean;
        }): GetSyncingResponse;
        toObject(): {
            syncing?: boolean;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetSyncingResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetSyncingResponse;
    }
    export class GetNodeInfoRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): GetNodeInfoRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetNodeInfoRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetNodeInfoRequest;
    }
    export class GetNodeInfoResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            default_node_info?: dependency_4.tendermint.p2p.DefaultNodeInfo;
            application_version?: VersionInfo;
        });
        get default_node_info(): dependency_4.tendermint.p2p.DefaultNodeInfo;
        set default_node_info(value: dependency_4.tendermint.p2p.DefaultNodeInfo);
        get has_default_node_info(): boolean;
        get application_version(): VersionInfo;
        set application_version(value: VersionInfo);
        get has_application_version(): boolean;
        static fromObject(data: {
            default_node_info?: ReturnType<typeof dependency_4.tendermint.p2p.DefaultNodeInfo.prototype.toObject>;
            application_version?: ReturnType<typeof VersionInfo.prototype.toObject>;
        }): GetNodeInfoResponse;
        toObject(): {
            default_node_info?: ReturnType<typeof dependency_4.tendermint.p2p.DefaultNodeInfo.prototype.toObject>;
            application_version?: ReturnType<typeof VersionInfo.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetNodeInfoResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetNodeInfoResponse;
    }
    export class VersionInfo extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            app_name?: string;
            version?: string;
            git_commit?: string;
            build_tags?: string;
            go_version?: string;
            build_deps?: Module[];
            cosmos_sdk_version?: string;
        });
        get name(): string;
        set name(value: string);
        get app_name(): string;
        set app_name(value: string);
        get version(): string;
        set version(value: string);
        get git_commit(): string;
        set git_commit(value: string);
        get build_tags(): string;
        set build_tags(value: string);
        get go_version(): string;
        set go_version(value: string);
        get build_deps(): Module[];
        set build_deps(value: Module[]);
        get cosmos_sdk_version(): string;
        set cosmos_sdk_version(value: string);
        static fromObject(data: {
            name?: string;
            app_name?: string;
            version?: string;
            git_commit?: string;
            build_tags?: string;
            go_version?: string;
            build_deps?: ReturnType<typeof Module.prototype.toObject>[];
            cosmos_sdk_version?: string;
        }): VersionInfo;
        toObject(): {
            name?: string;
            app_name?: string;
            version?: string;
            git_commit?: string;
            build_tags?: string;
            go_version?: string;
            build_deps?: ReturnType<typeof Module.prototype.toObject>[];
            cosmos_sdk_version?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): VersionInfo;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): VersionInfo;
    }
    export class Module extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            path?: string;
            version?: string;
            sum?: string;
        });
        get path(): string;
        set path(value: string);
        get version(): string;
        set version(value: string);
        get sum(): string;
        set sum(value: string);
        static fromObject(data: {
            path?: string;
            version?: string;
            sum?: string;
        }): Module;
        toObject(): {
            path?: string;
            version?: string;
            sum?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Module;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Module;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedServiceService {
        static definition: {
            GetNodeInfo: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetNodeInfoRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetNodeInfoRequest;
                responseSerialize: (message: GetNodeInfoResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetNodeInfoResponse;
            };
            GetSyncing: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetSyncingRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetSyncingRequest;
                responseSerialize: (message: GetSyncingResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetSyncingResponse;
            };
            GetLatestBlock: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetLatestBlockRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetLatestBlockRequest;
                responseSerialize: (message: GetLatestBlockResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetLatestBlockResponse;
            };
            GetBlockByHeight: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetBlockByHeightRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetBlockByHeightRequest;
                responseSerialize: (message: GetBlockByHeightResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetBlockByHeightResponse;
            };
            GetLatestValidatorSet: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetLatestValidatorSetRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetLatestValidatorSetRequest;
                responseSerialize: (message: GetLatestValidatorSetResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetLatestValidatorSetResponse;
            };
            GetValidatorSetByHeight: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetValidatorSetByHeightRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetValidatorSetByHeightRequest;
                responseSerialize: (message: GetValidatorSetByHeightResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetValidatorSetByHeightResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract GetNodeInfo(call: grpc_1.ServerUnaryCall<GetNodeInfoRequest, GetNodeInfoResponse>, callback: grpc_1.sendUnaryData<GetNodeInfoResponse>): void;
        abstract GetSyncing(call: grpc_1.ServerUnaryCall<GetSyncingRequest, GetSyncingResponse>, callback: grpc_1.sendUnaryData<GetSyncingResponse>): void;
        abstract GetLatestBlock(call: grpc_1.ServerUnaryCall<GetLatestBlockRequest, GetLatestBlockResponse>, callback: grpc_1.sendUnaryData<GetLatestBlockResponse>): void;
        abstract GetBlockByHeight(call: grpc_1.ServerUnaryCall<GetBlockByHeightRequest, GetBlockByHeightResponse>, callback: grpc_1.sendUnaryData<GetBlockByHeightResponse>): void;
        abstract GetLatestValidatorSet(call: grpc_1.ServerUnaryCall<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>, callback: grpc_1.sendUnaryData<GetLatestValidatorSetResponse>): void;
        abstract GetValidatorSetByHeight(call: grpc_1.ServerUnaryCall<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>, callback: grpc_1.sendUnaryData<GetValidatorSetByHeightResponse>): void;
    }
    const ServiceClient_base: grpc_1.ServiceClientConstructor;
    export class ServiceClient extends ServiceClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        GetNodeInfo: GrpcUnaryServiceInterface<GetNodeInfoRequest, GetNodeInfoResponse>;
        GetSyncing: GrpcUnaryServiceInterface<GetSyncingRequest, GetSyncingResponse>;
        GetLatestBlock: GrpcUnaryServiceInterface<GetLatestBlockRequest, GetLatestBlockResponse>;
        GetBlockByHeight: GrpcUnaryServiceInterface<GetBlockByHeightRequest, GetBlockByHeightResponse>;
        GetLatestValidatorSet: GrpcUnaryServiceInterface<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>;
        GetValidatorSetByHeight: GrpcUnaryServiceInterface<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>;
    }
    export {};
}
//# sourceMappingURL=query.d.ts.map