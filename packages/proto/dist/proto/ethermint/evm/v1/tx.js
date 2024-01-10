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
exports.ethermint = void 0;
const dependency_3 = __importStar(require("./../../../google/protobuf/any"));
const dependency_5 = __importStar(require("./evm"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var ethermint;
(function (ethermint) {
    var evm;
    (function (evm) {
        var v1;
        (function (v1) {
            var _MsgEthereumTx_one_of_decls, _LegacyTx_one_of_decls, _AccessListTx_one_of_decls, _DynamicFeeTx_one_of_decls, _ExtensionOptionsEthereumTx_one_of_decls, _MsgEthereumTxResponse_one_of_decls;
            class MsgEthereumTx extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgEthereumTx_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgEthereumTx_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("data" in data && data.data != undefined) {
                            this.data = data.data;
                        }
                        if ("size" in data && data.size != undefined) {
                            this.size = data.size;
                        }
                        if ("hash" in data && data.hash != undefined) {
                            this.hash = data.hash;
                        }
                        if ("from" in data && data.from != undefined) {
                            this.from = data.from;
                        }
                    }
                }
                get data() {
                    return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Any, 1);
                }
                set data(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_data() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                get size() {
                    return pb_1.Message.getFieldWithDefault(this, 2, 0);
                }
                set size(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get hash() {
                    return pb_1.Message.getFieldWithDefault(this, 3, "");
                }
                set hash(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                get from() {
                    return pb_1.Message.getFieldWithDefault(this, 4, "");
                }
                set from(value) {
                    pb_1.Message.setField(this, 4, value);
                }
                static fromObject(data) {
                    const message = new MsgEthereumTx({});
                    if (data.data != null) {
                        message.data = dependency_3.google.protobuf.Any.fromObject(data.data);
                    }
                    if (data.size != null) {
                        message.size = data.size;
                    }
                    if (data.hash != null) {
                        message.hash = data.hash;
                    }
                    if (data.from != null) {
                        message.from = data.from;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.data != null) {
                        data.data = this.data.toObject();
                    }
                    if (this.size != null) {
                        data.size = this.size;
                    }
                    if (this.hash != null) {
                        data.hash = this.hash;
                    }
                    if (this.from != null) {
                        data.from = this.from;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_data)
                        writer.writeMessage(1, this.data, () => this.data.serialize(writer));
                    if (this.size != 0)
                        writer.writeDouble(2, this.size);
                    if (this.hash.length)
                        writer.writeString(3, this.hash);
                    if (this.from.length)
                        writer.writeString(4, this.from);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgEthereumTx();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.data, () => message.data = dependency_3.google.protobuf.Any.deserialize(reader));
                                break;
                            case 2:
                                message.size = reader.readDouble();
                                break;
                            case 3:
                                message.hash = reader.readString();
                                break;
                            case 4:
                                message.from = reader.readString();
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
                    return MsgEthereumTx.deserialize(bytes);
                }
            }
            _MsgEthereumTx_one_of_decls = new WeakMap();
            v1.MsgEthereumTx = MsgEthereumTx;
            class LegacyTx extends pb_1.Message {
                constructor(data) {
                    super();
                    _LegacyTx_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _LegacyTx_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("nonce" in data && data.nonce != undefined) {
                            this.nonce = data.nonce;
                        }
                        if ("gas_price" in data && data.gas_price != undefined) {
                            this.gas_price = data.gas_price;
                        }
                        if ("gas" in data && data.gas != undefined) {
                            this.gas = data.gas;
                        }
                        if ("to" in data && data.to != undefined) {
                            this.to = data.to;
                        }
                        if ("value" in data && data.value != undefined) {
                            this.value = data.value;
                        }
                        if ("data" in data && data.data != undefined) {
                            this.data = data.data;
                        }
                        if ("v" in data && data.v != undefined) {
                            this.v = data.v;
                        }
                        if ("r" in data && data.r != undefined) {
                            this.r = data.r;
                        }
                        if ("s" in data && data.s != undefined) {
                            this.s = data.s;
                        }
                    }
                }
                get nonce() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set nonce(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get gas_price() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set gas_price(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get gas() {
                    return pb_1.Message.getFieldWithDefault(this, 3, 0);
                }
                set gas(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                get to() {
                    return pb_1.Message.getFieldWithDefault(this, 4, "");
                }
                set to(value) {
                    pb_1.Message.setField(this, 4, value);
                }
                get value() {
                    return pb_1.Message.getFieldWithDefault(this, 5, "");
                }
                set value(value) {
                    pb_1.Message.setField(this, 5, value);
                }
                get data() {
                    return pb_1.Message.getFieldWithDefault(this, 6, new Uint8Array(0));
                }
                set data(value) {
                    pb_1.Message.setField(this, 6, value);
                }
                get v() {
                    return pb_1.Message.getFieldWithDefault(this, 7, new Uint8Array(0));
                }
                set v(value) {
                    pb_1.Message.setField(this, 7, value);
                }
                get r() {
                    return pb_1.Message.getFieldWithDefault(this, 8, new Uint8Array(0));
                }
                set r(value) {
                    pb_1.Message.setField(this, 8, value);
                }
                get s() {
                    return pb_1.Message.getFieldWithDefault(this, 9, new Uint8Array(0));
                }
                set s(value) {
                    pb_1.Message.setField(this, 9, value);
                }
                static fromObject(data) {
                    const message = new LegacyTx({});
                    if (data.nonce != null) {
                        message.nonce = data.nonce;
                    }
                    if (data.gas_price != null) {
                        message.gas_price = data.gas_price;
                    }
                    if (data.gas != null) {
                        message.gas = data.gas;
                    }
                    if (data.to != null) {
                        message.to = data.to;
                    }
                    if (data.value != null) {
                        message.value = data.value;
                    }
                    if (data.data != null) {
                        message.data = data.data;
                    }
                    if (data.v != null) {
                        message.v = data.v;
                    }
                    if (data.r != null) {
                        message.r = data.r;
                    }
                    if (data.s != null) {
                        message.s = data.s;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.nonce != null) {
                        data.nonce = this.nonce;
                    }
                    if (this.gas_price != null) {
                        data.gas_price = this.gas_price;
                    }
                    if (this.gas != null) {
                        data.gas = this.gas;
                    }
                    if (this.to != null) {
                        data.to = this.to;
                    }
                    if (this.value != null) {
                        data.value = this.value;
                    }
                    if (this.data != null) {
                        data.data = this.data;
                    }
                    if (this.v != null) {
                        data.v = this.v;
                    }
                    if (this.r != null) {
                        data.r = this.r;
                    }
                    if (this.s != null) {
                        data.s = this.s;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.nonce != 0)
                        writer.writeUint64(1, this.nonce);
                    if (this.gas_price.length)
                        writer.writeString(2, this.gas_price);
                    if (this.gas != 0)
                        writer.writeUint64(3, this.gas);
                    if (this.to.length)
                        writer.writeString(4, this.to);
                    if (this.value.length)
                        writer.writeString(5, this.value);
                    if (this.data.length)
                        writer.writeBytes(6, this.data);
                    if (this.v.length)
                        writer.writeBytes(7, this.v);
                    if (this.r.length)
                        writer.writeBytes(8, this.r);
                    if (this.s.length)
                        writer.writeBytes(9, this.s);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LegacyTx();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.nonce = reader.readUint64();
                                break;
                            case 2:
                                message.gas_price = reader.readString();
                                break;
                            case 3:
                                message.gas = reader.readUint64();
                                break;
                            case 4:
                                message.to = reader.readString();
                                break;
                            case 5:
                                message.value = reader.readString();
                                break;
                            case 6:
                                message.data = reader.readBytes();
                                break;
                            case 7:
                                message.v = reader.readBytes();
                                break;
                            case 8:
                                message.r = reader.readBytes();
                                break;
                            case 9:
                                message.s = reader.readBytes();
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
                    return LegacyTx.deserialize(bytes);
                }
            }
            _LegacyTx_one_of_decls = new WeakMap();
            v1.LegacyTx = LegacyTx;
            class AccessListTx extends pb_1.Message {
                constructor(data) {
                    super();
                    _AccessListTx_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8], __classPrivateFieldGet(this, _AccessListTx_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("chain_id" in data && data.chain_id != undefined) {
                            this.chain_id = data.chain_id;
                        }
                        if ("nonce" in data && data.nonce != undefined) {
                            this.nonce = data.nonce;
                        }
                        if ("gas_price" in data && data.gas_price != undefined) {
                            this.gas_price = data.gas_price;
                        }
                        if ("gas" in data && data.gas != undefined) {
                            this.gas = data.gas;
                        }
                        if ("to" in data && data.to != undefined) {
                            this.to = data.to;
                        }
                        if ("value" in data && data.value != undefined) {
                            this.value = data.value;
                        }
                        if ("data" in data && data.data != undefined) {
                            this.data = data.data;
                        }
                        if ("accesses" in data && data.accesses != undefined) {
                            this.accesses = data.accesses;
                        }
                        if ("v" in data && data.v != undefined) {
                            this.v = data.v;
                        }
                        if ("r" in data && data.r != undefined) {
                            this.r = data.r;
                        }
                        if ("s" in data && data.s != undefined) {
                            this.s = data.s;
                        }
                    }
                }
                get chain_id() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set chain_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get nonce() {
                    return pb_1.Message.getFieldWithDefault(this, 2, 0);
                }
                set nonce(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get gas_price() {
                    return pb_1.Message.getFieldWithDefault(this, 3, "");
                }
                set gas_price(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                get gas() {
                    return pb_1.Message.getFieldWithDefault(this, 4, 0);
                }
                set gas(value) {
                    pb_1.Message.setField(this, 4, value);
                }
                get to() {
                    return pb_1.Message.getFieldWithDefault(this, 5, "");
                }
                set to(value) {
                    pb_1.Message.setField(this, 5, value);
                }
                get value() {
                    return pb_1.Message.getFieldWithDefault(this, 6, "");
                }
                set value(value) {
                    pb_1.Message.setField(this, 6, value);
                }
                get data() {
                    return pb_1.Message.getFieldWithDefault(this, 7, new Uint8Array(0));
                }
                set data(value) {
                    pb_1.Message.setField(this, 7, value);
                }
                get accesses() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_5.ethermint.evm.v1.AccessTuple, 8);
                }
                set accesses(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 8, value);
                }
                get v() {
                    return pb_1.Message.getFieldWithDefault(this, 9, new Uint8Array(0));
                }
                set v(value) {
                    pb_1.Message.setField(this, 9, value);
                }
                get r() {
                    return pb_1.Message.getFieldWithDefault(this, 10, new Uint8Array(0));
                }
                set r(value) {
                    pb_1.Message.setField(this, 10, value);
                }
                get s() {
                    return pb_1.Message.getFieldWithDefault(this, 11, new Uint8Array(0));
                }
                set s(value) {
                    pb_1.Message.setField(this, 11, value);
                }
                static fromObject(data) {
                    const message = new AccessListTx({});
                    if (data.chain_id != null) {
                        message.chain_id = data.chain_id;
                    }
                    if (data.nonce != null) {
                        message.nonce = data.nonce;
                    }
                    if (data.gas_price != null) {
                        message.gas_price = data.gas_price;
                    }
                    if (data.gas != null) {
                        message.gas = data.gas;
                    }
                    if (data.to != null) {
                        message.to = data.to;
                    }
                    if (data.value != null) {
                        message.value = data.value;
                    }
                    if (data.data != null) {
                        message.data = data.data;
                    }
                    if (data.accesses != null) {
                        message.accesses = data.accesses.map(item => dependency_5.ethermint.evm.v1.AccessTuple.fromObject(item));
                    }
                    if (data.v != null) {
                        message.v = data.v;
                    }
                    if (data.r != null) {
                        message.r = data.r;
                    }
                    if (data.s != null) {
                        message.s = data.s;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.chain_id != null) {
                        data.chain_id = this.chain_id;
                    }
                    if (this.nonce != null) {
                        data.nonce = this.nonce;
                    }
                    if (this.gas_price != null) {
                        data.gas_price = this.gas_price;
                    }
                    if (this.gas != null) {
                        data.gas = this.gas;
                    }
                    if (this.to != null) {
                        data.to = this.to;
                    }
                    if (this.value != null) {
                        data.value = this.value;
                    }
                    if (this.data != null) {
                        data.data = this.data;
                    }
                    if (this.accesses != null) {
                        data.accesses = this.accesses.map((item) => item.toObject());
                    }
                    if (this.v != null) {
                        data.v = this.v;
                    }
                    if (this.r != null) {
                        data.r = this.r;
                    }
                    if (this.s != null) {
                        data.s = this.s;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.chain_id.length)
                        writer.writeString(1, this.chain_id);
                    if (this.nonce != 0)
                        writer.writeUint64(2, this.nonce);
                    if (this.gas_price.length)
                        writer.writeString(3, this.gas_price);
                    if (this.gas != 0)
                        writer.writeUint64(4, this.gas);
                    if (this.to.length)
                        writer.writeString(5, this.to);
                    if (this.value.length)
                        writer.writeString(6, this.value);
                    if (this.data.length)
                        writer.writeBytes(7, this.data);
                    if (this.accesses.length)
                        writer.writeRepeatedMessage(8, this.accesses, (item) => item.serialize(writer));
                    if (this.v.length)
                        writer.writeBytes(9, this.v);
                    if (this.r.length)
                        writer.writeBytes(10, this.r);
                    if (this.s.length)
                        writer.writeBytes(11, this.s);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AccessListTx();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.chain_id = reader.readString();
                                break;
                            case 2:
                                message.nonce = reader.readUint64();
                                break;
                            case 3:
                                message.gas_price = reader.readString();
                                break;
                            case 4:
                                message.gas = reader.readUint64();
                                break;
                            case 5:
                                message.to = reader.readString();
                                break;
                            case 6:
                                message.value = reader.readString();
                                break;
                            case 7:
                                message.data = reader.readBytes();
                                break;
                            case 8:
                                reader.readMessage(message.accesses, () => pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_5.ethermint.evm.v1.AccessTuple.deserialize(reader), dependency_5.ethermint.evm.v1.AccessTuple));
                                break;
                            case 9:
                                message.v = reader.readBytes();
                                break;
                            case 10:
                                message.r = reader.readBytes();
                                break;
                            case 11:
                                message.s = reader.readBytes();
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
                    return AccessListTx.deserialize(bytes);
                }
            }
            _AccessListTx_one_of_decls = new WeakMap();
            v1.AccessListTx = AccessListTx;
            class DynamicFeeTx extends pb_1.Message {
                constructor(data) {
                    super();
                    _DynamicFeeTx_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [9], __classPrivateFieldGet(this, _DynamicFeeTx_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("chain_id" in data && data.chain_id != undefined) {
                            this.chain_id = data.chain_id;
                        }
                        if ("nonce" in data && data.nonce != undefined) {
                            this.nonce = data.nonce;
                        }
                        if ("gas_tip_cap" in data && data.gas_tip_cap != undefined) {
                            this.gas_tip_cap = data.gas_tip_cap;
                        }
                        if ("gas_fee_cap" in data && data.gas_fee_cap != undefined) {
                            this.gas_fee_cap = data.gas_fee_cap;
                        }
                        if ("gas" in data && data.gas != undefined) {
                            this.gas = data.gas;
                        }
                        if ("to" in data && data.to != undefined) {
                            this.to = data.to;
                        }
                        if ("value" in data && data.value != undefined) {
                            this.value = data.value;
                        }
                        if ("data" in data && data.data != undefined) {
                            this.data = data.data;
                        }
                        if ("accesses" in data && data.accesses != undefined) {
                            this.accesses = data.accesses;
                        }
                        if ("v" in data && data.v != undefined) {
                            this.v = data.v;
                        }
                        if ("r" in data && data.r != undefined) {
                            this.r = data.r;
                        }
                        if ("s" in data && data.s != undefined) {
                            this.s = data.s;
                        }
                    }
                }
                get chain_id() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set chain_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get nonce() {
                    return pb_1.Message.getFieldWithDefault(this, 2, 0);
                }
                set nonce(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get gas_tip_cap() {
                    return pb_1.Message.getFieldWithDefault(this, 3, "");
                }
                set gas_tip_cap(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                get gas_fee_cap() {
                    return pb_1.Message.getFieldWithDefault(this, 4, "");
                }
                set gas_fee_cap(value) {
                    pb_1.Message.setField(this, 4, value);
                }
                get gas() {
                    return pb_1.Message.getFieldWithDefault(this, 5, 0);
                }
                set gas(value) {
                    pb_1.Message.setField(this, 5, value);
                }
                get to() {
                    return pb_1.Message.getFieldWithDefault(this, 6, "");
                }
                set to(value) {
                    pb_1.Message.setField(this, 6, value);
                }
                get value() {
                    return pb_1.Message.getFieldWithDefault(this, 7, "");
                }
                set value(value) {
                    pb_1.Message.setField(this, 7, value);
                }
                get data() {
                    return pb_1.Message.getFieldWithDefault(this, 8, new Uint8Array(0));
                }
                set data(value) {
                    pb_1.Message.setField(this, 8, value);
                }
                get accesses() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_5.ethermint.evm.v1.AccessTuple, 9);
                }
                set accesses(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 9, value);
                }
                get v() {
                    return pb_1.Message.getFieldWithDefault(this, 10, new Uint8Array(0));
                }
                set v(value) {
                    pb_1.Message.setField(this, 10, value);
                }
                get r() {
                    return pb_1.Message.getFieldWithDefault(this, 11, new Uint8Array(0));
                }
                set r(value) {
                    pb_1.Message.setField(this, 11, value);
                }
                get s() {
                    return pb_1.Message.getFieldWithDefault(this, 12, new Uint8Array(0));
                }
                set s(value) {
                    pb_1.Message.setField(this, 12, value);
                }
                static fromObject(data) {
                    const message = new DynamicFeeTx({});
                    if (data.chain_id != null) {
                        message.chain_id = data.chain_id;
                    }
                    if (data.nonce != null) {
                        message.nonce = data.nonce;
                    }
                    if (data.gas_tip_cap != null) {
                        message.gas_tip_cap = data.gas_tip_cap;
                    }
                    if (data.gas_fee_cap != null) {
                        message.gas_fee_cap = data.gas_fee_cap;
                    }
                    if (data.gas != null) {
                        message.gas = data.gas;
                    }
                    if (data.to != null) {
                        message.to = data.to;
                    }
                    if (data.value != null) {
                        message.value = data.value;
                    }
                    if (data.data != null) {
                        message.data = data.data;
                    }
                    if (data.accesses != null) {
                        message.accesses = data.accesses.map(item => dependency_5.ethermint.evm.v1.AccessTuple.fromObject(item));
                    }
                    if (data.v != null) {
                        message.v = data.v;
                    }
                    if (data.r != null) {
                        message.r = data.r;
                    }
                    if (data.s != null) {
                        message.s = data.s;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.chain_id != null) {
                        data.chain_id = this.chain_id;
                    }
                    if (this.nonce != null) {
                        data.nonce = this.nonce;
                    }
                    if (this.gas_tip_cap != null) {
                        data.gas_tip_cap = this.gas_tip_cap;
                    }
                    if (this.gas_fee_cap != null) {
                        data.gas_fee_cap = this.gas_fee_cap;
                    }
                    if (this.gas != null) {
                        data.gas = this.gas;
                    }
                    if (this.to != null) {
                        data.to = this.to;
                    }
                    if (this.value != null) {
                        data.value = this.value;
                    }
                    if (this.data != null) {
                        data.data = this.data;
                    }
                    if (this.accesses != null) {
                        data.accesses = this.accesses.map((item) => item.toObject());
                    }
                    if (this.v != null) {
                        data.v = this.v;
                    }
                    if (this.r != null) {
                        data.r = this.r;
                    }
                    if (this.s != null) {
                        data.s = this.s;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.chain_id.length)
                        writer.writeString(1, this.chain_id);
                    if (this.nonce != 0)
                        writer.writeUint64(2, this.nonce);
                    if (this.gas_tip_cap.length)
                        writer.writeString(3, this.gas_tip_cap);
                    if (this.gas_fee_cap.length)
                        writer.writeString(4, this.gas_fee_cap);
                    if (this.gas != 0)
                        writer.writeUint64(5, this.gas);
                    if (this.to.length)
                        writer.writeString(6, this.to);
                    if (this.value.length)
                        writer.writeString(7, this.value);
                    if (this.data.length)
                        writer.writeBytes(8, this.data);
                    if (this.accesses.length)
                        writer.writeRepeatedMessage(9, this.accesses, (item) => item.serialize(writer));
                    if (this.v.length)
                        writer.writeBytes(10, this.v);
                    if (this.r.length)
                        writer.writeBytes(11, this.r);
                    if (this.s.length)
                        writer.writeBytes(12, this.s);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DynamicFeeTx();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.chain_id = reader.readString();
                                break;
                            case 2:
                                message.nonce = reader.readUint64();
                                break;
                            case 3:
                                message.gas_tip_cap = reader.readString();
                                break;
                            case 4:
                                message.gas_fee_cap = reader.readString();
                                break;
                            case 5:
                                message.gas = reader.readUint64();
                                break;
                            case 6:
                                message.to = reader.readString();
                                break;
                            case 7:
                                message.value = reader.readString();
                                break;
                            case 8:
                                message.data = reader.readBytes();
                                break;
                            case 9:
                                reader.readMessage(message.accesses, () => pb_1.Message.addToRepeatedWrapperField(message, 9, dependency_5.ethermint.evm.v1.AccessTuple.deserialize(reader), dependency_5.ethermint.evm.v1.AccessTuple));
                                break;
                            case 10:
                                message.v = reader.readBytes();
                                break;
                            case 11:
                                message.r = reader.readBytes();
                                break;
                            case 12:
                                message.s = reader.readBytes();
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
                    return DynamicFeeTx.deserialize(bytes);
                }
            }
            _DynamicFeeTx_one_of_decls = new WeakMap();
            v1.DynamicFeeTx = DynamicFeeTx;
            class ExtensionOptionsEthereumTx extends pb_1.Message {
                constructor(data) {
                    super();
                    _ExtensionOptionsEthereumTx_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ExtensionOptionsEthereumTx_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new ExtensionOptionsEthereumTx({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ExtensionOptionsEthereumTx();
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
                    return ExtensionOptionsEthereumTx.deserialize(bytes);
                }
            }
            _ExtensionOptionsEthereumTx_one_of_decls = new WeakMap();
            v1.ExtensionOptionsEthereumTx = ExtensionOptionsEthereumTx;
            class MsgEthereumTxResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgEthereumTxResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _MsgEthereumTxResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("hash" in data && data.hash != undefined) {
                            this.hash = data.hash;
                        }
                        if ("logs" in data && data.logs != undefined) {
                            this.logs = data.logs;
                        }
                        if ("ret" in data && data.ret != undefined) {
                            this.ret = data.ret;
                        }
                        if ("vm_error" in data && data.vm_error != undefined) {
                            this.vm_error = data.vm_error;
                        }
                        if ("gas_used" in data && data.gas_used != undefined) {
                            this.gas_used = data.gas_used;
                        }
                    }
                }
                get hash() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set hash(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get logs() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_5.ethermint.evm.v1.Log, 2);
                }
                set logs(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                }
                get ret() {
                    return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
                }
                set ret(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                get vm_error() {
                    return pb_1.Message.getFieldWithDefault(this, 4, "");
                }
                set vm_error(value) {
                    pb_1.Message.setField(this, 4, value);
                }
                get gas_used() {
                    return pb_1.Message.getFieldWithDefault(this, 5, 0);
                }
                set gas_used(value) {
                    pb_1.Message.setField(this, 5, value);
                }
                static fromObject(data) {
                    const message = new MsgEthereumTxResponse({});
                    if (data.hash != null) {
                        message.hash = data.hash;
                    }
                    if (data.logs != null) {
                        message.logs = data.logs.map(item => dependency_5.ethermint.evm.v1.Log.fromObject(item));
                    }
                    if (data.ret != null) {
                        message.ret = data.ret;
                    }
                    if (data.vm_error != null) {
                        message.vm_error = data.vm_error;
                    }
                    if (data.gas_used != null) {
                        message.gas_used = data.gas_used;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.hash != null) {
                        data.hash = this.hash;
                    }
                    if (this.logs != null) {
                        data.logs = this.logs.map((item) => item.toObject());
                    }
                    if (this.ret != null) {
                        data.ret = this.ret;
                    }
                    if (this.vm_error != null) {
                        data.vm_error = this.vm_error;
                    }
                    if (this.gas_used != null) {
                        data.gas_used = this.gas_used;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.hash.length)
                        writer.writeString(1, this.hash);
                    if (this.logs.length)
                        writer.writeRepeatedMessage(2, this.logs, (item) => item.serialize(writer));
                    if (this.ret.length)
                        writer.writeBytes(3, this.ret);
                    if (this.vm_error.length)
                        writer.writeString(4, this.vm_error);
                    if (this.gas_used != 0)
                        writer.writeUint64(5, this.gas_used);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgEthereumTxResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.hash = reader.readString();
                                break;
                            case 2:
                                reader.readMessage(message.logs, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_5.ethermint.evm.v1.Log.deserialize(reader), dependency_5.ethermint.evm.v1.Log));
                                break;
                            case 3:
                                message.ret = reader.readBytes();
                                break;
                            case 4:
                                message.vm_error = reader.readString();
                                break;
                            case 5:
                                message.gas_used = reader.readUint64();
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
                    return MsgEthereumTxResponse.deserialize(bytes);
                }
            }
            _MsgEthereumTxResponse_one_of_decls = new WeakMap();
            v1.MsgEthereumTxResponse = MsgEthereumTxResponse;
            class UnimplementedMsgService {
            }
            UnimplementedMsgService.definition = {
                EthereumTx: {
                    path: "/ethermint.evm.v1.Msg/EthereumTx",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgEthereumTx.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgEthereumTxResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1.UnimplementedMsgService = UnimplementedMsgService;
            class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.EthereumTx = (message, metadata, options, callback) => {
                        return super.EthereumTx(message, metadata, options, callback);
                    };
                }
            }
            v1.MsgClient = MsgClient;
        })(v1 = evm.v1 || (evm.v1 = {}));
    })(evm = ethermint.evm || (ethermint.evm = {}));
})(ethermint = exports.ethermint || (exports.ethermint = {}));
//# sourceMappingURL=tx.js.map