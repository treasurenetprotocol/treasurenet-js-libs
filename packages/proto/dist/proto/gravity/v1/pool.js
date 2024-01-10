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
const pb_1 = __importStar(require("google-protobuf"));
var gravity;
(function (gravity) {
    var v1;
    (function (v1) {
        var _IDSet_one_of_decls, _BatchFees_one_of_decls, _EventWithdrawalReceived_one_of_decls, _EventWithdrawCanceled_one_of_decls;
        class IDSet extends pb_1.Message {
            constructor(data) {
                super();
                _IDSet_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _IDSet_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("ids" in data && data.ids != undefined) {
                        this.ids = data.ids;
                    }
                }
            }
            get ids() {
                return pb_1.Message.getFieldWithDefault(this, 1, []);
            }
            set ids(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new IDSet({});
                if (data.ids != null) {
                    message.ids = data.ids;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.ids != null) {
                    data.ids = this.ids;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.ids.length)
                    writer.writePackedUint64(1, this.ids);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new IDSet();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.ids = reader.readPackedUint64();
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
                return IDSet.deserialize(bytes);
            }
        }
        _IDSet_one_of_decls = new WeakMap();
        v1.IDSet = IDSet;
        class BatchFees extends pb_1.Message {
            constructor(data) {
                super();
                _BatchFees_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _BatchFees_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("token" in data && data.token != undefined) {
                        this.token = data.token;
                    }
                    if ("total_fees" in data && data.total_fees != undefined) {
                        this.total_fees = data.total_fees;
                    }
                    if ("tx_count" in data && data.tx_count != undefined) {
                        this.tx_count = data.tx_count;
                    }
                }
            }
            get token() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set token(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get total_fees() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set total_fees(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get tx_count() {
                return pb_1.Message.getFieldWithDefault(this, 3, 0);
            }
            set tx_count(value) {
                pb_1.Message.setField(this, 3, value);
            }
            static fromObject(data) {
                const message = new BatchFees({});
                if (data.token != null) {
                    message.token = data.token;
                }
                if (data.total_fees != null) {
                    message.total_fees = data.total_fees;
                }
                if (data.tx_count != null) {
                    message.tx_count = data.tx_count;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.token != null) {
                    data.token = this.token;
                }
                if (this.total_fees != null) {
                    data.total_fees = this.total_fees;
                }
                if (this.tx_count != null) {
                    data.tx_count = this.tx_count;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.token.length)
                    writer.writeString(1, this.token);
                if (this.total_fees.length)
                    writer.writeString(2, this.total_fees);
                if (this.tx_count != 0)
                    writer.writeUint64(3, this.tx_count);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BatchFees();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.token = reader.readString();
                            break;
                        case 2:
                            message.total_fees = reader.readString();
                            break;
                        case 3:
                            message.tx_count = reader.readUint64();
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
                return BatchFees.deserialize(bytes);
            }
        }
        _BatchFees_one_of_decls = new WeakMap();
        v1.BatchFees = BatchFees;
        class EventWithdrawalReceived extends pb_1.Message {
            constructor(data) {
                super();
                _EventWithdrawalReceived_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventWithdrawalReceived_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("bridge_contract" in data && data.bridge_contract != undefined) {
                        this.bridge_contract = data.bridge_contract;
                    }
                    if ("bridge_chain_id" in data && data.bridge_chain_id != undefined) {
                        this.bridge_chain_id = data.bridge_chain_id;
                    }
                    if ("outgoing_tx_id" in data && data.outgoing_tx_id != undefined) {
                        this.outgoing_tx_id = data.outgoing_tx_id;
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
            get outgoing_tx_id() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set outgoing_tx_id(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set nonce(value) {
                pb_1.Message.setField(this, 4, value);
            }
            static fromObject(data) {
                const message = new EventWithdrawalReceived({});
                if (data.bridge_contract != null) {
                    message.bridge_contract = data.bridge_contract;
                }
                if (data.bridge_chain_id != null) {
                    message.bridge_chain_id = data.bridge_chain_id;
                }
                if (data.outgoing_tx_id != null) {
                    message.outgoing_tx_id = data.outgoing_tx_id;
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
                if (this.outgoing_tx_id != null) {
                    data.outgoing_tx_id = this.outgoing_tx_id;
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
                if (this.outgoing_tx_id.length)
                    writer.writeString(3, this.outgoing_tx_id);
                if (this.nonce.length)
                    writer.writeString(4, this.nonce);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventWithdrawalReceived();
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
                            message.outgoing_tx_id = reader.readString();
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
                return EventWithdrawalReceived.deserialize(bytes);
            }
        }
        _EventWithdrawalReceived_one_of_decls = new WeakMap();
        v1.EventWithdrawalReceived = EventWithdrawalReceived;
        class EventWithdrawCanceled extends pb_1.Message {
            constructor(data) {
                super();
                _EventWithdrawCanceled_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventWithdrawCanceled_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("sender" in data && data.sender != undefined) {
                        this.sender = data.sender;
                    }
                    if ("tx_id" in data && data.tx_id != undefined) {
                        this.tx_id = data.tx_id;
                    }
                    if ("bridge_contract" in data && data.bridge_contract != undefined) {
                        this.bridge_contract = data.bridge_contract;
                    }
                    if ("bridge_chain_id" in data && data.bridge_chain_id != undefined) {
                        this.bridge_chain_id = data.bridge_chain_id;
                    }
                }
            }
            get sender() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set sender(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get tx_id() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set tx_id(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get bridge_contract() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set bridge_contract(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get bridge_chain_id() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set bridge_chain_id(value) {
                pb_1.Message.setField(this, 4, value);
            }
            static fromObject(data) {
                const message = new EventWithdrawCanceled({});
                if (data.sender != null) {
                    message.sender = data.sender;
                }
                if (data.tx_id != null) {
                    message.tx_id = data.tx_id;
                }
                if (data.bridge_contract != null) {
                    message.bridge_contract = data.bridge_contract;
                }
                if (data.bridge_chain_id != null) {
                    message.bridge_chain_id = data.bridge_chain_id;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.sender != null) {
                    data.sender = this.sender;
                }
                if (this.tx_id != null) {
                    data.tx_id = this.tx_id;
                }
                if (this.bridge_contract != null) {
                    data.bridge_contract = this.bridge_contract;
                }
                if (this.bridge_chain_id != null) {
                    data.bridge_chain_id = this.bridge_chain_id;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.sender.length)
                    writer.writeString(1, this.sender);
                if (this.tx_id.length)
                    writer.writeString(2, this.tx_id);
                if (this.bridge_contract.length)
                    writer.writeString(3, this.bridge_contract);
                if (this.bridge_chain_id.length)
                    writer.writeString(4, this.bridge_chain_id);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventWithdrawCanceled();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.sender = reader.readString();
                            break;
                        case 2:
                            message.tx_id = reader.readString();
                            break;
                        case 3:
                            message.bridge_contract = reader.readString();
                            break;
                        case 4:
                            message.bridge_chain_id = reader.readString();
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
                return EventWithdrawCanceled.deserialize(bytes);
            }
        }
        _EventWithdrawCanceled_one_of_decls = new WeakMap();
        v1.EventWithdrawCanceled = EventWithdrawCanceled;
    })(v1 = gravity.v1 || (gravity.v1 = {}));
})(gravity = exports.gravity || (exports.gravity = {}));
//# sourceMappingURL=pool.js.map