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
const dependency_4 = __importStar(require("./../../../google/protobuf/any"));
const dependency_6 = __importStar(require("./authz"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var authz;
    (function (authz) {
        var v1beta1;
        (function (v1beta1) {
            var _MsgGrant_one_of_decls, _MsgExecResponse_one_of_decls, _MsgExec_one_of_decls, _MsgGrantResponse_one_of_decls, _MsgRevoke_one_of_decls, _MsgRevokeResponse_one_of_decls;
            class MsgGrant extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgGrant_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgGrant_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("granter" in data && data.granter != undefined) {
                            this.granter = data.granter;
                        }
                        if ("grantee" in data && data.grantee != undefined) {
                            this.grantee = data.grantee;
                        }
                        if ("grant" in data && data.grant != undefined) {
                            this.grant = data.grant;
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
                get grant() {
                    return pb_1.Message.getWrapperField(this, dependency_6.cosmos.authz.v1beta1.Grant, 3);
                }
                set grant(value) {
                    pb_1.Message.setWrapperField(this, 3, value);
                }
                get has_grant() {
                    return pb_1.Message.getField(this, 3) != null;
                }
                static fromObject(data) {
                    const message = new MsgGrant({});
                    if (data.granter != null) {
                        message.granter = data.granter;
                    }
                    if (data.grantee != null) {
                        message.grantee = data.grantee;
                    }
                    if (data.grant != null) {
                        message.grant = dependency_6.cosmos.authz.v1beta1.Grant.fromObject(data.grant);
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
                    if (this.grant != null) {
                        data.grant = this.grant.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.granter.length)
                        writer.writeString(1, this.granter);
                    if (this.grantee.length)
                        writer.writeString(2, this.grantee);
                    if (this.has_grant)
                        writer.writeMessage(3, this.grant, () => this.grant.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgGrant();
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
                                reader.readMessage(message.grant, () => message.grant = dependency_6.cosmos.authz.v1beta1.Grant.deserialize(reader));
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
                    return MsgGrant.deserialize(bytes);
                }
            }
            _MsgGrant_one_of_decls = new WeakMap();
            v1beta1.MsgGrant = MsgGrant;
            class MsgExecResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgExecResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _MsgExecResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("results" in data && data.results != undefined) {
                            this.results = data.results;
                        }
                    }
                }
                get results() {
                    return pb_1.Message.getFieldWithDefault(this, 1, []);
                }
                set results(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new MsgExecResponse({});
                    if (data.results != null) {
                        message.results = data.results;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.results != null) {
                        data.results = this.results;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.results.length)
                        writer.writeRepeatedBytes(1, this.results);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgExecResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                pb_1.Message.addToRepeatedField(message, 1, reader.readBytes());
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
                    return MsgExecResponse.deserialize(bytes);
                }
            }
            _MsgExecResponse_one_of_decls = new WeakMap();
            v1beta1.MsgExecResponse = MsgExecResponse;
            class MsgExec extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgExec_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _MsgExec_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("grantee" in data && data.grantee != undefined) {
                            this.grantee = data.grantee;
                        }
                        if ("msgs" in data && data.msgs != undefined) {
                            this.msgs = data.msgs;
                        }
                    }
                }
                get grantee() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set grantee(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get msgs() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.google.protobuf.Any, 2);
                }
                set msgs(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new MsgExec({});
                    if (data.grantee != null) {
                        message.grantee = data.grantee;
                    }
                    if (data.msgs != null) {
                        message.msgs = data.msgs.map(item => dependency_4.google.protobuf.Any.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.grantee != null) {
                        data.grantee = this.grantee;
                    }
                    if (this.msgs != null) {
                        data.msgs = this.msgs.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.grantee.length)
                        writer.writeString(1, this.grantee);
                    if (this.msgs.length)
                        writer.writeRepeatedMessage(2, this.msgs, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgExec();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.grantee = reader.readString();
                                break;
                            case 2:
                                reader.readMessage(message.msgs, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_4.google.protobuf.Any.deserialize(reader), dependency_4.google.protobuf.Any));
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
                    return MsgExec.deserialize(bytes);
                }
            }
            _MsgExec_one_of_decls = new WeakMap();
            v1beta1.MsgExec = MsgExec;
            class MsgGrantResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgGrantResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgGrantResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgGrantResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgGrantResponse();
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
                    return MsgGrantResponse.deserialize(bytes);
                }
            }
            _MsgGrantResponse_one_of_decls = new WeakMap();
            v1beta1.MsgGrantResponse = MsgGrantResponse;
            class MsgRevoke extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgRevoke_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgRevoke_one_of_decls, "f"));
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
                static fromObject(data) {
                    const message = new MsgRevoke({});
                    if (data.granter != null) {
                        message.granter = data.granter;
                    }
                    if (data.grantee != null) {
                        message.grantee = data.grantee;
                    }
                    if (data.msg_type_url != null) {
                        message.msg_type_url = data.msg_type_url;
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
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRevoke();
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
                            default: reader.skipField();
                        }
                    }
                    return message;
                }
                serializeBinary() {
                    return this.serialize();
                }
                static deserializeBinary(bytes) {
                    return MsgRevoke.deserialize(bytes);
                }
            }
            _MsgRevoke_one_of_decls = new WeakMap();
            v1beta1.MsgRevoke = MsgRevoke;
            class MsgRevokeResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgRevokeResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgRevokeResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgRevokeResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRevokeResponse();
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
                    return MsgRevokeResponse.deserialize(bytes);
                }
            }
            _MsgRevokeResponse_one_of_decls = new WeakMap();
            v1beta1.MsgRevokeResponse = MsgRevokeResponse;
            class UnimplementedMsgService {
            }
            UnimplementedMsgService.definition = {
                Grant: {
                    path: "/cosmos.authz.v1beta1.Msg/Grant",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgGrant.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgGrantResponse.deserialize(new Uint8Array(bytes))
                },
                Exec: {
                    path: "/cosmos.authz.v1beta1.Msg/Exec",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgExec.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgExecResponse.deserialize(new Uint8Array(bytes))
                },
                Revoke: {
                    path: "/cosmos.authz.v1beta1.Msg/Revoke",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgRevoke.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgRevokeResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1beta1.UnimplementedMsgService = UnimplementedMsgService;
            class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.Grant = (message, metadata, options, callback) => {
                        return super.Grant(message, metadata, options, callback);
                    };
                    this.Exec = (message, metadata, options, callback) => {
                        return super.Exec(message, metadata, options, callback);
                    };
                    this.Revoke = (message, metadata, options, callback) => {
                        return super.Revoke(message, metadata, options, callback);
                    };
                }
            }
            v1beta1.MsgClient = MsgClient;
        })(v1beta1 = authz.v1beta1 || (authz.v1beta1 = {}));
    })(authz = cosmos.authz || (cosmos.authz = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=tx.js.map