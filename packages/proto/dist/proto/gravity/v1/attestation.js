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
const dependency_2 = __importStar(require("./../../google/protobuf/any"));
const pb_1 = __importStar(require("google-protobuf"));
var gravity;
(function (gravity) {
    var v1;
    (function (v1) {
        var _Attestation_one_of_decls, _ERC20Token_one_of_decls, _EventObservation_one_of_decls, _EventInvalidSendToCosmosReceiver_one_of_decls, _EventSendToCosmos_one_of_decls, _EventSendToCosmosLocal_one_of_decls, _EventSendToCosmosIbc_one_of_decls;
        let ClaimType;
        (function (ClaimType) {
            ClaimType[ClaimType["CLAIM_TYPE_UNSPECIFIED"] = 0] = "CLAIM_TYPE_UNSPECIFIED";
            ClaimType[ClaimType["CLAIM_TYPE_SEND_TO_COSMOS"] = 1] = "CLAIM_TYPE_SEND_TO_COSMOS";
            ClaimType[ClaimType["CLAIM_TYPE_BATCH_SEND_TO_ETH"] = 2] = "CLAIM_TYPE_BATCH_SEND_TO_ETH";
            ClaimType[ClaimType["CLAIM_TYPE_ERC20_DEPLOYED"] = 3] = "CLAIM_TYPE_ERC20_DEPLOYED";
            ClaimType[ClaimType["CLAIM_TYPE_LOGIC_CALL_EXECUTED"] = 4] = "CLAIM_TYPE_LOGIC_CALL_EXECUTED";
            ClaimType[ClaimType["CLAIM_TYPE_VALSET_UPDATED"] = 5] = "CLAIM_TYPE_VALSET_UPDATED";
        })(ClaimType = v1.ClaimType || (v1.ClaimType = {}));
        class Attestation extends pb_1.Message {
            constructor(data) {
                super();
                _Attestation_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _Attestation_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("observed" in data && data.observed != undefined) {
                        this.observed = data.observed;
                    }
                    if ("votes" in data && data.votes != undefined) {
                        this.votes = data.votes;
                    }
                    if ("height" in data && data.height != undefined) {
                        this.height = data.height;
                    }
                    if ("claim" in data && data.claim != undefined) {
                        this.claim = data.claim;
                    }
                }
            }
            get observed() {
                return pb_1.Message.getFieldWithDefault(this, 1, false);
            }
            set observed(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get votes() {
                return pb_1.Message.getFieldWithDefault(this, 2, []);
            }
            set votes(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get height() {
                return pb_1.Message.getFieldWithDefault(this, 3, 0);
            }
            set height(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get claim() {
                return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 4);
            }
            set claim(value) {
                pb_1.Message.setWrapperField(this, 4, value);
            }
            get has_claim() {
                return pb_1.Message.getField(this, 4) != null;
            }
            static fromObject(data) {
                const message = new Attestation({});
                if (data.observed != null) {
                    message.observed = data.observed;
                }
                if (data.votes != null) {
                    message.votes = data.votes;
                }
                if (data.height != null) {
                    message.height = data.height;
                }
                if (data.claim != null) {
                    message.claim = dependency_2.google.protobuf.Any.fromObject(data.claim);
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.observed != null) {
                    data.observed = this.observed;
                }
                if (this.votes != null) {
                    data.votes = this.votes;
                }
                if (this.height != null) {
                    data.height = this.height;
                }
                if (this.claim != null) {
                    data.claim = this.claim.toObject();
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.observed != false)
                    writer.writeBool(1, this.observed);
                if (this.votes.length)
                    writer.writeRepeatedString(2, this.votes);
                if (this.height != 0)
                    writer.writeUint64(3, this.height);
                if (this.has_claim)
                    writer.writeMessage(4, this.claim, () => this.claim.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Attestation();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.observed = reader.readBool();
                            break;
                        case 2:
                            pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                            break;
                        case 3:
                            message.height = reader.readUint64();
                            break;
                        case 4:
                            reader.readMessage(message.claim, () => message.claim = dependency_2.google.protobuf.Any.deserialize(reader));
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
                return Attestation.deserialize(bytes);
            }
        }
        _Attestation_one_of_decls = new WeakMap();
        v1.Attestation = Attestation;
        class ERC20Token extends pb_1.Message {
            constructor(data) {
                super();
                _ERC20Token_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ERC20Token_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("contract" in data && data.contract != undefined) {
                        this.contract = data.contract;
                    }
                    if ("amount" in data && data.amount != undefined) {
                        this.amount = data.amount;
                    }
                }
            }
            get contract() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set contract(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get amount() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set amount(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new ERC20Token({});
                if (data.contract != null) {
                    message.contract = data.contract;
                }
                if (data.amount != null) {
                    message.amount = data.amount;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.contract != null) {
                    data.contract = this.contract;
                }
                if (this.amount != null) {
                    data.amount = this.amount;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.contract.length)
                    writer.writeString(1, this.contract);
                if (this.amount.length)
                    writer.writeString(2, this.amount);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ERC20Token();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.contract = reader.readString();
                            break;
                        case 2:
                            message.amount = reader.readString();
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
                return ERC20Token.deserialize(bytes);
            }
        }
        _ERC20Token_one_of_decls = new WeakMap();
        v1.ERC20Token = ERC20Token;
        class EventObservation extends pb_1.Message {
            constructor(data) {
                super();
                _EventObservation_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventObservation_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("attestation_type" in data && data.attestation_type != undefined) {
                        this.attestation_type = data.attestation_type;
                    }
                    if ("bridge_contract" in data && data.bridge_contract != undefined) {
                        this.bridge_contract = data.bridge_contract;
                    }
                    if ("bridge_chain_id" in data && data.bridge_chain_id != undefined) {
                        this.bridge_chain_id = data.bridge_chain_id;
                    }
                    if ("attestation_id" in data && data.attestation_id != undefined) {
                        this.attestation_id = data.attestation_id;
                    }
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                }
            }
            get attestation_type() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set attestation_type(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get bridge_contract() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set bridge_contract(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get bridge_chain_id() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set bridge_chain_id(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get attestation_id() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set attestation_id(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 5, "");
            }
            set nonce(value) {
                pb_1.Message.setField(this, 5, value);
            }
            static fromObject(data) {
                const message = new EventObservation({});
                if (data.attestation_type != null) {
                    message.attestation_type = data.attestation_type;
                }
                if (data.bridge_contract != null) {
                    message.bridge_contract = data.bridge_contract;
                }
                if (data.bridge_chain_id != null) {
                    message.bridge_chain_id = data.bridge_chain_id;
                }
                if (data.attestation_id != null) {
                    message.attestation_id = data.attestation_id;
                }
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.attestation_type != null) {
                    data.attestation_type = this.attestation_type;
                }
                if (this.bridge_contract != null) {
                    data.bridge_contract = this.bridge_contract;
                }
                if (this.bridge_chain_id != null) {
                    data.bridge_chain_id = this.bridge_chain_id;
                }
                if (this.attestation_id != null) {
                    data.attestation_id = this.attestation_id;
                }
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.attestation_type.length)
                    writer.writeString(1, this.attestation_type);
                if (this.bridge_contract.length)
                    writer.writeString(2, this.bridge_contract);
                if (this.bridge_chain_id.length)
                    writer.writeString(3, this.bridge_chain_id);
                if (this.attestation_id.length)
                    writer.writeString(4, this.attestation_id);
                if (this.nonce.length)
                    writer.writeString(5, this.nonce);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventObservation();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.attestation_type = reader.readString();
                            break;
                        case 2:
                            message.bridge_contract = reader.readString();
                            break;
                        case 3:
                            message.bridge_chain_id = reader.readString();
                            break;
                        case 4:
                            message.attestation_id = reader.readString();
                            break;
                        case 5:
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
                return EventObservation.deserialize(bytes);
            }
        }
        _EventObservation_one_of_decls = new WeakMap();
        v1.EventObservation = EventObservation;
        class EventInvalidSendToCosmosReceiver extends pb_1.Message {
            constructor(data) {
                super();
                _EventInvalidSendToCosmosReceiver_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventInvalidSendToCosmosReceiver_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("amount" in data && data.amount != undefined) {
                        this.amount = data.amount;
                    }
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                    if ("token" in data && data.token != undefined) {
                        this.token = data.token;
                    }
                    if ("sender" in data && data.sender != undefined) {
                        this.sender = data.sender;
                    }
                }
            }
            get amount() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set amount(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set nonce(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get token() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set token(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get sender() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set sender(value) {
                pb_1.Message.setField(this, 4, value);
            }
            static fromObject(data) {
                const message = new EventInvalidSendToCosmosReceiver({});
                if (data.amount != null) {
                    message.amount = data.amount;
                }
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                if (data.token != null) {
                    message.token = data.token;
                }
                if (data.sender != null) {
                    message.sender = data.sender;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.amount != null) {
                    data.amount = this.amount;
                }
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                if (this.token != null) {
                    data.token = this.token;
                }
                if (this.sender != null) {
                    data.sender = this.sender;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.amount.length)
                    writer.writeString(1, this.amount);
                if (this.nonce.length)
                    writer.writeString(2, this.nonce);
                if (this.token.length)
                    writer.writeString(3, this.token);
                if (this.sender.length)
                    writer.writeString(4, this.sender);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventInvalidSendToCosmosReceiver();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.amount = reader.readString();
                            break;
                        case 2:
                            message.nonce = reader.readString();
                            break;
                        case 3:
                            message.token = reader.readString();
                            break;
                        case 4:
                            message.sender = reader.readString();
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
                return EventInvalidSendToCosmosReceiver.deserialize(bytes);
            }
        }
        _EventInvalidSendToCosmosReceiver_one_of_decls = new WeakMap();
        v1.EventInvalidSendToCosmosReceiver = EventInvalidSendToCosmosReceiver;
        class EventSendToCosmos extends pb_1.Message {
            constructor(data) {
                super();
                _EventSendToCosmos_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventSendToCosmos_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("amount" in data && data.amount != undefined) {
                        this.amount = data.amount;
                    }
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                    if ("token" in data && data.token != undefined) {
                        this.token = data.token;
                    }
                }
            }
            get amount() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set amount(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set nonce(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get token() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set token(value) {
                pb_1.Message.setField(this, 3, value);
            }
            static fromObject(data) {
                const message = new EventSendToCosmos({});
                if (data.amount != null) {
                    message.amount = data.amount;
                }
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                if (data.token != null) {
                    message.token = data.token;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.amount != null) {
                    data.amount = this.amount;
                }
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                if (this.token != null) {
                    data.token = this.token;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.amount.length)
                    writer.writeString(1, this.amount);
                if (this.nonce.length)
                    writer.writeString(2, this.nonce);
                if (this.token.length)
                    writer.writeString(3, this.token);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventSendToCosmos();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.amount = reader.readString();
                            break;
                        case 2:
                            message.nonce = reader.readString();
                            break;
                        case 3:
                            message.token = reader.readString();
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
                return EventSendToCosmos.deserialize(bytes);
            }
        }
        _EventSendToCosmos_one_of_decls = new WeakMap();
        v1.EventSendToCosmos = EventSendToCosmos;
        class EventSendToCosmosLocal extends pb_1.Message {
            constructor(data) {
                super();
                _EventSendToCosmosLocal_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventSendToCosmosLocal_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                    if ("receiver" in data && data.receiver != undefined) {
                        this.receiver = data.receiver;
                    }
                    if ("token" in data && data.token != undefined) {
                        this.token = data.token;
                    }
                    if ("amount" in data && data.amount != undefined) {
                        this.amount = data.amount;
                    }
                }
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get receiver() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set receiver(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get token() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set token(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get amount() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set amount(value) {
                pb_1.Message.setField(this, 4, value);
            }
            static fromObject(data) {
                const message = new EventSendToCosmosLocal({});
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                if (data.receiver != null) {
                    message.receiver = data.receiver;
                }
                if (data.token != null) {
                    message.token = data.token;
                }
                if (data.amount != null) {
                    message.amount = data.amount;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                if (this.receiver != null) {
                    data.receiver = this.receiver;
                }
                if (this.token != null) {
                    data.token = this.token;
                }
                if (this.amount != null) {
                    data.amount = this.amount;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.nonce.length)
                    writer.writeString(1, this.nonce);
                if (this.receiver.length)
                    writer.writeString(2, this.receiver);
                if (this.token.length)
                    writer.writeString(3, this.token);
                if (this.amount.length)
                    writer.writeString(4, this.amount);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventSendToCosmosLocal();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.nonce = reader.readString();
                            break;
                        case 2:
                            message.receiver = reader.readString();
                            break;
                        case 3:
                            message.token = reader.readString();
                            break;
                        case 4:
                            message.amount = reader.readString();
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
                return EventSendToCosmosLocal.deserialize(bytes);
            }
        }
        _EventSendToCosmosLocal_one_of_decls = new WeakMap();
        v1.EventSendToCosmosLocal = EventSendToCosmosLocal;
        class EventSendToCosmosIbc extends pb_1.Message {
            constructor(data) {
                super();
                _EventSendToCosmosIbc_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventSendToCosmosIbc_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                    if ("receiver" in data && data.receiver != undefined) {
                        this.receiver = data.receiver;
                    }
                    if ("token" in data && data.token != undefined) {
                        this.token = data.token;
                    }
                    if ("amount" in data && data.amount != undefined) {
                        this.amount = data.amount;
                    }
                    if ("channel" in data && data.channel != undefined) {
                        this.channel = data.channel;
                    }
                }
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get receiver() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set receiver(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get token() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set token(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get amount() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set amount(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get channel() {
                return pb_1.Message.getFieldWithDefault(this, 5, "");
            }
            set channel(value) {
                pb_1.Message.setField(this, 5, value);
            }
            static fromObject(data) {
                const message = new EventSendToCosmosIbc({});
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                if (data.receiver != null) {
                    message.receiver = data.receiver;
                }
                if (data.token != null) {
                    message.token = data.token;
                }
                if (data.amount != null) {
                    message.amount = data.amount;
                }
                if (data.channel != null) {
                    message.channel = data.channel;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                if (this.receiver != null) {
                    data.receiver = this.receiver;
                }
                if (this.token != null) {
                    data.token = this.token;
                }
                if (this.amount != null) {
                    data.amount = this.amount;
                }
                if (this.channel != null) {
                    data.channel = this.channel;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.nonce.length)
                    writer.writeString(1, this.nonce);
                if (this.receiver.length)
                    writer.writeString(2, this.receiver);
                if (this.token.length)
                    writer.writeString(3, this.token);
                if (this.amount.length)
                    writer.writeString(4, this.amount);
                if (this.channel.length)
                    writer.writeString(5, this.channel);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventSendToCosmosIbc();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.nonce = reader.readString();
                            break;
                        case 2:
                            message.receiver = reader.readString();
                            break;
                        case 3:
                            message.token = reader.readString();
                            break;
                        case 4:
                            message.amount = reader.readString();
                            break;
                        case 5:
                            message.channel = reader.readString();
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
                return EventSendToCosmosIbc.deserialize(bytes);
            }
        }
        _EventSendToCosmosIbc_one_of_decls = new WeakMap();
        v1.EventSendToCosmosIbc = EventSendToCosmosIbc;
    })(v1 = gravity.v1 || (gravity.v1 = {}));
})(gravity = exports.gravity || (exports.gravity = {}));
//# sourceMappingURL=attestation.js.map