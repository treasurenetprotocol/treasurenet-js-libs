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
const dependency_2 = __importStar(require("./../../base/v1beta1/coin"));
const dependency_3 = __importStar(require("./bank"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var bank;
    (function (bank) {
        var v1beta1;
        (function (v1beta1) {
            var _MsgSend_one_of_decls, _MsgSendResponse_one_of_decls, _MsgMultiSend_one_of_decls, _MsgMultiSendResponse_one_of_decls;
            class MsgSend extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgSend_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _MsgSend_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("from_address" in data && data.from_address != undefined) {
                            this.from_address = data.from_address;
                        }
                        if ("to_address" in data && data.to_address != undefined) {
                            this.to_address = data.to_address;
                        }
                        if ("amount" in data && data.amount != undefined) {
                            this.amount = data.amount;
                        }
                    }
                }
                get from_address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set from_address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get to_address() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set to_address(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get amount() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3);
                }
                set amount(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgSend({});
                    if (data.from_address != null) {
                        message.from_address = data.from_address;
                    }
                    if (data.to_address != null) {
                        message.to_address = data.to_address;
                    }
                    if (data.amount != null) {
                        message.amount = data.amount.map(item => dependency_2.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.from_address != null) {
                        data.from_address = this.from_address;
                    }
                    if (this.to_address != null) {
                        data.to_address = this.to_address;
                    }
                    if (this.amount != null) {
                        data.amount = this.amount.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.from_address.length)
                        writer.writeString(1, this.from_address);
                    if (this.to_address.length)
                        writer.writeString(2, this.to_address);
                    if (this.amount.length)
                        writer.writeRepeatedMessage(3, this.amount, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSend();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.from_address = reader.readString();
                                break;
                            case 2:
                                message.to_address = reader.readString();
                                break;
                            case 3:
                                reader.readMessage(message.amount, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin));
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
                    return MsgSend.deserialize(bytes);
                }
            }
            _MsgSend_one_of_decls = new WeakMap();
            v1beta1.MsgSend = MsgSend;
            class MsgSendResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgSendResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSendResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgSendResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSendResponse();
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
                    return MsgSendResponse.deserialize(bytes);
                }
            }
            _MsgSendResponse_one_of_decls = new WeakMap();
            v1beta1.MsgSendResponse = MsgSendResponse;
            class MsgMultiSend extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgMultiSend_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2], __classPrivateFieldGet(this, _MsgMultiSend_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("inputs" in data && data.inputs != undefined) {
                            this.inputs = data.inputs;
                        }
                        if ("outputs" in data && data.outputs != undefined) {
                            this.outputs = data.outputs;
                        }
                    }
                }
                get inputs() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.bank.v1beta1.Input, 1);
                }
                set inputs(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                get outputs() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.bank.v1beta1.Output, 2);
                }
                set outputs(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new MsgMultiSend({});
                    if (data.inputs != null) {
                        message.inputs = data.inputs.map(item => dependency_3.cosmos.bank.v1beta1.Input.fromObject(item));
                    }
                    if (data.outputs != null) {
                        message.outputs = data.outputs.map(item => dependency_3.cosmos.bank.v1beta1.Output.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.inputs != null) {
                        data.inputs = this.inputs.map((item) => item.toObject());
                    }
                    if (this.outputs != null) {
                        data.outputs = this.outputs.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.inputs.length)
                        writer.writeRepeatedMessage(1, this.inputs, (item) => item.serialize(writer));
                    if (this.outputs.length)
                        writer.writeRepeatedMessage(2, this.outputs, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgMultiSend();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.inputs, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.cosmos.bank.v1beta1.Input.deserialize(reader), dependency_3.cosmos.bank.v1beta1.Input));
                                break;
                            case 2:
                                reader.readMessage(message.outputs, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_3.cosmos.bank.v1beta1.Output.deserialize(reader), dependency_3.cosmos.bank.v1beta1.Output));
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
                    return MsgMultiSend.deserialize(bytes);
                }
            }
            _MsgMultiSend_one_of_decls = new WeakMap();
            v1beta1.MsgMultiSend = MsgMultiSend;
            class MsgMultiSendResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgMultiSendResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgMultiSendResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgMultiSendResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgMultiSendResponse();
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
                    return MsgMultiSendResponse.deserialize(bytes);
                }
            }
            _MsgMultiSendResponse_one_of_decls = new WeakMap();
            v1beta1.MsgMultiSendResponse = MsgMultiSendResponse;
            class UnimplementedMsgService {
            }
            UnimplementedMsgService.definition = {
                Send: {
                    path: "/cosmos.bank.v1beta1.Msg/Send",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgSend.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgSendResponse.deserialize(new Uint8Array(bytes))
                },
                MultiSend: {
                    path: "/cosmos.bank.v1beta1.Msg/MultiSend",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgMultiSend.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgMultiSendResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1beta1.UnimplementedMsgService = UnimplementedMsgService;
            class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.Send = (message, metadata, options, callback) => {
                        return super.Send(message, metadata, options, callback);
                    };
                    this.MultiSend = (message, metadata, options, callback) => {
                        return super.MultiSend(message, metadata, options, callback);
                    };
                }
            }
            v1beta1.MsgClient = MsgClient;
        })(v1beta1 = bank.v1beta1 || (bank.v1beta1 = {}));
    })(bank = cosmos.bank || (cosmos.bank = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=tx.js.map