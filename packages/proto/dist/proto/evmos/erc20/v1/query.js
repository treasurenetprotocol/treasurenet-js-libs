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
exports.evmos = void 0;
const dependency_1 = __importStar(require("./../../../cosmos/base/query/v1beta1/pagination"));
const dependency_2 = __importStar(require("./genesis"));
const dependency_3 = __importStar(require("./erc20"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var evmos;
(function (evmos) {
    var erc20;
    (function (erc20) {
        var v1;
        (function (v1) {
            var _QueryTokenPairsRequest_one_of_decls, _QueryTokenPairsResponse_one_of_decls, _QueryTokenPairRequest_one_of_decls, _QueryTokenPairResponse_one_of_decls, _QueryParamsRequest_one_of_decls, _QueryParamsResponse_one_of_decls;
            class QueryTokenPairsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTokenPairsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryTokenPairsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 1);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_pagination() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryTokenPairsRequest({});
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTokenPairsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
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
                    return QueryTokenPairsRequest.deserialize(bytes);
                }
            }
            _QueryTokenPairsRequest_one_of_decls = new WeakMap();
            v1.QueryTokenPairsRequest = QueryTokenPairsRequest;
            class QueryTokenPairsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTokenPairsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryTokenPairsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("token_pairs" in data && data.token_pairs != undefined) {
                            this.token_pairs = data.token_pairs;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get token_pairs() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_3.evmos.erc20.v1.TokenPair, 1);
                }
                set token_pairs(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageResponse, 2);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get has_pagination() {
                    return pb_1.Message.getField(this, 2) != null;
                }
                static fromObject(data) {
                    const message = new QueryTokenPairsResponse({});
                    if (data.token_pairs != null) {
                        message.token_pairs = data.token_pairs.map(item => dependency_3.evmos.erc20.v1.TokenPair.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.token_pairs != null) {
                        data.token_pairs = this.token_pairs.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.token_pairs.length)
                        writer.writeRepeatedMessage(1, this.token_pairs, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTokenPairsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.token_pairs, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.evmos.erc20.v1.TokenPair.deserialize(reader), dependency_3.evmos.erc20.v1.TokenPair));
                                break;
                            case 2:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
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
                    return QueryTokenPairsResponse.deserialize(bytes);
                }
            }
            _QueryTokenPairsResponse_one_of_decls = new WeakMap();
            v1.QueryTokenPairsResponse = QueryTokenPairsResponse;
            class QueryTokenPairRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTokenPairRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryTokenPairRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("token" in data && data.token != undefined) {
                            this.token = data.token;
                        }
                    }
                }
                get token() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set token(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryTokenPairRequest({});
                    if (data.token != null) {
                        message.token = data.token;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.token != null) {
                        data.token = this.token;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.token.length)
                        writer.writeString(1, this.token);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTokenPairRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.token = reader.readString();
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
                    return QueryTokenPairRequest.deserialize(bytes);
                }
            }
            _QueryTokenPairRequest_one_of_decls = new WeakMap();
            v1.QueryTokenPairRequest = QueryTokenPairRequest;
            class QueryTokenPairResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTokenPairResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryTokenPairResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("token_pair" in data && data.token_pair != undefined) {
                            this.token_pair = data.token_pair;
                        }
                    }
                }
                get token_pair() {
                    return pb_1.Message.getWrapperField(this, dependency_3.evmos.erc20.v1.TokenPair, 1);
                }
                set token_pair(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_token_pair() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryTokenPairResponse({});
                    if (data.token_pair != null) {
                        message.token_pair = dependency_3.evmos.erc20.v1.TokenPair.fromObject(data.token_pair);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.token_pair != null) {
                        data.token_pair = this.token_pair.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_token_pair)
                        writer.writeMessage(1, this.token_pair, () => this.token_pair.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTokenPairResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.token_pair, () => message.token_pair = dependency_3.evmos.erc20.v1.TokenPair.deserialize(reader));
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
                    return QueryTokenPairResponse.deserialize(bytes);
                }
            }
            _QueryTokenPairResponse_one_of_decls = new WeakMap();
            v1.QueryTokenPairResponse = QueryTokenPairResponse;
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
                    return pb_1.Message.getWrapperField(this, dependency_2.evmos.erc20.v1.Params, 1);
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
                        message.params = dependency_2.evmos.erc20.v1.Params.fromObject(data.params);
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
                                reader.readMessage(message.params, () => message.params = dependency_2.evmos.erc20.v1.Params.deserialize(reader));
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
            class UnimplementedQueryService {
            }
            UnimplementedQueryService.definition = {
                TokenPairs: {
                    path: "/evmos.erc20.v1.Query/TokenPairs",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryTokenPairsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryTokenPairsResponse.deserialize(new Uint8Array(bytes))
                },
                TokenPair: {
                    path: "/evmos.erc20.v1.Query/TokenPair",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryTokenPairRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryTokenPairResponse.deserialize(new Uint8Array(bytes))
                },
                Params: {
                    path: "/evmos.erc20.v1.Query/Params",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1.UnimplementedQueryService = UnimplementedQueryService;
            class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.TokenPairs = (message, metadata, options, callback) => {
                        return super.TokenPairs(message, metadata, options, callback);
                    };
                    this.TokenPair = (message, metadata, options, callback) => {
                        return super.TokenPair(message, metadata, options, callback);
                    };
                    this.Params = (message, metadata, options, callback) => {
                        return super.Params(message, metadata, options, callback);
                    };
                }
            }
            v1.QueryClient = QueryClient;
        })(v1 = erc20.v1 || (erc20.v1 = {}));
    })(erc20 = evmos.erc20 || (evmos.erc20 = {}));
})(evmos = exports.evmos || (exports.evmos = {}));
//# sourceMappingURL=query.js.map