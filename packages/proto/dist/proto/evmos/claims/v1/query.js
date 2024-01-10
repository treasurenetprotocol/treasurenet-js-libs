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
const dependency_3 = __importStar(require("./../../../cosmos/base/query/v1beta1/pagination"));
const dependency_4 = __importStar(require("./../../../cosmos/base/v1beta1/coin"));
const dependency_5 = __importStar(require("./claims"));
const dependency_6 = __importStar(require("./genesis"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var evmos;
(function (evmos) {
    var claims;
    (function (claims) {
        var v1;
        (function (v1) {
            var _QueryTotalUnclaimedRequest_one_of_decls, _QueryTotalUnclaimedResponse_one_of_decls, _QueryParamsRequest_one_of_decls, _QueryParamsResponse_one_of_decls, _QueryClaimsRecordsRequest_one_of_decls, _QueryClaimsRecordsResponse_one_of_decls, _QueryClaimsRecordRequest_one_of_decls, _QueryClaimsRecordResponse_one_of_decls;
            class QueryTotalUnclaimedRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTotalUnclaimedRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryTotalUnclaimedRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new QueryTotalUnclaimedRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTotalUnclaimedRequest();
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
                    return QueryTotalUnclaimedRequest.deserialize(bytes);
                }
            }
            _QueryTotalUnclaimedRequest_one_of_decls = new WeakMap();
            v1.QueryTotalUnclaimedRequest = QueryTotalUnclaimedRequest;
            class QueryTotalUnclaimedResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTotalUnclaimedResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryTotalUnclaimedResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("coins" in data && data.coins != undefined) {
                            this.coins = data.coins;
                        }
                    }
                }
                get coins() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 1);
                }
                set coins(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryTotalUnclaimedResponse({});
                    if (data.coins != null) {
                        message.coins = data.coins.map(item => dependency_4.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.coins != null) {
                        data.coins = this.coins.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.coins.length)
                        writer.writeRepeatedMessage(1, this.coins, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTotalUnclaimedResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.coins, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_4.cosmos.base.v1beta1.Coin));
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
                    return QueryTotalUnclaimedResponse.deserialize(bytes);
                }
            }
            _QueryTotalUnclaimedResponse_one_of_decls = new WeakMap();
            v1.QueryTotalUnclaimedResponse = QueryTotalUnclaimedResponse;
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
                    return pb_1.Message.getWrapperField(this, dependency_6.evmos.claims.v1.Params, 1);
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
                        message.params = dependency_6.evmos.claims.v1.Params.fromObject(data.params);
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
                                reader.readMessage(message.params, () => message.params = dependency_6.evmos.claims.v1.Params.deserialize(reader));
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
            class QueryClaimsRecordsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryClaimsRecordsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryClaimsRecordsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.query.v1beta1.PageRequest, 1);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_pagination() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryClaimsRecordsRequest({});
                    if (data.pagination != null) {
                        message.pagination = dependency_3.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClaimsRecordsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_3.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
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
                    return QueryClaimsRecordsRequest.deserialize(bytes);
                }
            }
            _QueryClaimsRecordsRequest_one_of_decls = new WeakMap();
            v1.QueryClaimsRecordsRequest = QueryClaimsRecordsRequest;
            class QueryClaimsRecordsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryClaimsRecordsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryClaimsRecordsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("claims" in data && data.claims != undefined) {
                            this.claims = data.claims;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get claims() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_5.evmos.claims.v1.ClaimsRecordAddress, 1);
                }
                set claims(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.query.v1beta1.PageResponse, 2);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get has_pagination() {
                    return pb_1.Message.getField(this, 2) != null;
                }
                static fromObject(data) {
                    const message = new QueryClaimsRecordsResponse({});
                    if (data.claims != null) {
                        message.claims = data.claims.map(item => dependency_5.evmos.claims.v1.ClaimsRecordAddress.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_3.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.claims != null) {
                        data.claims = this.claims.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.claims.length)
                        writer.writeRepeatedMessage(1, this.claims, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClaimsRecordsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.claims, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.evmos.claims.v1.ClaimsRecordAddress.deserialize(reader), dependency_5.evmos.claims.v1.ClaimsRecordAddress));
                                break;
                            case 2:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_3.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
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
                    return QueryClaimsRecordsResponse.deserialize(bytes);
                }
            }
            _QueryClaimsRecordsResponse_one_of_decls = new WeakMap();
            v1.QueryClaimsRecordsResponse = QueryClaimsRecordsResponse;
            class QueryClaimsRecordRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryClaimsRecordRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryClaimsRecordRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("address" in data && data.address != undefined) {
                            this.address = data.address;
                        }
                    }
                }
                get address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryClaimsRecordRequest({});
                    if (data.address != null) {
                        message.address = data.address;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.address != null) {
                        data.address = this.address;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.address.length)
                        writer.writeString(1, this.address);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClaimsRecordRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.address = reader.readString();
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
                    return QueryClaimsRecordRequest.deserialize(bytes);
                }
            }
            _QueryClaimsRecordRequest_one_of_decls = new WeakMap();
            v1.QueryClaimsRecordRequest = QueryClaimsRecordRequest;
            class QueryClaimsRecordResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryClaimsRecordResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _QueryClaimsRecordResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("initial_claimable_amount" in data && data.initial_claimable_amount != undefined) {
                            this.initial_claimable_amount = data.initial_claimable_amount;
                        }
                        if ("claims" in data && data.claims != undefined) {
                            this.claims = data.claims;
                        }
                    }
                }
                get initial_claimable_amount() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set initial_claimable_amount(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get claims() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_5.evmos.claims.v1.Claim, 2);
                }
                set claims(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new QueryClaimsRecordResponse({});
                    if (data.initial_claimable_amount != null) {
                        message.initial_claimable_amount = data.initial_claimable_amount;
                    }
                    if (data.claims != null) {
                        message.claims = data.claims.map(item => dependency_5.evmos.claims.v1.Claim.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.initial_claimable_amount != null) {
                        data.initial_claimable_amount = this.initial_claimable_amount;
                    }
                    if (this.claims != null) {
                        data.claims = this.claims.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.initial_claimable_amount.length)
                        writer.writeString(1, this.initial_claimable_amount);
                    if (this.claims.length)
                        writer.writeRepeatedMessage(2, this.claims, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClaimsRecordResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.initial_claimable_amount = reader.readString();
                                break;
                            case 2:
                                reader.readMessage(message.claims, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_5.evmos.claims.v1.Claim.deserialize(reader), dependency_5.evmos.claims.v1.Claim));
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
                    return QueryClaimsRecordResponse.deserialize(bytes);
                }
            }
            _QueryClaimsRecordResponse_one_of_decls = new WeakMap();
            v1.QueryClaimsRecordResponse = QueryClaimsRecordResponse;
            class UnimplementedQueryService {
            }
            UnimplementedQueryService.definition = {
                TotalUnclaimed: {
                    path: "/evmos.claims.v1.Query/TotalUnclaimed",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryTotalUnclaimedRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryTotalUnclaimedResponse.deserialize(new Uint8Array(bytes))
                },
                Params: {
                    path: "/evmos.claims.v1.Query/Params",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
                },
                ClaimsRecords: {
                    path: "/evmos.claims.v1.Query/ClaimsRecords",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryClaimsRecordsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryClaimsRecordsResponse.deserialize(new Uint8Array(bytes))
                },
                ClaimsRecord: {
                    path: "/evmos.claims.v1.Query/ClaimsRecord",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryClaimsRecordRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryClaimsRecordResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1.UnimplementedQueryService = UnimplementedQueryService;
            class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.TotalUnclaimed = (message, metadata, options, callback) => {
                        return super.TotalUnclaimed(message, metadata, options, callback);
                    };
                    this.Params = (message, metadata, options, callback) => {
                        return super.Params(message, metadata, options, callback);
                    };
                    this.ClaimsRecords = (message, metadata, options, callback) => {
                        return super.ClaimsRecords(message, metadata, options, callback);
                    };
                    this.ClaimsRecord = (message, metadata, options, callback) => {
                        return super.ClaimsRecord(message, metadata, options, callback);
                    };
                }
            }
            v1.QueryClient = QueryClient;
        })(v1 = claims.v1 || (claims.v1 = {}));
    })(claims = evmos.claims || (evmos.claims = {}));
})(evmos = exports.evmos || (exports.evmos = {}));
//# sourceMappingURL=query.js.map