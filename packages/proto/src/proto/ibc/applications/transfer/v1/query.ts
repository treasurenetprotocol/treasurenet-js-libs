/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.1
 * source: ibc/applications/transfer/v1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../gogoproto/gogo";
import * as dependency_2 from "./../../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_3 from "./transfer";
import * as dependency_4 from "./../../../../google/api/annotations";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace ibc.applications.transfer.v1 {
    export class QueryDenomTraceRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            hash?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("hash" in data && data.hash != undefined) {
                    this.hash = data.hash;
                }
            }
        }
        get hash() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set hash(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            hash?: string;
        }): QueryDenomTraceRequest {
            const message = new QueryDenomTraceRequest({});
            if (data.hash != null) {
                message.hash = data.hash;
            }
            return message;
        }
        toObject() {
            const data: {
                hash?: string;
            } = {};
            if (this.hash != null) {
                data.hash = this.hash;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.hash.length)
                writer.writeString(1, this.hash);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomTraceRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDenomTraceRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.hash = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryDenomTraceRequest {
            return QueryDenomTraceRequest.deserialize(bytes);
        }
    }
    export class QueryDenomTraceResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            denom_trace?: dependency_3.ibc.applications.transfer.v1.DenomTrace;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("denom_trace" in data && data.denom_trace != undefined) {
                    this.denom_trace = data.denom_trace;
                }
            }
        }
        get denom_trace() {
            return pb_1.Message.getWrapperField(this, dependency_3.ibc.applications.transfer.v1.DenomTrace, 1) as dependency_3.ibc.applications.transfer.v1.DenomTrace;
        }
        set denom_trace(value: dependency_3.ibc.applications.transfer.v1.DenomTrace) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_denom_trace() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            denom_trace?: ReturnType<typeof dependency_3.ibc.applications.transfer.v1.DenomTrace.prototype.toObject>;
        }): QueryDenomTraceResponse {
            const message = new QueryDenomTraceResponse({});
            if (data.denom_trace != null) {
                message.denom_trace = dependency_3.ibc.applications.transfer.v1.DenomTrace.fromObject(data.denom_trace);
            }
            return message;
        }
        toObject() {
            const data: {
                denom_trace?: ReturnType<typeof dependency_3.ibc.applications.transfer.v1.DenomTrace.prototype.toObject>;
            } = {};
            if (this.denom_trace != null) {
                data.denom_trace = this.denom_trace.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_denom_trace)
                writer.writeMessage(1, this.denom_trace, () => this.denom_trace.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomTraceResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDenomTraceResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.denom_trace, () => message.denom_trace = dependency_3.ibc.applications.transfer.v1.DenomTrace.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryDenomTraceResponse {
            return QueryDenomTraceResponse.deserialize(bytes);
        }
    }
    export class QueryDenomTracesRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageRequest;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageRequest, 1) as dependency_2.cosmos.base.query.v1beta1.PageRequest;
        }
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageRequest) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_pagination() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryDenomTracesRequest {
            const message = new QueryDenomTracesRequest({});
            if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
            } = {};
            if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_pagination)
                writer.writeMessage(1, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomTracesRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDenomTracesRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryDenomTracesRequest {
            return QueryDenomTracesRequest.deserialize(bytes);
        }
    }
    export class QueryDenomTracesResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            denom_traces?: dependency_3.ibc.applications.transfer.v1.DenomTrace[];
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageResponse;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("denom_traces" in data && data.denom_traces != undefined) {
                    this.denom_traces = data.denom_traces;
                }
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get denom_traces() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.ibc.applications.transfer.v1.DenomTrace, 1) as dependency_3.ibc.applications.transfer.v1.DenomTrace[];
        }
        set denom_traces(value: dependency_3.ibc.applications.transfer.v1.DenomTrace[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageResponse, 2) as dependency_2.cosmos.base.query.v1beta1.PageResponse;
        }
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageResponse) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_pagination() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            denom_traces?: ReturnType<typeof dependency_3.ibc.applications.transfer.v1.DenomTrace.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryDenomTracesResponse {
            const message = new QueryDenomTracesResponse({});
            if (data.denom_traces != null) {
                message.denom_traces = data.denom_traces.map(item => dependency_3.ibc.applications.transfer.v1.DenomTrace.fromObject(item));
            }
            if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                denom_traces?: ReturnType<typeof dependency_3.ibc.applications.transfer.v1.DenomTrace.prototype.toObject>[];
                pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            } = {};
            if (this.denom_traces != null) {
                data.denom_traces = this.denom_traces.map((item: dependency_3.ibc.applications.transfer.v1.DenomTrace) => item.toObject());
            }
            if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.denom_traces.length)
                writer.writeRepeatedMessage(1, this.denom_traces, (item: dependency_3.ibc.applications.transfer.v1.DenomTrace) => item.serialize(writer));
            if (this.has_pagination)
                writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomTracesResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDenomTracesResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.denom_traces, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.ibc.applications.transfer.v1.DenomTrace.deserialize(reader), dependency_3.ibc.applications.transfer.v1.DenomTrace));
                        break;
                    case 2:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryDenomTracesResponse {
            return QueryDenomTracesResponse.deserialize(bytes);
        }
    }
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
            params?: dependency_3.ibc.applications.transfer.v1.Params;
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
            return pb_1.Message.getWrapperField(this, dependency_3.ibc.applications.transfer.v1.Params, 1) as dependency_3.ibc.applications.transfer.v1.Params;
        }
        set params(value: dependency_3.ibc.applications.transfer.v1.Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_params() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_3.ibc.applications.transfer.v1.Params.prototype.toObject>;
        }): QueryParamsResponse {
            const message = new QueryParamsResponse({});
            if (data.params != null) {
                message.params = dependency_3.ibc.applications.transfer.v1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_3.ibc.applications.transfer.v1.Params.prototype.toObject>;
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
                        reader.readMessage(message.params, () => message.params = dependency_3.ibc.applications.transfer.v1.Params.deserialize(reader));
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
    export class QueryDenomHashRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            trace?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("trace" in data && data.trace != undefined) {
                    this.trace = data.trace;
                }
            }
        }
        get trace() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set trace(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            trace?: string;
        }): QueryDenomHashRequest {
            const message = new QueryDenomHashRequest({});
            if (data.trace != null) {
                message.trace = data.trace;
            }
            return message;
        }
        toObject() {
            const data: {
                trace?: string;
            } = {};
            if (this.trace != null) {
                data.trace = this.trace;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.trace.length)
                writer.writeString(1, this.trace);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomHashRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDenomHashRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.trace = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryDenomHashRequest {
            return QueryDenomHashRequest.deserialize(bytes);
        }
    }
    export class QueryDenomHashResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            hash?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("hash" in data && data.hash != undefined) {
                    this.hash = data.hash;
                }
            }
        }
        get hash() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set hash(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            hash?: string;
        }): QueryDenomHashResponse {
            const message = new QueryDenomHashResponse({});
            if (data.hash != null) {
                message.hash = data.hash;
            }
            return message;
        }
        toObject() {
            const data: {
                hash?: string;
            } = {};
            if (this.hash != null) {
                data.hash = this.hash;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.hash.length)
                writer.writeString(1, this.hash);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomHashResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDenomHashResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.hash = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryDenomHashResponse {
            return QueryDenomHashResponse.deserialize(bytes);
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
            DenomTrace: {
                path: "/ibc.applications.transfer.v1.Query/DenomTrace",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryDenomTraceRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryDenomTraceRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryDenomTraceResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryDenomTraceResponse.deserialize(new Uint8Array(bytes))
            },
            DenomTraces: {
                path: "/ibc.applications.transfer.v1.Query/DenomTraces",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryDenomTracesRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryDenomTracesRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryDenomTracesResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryDenomTracesResponse.deserialize(new Uint8Array(bytes))
            },
            Params: {
                path: "/ibc.applications.transfer.v1.Query/Params",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryParamsRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryParamsResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
            },
            DenomHash: {
                path: "/ibc.applications.transfer.v1.Query/DenomHash",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryDenomHashRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryDenomHashRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryDenomHashResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryDenomHashResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract DenomTrace(call: grpc_1.ServerUnaryCall<QueryDenomTraceRequest, QueryDenomTraceResponse>, callback: grpc_1.sendUnaryData<QueryDenomTraceResponse>): void;
        abstract DenomTraces(call: grpc_1.ServerUnaryCall<QueryDenomTracesRequest, QueryDenomTracesResponse>, callback: grpc_1.sendUnaryData<QueryDenomTracesResponse>): void;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
        abstract DenomHash(call: grpc_1.ServerUnaryCall<QueryDenomHashRequest, QueryDenomHashResponse>, callback: grpc_1.sendUnaryData<QueryDenomHashResponse>): void;
    }
    export class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        DenomTrace: GrpcUnaryServiceInterface<QueryDenomTraceRequest, QueryDenomTraceResponse> = (message: QueryDenomTraceRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryDenomTraceResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryDenomTraceResponse>, callback?: grpc_1.requestCallback<QueryDenomTraceResponse>): grpc_1.ClientUnaryCall => {
            return super.DenomTrace(message, metadata, options, callback);
        };
        DenomTraces: GrpcUnaryServiceInterface<QueryDenomTracesRequest, QueryDenomTracesResponse> = (message: QueryDenomTracesRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryDenomTracesResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryDenomTracesResponse>, callback?: grpc_1.requestCallback<QueryDenomTracesResponse>): grpc_1.ClientUnaryCall => {
            return super.DenomTraces(message, metadata, options, callback);
        };
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse> = (message: QueryParamsRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryParamsResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryParamsResponse>, callback?: grpc_1.requestCallback<QueryParamsResponse>): grpc_1.ClientUnaryCall => {
            return super.Params(message, metadata, options, callback);
        };
        DenomHash: GrpcUnaryServiceInterface<QueryDenomHashRequest, QueryDenomHashResponse> = (message: QueryDenomHashRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryDenomHashResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryDenomHashResponse>, callback?: grpc_1.requestCallback<QueryDenomHashResponse>): grpc_1.ClientUnaryCall => {
            return super.DenomHash(message, metadata, options, callback);
        };
    }
}