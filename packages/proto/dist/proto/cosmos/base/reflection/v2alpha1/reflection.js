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
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var base;
    (function (base) {
        var reflection;
        (function (reflection) {
            var v2alpha1;
            (function (v2alpha1) {
                var _AppDescriptor_one_of_decls, _TxDescriptor_one_of_decls, _AuthnDescriptor_one_of_decls, _SigningModeDescriptor_one_of_decls, _ChainDescriptor_one_of_decls, _CodecDescriptor_one_of_decls, _InterfaceDescriptor_one_of_decls, _InterfaceImplementerDescriptor_one_of_decls, _InterfaceAcceptingMessageDescriptor_one_of_decls, _ConfigurationDescriptor_one_of_decls, _MsgDescriptor_one_of_decls, _GetAuthnDescriptorRequest_one_of_decls, _GetAuthnDescriptorResponse_one_of_decls, _GetChainDescriptorRequest_one_of_decls, _GetChainDescriptorResponse_one_of_decls, _GetCodecDescriptorRequest_one_of_decls, _GetCodecDescriptorResponse_one_of_decls, _GetConfigurationDescriptorRequest_one_of_decls, _GetConfigurationDescriptorResponse_one_of_decls, _GetQueryServicesDescriptorRequest_one_of_decls, _GetQueryServicesDescriptorResponse_one_of_decls, _GetTxDescriptorRequest_one_of_decls, _GetTxDescriptorResponse_one_of_decls, _QueryServicesDescriptor_one_of_decls, _QueryServiceDescriptor_one_of_decls, _QueryMethodDescriptor_one_of_decls;
                class AppDescriptor extends pb_1.Message {
                    constructor(data) {
                        super();
                        _AppDescriptor_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AppDescriptor_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("authn" in data && data.authn != undefined) {
                                this.authn = data.authn;
                            }
                            if ("chain" in data && data.chain != undefined) {
                                this.chain = data.chain;
                            }
                            if ("codec" in data && data.codec != undefined) {
                                this.codec = data.codec;
                            }
                            if ("configuration" in data && data.configuration != undefined) {
                                this.configuration = data.configuration;
                            }
                            if ("query_services" in data && data.query_services != undefined) {
                                this.query_services = data.query_services;
                            }
                            if ("tx" in data && data.tx != undefined) {
                                this.tx = data.tx;
                            }
                        }
                    }
                    get authn() {
                        return pb_1.Message.getWrapperField(this, AuthnDescriptor, 1);
                    }
                    set authn(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_authn() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    get chain() {
                        return pb_1.Message.getWrapperField(this, ChainDescriptor, 2);
                    }
                    set chain(value) {
                        pb_1.Message.setWrapperField(this, 2, value);
                    }
                    get has_chain() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    get codec() {
                        return pb_1.Message.getWrapperField(this, CodecDescriptor, 3);
                    }
                    set codec(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_codec() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    get configuration() {
                        return pb_1.Message.getWrapperField(this, ConfigurationDescriptor, 4);
                    }
                    set configuration(value) {
                        pb_1.Message.setWrapperField(this, 4, value);
                    }
                    get has_configuration() {
                        return pb_1.Message.getField(this, 4) != null;
                    }
                    get query_services() {
                        return pb_1.Message.getWrapperField(this, QueryServicesDescriptor, 5);
                    }
                    set query_services(value) {
                        pb_1.Message.setWrapperField(this, 5, value);
                    }
                    get has_query_services() {
                        return pb_1.Message.getField(this, 5) != null;
                    }
                    get tx() {
                        return pb_1.Message.getWrapperField(this, TxDescriptor, 6);
                    }
                    set tx(value) {
                        pb_1.Message.setWrapperField(this, 6, value);
                    }
                    get has_tx() {
                        return pb_1.Message.getField(this, 6) != null;
                    }
                    static fromObject(data) {
                        const message = new AppDescriptor({});
                        if (data.authn != null) {
                            message.authn = AuthnDescriptor.fromObject(data.authn);
                        }
                        if (data.chain != null) {
                            message.chain = ChainDescriptor.fromObject(data.chain);
                        }
                        if (data.codec != null) {
                            message.codec = CodecDescriptor.fromObject(data.codec);
                        }
                        if (data.configuration != null) {
                            message.configuration = ConfigurationDescriptor.fromObject(data.configuration);
                        }
                        if (data.query_services != null) {
                            message.query_services = QueryServicesDescriptor.fromObject(data.query_services);
                        }
                        if (data.tx != null) {
                            message.tx = TxDescriptor.fromObject(data.tx);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.authn != null) {
                            data.authn = this.authn.toObject();
                        }
                        if (this.chain != null) {
                            data.chain = this.chain.toObject();
                        }
                        if (this.codec != null) {
                            data.codec = this.codec.toObject();
                        }
                        if (this.configuration != null) {
                            data.configuration = this.configuration.toObject();
                        }
                        if (this.query_services != null) {
                            data.query_services = this.query_services.toObject();
                        }
                        if (this.tx != null) {
                            data.tx = this.tx.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_authn)
                            writer.writeMessage(1, this.authn, () => this.authn.serialize(writer));
                        if (this.has_chain)
                            writer.writeMessage(2, this.chain, () => this.chain.serialize(writer));
                        if (this.has_codec)
                            writer.writeMessage(3, this.codec, () => this.codec.serialize(writer));
                        if (this.has_configuration)
                            writer.writeMessage(4, this.configuration, () => this.configuration.serialize(writer));
                        if (this.has_query_services)
                            writer.writeMessage(5, this.query_services, () => this.query_services.serialize(writer));
                        if (this.has_tx)
                            writer.writeMessage(6, this.tx, () => this.tx.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AppDescriptor();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.authn, () => message.authn = AuthnDescriptor.deserialize(reader));
                                    break;
                                case 2:
                                    reader.readMessage(message.chain, () => message.chain = ChainDescriptor.deserialize(reader));
                                    break;
                                case 3:
                                    reader.readMessage(message.codec, () => message.codec = CodecDescriptor.deserialize(reader));
                                    break;
                                case 4:
                                    reader.readMessage(message.configuration, () => message.configuration = ConfigurationDescriptor.deserialize(reader));
                                    break;
                                case 5:
                                    reader.readMessage(message.query_services, () => message.query_services = QueryServicesDescriptor.deserialize(reader));
                                    break;
                                case 6:
                                    reader.readMessage(message.tx, () => message.tx = TxDescriptor.deserialize(reader));
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
                        return AppDescriptor.deserialize(bytes);
                    }
                }
                _AppDescriptor_one_of_decls = new WeakMap();
                v2alpha1.AppDescriptor = AppDescriptor;
                class TxDescriptor extends pb_1.Message {
                    constructor(data) {
                        super();
                        _TxDescriptor_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _TxDescriptor_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("fullname" in data && data.fullname != undefined) {
                                this.fullname = data.fullname;
                            }
                            if ("msgs" in data && data.msgs != undefined) {
                                this.msgs = data.msgs;
                            }
                        }
                    }
                    get fullname() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set fullname(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get msgs() {
                        return pb_1.Message.getRepeatedWrapperField(this, MsgDescriptor, 2);
                    }
                    set msgs(value) {
                        pb_1.Message.setRepeatedWrapperField(this, 2, value);
                    }
                    static fromObject(data) {
                        const message = new TxDescriptor({});
                        if (data.fullname != null) {
                            message.fullname = data.fullname;
                        }
                        if (data.msgs != null) {
                            message.msgs = data.msgs.map(item => MsgDescriptor.fromObject(item));
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.fullname != null) {
                            data.fullname = this.fullname;
                        }
                        if (this.msgs != null) {
                            data.msgs = this.msgs.map((item) => item.toObject());
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.fullname.length)
                            writer.writeString(1, this.fullname);
                        if (this.msgs.length)
                            writer.writeRepeatedMessage(2, this.msgs, (item) => item.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TxDescriptor();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.fullname = reader.readString();
                                    break;
                                case 2:
                                    reader.readMessage(message.msgs, () => pb_1.Message.addToRepeatedWrapperField(message, 2, MsgDescriptor.deserialize(reader), MsgDescriptor));
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
                        return TxDescriptor.deserialize(bytes);
                    }
                }
                _TxDescriptor_one_of_decls = new WeakMap();
                v2alpha1.TxDescriptor = TxDescriptor;
                class AuthnDescriptor extends pb_1.Message {
                    constructor(data) {
                        super();
                        _AuthnDescriptor_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _AuthnDescriptor_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("sign_modes" in data && data.sign_modes != undefined) {
                                this.sign_modes = data.sign_modes;
                            }
                        }
                    }
                    get sign_modes() {
                        return pb_1.Message.getRepeatedWrapperField(this, SigningModeDescriptor, 1);
                    }
                    set sign_modes(value) {
                        pb_1.Message.setRepeatedWrapperField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new AuthnDescriptor({});
                        if (data.sign_modes != null) {
                            message.sign_modes = data.sign_modes.map(item => SigningModeDescriptor.fromObject(item));
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.sign_modes != null) {
                            data.sign_modes = this.sign_modes.map((item) => item.toObject());
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.sign_modes.length)
                            writer.writeRepeatedMessage(1, this.sign_modes, (item) => item.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthnDescriptor();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.sign_modes, () => pb_1.Message.addToRepeatedWrapperField(message, 1, SigningModeDescriptor.deserialize(reader), SigningModeDescriptor));
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
                        return AuthnDescriptor.deserialize(bytes);
                    }
                }
                _AuthnDescriptor_one_of_decls = new WeakMap();
                v2alpha1.AuthnDescriptor = AuthnDescriptor;
                class SigningModeDescriptor extends pb_1.Message {
                    constructor(data) {
                        super();
                        _SigningModeDescriptor_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SigningModeDescriptor_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("name" in data && data.name != undefined) {
                                this.name = data.name;
                            }
                            if ("number" in data && data.number != undefined) {
                                this.number = data.number;
                            }
                            if ("authn_info_provider_method_fullname" in data && data.authn_info_provider_method_fullname != undefined) {
                                this.authn_info_provider_method_fullname = data.authn_info_provider_method_fullname;
                            }
                        }
                    }
                    get name() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set name(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get number() {
                        return pb_1.Message.getFieldWithDefault(this, 2, 0);
                    }
                    set number(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get authn_info_provider_method_fullname() {
                        return pb_1.Message.getFieldWithDefault(this, 3, "");
                    }
                    set authn_info_provider_method_fullname(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    static fromObject(data) {
                        const message = new SigningModeDescriptor({});
                        if (data.name != null) {
                            message.name = data.name;
                        }
                        if (data.number != null) {
                            message.number = data.number;
                        }
                        if (data.authn_info_provider_method_fullname != null) {
                            message.authn_info_provider_method_fullname = data.authn_info_provider_method_fullname;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.name != null) {
                            data.name = this.name;
                        }
                        if (this.number != null) {
                            data.number = this.number;
                        }
                        if (this.authn_info_provider_method_fullname != null) {
                            data.authn_info_provider_method_fullname = this.authn_info_provider_method_fullname;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.name.length)
                            writer.writeString(1, this.name);
                        if (this.number != 0)
                            writer.writeInt32(2, this.number);
                        if (this.authn_info_provider_method_fullname.length)
                            writer.writeString(3, this.authn_info_provider_method_fullname);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SigningModeDescriptor();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.name = reader.readString();
                                    break;
                                case 2:
                                    message.number = reader.readInt32();
                                    break;
                                case 3:
                                    message.authn_info_provider_method_fullname = reader.readString();
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
                        return SigningModeDescriptor.deserialize(bytes);
                    }
                }
                _SigningModeDescriptor_one_of_decls = new WeakMap();
                v2alpha1.SigningModeDescriptor = SigningModeDescriptor;
                class ChainDescriptor extends pb_1.Message {
                    constructor(data) {
                        super();
                        _ChainDescriptor_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ChainDescriptor_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("id" in data && data.id != undefined) {
                                this.id = data.id;
                            }
                        }
                    }
                    get id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new ChainDescriptor({});
                        if (data.id != null) {
                            message.id = data.id;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.id != null) {
                            data.id = this.id;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.id.length)
                            writer.writeString(1, this.id);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChainDescriptor();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.id = reader.readString();
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
                        return ChainDescriptor.deserialize(bytes);
                    }
                }
                _ChainDescriptor_one_of_decls = new WeakMap();
                v2alpha1.ChainDescriptor = ChainDescriptor;
                class CodecDescriptor extends pb_1.Message {
                    constructor(data) {
                        super();
                        _CodecDescriptor_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _CodecDescriptor_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("interfaces" in data && data.interfaces != undefined) {
                                this.interfaces = data.interfaces;
                            }
                        }
                    }
                    get interfaces() {
                        return pb_1.Message.getRepeatedWrapperField(this, InterfaceDescriptor, 1);
                    }
                    set interfaces(value) {
                        pb_1.Message.setRepeatedWrapperField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new CodecDescriptor({});
                        if (data.interfaces != null) {
                            message.interfaces = data.interfaces.map(item => InterfaceDescriptor.fromObject(item));
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.interfaces != null) {
                            data.interfaces = this.interfaces.map((item) => item.toObject());
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.interfaces.length)
                            writer.writeRepeatedMessage(1, this.interfaces, (item) => item.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CodecDescriptor();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.interfaces, () => pb_1.Message.addToRepeatedWrapperField(message, 1, InterfaceDescriptor.deserialize(reader), InterfaceDescriptor));
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
                        return CodecDescriptor.deserialize(bytes);
                    }
                }
                _CodecDescriptor_one_of_decls = new WeakMap();
                v2alpha1.CodecDescriptor = CodecDescriptor;
                class InterfaceDescriptor extends pb_1.Message {
                    constructor(data) {
                        super();
                        _InterfaceDescriptor_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3], __classPrivateFieldGet(this, _InterfaceDescriptor_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("fullname" in data && data.fullname != undefined) {
                                this.fullname = data.fullname;
                            }
                            if ("interface_accepting_messages" in data && data.interface_accepting_messages != undefined) {
                                this.interface_accepting_messages = data.interface_accepting_messages;
                            }
                            if ("interface_implementers" in data && data.interface_implementers != undefined) {
                                this.interface_implementers = data.interface_implementers;
                            }
                        }
                    }
                    get fullname() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set fullname(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get interface_accepting_messages() {
                        return pb_1.Message.getRepeatedWrapperField(this, InterfaceAcceptingMessageDescriptor, 2);
                    }
                    set interface_accepting_messages(value) {
                        pb_1.Message.setRepeatedWrapperField(this, 2, value);
                    }
                    get interface_implementers() {
                        return pb_1.Message.getRepeatedWrapperField(this, InterfaceImplementerDescriptor, 3);
                    }
                    set interface_implementers(value) {
                        pb_1.Message.setRepeatedWrapperField(this, 3, value);
                    }
                    static fromObject(data) {
                        const message = new InterfaceDescriptor({});
                        if (data.fullname != null) {
                            message.fullname = data.fullname;
                        }
                        if (data.interface_accepting_messages != null) {
                            message.interface_accepting_messages = data.interface_accepting_messages.map(item => InterfaceAcceptingMessageDescriptor.fromObject(item));
                        }
                        if (data.interface_implementers != null) {
                            message.interface_implementers = data.interface_implementers.map(item => InterfaceImplementerDescriptor.fromObject(item));
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.fullname != null) {
                            data.fullname = this.fullname;
                        }
                        if (this.interface_accepting_messages != null) {
                            data.interface_accepting_messages = this.interface_accepting_messages.map((item) => item.toObject());
                        }
                        if (this.interface_implementers != null) {
                            data.interface_implementers = this.interface_implementers.map((item) => item.toObject());
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.fullname.length)
                            writer.writeString(1, this.fullname);
                        if (this.interface_accepting_messages.length)
                            writer.writeRepeatedMessage(2, this.interface_accepting_messages, (item) => item.serialize(writer));
                        if (this.interface_implementers.length)
                            writer.writeRepeatedMessage(3, this.interface_implementers, (item) => item.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new InterfaceDescriptor();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.fullname = reader.readString();
                                    break;
                                case 2:
                                    reader.readMessage(message.interface_accepting_messages, () => pb_1.Message.addToRepeatedWrapperField(message, 2, InterfaceAcceptingMessageDescriptor.deserialize(reader), InterfaceAcceptingMessageDescriptor));
                                    break;
                                case 3:
                                    reader.readMessage(message.interface_implementers, () => pb_1.Message.addToRepeatedWrapperField(message, 3, InterfaceImplementerDescriptor.deserialize(reader), InterfaceImplementerDescriptor));
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
                        return InterfaceDescriptor.deserialize(bytes);
                    }
                }
                _InterfaceDescriptor_one_of_decls = new WeakMap();
                v2alpha1.InterfaceDescriptor = InterfaceDescriptor;
                class InterfaceImplementerDescriptor extends pb_1.Message {
                    constructor(data) {
                        super();
                        _InterfaceImplementerDescriptor_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _InterfaceImplementerDescriptor_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("fullname" in data && data.fullname != undefined) {
                                this.fullname = data.fullname;
                            }
                            if ("type_url" in data && data.type_url != undefined) {
                                this.type_url = data.type_url;
                            }
                        }
                    }
                    get fullname() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set fullname(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get type_url() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set type_url(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    static fromObject(data) {
                        const message = new InterfaceImplementerDescriptor({});
                        if (data.fullname != null) {
                            message.fullname = data.fullname;
                        }
                        if (data.type_url != null) {
                            message.type_url = data.type_url;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.fullname != null) {
                            data.fullname = this.fullname;
                        }
                        if (this.type_url != null) {
                            data.type_url = this.type_url;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.fullname.length)
                            writer.writeString(1, this.fullname);
                        if (this.type_url.length)
                            writer.writeString(2, this.type_url);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new InterfaceImplementerDescriptor();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.fullname = reader.readString();
                                    break;
                                case 2:
                                    message.type_url = reader.readString();
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
                        return InterfaceImplementerDescriptor.deserialize(bytes);
                    }
                }
                _InterfaceImplementerDescriptor_one_of_decls = new WeakMap();
                v2alpha1.InterfaceImplementerDescriptor = InterfaceImplementerDescriptor;
                class InterfaceAcceptingMessageDescriptor extends pb_1.Message {
                    constructor(data) {
                        super();
                        _InterfaceAcceptingMessageDescriptor_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _InterfaceAcceptingMessageDescriptor_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("fullname" in data && data.fullname != undefined) {
                                this.fullname = data.fullname;
                            }
                            if ("field_descriptor_names" in data && data.field_descriptor_names != undefined) {
                                this.field_descriptor_names = data.field_descriptor_names;
                            }
                        }
                    }
                    get fullname() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set fullname(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get field_descriptor_names() {
                        return pb_1.Message.getFieldWithDefault(this, 2, []);
                    }
                    set field_descriptor_names(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    static fromObject(data) {
                        const message = new InterfaceAcceptingMessageDescriptor({});
                        if (data.fullname != null) {
                            message.fullname = data.fullname;
                        }
                        if (data.field_descriptor_names != null) {
                            message.field_descriptor_names = data.field_descriptor_names;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.fullname != null) {
                            data.fullname = this.fullname;
                        }
                        if (this.field_descriptor_names != null) {
                            data.field_descriptor_names = this.field_descriptor_names;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.fullname.length)
                            writer.writeString(1, this.fullname);
                        if (this.field_descriptor_names.length)
                            writer.writeRepeatedString(2, this.field_descriptor_names);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new InterfaceAcceptingMessageDescriptor();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.fullname = reader.readString();
                                    break;
                                case 2:
                                    pb_1.Message.addToRepeatedField(message, 2, reader.readString());
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
                        return InterfaceAcceptingMessageDescriptor.deserialize(bytes);
                    }
                }
                _InterfaceAcceptingMessageDescriptor_one_of_decls = new WeakMap();
                v2alpha1.InterfaceAcceptingMessageDescriptor = InterfaceAcceptingMessageDescriptor;
                class ConfigurationDescriptor extends pb_1.Message {
                    constructor(data) {
                        super();
                        _ConfigurationDescriptor_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ConfigurationDescriptor_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("bech32_account_address_prefix" in data && data.bech32_account_address_prefix != undefined) {
                                this.bech32_account_address_prefix = data.bech32_account_address_prefix;
                            }
                        }
                    }
                    get bech32_account_address_prefix() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set bech32_account_address_prefix(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new ConfigurationDescriptor({});
                        if (data.bech32_account_address_prefix != null) {
                            message.bech32_account_address_prefix = data.bech32_account_address_prefix;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.bech32_account_address_prefix != null) {
                            data.bech32_account_address_prefix = this.bech32_account_address_prefix;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.bech32_account_address_prefix.length)
                            writer.writeString(1, this.bech32_account_address_prefix);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ConfigurationDescriptor();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.bech32_account_address_prefix = reader.readString();
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
                        return ConfigurationDescriptor.deserialize(bytes);
                    }
                }
                _ConfigurationDescriptor_one_of_decls = new WeakMap();
                v2alpha1.ConfigurationDescriptor = ConfigurationDescriptor;
                class MsgDescriptor extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgDescriptor_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgDescriptor_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("msg_type_url" in data && data.msg_type_url != undefined) {
                                this.msg_type_url = data.msg_type_url;
                            }
                        }
                    }
                    get msg_type_url() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set msg_type_url(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new MsgDescriptor({});
                        if (data.msg_type_url != null) {
                            message.msg_type_url = data.msg_type_url;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.msg_type_url != null) {
                            data.msg_type_url = this.msg_type_url;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.msg_type_url.length)
                            writer.writeString(1, this.msg_type_url);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgDescriptor();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
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
                        return MsgDescriptor.deserialize(bytes);
                    }
                }
                _MsgDescriptor_one_of_decls = new WeakMap();
                v2alpha1.MsgDescriptor = MsgDescriptor;
                class GetAuthnDescriptorRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _GetAuthnDescriptorRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetAuthnDescriptorRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new GetAuthnDescriptorRequest({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetAuthnDescriptorRequest();
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
                        return GetAuthnDescriptorRequest.deserialize(bytes);
                    }
                }
                _GetAuthnDescriptorRequest_one_of_decls = new WeakMap();
                v2alpha1.GetAuthnDescriptorRequest = GetAuthnDescriptorRequest;
                class GetAuthnDescriptorResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _GetAuthnDescriptorResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetAuthnDescriptorResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("authn" in data && data.authn != undefined) {
                                this.authn = data.authn;
                            }
                        }
                    }
                    get authn() {
                        return pb_1.Message.getWrapperField(this, AuthnDescriptor, 1);
                    }
                    set authn(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_authn() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    static fromObject(data) {
                        const message = new GetAuthnDescriptorResponse({});
                        if (data.authn != null) {
                            message.authn = AuthnDescriptor.fromObject(data.authn);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.authn != null) {
                            data.authn = this.authn.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_authn)
                            writer.writeMessage(1, this.authn, () => this.authn.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetAuthnDescriptorResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.authn, () => message.authn = AuthnDescriptor.deserialize(reader));
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
                        return GetAuthnDescriptorResponse.deserialize(bytes);
                    }
                }
                _GetAuthnDescriptorResponse_one_of_decls = new WeakMap();
                v2alpha1.GetAuthnDescriptorResponse = GetAuthnDescriptorResponse;
                class GetChainDescriptorRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _GetChainDescriptorRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetChainDescriptorRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new GetChainDescriptorRequest({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetChainDescriptorRequest();
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
                        return GetChainDescriptorRequest.deserialize(bytes);
                    }
                }
                _GetChainDescriptorRequest_one_of_decls = new WeakMap();
                v2alpha1.GetChainDescriptorRequest = GetChainDescriptorRequest;
                class GetChainDescriptorResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _GetChainDescriptorResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetChainDescriptorResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("chain" in data && data.chain != undefined) {
                                this.chain = data.chain;
                            }
                        }
                    }
                    get chain() {
                        return pb_1.Message.getWrapperField(this, ChainDescriptor, 1);
                    }
                    set chain(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_chain() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    static fromObject(data) {
                        const message = new GetChainDescriptorResponse({});
                        if (data.chain != null) {
                            message.chain = ChainDescriptor.fromObject(data.chain);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.chain != null) {
                            data.chain = this.chain.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_chain)
                            writer.writeMessage(1, this.chain, () => this.chain.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetChainDescriptorResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.chain, () => message.chain = ChainDescriptor.deserialize(reader));
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
                        return GetChainDescriptorResponse.deserialize(bytes);
                    }
                }
                _GetChainDescriptorResponse_one_of_decls = new WeakMap();
                v2alpha1.GetChainDescriptorResponse = GetChainDescriptorResponse;
                class GetCodecDescriptorRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _GetCodecDescriptorRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetCodecDescriptorRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new GetCodecDescriptorRequest({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetCodecDescriptorRequest();
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
                        return GetCodecDescriptorRequest.deserialize(bytes);
                    }
                }
                _GetCodecDescriptorRequest_one_of_decls = new WeakMap();
                v2alpha1.GetCodecDescriptorRequest = GetCodecDescriptorRequest;
                class GetCodecDescriptorResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _GetCodecDescriptorResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetCodecDescriptorResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("codec" in data && data.codec != undefined) {
                                this.codec = data.codec;
                            }
                        }
                    }
                    get codec() {
                        return pb_1.Message.getWrapperField(this, CodecDescriptor, 1);
                    }
                    set codec(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_codec() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    static fromObject(data) {
                        const message = new GetCodecDescriptorResponse({});
                        if (data.codec != null) {
                            message.codec = CodecDescriptor.fromObject(data.codec);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.codec != null) {
                            data.codec = this.codec.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_codec)
                            writer.writeMessage(1, this.codec, () => this.codec.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetCodecDescriptorResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.codec, () => message.codec = CodecDescriptor.deserialize(reader));
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
                        return GetCodecDescriptorResponse.deserialize(bytes);
                    }
                }
                _GetCodecDescriptorResponse_one_of_decls = new WeakMap();
                v2alpha1.GetCodecDescriptorResponse = GetCodecDescriptorResponse;
                class GetConfigurationDescriptorRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _GetConfigurationDescriptorRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetConfigurationDescriptorRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new GetConfigurationDescriptorRequest({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetConfigurationDescriptorRequest();
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
                        return GetConfigurationDescriptorRequest.deserialize(bytes);
                    }
                }
                _GetConfigurationDescriptorRequest_one_of_decls = new WeakMap();
                v2alpha1.GetConfigurationDescriptorRequest = GetConfigurationDescriptorRequest;
                class GetConfigurationDescriptorResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _GetConfigurationDescriptorResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetConfigurationDescriptorResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("config" in data && data.config != undefined) {
                                this.config = data.config;
                            }
                        }
                    }
                    get config() {
                        return pb_1.Message.getWrapperField(this, ConfigurationDescriptor, 1);
                    }
                    set config(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_config() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    static fromObject(data) {
                        const message = new GetConfigurationDescriptorResponse({});
                        if (data.config != null) {
                            message.config = ConfigurationDescriptor.fromObject(data.config);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.config != null) {
                            data.config = this.config.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_config)
                            writer.writeMessage(1, this.config, () => this.config.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetConfigurationDescriptorResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.config, () => message.config = ConfigurationDescriptor.deserialize(reader));
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
                        return GetConfigurationDescriptorResponse.deserialize(bytes);
                    }
                }
                _GetConfigurationDescriptorResponse_one_of_decls = new WeakMap();
                v2alpha1.GetConfigurationDescriptorResponse = GetConfigurationDescriptorResponse;
                class GetQueryServicesDescriptorRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _GetQueryServicesDescriptorRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetQueryServicesDescriptorRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new GetQueryServicesDescriptorRequest({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetQueryServicesDescriptorRequest();
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
                        return GetQueryServicesDescriptorRequest.deserialize(bytes);
                    }
                }
                _GetQueryServicesDescriptorRequest_one_of_decls = new WeakMap();
                v2alpha1.GetQueryServicesDescriptorRequest = GetQueryServicesDescriptorRequest;
                class GetQueryServicesDescriptorResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _GetQueryServicesDescriptorResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetQueryServicesDescriptorResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("queries" in data && data.queries != undefined) {
                                this.queries = data.queries;
                            }
                        }
                    }
                    get queries() {
                        return pb_1.Message.getWrapperField(this, QueryServicesDescriptor, 1);
                    }
                    set queries(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_queries() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    static fromObject(data) {
                        const message = new GetQueryServicesDescriptorResponse({});
                        if (data.queries != null) {
                            message.queries = QueryServicesDescriptor.fromObject(data.queries);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.queries != null) {
                            data.queries = this.queries.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_queries)
                            writer.writeMessage(1, this.queries, () => this.queries.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetQueryServicesDescriptorResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.queries, () => message.queries = QueryServicesDescriptor.deserialize(reader));
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
                        return GetQueryServicesDescriptorResponse.deserialize(bytes);
                    }
                }
                _GetQueryServicesDescriptorResponse_one_of_decls = new WeakMap();
                v2alpha1.GetQueryServicesDescriptorResponse = GetQueryServicesDescriptorResponse;
                class GetTxDescriptorRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _GetTxDescriptorRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetTxDescriptorRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new GetTxDescriptorRequest({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetTxDescriptorRequest();
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
                        return GetTxDescriptorRequest.deserialize(bytes);
                    }
                }
                _GetTxDescriptorRequest_one_of_decls = new WeakMap();
                v2alpha1.GetTxDescriptorRequest = GetTxDescriptorRequest;
                class GetTxDescriptorResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _GetTxDescriptorResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetTxDescriptorResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("tx" in data && data.tx != undefined) {
                                this.tx = data.tx;
                            }
                        }
                    }
                    get tx() {
                        return pb_1.Message.getWrapperField(this, TxDescriptor, 1);
                    }
                    set tx(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_tx() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    static fromObject(data) {
                        const message = new GetTxDescriptorResponse({});
                        if (data.tx != null) {
                            message.tx = TxDescriptor.fromObject(data.tx);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.tx != null) {
                            data.tx = this.tx.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_tx)
                            writer.writeMessage(1, this.tx, () => this.tx.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetTxDescriptorResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.tx, () => message.tx = TxDescriptor.deserialize(reader));
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
                        return GetTxDescriptorResponse.deserialize(bytes);
                    }
                }
                _GetTxDescriptorResponse_one_of_decls = new WeakMap();
                v2alpha1.GetTxDescriptorResponse = GetTxDescriptorResponse;
                class QueryServicesDescriptor extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryServicesDescriptor_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryServicesDescriptor_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("query_services" in data && data.query_services != undefined) {
                                this.query_services = data.query_services;
                            }
                        }
                    }
                    get query_services() {
                        return pb_1.Message.getRepeatedWrapperField(this, QueryServiceDescriptor, 1);
                    }
                    set query_services(value) {
                        pb_1.Message.setRepeatedWrapperField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new QueryServicesDescriptor({});
                        if (data.query_services != null) {
                            message.query_services = data.query_services.map(item => QueryServiceDescriptor.fromObject(item));
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.query_services != null) {
                            data.query_services = this.query_services.map((item) => item.toObject());
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.query_services.length)
                            writer.writeRepeatedMessage(1, this.query_services, (item) => item.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryServicesDescriptor();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.query_services, () => pb_1.Message.addToRepeatedWrapperField(message, 1, QueryServiceDescriptor.deserialize(reader), QueryServiceDescriptor));
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
                        return QueryServicesDescriptor.deserialize(bytes);
                    }
                }
                _QueryServicesDescriptor_one_of_decls = new WeakMap();
                v2alpha1.QueryServicesDescriptor = QueryServicesDescriptor;
                class QueryServiceDescriptor extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryServiceDescriptor_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _QueryServiceDescriptor_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("fullname" in data && data.fullname != undefined) {
                                this.fullname = data.fullname;
                            }
                            if ("is_module" in data && data.is_module != undefined) {
                                this.is_module = data.is_module;
                            }
                            if ("methods" in data && data.methods != undefined) {
                                this.methods = data.methods;
                            }
                        }
                    }
                    get fullname() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set fullname(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get is_module() {
                        return pb_1.Message.getFieldWithDefault(this, 2, false);
                    }
                    set is_module(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get methods() {
                        return pb_1.Message.getRepeatedWrapperField(this, QueryMethodDescriptor, 3);
                    }
                    set methods(value) {
                        pb_1.Message.setRepeatedWrapperField(this, 3, value);
                    }
                    static fromObject(data) {
                        const message = new QueryServiceDescriptor({});
                        if (data.fullname != null) {
                            message.fullname = data.fullname;
                        }
                        if (data.is_module != null) {
                            message.is_module = data.is_module;
                        }
                        if (data.methods != null) {
                            message.methods = data.methods.map(item => QueryMethodDescriptor.fromObject(item));
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.fullname != null) {
                            data.fullname = this.fullname;
                        }
                        if (this.is_module != null) {
                            data.is_module = this.is_module;
                        }
                        if (this.methods != null) {
                            data.methods = this.methods.map((item) => item.toObject());
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.fullname.length)
                            writer.writeString(1, this.fullname);
                        if (this.is_module != false)
                            writer.writeBool(2, this.is_module);
                        if (this.methods.length)
                            writer.writeRepeatedMessage(3, this.methods, (item) => item.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryServiceDescriptor();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.fullname = reader.readString();
                                    break;
                                case 2:
                                    message.is_module = reader.readBool();
                                    break;
                                case 3:
                                    reader.readMessage(message.methods, () => pb_1.Message.addToRepeatedWrapperField(message, 3, QueryMethodDescriptor.deserialize(reader), QueryMethodDescriptor));
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
                        return QueryServiceDescriptor.deserialize(bytes);
                    }
                }
                _QueryServiceDescriptor_one_of_decls = new WeakMap();
                v2alpha1.QueryServiceDescriptor = QueryServiceDescriptor;
                class QueryMethodDescriptor extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryMethodDescriptor_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryMethodDescriptor_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("name" in data && data.name != undefined) {
                                this.name = data.name;
                            }
                            if ("full_query_path" in data && data.full_query_path != undefined) {
                                this.full_query_path = data.full_query_path;
                            }
                        }
                    }
                    get name() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set name(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get full_query_path() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set full_query_path(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    static fromObject(data) {
                        const message = new QueryMethodDescriptor({});
                        if (data.name != null) {
                            message.name = data.name;
                        }
                        if (data.full_query_path != null) {
                            message.full_query_path = data.full_query_path;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.name != null) {
                            data.name = this.name;
                        }
                        if (this.full_query_path != null) {
                            data.full_query_path = this.full_query_path;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.name.length)
                            writer.writeString(1, this.name);
                        if (this.full_query_path.length)
                            writer.writeString(2, this.full_query_path);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryMethodDescriptor();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.name = reader.readString();
                                    break;
                                case 2:
                                    message.full_query_path = reader.readString();
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
                        return QueryMethodDescriptor.deserialize(bytes);
                    }
                }
                _QueryMethodDescriptor_one_of_decls = new WeakMap();
                v2alpha1.QueryMethodDescriptor = QueryMethodDescriptor;
                class UnimplementedReflectionServiceService {
                }
                UnimplementedReflectionServiceService.definition = {
                    GetAuthnDescriptor: {
                        path: "/cosmos.base.reflection.v2alpha1.ReflectionService/GetAuthnDescriptor",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => GetAuthnDescriptorRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => GetAuthnDescriptorResponse.deserialize(new Uint8Array(bytes))
                    },
                    GetChainDescriptor: {
                        path: "/cosmos.base.reflection.v2alpha1.ReflectionService/GetChainDescriptor",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => GetChainDescriptorRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => GetChainDescriptorResponse.deserialize(new Uint8Array(bytes))
                    },
                    GetCodecDescriptor: {
                        path: "/cosmos.base.reflection.v2alpha1.ReflectionService/GetCodecDescriptor",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => GetCodecDescriptorRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => GetCodecDescriptorResponse.deserialize(new Uint8Array(bytes))
                    },
                    GetConfigurationDescriptor: {
                        path: "/cosmos.base.reflection.v2alpha1.ReflectionService/GetConfigurationDescriptor",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => GetConfigurationDescriptorRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => GetConfigurationDescriptorResponse.deserialize(new Uint8Array(bytes))
                    },
                    GetQueryServicesDescriptor: {
                        path: "/cosmos.base.reflection.v2alpha1.ReflectionService/GetQueryServicesDescriptor",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => GetQueryServicesDescriptorRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => GetQueryServicesDescriptorResponse.deserialize(new Uint8Array(bytes))
                    },
                    GetTxDescriptor: {
                        path: "/cosmos.base.reflection.v2alpha1.ReflectionService/GetTxDescriptor",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => GetTxDescriptorRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => GetTxDescriptorResponse.deserialize(new Uint8Array(bytes))
                    }
                };
                v2alpha1.UnimplementedReflectionServiceService = UnimplementedReflectionServiceService;
                class ReflectionServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedReflectionServiceService.definition, "ReflectionService", {}) {
                    constructor(address, credentials, options) {
                        super(address, credentials, options);
                        this.GetAuthnDescriptor = (message, metadata, options, callback) => {
                            return super.GetAuthnDescriptor(message, metadata, options, callback);
                        };
                        this.GetChainDescriptor = (message, metadata, options, callback) => {
                            return super.GetChainDescriptor(message, metadata, options, callback);
                        };
                        this.GetCodecDescriptor = (message, metadata, options, callback) => {
                            return super.GetCodecDescriptor(message, metadata, options, callback);
                        };
                        this.GetConfigurationDescriptor = (message, metadata, options, callback) => {
                            return super.GetConfigurationDescriptor(message, metadata, options, callback);
                        };
                        this.GetQueryServicesDescriptor = (message, metadata, options, callback) => {
                            return super.GetQueryServicesDescriptor(message, metadata, options, callback);
                        };
                        this.GetTxDescriptor = (message, metadata, options, callback) => {
                            return super.GetTxDescriptor(message, metadata, options, callback);
                        };
                    }
                }
                v2alpha1.ReflectionServiceClient = ReflectionServiceClient;
            })(v2alpha1 = reflection.v2alpha1 || (reflection.v2alpha1 = {}));
        })(reflection = base.reflection || (base.reflection = {}));
    })(base = cosmos.base || (cosmos.base = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=reflection.js.map