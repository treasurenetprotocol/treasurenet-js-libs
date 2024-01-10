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
const dependency_2 = __importStar(require("./../../../../google/protobuf/any"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var ibc;
(function (ibc) {
    var core;
    (function (core) {
        var client;
        (function (client) {
            var v1;
            (function (v1) {
                var _MsgCreateClient_one_of_decls, _MsgCreateClientResponse_one_of_decls, _MsgUpdateClient_one_of_decls, _MsgUpdateClientResponse_one_of_decls, _MsgUpgradeClient_one_of_decls, _MsgUpgradeClientResponse_one_of_decls, _MsgSubmitMisbehaviour_one_of_decls, _MsgSubmitMisbehaviourResponse_one_of_decls;
                class MsgCreateClient extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgCreateClient_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgCreateClient_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("client_state" in data && data.client_state != undefined) {
                                this.client_state = data.client_state;
                            }
                            if ("consensus_state" in data && data.consensus_state != undefined) {
                                this.consensus_state = data.consensus_state;
                            }
                            if ("signer" in data && data.signer != undefined) {
                                this.signer = data.signer;
                            }
                        }
                    }
                    get client_state() {
                        return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 1);
                    }
                    set client_state(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_client_state() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    get consensus_state() {
                        return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2);
                    }
                    set consensus_state(value) {
                        pb_1.Message.setWrapperField(this, 2, value);
                    }
                    get has_consensus_state() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    get signer() {
                        return pb_1.Message.getFieldWithDefault(this, 3, "");
                    }
                    set signer(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    static fromObject(data) {
                        const message = new MsgCreateClient({});
                        if (data.client_state != null) {
                            message.client_state = dependency_2.google.protobuf.Any.fromObject(data.client_state);
                        }
                        if (data.consensus_state != null) {
                            message.consensus_state = dependency_2.google.protobuf.Any.fromObject(data.consensus_state);
                        }
                        if (data.signer != null) {
                            message.signer = data.signer;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.client_state != null) {
                            data.client_state = this.client_state.toObject();
                        }
                        if (this.consensus_state != null) {
                            data.consensus_state = this.consensus_state.toObject();
                        }
                        if (this.signer != null) {
                            data.signer = this.signer;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_client_state)
                            writer.writeMessage(1, this.client_state, () => this.client_state.serialize(writer));
                        if (this.has_consensus_state)
                            writer.writeMessage(2, this.consensus_state, () => this.consensus_state.serialize(writer));
                        if (this.signer.length)
                            writer.writeString(3, this.signer);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreateClient();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.client_state, () => message.client_state = dependency_2.google.protobuf.Any.deserialize(reader));
                                    break;
                                case 2:
                                    reader.readMessage(message.consensus_state, () => message.consensus_state = dependency_2.google.protobuf.Any.deserialize(reader));
                                    break;
                                case 3:
                                    message.signer = reader.readString();
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
                        return MsgCreateClient.deserialize(bytes);
                    }
                }
                _MsgCreateClient_one_of_decls = new WeakMap();
                v1.MsgCreateClient = MsgCreateClient;
                class MsgCreateClientResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgCreateClientResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgCreateClientResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new MsgCreateClientResponse({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreateClientResponse();
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
                        return MsgCreateClientResponse.deserialize(bytes);
                    }
                }
                _MsgCreateClientResponse_one_of_decls = new WeakMap();
                v1.MsgCreateClientResponse = MsgCreateClientResponse;
                class MsgUpdateClient extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgUpdateClient_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgUpdateClient_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("client_id" in data && data.client_id != undefined) {
                                this.client_id = data.client_id;
                            }
                            if ("header" in data && data.header != undefined) {
                                this.header = data.header;
                            }
                            if ("signer" in data && data.signer != undefined) {
                                this.signer = data.signer;
                            }
                        }
                    }
                    get client_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set client_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get header() {
                        return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2);
                    }
                    set header(value) {
                        pb_1.Message.setWrapperField(this, 2, value);
                    }
                    get has_header() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    get signer() {
                        return pb_1.Message.getFieldWithDefault(this, 3, "");
                    }
                    set signer(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    static fromObject(data) {
                        const message = new MsgUpdateClient({});
                        if (data.client_id != null) {
                            message.client_id = data.client_id;
                        }
                        if (data.header != null) {
                            message.header = dependency_2.google.protobuf.Any.fromObject(data.header);
                        }
                        if (data.signer != null) {
                            message.signer = data.signer;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.client_id != null) {
                            data.client_id = this.client_id;
                        }
                        if (this.header != null) {
                            data.header = this.header.toObject();
                        }
                        if (this.signer != null) {
                            data.signer = this.signer;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.client_id.length)
                            writer.writeString(1, this.client_id);
                        if (this.has_header)
                            writer.writeMessage(2, this.header, () => this.header.serialize(writer));
                        if (this.signer.length)
                            writer.writeString(3, this.signer);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUpdateClient();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.client_id = reader.readString();
                                    break;
                                case 2:
                                    reader.readMessage(message.header, () => message.header = dependency_2.google.protobuf.Any.deserialize(reader));
                                    break;
                                case 3:
                                    message.signer = reader.readString();
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
                        return MsgUpdateClient.deserialize(bytes);
                    }
                }
                _MsgUpdateClient_one_of_decls = new WeakMap();
                v1.MsgUpdateClient = MsgUpdateClient;
                class MsgUpdateClientResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgUpdateClientResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgUpdateClientResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new MsgUpdateClientResponse({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUpdateClientResponse();
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
                        return MsgUpdateClientResponse.deserialize(bytes);
                    }
                }
                _MsgUpdateClientResponse_one_of_decls = new WeakMap();
                v1.MsgUpdateClientResponse = MsgUpdateClientResponse;
                class MsgUpgradeClient extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgUpgradeClient_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgUpgradeClient_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("client_id" in data && data.client_id != undefined) {
                                this.client_id = data.client_id;
                            }
                            if ("client_state" in data && data.client_state != undefined) {
                                this.client_state = data.client_state;
                            }
                            if ("consensus_state" in data && data.consensus_state != undefined) {
                                this.consensus_state = data.consensus_state;
                            }
                            if ("proof_upgrade_client" in data && data.proof_upgrade_client != undefined) {
                                this.proof_upgrade_client = data.proof_upgrade_client;
                            }
                            if ("proof_upgrade_consensus_state" in data && data.proof_upgrade_consensus_state != undefined) {
                                this.proof_upgrade_consensus_state = data.proof_upgrade_consensus_state;
                            }
                            if ("signer" in data && data.signer != undefined) {
                                this.signer = data.signer;
                            }
                        }
                    }
                    get client_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set client_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get client_state() {
                        return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2);
                    }
                    set client_state(value) {
                        pb_1.Message.setWrapperField(this, 2, value);
                    }
                    get has_client_state() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    get consensus_state() {
                        return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 3);
                    }
                    set consensus_state(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_consensus_state() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    get proof_upgrade_client() {
                        return pb_1.Message.getFieldWithDefault(this, 4, new Uint8Array(0));
                    }
                    set proof_upgrade_client(value) {
                        pb_1.Message.setField(this, 4, value);
                    }
                    get proof_upgrade_consensus_state() {
                        return pb_1.Message.getFieldWithDefault(this, 5, new Uint8Array(0));
                    }
                    set proof_upgrade_consensus_state(value) {
                        pb_1.Message.setField(this, 5, value);
                    }
                    get signer() {
                        return pb_1.Message.getFieldWithDefault(this, 6, "");
                    }
                    set signer(value) {
                        pb_1.Message.setField(this, 6, value);
                    }
                    static fromObject(data) {
                        const message = new MsgUpgradeClient({});
                        if (data.client_id != null) {
                            message.client_id = data.client_id;
                        }
                        if (data.client_state != null) {
                            message.client_state = dependency_2.google.protobuf.Any.fromObject(data.client_state);
                        }
                        if (data.consensus_state != null) {
                            message.consensus_state = dependency_2.google.protobuf.Any.fromObject(data.consensus_state);
                        }
                        if (data.proof_upgrade_client != null) {
                            message.proof_upgrade_client = data.proof_upgrade_client;
                        }
                        if (data.proof_upgrade_consensus_state != null) {
                            message.proof_upgrade_consensus_state = data.proof_upgrade_consensus_state;
                        }
                        if (data.signer != null) {
                            message.signer = data.signer;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.client_id != null) {
                            data.client_id = this.client_id;
                        }
                        if (this.client_state != null) {
                            data.client_state = this.client_state.toObject();
                        }
                        if (this.consensus_state != null) {
                            data.consensus_state = this.consensus_state.toObject();
                        }
                        if (this.proof_upgrade_client != null) {
                            data.proof_upgrade_client = this.proof_upgrade_client;
                        }
                        if (this.proof_upgrade_consensus_state != null) {
                            data.proof_upgrade_consensus_state = this.proof_upgrade_consensus_state;
                        }
                        if (this.signer != null) {
                            data.signer = this.signer;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.client_id.length)
                            writer.writeString(1, this.client_id);
                        if (this.has_client_state)
                            writer.writeMessage(2, this.client_state, () => this.client_state.serialize(writer));
                        if (this.has_consensus_state)
                            writer.writeMessage(3, this.consensus_state, () => this.consensus_state.serialize(writer));
                        if (this.proof_upgrade_client.length)
                            writer.writeBytes(4, this.proof_upgrade_client);
                        if (this.proof_upgrade_consensus_state.length)
                            writer.writeBytes(5, this.proof_upgrade_consensus_state);
                        if (this.signer.length)
                            writer.writeString(6, this.signer);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUpgradeClient();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.client_id = reader.readString();
                                    break;
                                case 2:
                                    reader.readMessage(message.client_state, () => message.client_state = dependency_2.google.protobuf.Any.deserialize(reader));
                                    break;
                                case 3:
                                    reader.readMessage(message.consensus_state, () => message.consensus_state = dependency_2.google.protobuf.Any.deserialize(reader));
                                    break;
                                case 4:
                                    message.proof_upgrade_client = reader.readBytes();
                                    break;
                                case 5:
                                    message.proof_upgrade_consensus_state = reader.readBytes();
                                    break;
                                case 6:
                                    message.signer = reader.readString();
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
                        return MsgUpgradeClient.deserialize(bytes);
                    }
                }
                _MsgUpgradeClient_one_of_decls = new WeakMap();
                v1.MsgUpgradeClient = MsgUpgradeClient;
                class MsgUpgradeClientResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgUpgradeClientResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgUpgradeClientResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new MsgUpgradeClientResponse({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUpgradeClientResponse();
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
                        return MsgUpgradeClientResponse.deserialize(bytes);
                    }
                }
                _MsgUpgradeClientResponse_one_of_decls = new WeakMap();
                v1.MsgUpgradeClientResponse = MsgUpgradeClientResponse;
                class MsgSubmitMisbehaviour extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgSubmitMisbehaviour_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSubmitMisbehaviour_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("client_id" in data && data.client_id != undefined) {
                                this.client_id = data.client_id;
                            }
                            if ("misbehaviour" in data && data.misbehaviour != undefined) {
                                this.misbehaviour = data.misbehaviour;
                            }
                            if ("signer" in data && data.signer != undefined) {
                                this.signer = data.signer;
                            }
                        }
                    }
                    get client_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set client_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get misbehaviour() {
                        return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2);
                    }
                    set misbehaviour(value) {
                        pb_1.Message.setWrapperField(this, 2, value);
                    }
                    get has_misbehaviour() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    get signer() {
                        return pb_1.Message.getFieldWithDefault(this, 3, "");
                    }
                    set signer(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    static fromObject(data) {
                        const message = new MsgSubmitMisbehaviour({});
                        if (data.client_id != null) {
                            message.client_id = data.client_id;
                        }
                        if (data.misbehaviour != null) {
                            message.misbehaviour = dependency_2.google.protobuf.Any.fromObject(data.misbehaviour);
                        }
                        if (data.signer != null) {
                            message.signer = data.signer;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.client_id != null) {
                            data.client_id = this.client_id;
                        }
                        if (this.misbehaviour != null) {
                            data.misbehaviour = this.misbehaviour.toObject();
                        }
                        if (this.signer != null) {
                            data.signer = this.signer;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.client_id.length)
                            writer.writeString(1, this.client_id);
                        if (this.has_misbehaviour)
                            writer.writeMessage(2, this.misbehaviour, () => this.misbehaviour.serialize(writer));
                        if (this.signer.length)
                            writer.writeString(3, this.signer);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSubmitMisbehaviour();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.client_id = reader.readString();
                                    break;
                                case 2:
                                    reader.readMessage(message.misbehaviour, () => message.misbehaviour = dependency_2.google.protobuf.Any.deserialize(reader));
                                    break;
                                case 3:
                                    message.signer = reader.readString();
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
                        return MsgSubmitMisbehaviour.deserialize(bytes);
                    }
                }
                _MsgSubmitMisbehaviour_one_of_decls = new WeakMap();
                v1.MsgSubmitMisbehaviour = MsgSubmitMisbehaviour;
                class MsgSubmitMisbehaviourResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgSubmitMisbehaviourResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSubmitMisbehaviourResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new MsgSubmitMisbehaviourResponse({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSubmitMisbehaviourResponse();
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
                        return MsgSubmitMisbehaviourResponse.deserialize(bytes);
                    }
                }
                _MsgSubmitMisbehaviourResponse_one_of_decls = new WeakMap();
                v1.MsgSubmitMisbehaviourResponse = MsgSubmitMisbehaviourResponse;
                class UnimplementedMsgService {
                }
                UnimplementedMsgService.definition = {
                    CreateClient: {
                        path: "/ibc.core.client.v1.Msg/CreateClient",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => MsgCreateClient.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => MsgCreateClientResponse.deserialize(new Uint8Array(bytes))
                    },
                    UpdateClient: {
                        path: "/ibc.core.client.v1.Msg/UpdateClient",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => MsgUpdateClient.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => MsgUpdateClientResponse.deserialize(new Uint8Array(bytes))
                    },
                    UpgradeClient: {
                        path: "/ibc.core.client.v1.Msg/UpgradeClient",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => MsgUpgradeClient.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => MsgUpgradeClientResponse.deserialize(new Uint8Array(bytes))
                    },
                    SubmitMisbehaviour: {
                        path: "/ibc.core.client.v1.Msg/SubmitMisbehaviour",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => MsgSubmitMisbehaviour.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => MsgSubmitMisbehaviourResponse.deserialize(new Uint8Array(bytes))
                    }
                };
                v1.UnimplementedMsgService = UnimplementedMsgService;
                class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
                    constructor(address, credentials, options) {
                        super(address, credentials, options);
                        this.CreateClient = (message, metadata, options, callback) => {
                            return super.CreateClient(message, metadata, options, callback);
                        };
                        this.UpdateClient = (message, metadata, options, callback) => {
                            return super.UpdateClient(message, metadata, options, callback);
                        };
                        this.UpgradeClient = (message, metadata, options, callback) => {
                            return super.UpgradeClient(message, metadata, options, callback);
                        };
                        this.SubmitMisbehaviour = (message, metadata, options, callback) => {
                            return super.SubmitMisbehaviour(message, metadata, options, callback);
                        };
                    }
                }
                v1.MsgClient = MsgClient;
            })(v1 = client.v1 || (client.v1 = {}));
        })(client = core.client || (core.client = {}));
    })(core = ibc.core || (ibc.core = {}));
})(ibc = exports.ibc || (exports.ibc = {}));
//# sourceMappingURL=tx.js.map