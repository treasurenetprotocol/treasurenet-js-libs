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
const dependency_1 = __importStar(require("./../../../core/connection/v1/connection"));
const dependency_2 = __importStar(require("./../../../core/channel/v1/channel"));
const dependency_4 = __importStar(require("./../../../../google/protobuf/any"));
const pb_1 = __importStar(require("google-protobuf"));
var ibc;
(function (ibc) {
    var lightclients;
    (function (lightclients) {
        var solomachine;
        (function (solomachine) {
            var v2;
            (function (v2) {
                var _ClientState_one_of_decls, _ConsensusState_one_of_decls, _Header_one_of_decls, _Misbehaviour_one_of_decls, _SignatureAndData_one_of_decls, _TimestampedSignatureData_one_of_decls, _SignBytes_one_of_decls, _HeaderData_one_of_decls, _ClientStateData_one_of_decls, _ConsensusStateData_one_of_decls, _ConnectionStateData_one_of_decls, _ChannelStateData_one_of_decls, _PacketCommitmentData_one_of_decls, _PacketAcknowledgementData_one_of_decls, _PacketReceiptAbsenceData_one_of_decls, _NextSequenceRecvData_one_of_decls;
                let DataType;
                (function (DataType) {
                    DataType[DataType["DATA_TYPE_UNINITIALIZED_UNSPECIFIED"] = 0] = "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
                    DataType[DataType["DATA_TYPE_CLIENT_STATE"] = 1] = "DATA_TYPE_CLIENT_STATE";
                    DataType[DataType["DATA_TYPE_CONSENSUS_STATE"] = 2] = "DATA_TYPE_CONSENSUS_STATE";
                    DataType[DataType["DATA_TYPE_CONNECTION_STATE"] = 3] = "DATA_TYPE_CONNECTION_STATE";
                    DataType[DataType["DATA_TYPE_CHANNEL_STATE"] = 4] = "DATA_TYPE_CHANNEL_STATE";
                    DataType[DataType["DATA_TYPE_PACKET_COMMITMENT"] = 5] = "DATA_TYPE_PACKET_COMMITMENT";
                    DataType[DataType["DATA_TYPE_PACKET_ACKNOWLEDGEMENT"] = 6] = "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
                    DataType[DataType["DATA_TYPE_PACKET_RECEIPT_ABSENCE"] = 7] = "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
                    DataType[DataType["DATA_TYPE_NEXT_SEQUENCE_RECV"] = 8] = "DATA_TYPE_NEXT_SEQUENCE_RECV";
                    DataType[DataType["DATA_TYPE_HEADER"] = 9] = "DATA_TYPE_HEADER";
                })(DataType = v2.DataType || (v2.DataType = {}));
                class ClientState extends pb_1.Message {
                    constructor(data) {
                        super();
                        _ClientState_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ClientState_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("sequence" in data && data.sequence != undefined) {
                                this.sequence = data.sequence;
                            }
                            if ("is_frozen" in data && data.is_frozen != undefined) {
                                this.is_frozen = data.is_frozen;
                            }
                            if ("consensus_state" in data && data.consensus_state != undefined) {
                                this.consensus_state = data.consensus_state;
                            }
                            if ("allow_update_after_proposal" in data && data.allow_update_after_proposal != undefined) {
                                this.allow_update_after_proposal = data.allow_update_after_proposal;
                            }
                        }
                    }
                    get sequence() {
                        return pb_1.Message.getFieldWithDefault(this, 1, 0);
                    }
                    set sequence(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get is_frozen() {
                        return pb_1.Message.getFieldWithDefault(this, 2, false);
                    }
                    set is_frozen(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get consensus_state() {
                        return pb_1.Message.getWrapperField(this, ConsensusState, 3);
                    }
                    set consensus_state(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_consensus_state() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    get allow_update_after_proposal() {
                        return pb_1.Message.getFieldWithDefault(this, 4, false);
                    }
                    set allow_update_after_proposal(value) {
                        pb_1.Message.setField(this, 4, value);
                    }
                    static fromObject(data) {
                        const message = new ClientState({});
                        if (data.sequence != null) {
                            message.sequence = data.sequence;
                        }
                        if (data.is_frozen != null) {
                            message.is_frozen = data.is_frozen;
                        }
                        if (data.consensus_state != null) {
                            message.consensus_state = ConsensusState.fromObject(data.consensus_state);
                        }
                        if (data.allow_update_after_proposal != null) {
                            message.allow_update_after_proposal = data.allow_update_after_proposal;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.sequence != null) {
                            data.sequence = this.sequence;
                        }
                        if (this.is_frozen != null) {
                            data.is_frozen = this.is_frozen;
                        }
                        if (this.consensus_state != null) {
                            data.consensus_state = this.consensus_state.toObject();
                        }
                        if (this.allow_update_after_proposal != null) {
                            data.allow_update_after_proposal = this.allow_update_after_proposal;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.sequence != 0)
                            writer.writeUint64(1, this.sequence);
                        if (this.is_frozen != false)
                            writer.writeBool(2, this.is_frozen);
                        if (this.has_consensus_state)
                            writer.writeMessage(3, this.consensus_state, () => this.consensus_state.serialize(writer));
                        if (this.allow_update_after_proposal != false)
                            writer.writeBool(4, this.allow_update_after_proposal);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClientState();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.sequence = reader.readUint64();
                                    break;
                                case 2:
                                    message.is_frozen = reader.readBool();
                                    break;
                                case 3:
                                    reader.readMessage(message.consensus_state, () => message.consensus_state = ConsensusState.deserialize(reader));
                                    break;
                                case 4:
                                    message.allow_update_after_proposal = reader.readBool();
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
                        return ClientState.deserialize(bytes);
                    }
                }
                _ClientState_one_of_decls = new WeakMap();
                v2.ClientState = ClientState;
                class ConsensusState extends pb_1.Message {
                    constructor(data) {
                        super();
                        _ConsensusState_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ConsensusState_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("public_key" in data && data.public_key != undefined) {
                                this.public_key = data.public_key;
                            }
                            if ("diversifier" in data && data.diversifier != undefined) {
                                this.diversifier = data.diversifier;
                            }
                            if ("timestamp" in data && data.timestamp != undefined) {
                                this.timestamp = data.timestamp;
                            }
                        }
                    }
                    get public_key() {
                        return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Any, 1);
                    }
                    set public_key(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_public_key() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    get diversifier() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set diversifier(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get timestamp() {
                        return pb_1.Message.getFieldWithDefault(this, 3, 0);
                    }
                    set timestamp(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    static fromObject(data) {
                        const message = new ConsensusState({});
                        if (data.public_key != null) {
                            message.public_key = dependency_4.google.protobuf.Any.fromObject(data.public_key);
                        }
                        if (data.diversifier != null) {
                            message.diversifier = data.diversifier;
                        }
                        if (data.timestamp != null) {
                            message.timestamp = data.timestamp;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.public_key != null) {
                            data.public_key = this.public_key.toObject();
                        }
                        if (this.diversifier != null) {
                            data.diversifier = this.diversifier;
                        }
                        if (this.timestamp != null) {
                            data.timestamp = this.timestamp;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_public_key)
                            writer.writeMessage(1, this.public_key, () => this.public_key.serialize(writer));
                        if (this.diversifier.length)
                            writer.writeString(2, this.diversifier);
                        if (this.timestamp != 0)
                            writer.writeUint64(3, this.timestamp);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ConsensusState();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.public_key, () => message.public_key = dependency_4.google.protobuf.Any.deserialize(reader));
                                    break;
                                case 2:
                                    message.diversifier = reader.readString();
                                    break;
                                case 3:
                                    message.timestamp = reader.readUint64();
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
                        return ConsensusState.deserialize(bytes);
                    }
                }
                _ConsensusState_one_of_decls = new WeakMap();
                v2.ConsensusState = ConsensusState;
                class Header extends pb_1.Message {
                    constructor(data) {
                        super();
                        _Header_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Header_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("sequence" in data && data.sequence != undefined) {
                                this.sequence = data.sequence;
                            }
                            if ("timestamp" in data && data.timestamp != undefined) {
                                this.timestamp = data.timestamp;
                            }
                            if ("signature" in data && data.signature != undefined) {
                                this.signature = data.signature;
                            }
                            if ("new_public_key" in data && data.new_public_key != undefined) {
                                this.new_public_key = data.new_public_key;
                            }
                            if ("new_diversifier" in data && data.new_diversifier != undefined) {
                                this.new_diversifier = data.new_diversifier;
                            }
                        }
                    }
                    get sequence() {
                        return pb_1.Message.getFieldWithDefault(this, 1, 0);
                    }
                    set sequence(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get timestamp() {
                        return pb_1.Message.getFieldWithDefault(this, 2, 0);
                    }
                    set timestamp(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get signature() {
                        return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
                    }
                    set signature(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    get new_public_key() {
                        return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Any, 4);
                    }
                    set new_public_key(value) {
                        pb_1.Message.setWrapperField(this, 4, value);
                    }
                    get has_new_public_key() {
                        return pb_1.Message.getField(this, 4) != null;
                    }
                    get new_diversifier() {
                        return pb_1.Message.getFieldWithDefault(this, 5, "");
                    }
                    set new_diversifier(value) {
                        pb_1.Message.setField(this, 5, value);
                    }
                    static fromObject(data) {
                        const message = new Header({});
                        if (data.sequence != null) {
                            message.sequence = data.sequence;
                        }
                        if (data.timestamp != null) {
                            message.timestamp = data.timestamp;
                        }
                        if (data.signature != null) {
                            message.signature = data.signature;
                        }
                        if (data.new_public_key != null) {
                            message.new_public_key = dependency_4.google.protobuf.Any.fromObject(data.new_public_key);
                        }
                        if (data.new_diversifier != null) {
                            message.new_diversifier = data.new_diversifier;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.sequence != null) {
                            data.sequence = this.sequence;
                        }
                        if (this.timestamp != null) {
                            data.timestamp = this.timestamp;
                        }
                        if (this.signature != null) {
                            data.signature = this.signature;
                        }
                        if (this.new_public_key != null) {
                            data.new_public_key = this.new_public_key.toObject();
                        }
                        if (this.new_diversifier != null) {
                            data.new_diversifier = this.new_diversifier;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.sequence != 0)
                            writer.writeUint64(1, this.sequence);
                        if (this.timestamp != 0)
                            writer.writeUint64(2, this.timestamp);
                        if (this.signature.length)
                            writer.writeBytes(3, this.signature);
                        if (this.has_new_public_key)
                            writer.writeMessage(4, this.new_public_key, () => this.new_public_key.serialize(writer));
                        if (this.new_diversifier.length)
                            writer.writeString(5, this.new_diversifier);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Header();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.sequence = reader.readUint64();
                                    break;
                                case 2:
                                    message.timestamp = reader.readUint64();
                                    break;
                                case 3:
                                    message.signature = reader.readBytes();
                                    break;
                                case 4:
                                    reader.readMessage(message.new_public_key, () => message.new_public_key = dependency_4.google.protobuf.Any.deserialize(reader));
                                    break;
                                case 5:
                                    message.new_diversifier = reader.readString();
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
                        return Header.deserialize(bytes);
                    }
                }
                _Header_one_of_decls = new WeakMap();
                v2.Header = Header;
                class Misbehaviour extends pb_1.Message {
                    constructor(data) {
                        super();
                        _Misbehaviour_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Misbehaviour_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("client_id" in data && data.client_id != undefined) {
                                this.client_id = data.client_id;
                            }
                            if ("sequence" in data && data.sequence != undefined) {
                                this.sequence = data.sequence;
                            }
                            if ("signature_one" in data && data.signature_one != undefined) {
                                this.signature_one = data.signature_one;
                            }
                            if ("signature_two" in data && data.signature_two != undefined) {
                                this.signature_two = data.signature_two;
                            }
                        }
                    }
                    get client_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set client_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get sequence() {
                        return pb_1.Message.getFieldWithDefault(this, 2, 0);
                    }
                    set sequence(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get signature_one() {
                        return pb_1.Message.getWrapperField(this, SignatureAndData, 3);
                    }
                    set signature_one(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_signature_one() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    get signature_two() {
                        return pb_1.Message.getWrapperField(this, SignatureAndData, 4);
                    }
                    set signature_two(value) {
                        pb_1.Message.setWrapperField(this, 4, value);
                    }
                    get has_signature_two() {
                        return pb_1.Message.getField(this, 4) != null;
                    }
                    static fromObject(data) {
                        const message = new Misbehaviour({});
                        if (data.client_id != null) {
                            message.client_id = data.client_id;
                        }
                        if (data.sequence != null) {
                            message.sequence = data.sequence;
                        }
                        if (data.signature_one != null) {
                            message.signature_one = SignatureAndData.fromObject(data.signature_one);
                        }
                        if (data.signature_two != null) {
                            message.signature_two = SignatureAndData.fromObject(data.signature_two);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.client_id != null) {
                            data.client_id = this.client_id;
                        }
                        if (this.sequence != null) {
                            data.sequence = this.sequence;
                        }
                        if (this.signature_one != null) {
                            data.signature_one = this.signature_one.toObject();
                        }
                        if (this.signature_two != null) {
                            data.signature_two = this.signature_two.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.client_id.length)
                            writer.writeString(1, this.client_id);
                        if (this.sequence != 0)
                            writer.writeUint64(2, this.sequence);
                        if (this.has_signature_one)
                            writer.writeMessage(3, this.signature_one, () => this.signature_one.serialize(writer));
                        if (this.has_signature_two)
                            writer.writeMessage(4, this.signature_two, () => this.signature_two.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Misbehaviour();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.client_id = reader.readString();
                                    break;
                                case 2:
                                    message.sequence = reader.readUint64();
                                    break;
                                case 3:
                                    reader.readMessage(message.signature_one, () => message.signature_one = SignatureAndData.deserialize(reader));
                                    break;
                                case 4:
                                    reader.readMessage(message.signature_two, () => message.signature_two = SignatureAndData.deserialize(reader));
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
                        return Misbehaviour.deserialize(bytes);
                    }
                }
                _Misbehaviour_one_of_decls = new WeakMap();
                v2.Misbehaviour = Misbehaviour;
                class SignatureAndData extends pb_1.Message {
                    constructor(data) {
                        super();
                        _SignatureAndData_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SignatureAndData_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("signature" in data && data.signature != undefined) {
                                this.signature = data.signature;
                            }
                            if ("data_type" in data && data.data_type != undefined) {
                                this.data_type = data.data_type;
                            }
                            if ("data" in data && data.data != undefined) {
                                this.data = data.data;
                            }
                            if ("timestamp" in data && data.timestamp != undefined) {
                                this.timestamp = data.timestamp;
                            }
                        }
                    }
                    get signature() {
                        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                    }
                    set signature(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get data_type() {
                        return pb_1.Message.getFieldWithDefault(this, 2, DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED);
                    }
                    set data_type(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get data() {
                        return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
                    }
                    set data(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    get timestamp() {
                        return pb_1.Message.getFieldWithDefault(this, 4, 0);
                    }
                    set timestamp(value) {
                        pb_1.Message.setField(this, 4, value);
                    }
                    static fromObject(data) {
                        const message = new SignatureAndData({});
                        if (data.signature != null) {
                            message.signature = data.signature;
                        }
                        if (data.data_type != null) {
                            message.data_type = data.data_type;
                        }
                        if (data.data != null) {
                            message.data = data.data;
                        }
                        if (data.timestamp != null) {
                            message.timestamp = data.timestamp;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.signature != null) {
                            data.signature = this.signature;
                        }
                        if (this.data_type != null) {
                            data.data_type = this.data_type;
                        }
                        if (this.data != null) {
                            data.data = this.data;
                        }
                        if (this.timestamp != null) {
                            data.timestamp = this.timestamp;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.signature.length)
                            writer.writeBytes(1, this.signature);
                        if (this.data_type != DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED)
                            writer.writeEnum(2, this.data_type);
                        if (this.data.length)
                            writer.writeBytes(3, this.data);
                        if (this.timestamp != 0)
                            writer.writeUint64(4, this.timestamp);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SignatureAndData();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.signature = reader.readBytes();
                                    break;
                                case 2:
                                    message.data_type = reader.readEnum();
                                    break;
                                case 3:
                                    message.data = reader.readBytes();
                                    break;
                                case 4:
                                    message.timestamp = reader.readUint64();
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
                        return SignatureAndData.deserialize(bytes);
                    }
                }
                _SignatureAndData_one_of_decls = new WeakMap();
                v2.SignatureAndData = SignatureAndData;
                class TimestampedSignatureData extends pb_1.Message {
                    constructor(data) {
                        super();
                        _TimestampedSignatureData_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _TimestampedSignatureData_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("signature_data" in data && data.signature_data != undefined) {
                                this.signature_data = data.signature_data;
                            }
                            if ("timestamp" in data && data.timestamp != undefined) {
                                this.timestamp = data.timestamp;
                            }
                        }
                    }
                    get signature_data() {
                        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                    }
                    set signature_data(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get timestamp() {
                        return pb_1.Message.getFieldWithDefault(this, 2, 0);
                    }
                    set timestamp(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    static fromObject(data) {
                        const message = new TimestampedSignatureData({});
                        if (data.signature_data != null) {
                            message.signature_data = data.signature_data;
                        }
                        if (data.timestamp != null) {
                            message.timestamp = data.timestamp;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.signature_data != null) {
                            data.signature_data = this.signature_data;
                        }
                        if (this.timestamp != null) {
                            data.timestamp = this.timestamp;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.signature_data.length)
                            writer.writeBytes(1, this.signature_data);
                        if (this.timestamp != 0)
                            writer.writeUint64(2, this.timestamp);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TimestampedSignatureData();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.signature_data = reader.readBytes();
                                    break;
                                case 2:
                                    message.timestamp = reader.readUint64();
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
                        return TimestampedSignatureData.deserialize(bytes);
                    }
                }
                _TimestampedSignatureData_one_of_decls = new WeakMap();
                v2.TimestampedSignatureData = TimestampedSignatureData;
                class SignBytes extends pb_1.Message {
                    constructor(data) {
                        super();
                        _SignBytes_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SignBytes_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("sequence" in data && data.sequence != undefined) {
                                this.sequence = data.sequence;
                            }
                            if ("timestamp" in data && data.timestamp != undefined) {
                                this.timestamp = data.timestamp;
                            }
                            if ("diversifier" in data && data.diversifier != undefined) {
                                this.diversifier = data.diversifier;
                            }
                            if ("data_type" in data && data.data_type != undefined) {
                                this.data_type = data.data_type;
                            }
                            if ("data" in data && data.data != undefined) {
                                this.data = data.data;
                            }
                        }
                    }
                    get sequence() {
                        return pb_1.Message.getFieldWithDefault(this, 1, 0);
                    }
                    set sequence(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get timestamp() {
                        return pb_1.Message.getFieldWithDefault(this, 2, 0);
                    }
                    set timestamp(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get diversifier() {
                        return pb_1.Message.getFieldWithDefault(this, 3, "");
                    }
                    set diversifier(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    get data_type() {
                        return pb_1.Message.getFieldWithDefault(this, 4, DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED);
                    }
                    set data_type(value) {
                        pb_1.Message.setField(this, 4, value);
                    }
                    get data() {
                        return pb_1.Message.getFieldWithDefault(this, 5, new Uint8Array(0));
                    }
                    set data(value) {
                        pb_1.Message.setField(this, 5, value);
                    }
                    static fromObject(data) {
                        const message = new SignBytes({});
                        if (data.sequence != null) {
                            message.sequence = data.sequence;
                        }
                        if (data.timestamp != null) {
                            message.timestamp = data.timestamp;
                        }
                        if (data.diversifier != null) {
                            message.diversifier = data.diversifier;
                        }
                        if (data.data_type != null) {
                            message.data_type = data.data_type;
                        }
                        if (data.data != null) {
                            message.data = data.data;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.sequence != null) {
                            data.sequence = this.sequence;
                        }
                        if (this.timestamp != null) {
                            data.timestamp = this.timestamp;
                        }
                        if (this.diversifier != null) {
                            data.diversifier = this.diversifier;
                        }
                        if (this.data_type != null) {
                            data.data_type = this.data_type;
                        }
                        if (this.data != null) {
                            data.data = this.data;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.sequence != 0)
                            writer.writeUint64(1, this.sequence);
                        if (this.timestamp != 0)
                            writer.writeUint64(2, this.timestamp);
                        if (this.diversifier.length)
                            writer.writeString(3, this.diversifier);
                        if (this.data_type != DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED)
                            writer.writeEnum(4, this.data_type);
                        if (this.data.length)
                            writer.writeBytes(5, this.data);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SignBytes();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.sequence = reader.readUint64();
                                    break;
                                case 2:
                                    message.timestamp = reader.readUint64();
                                    break;
                                case 3:
                                    message.diversifier = reader.readString();
                                    break;
                                case 4:
                                    message.data_type = reader.readEnum();
                                    break;
                                case 5:
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
                        return SignBytes.deserialize(bytes);
                    }
                }
                _SignBytes_one_of_decls = new WeakMap();
                v2.SignBytes = SignBytes;
                class HeaderData extends pb_1.Message {
                    constructor(data) {
                        super();
                        _HeaderData_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HeaderData_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("new_pub_key" in data && data.new_pub_key != undefined) {
                                this.new_pub_key = data.new_pub_key;
                            }
                            if ("new_diversifier" in data && data.new_diversifier != undefined) {
                                this.new_diversifier = data.new_diversifier;
                            }
                        }
                    }
                    get new_pub_key() {
                        return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Any, 1);
                    }
                    set new_pub_key(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_new_pub_key() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    get new_diversifier() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set new_diversifier(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    static fromObject(data) {
                        const message = new HeaderData({});
                        if (data.new_pub_key != null) {
                            message.new_pub_key = dependency_4.google.protobuf.Any.fromObject(data.new_pub_key);
                        }
                        if (data.new_diversifier != null) {
                            message.new_diversifier = data.new_diversifier;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.new_pub_key != null) {
                            data.new_pub_key = this.new_pub_key.toObject();
                        }
                        if (this.new_diversifier != null) {
                            data.new_diversifier = this.new_diversifier;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_new_pub_key)
                            writer.writeMessage(1, this.new_pub_key, () => this.new_pub_key.serialize(writer));
                        if (this.new_diversifier.length)
                            writer.writeString(2, this.new_diversifier);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HeaderData();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.new_pub_key, () => message.new_pub_key = dependency_4.google.protobuf.Any.deserialize(reader));
                                    break;
                                case 2:
                                    message.new_diversifier = reader.readString();
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
                        return HeaderData.deserialize(bytes);
                    }
                }
                _HeaderData_one_of_decls = new WeakMap();
                v2.HeaderData = HeaderData;
                class ClientStateData extends pb_1.Message {
                    constructor(data) {
                        super();
                        _ClientStateData_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ClientStateData_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("path" in data && data.path != undefined) {
                                this.path = data.path;
                            }
                            if ("client_state" in data && data.client_state != undefined) {
                                this.client_state = data.client_state;
                            }
                        }
                    }
                    get path() {
                        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                    }
                    set path(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get client_state() {
                        return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Any, 2);
                    }
                    set client_state(value) {
                        pb_1.Message.setWrapperField(this, 2, value);
                    }
                    get has_client_state() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    static fromObject(data) {
                        const message = new ClientStateData({});
                        if (data.path != null) {
                            message.path = data.path;
                        }
                        if (data.client_state != null) {
                            message.client_state = dependency_4.google.protobuf.Any.fromObject(data.client_state);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.path != null) {
                            data.path = this.path;
                        }
                        if (this.client_state != null) {
                            data.client_state = this.client_state.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.path.length)
                            writer.writeBytes(1, this.path);
                        if (this.has_client_state)
                            writer.writeMessage(2, this.client_state, () => this.client_state.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClientStateData();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.path = reader.readBytes();
                                    break;
                                case 2:
                                    reader.readMessage(message.client_state, () => message.client_state = dependency_4.google.protobuf.Any.deserialize(reader));
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
                        return ClientStateData.deserialize(bytes);
                    }
                }
                _ClientStateData_one_of_decls = new WeakMap();
                v2.ClientStateData = ClientStateData;
                class ConsensusStateData extends pb_1.Message {
                    constructor(data) {
                        super();
                        _ConsensusStateData_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ConsensusStateData_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("path" in data && data.path != undefined) {
                                this.path = data.path;
                            }
                            if ("consensus_state" in data && data.consensus_state != undefined) {
                                this.consensus_state = data.consensus_state;
                            }
                        }
                    }
                    get path() {
                        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                    }
                    set path(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get consensus_state() {
                        return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Any, 2);
                    }
                    set consensus_state(value) {
                        pb_1.Message.setWrapperField(this, 2, value);
                    }
                    get has_consensus_state() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    static fromObject(data) {
                        const message = new ConsensusStateData({});
                        if (data.path != null) {
                            message.path = data.path;
                        }
                        if (data.consensus_state != null) {
                            message.consensus_state = dependency_4.google.protobuf.Any.fromObject(data.consensus_state);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.path != null) {
                            data.path = this.path;
                        }
                        if (this.consensus_state != null) {
                            data.consensus_state = this.consensus_state.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.path.length)
                            writer.writeBytes(1, this.path);
                        if (this.has_consensus_state)
                            writer.writeMessage(2, this.consensus_state, () => this.consensus_state.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ConsensusStateData();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.path = reader.readBytes();
                                    break;
                                case 2:
                                    reader.readMessage(message.consensus_state, () => message.consensus_state = dependency_4.google.protobuf.Any.deserialize(reader));
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
                        return ConsensusStateData.deserialize(bytes);
                    }
                }
                _ConsensusStateData_one_of_decls = new WeakMap();
                v2.ConsensusStateData = ConsensusStateData;
                class ConnectionStateData extends pb_1.Message {
                    constructor(data) {
                        super();
                        _ConnectionStateData_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ConnectionStateData_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("path" in data && data.path != undefined) {
                                this.path = data.path;
                            }
                            if ("connection" in data && data.connection != undefined) {
                                this.connection = data.connection;
                            }
                        }
                    }
                    get path() {
                        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                    }
                    set path(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get connection() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.connection.v1.ConnectionEnd, 2);
                    }
                    set connection(value) {
                        pb_1.Message.setWrapperField(this, 2, value);
                    }
                    get has_connection() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    static fromObject(data) {
                        const message = new ConnectionStateData({});
                        if (data.path != null) {
                            message.path = data.path;
                        }
                        if (data.connection != null) {
                            message.connection = dependency_1.ibc.core.connection.v1.ConnectionEnd.fromObject(data.connection);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.path != null) {
                            data.path = this.path;
                        }
                        if (this.connection != null) {
                            data.connection = this.connection.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.path.length)
                            writer.writeBytes(1, this.path);
                        if (this.has_connection)
                            writer.writeMessage(2, this.connection, () => this.connection.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ConnectionStateData();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.path = reader.readBytes();
                                    break;
                                case 2:
                                    reader.readMessage(message.connection, () => message.connection = dependency_1.ibc.core.connection.v1.ConnectionEnd.deserialize(reader));
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
                        return ConnectionStateData.deserialize(bytes);
                    }
                }
                _ConnectionStateData_one_of_decls = new WeakMap();
                v2.ConnectionStateData = ConnectionStateData;
                class ChannelStateData extends pb_1.Message {
                    constructor(data) {
                        super();
                        _ChannelStateData_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ChannelStateData_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("path" in data && data.path != undefined) {
                                this.path = data.path;
                            }
                            if ("channel" in data && data.channel != undefined) {
                                this.channel = data.channel;
                            }
                        }
                    }
                    get path() {
                        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                    }
                    set path(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel() {
                        return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.channel.v1.Channel, 2);
                    }
                    set channel(value) {
                        pb_1.Message.setWrapperField(this, 2, value);
                    }
                    get has_channel() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    static fromObject(data) {
                        const message = new ChannelStateData({});
                        if (data.path != null) {
                            message.path = data.path;
                        }
                        if (data.channel != null) {
                            message.channel = dependency_2.ibc.core.channel.v1.Channel.fromObject(data.channel);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.path != null) {
                            data.path = this.path;
                        }
                        if (this.channel != null) {
                            data.channel = this.channel.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.path.length)
                            writer.writeBytes(1, this.path);
                        if (this.has_channel)
                            writer.writeMessage(2, this.channel, () => this.channel.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChannelStateData();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.path = reader.readBytes();
                                    break;
                                case 2:
                                    reader.readMessage(message.channel, () => message.channel = dependency_2.ibc.core.channel.v1.Channel.deserialize(reader));
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
                        return ChannelStateData.deserialize(bytes);
                    }
                }
                _ChannelStateData_one_of_decls = new WeakMap();
                v2.ChannelStateData = ChannelStateData;
                class PacketCommitmentData extends pb_1.Message {
                    constructor(data) {
                        super();
                        _PacketCommitmentData_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PacketCommitmentData_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("path" in data && data.path != undefined) {
                                this.path = data.path;
                            }
                            if ("commitment" in data && data.commitment != undefined) {
                                this.commitment = data.commitment;
                            }
                        }
                    }
                    get path() {
                        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                    }
                    set path(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get commitment() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set commitment(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    static fromObject(data) {
                        const message = new PacketCommitmentData({});
                        if (data.path != null) {
                            message.path = data.path;
                        }
                        if (data.commitment != null) {
                            message.commitment = data.commitment;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.path != null) {
                            data.path = this.path;
                        }
                        if (this.commitment != null) {
                            data.commitment = this.commitment;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.path.length)
                            writer.writeBytes(1, this.path);
                        if (this.commitment.length)
                            writer.writeBytes(2, this.commitment);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PacketCommitmentData();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.path = reader.readBytes();
                                    break;
                                case 2:
                                    message.commitment = reader.readBytes();
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
                        return PacketCommitmentData.deserialize(bytes);
                    }
                }
                _PacketCommitmentData_one_of_decls = new WeakMap();
                v2.PacketCommitmentData = PacketCommitmentData;
                class PacketAcknowledgementData extends pb_1.Message {
                    constructor(data) {
                        super();
                        _PacketAcknowledgementData_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PacketAcknowledgementData_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("path" in data && data.path != undefined) {
                                this.path = data.path;
                            }
                            if ("acknowledgement" in data && data.acknowledgement != undefined) {
                                this.acknowledgement = data.acknowledgement;
                            }
                        }
                    }
                    get path() {
                        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                    }
                    set path(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get acknowledgement() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set acknowledgement(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    static fromObject(data) {
                        const message = new PacketAcknowledgementData({});
                        if (data.path != null) {
                            message.path = data.path;
                        }
                        if (data.acknowledgement != null) {
                            message.acknowledgement = data.acknowledgement;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.path != null) {
                            data.path = this.path;
                        }
                        if (this.acknowledgement != null) {
                            data.acknowledgement = this.acknowledgement;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.path.length)
                            writer.writeBytes(1, this.path);
                        if (this.acknowledgement.length)
                            writer.writeBytes(2, this.acknowledgement);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PacketAcknowledgementData();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.path = reader.readBytes();
                                    break;
                                case 2:
                                    message.acknowledgement = reader.readBytes();
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
                        return PacketAcknowledgementData.deserialize(bytes);
                    }
                }
                _PacketAcknowledgementData_one_of_decls = new WeakMap();
                v2.PacketAcknowledgementData = PacketAcknowledgementData;
                class PacketReceiptAbsenceData extends pb_1.Message {
                    constructor(data) {
                        super();
                        _PacketReceiptAbsenceData_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PacketReceiptAbsenceData_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("path" in data && data.path != undefined) {
                                this.path = data.path;
                            }
                        }
                    }
                    get path() {
                        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                    }
                    set path(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new PacketReceiptAbsenceData({});
                        if (data.path != null) {
                            message.path = data.path;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.path != null) {
                            data.path = this.path;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.path.length)
                            writer.writeBytes(1, this.path);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PacketReceiptAbsenceData();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.path = reader.readBytes();
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
                        return PacketReceiptAbsenceData.deserialize(bytes);
                    }
                }
                _PacketReceiptAbsenceData_one_of_decls = new WeakMap();
                v2.PacketReceiptAbsenceData = PacketReceiptAbsenceData;
                class NextSequenceRecvData extends pb_1.Message {
                    constructor(data) {
                        super();
                        _NextSequenceRecvData_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _NextSequenceRecvData_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("path" in data && data.path != undefined) {
                                this.path = data.path;
                            }
                            if ("next_seq_recv" in data && data.next_seq_recv != undefined) {
                                this.next_seq_recv = data.next_seq_recv;
                            }
                        }
                    }
                    get path() {
                        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                    }
                    set path(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get next_seq_recv() {
                        return pb_1.Message.getFieldWithDefault(this, 2, 0);
                    }
                    set next_seq_recv(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    static fromObject(data) {
                        const message = new NextSequenceRecvData({});
                        if (data.path != null) {
                            message.path = data.path;
                        }
                        if (data.next_seq_recv != null) {
                            message.next_seq_recv = data.next_seq_recv;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.path != null) {
                            data.path = this.path;
                        }
                        if (this.next_seq_recv != null) {
                            data.next_seq_recv = this.next_seq_recv;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.path.length)
                            writer.writeBytes(1, this.path);
                        if (this.next_seq_recv != 0)
                            writer.writeUint64(2, this.next_seq_recv);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new NextSequenceRecvData();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.path = reader.readBytes();
                                    break;
                                case 2:
                                    message.next_seq_recv = reader.readUint64();
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
                        return NextSequenceRecvData.deserialize(bytes);
                    }
                }
                _NextSequenceRecvData_one_of_decls = new WeakMap();
                v2.NextSequenceRecvData = NextSequenceRecvData;
            })(v2 = solomachine.v2 || (solomachine.v2 = {}));
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
})(ibc = exports.ibc || (exports.ibc = {}));
//# sourceMappingURL=solomachine.js.map