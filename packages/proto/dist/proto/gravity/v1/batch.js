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
exports.gravity = void 0;
const dependency_2 = __importStar(require("./attestation"));
const pb_1 = __importStar(require("google-protobuf"));
var gravity;
(function (gravity) {
    var v1;
    (function (v1) {
        var _OutgoingTxBatch_one_of_decls, _OutgoingTransferTx_one_of_decls, _OutgoingLogicCall_one_of_decls, _EventOutgoingBatchCanceled_one_of_decls, _EventOutgoingBatch_one_of_decls;
        class OutgoingTxBatch extends pb_1.Message {
            constructor(data) {
                super();
                _OutgoingTxBatch_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _OutgoingTxBatch_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("batch_nonce" in data && data.batch_nonce != undefined) {
                        this.batch_nonce = data.batch_nonce;
                    }
                    if ("batch_timeout" in data && data.batch_timeout != undefined) {
                        this.batch_timeout = data.batch_timeout;
                    }
                    if ("transactions" in data && data.transactions != undefined) {
                        this.transactions = data.transactions;
                    }
                    if ("token_contract" in data && data.token_contract != undefined) {
                        this.token_contract = data.token_contract;
                    }
                    if ("block" in data && data.block != undefined) {
                        this.block = data.block;
                    }
                }
            }
            get batch_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set batch_nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get batch_timeout() {
                return pb_1.Message.getFieldWithDefault(this, 2, 0);
            }
            set batch_timeout(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get transactions() {
                return pb_1.Message.getRepeatedWrapperField(this, OutgoingTransferTx, 3);
            }
            set transactions(value) {
                pb_1.Message.setRepeatedWrapperField(this, 3, value);
            }
            get token_contract() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set token_contract(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get block() {
                return pb_1.Message.getFieldWithDefault(this, 5, 0);
            }
            set block(value) {
                pb_1.Message.setField(this, 5, value);
            }
            static fromObject(data) {
                const message = new OutgoingTxBatch({});
                if (data.batch_nonce != null) {
                    message.batch_nonce = data.batch_nonce;
                }
                if (data.batch_timeout != null) {
                    message.batch_timeout = data.batch_timeout;
                }
                if (data.transactions != null) {
                    message.transactions = data.transactions.map(item => OutgoingTransferTx.fromObject(item));
                }
                if (data.token_contract != null) {
                    message.token_contract = data.token_contract;
                }
                if (data.block != null) {
                    message.block = data.block;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.batch_nonce != null) {
                    data.batch_nonce = this.batch_nonce;
                }
                if (this.batch_timeout != null) {
                    data.batch_timeout = this.batch_timeout;
                }
                if (this.transactions != null) {
                    data.transactions = this.transactions.map((item) => item.toObject());
                }
                if (this.token_contract != null) {
                    data.token_contract = this.token_contract;
                }
                if (this.block != null) {
                    data.block = this.block;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.batch_nonce != 0)
                    writer.writeUint64(1, this.batch_nonce);
                if (this.batch_timeout != 0)
                    writer.writeUint64(2, this.batch_timeout);
                if (this.transactions.length)
                    writer.writeRepeatedMessage(3, this.transactions, (item) => item.serialize(writer));
                if (this.token_contract.length)
                    writer.writeString(4, this.token_contract);
                if (this.block != 0)
                    writer.writeUint64(5, this.block);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OutgoingTxBatch();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.batch_nonce = reader.readUint64();
                            break;
                        case 2:
                            message.batch_timeout = reader.readUint64();
                            break;
                        case 3:
                            reader.readMessage(message.transactions, () => pb_1.Message.addToRepeatedWrapperField(message, 3, OutgoingTransferTx.deserialize(reader), OutgoingTransferTx));
                            break;
                        case 4:
                            message.token_contract = reader.readString();
                            break;
                        case 5:
                            message.block = reader.readUint64();
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
                return OutgoingTxBatch.deserialize(bytes);
            }
        }
        _OutgoingTxBatch_one_of_decls = new WeakMap();
        v1.OutgoingTxBatch = OutgoingTxBatch;
        class OutgoingTransferTx extends pb_1.Message {
            constructor(data) {
                super();
                _OutgoingTransferTx_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _OutgoingTransferTx_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("id" in data && data.id != undefined) {
                        this.id = data.id;
                    }
                    if ("sender" in data && data.sender != undefined) {
                        this.sender = data.sender;
                    }
                    if ("dest_address" in data && data.dest_address != undefined) {
                        this.dest_address = data.dest_address;
                    }
                    if ("erc20_token" in data && data.erc20_token != undefined) {
                        this.erc20_token = data.erc20_token;
                    }
                    if ("erc20_fee" in data && data.erc20_fee != undefined) {
                        this.erc20_fee = data.erc20_fee;
                    }
                }
            }
            get id() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set id(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get sender() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set sender(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get dest_address() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set dest_address(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get erc20_token() {
                return pb_1.Message.getWrapperField(this, dependency_2.gravity.v1.ERC20Token, 4);
            }
            set erc20_token(value) {
                pb_1.Message.setWrapperField(this, 4, value);
            }
            get has_erc20_token() {
                return pb_1.Message.getField(this, 4) != null;
            }
            get erc20_fee() {
                return pb_1.Message.getWrapperField(this, dependency_2.gravity.v1.ERC20Token, 5);
            }
            set erc20_fee(value) {
                pb_1.Message.setWrapperField(this, 5, value);
            }
            get has_erc20_fee() {
                return pb_1.Message.getField(this, 5) != null;
            }
            static fromObject(data) {
                const message = new OutgoingTransferTx({});
                if (data.id != null) {
                    message.id = data.id;
                }
                if (data.sender != null) {
                    message.sender = data.sender;
                }
                if (data.dest_address != null) {
                    message.dest_address = data.dest_address;
                }
                if (data.erc20_token != null) {
                    message.erc20_token = dependency_2.gravity.v1.ERC20Token.fromObject(data.erc20_token);
                }
                if (data.erc20_fee != null) {
                    message.erc20_fee = dependency_2.gravity.v1.ERC20Token.fromObject(data.erc20_fee);
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.id != null) {
                    data.id = this.id;
                }
                if (this.sender != null) {
                    data.sender = this.sender;
                }
                if (this.dest_address != null) {
                    data.dest_address = this.dest_address;
                }
                if (this.erc20_token != null) {
                    data.erc20_token = this.erc20_token.toObject();
                }
                if (this.erc20_fee != null) {
                    data.erc20_fee = this.erc20_fee.toObject();
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.id != 0)
                    writer.writeUint64(1, this.id);
                if (this.sender.length)
                    writer.writeString(2, this.sender);
                if (this.dest_address.length)
                    writer.writeString(3, this.dest_address);
                if (this.has_erc20_token)
                    writer.writeMessage(4, this.erc20_token, () => this.erc20_token.serialize(writer));
                if (this.has_erc20_fee)
                    writer.writeMessage(5, this.erc20_fee, () => this.erc20_fee.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OutgoingTransferTx();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.id = reader.readUint64();
                            break;
                        case 2:
                            message.sender = reader.readString();
                            break;
                        case 3:
                            message.dest_address = reader.readString();
                            break;
                        case 4:
                            reader.readMessage(message.erc20_token, () => message.erc20_token = dependency_2.gravity.v1.ERC20Token.deserialize(reader));
                            break;
                        case 5:
                            reader.readMessage(message.erc20_fee, () => message.erc20_fee = dependency_2.gravity.v1.ERC20Token.deserialize(reader));
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
                return OutgoingTransferTx.deserialize(bytes);
            }
        }
        _OutgoingTransferTx_one_of_decls = new WeakMap();
        v1.OutgoingTransferTx = OutgoingTransferTx;
        class OutgoingLogicCall extends pb_1.Message {
            constructor(data) {
                super();
                _OutgoingLogicCall_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2], __classPrivateFieldGet(this, _OutgoingLogicCall_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("transfers" in data && data.transfers != undefined) {
                        this.transfers = data.transfers;
                    }
                    if ("fees" in data && data.fees != undefined) {
                        this.fees = data.fees;
                    }
                    if ("logic_contract_address" in data && data.logic_contract_address != undefined) {
                        this.logic_contract_address = data.logic_contract_address;
                    }
                    if ("payload" in data && data.payload != undefined) {
                        this.payload = data.payload;
                    }
                    if ("timeout" in data && data.timeout != undefined) {
                        this.timeout = data.timeout;
                    }
                    if ("invalidation_id" in data && data.invalidation_id != undefined) {
                        this.invalidation_id = data.invalidation_id;
                    }
                    if ("invalidation_nonce" in data && data.invalidation_nonce != undefined) {
                        this.invalidation_nonce = data.invalidation_nonce;
                    }
                    if ("block" in data && data.block != undefined) {
                        this.block = data.block;
                    }
                }
            }
            get transfers() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_2.gravity.v1.ERC20Token, 1);
            }
            set transfers(value) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
            get fees() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_2.gravity.v1.ERC20Token, 2);
            }
            set fees(value) {
                pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
            get logic_contract_address() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set logic_contract_address(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get payload() {
                return pb_1.Message.getFieldWithDefault(this, 4, new Uint8Array(0));
            }
            set payload(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get timeout() {
                return pb_1.Message.getFieldWithDefault(this, 5, 0);
            }
            set timeout(value) {
                pb_1.Message.setField(this, 5, value);
            }
            get invalidation_id() {
                return pb_1.Message.getFieldWithDefault(this, 6, new Uint8Array(0));
            }
            set invalidation_id(value) {
                pb_1.Message.setField(this, 6, value);
            }
            get invalidation_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 7, 0);
            }
            set invalidation_nonce(value) {
                pb_1.Message.setField(this, 7, value);
            }
            get block() {
                return pb_1.Message.getFieldWithDefault(this, 8, 0);
            }
            set block(value) {
                pb_1.Message.setField(this, 8, value);
            }
            static fromObject(data) {
                const message = new OutgoingLogicCall({});
                if (data.transfers != null) {
                    message.transfers = data.transfers.map(item => dependency_2.gravity.v1.ERC20Token.fromObject(item));
                }
                if (data.fees != null) {
                    message.fees = data.fees.map(item => dependency_2.gravity.v1.ERC20Token.fromObject(item));
                }
                if (data.logic_contract_address != null) {
                    message.logic_contract_address = data.logic_contract_address;
                }
                if (data.payload != null) {
                    message.payload = data.payload;
                }
                if (data.timeout != null) {
                    message.timeout = data.timeout;
                }
                if (data.invalidation_id != null) {
                    message.invalidation_id = data.invalidation_id;
                }
                if (data.invalidation_nonce != null) {
                    message.invalidation_nonce = data.invalidation_nonce;
                }
                if (data.block != null) {
                    message.block = data.block;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.transfers != null) {
                    data.transfers = this.transfers.map((item) => item.toObject());
                }
                if (this.fees != null) {
                    data.fees = this.fees.map((item) => item.toObject());
                }
                if (this.logic_contract_address != null) {
                    data.logic_contract_address = this.logic_contract_address;
                }
                if (this.payload != null) {
                    data.payload = this.payload;
                }
                if (this.timeout != null) {
                    data.timeout = this.timeout;
                }
                if (this.invalidation_id != null) {
                    data.invalidation_id = this.invalidation_id;
                }
                if (this.invalidation_nonce != null) {
                    data.invalidation_nonce = this.invalidation_nonce;
                }
                if (this.block != null) {
                    data.block = this.block;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.transfers.length)
                    writer.writeRepeatedMessage(1, this.transfers, (item) => item.serialize(writer));
                if (this.fees.length)
                    writer.writeRepeatedMessage(2, this.fees, (item) => item.serialize(writer));
                if (this.logic_contract_address.length)
                    writer.writeString(3, this.logic_contract_address);
                if (this.payload.length)
                    writer.writeBytes(4, this.payload);
                if (this.timeout != 0)
                    writer.writeUint64(5, this.timeout);
                if (this.invalidation_id.length)
                    writer.writeBytes(6, this.invalidation_id);
                if (this.invalidation_nonce != 0)
                    writer.writeUint64(7, this.invalidation_nonce);
                if (this.block != 0)
                    writer.writeUint64(8, this.block);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OutgoingLogicCall();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.transfers, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.gravity.v1.ERC20Token.deserialize(reader), dependency_2.gravity.v1.ERC20Token));
                            break;
                        case 2:
                            reader.readMessage(message.fees, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.gravity.v1.ERC20Token.deserialize(reader), dependency_2.gravity.v1.ERC20Token));
                            break;
                        case 3:
                            message.logic_contract_address = reader.readString();
                            break;
                        case 4:
                            message.payload = reader.readBytes();
                            break;
                        case 5:
                            message.timeout = reader.readUint64();
                            break;
                        case 6:
                            message.invalidation_id = reader.readBytes();
                            break;
                        case 7:
                            message.invalidation_nonce = reader.readUint64();
                            break;
                        case 8:
                            message.block = reader.readUint64();
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
                return OutgoingLogicCall.deserialize(bytes);
            }
        }
        _OutgoingLogicCall_one_of_decls = new WeakMap();
        v1.OutgoingLogicCall = OutgoingLogicCall;
        class EventOutgoingBatchCanceled extends pb_1.Message {
            constructor(data) {
                super();
                _EventOutgoingBatchCanceled_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventOutgoingBatchCanceled_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("bridge_contract" in data && data.bridge_contract != undefined) {
                        this.bridge_contract = data.bridge_contract;
                    }
                    if ("bridge_chain_id" in data && data.bridge_chain_id != undefined) {
                        this.bridge_chain_id = data.bridge_chain_id;
                    }
                    if ("batch_id" in data && data.batch_id != undefined) {
                        this.batch_id = data.batch_id;
                    }
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                }
            }
            get bridge_contract() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set bridge_contract(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get bridge_chain_id() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set bridge_chain_id(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get batch_id() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set batch_id(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set nonce(value) {
                pb_1.Message.setField(this, 4, value);
            }
            static fromObject(data) {
                const message = new EventOutgoingBatchCanceled({});
                if (data.bridge_contract != null) {
                    message.bridge_contract = data.bridge_contract;
                }
                if (data.bridge_chain_id != null) {
                    message.bridge_chain_id = data.bridge_chain_id;
                }
                if (data.batch_id != null) {
                    message.batch_id = data.batch_id;
                }
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.bridge_contract != null) {
                    data.bridge_contract = this.bridge_contract;
                }
                if (this.bridge_chain_id != null) {
                    data.bridge_chain_id = this.bridge_chain_id;
                }
                if (this.batch_id != null) {
                    data.batch_id = this.batch_id;
                }
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.bridge_contract.length)
                    writer.writeString(1, this.bridge_contract);
                if (this.bridge_chain_id.length)
                    writer.writeString(2, this.bridge_chain_id);
                if (this.batch_id.length)
                    writer.writeString(3, this.batch_id);
                if (this.nonce.length)
                    writer.writeString(4, this.nonce);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventOutgoingBatchCanceled();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.bridge_contract = reader.readString();
                            break;
                        case 2:
                            message.bridge_chain_id = reader.readString();
                            break;
                        case 3:
                            message.batch_id = reader.readString();
                            break;
                        case 4:
                            message.nonce = reader.readString();
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
                return EventOutgoingBatchCanceled.deserialize(bytes);
            }
        }
        _EventOutgoingBatchCanceled_one_of_decls = new WeakMap();
        v1.EventOutgoingBatchCanceled = EventOutgoingBatchCanceled;
        class EventOutgoingBatch extends pb_1.Message {
            constructor(data) {
                super();
                _EventOutgoingBatch_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventOutgoingBatch_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("bridge_contract" in data && data.bridge_contract != undefined) {
                        this.bridge_contract = data.bridge_contract;
                    }
                    if ("bridge_chain_id" in data && data.bridge_chain_id != undefined) {
                        this.bridge_chain_id = data.bridge_chain_id;
                    }
                    if ("batch_id" in data && data.batch_id != undefined) {
                        this.batch_id = data.batch_id;
                    }
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                }
            }
            get bridge_contract() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set bridge_contract(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get bridge_chain_id() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set bridge_chain_id(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get batch_id() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set batch_id(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set nonce(value) {
                pb_1.Message.setField(this, 4, value);
            }
            static fromObject(data) {
                const message = new EventOutgoingBatch({});
                if (data.bridge_contract != null) {
                    message.bridge_contract = data.bridge_contract;
                }
                if (data.bridge_chain_id != null) {
                    message.bridge_chain_id = data.bridge_chain_id;
                }
                if (data.batch_id != null) {
                    message.batch_id = data.batch_id;
                }
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.bridge_contract != null) {
                    data.bridge_contract = this.bridge_contract;
                }
                if (this.bridge_chain_id != null) {
                    data.bridge_chain_id = this.bridge_chain_id;
                }
                if (this.batch_id != null) {
                    data.batch_id = this.batch_id;
                }
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.bridge_contract.length)
                    writer.writeString(1, this.bridge_contract);
                if (this.bridge_chain_id.length)
                    writer.writeString(2, this.bridge_chain_id);
                if (this.batch_id.length)
                    writer.writeString(3, this.batch_id);
                if (this.nonce.length)
                    writer.writeString(4, this.nonce);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventOutgoingBatch();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.bridge_contract = reader.readString();
                            break;
                        case 2:
                            message.bridge_chain_id = reader.readString();
                            break;
                        case 3:
                            message.batch_id = reader.readString();
                            break;
                        case 4:
                            message.nonce = reader.readString();
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
                return EventOutgoingBatch.deserialize(bytes);
            }
        }
        _EventOutgoingBatch_one_of_decls = new WeakMap();
        v1.EventOutgoingBatch = EventOutgoingBatch;
    })(v1 = gravity.v1 || (gravity.v1 = {}));
})(gravity = exports.gravity || (exports.gravity = {}));
//# sourceMappingURL=batch.js.map