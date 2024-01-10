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
const dependency_2 = __importStar(require("./../../cosmos/bank/v1beta1/bank"));
const pb_1 = __importStar(require("google-protobuf"));
var gravity;
(function (gravity) {
    var v1;
    (function (v1) {
        var _BridgeValidator_one_of_decls, _Valset_one_of_decls, _LastObservedEthereumBlockHeight_one_of_decls, _ERC20ToDenom_one_of_decls, _UnhaltBridgeProposal_one_of_decls, _AirdropProposal_one_of_decls, _IBCMetadataProposal_one_of_decls;
        class BridgeValidator extends pb_1.Message {
            constructor(data) {
                super();
                _BridgeValidator_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _BridgeValidator_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("power" in data && data.power != undefined) {
                        this.power = data.power;
                    }
                    if ("ethereum_address" in data && data.ethereum_address != undefined) {
                        this.ethereum_address = data.ethereum_address;
                    }
                }
            }
            get power() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set power(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get ethereum_address() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set ethereum_address(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new BridgeValidator({});
                if (data.power != null) {
                    message.power = data.power;
                }
                if (data.ethereum_address != null) {
                    message.ethereum_address = data.ethereum_address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.power != null) {
                    data.power = this.power;
                }
                if (this.ethereum_address != null) {
                    data.ethereum_address = this.ethereum_address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.power != 0)
                    writer.writeUint64(1, this.power);
                if (this.ethereum_address.length)
                    writer.writeString(2, this.ethereum_address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BridgeValidator();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.power = reader.readUint64();
                            break;
                        case 2:
                            message.ethereum_address = reader.readString();
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
                return BridgeValidator.deserialize(bytes);
            }
        }
        _BridgeValidator_one_of_decls = new WeakMap();
        v1.BridgeValidator = BridgeValidator;
        class Valset extends pb_1.Message {
            constructor(data) {
                super();
                _Valset_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _Valset_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                    if ("members" in data && data.members != undefined) {
                        this.members = data.members;
                    }
                    if ("height" in data && data.height != undefined) {
                        this.height = data.height;
                    }
                    if ("reward_amount" in data && data.reward_amount != undefined) {
                        this.reward_amount = data.reward_amount;
                    }
                    if ("reward_token" in data && data.reward_token != undefined) {
                        this.reward_token = data.reward_token;
                    }
                }
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get members() {
                return pb_1.Message.getRepeatedWrapperField(this, BridgeValidator, 2);
            }
            set members(value) {
                pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
            get height() {
                return pb_1.Message.getFieldWithDefault(this, 3, 0);
            }
            set height(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get reward_amount() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set reward_amount(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get reward_token() {
                return pb_1.Message.getFieldWithDefault(this, 5, "");
            }
            set reward_token(value) {
                pb_1.Message.setField(this, 5, value);
            }
            static fromObject(data) {
                const message = new Valset({});
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                if (data.members != null) {
                    message.members = data.members.map(item => BridgeValidator.fromObject(item));
                }
                if (data.height != null) {
                    message.height = data.height;
                }
                if (data.reward_amount != null) {
                    message.reward_amount = data.reward_amount;
                }
                if (data.reward_token != null) {
                    message.reward_token = data.reward_token;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                if (this.members != null) {
                    data.members = this.members.map((item) => item.toObject());
                }
                if (this.height != null) {
                    data.height = this.height;
                }
                if (this.reward_amount != null) {
                    data.reward_amount = this.reward_amount;
                }
                if (this.reward_token != null) {
                    data.reward_token = this.reward_token;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.nonce != 0)
                    writer.writeUint64(1, this.nonce);
                if (this.members.length)
                    writer.writeRepeatedMessage(2, this.members, (item) => item.serialize(writer));
                if (this.height != 0)
                    writer.writeUint64(3, this.height);
                if (this.reward_amount.length)
                    writer.writeString(4, this.reward_amount);
                if (this.reward_token.length)
                    writer.writeString(5, this.reward_token);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Valset();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.nonce = reader.readUint64();
                            break;
                        case 2:
                            reader.readMessage(message.members, () => pb_1.Message.addToRepeatedWrapperField(message, 2, BridgeValidator.deserialize(reader), BridgeValidator));
                            break;
                        case 3:
                            message.height = reader.readUint64();
                            break;
                        case 4:
                            message.reward_amount = reader.readString();
                            break;
                        case 5:
                            message.reward_token = reader.readString();
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
                return Valset.deserialize(bytes);
            }
        }
        _Valset_one_of_decls = new WeakMap();
        v1.Valset = Valset;
        class LastObservedEthereumBlockHeight extends pb_1.Message {
            constructor(data) {
                super();
                _LastObservedEthereumBlockHeight_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _LastObservedEthereumBlockHeight_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("cosmos_block_height" in data && data.cosmos_block_height != undefined) {
                        this.cosmos_block_height = data.cosmos_block_height;
                    }
                    if ("ethereum_block_height" in data && data.ethereum_block_height != undefined) {
                        this.ethereum_block_height = data.ethereum_block_height;
                    }
                }
            }
            get cosmos_block_height() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set cosmos_block_height(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get ethereum_block_height() {
                return pb_1.Message.getFieldWithDefault(this, 2, 0);
            }
            set ethereum_block_height(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new LastObservedEthereumBlockHeight({});
                if (data.cosmos_block_height != null) {
                    message.cosmos_block_height = data.cosmos_block_height;
                }
                if (data.ethereum_block_height != null) {
                    message.ethereum_block_height = data.ethereum_block_height;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.cosmos_block_height != null) {
                    data.cosmos_block_height = this.cosmos_block_height;
                }
                if (this.ethereum_block_height != null) {
                    data.ethereum_block_height = this.ethereum_block_height;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.cosmos_block_height != 0)
                    writer.writeUint64(1, this.cosmos_block_height);
                if (this.ethereum_block_height != 0)
                    writer.writeUint64(2, this.ethereum_block_height);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LastObservedEthereumBlockHeight();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.cosmos_block_height = reader.readUint64();
                            break;
                        case 2:
                            message.ethereum_block_height = reader.readUint64();
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
                return LastObservedEthereumBlockHeight.deserialize(bytes);
            }
        }
        _LastObservedEthereumBlockHeight_one_of_decls = new WeakMap();
        v1.LastObservedEthereumBlockHeight = LastObservedEthereumBlockHeight;
        class ERC20ToDenom extends pb_1.Message {
            constructor(data) {
                super();
                _ERC20ToDenom_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ERC20ToDenom_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("erc20" in data && data.erc20 != undefined) {
                        this.erc20 = data.erc20;
                    }
                    if ("denom" in data && data.denom != undefined) {
                        this.denom = data.denom;
                    }
                }
            }
            get erc20() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set erc20(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get denom() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set denom(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new ERC20ToDenom({});
                if (data.erc20 != null) {
                    message.erc20 = data.erc20;
                }
                if (data.denom != null) {
                    message.denom = data.denom;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.erc20 != null) {
                    data.erc20 = this.erc20;
                }
                if (this.denom != null) {
                    data.denom = this.denom;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.erc20.length)
                    writer.writeString(1, this.erc20);
                if (this.denom.length)
                    writer.writeString(2, this.denom);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ERC20ToDenom();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.erc20 = reader.readString();
                            break;
                        case 2:
                            message.denom = reader.readString();
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
                return ERC20ToDenom.deserialize(bytes);
            }
        }
        _ERC20ToDenom_one_of_decls = new WeakMap();
        v1.ERC20ToDenom = ERC20ToDenom;
        class UnhaltBridgeProposal extends pb_1.Message {
            constructor(data) {
                super();
                _UnhaltBridgeProposal_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _UnhaltBridgeProposal_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("title" in data && data.title != undefined) {
                        this.title = data.title;
                    }
                    if ("description" in data && data.description != undefined) {
                        this.description = data.description;
                    }
                    if ("target_nonce" in data && data.target_nonce != undefined) {
                        this.target_nonce = data.target_nonce;
                    }
                }
            }
            get title() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set title(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get description() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set description(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get target_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 4, 0);
            }
            set target_nonce(value) {
                pb_1.Message.setField(this, 4, value);
            }
            static fromObject(data) {
                const message = new UnhaltBridgeProposal({});
                if (data.title != null) {
                    message.title = data.title;
                }
                if (data.description != null) {
                    message.description = data.description;
                }
                if (data.target_nonce != null) {
                    message.target_nonce = data.target_nonce;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.title != null) {
                    data.title = this.title;
                }
                if (this.description != null) {
                    data.description = this.description;
                }
                if (this.target_nonce != null) {
                    data.target_nonce = this.target_nonce;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.title.length)
                    writer.writeString(1, this.title);
                if (this.description.length)
                    writer.writeString(2, this.description);
                if (this.target_nonce != 0)
                    writer.writeUint64(4, this.target_nonce);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new UnhaltBridgeProposal();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.title = reader.readString();
                            break;
                        case 2:
                            message.description = reader.readString();
                            break;
                        case 4:
                            message.target_nonce = reader.readUint64();
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
                return UnhaltBridgeProposal.deserialize(bytes);
            }
        }
        _UnhaltBridgeProposal_one_of_decls = new WeakMap();
        v1.UnhaltBridgeProposal = UnhaltBridgeProposal;
        class AirdropProposal extends pb_1.Message {
            constructor(data) {
                super();
                _AirdropProposal_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], __classPrivateFieldGet(this, _AirdropProposal_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("title" in data && data.title != undefined) {
                        this.title = data.title;
                    }
                    if ("description" in data && data.description != undefined) {
                        this.description = data.description;
                    }
                    if ("denom" in data && data.denom != undefined) {
                        this.denom = data.denom;
                    }
                    if ("recipients" in data && data.recipients != undefined) {
                        this.recipients = data.recipients;
                    }
                    if ("amounts" in data && data.amounts != undefined) {
                        this.amounts = data.amounts;
                    }
                }
            }
            get title() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set title(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get description() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set description(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get denom() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set denom(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get recipients() {
                return pb_1.Message.getFieldWithDefault(this, 4, new Uint8Array(0));
            }
            set recipients(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get amounts() {
                return pb_1.Message.getFieldWithDefault(this, 5, []);
            }
            set amounts(value) {
                pb_1.Message.setField(this, 5, value);
            }
            static fromObject(data) {
                const message = new AirdropProposal({});
                if (data.title != null) {
                    message.title = data.title;
                }
                if (data.description != null) {
                    message.description = data.description;
                }
                if (data.denom != null) {
                    message.denom = data.denom;
                }
                if (data.recipients != null) {
                    message.recipients = data.recipients;
                }
                if (data.amounts != null) {
                    message.amounts = data.amounts;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.title != null) {
                    data.title = this.title;
                }
                if (this.description != null) {
                    data.description = this.description;
                }
                if (this.denom != null) {
                    data.denom = this.denom;
                }
                if (this.recipients != null) {
                    data.recipients = this.recipients;
                }
                if (this.amounts != null) {
                    data.amounts = this.amounts;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.title.length)
                    writer.writeString(1, this.title);
                if (this.description.length)
                    writer.writeString(2, this.description);
                if (this.denom.length)
                    writer.writeString(3, this.denom);
                if (this.recipients.length)
                    writer.writeBytes(4, this.recipients);
                if (this.amounts.length)
                    writer.writePackedUint64(5, this.amounts);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AirdropProposal();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.title = reader.readString();
                            break;
                        case 2:
                            message.description = reader.readString();
                            break;
                        case 3:
                            message.denom = reader.readString();
                            break;
                        case 4:
                            message.recipients = reader.readBytes();
                            break;
                        case 5:
                            message.amounts = reader.readPackedUint64();
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
                return AirdropProposal.deserialize(bytes);
            }
        }
        _AirdropProposal_one_of_decls = new WeakMap();
        v1.AirdropProposal = AirdropProposal;
        class IBCMetadataProposal extends pb_1.Message {
            constructor(data) {
                super();
                _IBCMetadataProposal_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _IBCMetadataProposal_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("title" in data && data.title != undefined) {
                        this.title = data.title;
                    }
                    if ("description" in data && data.description != undefined) {
                        this.description = data.description;
                    }
                    if ("metadata" in data && data.metadata != undefined) {
                        this.metadata = data.metadata;
                    }
                    if ("ibc_denom" in data && data.ibc_denom != undefined) {
                        this.ibc_denom = data.ibc_denom;
                    }
                }
            }
            get title() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set title(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get description() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set description(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get metadata() {
                return pb_1.Message.getWrapperField(this, dependency_2.cosmos.bank.v1beta1.Metadata, 3);
            }
            set metadata(value) {
                pb_1.Message.setWrapperField(this, 3, value);
            }
            get has_metadata() {
                return pb_1.Message.getField(this, 3) != null;
            }
            get ibc_denom() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set ibc_denom(value) {
                pb_1.Message.setField(this, 4, value);
            }
            static fromObject(data) {
                const message = new IBCMetadataProposal({});
                if (data.title != null) {
                    message.title = data.title;
                }
                if (data.description != null) {
                    message.description = data.description;
                }
                if (data.metadata != null) {
                    message.metadata = dependency_2.cosmos.bank.v1beta1.Metadata.fromObject(data.metadata);
                }
                if (data.ibc_denom != null) {
                    message.ibc_denom = data.ibc_denom;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.title != null) {
                    data.title = this.title;
                }
                if (this.description != null) {
                    data.description = this.description;
                }
                if (this.metadata != null) {
                    data.metadata = this.metadata.toObject();
                }
                if (this.ibc_denom != null) {
                    data.ibc_denom = this.ibc_denom;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.title.length)
                    writer.writeString(1, this.title);
                if (this.description.length)
                    writer.writeString(2, this.description);
                if (this.has_metadata)
                    writer.writeMessage(3, this.metadata, () => this.metadata.serialize(writer));
                if (this.ibc_denom.length)
                    writer.writeString(4, this.ibc_denom);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new IBCMetadataProposal();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.title = reader.readString();
                            break;
                        case 2:
                            message.description = reader.readString();
                            break;
                        case 3:
                            reader.readMessage(message.metadata, () => message.metadata = dependency_2.cosmos.bank.v1beta1.Metadata.deserialize(reader));
                            break;
                        case 4:
                            message.ibc_denom = reader.readString();
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
                return IBCMetadataProposal.deserialize(bytes);
            }
        }
        _IBCMetadataProposal_one_of_decls = new WeakMap();
        v1.IBCMetadataProposal = IBCMetadataProposal;
    })(v1 = gravity.v1 || (gravity.v1 = {}));
})(gravity = exports.gravity || (exports.gravity = {}));
//# sourceMappingURL=types.js.map