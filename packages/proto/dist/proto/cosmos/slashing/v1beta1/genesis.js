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
const dependency_2 = __importStar(require("./slashing"));
const pb_1 = __importStar(require("google-protobuf"));
var cosmos;
(function (cosmos) {
    var slashing;
    (function (slashing) {
        var v1beta1;
        (function (v1beta1) {
            var _GenesisState_one_of_decls, _SigningInfo_one_of_decls, _ValidatorMissedBlocks_one_of_decls, _MissedBlock_one_of_decls;
            class GenesisState extends pb_1.Message {
                constructor(data) {
                    super();
                    _GenesisState_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3], __classPrivateFieldGet(this, _GenesisState_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("params" in data && data.params != undefined) {
                            this.params = data.params;
                        }
                        if ("signing_infos" in data && data.signing_infos != undefined) {
                            this.signing_infos = data.signing_infos;
                        }
                        if ("missed_blocks" in data && data.missed_blocks != undefined) {
                            this.missed_blocks = data.missed_blocks;
                        }
                    }
                }
                get params() {
                    return pb_1.Message.getWrapperField(this, dependency_2.cosmos.slashing.v1beta1.Params, 1);
                }
                set params(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_params() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                get signing_infos() {
                    return pb_1.Message.getRepeatedWrapperField(this, SigningInfo, 2);
                }
                set signing_infos(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                }
                get missed_blocks() {
                    return pb_1.Message.getRepeatedWrapperField(this, ValidatorMissedBlocks, 3);
                }
                set missed_blocks(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new GenesisState({});
                    if (data.params != null) {
                        message.params = dependency_2.cosmos.slashing.v1beta1.Params.fromObject(data.params);
                    }
                    if (data.signing_infos != null) {
                        message.signing_infos = data.signing_infos.map(item => SigningInfo.fromObject(item));
                    }
                    if (data.missed_blocks != null) {
                        message.missed_blocks = data.missed_blocks.map(item => ValidatorMissedBlocks.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.params != null) {
                        data.params = this.params.toObject();
                    }
                    if (this.signing_infos != null) {
                        data.signing_infos = this.signing_infos.map((item) => item.toObject());
                    }
                    if (this.missed_blocks != null) {
                        data.missed_blocks = this.missed_blocks.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_params)
                        writer.writeMessage(1, this.params, () => this.params.serialize(writer));
                    if (this.signing_infos.length)
                        writer.writeRepeatedMessage(2, this.signing_infos, (item) => item.serialize(writer));
                    if (this.missed_blocks.length)
                        writer.writeRepeatedMessage(3, this.missed_blocks, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.params, () => message.params = dependency_2.cosmos.slashing.v1beta1.Params.deserialize(reader));
                                break;
                            case 2:
                                reader.readMessage(message.signing_infos, () => pb_1.Message.addToRepeatedWrapperField(message, 2, SigningInfo.deserialize(reader), SigningInfo));
                                break;
                            case 3:
                                reader.readMessage(message.missed_blocks, () => pb_1.Message.addToRepeatedWrapperField(message, 3, ValidatorMissedBlocks.deserialize(reader), ValidatorMissedBlocks));
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
                    return GenesisState.deserialize(bytes);
                }
            }
            _GenesisState_one_of_decls = new WeakMap();
            v1beta1.GenesisState = GenesisState;
            class SigningInfo extends pb_1.Message {
                constructor(data) {
                    super();
                    _SigningInfo_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SigningInfo_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("address" in data && data.address != undefined) {
                            this.address = data.address;
                        }
                        if ("validator_signing_info" in data && data.validator_signing_info != undefined) {
                            this.validator_signing_info = data.validator_signing_info;
                        }
                    }
                }
                get address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get validator_signing_info() {
                    return pb_1.Message.getWrapperField(this, dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo, 2);
                }
                set validator_signing_info(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get has_validator_signing_info() {
                    return pb_1.Message.getField(this, 2) != null;
                }
                static fromObject(data) {
                    const message = new SigningInfo({});
                    if (data.address != null) {
                        message.address = data.address;
                    }
                    if (data.validator_signing_info != null) {
                        message.validator_signing_info = dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo.fromObject(data.validator_signing_info);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.address != null) {
                        data.address = this.address;
                    }
                    if (this.validator_signing_info != null) {
                        data.validator_signing_info = this.validator_signing_info.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.address.length)
                        writer.writeString(1, this.address);
                    if (this.has_validator_signing_info)
                        writer.writeMessage(2, this.validator_signing_info, () => this.validator_signing_info.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SigningInfo();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.address = reader.readString();
                                break;
                            case 2:
                                reader.readMessage(message.validator_signing_info, () => message.validator_signing_info = dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo.deserialize(reader));
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
                    return SigningInfo.deserialize(bytes);
                }
            }
            _SigningInfo_one_of_decls = new WeakMap();
            v1beta1.SigningInfo = SigningInfo;
            class ValidatorMissedBlocks extends pb_1.Message {
                constructor(data) {
                    super();
                    _ValidatorMissedBlocks_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _ValidatorMissedBlocks_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("address" in data && data.address != undefined) {
                            this.address = data.address;
                        }
                        if ("missed_blocks" in data && data.missed_blocks != undefined) {
                            this.missed_blocks = data.missed_blocks;
                        }
                    }
                }
                get address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get missed_blocks() {
                    return pb_1.Message.getRepeatedWrapperField(this, MissedBlock, 2);
                }
                set missed_blocks(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new ValidatorMissedBlocks({});
                    if (data.address != null) {
                        message.address = data.address;
                    }
                    if (data.missed_blocks != null) {
                        message.missed_blocks = data.missed_blocks.map(item => MissedBlock.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.address != null) {
                        data.address = this.address;
                    }
                    if (this.missed_blocks != null) {
                        data.missed_blocks = this.missed_blocks.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.address.length)
                        writer.writeString(1, this.address);
                    if (this.missed_blocks.length)
                        writer.writeRepeatedMessage(2, this.missed_blocks, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ValidatorMissedBlocks();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.address = reader.readString();
                                break;
                            case 2:
                                reader.readMessage(message.missed_blocks, () => pb_1.Message.addToRepeatedWrapperField(message, 2, MissedBlock.deserialize(reader), MissedBlock));
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
                    return ValidatorMissedBlocks.deserialize(bytes);
                }
            }
            _ValidatorMissedBlocks_one_of_decls = new WeakMap();
            v1beta1.ValidatorMissedBlocks = ValidatorMissedBlocks;
            class MissedBlock extends pb_1.Message {
                constructor(data) {
                    super();
                    _MissedBlock_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MissedBlock_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("index" in data && data.index != undefined) {
                            this.index = data.index;
                        }
                        if ("missed" in data && data.missed != undefined) {
                            this.missed = data.missed;
                        }
                    }
                }
                get index() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set index(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get missed() {
                    return pb_1.Message.getFieldWithDefault(this, 2, false);
                }
                set missed(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new MissedBlock({});
                    if (data.index != null) {
                        message.index = data.index;
                    }
                    if (data.missed != null) {
                        message.missed = data.missed;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.index != null) {
                        data.index = this.index;
                    }
                    if (this.missed != null) {
                        data.missed = this.missed;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.index != 0)
                        writer.writeInt64(1, this.index);
                    if (this.missed != false)
                        writer.writeBool(2, this.missed);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MissedBlock();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.index = reader.readInt64();
                                break;
                            case 2:
                                message.missed = reader.readBool();
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
                    return MissedBlock.deserialize(bytes);
                }
            }
            _MissedBlock_one_of_decls = new WeakMap();
            v1beta1.MissedBlock = MissedBlock;
        })(v1beta1 = slashing.v1beta1 || (slashing.v1beta1 = {}));
    })(slashing = cosmos.slashing || (cosmos.slashing = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=genesis.js.map