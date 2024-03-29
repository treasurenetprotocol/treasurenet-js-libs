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
const dependency_2 = __importStar(require("./../../client/v1/client"));
const dependency_3 = __importStar(require("./channel"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var ibc;
(function (ibc) {
    var core;
    (function (core) {
        var channel;
        (function (channel) {
            var v1;
            (function (v1) {
                var _MsgChannelOpenInit_one_of_decls, _MsgChannelOpenInitResponse_one_of_decls, _MsgChannelOpenTry_one_of_decls, _MsgChannelOpenTryResponse_one_of_decls, _MsgChannelOpenAck_one_of_decls, _MsgChannelOpenAckResponse_one_of_decls, _MsgChannelOpenConfirm_one_of_decls, _MsgChannelOpenConfirmResponse_one_of_decls, _MsgChannelCloseInit_one_of_decls, _MsgChannelCloseInitResponse_one_of_decls, _MsgChannelCloseConfirm_one_of_decls, _MsgChannelCloseConfirmResponse_one_of_decls, _MsgRecvPacket_one_of_decls, _MsgRecvPacketResponse_one_of_decls, _MsgTimeout_one_of_decls, _MsgTimeoutResponse_one_of_decls, _MsgTimeoutOnClose_one_of_decls, _MsgTimeoutOnCloseResponse_one_of_decls, _MsgAcknowledgement_one_of_decls, _MsgAcknowledgementResponse_one_of_decls;
                class MsgChannelOpenInit extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgChannelOpenInit_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgChannelOpenInit_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel" in data && data.channel != undefined) {
                                this.channel = data.channel;
                            }
                            if ("signer" in data && data.signer != undefined) {
                                this.signer = data.signer;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel() {
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.Channel, 2);
                    }
                    set channel(value) {
                        pb_1.Message.setWrapperField(this, 2, value);
                    }
                    get has_channel() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    get signer() {
                        return pb_1.Message.getFieldWithDefault(this, 3, "");
                    }
                    set signer(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    static fromObject(data) {
                        const message = new MsgChannelOpenInit({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel != null) {
                            message.channel = dependency_3.ibc.core.channel.v1.Channel.fromObject(data.channel);
                        }
                        if (data.signer != null) {
                            message.signer = data.signer;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel != null) {
                            data.channel = this.channel.toObject();
                        }
                        if (this.signer != null) {
                            data.signer = this.signer;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.has_channel)
                            writer.writeMessage(2, this.channel, () => this.channel.serialize(writer));
                        if (this.signer.length)
                            writer.writeString(3, this.signer);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgChannelOpenInit();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    reader.readMessage(message.channel, () => message.channel = dependency_3.ibc.core.channel.v1.Channel.deserialize(reader));
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
                        return MsgChannelOpenInit.deserialize(bytes);
                    }
                }
                _MsgChannelOpenInit_one_of_decls = new WeakMap();
                v1.MsgChannelOpenInit = MsgChannelOpenInit;
                class MsgChannelOpenInitResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgChannelOpenInitResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgChannelOpenInitResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                        }
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new MsgChannelOpenInitResponse({});
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.channel_id.length)
                            writer.writeString(1, this.channel_id);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgChannelOpenInitResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.channel_id = reader.readString();
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
                        return MsgChannelOpenInitResponse.deserialize(bytes);
                    }
                }
                _MsgChannelOpenInitResponse_one_of_decls = new WeakMap();
                v1.MsgChannelOpenInitResponse = MsgChannelOpenInitResponse;
                class MsgChannelOpenTry extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgChannelOpenTry_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgChannelOpenTry_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("previous_channel_id" in data && data.previous_channel_id != undefined) {
                                this.previous_channel_id = data.previous_channel_id;
                            }
                            if ("channel" in data && data.channel != undefined) {
                                this.channel = data.channel;
                            }
                            if ("counterparty_version" in data && data.counterparty_version != undefined) {
                                this.counterparty_version = data.counterparty_version;
                            }
                            if ("proof_init" in data && data.proof_init != undefined) {
                                this.proof_init = data.proof_init;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                            if ("signer" in data && data.signer != undefined) {
                                this.signer = data.signer;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get previous_channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set previous_channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get channel() {
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.Channel, 3);
                    }
                    set channel(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_channel() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    get counterparty_version() {
                        return pb_1.Message.getFieldWithDefault(this, 4, "");
                    }
                    set counterparty_version(value) {
                        pb_1.Message.setField(this, 4, value);
                    }
                    get proof_init() {
                        return pb_1.Message.getFieldWithDefault(this, 5, new Uint8Array(0));
                    }
                    set proof_init(value) {
                        pb_1.Message.setField(this, 5, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 6);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 6, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 6) != null;
                    }
                    get signer() {
                        return pb_1.Message.getFieldWithDefault(this, 7, "");
                    }
                    set signer(value) {
                        pb_1.Message.setField(this, 7, value);
                    }
                    static fromObject(data) {
                        const message = new MsgChannelOpenTry({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.previous_channel_id != null) {
                            message.previous_channel_id = data.previous_channel_id;
                        }
                        if (data.channel != null) {
                            message.channel = dependency_3.ibc.core.channel.v1.Channel.fromObject(data.channel);
                        }
                        if (data.counterparty_version != null) {
                            message.counterparty_version = data.counterparty_version;
                        }
                        if (data.proof_init != null) {
                            message.proof_init = data.proof_init;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        if (data.signer != null) {
                            message.signer = data.signer;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.previous_channel_id != null) {
                            data.previous_channel_id = this.previous_channel_id;
                        }
                        if (this.channel != null) {
                            data.channel = this.channel.toObject();
                        }
                        if (this.counterparty_version != null) {
                            data.counterparty_version = this.counterparty_version;
                        }
                        if (this.proof_init != null) {
                            data.proof_init = this.proof_init;
                        }
                        if (this.proof_height != null) {
                            data.proof_height = this.proof_height.toObject();
                        }
                        if (this.signer != null) {
                            data.signer = this.signer;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.previous_channel_id.length)
                            writer.writeString(2, this.previous_channel_id);
                        if (this.has_channel)
                            writer.writeMessage(3, this.channel, () => this.channel.serialize(writer));
                        if (this.counterparty_version.length)
                            writer.writeString(4, this.counterparty_version);
                        if (this.proof_init.length)
                            writer.writeBytes(5, this.proof_init);
                        if (this.has_proof_height)
                            writer.writeMessage(6, this.proof_height, () => this.proof_height.serialize(writer));
                        if (this.signer.length)
                            writer.writeString(7, this.signer);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgChannelOpenTry();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.previous_channel_id = reader.readString();
                                    break;
                                case 3:
                                    reader.readMessage(message.channel, () => message.channel = dependency_3.ibc.core.channel.v1.Channel.deserialize(reader));
                                    break;
                                case 4:
                                    message.counterparty_version = reader.readString();
                                    break;
                                case 5:
                                    message.proof_init = reader.readBytes();
                                    break;
                                case 6:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader));
                                    break;
                                case 7:
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
                        return MsgChannelOpenTry.deserialize(bytes);
                    }
                }
                _MsgChannelOpenTry_one_of_decls = new WeakMap();
                v1.MsgChannelOpenTry = MsgChannelOpenTry;
                class MsgChannelOpenTryResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgChannelOpenTryResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgChannelOpenTryResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new MsgChannelOpenTryResponse({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgChannelOpenTryResponse();
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
                        return MsgChannelOpenTryResponse.deserialize(bytes);
                    }
                }
                _MsgChannelOpenTryResponse_one_of_decls = new WeakMap();
                v1.MsgChannelOpenTryResponse = MsgChannelOpenTryResponse;
                class MsgChannelOpenAck extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgChannelOpenAck_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgChannelOpenAck_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                            if ("counterparty_channel_id" in data && data.counterparty_channel_id != undefined) {
                                this.counterparty_channel_id = data.counterparty_channel_id;
                            }
                            if ("counterparty_version" in data && data.counterparty_version != undefined) {
                                this.counterparty_version = data.counterparty_version;
                            }
                            if ("proof_try" in data && data.proof_try != undefined) {
                                this.proof_try = data.proof_try;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                            if ("signer" in data && data.signer != undefined) {
                                this.signer = data.signer;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get counterparty_channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 3, "");
                    }
                    set counterparty_channel_id(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    get counterparty_version() {
                        return pb_1.Message.getFieldWithDefault(this, 4, "");
                    }
                    set counterparty_version(value) {
                        pb_1.Message.setField(this, 4, value);
                    }
                    get proof_try() {
                        return pb_1.Message.getFieldWithDefault(this, 5, new Uint8Array(0));
                    }
                    set proof_try(value) {
                        pb_1.Message.setField(this, 5, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 6);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 6, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 6) != null;
                    }
                    get signer() {
                        return pb_1.Message.getFieldWithDefault(this, 7, "");
                    }
                    set signer(value) {
                        pb_1.Message.setField(this, 7, value);
                    }
                    static fromObject(data) {
                        const message = new MsgChannelOpenAck({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        if (data.counterparty_channel_id != null) {
                            message.counterparty_channel_id = data.counterparty_channel_id;
                        }
                        if (data.counterparty_version != null) {
                            message.counterparty_version = data.counterparty_version;
                        }
                        if (data.proof_try != null) {
                            message.proof_try = data.proof_try;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        if (data.signer != null) {
                            message.signer = data.signer;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        if (this.counterparty_channel_id != null) {
                            data.counterparty_channel_id = this.counterparty_channel_id;
                        }
                        if (this.counterparty_version != null) {
                            data.counterparty_version = this.counterparty_version;
                        }
                        if (this.proof_try != null) {
                            data.proof_try = this.proof_try;
                        }
                        if (this.proof_height != null) {
                            data.proof_height = this.proof_height.toObject();
                        }
                        if (this.signer != null) {
                            data.signer = this.signer;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.channel_id.length)
                            writer.writeString(2, this.channel_id);
                        if (this.counterparty_channel_id.length)
                            writer.writeString(3, this.counterparty_channel_id);
                        if (this.counterparty_version.length)
                            writer.writeString(4, this.counterparty_version);
                        if (this.proof_try.length)
                            writer.writeBytes(5, this.proof_try);
                        if (this.has_proof_height)
                            writer.writeMessage(6, this.proof_height, () => this.proof_height.serialize(writer));
                        if (this.signer.length)
                            writer.writeString(7, this.signer);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgChannelOpenAck();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.channel_id = reader.readString();
                                    break;
                                case 3:
                                    message.counterparty_channel_id = reader.readString();
                                    break;
                                case 4:
                                    message.counterparty_version = reader.readString();
                                    break;
                                case 5:
                                    message.proof_try = reader.readBytes();
                                    break;
                                case 6:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader));
                                    break;
                                case 7:
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
                        return MsgChannelOpenAck.deserialize(bytes);
                    }
                }
                _MsgChannelOpenAck_one_of_decls = new WeakMap();
                v1.MsgChannelOpenAck = MsgChannelOpenAck;
                class MsgChannelOpenAckResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgChannelOpenAckResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgChannelOpenAckResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new MsgChannelOpenAckResponse({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgChannelOpenAckResponse();
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
                        return MsgChannelOpenAckResponse.deserialize(bytes);
                    }
                }
                _MsgChannelOpenAckResponse_one_of_decls = new WeakMap();
                v1.MsgChannelOpenAckResponse = MsgChannelOpenAckResponse;
                class MsgChannelOpenConfirm extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgChannelOpenConfirm_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgChannelOpenConfirm_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                            if ("proof_ack" in data && data.proof_ack != undefined) {
                                this.proof_ack = data.proof_ack;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                            if ("signer" in data && data.signer != undefined) {
                                this.signer = data.signer;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof_ack() {
                        return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
                    }
                    set proof_ack(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 4);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 4, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 4) != null;
                    }
                    get signer() {
                        return pb_1.Message.getFieldWithDefault(this, 5, "");
                    }
                    set signer(value) {
                        pb_1.Message.setField(this, 5, value);
                    }
                    static fromObject(data) {
                        const message = new MsgChannelOpenConfirm({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        if (data.proof_ack != null) {
                            message.proof_ack = data.proof_ack;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        if (data.signer != null) {
                            message.signer = data.signer;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        if (this.proof_ack != null) {
                            data.proof_ack = this.proof_ack;
                        }
                        if (this.proof_height != null) {
                            data.proof_height = this.proof_height.toObject();
                        }
                        if (this.signer != null) {
                            data.signer = this.signer;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.channel_id.length)
                            writer.writeString(2, this.channel_id);
                        if (this.proof_ack.length)
                            writer.writeBytes(3, this.proof_ack);
                        if (this.has_proof_height)
                            writer.writeMessage(4, this.proof_height, () => this.proof_height.serialize(writer));
                        if (this.signer.length)
                            writer.writeString(5, this.signer);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgChannelOpenConfirm();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.channel_id = reader.readString();
                                    break;
                                case 3:
                                    message.proof_ack = reader.readBytes();
                                    break;
                                case 4:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader));
                                    break;
                                case 5:
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
                        return MsgChannelOpenConfirm.deserialize(bytes);
                    }
                }
                _MsgChannelOpenConfirm_one_of_decls = new WeakMap();
                v1.MsgChannelOpenConfirm = MsgChannelOpenConfirm;
                class MsgChannelOpenConfirmResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgChannelOpenConfirmResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgChannelOpenConfirmResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new MsgChannelOpenConfirmResponse({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgChannelOpenConfirmResponse();
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
                        return MsgChannelOpenConfirmResponse.deserialize(bytes);
                    }
                }
                _MsgChannelOpenConfirmResponse_one_of_decls = new WeakMap();
                v1.MsgChannelOpenConfirmResponse = MsgChannelOpenConfirmResponse;
                class MsgChannelCloseInit extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgChannelCloseInit_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgChannelCloseInit_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                            if ("signer" in data && data.signer != undefined) {
                                this.signer = data.signer;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get signer() {
                        return pb_1.Message.getFieldWithDefault(this, 3, "");
                    }
                    set signer(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    static fromObject(data) {
                        const message = new MsgChannelCloseInit({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        if (data.signer != null) {
                            message.signer = data.signer;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        if (this.signer != null) {
                            data.signer = this.signer;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.channel_id.length)
                            writer.writeString(2, this.channel_id);
                        if (this.signer.length)
                            writer.writeString(3, this.signer);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgChannelCloseInit();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.channel_id = reader.readString();
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
                        return MsgChannelCloseInit.deserialize(bytes);
                    }
                }
                _MsgChannelCloseInit_one_of_decls = new WeakMap();
                v1.MsgChannelCloseInit = MsgChannelCloseInit;
                class MsgChannelCloseInitResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgChannelCloseInitResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgChannelCloseInitResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new MsgChannelCloseInitResponse({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgChannelCloseInitResponse();
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
                        return MsgChannelCloseInitResponse.deserialize(bytes);
                    }
                }
                _MsgChannelCloseInitResponse_one_of_decls = new WeakMap();
                v1.MsgChannelCloseInitResponse = MsgChannelCloseInitResponse;
                class MsgChannelCloseConfirm extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgChannelCloseConfirm_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgChannelCloseConfirm_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                            if ("proof_init" in data && data.proof_init != undefined) {
                                this.proof_init = data.proof_init;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                            if ("signer" in data && data.signer != undefined) {
                                this.signer = data.signer;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof_init() {
                        return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
                    }
                    set proof_init(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 4);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 4, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 4) != null;
                    }
                    get signer() {
                        return pb_1.Message.getFieldWithDefault(this, 5, "");
                    }
                    set signer(value) {
                        pb_1.Message.setField(this, 5, value);
                    }
                    static fromObject(data) {
                        const message = new MsgChannelCloseConfirm({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        if (data.proof_init != null) {
                            message.proof_init = data.proof_init;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        if (data.signer != null) {
                            message.signer = data.signer;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        if (this.proof_init != null) {
                            data.proof_init = this.proof_init;
                        }
                        if (this.proof_height != null) {
                            data.proof_height = this.proof_height.toObject();
                        }
                        if (this.signer != null) {
                            data.signer = this.signer;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.channel_id.length)
                            writer.writeString(2, this.channel_id);
                        if (this.proof_init.length)
                            writer.writeBytes(3, this.proof_init);
                        if (this.has_proof_height)
                            writer.writeMessage(4, this.proof_height, () => this.proof_height.serialize(writer));
                        if (this.signer.length)
                            writer.writeString(5, this.signer);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgChannelCloseConfirm();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.channel_id = reader.readString();
                                    break;
                                case 3:
                                    message.proof_init = reader.readBytes();
                                    break;
                                case 4:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader));
                                    break;
                                case 5:
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
                        return MsgChannelCloseConfirm.deserialize(bytes);
                    }
                }
                _MsgChannelCloseConfirm_one_of_decls = new WeakMap();
                v1.MsgChannelCloseConfirm = MsgChannelCloseConfirm;
                class MsgChannelCloseConfirmResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgChannelCloseConfirmResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgChannelCloseConfirmResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new MsgChannelCloseConfirmResponse({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgChannelCloseConfirmResponse();
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
                        return MsgChannelCloseConfirmResponse.deserialize(bytes);
                    }
                }
                _MsgChannelCloseConfirmResponse_one_of_decls = new WeakMap();
                v1.MsgChannelCloseConfirmResponse = MsgChannelCloseConfirmResponse;
                class MsgRecvPacket extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgRecvPacket_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgRecvPacket_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("packet" in data && data.packet != undefined) {
                                this.packet = data.packet;
                            }
                            if ("proof_commitment" in data && data.proof_commitment != undefined) {
                                this.proof_commitment = data.proof_commitment;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                            if ("signer" in data && data.signer != undefined) {
                                this.signer = data.signer;
                            }
                        }
                    }
                    get packet() {
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.Packet, 1);
                    }
                    set packet(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_packet() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    get proof_commitment() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set proof_commitment(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 3);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    get signer() {
                        return pb_1.Message.getFieldWithDefault(this, 4, "");
                    }
                    set signer(value) {
                        pb_1.Message.setField(this, 4, value);
                    }
                    static fromObject(data) {
                        const message = new MsgRecvPacket({});
                        if (data.packet != null) {
                            message.packet = dependency_3.ibc.core.channel.v1.Packet.fromObject(data.packet);
                        }
                        if (data.proof_commitment != null) {
                            message.proof_commitment = data.proof_commitment;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        if (data.signer != null) {
                            message.signer = data.signer;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.packet != null) {
                            data.packet = this.packet.toObject();
                        }
                        if (this.proof_commitment != null) {
                            data.proof_commitment = this.proof_commitment;
                        }
                        if (this.proof_height != null) {
                            data.proof_height = this.proof_height.toObject();
                        }
                        if (this.signer != null) {
                            data.signer = this.signer;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_packet)
                            writer.writeMessage(1, this.packet, () => this.packet.serialize(writer));
                        if (this.proof_commitment.length)
                            writer.writeBytes(2, this.proof_commitment);
                        if (this.has_proof_height)
                            writer.writeMessage(3, this.proof_height, () => this.proof_height.serialize(writer));
                        if (this.signer.length)
                            writer.writeString(4, this.signer);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRecvPacket();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.packet, () => message.packet = dependency_3.ibc.core.channel.v1.Packet.deserialize(reader));
                                    break;
                                case 2:
                                    message.proof_commitment = reader.readBytes();
                                    break;
                                case 3:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader));
                                    break;
                                case 4:
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
                        return MsgRecvPacket.deserialize(bytes);
                    }
                }
                _MsgRecvPacket_one_of_decls = new WeakMap();
                v1.MsgRecvPacket = MsgRecvPacket;
                class MsgRecvPacketResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgRecvPacketResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgRecvPacketResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new MsgRecvPacketResponse({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRecvPacketResponse();
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
                        return MsgRecvPacketResponse.deserialize(bytes);
                    }
                }
                _MsgRecvPacketResponse_one_of_decls = new WeakMap();
                v1.MsgRecvPacketResponse = MsgRecvPacketResponse;
                class MsgTimeout extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgTimeout_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgTimeout_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("packet" in data && data.packet != undefined) {
                                this.packet = data.packet;
                            }
                            if ("proof_unreceived" in data && data.proof_unreceived != undefined) {
                                this.proof_unreceived = data.proof_unreceived;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                            if ("next_sequence_recv" in data && data.next_sequence_recv != undefined) {
                                this.next_sequence_recv = data.next_sequence_recv;
                            }
                            if ("signer" in data && data.signer != undefined) {
                                this.signer = data.signer;
                            }
                        }
                    }
                    get packet() {
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.Packet, 1);
                    }
                    set packet(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_packet() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    get proof_unreceived() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set proof_unreceived(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 3);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    get next_sequence_recv() {
                        return pb_1.Message.getFieldWithDefault(this, 4, 0);
                    }
                    set next_sequence_recv(value) {
                        pb_1.Message.setField(this, 4, value);
                    }
                    get signer() {
                        return pb_1.Message.getFieldWithDefault(this, 5, "");
                    }
                    set signer(value) {
                        pb_1.Message.setField(this, 5, value);
                    }
                    static fromObject(data) {
                        const message = new MsgTimeout({});
                        if (data.packet != null) {
                            message.packet = dependency_3.ibc.core.channel.v1.Packet.fromObject(data.packet);
                        }
                        if (data.proof_unreceived != null) {
                            message.proof_unreceived = data.proof_unreceived;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        if (data.next_sequence_recv != null) {
                            message.next_sequence_recv = data.next_sequence_recv;
                        }
                        if (data.signer != null) {
                            message.signer = data.signer;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.packet != null) {
                            data.packet = this.packet.toObject();
                        }
                        if (this.proof_unreceived != null) {
                            data.proof_unreceived = this.proof_unreceived;
                        }
                        if (this.proof_height != null) {
                            data.proof_height = this.proof_height.toObject();
                        }
                        if (this.next_sequence_recv != null) {
                            data.next_sequence_recv = this.next_sequence_recv;
                        }
                        if (this.signer != null) {
                            data.signer = this.signer;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_packet)
                            writer.writeMessage(1, this.packet, () => this.packet.serialize(writer));
                        if (this.proof_unreceived.length)
                            writer.writeBytes(2, this.proof_unreceived);
                        if (this.has_proof_height)
                            writer.writeMessage(3, this.proof_height, () => this.proof_height.serialize(writer));
                        if (this.next_sequence_recv != 0)
                            writer.writeUint64(4, this.next_sequence_recv);
                        if (this.signer.length)
                            writer.writeString(5, this.signer);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgTimeout();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.packet, () => message.packet = dependency_3.ibc.core.channel.v1.Packet.deserialize(reader));
                                    break;
                                case 2:
                                    message.proof_unreceived = reader.readBytes();
                                    break;
                                case 3:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader));
                                    break;
                                case 4:
                                    message.next_sequence_recv = reader.readUint64();
                                    break;
                                case 5:
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
                        return MsgTimeout.deserialize(bytes);
                    }
                }
                _MsgTimeout_one_of_decls = new WeakMap();
                v1.MsgTimeout = MsgTimeout;
                class MsgTimeoutResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgTimeoutResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgTimeoutResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new MsgTimeoutResponse({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgTimeoutResponse();
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
                        return MsgTimeoutResponse.deserialize(bytes);
                    }
                }
                _MsgTimeoutResponse_one_of_decls = new WeakMap();
                v1.MsgTimeoutResponse = MsgTimeoutResponse;
                class MsgTimeoutOnClose extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgTimeoutOnClose_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgTimeoutOnClose_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("packet" in data && data.packet != undefined) {
                                this.packet = data.packet;
                            }
                            if ("proof_unreceived" in data && data.proof_unreceived != undefined) {
                                this.proof_unreceived = data.proof_unreceived;
                            }
                            if ("proof_close" in data && data.proof_close != undefined) {
                                this.proof_close = data.proof_close;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                            if ("next_sequence_recv" in data && data.next_sequence_recv != undefined) {
                                this.next_sequence_recv = data.next_sequence_recv;
                            }
                            if ("signer" in data && data.signer != undefined) {
                                this.signer = data.signer;
                            }
                        }
                    }
                    get packet() {
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.Packet, 1);
                    }
                    set packet(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_packet() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    get proof_unreceived() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set proof_unreceived(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof_close() {
                        return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
                    }
                    set proof_close(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 4);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 4, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 4) != null;
                    }
                    get next_sequence_recv() {
                        return pb_1.Message.getFieldWithDefault(this, 5, 0);
                    }
                    set next_sequence_recv(value) {
                        pb_1.Message.setField(this, 5, value);
                    }
                    get signer() {
                        return pb_1.Message.getFieldWithDefault(this, 6, "");
                    }
                    set signer(value) {
                        pb_1.Message.setField(this, 6, value);
                    }
                    static fromObject(data) {
                        const message = new MsgTimeoutOnClose({});
                        if (data.packet != null) {
                            message.packet = dependency_3.ibc.core.channel.v1.Packet.fromObject(data.packet);
                        }
                        if (data.proof_unreceived != null) {
                            message.proof_unreceived = data.proof_unreceived;
                        }
                        if (data.proof_close != null) {
                            message.proof_close = data.proof_close;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        if (data.next_sequence_recv != null) {
                            message.next_sequence_recv = data.next_sequence_recv;
                        }
                        if (data.signer != null) {
                            message.signer = data.signer;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.packet != null) {
                            data.packet = this.packet.toObject();
                        }
                        if (this.proof_unreceived != null) {
                            data.proof_unreceived = this.proof_unreceived;
                        }
                        if (this.proof_close != null) {
                            data.proof_close = this.proof_close;
                        }
                        if (this.proof_height != null) {
                            data.proof_height = this.proof_height.toObject();
                        }
                        if (this.next_sequence_recv != null) {
                            data.next_sequence_recv = this.next_sequence_recv;
                        }
                        if (this.signer != null) {
                            data.signer = this.signer;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_packet)
                            writer.writeMessage(1, this.packet, () => this.packet.serialize(writer));
                        if (this.proof_unreceived.length)
                            writer.writeBytes(2, this.proof_unreceived);
                        if (this.proof_close.length)
                            writer.writeBytes(3, this.proof_close);
                        if (this.has_proof_height)
                            writer.writeMessage(4, this.proof_height, () => this.proof_height.serialize(writer));
                        if (this.next_sequence_recv != 0)
                            writer.writeUint64(5, this.next_sequence_recv);
                        if (this.signer.length)
                            writer.writeString(6, this.signer);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgTimeoutOnClose();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.packet, () => message.packet = dependency_3.ibc.core.channel.v1.Packet.deserialize(reader));
                                    break;
                                case 2:
                                    message.proof_unreceived = reader.readBytes();
                                    break;
                                case 3:
                                    message.proof_close = reader.readBytes();
                                    break;
                                case 4:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader));
                                    break;
                                case 5:
                                    message.next_sequence_recv = reader.readUint64();
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
                        return MsgTimeoutOnClose.deserialize(bytes);
                    }
                }
                _MsgTimeoutOnClose_one_of_decls = new WeakMap();
                v1.MsgTimeoutOnClose = MsgTimeoutOnClose;
                class MsgTimeoutOnCloseResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgTimeoutOnCloseResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgTimeoutOnCloseResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new MsgTimeoutOnCloseResponse({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgTimeoutOnCloseResponse();
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
                        return MsgTimeoutOnCloseResponse.deserialize(bytes);
                    }
                }
                _MsgTimeoutOnCloseResponse_one_of_decls = new WeakMap();
                v1.MsgTimeoutOnCloseResponse = MsgTimeoutOnCloseResponse;
                class MsgAcknowledgement extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgAcknowledgement_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgAcknowledgement_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("packet" in data && data.packet != undefined) {
                                this.packet = data.packet;
                            }
                            if ("acknowledgement" in data && data.acknowledgement != undefined) {
                                this.acknowledgement = data.acknowledgement;
                            }
                            if ("proof_acked" in data && data.proof_acked != undefined) {
                                this.proof_acked = data.proof_acked;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                            if ("signer" in data && data.signer != undefined) {
                                this.signer = data.signer;
                            }
                        }
                    }
                    get packet() {
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.Packet, 1);
                    }
                    set packet(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_packet() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    get acknowledgement() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set acknowledgement(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof_acked() {
                        return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
                    }
                    set proof_acked(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 4);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 4, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 4) != null;
                    }
                    get signer() {
                        return pb_1.Message.getFieldWithDefault(this, 5, "");
                    }
                    set signer(value) {
                        pb_1.Message.setField(this, 5, value);
                    }
                    static fromObject(data) {
                        const message = new MsgAcknowledgement({});
                        if (data.packet != null) {
                            message.packet = dependency_3.ibc.core.channel.v1.Packet.fromObject(data.packet);
                        }
                        if (data.acknowledgement != null) {
                            message.acknowledgement = data.acknowledgement;
                        }
                        if (data.proof_acked != null) {
                            message.proof_acked = data.proof_acked;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        if (data.signer != null) {
                            message.signer = data.signer;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.packet != null) {
                            data.packet = this.packet.toObject();
                        }
                        if (this.acknowledgement != null) {
                            data.acknowledgement = this.acknowledgement;
                        }
                        if (this.proof_acked != null) {
                            data.proof_acked = this.proof_acked;
                        }
                        if (this.proof_height != null) {
                            data.proof_height = this.proof_height.toObject();
                        }
                        if (this.signer != null) {
                            data.signer = this.signer;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_packet)
                            writer.writeMessage(1, this.packet, () => this.packet.serialize(writer));
                        if (this.acknowledgement.length)
                            writer.writeBytes(2, this.acknowledgement);
                        if (this.proof_acked.length)
                            writer.writeBytes(3, this.proof_acked);
                        if (this.has_proof_height)
                            writer.writeMessage(4, this.proof_height, () => this.proof_height.serialize(writer));
                        if (this.signer.length)
                            writer.writeString(5, this.signer);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgAcknowledgement();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.packet, () => message.packet = dependency_3.ibc.core.channel.v1.Packet.deserialize(reader));
                                    break;
                                case 2:
                                    message.acknowledgement = reader.readBytes();
                                    break;
                                case 3:
                                    message.proof_acked = reader.readBytes();
                                    break;
                                case 4:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader));
                                    break;
                                case 5:
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
                        return MsgAcknowledgement.deserialize(bytes);
                    }
                }
                _MsgAcknowledgement_one_of_decls = new WeakMap();
                v1.MsgAcknowledgement = MsgAcknowledgement;
                class MsgAcknowledgementResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgAcknowledgementResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgAcknowledgementResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new MsgAcknowledgementResponse({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgAcknowledgementResponse();
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
                        return MsgAcknowledgementResponse.deserialize(bytes);
                    }
                }
                _MsgAcknowledgementResponse_one_of_decls = new WeakMap();
                v1.MsgAcknowledgementResponse = MsgAcknowledgementResponse;
                class UnimplementedMsgService {
                }
                UnimplementedMsgService.definition = {
                    ChannelOpenInit: {
                        path: "/ibc.core.channel.v1.Msg/ChannelOpenInit",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => MsgChannelOpenInit.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => MsgChannelOpenInitResponse.deserialize(new Uint8Array(bytes))
                    },
                    ChannelOpenTry: {
                        path: "/ibc.core.channel.v1.Msg/ChannelOpenTry",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => MsgChannelOpenTry.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => MsgChannelOpenTryResponse.deserialize(new Uint8Array(bytes))
                    },
                    ChannelOpenAck: {
                        path: "/ibc.core.channel.v1.Msg/ChannelOpenAck",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => MsgChannelOpenAck.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => MsgChannelOpenAckResponse.deserialize(new Uint8Array(bytes))
                    },
                    ChannelOpenConfirm: {
                        path: "/ibc.core.channel.v1.Msg/ChannelOpenConfirm",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => MsgChannelOpenConfirm.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => MsgChannelOpenConfirmResponse.deserialize(new Uint8Array(bytes))
                    },
                    ChannelCloseInit: {
                        path: "/ibc.core.channel.v1.Msg/ChannelCloseInit",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => MsgChannelCloseInit.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => MsgChannelCloseInitResponse.deserialize(new Uint8Array(bytes))
                    },
                    ChannelCloseConfirm: {
                        path: "/ibc.core.channel.v1.Msg/ChannelCloseConfirm",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => MsgChannelCloseConfirm.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => MsgChannelCloseConfirmResponse.deserialize(new Uint8Array(bytes))
                    },
                    RecvPacket: {
                        path: "/ibc.core.channel.v1.Msg/RecvPacket",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => MsgRecvPacket.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => MsgRecvPacketResponse.deserialize(new Uint8Array(bytes))
                    },
                    Timeout: {
                        path: "/ibc.core.channel.v1.Msg/Timeout",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => MsgTimeout.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => MsgTimeoutResponse.deserialize(new Uint8Array(bytes))
                    },
                    TimeoutOnClose: {
                        path: "/ibc.core.channel.v1.Msg/TimeoutOnClose",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => MsgTimeoutOnClose.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => MsgTimeoutOnCloseResponse.deserialize(new Uint8Array(bytes))
                    },
                    Acknowledgement: {
                        path: "/ibc.core.channel.v1.Msg/Acknowledgement",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => MsgAcknowledgement.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => MsgAcknowledgementResponse.deserialize(new Uint8Array(bytes))
                    }
                };
                v1.UnimplementedMsgService = UnimplementedMsgService;
                class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
                    constructor(address, credentials, options) {
                        super(address, credentials, options);
                        this.ChannelOpenInit = (message, metadata, options, callback) => {
                            return super.ChannelOpenInit(message, metadata, options, callback);
                        };
                        this.ChannelOpenTry = (message, metadata, options, callback) => {
                            return super.ChannelOpenTry(message, metadata, options, callback);
                        };
                        this.ChannelOpenAck = (message, metadata, options, callback) => {
                            return super.ChannelOpenAck(message, metadata, options, callback);
                        };
                        this.ChannelOpenConfirm = (message, metadata, options, callback) => {
                            return super.ChannelOpenConfirm(message, metadata, options, callback);
                        };
                        this.ChannelCloseInit = (message, metadata, options, callback) => {
                            return super.ChannelCloseInit(message, metadata, options, callback);
                        };
                        this.ChannelCloseConfirm = (message, metadata, options, callback) => {
                            return super.ChannelCloseConfirm(message, metadata, options, callback);
                        };
                        this.RecvPacket = (message, metadata, options, callback) => {
                            return super.RecvPacket(message, metadata, options, callback);
                        };
                        this.Timeout = (message, metadata, options, callback) => {
                            return super.Timeout(message, metadata, options, callback);
                        };
                        this.TimeoutOnClose = (message, metadata, options, callback) => {
                            return super.TimeoutOnClose(message, metadata, options, callback);
                        };
                        this.Acknowledgement = (message, metadata, options, callback) => {
                            return super.Acknowledgement(message, metadata, options, callback);
                        };
                    }
                }
                v1.MsgClient = MsgClient;
            })(v1 = channel.v1 || (channel.v1 = {}));
        })(channel = core.channel || (core.channel = {}));
    })(core = ibc.core || (ibc.core = {}));
})(ibc = exports.ibc || (exports.ibc = {}));
//# sourceMappingURL=tx.js.map