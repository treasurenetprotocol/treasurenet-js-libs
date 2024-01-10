/// <reference types="node" />
import * as dependency_2 from "./../../base/abci/v1beta1/abci";
import * as dependency_3 from "./tx";
import * as dependency_5 from "./../../base/query/v1beta1/pagination";
import * as dependency_6 from "./../../../tendermint/types/block";
import * as dependency_7 from "./../../../tendermint/types/types";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.tx.v1beta1 {
    export enum OrderBy {
        ORDER_BY_UNSPECIFIED = 0,
        ORDER_BY_ASC = 1,
        ORDER_BY_DESC = 2
    }
    export enum BroadcastMode {
        BROADCAST_MODE_UNSPECIFIED = 0,
        BROADCAST_MODE_BLOCK = 1,
        BROADCAST_MODE_SYNC = 2,
        BROADCAST_MODE_ASYNC = 3
    }
    export class GetTxsEventRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            events?: string[];
            pagination?: dependency_5.cosmos.base.query.v1beta1.PageRequest;
            order_by?: OrderBy;
        });
        get events(): string[];
        set events(value: string[]);
        get pagination(): dependency_5.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_5.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        get order_by(): OrderBy;
        set order_by(value: OrderBy);
        static fromObject(data: {
            events?: string[];
            pagination?: ReturnType<typeof dependency_5.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
            order_by?: OrderBy;
        }): GetTxsEventRequest;
        toObject(): {
            events?: string[];
            pagination?: ReturnType<typeof dependency_5.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
            order_by?: OrderBy;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetTxsEventRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetTxsEventRequest;
    }
    export class GetTxsEventResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            txs?: dependency_3.cosmos.tx.v1beta1.Tx[];
            tx_responses?: dependency_2.cosmos.base.abci.v1beta1.TxResponse[];
            pagination?: dependency_5.cosmos.base.query.v1beta1.PageResponse;
        });
        get txs(): dependency_3.cosmos.tx.v1beta1.Tx[];
        set txs(value: dependency_3.cosmos.tx.v1beta1.Tx[]);
        get tx_responses(): dependency_2.cosmos.base.abci.v1beta1.TxResponse[];
        set tx_responses(value: dependency_2.cosmos.base.abci.v1beta1.TxResponse[]);
        get pagination(): dependency_5.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_5.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            txs?: ReturnType<typeof dependency_3.cosmos.tx.v1beta1.Tx.prototype.toObject>[];
            tx_responses?: ReturnType<typeof dependency_2.cosmos.base.abci.v1beta1.TxResponse.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_5.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): GetTxsEventResponse;
        toObject(): {
            txs?: ReturnType<typeof dependency_3.cosmos.tx.v1beta1.Tx.prototype.toObject>[];
            tx_responses?: ReturnType<typeof dependency_2.cosmos.base.abci.v1beta1.TxResponse.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_5.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetTxsEventResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetTxsEventResponse;
    }
    export class BroadcastTxRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            tx_bytes?: Uint8Array;
            mode?: BroadcastMode;
        });
        get tx_bytes(): Uint8Array;
        set tx_bytes(value: Uint8Array);
        get mode(): BroadcastMode;
        set mode(value: BroadcastMode);
        static fromObject(data: {
            tx_bytes?: Uint8Array;
            mode?: BroadcastMode;
        }): BroadcastTxRequest;
        toObject(): {
            tx_bytes?: Uint8Array;
            mode?: BroadcastMode;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BroadcastTxRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BroadcastTxRequest;
    }
    export class BroadcastTxResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            tx_response?: dependency_2.cosmos.base.abci.v1beta1.TxResponse;
        });
        get tx_response(): dependency_2.cosmos.base.abci.v1beta1.TxResponse;
        set tx_response(value: dependency_2.cosmos.base.abci.v1beta1.TxResponse);
        get has_tx_response(): boolean;
        static fromObject(data: {
            tx_response?: ReturnType<typeof dependency_2.cosmos.base.abci.v1beta1.TxResponse.prototype.toObject>;
        }): BroadcastTxResponse;
        toObject(): {
            tx_response?: ReturnType<typeof dependency_2.cosmos.base.abci.v1beta1.TxResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BroadcastTxResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BroadcastTxResponse;
    }
    export class SimulateRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            tx?: dependency_3.cosmos.tx.v1beta1.Tx;
            tx_bytes?: Uint8Array;
        });
        get tx(): dependency_3.cosmos.tx.v1beta1.Tx;
        set tx(value: dependency_3.cosmos.tx.v1beta1.Tx);
        get has_tx(): boolean;
        get tx_bytes(): Uint8Array;
        set tx_bytes(value: Uint8Array);
        static fromObject(data: {
            tx?: ReturnType<typeof dependency_3.cosmos.tx.v1beta1.Tx.prototype.toObject>;
            tx_bytes?: Uint8Array;
        }): SimulateRequest;
        toObject(): {
            tx?: ReturnType<typeof dependency_3.cosmos.tx.v1beta1.Tx.prototype.toObject>;
            tx_bytes?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SimulateRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): SimulateRequest;
    }
    export class SimulateResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            gas_info?: dependency_2.cosmos.base.abci.v1beta1.GasInfo;
            result?: dependency_2.cosmos.base.abci.v1beta1.Result;
        });
        get gas_info(): dependency_2.cosmos.base.abci.v1beta1.GasInfo;
        set gas_info(value: dependency_2.cosmos.base.abci.v1beta1.GasInfo);
        get has_gas_info(): boolean;
        get result(): dependency_2.cosmos.base.abci.v1beta1.Result;
        set result(value: dependency_2.cosmos.base.abci.v1beta1.Result);
        get has_result(): boolean;
        static fromObject(data: {
            gas_info?: ReturnType<typeof dependency_2.cosmos.base.abci.v1beta1.GasInfo.prototype.toObject>;
            result?: ReturnType<typeof dependency_2.cosmos.base.abci.v1beta1.Result.prototype.toObject>;
        }): SimulateResponse;
        toObject(): {
            gas_info?: ReturnType<typeof dependency_2.cosmos.base.abci.v1beta1.GasInfo.prototype.toObject>;
            result?: ReturnType<typeof dependency_2.cosmos.base.abci.v1beta1.Result.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SimulateResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): SimulateResponse;
    }
    export class GetTxRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            hash?: string;
        });
        get hash(): string;
        set hash(value: string);
        static fromObject(data: {
            hash?: string;
        }): GetTxRequest;
        toObject(): {
            hash?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetTxRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetTxRequest;
    }
    export class GetTxResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            tx?: dependency_3.cosmos.tx.v1beta1.Tx;
            tx_response?: dependency_2.cosmos.base.abci.v1beta1.TxResponse;
        });
        get tx(): dependency_3.cosmos.tx.v1beta1.Tx;
        set tx(value: dependency_3.cosmos.tx.v1beta1.Tx);
        get has_tx(): boolean;
        get tx_response(): dependency_2.cosmos.base.abci.v1beta1.TxResponse;
        set tx_response(value: dependency_2.cosmos.base.abci.v1beta1.TxResponse);
        get has_tx_response(): boolean;
        static fromObject(data: {
            tx?: ReturnType<typeof dependency_3.cosmos.tx.v1beta1.Tx.prototype.toObject>;
            tx_response?: ReturnType<typeof dependency_2.cosmos.base.abci.v1beta1.TxResponse.prototype.toObject>;
        }): GetTxResponse;
        toObject(): {
            tx?: ReturnType<typeof dependency_3.cosmos.tx.v1beta1.Tx.prototype.toObject>;
            tx_response?: ReturnType<typeof dependency_2.cosmos.base.abci.v1beta1.TxResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetTxResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetTxResponse;
    }
    export class GetBlockWithTxsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            height?: number;
            pagination?: dependency_5.cosmos.base.query.v1beta1.PageRequest;
        });
        get height(): number;
        set height(value: number);
        get pagination(): dependency_5.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_5.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            height?: number;
            pagination?: ReturnType<typeof dependency_5.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): GetBlockWithTxsRequest;
        toObject(): {
            height?: number;
            pagination?: ReturnType<typeof dependency_5.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetBlockWithTxsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetBlockWithTxsRequest;
    }
    export class GetBlockWithTxsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            txs?: dependency_3.cosmos.tx.v1beta1.Tx[];
            block_id?: dependency_7.tendermint.types.BlockID;
            block?: dependency_6.tendermint.types.Block;
            pagination?: dependency_5.cosmos.base.query.v1beta1.PageResponse;
        });
        get txs(): dependency_3.cosmos.tx.v1beta1.Tx[];
        set txs(value: dependency_3.cosmos.tx.v1beta1.Tx[]);
        get block_id(): dependency_7.tendermint.types.BlockID;
        set block_id(value: dependency_7.tendermint.types.BlockID);
        get has_block_id(): boolean;
        get block(): dependency_6.tendermint.types.Block;
        set block(value: dependency_6.tendermint.types.Block);
        get has_block(): boolean;
        get pagination(): dependency_5.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_5.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            txs?: ReturnType<typeof dependency_3.cosmos.tx.v1beta1.Tx.prototype.toObject>[];
            block_id?: ReturnType<typeof dependency_7.tendermint.types.BlockID.prototype.toObject>;
            block?: ReturnType<typeof dependency_6.tendermint.types.Block.prototype.toObject>;
            pagination?: ReturnType<typeof dependency_5.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): GetBlockWithTxsResponse;
        toObject(): {
            txs?: ReturnType<typeof dependency_3.cosmos.tx.v1beta1.Tx.prototype.toObject>[];
            block_id?: ReturnType<typeof dependency_7.tendermint.types.BlockID.prototype.toObject>;
            block?: ReturnType<typeof dependency_6.tendermint.types.Block.prototype.toObject>;
            pagination?: ReturnType<typeof dependency_5.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetBlockWithTxsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetBlockWithTxsResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedServiceService {
        static definition: {
            Simulate: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: SimulateRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => SimulateRequest;
                responseSerialize: (message: SimulateResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => SimulateResponse;
            };
            GetTx: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetTxRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetTxRequest;
                responseSerialize: (message: GetTxResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetTxResponse;
            };
            BroadcastTx: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: BroadcastTxRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => BroadcastTxRequest;
                responseSerialize: (message: BroadcastTxResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => BroadcastTxResponse;
            };
            GetTxsEvent: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetTxsEventRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetTxsEventRequest;
                responseSerialize: (message: GetTxsEventResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetTxsEventResponse;
            };
            GetBlockWithTxs: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetBlockWithTxsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetBlockWithTxsRequest;
                responseSerialize: (message: GetBlockWithTxsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetBlockWithTxsResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Simulate(call: grpc_1.ServerUnaryCall<SimulateRequest, SimulateResponse>, callback: grpc_1.sendUnaryData<SimulateResponse>): void;
        abstract GetTx(call: grpc_1.ServerUnaryCall<GetTxRequest, GetTxResponse>, callback: grpc_1.sendUnaryData<GetTxResponse>): void;
        abstract BroadcastTx(call: grpc_1.ServerUnaryCall<BroadcastTxRequest, BroadcastTxResponse>, callback: grpc_1.sendUnaryData<BroadcastTxResponse>): void;
        abstract GetTxsEvent(call: grpc_1.ServerUnaryCall<GetTxsEventRequest, GetTxsEventResponse>, callback: grpc_1.sendUnaryData<GetTxsEventResponse>): void;
        abstract GetBlockWithTxs(call: grpc_1.ServerUnaryCall<GetBlockWithTxsRequest, GetBlockWithTxsResponse>, callback: grpc_1.sendUnaryData<GetBlockWithTxsResponse>): void;
    }
    const ServiceClient_base: grpc_1.ServiceClientConstructor;
    export class ServiceClient extends ServiceClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Simulate: GrpcUnaryServiceInterface<SimulateRequest, SimulateResponse>;
        GetTx: GrpcUnaryServiceInterface<GetTxRequest, GetTxResponse>;
        BroadcastTx: GrpcUnaryServiceInterface<BroadcastTxRequest, BroadcastTxResponse>;
        GetTxsEvent: GrpcUnaryServiceInterface<GetTxsEventRequest, GetTxsEventResponse>;
        GetBlockWithTxs: GrpcUnaryServiceInterface<GetBlockWithTxsRequest, GetBlockWithTxsResponse>;
    }
    export {};
}
//# sourceMappingURL=service.d.ts.map