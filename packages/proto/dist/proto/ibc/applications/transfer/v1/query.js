"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ibc = void 0;
const dependency_2 = __importStar(require("./../../../../cosmos/base/query/v1beta1/pagination"));
const dependency_3 = __importStar(require("./transfer"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var ibc;
(function (ibc) {
    var applications;
    (function (applications) {
        var transfer;
        (function (transfer) {
            var v1;
            (function (v1) {
                var _QueryDenomTraceRequest_one_of_decls, _QueryDenomTraceResponse_one_of_decls, _QueryDenomTracesRequest_one_of_decls, _QueryDenomTracesResponse_one_of_decls, _QueryParamsRequest_one_of_decls, _QueryParamsResponse_one_of_decls, _QueryDenomHashRequest_one_of_decls, _QueryDenomHashResponse_one_of_decls;
                class QueryDenomTraceRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryDenomTraceRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDenomTraceRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("hash" in data && data.hash != undefined) {
                                this.hash = data.hash;
                            }
                        }
                    }
                    get hash() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set hash(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new QueryDenomTraceRequest({});
                        if (data.hash != null) {
                            message.hash = data.hash;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.hash != null) {
                            data.hash = this.hash;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.hash.length)
                            writer.writeString(1, this.hash);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
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
                    serializeBinary() {
                        return this.serialize();
                    }
                    static deserializeBinary(bytes) {
                        return QueryDenomTraceRequest.deserialize(bytes);
                    }
                }
                _QueryDenomTraceRequest_one_of_decls = new WeakMap();
                v1.QueryDenomTraceRequest = QueryDenomTraceRequest;
                class QueryDenomTraceResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryDenomTraceResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDenomTraceResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("denom_trace" in data && data.denom_trace != undefined) {
                                this.denom_trace = data.denom_trace;
                            }
                        }
                    }
                    get denom_trace() {
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.applications.transfer.v1.DenomTrace, 1);
                    }
                    set denom_trace(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_denom_trace() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryDenomTraceResponse({});
                        if (data.denom_trace != null) {
                            message.denom_trace = dependency_3.ibc.applications.transfer.v1.DenomTrace.fromObject(data.denom_trace);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.denom_trace != null) {
                            data.denom_trace = this.denom_trace.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_denom_trace)
                            writer.writeMessage(1, this.denom_trace, () => this.denom_trace.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
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
                    serializeBinary() {
                        return this.serialize();
                    }
                    static deserializeBinary(bytes) {
                        return QueryDenomTraceResponse.deserialize(bytes);
                    }
                }
                _QueryDenomTraceResponse_one_of_decls = new WeakMap();
                v1.QueryDenomTraceResponse = QueryDenomTraceResponse;
                class QueryDenomTracesRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryDenomTracesRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDenomTracesRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("pagination" in data && data.pagination != undefined) {
                                this.pagination = data.pagination;
                            }
                        }
                    }
                    get pagination() {
                        return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageRequest, 1);
                    }
                    set pagination(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_pagination() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryDenomTracesRequest({});
                        if (data.pagination != null) {
                            message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.pagination != null) {
                            data.pagination = this.pagination.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_pagination)
                            writer.writeMessage(1, this.pagination, () => this.pagination.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
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
                    serializeBinary() {
                        return this.serialize();
                    }
                    static deserializeBinary(bytes) {
                        return QueryDenomTracesRequest.deserialize(bytes);
                    }
                }
                _QueryDenomTracesRequest_one_of_decls = new WeakMap();
                v1.QueryDenomTracesRequest = QueryDenomTracesRequest;
                class QueryDenomTracesResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryDenomTracesResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryDenomTracesResponse_one_of_decls, "f"));
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
                        return pb_1.Message.getRepeatedWrapperField(this, dependency_3.ibc.applications.transfer.v1.DenomTrace, 1);
                    }
                    set denom_traces(value) {
                        pb_1.Message.setRepeatedWrapperField(this, 1, value);
                    }
                    get pagination() {
                        return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageResponse, 2);
                    }
                    set pagination(value) {
                        pb_1.Message.setWrapperField(this, 2, value);
                    }
                    get has_pagination() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    static fromObject(data) {
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
                        const data = {};
                        if (this.denom_traces != null) {
                            data.denom_traces = this.denom_traces.map((item) => item.toObject());
                        }
                        if (this.pagination != null) {
                            data.pagination = this.pagination.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.denom_traces.length)
                            writer.writeRepeatedMessage(1, this.denom_traces, (item) => item.serialize(writer));
                        if (this.has_pagination)
                            writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
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
                    serializeBinary() {
                        return this.serialize();
                    }
                    static deserializeBinary(bytes) {
                        return QueryDenomTracesResponse.deserialize(bytes);
                    }
                }
                _QueryDenomTracesResponse_one_of_decls = new WeakMap();
                v1.QueryDenomTracesResponse = QueryDenomTracesResponse;
                class QueryParamsRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryParamsRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryParamsRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new QueryParamsRequest({});
                        return message;
                    }
                    toObject() {
                        const data = {};
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
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
                    serializeBinary() {
                        return this.serialize();
                    }
                    static deserializeBinary(bytes) {
                        return QueryParamsRequest.deserialize(bytes);
                    }
                }
                _QueryParamsRequest_one_of_decls = new WeakMap();
                v1.QueryParamsRequest = QueryParamsRequest;
                class QueryParamsResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryParamsResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryParamsResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("params" in data && data.params != undefined) {
                                this.params = data.params;
                            }
                        }
                    }
                    get params() {
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.applications.transfer.v1.Params, 1);
                    }
                    set params(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_params() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryParamsResponse({});
                        if (data.params != null) {
                            message.params = dependency_3.ibc.applications.transfer.v1.Params.fromObject(data.params);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.params != null) {
                            data.params = this.params.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_params)
                            writer.writeMessage(1, this.params, () => this.params.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
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
                    serializeBinary() {
                        return this.serialize();
                    }
                    static deserializeBinary(bytes) {
                        return QueryParamsResponse.deserialize(bytes);
                    }
                }
                _QueryParamsResponse_one_of_decls = new WeakMap();
                v1.QueryParamsResponse = QueryParamsResponse;
                class QueryDenomHashRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryDenomHashRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDenomHashRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("trace" in data && data.trace != undefined) {
                                this.trace = data.trace;
                            }
                        }
                    }
                    get trace() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set trace(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new QueryDenomHashRequest({});
                        if (data.trace != null) {
                            message.trace = data.trace;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.trace != null) {
                            data.trace = this.trace;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.trace.length)
                            writer.writeString(1, this.trace);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
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
                    serializeBinary() {
                        return this.serialize();
                    }
                    static deserializeBinary(bytes) {
                        return QueryDenomHashRequest.deserialize(bytes);
                    }
                }
                _QueryDenomHashRequest_one_of_decls = new WeakMap();
                v1.QueryDenomHashRequest = QueryDenomHashRequest;
                class QueryDenomHashResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryDenomHashResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDenomHashResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("hash" in data && data.hash != undefined) {
                                this.hash = data.hash;
                            }
                        }
                    }
                    get hash() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set hash(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new QueryDenomHashResponse({});
                        if (data.hash != null) {
                            message.hash = data.hash;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.hash != null) {
                            data.hash = this.hash;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.hash.length)
                            writer.writeString(1, this.hash);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
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
                    serializeBinary() {
                        return this.serialize();
                    }
                    static deserializeBinary(bytes) {
                        return QueryDenomHashResponse.deserialize(bytes);
                    }
                }
                _QueryDenomHashResponse_one_of_decls = new WeakMap();
                v1.QueryDenomHashResponse = QueryDenomHashResponse;
                class UnimplementedQueryService {
                }
                UnimplementedQueryService.definition = {
                    DenomTrace: {
                        path: "/ibc.applications.transfer.v1.Query/DenomTrace",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryDenomTraceRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryDenomTraceResponse.deserialize(new Uint8Array(bytes))
                    },
                    DenomTraces: {
                        path: "/ibc.applications.transfer.v1.Query/DenomTraces",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryDenomTracesRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryDenomTracesResponse.deserialize(new Uint8Array(bytes))
                    },
                    Params: {
                        path: "/ibc.applications.transfer.v1.Query/Params",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
                    },
                    DenomHash: {
                        path: "/ibc.applications.transfer.v1.Query/DenomHash",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryDenomHashRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryDenomHashResponse.deserialize(new Uint8Array(bytes))
                    }
                };
                v1.UnimplementedQueryService = UnimplementedQueryService;
                class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                    constructor(address, credentials, options) {
                        super(address, credentials, options);
                        this.DenomTrace = (message, metadata, options, callback) => {
                            return super.DenomTrace(message, metadata, options, callback);
                        };
                        this.DenomTraces = (message, metadata, options, callback) => {
                            return super.DenomTraces(message, metadata, options, callback);
                        };
                        this.Params = (message, metadata, options, callback) => {
                            return super.Params(message, metadata, options, callback);
                        };
                        this.DenomHash = (message, metadata, options, callback) => {
                            return super.DenomHash(message, metadata, options, callback);
                        };
                    }
                }
                v1.QueryClient = QueryClient;
            })(v1 = transfer.v1 || (transfer.v1 = {}));
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
})(ibc = exports.ibc || (exports.ibc = {}));
//# sourceMappingURL=query.js.map