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
const dependency_2 = __importStar(require("./../../base/query/v1beta1/pagination"));
const dependency_3 = __importStar(require("./authz"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var authz;
    (function (authz) {
        var v1beta1;
        (function (v1beta1) {
            var _QueryGrantsRequest_one_of_decls, _QueryGrantsResponse_one_of_decls, _QueryGranterGrantsRequest_one_of_decls, _QueryGranterGrantsResponse_one_of_decls, _QueryGranteeGrantsRequest_one_of_decls, _QueryGranteeGrantsResponse_one_of_decls;
            class QueryGrantsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryGrantsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryGrantsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("granter" in data && data.granter != undefined) {
                            this.granter = data.granter;
                        }
                        if ("grantee" in data && data.grantee != undefined) {
                            this.grantee = data.grantee;
                        }
                        if ("msg_type_url" in data && data.msg_type_url != undefined) {
                            this.msg_type_url = data.msg_type_url;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
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
                get msg_type_url() {
                    return pb_1.Message.getFieldWithDefault(this, 3, "");
                }
                set msg_type_url(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageRequest, 4);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 4, value);
                }
                get has_pagination() {
                    return pb_1.Message.getField(this, 4) != null;
                }
                static fromObject(data) {
                    const message = new QueryGrantsRequest({});
                    if (data.granter != null) {
                        message.granter = data.granter;
                    }
                    if (data.grantee != null) {
                        message.grantee = data.grantee;
                    }
                    if (data.msg_type_url != null) {
                        message.msg_type_url = data.msg_type_url;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
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
                    if (this.msg_type_url != null) {
                        data.msg_type_url = this.msg_type_url;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.granter.length)
                        writer.writeString(1, this.granter);
                    if (this.grantee.length)
                        writer.writeString(2, this.grantee);
                    if (this.msg_type_url.length)
                        writer.writeString(3, this.msg_type_url);
                    if (this.has_pagination)
                        writer.writeMessage(4, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGrantsRequest();
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
                            case 3:
                                message.msg_type_url = reader.readString();
                                break;
                            case 4:
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
                    return QueryGrantsRequest.deserialize(bytes);
                }
            }
            _QueryGrantsRequest_one_of_decls = new WeakMap();
            v1beta1.QueryGrantsRequest = QueryGrantsRequest;
            class QueryGrantsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryGrantsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryGrantsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("grants" in data && data.grants != undefined) {
                            this.grants = data.grants;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get grants() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.authz.v1beta1.Grant, 1);
                }
                set grants(value) {
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
                    const message = new QueryGrantsResponse({});
                    if (data.grants != null) {
                        message.grants = data.grants.map(item => dependency_3.cosmos.authz.v1beta1.Grant.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.grants != null) {
                        data.grants = this.grants.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.grants.length)
                        writer.writeRepeatedMessage(1, this.grants, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGrantsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.grants, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.cosmos.authz.v1beta1.Grant.deserialize(reader), dependency_3.cosmos.authz.v1beta1.Grant));
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
                    return QueryGrantsResponse.deserialize(bytes);
                }
            }
            _QueryGrantsResponse_one_of_decls = new WeakMap();
            v1beta1.QueryGrantsResponse = QueryGrantsResponse;
            class QueryGranterGrantsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryGranterGrantsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryGranterGrantsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("granter" in data && data.granter != undefined) {
                            this.granter = data.granter;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get granter() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set granter(value) {
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
                    const message = new QueryGranterGrantsRequest({});
                    if (data.granter != null) {
                        message.granter = data.granter;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.granter != null) {
                        data.granter = this.granter;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.granter.length)
                        writer.writeString(1, this.granter);
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGranterGrantsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.granter = reader.readString();
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
                    return QueryGranterGrantsRequest.deserialize(bytes);
                }
            }
            _QueryGranterGrantsRequest_one_of_decls = new WeakMap();
            v1beta1.QueryGranterGrantsRequest = QueryGranterGrantsRequest;
            class QueryGranterGrantsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryGranterGrantsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryGranterGrantsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("grants" in data && data.grants != undefined) {
                            this.grants = data.grants;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get grants() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.authz.v1beta1.GrantAuthorization, 1);
                }
                set grants(value) {
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
                    const message = new QueryGranterGrantsResponse({});
                    if (data.grants != null) {
                        message.grants = data.grants.map(item => dependency_3.cosmos.authz.v1beta1.GrantAuthorization.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.grants != null) {
                        data.grants = this.grants.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.grants.length)
                        writer.writeRepeatedMessage(1, this.grants, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGranterGrantsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.grants, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.cosmos.authz.v1beta1.GrantAuthorization.deserialize(reader), dependency_3.cosmos.authz.v1beta1.GrantAuthorization));
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
                    return QueryGranterGrantsResponse.deserialize(bytes);
                }
            }
            _QueryGranterGrantsResponse_one_of_decls = new WeakMap();
            v1beta1.QueryGranterGrantsResponse = QueryGranterGrantsResponse;
            class QueryGranteeGrantsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryGranteeGrantsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryGranteeGrantsRequest_one_of_decls, "f"));
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
                    const message = new QueryGranteeGrantsRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGranteeGrantsRequest();
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
                    return QueryGranteeGrantsRequest.deserialize(bytes);
                }
            }
            _QueryGranteeGrantsRequest_one_of_decls = new WeakMap();
            v1beta1.QueryGranteeGrantsRequest = QueryGranteeGrantsRequest;
            class QueryGranteeGrantsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryGranteeGrantsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryGranteeGrantsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("grants" in data && data.grants != undefined) {
                            this.grants = data.grants;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get grants() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.authz.v1beta1.GrantAuthorization, 1);
                }
                set grants(value) {
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
                    const message = new QueryGranteeGrantsResponse({});
                    if (data.grants != null) {
                        message.grants = data.grants.map(item => dependency_3.cosmos.authz.v1beta1.GrantAuthorization.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.grants != null) {
                        data.grants = this.grants.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.grants.length)
                        writer.writeRepeatedMessage(1, this.grants, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGranteeGrantsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.grants, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.cosmos.authz.v1beta1.GrantAuthorization.deserialize(reader), dependency_3.cosmos.authz.v1beta1.GrantAuthorization));
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
                    return QueryGranteeGrantsResponse.deserialize(bytes);
                }
            }
            _QueryGranteeGrantsResponse_one_of_decls = new WeakMap();
            v1beta1.QueryGranteeGrantsResponse = QueryGranteeGrantsResponse;
            class UnimplementedQueryService {
            }
            UnimplementedQueryService.definition = {
                Grants: {
                    path: "/cosmos.authz.v1beta1.Query/Grants",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryGrantsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryGrantsResponse.deserialize(new Uint8Array(bytes))
                },
                GranterGrants: {
                    path: "/cosmos.authz.v1beta1.Query/GranterGrants",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryGranterGrantsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryGranterGrantsResponse.deserialize(new Uint8Array(bytes))
                },
                GranteeGrants: {
                    path: "/cosmos.authz.v1beta1.Query/GranteeGrants",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryGranteeGrantsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryGranteeGrantsResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1beta1.UnimplementedQueryService = UnimplementedQueryService;
            class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.Grants = (message, metadata, options, callback) => {
                        return super.Grants(message, metadata, options, callback);
                    };
                    this.GranterGrants = (message, metadata, options, callback) => {
                        return super.GranterGrants(message, metadata, options, callback);
                    };
                    this.GranteeGrants = (message, metadata, options, callback) => {
                        return super.GranteeGrants(message, metadata, options, callback);
                    };
                }
            }
            v1beta1.QueryClient = QueryClient;
        })(v1beta1 = authz.v1beta1 || (authz.v1beta1 = {}));
    })(authz = cosmos.authz || (cosmos.authz = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=query.js.map