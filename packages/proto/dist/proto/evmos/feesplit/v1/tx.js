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
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var evmos;
(function (evmos) {
    var feesplit;
    (function (feesplit) {
        var v1;
        (function (v1) {
            var _MsgRegisterFeeSplit_one_of_decls, _MsgRegisterFeeSplitResponse_one_of_decls, _MsgUpdateFeeSplit_one_of_decls, _MsgUpdateFeeSplitResponse_one_of_decls, _MsgCancelFeeSplit_one_of_decls, _MsgCancelFeeSplitResponse_one_of_decls;
            class MsgRegisterFeeSplit extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgRegisterFeeSplit_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], __classPrivateFieldGet(this, _MsgRegisterFeeSplit_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("contract_address" in data && data.contract_address != undefined) {
                            this.contract_address = data.contract_address;
                        }
                        if ("deployer_address" in data && data.deployer_address != undefined) {
                            this.deployer_address = data.deployer_address;
                        }
                        if ("withdrawer_address" in data && data.withdrawer_address != undefined) {
                            this.withdrawer_address = data.withdrawer_address;
                        }
                        if ("nonces" in data && data.nonces != undefined) {
                            this.nonces = data.nonces;
                        }
                    }
                }
                get contract_address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set contract_address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get deployer_address() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set deployer_address(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get withdrawer_address() {
                    return pb_1.Message.getFieldWithDefault(this, 3, "");
                }
                set withdrawer_address(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                get nonces() {
                    return pb_1.Message.getFieldWithDefault(this, 4, []);
                }
                set nonces(value) {
                    pb_1.Message.setField(this, 4, value);
                }
                static fromObject(data) {
                    const message = new MsgRegisterFeeSplit({});
                    if (data.contract_address != null) {
                        message.contract_address = data.contract_address;
                    }
                    if (data.deployer_address != null) {
                        message.deployer_address = data.deployer_address;
                    }
                    if (data.withdrawer_address != null) {
                        message.withdrawer_address = data.withdrawer_address;
                    }
                    if (data.nonces != null) {
                        message.nonces = data.nonces;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.contract_address != null) {
                        data.contract_address = this.contract_address;
                    }
                    if (this.deployer_address != null) {
                        data.deployer_address = this.deployer_address;
                    }
                    if (this.withdrawer_address != null) {
                        data.withdrawer_address = this.withdrawer_address;
                    }
                    if (this.nonces != null) {
                        data.nonces = this.nonces;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.contract_address.length)
                        writer.writeString(1, this.contract_address);
                    if (this.deployer_address.length)
                        writer.writeString(2, this.deployer_address);
                    if (this.withdrawer_address.length)
                        writer.writeString(3, this.withdrawer_address);
                    if (this.nonces.length)
                        writer.writePackedUint64(4, this.nonces);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRegisterFeeSplit();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.contract_address = reader.readString();
                                break;
                            case 2:
                                message.deployer_address = reader.readString();
                                break;
                            case 3:
                                message.withdrawer_address = reader.readString();
                                break;
                            case 4:
                                message.nonces = reader.readPackedUint64();
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
                    return MsgRegisterFeeSplit.deserialize(bytes);
                }
            }
            _MsgRegisterFeeSplit_one_of_decls = new WeakMap();
            v1.MsgRegisterFeeSplit = MsgRegisterFeeSplit;
            class MsgRegisterFeeSplitResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgRegisterFeeSplitResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgRegisterFeeSplitResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgRegisterFeeSplitResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRegisterFeeSplitResponse();
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
                    return MsgRegisterFeeSplitResponse.deserialize(bytes);
                }
            }
            _MsgRegisterFeeSplitResponse_one_of_decls = new WeakMap();
            v1.MsgRegisterFeeSplitResponse = MsgRegisterFeeSplitResponse;
            class MsgUpdateFeeSplit extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgUpdateFeeSplit_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgUpdateFeeSplit_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("contract_address" in data && data.contract_address != undefined) {
                            this.contract_address = data.contract_address;
                        }
                        if ("deployer_address" in data && data.deployer_address != undefined) {
                            this.deployer_address = data.deployer_address;
                        }
                        if ("withdrawer_address" in data && data.withdrawer_address != undefined) {
                            this.withdrawer_address = data.withdrawer_address;
                        }
                    }
                }
                get contract_address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set contract_address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get deployer_address() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set deployer_address(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get withdrawer_address() {
                    return pb_1.Message.getFieldWithDefault(this, 3, "");
                }
                set withdrawer_address(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgUpdateFeeSplit({});
                    if (data.contract_address != null) {
                        message.contract_address = data.contract_address;
                    }
                    if (data.deployer_address != null) {
                        message.deployer_address = data.deployer_address;
                    }
                    if (data.withdrawer_address != null) {
                        message.withdrawer_address = data.withdrawer_address;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.contract_address != null) {
                        data.contract_address = this.contract_address;
                    }
                    if (this.deployer_address != null) {
                        data.deployer_address = this.deployer_address;
                    }
                    if (this.withdrawer_address != null) {
                        data.withdrawer_address = this.withdrawer_address;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.contract_address.length)
                        writer.writeString(1, this.contract_address);
                    if (this.deployer_address.length)
                        writer.writeString(2, this.deployer_address);
                    if (this.withdrawer_address.length)
                        writer.writeString(3, this.withdrawer_address);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUpdateFeeSplit();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.contract_address = reader.readString();
                                break;
                            case 2:
                                message.deployer_address = reader.readString();
                                break;
                            case 3:
                                message.withdrawer_address = reader.readString();
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
                    return MsgUpdateFeeSplit.deserialize(bytes);
                }
            }
            _MsgUpdateFeeSplit_one_of_decls = new WeakMap();
            v1.MsgUpdateFeeSplit = MsgUpdateFeeSplit;
            class MsgUpdateFeeSplitResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgUpdateFeeSplitResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgUpdateFeeSplitResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgUpdateFeeSplitResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUpdateFeeSplitResponse();
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
                    return MsgUpdateFeeSplitResponse.deserialize(bytes);
                }
            }
            _MsgUpdateFeeSplitResponse_one_of_decls = new WeakMap();
            v1.MsgUpdateFeeSplitResponse = MsgUpdateFeeSplitResponse;
            class MsgCancelFeeSplit extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgCancelFeeSplit_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgCancelFeeSplit_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("contract_address" in data && data.contract_address != undefined) {
                            this.contract_address = data.contract_address;
                        }
                        if ("deployer_address" in data && data.deployer_address != undefined) {
                            this.deployer_address = data.deployer_address;
                        }
                    }
                }
                get contract_address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set contract_address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get deployer_address() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set deployer_address(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new MsgCancelFeeSplit({});
                    if (data.contract_address != null) {
                        message.contract_address = data.contract_address;
                    }
                    if (data.deployer_address != null) {
                        message.deployer_address = data.deployer_address;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.contract_address != null) {
                        data.contract_address = this.contract_address;
                    }
                    if (this.deployer_address != null) {
                        data.deployer_address = this.deployer_address;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.contract_address.length)
                        writer.writeString(1, this.contract_address);
                    if (this.deployer_address.length)
                        writer.writeString(2, this.deployer_address);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCancelFeeSplit();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.contract_address = reader.readString();
                                break;
                            case 2:
                                message.deployer_address = reader.readString();
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
                    return MsgCancelFeeSplit.deserialize(bytes);
                }
            }
            _MsgCancelFeeSplit_one_of_decls = new WeakMap();
            v1.MsgCancelFeeSplit = MsgCancelFeeSplit;
            class MsgCancelFeeSplitResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgCancelFeeSplitResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgCancelFeeSplitResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgCancelFeeSplitResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCancelFeeSplitResponse();
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
                    return MsgCancelFeeSplitResponse.deserialize(bytes);
                }
            }
            _MsgCancelFeeSplitResponse_one_of_decls = new WeakMap();
            v1.MsgCancelFeeSplitResponse = MsgCancelFeeSplitResponse;
            class UnimplementedMsgService {
            }
            UnimplementedMsgService.definition = {
                RegisterFeeSplit: {
                    path: "/evmos.feesplit.v1.Msg/RegisterFeeSplit",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgRegisterFeeSplit.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgRegisterFeeSplitResponse.deserialize(new Uint8Array(bytes))
                },
                UpdateFeeSplit: {
                    path: "/evmos.feesplit.v1.Msg/UpdateFeeSplit",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgUpdateFeeSplit.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgUpdateFeeSplitResponse.deserialize(new Uint8Array(bytes))
                },
                CancelFeeSplit: {
                    path: "/evmos.feesplit.v1.Msg/CancelFeeSplit",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgCancelFeeSplit.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgCancelFeeSplitResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1.UnimplementedMsgService = UnimplementedMsgService;
            class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.RegisterFeeSplit = (message, metadata, options, callback) => {
                        return super.RegisterFeeSplit(message, metadata, options, callback);
                    };
                    this.UpdateFeeSplit = (message, metadata, options, callback) => {
                        return super.UpdateFeeSplit(message, metadata, options, callback);
                    };
                    this.CancelFeeSplit = (message, metadata, options, callback) => {
                        return super.CancelFeeSplit(message, metadata, options, callback);
                    };
                }
            }
            v1.MsgClient = MsgClient;
        })(v1 = feesplit.v1 || (feesplit.v1 = {}));
    })(feesplit = evmos.feesplit || (evmos.feesplit = {}));
})(evmos = exports.evmos || (exports.evmos = {}));
//# sourceMappingURL=tx.js.map