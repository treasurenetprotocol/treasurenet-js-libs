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
const dependency_2 = __importStar(require("./../../../google/protobuf/any"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var feegrant;
    (function (feegrant) {
        var v1beta1;
        (function (v1beta1) {
            var _MsgGrantAllowance_one_of_decls, _MsgGrantAllowanceResponse_one_of_decls, _MsgRevokeAllowance_one_of_decls, _MsgRevokeAllowanceResponse_one_of_decls;
            class MsgGrantAllowance extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgGrantAllowance_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgGrantAllowance_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("granter" in data && data.granter != undefined) {
                            this.granter = data.granter;
                        }
                        if ("grantee" in data && data.grantee != undefined) {
                            this.grantee = data.grantee;
                        }
                        if ("allowance" in data && data.allowance != undefined) {
                            this.allowance = data.allowance;
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
                get allowance() {
                    return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 3);
                }
                set allowance(value) {
                    pb_1.Message.setWrapperField(this, 3, value);
                }
                get has_allowance() {
                    return pb_1.Message.getField(this, 3) != null;
                }
                static fromObject(data) {
                    const message = new MsgGrantAllowance({});
                    if (data.granter != null) {
                        message.granter = data.granter;
                    }
                    if (data.grantee != null) {
                        message.grantee = data.grantee;
                    }
                    if (data.allowance != null) {
                        message.allowance = dependency_2.google.protobuf.Any.fromObject(data.allowance);
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
                    if (this.allowance != null) {
                        data.allowance = this.allowance.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.granter.length)
                        writer.writeString(1, this.granter);
                    if (this.grantee.length)
                        writer.writeString(2, this.grantee);
                    if (this.has_allowance)
                        writer.writeMessage(3, this.allowance, () => this.allowance.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgGrantAllowance();
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
                                reader.readMessage(message.allowance, () => message.allowance = dependency_2.google.protobuf.Any.deserialize(reader));
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
                    return MsgGrantAllowance.deserialize(bytes);
                }
            }
            _MsgGrantAllowance_one_of_decls = new WeakMap();
            v1beta1.MsgGrantAllowance = MsgGrantAllowance;
            class MsgGrantAllowanceResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgGrantAllowanceResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgGrantAllowanceResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgGrantAllowanceResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgGrantAllowanceResponse();
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
                    return MsgGrantAllowanceResponse.deserialize(bytes);
                }
            }
            _MsgGrantAllowanceResponse_one_of_decls = new WeakMap();
            v1beta1.MsgGrantAllowanceResponse = MsgGrantAllowanceResponse;
            class MsgRevokeAllowance extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgRevokeAllowance_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgRevokeAllowance_one_of_decls, "f"));
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
                    const message = new MsgRevokeAllowance({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRevokeAllowance();
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
                    return MsgRevokeAllowance.deserialize(bytes);
                }
            }
            _MsgRevokeAllowance_one_of_decls = new WeakMap();
            v1beta1.MsgRevokeAllowance = MsgRevokeAllowance;
            class MsgRevokeAllowanceResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgRevokeAllowanceResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgRevokeAllowanceResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgRevokeAllowanceResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRevokeAllowanceResponse();
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
                    return MsgRevokeAllowanceResponse.deserialize(bytes);
                }
            }
            _MsgRevokeAllowanceResponse_one_of_decls = new WeakMap();
            v1beta1.MsgRevokeAllowanceResponse = MsgRevokeAllowanceResponse;
            class UnimplementedMsgService {
            }
            UnimplementedMsgService.definition = {
                GrantAllowance: {
                    path: "/cosmos.feegrant.v1beta1.Msg/GrantAllowance",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgGrantAllowance.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgGrantAllowanceResponse.deserialize(new Uint8Array(bytes))
                },
                RevokeAllowance: {
                    path: "/cosmos.feegrant.v1beta1.Msg/RevokeAllowance",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgRevokeAllowance.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgRevokeAllowanceResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1beta1.UnimplementedMsgService = UnimplementedMsgService;
            class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.GrantAllowance = (message, metadata, options, callback) => {
                        return super.GrantAllowance(message, metadata, options, callback);
                    };
                    this.RevokeAllowance = (message, metadata, options, callback) => {
                        return super.RevokeAllowance(message, metadata, options, callback);
                    };
                }
            }
            v1beta1.MsgClient = MsgClient;
        })(v1beta1 = feegrant.v1beta1 || (feegrant.v1beta1 = {}));
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=tx.js.map