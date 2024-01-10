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
const dependency_2 = __importStar(require("./../../../cosmos/base/query/v1beta1/pagination"));
const dependency_4 = __importStar(require("./evm"));
const dependency_5 = __importStar(require("./tx"));
const dependency_6 = __importStar(require("./../../../google/protobuf/timestamp"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var ethermint;
(function (ethermint) {
    var evm;
    (function (evm) {
        var v1;
        (function (v1) {
            var _QueryAccountRequest_one_of_decls, _QueryAccountResponse_one_of_decls, _QueryCosmosAccountRequest_one_of_decls, _QueryCosmosAccountResponse_one_of_decls, _QueryValidatorAccountRequest_one_of_decls, _QueryValidatorAccountResponse_one_of_decls, _QueryBalanceRequest_one_of_decls, _QueryBalanceResponse_one_of_decls, _QueryStorageRequest_one_of_decls, _QueryStorageResponse_one_of_decls, _QueryCodeRequest_one_of_decls, _QueryCodeResponse_one_of_decls, _QueryTxLogsRequest_one_of_decls, _QueryTxLogsResponse_one_of_decls, _QueryParamsRequest_one_of_decls, _QueryParamsResponse_one_of_decls, _EthCallRequest_one_of_decls, _EstimateGasResponse_one_of_decls, _QueryTraceTxRequest_one_of_decls, _QueryTraceTxResponse_one_of_decls, _QueryTraceBlockRequest_one_of_decls, _QueryTraceBlockResponse_one_of_decls, _QueryBaseFeeRequest_one_of_decls, _QueryBaseFeeResponse_one_of_decls;
            class QueryAccountRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAccountRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryAccountRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("address" in data && data.address != undefined) {
                            this.address = data.address;
                        }
                    }
                }
                get address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryAccountRequest({});
                    if (data.address != null) {
                        message.address = data.address;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.address != null) {
                        data.address = this.address;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.address.length)
                        writer.writeString(1, this.address);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAccountRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.address = reader.readString();
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
                    return QueryAccountRequest.deserialize(bytes);
                }
            }
            _QueryAccountRequest_one_of_decls = new WeakMap();
            v1.QueryAccountRequest = QueryAccountRequest;
            class QueryAccountResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAccountResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryAccountResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("balance" in data && data.balance != undefined) {
                            this.balance = data.balance;
                        }
                        if ("code_hash" in data && data.code_hash != undefined) {
                            this.code_hash = data.code_hash;
                        }
                        if ("nonce" in data && data.nonce != undefined) {
                            this.nonce = data.nonce;
                        }
                    }
                }
                get balance() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set balance(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get code_hash() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set code_hash(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get nonce() {
                    return pb_1.Message.getFieldWithDefault(this, 3, 0);
                }
                set nonce(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new QueryAccountResponse({});
                    if (data.balance != null) {
                        message.balance = data.balance;
                    }
                    if (data.code_hash != null) {
                        message.code_hash = data.code_hash;
                    }
                    if (data.nonce != null) {
                        message.nonce = data.nonce;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.balance != null) {
                        data.balance = this.balance;
                    }
                    if (this.code_hash != null) {
                        data.code_hash = this.code_hash;
                    }
                    if (this.nonce != null) {
                        data.nonce = this.nonce;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.balance.length)
                        writer.writeString(1, this.balance);
                    if (this.code_hash.length)
                        writer.writeString(2, this.code_hash);
                    if (this.nonce != 0)
                        writer.writeUint64(3, this.nonce);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAccountResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.balance = reader.readString();
                                break;
                            case 2:
                                message.code_hash = reader.readString();
                                break;
                            case 3:
                                message.nonce = reader.readUint64();
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
                    return QueryAccountResponse.deserialize(bytes);
                }
            }
            _QueryAccountResponse_one_of_decls = new WeakMap();
            v1.QueryAccountResponse = QueryAccountResponse;
            class QueryCosmosAccountRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryCosmosAccountRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryCosmosAccountRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("address" in data && data.address != undefined) {
                            this.address = data.address;
                        }
                    }
                }
                get address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryCosmosAccountRequest({});
                    if (data.address != null) {
                        message.address = data.address;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.address != null) {
                        data.address = this.address;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.address.length)
                        writer.writeString(1, this.address);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCosmosAccountRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.address = reader.readString();
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
                    return QueryCosmosAccountRequest.deserialize(bytes);
                }
            }
            _QueryCosmosAccountRequest_one_of_decls = new WeakMap();
            v1.QueryCosmosAccountRequest = QueryCosmosAccountRequest;
            class QueryCosmosAccountResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryCosmosAccountResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryCosmosAccountResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("cosmos_address" in data && data.cosmos_address != undefined) {
                            this.cosmos_address = data.cosmos_address;
                        }
                        if ("sequence" in data && data.sequence != undefined) {
                            this.sequence = data.sequence;
                        }
                        if ("account_number" in data && data.account_number != undefined) {
                            this.account_number = data.account_number;
                        }
                    }
                }
                get cosmos_address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set cosmos_address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get sequence() {
                    return pb_1.Message.getFieldWithDefault(this, 2, 0);
                }
                set sequence(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get account_number() {
                    return pb_1.Message.getFieldWithDefault(this, 3, 0);
                }
                set account_number(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new QueryCosmosAccountResponse({});
                    if (data.cosmos_address != null) {
                        message.cosmos_address = data.cosmos_address;
                    }
                    if (data.sequence != null) {
                        message.sequence = data.sequence;
                    }
                    if (data.account_number != null) {
                        message.account_number = data.account_number;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.cosmos_address != null) {
                        data.cosmos_address = this.cosmos_address;
                    }
                    if (this.sequence != null) {
                        data.sequence = this.sequence;
                    }
                    if (this.account_number != null) {
                        data.account_number = this.account_number;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.cosmos_address.length)
                        writer.writeString(1, this.cosmos_address);
                    if (this.sequence != 0)
                        writer.writeUint64(2, this.sequence);
                    if (this.account_number != 0)
                        writer.writeUint64(3, this.account_number);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCosmosAccountResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.cosmos_address = reader.readString();
                                break;
                            case 2:
                                message.sequence = reader.readUint64();
                                break;
                            case 3:
                                message.account_number = reader.readUint64();
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
                    return QueryCosmosAccountResponse.deserialize(bytes);
                }
            }
            _QueryCosmosAccountResponse_one_of_decls = new WeakMap();
            v1.QueryCosmosAccountResponse = QueryCosmosAccountResponse;
            class QueryValidatorAccountRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryValidatorAccountRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryValidatorAccountRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("cons_address" in data && data.cons_address != undefined) {
                            this.cons_address = data.cons_address;
                        }
                    }
                }
                get cons_address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set cons_address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryValidatorAccountRequest({});
                    if (data.cons_address != null) {
                        message.cons_address = data.cons_address;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.cons_address != null) {
                        data.cons_address = this.cons_address;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.cons_address.length)
                        writer.writeString(1, this.cons_address);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValidatorAccountRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.cons_address = reader.readString();
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
                    return QueryValidatorAccountRequest.deserialize(bytes);
                }
            }
            _QueryValidatorAccountRequest_one_of_decls = new WeakMap();
            v1.QueryValidatorAccountRequest = QueryValidatorAccountRequest;
            class QueryValidatorAccountResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryValidatorAccountResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryValidatorAccountResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("account_address" in data && data.account_address != undefined) {
                            this.account_address = data.account_address;
                        }
                        if ("sequence" in data && data.sequence != undefined) {
                            this.sequence = data.sequence;
                        }
                        if ("account_number" in data && data.account_number != undefined) {
                            this.account_number = data.account_number;
                        }
                    }
                }
                get account_address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set account_address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get sequence() {
                    return pb_1.Message.getFieldWithDefault(this, 2, 0);
                }
                set sequence(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get account_number() {
                    return pb_1.Message.getFieldWithDefault(this, 3, 0);
                }
                set account_number(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new QueryValidatorAccountResponse({});
                    if (data.account_address != null) {
                        message.account_address = data.account_address;
                    }
                    if (data.sequence != null) {
                        message.sequence = data.sequence;
                    }
                    if (data.account_number != null) {
                        message.account_number = data.account_number;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.account_address != null) {
                        data.account_address = this.account_address;
                    }
                    if (this.sequence != null) {
                        data.sequence = this.sequence;
                    }
                    if (this.account_number != null) {
                        data.account_number = this.account_number;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.account_address.length)
                        writer.writeString(1, this.account_address);
                    if (this.sequence != 0)
                        writer.writeUint64(2, this.sequence);
                    if (this.account_number != 0)
                        writer.writeUint64(3, this.account_number);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValidatorAccountResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.account_address = reader.readString();
                                break;
                            case 2:
                                message.sequence = reader.readUint64();
                                break;
                            case 3:
                                message.account_number = reader.readUint64();
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
                    return QueryValidatorAccountResponse.deserialize(bytes);
                }
            }
            _QueryValidatorAccountResponse_one_of_decls = new WeakMap();
            v1.QueryValidatorAccountResponse = QueryValidatorAccountResponse;
            class QueryBalanceRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryBalanceRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryBalanceRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("address" in data && data.address != undefined) {
                            this.address = data.address;
                        }
                    }
                }
                get address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryBalanceRequest({});
                    if (data.address != null) {
                        message.address = data.address;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.address != null) {
                        data.address = this.address;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.address.length)
                        writer.writeString(1, this.address);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBalanceRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.address = reader.readString();
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
                    return QueryBalanceRequest.deserialize(bytes);
                }
            }
            _QueryBalanceRequest_one_of_decls = new WeakMap();
            v1.QueryBalanceRequest = QueryBalanceRequest;
            class QueryBalanceResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryBalanceResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryBalanceResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("balance" in data && data.balance != undefined) {
                            this.balance = data.balance;
                        }
                    }
                }
                get balance() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set balance(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryBalanceResponse({});
                    if (data.balance != null) {
                        message.balance = data.balance;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.balance != null) {
                        data.balance = this.balance;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.balance.length)
                        writer.writeString(1, this.balance);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBalanceResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.balance = reader.readString();
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
                    return QueryBalanceResponse.deserialize(bytes);
                }
            }
            _QueryBalanceResponse_one_of_decls = new WeakMap();
            v1.QueryBalanceResponse = QueryBalanceResponse;
            class QueryStorageRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryStorageRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryStorageRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("address" in data && data.address != undefined) {
                            this.address = data.address;
                        }
                        if ("key" in data && data.key != undefined) {
                            this.key = data.key;
                        }
                    }
                }
                get address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get key() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set key(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new QueryStorageRequest({});
                    if (data.address != null) {
                        message.address = data.address;
                    }
                    if (data.key != null) {
                        message.key = data.key;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.address != null) {
                        data.address = this.address;
                    }
                    if (this.key != null) {
                        data.key = this.key;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.address.length)
                        writer.writeString(1, this.address);
                    if (this.key.length)
                        writer.writeString(2, this.key);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryStorageRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.address = reader.readString();
                                break;
                            case 2:
                                message.key = reader.readString();
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
                    return QueryStorageRequest.deserialize(bytes);
                }
            }
            _QueryStorageRequest_one_of_decls = new WeakMap();
            v1.QueryStorageRequest = QueryStorageRequest;
            class QueryStorageResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryStorageResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryStorageResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("value" in data && data.value != undefined) {
                            this.value = data.value;
                        }
                    }
                }
                get value() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set value(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryStorageResponse({});
                    if (data.value != null) {
                        message.value = data.value;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.value != null) {
                        data.value = this.value;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.value.length)
                        writer.writeString(1, this.value);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryStorageResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.value = reader.readString();
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
                    return QueryStorageResponse.deserialize(bytes);
                }
            }
            _QueryStorageResponse_one_of_decls = new WeakMap();
            v1.QueryStorageResponse = QueryStorageResponse;
            class QueryCodeRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryCodeRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryCodeRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("address" in data && data.address != undefined) {
                            this.address = data.address;
                        }
                    }
                }
                get address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryCodeRequest({});
                    if (data.address != null) {
                        message.address = data.address;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.address != null) {
                        data.address = this.address;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.address.length)
                        writer.writeString(1, this.address);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCodeRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.address = reader.readString();
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
                    return QueryCodeRequest.deserialize(bytes);
                }
            }
            _QueryCodeRequest_one_of_decls = new WeakMap();
            v1.QueryCodeRequest = QueryCodeRequest;
            class QueryCodeResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryCodeResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryCodeResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("code" in data && data.code != undefined) {
                            this.code = data.code;
                        }
                    }
                }
                get code() {
                    return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                }
                set code(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryCodeResponse({});
                    if (data.code != null) {
                        message.code = data.code;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.code != null) {
                        data.code = this.code;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.code.length)
                        writer.writeBytes(1, this.code);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCodeResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.code = reader.readBytes();
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
                    return QueryCodeResponse.deserialize(bytes);
                }
            }
            _QueryCodeResponse_one_of_decls = new WeakMap();
            v1.QueryCodeResponse = QueryCodeResponse;
            class QueryTxLogsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTxLogsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryTxLogsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("hash" in data && data.hash != undefined) {
                            this.hash = data.hash;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get hash() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set hash(value) {
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
                    const message = new QueryTxLogsRequest({});
                    if (data.hash != null) {
                        message.hash = data.hash;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.hash != null) {
                        data.hash = this.hash;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.hash.length)
                        writer.writeString(1, this.hash);
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTxLogsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.hash = reader.readString();
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
                    return QueryTxLogsRequest.deserialize(bytes);
                }
            }
            _QueryTxLogsRequest_one_of_decls = new WeakMap();
            v1.QueryTxLogsRequest = QueryTxLogsRequest;
            class QueryTxLogsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTxLogsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryTxLogsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("logs" in data && data.logs != undefined) {
                            this.logs = data.logs;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get logs() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.ethermint.evm.v1.Log, 1);
                }
                set logs(value) {
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
                    const message = new QueryTxLogsResponse({});
                    if (data.logs != null) {
                        message.logs = data.logs.map(item => dependency_4.ethermint.evm.v1.Log.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.logs != null) {
                        data.logs = this.logs.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.logs.length)
                        writer.writeRepeatedMessage(1, this.logs, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTxLogsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.logs, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.ethermint.evm.v1.Log.deserialize(reader), dependency_4.ethermint.evm.v1.Log));
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
                    return QueryTxLogsResponse.deserialize(bytes);
                }
            }
            _QueryTxLogsResponse_one_of_decls = new WeakMap();
            v1.QueryTxLogsResponse = QueryTxLogsResponse;
            class QueryParamsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryParamsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryParamsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new QueryParamsRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsRequest();
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
                    return QueryParamsRequest.deserialize(bytes);
                }
            }
            _QueryParamsRequest_one_of_decls = new WeakMap();
            v1.QueryParamsRequest = QueryParamsRequest;
            class QueryParamsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryParamsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryParamsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("params" in data && data.params != undefined) {
                            this.params = data.params;
                        }
                    }
                }
                get params() {
                    return pb_1.Message.getWrapperField(this, dependency_4.ethermint.evm.v1.Params, 1);
                }
                set params(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_params() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryParamsResponse({});
                    if (data.params != null) {
                        message.params = dependency_4.ethermint.evm.v1.Params.fromObject(data.params);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.params != null) {
                        data.params = this.params.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_params)
                        writer.writeMessage(1, this.params, () => this.params.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.params, () => message.params = dependency_4.ethermint.evm.v1.Params.deserialize(reader));
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
                    return QueryParamsResponse.deserialize(bytes);
                }
            }
            _QueryParamsResponse_one_of_decls = new WeakMap();
            v1.QueryParamsResponse = QueryParamsResponse;
            class EthCallRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _EthCallRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EthCallRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("args" in data && data.args != undefined) {
                            this.args = data.args;
                        }
                        if ("gas_cap" in data && data.gas_cap != undefined) {
                            this.gas_cap = data.gas_cap;
                        }
                    }
                }
                get args() {
                    return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                }
                set args(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get gas_cap() {
                    return pb_1.Message.getFieldWithDefault(this, 2, 0);
                }
                set gas_cap(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new EthCallRequest({});
                    if (data.args != null) {
                        message.args = data.args;
                    }
                    if (data.gas_cap != null) {
                        message.gas_cap = data.gas_cap;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.args != null) {
                        data.args = this.args;
                    }
                    if (this.gas_cap != null) {
                        data.gas_cap = this.gas_cap;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.args.length)
                        writer.writeBytes(1, this.args);
                    if (this.gas_cap != 0)
                        writer.writeUint64(2, this.gas_cap);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EthCallRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.args = reader.readBytes();
                                break;
                            case 2:
                                message.gas_cap = reader.readUint64();
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
                    return EthCallRequest.deserialize(bytes);
                }
            }
            _EthCallRequest_one_of_decls = new WeakMap();
            v1.EthCallRequest = EthCallRequest;
            class EstimateGasResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _EstimateGasResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EstimateGasResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("gas" in data && data.gas != undefined) {
                            this.gas = data.gas;
                        }
                    }
                }
                get gas() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set gas(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new EstimateGasResponse({});
                    if (data.gas != null) {
                        message.gas = data.gas;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.gas != null) {
                        data.gas = this.gas;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.gas != 0)
                        writer.writeUint64(1, this.gas);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EstimateGasResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.gas = reader.readUint64();
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
                    return EstimateGasResponse.deserialize(bytes);
                }
            }
            _EstimateGasResponse_one_of_decls = new WeakMap();
            v1.EstimateGasResponse = EstimateGasResponse;
            class QueryTraceTxRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTraceTxRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], __classPrivateFieldGet(this, _QueryTraceTxRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("msg" in data && data.msg != undefined) {
                            this.msg = data.msg;
                        }
                        if ("trace_config" in data && data.trace_config != undefined) {
                            this.trace_config = data.trace_config;
                        }
                        if ("predecessors" in data && data.predecessors != undefined) {
                            this.predecessors = data.predecessors;
                        }
                        if ("block_number" in data && data.block_number != undefined) {
                            this.block_number = data.block_number;
                        }
                        if ("block_hash" in data && data.block_hash != undefined) {
                            this.block_hash = data.block_hash;
                        }
                        if ("block_time" in data && data.block_time != undefined) {
                            this.block_time = data.block_time;
                        }
                    }
                }
                get msg() {
                    return pb_1.Message.getWrapperField(this, dependency_5.ethermint.evm.v1.MsgEthereumTx, 1);
                }
                set msg(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_msg() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                get trace_config() {
                    return pb_1.Message.getWrapperField(this, dependency_4.ethermint.evm.v1.TraceConfig, 3);
                }
                set trace_config(value) {
                    pb_1.Message.setWrapperField(this, 3, value);
                }
                get has_trace_config() {
                    return pb_1.Message.getField(this, 3) != null;
                }
                get predecessors() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_5.ethermint.evm.v1.MsgEthereumTx, 4);
                }
                set predecessors(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 4, value);
                }
                get block_number() {
                    return pb_1.Message.getFieldWithDefault(this, 5, 0);
                }
                set block_number(value) {
                    pb_1.Message.setField(this, 5, value);
                }
                get block_hash() {
                    return pb_1.Message.getFieldWithDefault(this, 6, "");
                }
                set block_hash(value) {
                    pb_1.Message.setField(this, 6, value);
                }
                get block_time() {
                    return pb_1.Message.getWrapperField(this, dependency_6.google.protobuf.Timestamp, 7);
                }
                set block_time(value) {
                    pb_1.Message.setWrapperField(this, 7, value);
                }
                get has_block_time() {
                    return pb_1.Message.getField(this, 7) != null;
                }
                static fromObject(data) {
                    const message = new QueryTraceTxRequest({});
                    if (data.msg != null) {
                        message.msg = dependency_5.ethermint.evm.v1.MsgEthereumTx.fromObject(data.msg);
                    }
                    if (data.trace_config != null) {
                        message.trace_config = dependency_4.ethermint.evm.v1.TraceConfig.fromObject(data.trace_config);
                    }
                    if (data.predecessors != null) {
                        message.predecessors = data.predecessors.map(item => dependency_5.ethermint.evm.v1.MsgEthereumTx.fromObject(item));
                    }
                    if (data.block_number != null) {
                        message.block_number = data.block_number;
                    }
                    if (data.block_hash != null) {
                        message.block_hash = data.block_hash;
                    }
                    if (data.block_time != null) {
                        message.block_time = dependency_6.google.protobuf.Timestamp.fromObject(data.block_time);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.msg != null) {
                        data.msg = this.msg.toObject();
                    }
                    if (this.trace_config != null) {
                        data.trace_config = this.trace_config.toObject();
                    }
                    if (this.predecessors != null) {
                        data.predecessors = this.predecessors.map((item) => item.toObject());
                    }
                    if (this.block_number != null) {
                        data.block_number = this.block_number;
                    }
                    if (this.block_hash != null) {
                        data.block_hash = this.block_hash;
                    }
                    if (this.block_time != null) {
                        data.block_time = this.block_time.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_msg)
                        writer.writeMessage(1, this.msg, () => this.msg.serialize(writer));
                    if (this.has_trace_config)
                        writer.writeMessage(3, this.trace_config, () => this.trace_config.serialize(writer));
                    if (this.predecessors.length)
                        writer.writeRepeatedMessage(4, this.predecessors, (item) => item.serialize(writer));
                    if (this.block_number != 0)
                        writer.writeInt64(5, this.block_number);
                    if (this.block_hash.length)
                        writer.writeString(6, this.block_hash);
                    if (this.has_block_time)
                        writer.writeMessage(7, this.block_time, () => this.block_time.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTraceTxRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.msg, () => message.msg = dependency_5.ethermint.evm.v1.MsgEthereumTx.deserialize(reader));
                                break;
                            case 3:
                                reader.readMessage(message.trace_config, () => message.trace_config = dependency_4.ethermint.evm.v1.TraceConfig.deserialize(reader));
                                break;
                            case 4:
                                reader.readMessage(message.predecessors, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_5.ethermint.evm.v1.MsgEthereumTx.deserialize(reader), dependency_5.ethermint.evm.v1.MsgEthereumTx));
                                break;
                            case 5:
                                message.block_number = reader.readInt64();
                                break;
                            case 6:
                                message.block_hash = reader.readString();
                                break;
                            case 7:
                                reader.readMessage(message.block_time, () => message.block_time = dependency_6.google.protobuf.Timestamp.deserialize(reader));
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
                    return QueryTraceTxRequest.deserialize(bytes);
                }
            }
            _QueryTraceTxRequest_one_of_decls = new WeakMap();
            v1.QueryTraceTxRequest = QueryTraceTxRequest;
            class QueryTraceTxResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTraceTxResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryTraceTxResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("data" in data && data.data != undefined) {
                            this.data = data.data;
                        }
                    }
                }
                get data() {
                    return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                }
                set data(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryTraceTxResponse({});
                    if (data.data != null) {
                        message.data = data.data;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.data != null) {
                        data.data = this.data;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.data.length)
                        writer.writeBytes(1, this.data);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTraceTxResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.data = reader.readBytes();
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
                    return QueryTraceTxResponse.deserialize(bytes);
                }
            }
            _QueryTraceTxResponse_one_of_decls = new WeakMap();
            v1.QueryTraceTxResponse = QueryTraceTxResponse;
            class QueryTraceBlockRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTraceBlockRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryTraceBlockRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("txs" in data && data.txs != undefined) {
                            this.txs = data.txs;
                        }
                        if ("trace_config" in data && data.trace_config != undefined) {
                            this.trace_config = data.trace_config;
                        }
                        if ("block_number" in data && data.block_number != undefined) {
                            this.block_number = data.block_number;
                        }
                        if ("block_hash" in data && data.block_hash != undefined) {
                            this.block_hash = data.block_hash;
                        }
                        if ("block_time" in data && data.block_time != undefined) {
                            this.block_time = data.block_time;
                        }
                    }
                }
                get txs() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_5.ethermint.evm.v1.MsgEthereumTx, 1);
                }
                set txs(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                get trace_config() {
                    return pb_1.Message.getWrapperField(this, dependency_4.ethermint.evm.v1.TraceConfig, 3);
                }
                set trace_config(value) {
                    pb_1.Message.setWrapperField(this, 3, value);
                }
                get has_trace_config() {
                    return pb_1.Message.getField(this, 3) != null;
                }
                get block_number() {
                    return pb_1.Message.getFieldWithDefault(this, 5, 0);
                }
                set block_number(value) {
                    pb_1.Message.setField(this, 5, value);
                }
                get block_hash() {
                    return pb_1.Message.getFieldWithDefault(this, 6, "");
                }
                set block_hash(value) {
                    pb_1.Message.setField(this, 6, value);
                }
                get block_time() {
                    return pb_1.Message.getWrapperField(this, dependency_6.google.protobuf.Timestamp, 7);
                }
                set block_time(value) {
                    pb_1.Message.setWrapperField(this, 7, value);
                }
                get has_block_time() {
                    return pb_1.Message.getField(this, 7) != null;
                }
                static fromObject(data) {
                    const message = new QueryTraceBlockRequest({});
                    if (data.txs != null) {
                        message.txs = data.txs.map(item => dependency_5.ethermint.evm.v1.MsgEthereumTx.fromObject(item));
                    }
                    if (data.trace_config != null) {
                        message.trace_config = dependency_4.ethermint.evm.v1.TraceConfig.fromObject(data.trace_config);
                    }
                    if (data.block_number != null) {
                        message.block_number = data.block_number;
                    }
                    if (data.block_hash != null) {
                        message.block_hash = data.block_hash;
                    }
                    if (data.block_time != null) {
                        message.block_time = dependency_6.google.protobuf.Timestamp.fromObject(data.block_time);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.txs != null) {
                        data.txs = this.txs.map((item) => item.toObject());
                    }
                    if (this.trace_config != null) {
                        data.trace_config = this.trace_config.toObject();
                    }
                    if (this.block_number != null) {
                        data.block_number = this.block_number;
                    }
                    if (this.block_hash != null) {
                        data.block_hash = this.block_hash;
                    }
                    if (this.block_time != null) {
                        data.block_time = this.block_time.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.txs.length)
                        writer.writeRepeatedMessage(1, this.txs, (item) => item.serialize(writer));
                    if (this.has_trace_config)
                        writer.writeMessage(3, this.trace_config, () => this.trace_config.serialize(writer));
                    if (this.block_number != 0)
                        writer.writeInt64(5, this.block_number);
                    if (this.block_hash.length)
                        writer.writeString(6, this.block_hash);
                    if (this.has_block_time)
                        writer.writeMessage(7, this.block_time, () => this.block_time.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTraceBlockRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.txs, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.ethermint.evm.v1.MsgEthereumTx.deserialize(reader), dependency_5.ethermint.evm.v1.MsgEthereumTx));
                                break;
                            case 3:
                                reader.readMessage(message.trace_config, () => message.trace_config = dependency_4.ethermint.evm.v1.TraceConfig.deserialize(reader));
                                break;
                            case 5:
                                message.block_number = reader.readInt64();
                                break;
                            case 6:
                                message.block_hash = reader.readString();
                                break;
                            case 7:
                                reader.readMessage(message.block_time, () => message.block_time = dependency_6.google.protobuf.Timestamp.deserialize(reader));
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
                    return QueryTraceBlockRequest.deserialize(bytes);
                }
            }
            _QueryTraceBlockRequest_one_of_decls = new WeakMap();
            v1.QueryTraceBlockRequest = QueryTraceBlockRequest;
            class QueryTraceBlockResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTraceBlockResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryTraceBlockResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("data" in data && data.data != undefined) {
                            this.data = data.data;
                        }
                    }
                }
                get data() {
                    return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                }
                set data(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryTraceBlockResponse({});
                    if (data.data != null) {
                        message.data = data.data;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.data != null) {
                        data.data = this.data;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.data.length)
                        writer.writeBytes(1, this.data);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTraceBlockResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.data = reader.readBytes();
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
                    return QueryTraceBlockResponse.deserialize(bytes);
                }
            }
            _QueryTraceBlockResponse_one_of_decls = new WeakMap();
            v1.QueryTraceBlockResponse = QueryTraceBlockResponse;
            class QueryBaseFeeRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryBaseFeeRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryBaseFeeRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new QueryBaseFeeRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBaseFeeRequest();
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
                    return QueryBaseFeeRequest.deserialize(bytes);
                }
            }
            _QueryBaseFeeRequest_one_of_decls = new WeakMap();
            v1.QueryBaseFeeRequest = QueryBaseFeeRequest;
            class QueryBaseFeeResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryBaseFeeResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryBaseFeeResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("base_fee" in data && data.base_fee != undefined) {
                            this.base_fee = data.base_fee;
                        }
                    }
                }
                get base_fee() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set base_fee(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryBaseFeeResponse({});
                    if (data.base_fee != null) {
                        message.base_fee = data.base_fee;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.base_fee != null) {
                        data.base_fee = this.base_fee;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.base_fee.length)
                        writer.writeString(1, this.base_fee);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBaseFeeResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.base_fee = reader.readString();
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
                    return QueryBaseFeeResponse.deserialize(bytes);
                }
            }
            _QueryBaseFeeResponse_one_of_decls = new WeakMap();
            v1.QueryBaseFeeResponse = QueryBaseFeeResponse;
            class UnimplementedQueryService {
            }
            UnimplementedQueryService.definition = {
                Account: {
                    path: "/ethermint.evm.v1.Query/Account",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryAccountRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryAccountResponse.deserialize(new Uint8Array(bytes))
                },
                CosmosAccount: {
                    path: "/ethermint.evm.v1.Query/CosmosAccount",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryCosmosAccountRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryCosmosAccountResponse.deserialize(new Uint8Array(bytes))
                },
                ValidatorAccount: {
                    path: "/ethermint.evm.v1.Query/ValidatorAccount",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryValidatorAccountRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryValidatorAccountResponse.deserialize(new Uint8Array(bytes))
                },
                Balance: {
                    path: "/ethermint.evm.v1.Query/Balance",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryBalanceRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryBalanceResponse.deserialize(new Uint8Array(bytes))
                },
                Storage: {
                    path: "/ethermint.evm.v1.Query/Storage",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryStorageRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryStorageResponse.deserialize(new Uint8Array(bytes))
                },
                Code: {
                    path: "/ethermint.evm.v1.Query/Code",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryCodeRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryCodeResponse.deserialize(new Uint8Array(bytes))
                },
                Params: {
                    path: "/ethermint.evm.v1.Query/Params",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
                },
                EthCall: {
                    path: "/ethermint.evm.v1.Query/EthCall",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => EthCallRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => dependency_5.ethermint.evm.v1.MsgEthereumTxResponse.deserialize(new Uint8Array(bytes))
                },
                EstimateGas: {
                    path: "/ethermint.evm.v1.Query/EstimateGas",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => EthCallRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => EstimateGasResponse.deserialize(new Uint8Array(bytes))
                },
                TraceTx: {
                    path: "/ethermint.evm.v1.Query/TraceTx",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryTraceTxRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryTraceTxResponse.deserialize(new Uint8Array(bytes))
                },
                TraceBlock: {
                    path: "/ethermint.evm.v1.Query/TraceBlock",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryTraceBlockRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryTraceBlockResponse.deserialize(new Uint8Array(bytes))
                },
                BaseFee: {
                    path: "/ethermint.evm.v1.Query/BaseFee",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryBaseFeeRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryBaseFeeResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1.UnimplementedQueryService = UnimplementedQueryService;
            class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.Account = (message, metadata, options, callback) => {
                        return super.Account(message, metadata, options, callback);
                    };
                    this.CosmosAccount = (message, metadata, options, callback) => {
                        return super.CosmosAccount(message, metadata, options, callback);
                    };
                    this.ValidatorAccount = (message, metadata, options, callback) => {
                        return super.ValidatorAccount(message, metadata, options, callback);
                    };
                    this.Balance = (message, metadata, options, callback) => {
                        return super.Balance(message, metadata, options, callback);
                    };
                    this.Storage = (message, metadata, options, callback) => {
                        return super.Storage(message, metadata, options, callback);
                    };
                    this.Code = (message, metadata, options, callback) => {
                        return super.Code(message, metadata, options, callback);
                    };
                    this.Params = (message, metadata, options, callback) => {
                        return super.Params(message, metadata, options, callback);
                    };
                    this.EthCall = (message, metadata, options, callback) => {
                        return super.EthCall(message, metadata, options, callback);
                    };
                    this.EstimateGas = (message, metadata, options, callback) => {
                        return super.EstimateGas(message, metadata, options, callback);
                    };
                    this.TraceTx = (message, metadata, options, callback) => {
                        return super.TraceTx(message, metadata, options, callback);
                    };
                    this.TraceBlock = (message, metadata, options, callback) => {
                        return super.TraceBlock(message, metadata, options, callback);
                    };
                    this.BaseFee = (message, metadata, options, callback) => {
                        return super.BaseFee(message, metadata, options, callback);
                    };
                }
            }
            v1.QueryClient = QueryClient;
        })(v1 = evm.v1 || (evm.v1 = {}));
    })(evm = ethermint.evm || (ethermint.evm = {}));
})(ethermint = exports.ethermint || (exports.ethermint = {}));
//# sourceMappingURL=query.js.map