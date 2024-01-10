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
exports.cosmos = void 0;
const dependency_1 = __importStar(require("./feegrant"));
const dependency_2 = __importStar(require("./../../base/query/v1beta1/pagination"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var feegrant;
    (function (feegrant) {
        var v1beta1;
        (function (v1beta1) {
            var _QueryAllowanceRequest_one_of_decls, _QueryAllowanceResponse_one_of_decls, _QueryAllowancesRequest_one_of_decls, _QueryAllowancesResponse_one_of_decls;
            class QueryAllowanceRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAllowanceRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryAllowanceRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("granter" in data && data.granter != undefined) {
                            this.granter = data.granter;
                        }
                        if ("grantee" in data && data.grantee != undefined) {
                            this.grantee = data.grantee;
                        }
                    }
                }
                get granter() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set granter(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get grantee() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set grantee(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new QueryAllowanceRequest({});
                    if (data.granter != null) {
                        message.granter = data.granter;
                    }
                    if (data.grantee != null) {
                        message.grantee = data.grantee;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.granter != null) {
                        data.granter = this.granter;
                    }
                    if (this.grantee != null) {
                        data.grantee = this.grantee;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.granter.length)
                        writer.writeString(1, this.granter);
                    if (this.grantee.length)
                        writer.writeString(2, this.grantee);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllowanceRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.granter = reader.readString();
                                break;
                            case 2:
                                message.grantee = reader.readString();
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
                    return QueryAllowanceRequest.deserialize(bytes);
                }
            }
            _QueryAllowanceRequest_one_of_decls = new WeakMap();
            v1beta1.QueryAllowanceRequest = QueryAllowanceRequest;
            class QueryAllowanceResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAllowanceResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryAllowanceResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("allowance" in data && data.allowance != undefined) {
                            this.allowance = data.allowance;
                        }
                    }
                }
                get allowance() {
                    return pb_1.Message.getWrapperField(this, dependency_1.cosmos.feegrant.v1beta1.Grant, 1);
                }
                set allowance(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_allowance() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryAllowanceResponse({});
                    if (data.allowance != null) {
                        message.allowance = dependency_1.cosmos.feegrant.v1beta1.Grant.fromObject(data.allowance);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.allowance != null) {
                        data.allowance = this.allowance.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_allowance)
                        writer.writeMessage(1, this.allowance, () => this.allowance.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllowanceResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.allowance, () => message.allowance = dependency_1.cosmos.feegrant.v1beta1.Grant.deserialize(reader));
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
                    return QueryAllowanceResponse.deserialize(bytes);
                }
            }
            _QueryAllowanceResponse_one_of_decls = new WeakMap();
            v1beta1.QueryAllowanceResponse = QueryAllowanceResponse;
            class QueryAllowancesRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAllowancesRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryAllowancesRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("grantee" in data && data.grantee != undefined) {
                            this.grantee = data.grantee;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get grantee() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set grantee(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageRequest, 2);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get has_pagination() {
                    return pb_1.Message.getField(this, 2) != null;
                }
                static fromObject(data) {
                    const message = new QueryAllowancesRequest({});
                    if (data.grantee != null) {
                        message.grantee = data.grantee;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.grantee != null) {
                        data.grantee = this.grantee;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.grantee.length)
                        writer.writeString(1, this.grantee);
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllowancesRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.grantee = reader.readString();
                                break;
                            case 2:
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
                    return QueryAllowancesRequest.deserialize(bytes);
                }
            }
            _QueryAllowancesRequest_one_of_decls = new WeakMap();
            v1beta1.QueryAllowancesRequest = QueryAllowancesRequest;
            class QueryAllowancesResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAllowancesResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryAllowancesResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("allowances" in data && data.allowances != undefined) {
                            this.allowances = data.allowances;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get allowances() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.feegrant.v1beta1.Grant, 1);
                }
                set allowances(value) {
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
                    const message = new QueryAllowancesResponse({});
                    if (data.allowances != null) {
                        message.allowances = data.allowances.map(item => dependency_1.cosmos.feegrant.v1beta1.Grant.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.allowances != null) {
                        data.allowances = this.allowances.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.allowances.length)
                        writer.writeRepeatedMessage(1, this.allowances, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllowancesResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.allowances, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.cosmos.feegrant.v1beta1.Grant.deserialize(reader), dependency_1.cosmos.feegrant.v1beta1.Grant));
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
                    return QueryAllowancesResponse.deserialize(bytes);
                }
            }
            _QueryAllowancesResponse_one_of_decls = new WeakMap();
            v1beta1.QueryAllowancesResponse = QueryAllowancesResponse;
            class UnimplementedQueryService {
            }
            UnimplementedQueryService.definition = {
                Allowance: {
                    path: "/cosmos.feegrant.v1beta1.Query/Allowance",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryAllowanceRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryAllowanceResponse.deserialize(new Uint8Array(bytes))
                },
                Allowances: {
                    path: "/cosmos.feegrant.v1beta1.Query/Allowances",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryAllowancesRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryAllowancesResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1beta1.UnimplementedQueryService = UnimplementedQueryService;
            class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.Allowance = (message, metadata, options, callback) => {
                        return super.Allowance(message, metadata, options, callback);
                    };
                    this.Allowances = (message, metadata, options, callback) => {
                        return super.Allowances(message, metadata, options, callback);
                    };
                }
            }
            v1beta1.QueryClient = QueryClient;
        })(v1beta1 = feegrant.v1beta1 || (feegrant.v1beta1 = {}));
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=query.js.map