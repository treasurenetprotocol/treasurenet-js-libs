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
const dependency_2 = __importStar(require("./../../../google/protobuf/timestamp"));
const dependency_4 = __importStar(require("./../../../google/protobuf/any"));
const pb_1 = __importStar(require("google-protobuf"));
var cosmos;
(function (cosmos) {
    var authz;
    (function (authz) {
        var v1beta1;
        (function (v1beta1) {
            var _GenericAuthorization_one_of_decls, _Grant_one_of_decls, _GrantAuthorization_one_of_decls;
            class GenericAuthorization extends pb_1.Message {
                constructor(data) {
                    super();
                    _GenericAuthorization_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GenericAuthorization_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("msg" in data && data.msg != undefined) {
                            this.msg = data.msg;
                        }
                    }
                }
                get msg() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set msg(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new GenericAuthorization({});
                    if (data.msg != null) {
                        message.msg = data.msg;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.msg != null) {
                        data.msg = this.msg;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.msg.length)
                        writer.writeString(1, this.msg);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenericAuthorization();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.msg = reader.readString();
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
                    return GenericAuthorization.deserialize(bytes);
                }
            }
            _GenericAuthorization_one_of_decls = new WeakMap();
            v1beta1.GenericAuthorization = GenericAuthorization;
            class Grant extends pb_1.Message {
                constructor(data) {
                    super();
                    _Grant_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Grant_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("authorization" in data && data.authorization != undefined) {
                            this.authorization = data.authorization;
                        }
                        if ("expiration" in data && data.expiration != undefined) {
                            this.expiration = data.expiration;
                        }
                    }
                }
                get authorization() {
                    return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Any, 1);
                }
                set authorization(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_authorization() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                get expiration() {
                    return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 2);
                }
                set expiration(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get has_expiration() {
                    return pb_1.Message.getField(this, 2) != null;
                }
                static fromObject(data) {
                    const message = new Grant({});
                    if (data.authorization != null) {
                        message.authorization = dependency_4.google.protobuf.Any.fromObject(data.authorization);
                    }
                    if (data.expiration != null) {
                        message.expiration = dependency_2.google.protobuf.Timestamp.fromObject(data.expiration);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.authorization != null) {
                        data.authorization = this.authorization.toObject();
                    }
                    if (this.expiration != null) {
                        data.expiration = this.expiration.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_authorization)
                        writer.writeMessage(1, this.authorization, () => this.authorization.serialize(writer));
                    if (this.has_expiration)
                        writer.writeMessage(2, this.expiration, () => this.expiration.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Grant();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.authorization, () => message.authorization = dependency_4.google.protobuf.Any.deserialize(reader));
                                break;
                            case 2:
                                reader.readMessage(message.expiration, () => message.expiration = dependency_2.google.protobuf.Timestamp.deserialize(reader));
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
                    return Grant.deserialize(bytes);
                }
            }
            _Grant_one_of_decls = new WeakMap();
            v1beta1.Grant = Grant;
            class GrantAuthorization extends pb_1.Message {
                constructor(data) {
                    super();
                    _GrantAuthorization_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GrantAuthorization_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("granter" in data && data.granter != undefined) {
                            this.granter = data.granter;
                        }
                        if ("grantee" in data && data.grantee != undefined) {
                            this.grantee = data.grantee;
                        }
                        if ("authorization" in data && data.authorization != undefined) {
                            this.authorization = data.authorization;
                        }
                        if ("expiration" in data && data.expiration != undefined) {
                            this.expiration = data.expiration;
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
                get authorization() {
                    return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Any, 3);
                }
                set authorization(value) {
                    pb_1.Message.setWrapperField(this, 3, value);
                }
                get has_authorization() {
                    return pb_1.Message.getField(this, 3) != null;
                }
                get expiration() {
                    return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 4);
                }
                set expiration(value) {
                    pb_1.Message.setWrapperField(this, 4, value);
                }
                get has_expiration() {
                    return pb_1.Message.getField(this, 4) != null;
                }
                static fromObject(data) {
                    const message = new GrantAuthorization({});
                    if (data.granter != null) {
                        message.granter = data.granter;
                    }
                    if (data.grantee != null) {
                        message.grantee = data.grantee;
                    }
                    if (data.authorization != null) {
                        message.authorization = dependency_4.google.protobuf.Any.fromObject(data.authorization);
                    }
                    if (data.expiration != null) {
                        message.expiration = dependency_2.google.protobuf.Timestamp.fromObject(data.expiration);
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
                    if (this.authorization != null) {
                        data.authorization = this.authorization.toObject();
                    }
                    if (this.expiration != null) {
                        data.expiration = this.expiration.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.granter.length)
                        writer.writeString(1, this.granter);
                    if (this.grantee.length)
                        writer.writeString(2, this.grantee);
                    if (this.has_authorization)
                        writer.writeMessage(3, this.authorization, () => this.authorization.serialize(writer));
                    if (this.has_expiration)
                        writer.writeMessage(4, this.expiration, () => this.expiration.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GrantAuthorization();
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
                                reader.readMessage(message.authorization, () => message.authorization = dependency_4.google.protobuf.Any.deserialize(reader));
                                break;
                            case 4:
                                reader.readMessage(message.expiration, () => message.expiration = dependency_2.google.protobuf.Timestamp.deserialize(reader));
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
                    return GrantAuthorization.deserialize(bytes);
                }
            }
            _GrantAuthorization_one_of_decls = new WeakMap();
            v1beta1.GrantAuthorization = GrantAuthorization;
        })(v1beta1 = authz.v1beta1 || (authz.v1beta1 = {}));
    })(authz = cosmos.authz || (cosmos.authz = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=authz.js.map