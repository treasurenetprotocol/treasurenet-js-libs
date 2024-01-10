/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.1
 * source: ethermint/feemarket/v1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../../google/api/annotations";
import * as dependency_3 from "./feemarket";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace ethermint.feemarket.v1 {
    export class QueryParamsRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): QueryParamsRequest {
            const message = new QueryParamsRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest {
            return QueryParamsRequest.deserialize(bytes);
        }
    }
    export class QueryParamsResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            params?: dependency_3.ethermint.feemarket.v1.Params;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_3.ethermint.feemarket.v1.Params, 1) as dependency_3.ethermint.feemarket.v1.Params;
        }
        set params(value: dependency_3.ethermint.feemarket.v1.Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_params() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_3.ethermint.feemarket.v1.Params.prototype.toObject>;
        }): QueryParamsResponse {
            const message = new QueryParamsResponse({});
            if (data.params != null) {
                message.params = dependency_3.ethermint.feemarket.v1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_3.ethermint.feemarket.v1.Params.prototype.toObject>;
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_params)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.params, () => message.params = dependency_3.ethermint.feemarket.v1.Params.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse {
            return QueryParamsResponse.deserialize(bytes);
        }
    }
    export class QueryBaseFeeRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): QueryBaseFeeRequest {
            const message = new QueryBaseFeeRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBaseFeeRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBaseFeeRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryBaseFeeRequest {
            return QueryBaseFeeRequest.deserialize(bytes);
        }
    }
    export class QueryBaseFeeResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            base_fee?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("base_fee" in data && data.base_fee != undefined) {
                    this.base_fee = data.base_fee;
                }
            }
        }
        get base_fee() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set base_fee(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            base_fee?: string;
        }): QueryBaseFeeResponse {
            const message = new QueryBaseFeeResponse({});
            if (data.base_fee != null) {
                message.base_fee = data.base_fee;
            }
            return message;
        }
        toObject() {
            const data: {
                base_fee?: string;
            } = {};
            if (this.base_fee != null) {
                data.base_fee = this.base_fee;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.base_fee.length)
                writer.writeString(1, this.base_fee);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBaseFeeResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBaseFeeResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.base_fee = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryBaseFeeResponse {
            return QueryBaseFeeResponse.deserialize(bytes);
        }
    }
    export class QueryBlockGasRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): QueryBlockGasRequest {
            const message = new QueryBlockGasRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBlockGasRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBlockGasRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryBlockGasRequest {
            return QueryBlockGasRequest.deserialize(bytes);
        }
    }
    export class QueryBlockGasResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            gas?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("gas" in data && data.gas != undefined) {
                    this.gas = data.gas;
                }
            }
        }
        get gas() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set gas(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            gas?: number;
        }): QueryBlockGasResponse {
            const message = new QueryBlockGasResponse({});
            if (data.gas != null) {
                message.gas = data.gas;
            }
            return message;
        }
        toObject() {
            const data: {
                gas?: number;
            } = {};
            if (this.gas != null) {
                data.gas = this.gas;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.gas != 0)
                writer.writeInt64(1, this.gas);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBlockGasResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBlockGasResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.gas = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryBlockGasResponse {
            return QueryBlockGasResponse.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedQueryService {
        static definition = {
            Params: {
                path: "/ethermint.feemarket.v1.Query/Params",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryParamsRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryParamsResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
            },
            BaseFee: {
                path: "/ethermint.feemarket.v1.Query/BaseFee",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryBaseFeeRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryBaseFeeRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryBaseFeeResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryBaseFeeResponse.deserialize(new Uint8Array(bytes))
            },
            BlockGas: {
                path: "/ethermint.feemarket.v1.Query/BlockGas",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryBlockGasRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryBlockGasRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryBlockGasResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryBlockGasResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
        abstract BaseFee(call: grpc_1.ServerUnaryCall<QueryBaseFeeRequest, QueryBaseFeeResponse>, callback: grpc_1.sendUnaryData<QueryBaseFeeResponse>): void;
        abstract BlockGas(call: grpc_1.ServerUnaryCall<QueryBlockGasRequest, QueryBlockGasResponse>, callback: grpc_1.sendUnaryData<QueryBlockGasResponse>): void;
    }
    export class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse> = (message: QueryParamsRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryParamsResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryParamsResponse>, callback?: grpc_1.requestCallback<QueryParamsResponse>): grpc_1.ClientUnaryCall => {
            return super.Params(message, metadata, options, callback);
        };
        BaseFee: GrpcUnaryServiceInterface<QueryBaseFeeRequest, QueryBaseFeeResponse> = (message: QueryBaseFeeRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryBaseFeeResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryBaseFeeResponse>, callback?: grpc_1.requestCallback<QueryBaseFeeResponse>): grpc_1.ClientUnaryCall => {
            return super.BaseFee(message, metadata, options, callback);
        };
        BlockGas: GrpcUnaryServiceInterface<QueryBlockGasRequest, QueryBlockGasResponse> = (message: QueryBlockGasRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryBlockGasResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryBlockGasResponse>, callback?: grpc_1.requestCallback<QueryBlockGasResponse>): grpc_1.ClientUnaryCall => {
            return super.BlockGas(message, metadata, options, callback);
        };
    }
}
