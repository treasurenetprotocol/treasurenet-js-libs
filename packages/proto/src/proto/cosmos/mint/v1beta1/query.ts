/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.1
 * source: cosmos/mint/v1beta1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../../google/api/annotations";
import * as dependency_3 from "./mint";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace cosmos.mint.v1beta1 {
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
            params?: dependency_3.cosmos.mint.v1beta1.Params;
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
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.mint.v1beta1.Params, 1) as dependency_3.cosmos.mint.v1beta1.Params;
        }
        set params(value: dependency_3.cosmos.mint.v1beta1.Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_params() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_3.cosmos.mint.v1beta1.Params.prototype.toObject>;
        }): QueryParamsResponse {
            const message = new QueryParamsResponse({});
            if (data.params != null) {
                message.params = dependency_3.cosmos.mint.v1beta1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_3.cosmos.mint.v1beta1.Params.prototype.toObject>;
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
                        reader.readMessage(message.params, () => message.params = dependency_3.cosmos.mint.v1beta1.Params.deserialize(reader));
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
    export class QueryInflationRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): QueryInflationRequest {
            const message = new QueryInflationRequest({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryInflationRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryInflationRequest();
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
        static deserializeBinary(bytes: Uint8Array): QueryInflationRequest {
            return QueryInflationRequest.deserialize(bytes);
        }
    }
    export class QueryInflationResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            inflation?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("inflation" in data && data.inflation != undefined) {
                    this.inflation = data.inflation;
                }
            }
        }
        get inflation() {
            return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
        }
        set inflation(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            inflation?: Uint8Array;
        }): QueryInflationResponse {
            const message = new QueryInflationResponse({});
            if (data.inflation != null) {
                message.inflation = data.inflation;
            }
            return message;
        }
        toObject() {
            const data: {
                inflation?: Uint8Array;
            } = {};
            if (this.inflation != null) {
                data.inflation = this.inflation;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.inflation.length)
                writer.writeBytes(1, this.inflation);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryInflationResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryInflationResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.inflation = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryInflationResponse {
            return QueryInflationResponse.deserialize(bytes);
        }
    }
    export class QueryAnnualProvisionsRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): QueryAnnualProvisionsRequest {
            const message = new QueryAnnualProvisionsRequest({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAnnualProvisionsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAnnualProvisionsRequest();
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
        static deserializeBinary(bytes: Uint8Array): QueryAnnualProvisionsRequest {
            return QueryAnnualProvisionsRequest.deserialize(bytes);
        }
    }
    export class QueryAnnualProvisionsResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            annual_provisions?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("annual_provisions" in data && data.annual_provisions != undefined) {
                    this.annual_provisions = data.annual_provisions;
                }
            }
        }
        get annual_provisions() {
            return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
        }
        set annual_provisions(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            annual_provisions?: Uint8Array;
        }): QueryAnnualProvisionsResponse {
            const message = new QueryAnnualProvisionsResponse({});
            if (data.annual_provisions != null) {
                message.annual_provisions = data.annual_provisions;
            }
            return message;
        }
        toObject() {
            const data: {
                annual_provisions?: Uint8Array;
            } = {};
            if (this.annual_provisions != null) {
                data.annual_provisions = this.annual_provisions;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.annual_provisions.length)
                writer.writeBytes(1, this.annual_provisions);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAnnualProvisionsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAnnualProvisionsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.annual_provisions = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryAnnualProvisionsResponse {
            return QueryAnnualProvisionsResponse.deserialize(bytes);
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
                path: "/cosmos.mint.v1beta1.Query/Params",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryParamsRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryParamsResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
            },
            Inflation: {
                path: "/cosmos.mint.v1beta1.Query/Inflation",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryInflationRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryInflationRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryInflationResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryInflationResponse.deserialize(new Uint8Array(bytes))
            },
            AnnualProvisions: {
                path: "/cosmos.mint.v1beta1.Query/AnnualProvisions",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryAnnualProvisionsRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryAnnualProvisionsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryAnnualProvisionsResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryAnnualProvisionsResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
        abstract Inflation(call: grpc_1.ServerUnaryCall<QueryInflationRequest, QueryInflationResponse>, callback: grpc_1.sendUnaryData<QueryInflationResponse>): void;
        abstract AnnualProvisions(call: grpc_1.ServerUnaryCall<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>, callback: grpc_1.sendUnaryData<QueryAnnualProvisionsResponse>): void;
    }
    export class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse> = (message: QueryParamsRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryParamsResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryParamsResponse>, callback?: grpc_1.requestCallback<QueryParamsResponse>): grpc_1.ClientUnaryCall => {
            return super.Params(message, metadata, options, callback);
        };
        Inflation: GrpcUnaryServiceInterface<QueryInflationRequest, QueryInflationResponse> = (message: QueryInflationRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryInflationResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryInflationResponse>, callback?: grpc_1.requestCallback<QueryInflationResponse>): grpc_1.ClientUnaryCall => {
            return super.Inflation(message, metadata, options, callback);
        };
        AnnualProvisions: GrpcUnaryServiceInterface<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse> = (message: QueryAnnualProvisionsRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryAnnualProvisionsResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryAnnualProvisionsResponse>, callback?: grpc_1.requestCallback<QueryAnnualProvisionsResponse>): grpc_1.ClientUnaryCall => {
            return super.AnnualProvisions(message, metadata, options, callback);
        };
    }
}