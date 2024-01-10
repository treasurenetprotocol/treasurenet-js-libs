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
const dependency_1 = __importStar(require("./../../cosmos/base/v1beta1/coin"));
const dependency_4 = __importStar(require("./types"));
const dependency_5 = __importStar(require("./../../google/protobuf/any"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var gravity;
(function (gravity) {
    var v1;
    (function (v1) {
        var _MsgSetOrchestratorAddress_one_of_decls, _MsgSetOrchestratorAddressResponse_one_of_decls, _MsgValsetConfirm_one_of_decls, _MsgValsetConfirmResponse_one_of_decls, _MsgSendToEth_one_of_decls, _MsgSendToEthResponse_one_of_decls, _MsgRequestBatch_one_of_decls, _MsgRequestBatchResponse_one_of_decls, _MsgConfirmBatch_one_of_decls, _MsgConfirmBatchResponse_one_of_decls, _MsgConfirmLogicCall_one_of_decls, _MsgConfirmLogicCallResponse_one_of_decls, _MsgSendToCosmosClaim_one_of_decls, _MsgSendToCosmosClaimResponse_one_of_decls, _MsgBatchSendToEthClaim_one_of_decls, _MsgBatchSendToEthClaimResponse_one_of_decls, _MsgERC20DeployedClaim_one_of_decls, _MsgERC20DeployedClaimResponse_one_of_decls, _MsgLogicCallExecutedClaim_one_of_decls, _MsgLogicCallExecutedClaimResponse_one_of_decls, _MsgValsetUpdatedClaim_one_of_decls, _MsgValsetUpdatedClaimResponse_one_of_decls, _MsgCancelSendToEth_one_of_decls, _MsgCancelSendToEthResponse_one_of_decls, _MsgSubmitBadSignatureEvidence_one_of_decls, _MsgSubmitBadSignatureEvidenceResponse_one_of_decls, _EventSetOperatorAddress_one_of_decls, _EventValsetConfirmKey_one_of_decls, _EventBatchCreated_one_of_decls, _EventBatchConfirmKey_one_of_decls, _EventBatchSendToEthClaim_one_of_decls, _EventClaim_one_of_decls, _EventBadSignatureEvidence_one_of_decls, _EventERC20DeployedClaim_one_of_decls, _EventValsetUpdatedClaim_one_of_decls, _EventMultisigUpdateRequest_one_of_decls, _EventOutgoingLogicCallCanceled_one_of_decls, _EventSignatureSlashing_one_of_decls, _EventOutgoingTxId_one_of_decls;
        class MsgSetOrchestratorAddress extends pb_1.Message {
            constructor(data) {
                super();
                _MsgSetOrchestratorAddress_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSetOrchestratorAddress_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("validator" in data && data.validator != undefined) {
                        this.validator = data.validator;
                    }
                    if ("orchestrator" in data && data.orchestrator != undefined) {
                        this.orchestrator = data.orchestrator;
                    }
                    if ("eth_address" in data && data.eth_address != undefined) {
                        this.eth_address = data.eth_address;
                    }
                }
            }
            get validator() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set validator(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get orchestrator() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set orchestrator(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get eth_address() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set eth_address(value) {
                pb_1.Message.setField(this, 3, value);
            }
            static fromObject(data) {
                const message = new MsgSetOrchestratorAddress({});
                if (data.validator != null) {
                    message.validator = data.validator;
                }
                if (data.orchestrator != null) {
                    message.orchestrator = data.orchestrator;
                }
                if (data.eth_address != null) {
                    message.eth_address = data.eth_address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.validator != null) {
                    data.validator = this.validator;
                }
                if (this.orchestrator != null) {
                    data.orchestrator = this.orchestrator;
                }
                if (this.eth_address != null) {
                    data.eth_address = this.eth_address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.validator.length)
                    writer.writeString(1, this.validator);
                if (this.orchestrator.length)
                    writer.writeString(2, this.orchestrator);
                if (this.eth_address.length)
                    writer.writeString(3, this.eth_address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSetOrchestratorAddress();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.validator = reader.readString();
                            break;
                        case 2:
                            message.orchestrator = reader.readString();
                            break;
                        case 3:
                            message.eth_address = reader.readString();
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
                return MsgSetOrchestratorAddress.deserialize(bytes);
            }
        }
        _MsgSetOrchestratorAddress_one_of_decls = new WeakMap();
        v1.MsgSetOrchestratorAddress = MsgSetOrchestratorAddress;
        class MsgSetOrchestratorAddressResponse extends pb_1.Message {
            constructor(data) {
                super();
                _MsgSetOrchestratorAddressResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSetOrchestratorAddressResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new MsgSetOrchestratorAddressResponse({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSetOrchestratorAddressResponse();
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
                return MsgSetOrchestratorAddressResponse.deserialize(bytes);
            }
        }
        _MsgSetOrchestratorAddressResponse_one_of_decls = new WeakMap();
        v1.MsgSetOrchestratorAddressResponse = MsgSetOrchestratorAddressResponse;
        class MsgValsetConfirm extends pb_1.Message {
            constructor(data) {
                super();
                _MsgValsetConfirm_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgValsetConfirm_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                    if ("orchestrator" in data && data.orchestrator != undefined) {
                        this.orchestrator = data.orchestrator;
                    }
                    if ("eth_address" in data && data.eth_address != undefined) {
                        this.eth_address = data.eth_address;
                    }
                    if ("signature" in data && data.signature != undefined) {
                        this.signature = data.signature;
                    }
                }
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get orchestrator() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set orchestrator(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get eth_address() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set eth_address(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get signature() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set signature(value) {
                pb_1.Message.setField(this, 4, value);
            }
            static fromObject(data) {
                const message = new MsgValsetConfirm({});
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                if (data.orchestrator != null) {
                    message.orchestrator = data.orchestrator;
                }
                if (data.eth_address != null) {
                    message.eth_address = data.eth_address;
                }
                if (data.signature != null) {
                    message.signature = data.signature;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                if (this.orchestrator != null) {
                    data.orchestrator = this.orchestrator;
                }
                if (this.eth_address != null) {
                    data.eth_address = this.eth_address;
                }
                if (this.signature != null) {
                    data.signature = this.signature;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.nonce != 0)
                    writer.writeUint64(1, this.nonce);
                if (this.orchestrator.length)
                    writer.writeString(2, this.orchestrator);
                if (this.eth_address.length)
                    writer.writeString(3, this.eth_address);
                if (this.signature.length)
                    writer.writeString(4, this.signature);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgValsetConfirm();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.nonce = reader.readUint64();
                            break;
                        case 2:
                            message.orchestrator = reader.readString();
                            break;
                        case 3:
                            message.eth_address = reader.readString();
                            break;
                        case 4:
                            message.signature = reader.readString();
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
                return MsgValsetConfirm.deserialize(bytes);
            }
        }
        _MsgValsetConfirm_one_of_decls = new WeakMap();
        v1.MsgValsetConfirm = MsgValsetConfirm;
        class MsgValsetConfirmResponse extends pb_1.Message {
            constructor(data) {
                super();
                _MsgValsetConfirmResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgValsetConfirmResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new MsgValsetConfirmResponse({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgValsetConfirmResponse();
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
                return MsgValsetConfirmResponse.deserialize(bytes);
            }
        }
        _MsgValsetConfirmResponse_one_of_decls = new WeakMap();
        v1.MsgValsetConfirmResponse = MsgValsetConfirmResponse;
        class MsgSendToEth extends pb_1.Message {
            constructor(data) {
                super();
                _MsgSendToEth_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSendToEth_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("sender" in data && data.sender != undefined) {
                        this.sender = data.sender;
                    }
                    if ("eth_dest" in data && data.eth_dest != undefined) {
                        this.eth_dest = data.eth_dest;
                    }
                    if ("amount" in data && data.amount != undefined) {
                        this.amount = data.amount;
                    }
                    if ("bridge_fee" in data && data.bridge_fee != undefined) {
                        this.bridge_fee = data.bridge_fee;
                    }
                }
            }
            get sender() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set sender(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get eth_dest() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set eth_dest(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get amount() {
                return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 3);
            }
            set amount(value) {
                pb_1.Message.setWrapperField(this, 3, value);
            }
            get has_amount() {
                return pb_1.Message.getField(this, 3) != null;
            }
            get bridge_fee() {
                return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 4);
            }
            set bridge_fee(value) {
                pb_1.Message.setWrapperField(this, 4, value);
            }
            get has_bridge_fee() {
                return pb_1.Message.getField(this, 4) != null;
            }
            static fromObject(data) {
                const message = new MsgSendToEth({});
                if (data.sender != null) {
                    message.sender = data.sender;
                }
                if (data.eth_dest != null) {
                    message.eth_dest = data.eth_dest;
                }
                if (data.amount != null) {
                    message.amount = dependency_1.cosmos.base.v1beta1.Coin.fromObject(data.amount);
                }
                if (data.bridge_fee != null) {
                    message.bridge_fee = dependency_1.cosmos.base.v1beta1.Coin.fromObject(data.bridge_fee);
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.sender != null) {
                    data.sender = this.sender;
                }
                if (this.eth_dest != null) {
                    data.eth_dest = this.eth_dest;
                }
                if (this.amount != null) {
                    data.amount = this.amount.toObject();
                }
                if (this.bridge_fee != null) {
                    data.bridge_fee = this.bridge_fee.toObject();
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.sender.length)
                    writer.writeString(1, this.sender);
                if (this.eth_dest.length)
                    writer.writeString(2, this.eth_dest);
                if (this.has_amount)
                    writer.writeMessage(3, this.amount, () => this.amount.serialize(writer));
                if (this.has_bridge_fee)
                    writer.writeMessage(4, this.bridge_fee, () => this.bridge_fee.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSendToEth();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.sender = reader.readString();
                            break;
                        case 2:
                            message.eth_dest = reader.readString();
                            break;
                        case 3:
                            reader.readMessage(message.amount, () => message.amount = dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader));
                            break;
                        case 4:
                            reader.readMessage(message.bridge_fee, () => message.bridge_fee = dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader));
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
                return MsgSendToEth.deserialize(bytes);
            }
        }
        _MsgSendToEth_one_of_decls = new WeakMap();
        v1.MsgSendToEth = MsgSendToEth;
        class MsgSendToEthResponse extends pb_1.Message {
            constructor(data) {
                super();
                _MsgSendToEthResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSendToEthResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new MsgSendToEthResponse({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSendToEthResponse();
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
                return MsgSendToEthResponse.deserialize(bytes);
            }
        }
        _MsgSendToEthResponse_one_of_decls = new WeakMap();
        v1.MsgSendToEthResponse = MsgSendToEthResponse;
        class MsgRequestBatch extends pb_1.Message {
            constructor(data) {
                super();
                _MsgRequestBatch_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgRequestBatch_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("sender" in data && data.sender != undefined) {
                        this.sender = data.sender;
                    }
                    if ("denom" in data && data.denom != undefined) {
                        this.denom = data.denom;
                    }
                }
            }
            get sender() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set sender(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get denom() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set denom(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new MsgRequestBatch({});
                if (data.sender != null) {
                    message.sender = data.sender;
                }
                if (data.denom != null) {
                    message.denom = data.denom;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.sender != null) {
                    data.sender = this.sender;
                }
                if (this.denom != null) {
                    data.denom = this.denom;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.sender.length)
                    writer.writeString(1, this.sender);
                if (this.denom.length)
                    writer.writeString(2, this.denom);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRequestBatch();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.sender = reader.readString();
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
                return MsgRequestBatch.deserialize(bytes);
            }
        }
        _MsgRequestBatch_one_of_decls = new WeakMap();
        v1.MsgRequestBatch = MsgRequestBatch;
        class MsgRequestBatchResponse extends pb_1.Message {
            constructor(data) {
                super();
                _MsgRequestBatchResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgRequestBatchResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new MsgRequestBatchResponse({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRequestBatchResponse();
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
                return MsgRequestBatchResponse.deserialize(bytes);
            }
        }
        _MsgRequestBatchResponse_one_of_decls = new WeakMap();
        v1.MsgRequestBatchResponse = MsgRequestBatchResponse;
        class MsgConfirmBatch extends pb_1.Message {
            constructor(data) {
                super();
                _MsgConfirmBatch_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgConfirmBatch_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                    if ("token_contract" in data && data.token_contract != undefined) {
                        this.token_contract = data.token_contract;
                    }
                    if ("eth_signer" in data && data.eth_signer != undefined) {
                        this.eth_signer = data.eth_signer;
                    }
                    if ("orchestrator" in data && data.orchestrator != undefined) {
                        this.orchestrator = data.orchestrator;
                    }
                    if ("signature" in data && data.signature != undefined) {
                        this.signature = data.signature;
                    }
                }
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get token_contract() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set token_contract(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get eth_signer() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set eth_signer(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get orchestrator() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set orchestrator(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get signature() {
                return pb_1.Message.getFieldWithDefault(this, 5, "");
            }
            set signature(value) {
                pb_1.Message.setField(this, 5, value);
            }
            static fromObject(data) {
                const message = new MsgConfirmBatch({});
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                if (data.token_contract != null) {
                    message.token_contract = data.token_contract;
                }
                if (data.eth_signer != null) {
                    message.eth_signer = data.eth_signer;
                }
                if (data.orchestrator != null) {
                    message.orchestrator = data.orchestrator;
                }
                if (data.signature != null) {
                    message.signature = data.signature;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                if (this.token_contract != null) {
                    data.token_contract = this.token_contract;
                }
                if (this.eth_signer != null) {
                    data.eth_signer = this.eth_signer;
                }
                if (this.orchestrator != null) {
                    data.orchestrator = this.orchestrator;
                }
                if (this.signature != null) {
                    data.signature = this.signature;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.nonce != 0)
                    writer.writeUint64(1, this.nonce);
                if (this.token_contract.length)
                    writer.writeString(2, this.token_contract);
                if (this.eth_signer.length)
                    writer.writeString(3, this.eth_signer);
                if (this.orchestrator.length)
                    writer.writeString(4, this.orchestrator);
                if (this.signature.length)
                    writer.writeString(5, this.signature);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgConfirmBatch();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.nonce = reader.readUint64();
                            break;
                        case 2:
                            message.token_contract = reader.readString();
                            break;
                        case 3:
                            message.eth_signer = reader.readString();
                            break;
                        case 4:
                            message.orchestrator = reader.readString();
                            break;
                        case 5:
                            message.signature = reader.readString();
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
                return MsgConfirmBatch.deserialize(bytes);
            }
        }
        _MsgConfirmBatch_one_of_decls = new WeakMap();
        v1.MsgConfirmBatch = MsgConfirmBatch;
        class MsgConfirmBatchResponse extends pb_1.Message {
            constructor(data) {
                super();
                _MsgConfirmBatchResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgConfirmBatchResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new MsgConfirmBatchResponse({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgConfirmBatchResponse();
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
                return MsgConfirmBatchResponse.deserialize(bytes);
            }
        }
        _MsgConfirmBatchResponse_one_of_decls = new WeakMap();
        v1.MsgConfirmBatchResponse = MsgConfirmBatchResponse;
        class MsgConfirmLogicCall extends pb_1.Message {
            constructor(data) {
                super();
                _MsgConfirmLogicCall_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgConfirmLogicCall_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("invalidation_id" in data && data.invalidation_id != undefined) {
                        this.invalidation_id = data.invalidation_id;
                    }
                    if ("invalidation_nonce" in data && data.invalidation_nonce != undefined) {
                        this.invalidation_nonce = data.invalidation_nonce;
                    }
                    if ("eth_signer" in data && data.eth_signer != undefined) {
                        this.eth_signer = data.eth_signer;
                    }
                    if ("orchestrator" in data && data.orchestrator != undefined) {
                        this.orchestrator = data.orchestrator;
                    }
                    if ("signature" in data && data.signature != undefined) {
                        this.signature = data.signature;
                    }
                }
            }
            get invalidation_id() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set invalidation_id(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get invalidation_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 2, 0);
            }
            set invalidation_nonce(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get eth_signer() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set eth_signer(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get orchestrator() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set orchestrator(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get signature() {
                return pb_1.Message.getFieldWithDefault(this, 5, "");
            }
            set signature(value) {
                pb_1.Message.setField(this, 5, value);
            }
            static fromObject(data) {
                const message = new MsgConfirmLogicCall({});
                if (data.invalidation_id != null) {
                    message.invalidation_id = data.invalidation_id;
                }
                if (data.invalidation_nonce != null) {
                    message.invalidation_nonce = data.invalidation_nonce;
                }
                if (data.eth_signer != null) {
                    message.eth_signer = data.eth_signer;
                }
                if (data.orchestrator != null) {
                    message.orchestrator = data.orchestrator;
                }
                if (data.signature != null) {
                    message.signature = data.signature;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.invalidation_id != null) {
                    data.invalidation_id = this.invalidation_id;
                }
                if (this.invalidation_nonce != null) {
                    data.invalidation_nonce = this.invalidation_nonce;
                }
                if (this.eth_signer != null) {
                    data.eth_signer = this.eth_signer;
                }
                if (this.orchestrator != null) {
                    data.orchestrator = this.orchestrator;
                }
                if (this.signature != null) {
                    data.signature = this.signature;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.invalidation_id.length)
                    writer.writeString(1, this.invalidation_id);
                if (this.invalidation_nonce != 0)
                    writer.writeUint64(2, this.invalidation_nonce);
                if (this.eth_signer.length)
                    writer.writeString(3, this.eth_signer);
                if (this.orchestrator.length)
                    writer.writeString(4, this.orchestrator);
                if (this.signature.length)
                    writer.writeString(5, this.signature);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgConfirmLogicCall();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.invalidation_id = reader.readString();
                            break;
                        case 2:
                            message.invalidation_nonce = reader.readUint64();
                            break;
                        case 3:
                            message.eth_signer = reader.readString();
                            break;
                        case 4:
                            message.orchestrator = reader.readString();
                            break;
                        case 5:
                            message.signature = reader.readString();
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
                return MsgConfirmLogicCall.deserialize(bytes);
            }
        }
        _MsgConfirmLogicCall_one_of_decls = new WeakMap();
        v1.MsgConfirmLogicCall = MsgConfirmLogicCall;
        class MsgConfirmLogicCallResponse extends pb_1.Message {
            constructor(data) {
                super();
                _MsgConfirmLogicCallResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgConfirmLogicCallResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new MsgConfirmLogicCallResponse({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgConfirmLogicCallResponse();
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
                return MsgConfirmLogicCallResponse.deserialize(bytes);
            }
        }
        _MsgConfirmLogicCallResponse_one_of_decls = new WeakMap();
        v1.MsgConfirmLogicCallResponse = MsgConfirmLogicCallResponse;
        class MsgSendToCosmosClaim extends pb_1.Message {
            constructor(data) {
                super();
                _MsgSendToCosmosClaim_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSendToCosmosClaim_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("event_nonce" in data && data.event_nonce != undefined) {
                        this.event_nonce = data.event_nonce;
                    }
                    if ("block_height" in data && data.block_height != undefined) {
                        this.block_height = data.block_height;
                    }
                    if ("token_contract" in data && data.token_contract != undefined) {
                        this.token_contract = data.token_contract;
                    }
                    if ("amount" in data && data.amount != undefined) {
                        this.amount = data.amount;
                    }
                    if ("ethereum_sender" in data && data.ethereum_sender != undefined) {
                        this.ethereum_sender = data.ethereum_sender;
                    }
                    if ("cosmos_receiver" in data && data.cosmos_receiver != undefined) {
                        this.cosmos_receiver = data.cosmos_receiver;
                    }
                    if ("orchestrator" in data && data.orchestrator != undefined) {
                        this.orchestrator = data.orchestrator;
                    }
                }
            }
            get event_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set event_nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get block_height() {
                return pb_1.Message.getFieldWithDefault(this, 2, 0);
            }
            set block_height(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get token_contract() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set token_contract(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get amount() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set amount(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get ethereum_sender() {
                return pb_1.Message.getFieldWithDefault(this, 5, "");
            }
            set ethereum_sender(value) {
                pb_1.Message.setField(this, 5, value);
            }
            get cosmos_receiver() {
                return pb_1.Message.getFieldWithDefault(this, 6, "");
            }
            set cosmos_receiver(value) {
                pb_1.Message.setField(this, 6, value);
            }
            get orchestrator() {
                return pb_1.Message.getFieldWithDefault(this, 7, "");
            }
            set orchestrator(value) {
                pb_1.Message.setField(this, 7, value);
            }
            static fromObject(data) {
                const message = new MsgSendToCosmosClaim({});
                if (data.event_nonce != null) {
                    message.event_nonce = data.event_nonce;
                }
                if (data.block_height != null) {
                    message.block_height = data.block_height;
                }
                if (data.token_contract != null) {
                    message.token_contract = data.token_contract;
                }
                if (data.amount != null) {
                    message.amount = data.amount;
                }
                if (data.ethereum_sender != null) {
                    message.ethereum_sender = data.ethereum_sender;
                }
                if (data.cosmos_receiver != null) {
                    message.cosmos_receiver = data.cosmos_receiver;
                }
                if (data.orchestrator != null) {
                    message.orchestrator = data.orchestrator;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.event_nonce != null) {
                    data.event_nonce = this.event_nonce;
                }
                if (this.block_height != null) {
                    data.block_height = this.block_height;
                }
                if (this.token_contract != null) {
                    data.token_contract = this.token_contract;
                }
                if (this.amount != null) {
                    data.amount = this.amount;
                }
                if (this.ethereum_sender != null) {
                    data.ethereum_sender = this.ethereum_sender;
                }
                if (this.cosmos_receiver != null) {
                    data.cosmos_receiver = this.cosmos_receiver;
                }
                if (this.orchestrator != null) {
                    data.orchestrator = this.orchestrator;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.event_nonce != 0)
                    writer.writeUint64(1, this.event_nonce);
                if (this.block_height != 0)
                    writer.writeUint64(2, this.block_height);
                if (this.token_contract.length)
                    writer.writeString(3, this.token_contract);
                if (this.amount.length)
                    writer.writeString(4, this.amount);
                if (this.ethereum_sender.length)
                    writer.writeString(5, this.ethereum_sender);
                if (this.cosmos_receiver.length)
                    writer.writeString(6, this.cosmos_receiver);
                if (this.orchestrator.length)
                    writer.writeString(7, this.orchestrator);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSendToCosmosClaim();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.event_nonce = reader.readUint64();
                            break;
                        case 2:
                            message.block_height = reader.readUint64();
                            break;
                        case 3:
                            message.token_contract = reader.readString();
                            break;
                        case 4:
                            message.amount = reader.readString();
                            break;
                        case 5:
                            message.ethereum_sender = reader.readString();
                            break;
                        case 6:
                            message.cosmos_receiver = reader.readString();
                            break;
                        case 7:
                            message.orchestrator = reader.readString();
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
                return MsgSendToCosmosClaim.deserialize(bytes);
            }
        }
        _MsgSendToCosmosClaim_one_of_decls = new WeakMap();
        v1.MsgSendToCosmosClaim = MsgSendToCosmosClaim;
        class MsgSendToCosmosClaimResponse extends pb_1.Message {
            constructor(data) {
                super();
                _MsgSendToCosmosClaimResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSendToCosmosClaimResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new MsgSendToCosmosClaimResponse({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSendToCosmosClaimResponse();
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
                return MsgSendToCosmosClaimResponse.deserialize(bytes);
            }
        }
        _MsgSendToCosmosClaimResponse_one_of_decls = new WeakMap();
        v1.MsgSendToCosmosClaimResponse = MsgSendToCosmosClaimResponse;
        class MsgBatchSendToEthClaim extends pb_1.Message {
            constructor(data) {
                super();
                _MsgBatchSendToEthClaim_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgBatchSendToEthClaim_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("event_nonce" in data && data.event_nonce != undefined) {
                        this.event_nonce = data.event_nonce;
                    }
                    if ("block_height" in data && data.block_height != undefined) {
                        this.block_height = data.block_height;
                    }
                    if ("batch_nonce" in data && data.batch_nonce != undefined) {
                        this.batch_nonce = data.batch_nonce;
                    }
                    if ("token_contract" in data && data.token_contract != undefined) {
                        this.token_contract = data.token_contract;
                    }
                    if ("orchestrator" in data && data.orchestrator != undefined) {
                        this.orchestrator = data.orchestrator;
                    }
                }
            }
            get event_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set event_nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get block_height() {
                return pb_1.Message.getFieldWithDefault(this, 2, 0);
            }
            set block_height(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get batch_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 3, 0);
            }
            set batch_nonce(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get token_contract() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set token_contract(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get orchestrator() {
                return pb_1.Message.getFieldWithDefault(this, 5, "");
            }
            set orchestrator(value) {
                pb_1.Message.setField(this, 5, value);
            }
            static fromObject(data) {
                const message = new MsgBatchSendToEthClaim({});
                if (data.event_nonce != null) {
                    message.event_nonce = data.event_nonce;
                }
                if (data.block_height != null) {
                    message.block_height = data.block_height;
                }
                if (data.batch_nonce != null) {
                    message.batch_nonce = data.batch_nonce;
                }
                if (data.token_contract != null) {
                    message.token_contract = data.token_contract;
                }
                if (data.orchestrator != null) {
                    message.orchestrator = data.orchestrator;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.event_nonce != null) {
                    data.event_nonce = this.event_nonce;
                }
                if (this.block_height != null) {
                    data.block_height = this.block_height;
                }
                if (this.batch_nonce != null) {
                    data.batch_nonce = this.batch_nonce;
                }
                if (this.token_contract != null) {
                    data.token_contract = this.token_contract;
                }
                if (this.orchestrator != null) {
                    data.orchestrator = this.orchestrator;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.event_nonce != 0)
                    writer.writeUint64(1, this.event_nonce);
                if (this.block_height != 0)
                    writer.writeUint64(2, this.block_height);
                if (this.batch_nonce != 0)
                    writer.writeUint64(3, this.batch_nonce);
                if (this.token_contract.length)
                    writer.writeString(4, this.token_contract);
                if (this.orchestrator.length)
                    writer.writeString(5, this.orchestrator);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgBatchSendToEthClaim();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.event_nonce = reader.readUint64();
                            break;
                        case 2:
                            message.block_height = reader.readUint64();
                            break;
                        case 3:
                            message.batch_nonce = reader.readUint64();
                            break;
                        case 4:
                            message.token_contract = reader.readString();
                            break;
                        case 5:
                            message.orchestrator = reader.readString();
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
                return MsgBatchSendToEthClaim.deserialize(bytes);
            }
        }
        _MsgBatchSendToEthClaim_one_of_decls = new WeakMap();
        v1.MsgBatchSendToEthClaim = MsgBatchSendToEthClaim;
        class MsgBatchSendToEthClaimResponse extends pb_1.Message {
            constructor(data) {
                super();
                _MsgBatchSendToEthClaimResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgBatchSendToEthClaimResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new MsgBatchSendToEthClaimResponse({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgBatchSendToEthClaimResponse();
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
                return MsgBatchSendToEthClaimResponse.deserialize(bytes);
            }
        }
        _MsgBatchSendToEthClaimResponse_one_of_decls = new WeakMap();
        v1.MsgBatchSendToEthClaimResponse = MsgBatchSendToEthClaimResponse;
        class MsgERC20DeployedClaim extends pb_1.Message {
            constructor(data) {
                super();
                _MsgERC20DeployedClaim_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgERC20DeployedClaim_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("event_nonce" in data && data.event_nonce != undefined) {
                        this.event_nonce = data.event_nonce;
                    }
                    if ("block_height" in data && data.block_height != undefined) {
                        this.block_height = data.block_height;
                    }
                    if ("cosmos_denom" in data && data.cosmos_denom != undefined) {
                        this.cosmos_denom = data.cosmos_denom;
                    }
                    if ("token_contract" in data && data.token_contract != undefined) {
                        this.token_contract = data.token_contract;
                    }
                    if ("name" in data && data.name != undefined) {
                        this.name = data.name;
                    }
                    if ("symbol" in data && data.symbol != undefined) {
                        this.symbol = data.symbol;
                    }
                    if ("decimals" in data && data.decimals != undefined) {
                        this.decimals = data.decimals;
                    }
                    if ("orchestrator" in data && data.orchestrator != undefined) {
                        this.orchestrator = data.orchestrator;
                    }
                }
            }
            get event_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set event_nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get block_height() {
                return pb_1.Message.getFieldWithDefault(this, 2, 0);
            }
            set block_height(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get cosmos_denom() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set cosmos_denom(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get token_contract() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set token_contract(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get name() {
                return pb_1.Message.getFieldWithDefault(this, 5, "");
            }
            set name(value) {
                pb_1.Message.setField(this, 5, value);
            }
            get symbol() {
                return pb_1.Message.getFieldWithDefault(this, 6, "");
            }
            set symbol(value) {
                pb_1.Message.setField(this, 6, value);
            }
            get decimals() {
                return pb_1.Message.getFieldWithDefault(this, 7, 0);
            }
            set decimals(value) {
                pb_1.Message.setField(this, 7, value);
            }
            get orchestrator() {
                return pb_1.Message.getFieldWithDefault(this, 8, "");
            }
            set orchestrator(value) {
                pb_1.Message.setField(this, 8, value);
            }
            static fromObject(data) {
                const message = new MsgERC20DeployedClaim({});
                if (data.event_nonce != null) {
                    message.event_nonce = data.event_nonce;
                }
                if (data.block_height != null) {
                    message.block_height = data.block_height;
                }
                if (data.cosmos_denom != null) {
                    message.cosmos_denom = data.cosmos_denom;
                }
                if (data.token_contract != null) {
                    message.token_contract = data.token_contract;
                }
                if (data.name != null) {
                    message.name = data.name;
                }
                if (data.symbol != null) {
                    message.symbol = data.symbol;
                }
                if (data.decimals != null) {
                    message.decimals = data.decimals;
                }
                if (data.orchestrator != null) {
                    message.orchestrator = data.orchestrator;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.event_nonce != null) {
                    data.event_nonce = this.event_nonce;
                }
                if (this.block_height != null) {
                    data.block_height = this.block_height;
                }
                if (this.cosmos_denom != null) {
                    data.cosmos_denom = this.cosmos_denom;
                }
                if (this.token_contract != null) {
                    data.token_contract = this.token_contract;
                }
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.symbol != null) {
                    data.symbol = this.symbol;
                }
                if (this.decimals != null) {
                    data.decimals = this.decimals;
                }
                if (this.orchestrator != null) {
                    data.orchestrator = this.orchestrator;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.event_nonce != 0)
                    writer.writeUint64(1, this.event_nonce);
                if (this.block_height != 0)
                    writer.writeUint64(2, this.block_height);
                if (this.cosmos_denom.length)
                    writer.writeString(3, this.cosmos_denom);
                if (this.token_contract.length)
                    writer.writeString(4, this.token_contract);
                if (this.name.length)
                    writer.writeString(5, this.name);
                if (this.symbol.length)
                    writer.writeString(6, this.symbol);
                if (this.decimals != 0)
                    writer.writeUint64(7, this.decimals);
                if (this.orchestrator.length)
                    writer.writeString(8, this.orchestrator);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgERC20DeployedClaim();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.event_nonce = reader.readUint64();
                            break;
                        case 2:
                            message.block_height = reader.readUint64();
                            break;
                        case 3:
                            message.cosmos_denom = reader.readString();
                            break;
                        case 4:
                            message.token_contract = reader.readString();
                            break;
                        case 5:
                            message.name = reader.readString();
                            break;
                        case 6:
                            message.symbol = reader.readString();
                            break;
                        case 7:
                            message.decimals = reader.readUint64();
                            break;
                        case 8:
                            message.orchestrator = reader.readString();
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
                return MsgERC20DeployedClaim.deserialize(bytes);
            }
        }
        _MsgERC20DeployedClaim_one_of_decls = new WeakMap();
        v1.MsgERC20DeployedClaim = MsgERC20DeployedClaim;
        class MsgERC20DeployedClaimResponse extends pb_1.Message {
            constructor(data) {
                super();
                _MsgERC20DeployedClaimResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgERC20DeployedClaimResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new MsgERC20DeployedClaimResponse({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgERC20DeployedClaimResponse();
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
                return MsgERC20DeployedClaimResponse.deserialize(bytes);
            }
        }
        _MsgERC20DeployedClaimResponse_one_of_decls = new WeakMap();
        v1.MsgERC20DeployedClaimResponse = MsgERC20DeployedClaimResponse;
        class MsgLogicCallExecutedClaim extends pb_1.Message {
            constructor(data) {
                super();
                _MsgLogicCallExecutedClaim_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgLogicCallExecutedClaim_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("event_nonce" in data && data.event_nonce != undefined) {
                        this.event_nonce = data.event_nonce;
                    }
                    if ("block_height" in data && data.block_height != undefined) {
                        this.block_height = data.block_height;
                    }
                    if ("invalidation_id" in data && data.invalidation_id != undefined) {
                        this.invalidation_id = data.invalidation_id;
                    }
                    if ("invalidation_nonce" in data && data.invalidation_nonce != undefined) {
                        this.invalidation_nonce = data.invalidation_nonce;
                    }
                    if ("orchestrator" in data && data.orchestrator != undefined) {
                        this.orchestrator = data.orchestrator;
                    }
                }
            }
            get event_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set event_nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get block_height() {
                return pb_1.Message.getFieldWithDefault(this, 2, 0);
            }
            set block_height(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get invalidation_id() {
                return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
            }
            set invalidation_id(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get invalidation_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 4, 0);
            }
            set invalidation_nonce(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get orchestrator() {
                return pb_1.Message.getFieldWithDefault(this, 5, "");
            }
            set orchestrator(value) {
                pb_1.Message.setField(this, 5, value);
            }
            static fromObject(data) {
                const message = new MsgLogicCallExecutedClaim({});
                if (data.event_nonce != null) {
                    message.event_nonce = data.event_nonce;
                }
                if (data.block_height != null) {
                    message.block_height = data.block_height;
                }
                if (data.invalidation_id != null) {
                    message.invalidation_id = data.invalidation_id;
                }
                if (data.invalidation_nonce != null) {
                    message.invalidation_nonce = data.invalidation_nonce;
                }
                if (data.orchestrator != null) {
                    message.orchestrator = data.orchestrator;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.event_nonce != null) {
                    data.event_nonce = this.event_nonce;
                }
                if (this.block_height != null) {
                    data.block_height = this.block_height;
                }
                if (this.invalidation_id != null) {
                    data.invalidation_id = this.invalidation_id;
                }
                if (this.invalidation_nonce != null) {
                    data.invalidation_nonce = this.invalidation_nonce;
                }
                if (this.orchestrator != null) {
                    data.orchestrator = this.orchestrator;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.event_nonce != 0)
                    writer.writeUint64(1, this.event_nonce);
                if (this.block_height != 0)
                    writer.writeUint64(2, this.block_height);
                if (this.invalidation_id.length)
                    writer.writeBytes(3, this.invalidation_id);
                if (this.invalidation_nonce != 0)
                    writer.writeUint64(4, this.invalidation_nonce);
                if (this.orchestrator.length)
                    writer.writeString(5, this.orchestrator);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgLogicCallExecutedClaim();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.event_nonce = reader.readUint64();
                            break;
                        case 2:
                            message.block_height = reader.readUint64();
                            break;
                        case 3:
                            message.invalidation_id = reader.readBytes();
                            break;
                        case 4:
                            message.invalidation_nonce = reader.readUint64();
                            break;
                        case 5:
                            message.orchestrator = reader.readString();
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
                return MsgLogicCallExecutedClaim.deserialize(bytes);
            }
        }
        _MsgLogicCallExecutedClaim_one_of_decls = new WeakMap();
        v1.MsgLogicCallExecutedClaim = MsgLogicCallExecutedClaim;
        class MsgLogicCallExecutedClaimResponse extends pb_1.Message {
            constructor(data) {
                super();
                _MsgLogicCallExecutedClaimResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgLogicCallExecutedClaimResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new MsgLogicCallExecutedClaimResponse({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgLogicCallExecutedClaimResponse();
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
                return MsgLogicCallExecutedClaimResponse.deserialize(bytes);
            }
        }
        _MsgLogicCallExecutedClaimResponse_one_of_decls = new WeakMap();
        v1.MsgLogicCallExecutedClaimResponse = MsgLogicCallExecutedClaimResponse;
        class MsgValsetUpdatedClaim extends pb_1.Message {
            constructor(data) {
                super();
                _MsgValsetUpdatedClaim_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], __classPrivateFieldGet(this, _MsgValsetUpdatedClaim_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("event_nonce" in data && data.event_nonce != undefined) {
                        this.event_nonce = data.event_nonce;
                    }
                    if ("valset_nonce" in data && data.valset_nonce != undefined) {
                        this.valset_nonce = data.valset_nonce;
                    }
                    if ("block_height" in data && data.block_height != undefined) {
                        this.block_height = data.block_height;
                    }
                    if ("members" in data && data.members != undefined) {
                        this.members = data.members;
                    }
                    if ("reward_amount" in data && data.reward_amount != undefined) {
                        this.reward_amount = data.reward_amount;
                    }
                    if ("reward_token" in data && data.reward_token != undefined) {
                        this.reward_token = data.reward_token;
                    }
                    if ("orchestrator" in data && data.orchestrator != undefined) {
                        this.orchestrator = data.orchestrator;
                    }
                }
            }
            get event_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set event_nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get valset_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 2, 0);
            }
            set valset_nonce(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get block_height() {
                return pb_1.Message.getFieldWithDefault(this, 3, 0);
            }
            set block_height(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get members() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_4.gravity.v1.BridgeValidator, 4);
            }
            set members(value) {
                pb_1.Message.setRepeatedWrapperField(this, 4, value);
            }
            get reward_amount() {
                return pb_1.Message.getFieldWithDefault(this, 5, "");
            }
            set reward_amount(value) {
                pb_1.Message.setField(this, 5, value);
            }
            get reward_token() {
                return pb_1.Message.getFieldWithDefault(this, 6, "");
            }
            set reward_token(value) {
                pb_1.Message.setField(this, 6, value);
            }
            get orchestrator() {
                return pb_1.Message.getFieldWithDefault(this, 7, "");
            }
            set orchestrator(value) {
                pb_1.Message.setField(this, 7, value);
            }
            static fromObject(data) {
                const message = new MsgValsetUpdatedClaim({});
                if (data.event_nonce != null) {
                    message.event_nonce = data.event_nonce;
                }
                if (data.valset_nonce != null) {
                    message.valset_nonce = data.valset_nonce;
                }
                if (data.block_height != null) {
                    message.block_height = data.block_height;
                }
                if (data.members != null) {
                    message.members = data.members.map(item => dependency_4.gravity.v1.BridgeValidator.fromObject(item));
                }
                if (data.reward_amount != null) {
                    message.reward_amount = data.reward_amount;
                }
                if (data.reward_token != null) {
                    message.reward_token = data.reward_token;
                }
                if (data.orchestrator != null) {
                    message.orchestrator = data.orchestrator;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.event_nonce != null) {
                    data.event_nonce = this.event_nonce;
                }
                if (this.valset_nonce != null) {
                    data.valset_nonce = this.valset_nonce;
                }
                if (this.block_height != null) {
                    data.block_height = this.block_height;
                }
                if (this.members != null) {
                    data.members = this.members.map((item) => item.toObject());
                }
                if (this.reward_amount != null) {
                    data.reward_amount = this.reward_amount;
                }
                if (this.reward_token != null) {
                    data.reward_token = this.reward_token;
                }
                if (this.orchestrator != null) {
                    data.orchestrator = this.orchestrator;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.event_nonce != 0)
                    writer.writeUint64(1, this.event_nonce);
                if (this.valset_nonce != 0)
                    writer.writeUint64(2, this.valset_nonce);
                if (this.block_height != 0)
                    writer.writeUint64(3, this.block_height);
                if (this.members.length)
                    writer.writeRepeatedMessage(4, this.members, (item) => item.serialize(writer));
                if (this.reward_amount.length)
                    writer.writeString(5, this.reward_amount);
                if (this.reward_token.length)
                    writer.writeString(6, this.reward_token);
                if (this.orchestrator.length)
                    writer.writeString(7, this.orchestrator);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgValsetUpdatedClaim();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.event_nonce = reader.readUint64();
                            break;
                        case 2:
                            message.valset_nonce = reader.readUint64();
                            break;
                        case 3:
                            message.block_height = reader.readUint64();
                            break;
                        case 4:
                            reader.readMessage(message.members, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_4.gravity.v1.BridgeValidator.deserialize(reader), dependency_4.gravity.v1.BridgeValidator));
                            break;
                        case 5:
                            message.reward_amount = reader.readString();
                            break;
                        case 6:
                            message.reward_token = reader.readString();
                            break;
                        case 7:
                            message.orchestrator = reader.readString();
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
                return MsgValsetUpdatedClaim.deserialize(bytes);
            }
        }
        _MsgValsetUpdatedClaim_one_of_decls = new WeakMap();
        v1.MsgValsetUpdatedClaim = MsgValsetUpdatedClaim;
        class MsgValsetUpdatedClaimResponse extends pb_1.Message {
            constructor(data) {
                super();
                _MsgValsetUpdatedClaimResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgValsetUpdatedClaimResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new MsgValsetUpdatedClaimResponse({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgValsetUpdatedClaimResponse();
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
                return MsgValsetUpdatedClaimResponse.deserialize(bytes);
            }
        }
        _MsgValsetUpdatedClaimResponse_one_of_decls = new WeakMap();
        v1.MsgValsetUpdatedClaimResponse = MsgValsetUpdatedClaimResponse;
        class MsgCancelSendToEth extends pb_1.Message {
            constructor(data) {
                super();
                _MsgCancelSendToEth_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgCancelSendToEth_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("transaction_id" in data && data.transaction_id != undefined) {
                        this.transaction_id = data.transaction_id;
                    }
                    if ("sender" in data && data.sender != undefined) {
                        this.sender = data.sender;
                    }
                }
            }
            get transaction_id() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set transaction_id(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get sender() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set sender(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new MsgCancelSendToEth({});
                if (data.transaction_id != null) {
                    message.transaction_id = data.transaction_id;
                }
                if (data.sender != null) {
                    message.sender = data.sender;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.transaction_id != null) {
                    data.transaction_id = this.transaction_id;
                }
                if (this.sender != null) {
                    data.sender = this.sender;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.transaction_id != 0)
                    writer.writeUint64(1, this.transaction_id);
                if (this.sender.length)
                    writer.writeString(2, this.sender);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCancelSendToEth();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.transaction_id = reader.readUint64();
                            break;
                        case 2:
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
                return MsgCancelSendToEth.deserialize(bytes);
            }
        }
        _MsgCancelSendToEth_one_of_decls = new WeakMap();
        v1.MsgCancelSendToEth = MsgCancelSendToEth;
        class MsgCancelSendToEthResponse extends pb_1.Message {
            constructor(data) {
                super();
                _MsgCancelSendToEthResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgCancelSendToEthResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new MsgCancelSendToEthResponse({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCancelSendToEthResponse();
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
                return MsgCancelSendToEthResponse.deserialize(bytes);
            }
        }
        _MsgCancelSendToEthResponse_one_of_decls = new WeakMap();
        v1.MsgCancelSendToEthResponse = MsgCancelSendToEthResponse;
        class MsgSubmitBadSignatureEvidence extends pb_1.Message {
            constructor(data) {
                super();
                _MsgSubmitBadSignatureEvidence_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSubmitBadSignatureEvidence_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("subject" in data && data.subject != undefined) {
                        this.subject = data.subject;
                    }
                    if ("signature" in data && data.signature != undefined) {
                        this.signature = data.signature;
                    }
                    if ("sender" in data && data.sender != undefined) {
                        this.sender = data.sender;
                    }
                }
            }
            get subject() {
                return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Any, 1);
            }
            set subject(value) {
                pb_1.Message.setWrapperField(this, 1, value);
            }
            get has_subject() {
                return pb_1.Message.getField(this, 1) != null;
            }
            get signature() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set signature(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get sender() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set sender(value) {
                pb_1.Message.setField(this, 3, value);
            }
            static fromObject(data) {
                const message = new MsgSubmitBadSignatureEvidence({});
                if (data.subject != null) {
                    message.subject = dependency_5.google.protobuf.Any.fromObject(data.subject);
                }
                if (data.signature != null) {
                    message.signature = data.signature;
                }
                if (data.sender != null) {
                    message.sender = data.sender;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.subject != null) {
                    data.subject = this.subject.toObject();
                }
                if (this.signature != null) {
                    data.signature = this.signature;
                }
                if (this.sender != null) {
                    data.sender = this.sender;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.has_subject)
                    writer.writeMessage(1, this.subject, () => this.subject.serialize(writer));
                if (this.signature.length)
                    writer.writeString(2, this.signature);
                if (this.sender.length)
                    writer.writeString(3, this.sender);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSubmitBadSignatureEvidence();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.subject, () => message.subject = dependency_5.google.protobuf.Any.deserialize(reader));
                            break;
                        case 2:
                            message.signature = reader.readString();
                            break;
                        case 3:
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
                return MsgSubmitBadSignatureEvidence.deserialize(bytes);
            }
        }
        _MsgSubmitBadSignatureEvidence_one_of_decls = new WeakMap();
        v1.MsgSubmitBadSignatureEvidence = MsgSubmitBadSignatureEvidence;
        class MsgSubmitBadSignatureEvidenceResponse extends pb_1.Message {
            constructor(data) {
                super();
                _MsgSubmitBadSignatureEvidenceResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSubmitBadSignatureEvidenceResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new MsgSubmitBadSignatureEvidenceResponse({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSubmitBadSignatureEvidenceResponse();
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
                return MsgSubmitBadSignatureEvidenceResponse.deserialize(bytes);
            }
        }
        _MsgSubmitBadSignatureEvidenceResponse_one_of_decls = new WeakMap();
        v1.MsgSubmitBadSignatureEvidenceResponse = MsgSubmitBadSignatureEvidenceResponse;
        class EventSetOperatorAddress extends pb_1.Message {
            constructor(data) {
                super();
                _EventSetOperatorAddress_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventSetOperatorAddress_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("message" in data && data.message != undefined) {
                        this.message = data.message;
                    }
                    if ("address" in data && data.address != undefined) {
                        this.address = data.address;
                    }
                }
            }
            get message() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set message(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get address() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set address(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new EventSetOperatorAddress({});
                if (data.message != null) {
                    message.message = data.message;
                }
                if (data.address != null) {
                    message.address = data.address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.message != null) {
                    data.message = this.message;
                }
                if (this.address != null) {
                    data.address = this.address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.message.length)
                    writer.writeString(1, this.message);
                if (this.address.length)
                    writer.writeString(2, this.address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventSetOperatorAddress();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.message = reader.readString();
                            break;
                        case 2:
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
                return EventSetOperatorAddress.deserialize(bytes);
            }
        }
        _EventSetOperatorAddress_one_of_decls = new WeakMap();
        v1.EventSetOperatorAddress = EventSetOperatorAddress;
        class EventValsetConfirmKey extends pb_1.Message {
            constructor(data) {
                super();
                _EventValsetConfirmKey_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventValsetConfirmKey_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("message" in data && data.message != undefined) {
                        this.message = data.message;
                    }
                    if ("key" in data && data.key != undefined) {
                        this.key = data.key;
                    }
                }
            }
            get message() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set message(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get key() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set key(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new EventValsetConfirmKey({});
                if (data.message != null) {
                    message.message = data.message;
                }
                if (data.key != null) {
                    message.key = data.key;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.message != null) {
                    data.message = this.message;
                }
                if (this.key != null) {
                    data.key = this.key;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.message.length)
                    writer.writeString(1, this.message);
                if (this.key.length)
                    writer.writeString(2, this.key);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventValsetConfirmKey();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.message = reader.readString();
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
                return EventValsetConfirmKey.deserialize(bytes);
            }
        }
        _EventValsetConfirmKey_one_of_decls = new WeakMap();
        v1.EventValsetConfirmKey = EventValsetConfirmKey;
        class EventBatchCreated extends pb_1.Message {
            constructor(data) {
                super();
                _EventBatchCreated_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventBatchCreated_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("message" in data && data.message != undefined) {
                        this.message = data.message;
                    }
                    if ("batch_nonce" in data && data.batch_nonce != undefined) {
                        this.batch_nonce = data.batch_nonce;
                    }
                }
            }
            get message() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set message(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get batch_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set batch_nonce(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new EventBatchCreated({});
                if (data.message != null) {
                    message.message = data.message;
                }
                if (data.batch_nonce != null) {
                    message.batch_nonce = data.batch_nonce;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.message != null) {
                    data.message = this.message;
                }
                if (this.batch_nonce != null) {
                    data.batch_nonce = this.batch_nonce;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.message.length)
                    writer.writeString(1, this.message);
                if (this.batch_nonce.length)
                    writer.writeString(2, this.batch_nonce);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventBatchCreated();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.message = reader.readString();
                            break;
                        case 2:
                            message.batch_nonce = reader.readString();
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
                return EventBatchCreated.deserialize(bytes);
            }
        }
        _EventBatchCreated_one_of_decls = new WeakMap();
        v1.EventBatchCreated = EventBatchCreated;
        class EventBatchConfirmKey extends pb_1.Message {
            constructor(data) {
                super();
                _EventBatchConfirmKey_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventBatchConfirmKey_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("message" in data && data.message != undefined) {
                        this.message = data.message;
                    }
                    if ("batch_confirm_key" in data && data.batch_confirm_key != undefined) {
                        this.batch_confirm_key = data.batch_confirm_key;
                    }
                }
            }
            get message() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set message(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get batch_confirm_key() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set batch_confirm_key(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new EventBatchConfirmKey({});
                if (data.message != null) {
                    message.message = data.message;
                }
                if (data.batch_confirm_key != null) {
                    message.batch_confirm_key = data.batch_confirm_key;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.message != null) {
                    data.message = this.message;
                }
                if (this.batch_confirm_key != null) {
                    data.batch_confirm_key = this.batch_confirm_key;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.message.length)
                    writer.writeString(1, this.message);
                if (this.batch_confirm_key.length)
                    writer.writeString(2, this.batch_confirm_key);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventBatchConfirmKey();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.message = reader.readString();
                            break;
                        case 2:
                            message.batch_confirm_key = reader.readString();
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
                return EventBatchConfirmKey.deserialize(bytes);
            }
        }
        _EventBatchConfirmKey_one_of_decls = new WeakMap();
        v1.EventBatchConfirmKey = EventBatchConfirmKey;
        class EventBatchSendToEthClaim extends pb_1.Message {
            constructor(data) {
                super();
                _EventBatchSendToEthClaim_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventBatchSendToEthClaim_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                }
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new EventBatchSendToEthClaim({});
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.nonce.length)
                    writer.writeString(1, this.nonce);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventBatchSendToEthClaim();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
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
                return EventBatchSendToEthClaim.deserialize(bytes);
            }
        }
        _EventBatchSendToEthClaim_one_of_decls = new WeakMap();
        v1.EventBatchSendToEthClaim = EventBatchSendToEthClaim;
        class EventClaim extends pb_1.Message {
            constructor(data) {
                super();
                _EventClaim_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventClaim_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("message" in data && data.message != undefined) {
                        this.message = data.message;
                    }
                    if ("claim_hash" in data && data.claim_hash != undefined) {
                        this.claim_hash = data.claim_hash;
                    }
                    if ("attestation_id" in data && data.attestation_id != undefined) {
                        this.attestation_id = data.attestation_id;
                    }
                }
            }
            get message() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set message(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get claim_hash() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set claim_hash(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get attestation_id() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set attestation_id(value) {
                pb_1.Message.setField(this, 3, value);
            }
            static fromObject(data) {
                const message = new EventClaim({});
                if (data.message != null) {
                    message.message = data.message;
                }
                if (data.claim_hash != null) {
                    message.claim_hash = data.claim_hash;
                }
                if (data.attestation_id != null) {
                    message.attestation_id = data.attestation_id;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.message != null) {
                    data.message = this.message;
                }
                if (this.claim_hash != null) {
                    data.claim_hash = this.claim_hash;
                }
                if (this.attestation_id != null) {
                    data.attestation_id = this.attestation_id;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.message.length)
                    writer.writeString(1, this.message);
                if (this.claim_hash.length)
                    writer.writeString(2, this.claim_hash);
                if (this.attestation_id.length)
                    writer.writeString(3, this.attestation_id);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventClaim();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.message = reader.readString();
                            break;
                        case 2:
                            message.claim_hash = reader.readString();
                            break;
                        case 3:
                            message.attestation_id = reader.readString();
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
                return EventClaim.deserialize(bytes);
            }
        }
        _EventClaim_one_of_decls = new WeakMap();
        v1.EventClaim = EventClaim;
        class EventBadSignatureEvidence extends pb_1.Message {
            constructor(data) {
                super();
                _EventBadSignatureEvidence_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventBadSignatureEvidence_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("message" in data && data.message != undefined) {
                        this.message = data.message;
                    }
                    if ("bad_eth_signature" in data && data.bad_eth_signature != undefined) {
                        this.bad_eth_signature = data.bad_eth_signature;
                    }
                    if ("bad_eth_signature_subject" in data && data.bad_eth_signature_subject != undefined) {
                        this.bad_eth_signature_subject = data.bad_eth_signature_subject;
                    }
                }
            }
            get message() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set message(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get bad_eth_signature() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set bad_eth_signature(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get bad_eth_signature_subject() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set bad_eth_signature_subject(value) {
                pb_1.Message.setField(this, 3, value);
            }
            static fromObject(data) {
                const message = new EventBadSignatureEvidence({});
                if (data.message != null) {
                    message.message = data.message;
                }
                if (data.bad_eth_signature != null) {
                    message.bad_eth_signature = data.bad_eth_signature;
                }
                if (data.bad_eth_signature_subject != null) {
                    message.bad_eth_signature_subject = data.bad_eth_signature_subject;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.message != null) {
                    data.message = this.message;
                }
                if (this.bad_eth_signature != null) {
                    data.bad_eth_signature = this.bad_eth_signature;
                }
                if (this.bad_eth_signature_subject != null) {
                    data.bad_eth_signature_subject = this.bad_eth_signature_subject;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.message.length)
                    writer.writeString(1, this.message);
                if (this.bad_eth_signature.length)
                    writer.writeString(2, this.bad_eth_signature);
                if (this.bad_eth_signature_subject.length)
                    writer.writeString(3, this.bad_eth_signature_subject);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventBadSignatureEvidence();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.message = reader.readString();
                            break;
                        case 2:
                            message.bad_eth_signature = reader.readString();
                            break;
                        case 3:
                            message.bad_eth_signature_subject = reader.readString();
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
                return EventBadSignatureEvidence.deserialize(bytes);
            }
        }
        _EventBadSignatureEvidence_one_of_decls = new WeakMap();
        v1.EventBadSignatureEvidence = EventBadSignatureEvidence;
        class EventERC20DeployedClaim extends pb_1.Message {
            constructor(data) {
                super();
                _EventERC20DeployedClaim_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventERC20DeployedClaim_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("token" in data && data.token != undefined) {
                        this.token = data.token;
                    }
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                }
            }
            get token() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set token(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set nonce(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new EventERC20DeployedClaim({});
                if (data.token != null) {
                    message.token = data.token;
                }
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.token != null) {
                    data.token = this.token;
                }
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.token.length)
                    writer.writeString(1, this.token);
                if (this.nonce.length)
                    writer.writeString(2, this.nonce);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventERC20DeployedClaim();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.token = reader.readString();
                            break;
                        case 2:
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
                return EventERC20DeployedClaim.deserialize(bytes);
            }
        }
        _EventERC20DeployedClaim_one_of_decls = new WeakMap();
        v1.EventERC20DeployedClaim = EventERC20DeployedClaim;
        class EventValsetUpdatedClaim extends pb_1.Message {
            constructor(data) {
                super();
                _EventValsetUpdatedClaim_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventValsetUpdatedClaim_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                }
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new EventValsetUpdatedClaim({});
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.nonce.length)
                    writer.writeString(1, this.nonce);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventValsetUpdatedClaim();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
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
                return EventValsetUpdatedClaim.deserialize(bytes);
            }
        }
        _EventValsetUpdatedClaim_one_of_decls = new WeakMap();
        v1.EventValsetUpdatedClaim = EventValsetUpdatedClaim;
        class EventMultisigUpdateRequest extends pb_1.Message {
            constructor(data) {
                super();
                _EventMultisigUpdateRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventMultisigUpdateRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("bridge_contract" in data && data.bridge_contract != undefined) {
                        this.bridge_contract = data.bridge_contract;
                    }
                    if ("bridge_chain_id" in data && data.bridge_chain_id != undefined) {
                        this.bridge_chain_id = data.bridge_chain_id;
                    }
                    if ("multisig_id" in data && data.multisig_id != undefined) {
                        this.multisig_id = data.multisig_id;
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
            get multisig_id() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set multisig_id(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set nonce(value) {
                pb_1.Message.setField(this, 4, value);
            }
            static fromObject(data) {
                const message = new EventMultisigUpdateRequest({});
                if (data.bridge_contract != null) {
                    message.bridge_contract = data.bridge_contract;
                }
                if (data.bridge_chain_id != null) {
                    message.bridge_chain_id = data.bridge_chain_id;
                }
                if (data.multisig_id != null) {
                    message.multisig_id = data.multisig_id;
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
                if (this.multisig_id != null) {
                    data.multisig_id = this.multisig_id;
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
                if (this.multisig_id.length)
                    writer.writeString(3, this.multisig_id);
                if (this.nonce.length)
                    writer.writeString(4, this.nonce);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventMultisigUpdateRequest();
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
                            message.multisig_id = reader.readString();
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
                return EventMultisigUpdateRequest.deserialize(bytes);
            }
        }
        _EventMultisigUpdateRequest_one_of_decls = new WeakMap();
        v1.EventMultisigUpdateRequest = EventMultisigUpdateRequest;
        class EventOutgoingLogicCallCanceled extends pb_1.Message {
            constructor(data) {
                super();
                _EventOutgoingLogicCallCanceled_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventOutgoingLogicCallCanceled_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("logic_call_invalidation_id" in data && data.logic_call_invalidation_id != undefined) {
                        this.logic_call_invalidation_id = data.logic_call_invalidation_id;
                    }
                    if ("logic_call_invalidation_nonce" in data && data.logic_call_invalidation_nonce != undefined) {
                        this.logic_call_invalidation_nonce = data.logic_call_invalidation_nonce;
                    }
                }
            }
            get logic_call_invalidation_id() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set logic_call_invalidation_id(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get logic_call_invalidation_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set logic_call_invalidation_nonce(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new EventOutgoingLogicCallCanceled({});
                if (data.logic_call_invalidation_id != null) {
                    message.logic_call_invalidation_id = data.logic_call_invalidation_id;
                }
                if (data.logic_call_invalidation_nonce != null) {
                    message.logic_call_invalidation_nonce = data.logic_call_invalidation_nonce;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.logic_call_invalidation_id != null) {
                    data.logic_call_invalidation_id = this.logic_call_invalidation_id;
                }
                if (this.logic_call_invalidation_nonce != null) {
                    data.logic_call_invalidation_nonce = this.logic_call_invalidation_nonce;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.logic_call_invalidation_id.length)
                    writer.writeString(1, this.logic_call_invalidation_id);
                if (this.logic_call_invalidation_nonce.length)
                    writer.writeString(2, this.logic_call_invalidation_nonce);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventOutgoingLogicCallCanceled();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.logic_call_invalidation_id = reader.readString();
                            break;
                        case 2:
                            message.logic_call_invalidation_nonce = reader.readString();
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
                return EventOutgoingLogicCallCanceled.deserialize(bytes);
            }
        }
        _EventOutgoingLogicCallCanceled_one_of_decls = new WeakMap();
        v1.EventOutgoingLogicCallCanceled = EventOutgoingLogicCallCanceled;
        class EventSignatureSlashing extends pb_1.Message {
            constructor(data) {
                super();
                _EventSignatureSlashing_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventSignatureSlashing_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("type" in data && data.type != undefined) {
                        this.type = data.type;
                    }
                    if ("address" in data && data.address != undefined) {
                        this.address = data.address;
                    }
                }
            }
            get type() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set type(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get address() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set address(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new EventSignatureSlashing({});
                if (data.type != null) {
                    message.type = data.type;
                }
                if (data.address != null) {
                    message.address = data.address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.type != null) {
                    data.type = this.type;
                }
                if (this.address != null) {
                    data.address = this.address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.type.length)
                    writer.writeString(1, this.type);
                if (this.address.length)
                    writer.writeString(2, this.address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventSignatureSlashing();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.type = reader.readString();
                            break;
                        case 2:
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
                return EventSignatureSlashing.deserialize(bytes);
            }
        }
        _EventSignatureSlashing_one_of_decls = new WeakMap();
        v1.EventSignatureSlashing = EventSignatureSlashing;
        class EventOutgoingTxId extends pb_1.Message {
            constructor(data) {
                super();
                _EventOutgoingTxId_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EventOutgoingTxId_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("message" in data && data.message != undefined) {
                        this.message = data.message;
                    }
                    if ("tx_id" in data && data.tx_id != undefined) {
                        this.tx_id = data.tx_id;
                    }
                }
            }
            get message() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set message(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get tx_id() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set tx_id(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new EventOutgoingTxId({});
                if (data.message != null) {
                    message.message = data.message;
                }
                if (data.tx_id != null) {
                    message.tx_id = data.tx_id;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.message != null) {
                    data.message = this.message;
                }
                if (this.tx_id != null) {
                    data.tx_id = this.tx_id;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.message.length)
                    writer.writeString(1, this.message);
                if (this.tx_id.length)
                    writer.writeString(2, this.tx_id);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventOutgoingTxId();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.message = reader.readString();
                            break;
                        case 2:
                            message.tx_id = reader.readString();
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
                return EventOutgoingTxId.deserialize(bytes);
            }
        }
        _EventOutgoingTxId_one_of_decls = new WeakMap();
        v1.EventOutgoingTxId = EventOutgoingTxId;
        class UnimplementedMsgService {
        }
        UnimplementedMsgService.definition = {
            ValsetConfirm: {
                path: "/gravity.v1.Msg/ValsetConfirm",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => MsgValsetConfirm.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => MsgValsetConfirmResponse.deserialize(new Uint8Array(bytes))
            },
            SendToEth: {
                path: "/gravity.v1.Msg/SendToEth",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => MsgSendToEth.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => MsgSendToEthResponse.deserialize(new Uint8Array(bytes))
            },
            RequestBatch: {
                path: "/gravity.v1.Msg/RequestBatch",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => MsgRequestBatch.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => MsgRequestBatchResponse.deserialize(new Uint8Array(bytes))
            },
            ConfirmBatch: {
                path: "/gravity.v1.Msg/ConfirmBatch",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => MsgConfirmBatch.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => MsgConfirmBatchResponse.deserialize(new Uint8Array(bytes))
            },
            ConfirmLogicCall: {
                path: "/gravity.v1.Msg/ConfirmLogicCall",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => MsgConfirmLogicCall.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => MsgConfirmLogicCallResponse.deserialize(new Uint8Array(bytes))
            },
            SendToCosmosClaim: {
                path: "/gravity.v1.Msg/SendToCosmosClaim",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => MsgSendToCosmosClaim.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => MsgSendToCosmosClaimResponse.deserialize(new Uint8Array(bytes))
            },
            BatchSendToEthClaim: {
                path: "/gravity.v1.Msg/BatchSendToEthClaim",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => MsgBatchSendToEthClaim.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => MsgBatchSendToEthClaimResponse.deserialize(new Uint8Array(bytes))
            },
            ValsetUpdateClaim: {
                path: "/gravity.v1.Msg/ValsetUpdateClaim",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => MsgValsetUpdatedClaim.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => MsgValsetUpdatedClaimResponse.deserialize(new Uint8Array(bytes))
            },
            ERC20DeployedClaim: {
                path: "/gravity.v1.Msg/ERC20DeployedClaim",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => MsgERC20DeployedClaim.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => MsgERC20DeployedClaimResponse.deserialize(new Uint8Array(bytes))
            },
            LogicCallExecutedClaim: {
                path: "/gravity.v1.Msg/LogicCallExecutedClaim",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => MsgLogicCallExecutedClaim.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => MsgLogicCallExecutedClaimResponse.deserialize(new Uint8Array(bytes))
            },
            SetOrchestratorAddress: {
                path: "/gravity.v1.Msg/SetOrchestratorAddress",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => MsgSetOrchestratorAddress.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => MsgSetOrchestratorAddressResponse.deserialize(new Uint8Array(bytes))
            },
            CancelSendToEth: {
                path: "/gravity.v1.Msg/CancelSendToEth",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => MsgCancelSendToEth.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => MsgCancelSendToEthResponse.deserialize(new Uint8Array(bytes))
            },
            SubmitBadSignatureEvidence: {
                path: "/gravity.v1.Msg/SubmitBadSignatureEvidence",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => MsgSubmitBadSignatureEvidence.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => MsgSubmitBadSignatureEvidenceResponse.deserialize(new Uint8Array(bytes))
            }
        };
        v1.UnimplementedMsgService = UnimplementedMsgService;
        class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
            constructor(address, credentials, options) {
                super(address, credentials, options);
                this.ValsetConfirm = (message, metadata, options, callback) => {
                    return super.ValsetConfirm(message, metadata, options, callback);
                };
                this.SendToEth = (message, metadata, options, callback) => {
                    return super.SendToEth(message, metadata, options, callback);
                };
                this.RequestBatch = (message, metadata, options, callback) => {
                    return super.RequestBatch(message, metadata, options, callback);
                };
                this.ConfirmBatch = (message, metadata, options, callback) => {
                    return super.ConfirmBatch(message, metadata, options, callback);
                };
                this.ConfirmLogicCall = (message, metadata, options, callback) => {
                    return super.ConfirmLogicCall(message, metadata, options, callback);
                };
                this.SendToCosmosClaim = (message, metadata, options, callback) => {
                    return super.SendToCosmosClaim(message, metadata, options, callback);
                };
                this.BatchSendToEthClaim = (message, metadata, options, callback) => {
                    return super.BatchSendToEthClaim(message, metadata, options, callback);
                };
                this.ValsetUpdateClaim = (message, metadata, options, callback) => {
                    return super.ValsetUpdateClaim(message, metadata, options, callback);
                };
                this.ERC20DeployedClaim = (message, metadata, options, callback) => {
                    return super.ERC20DeployedClaim(message, metadata, options, callback);
                };
                this.LogicCallExecutedClaim = (message, metadata, options, callback) => {
                    return super.LogicCallExecutedClaim(message, metadata, options, callback);
                };
                this.SetOrchestratorAddress = (message, metadata, options, callback) => {
                    return super.SetOrchestratorAddress(message, metadata, options, callback);
                };
                this.CancelSendToEth = (message, metadata, options, callback) => {
                    return super.CancelSendToEth(message, metadata, options, callback);
                };
                this.SubmitBadSignatureEvidence = (message, metadata, options, callback) => {
                    return super.SubmitBadSignatureEvidence(message, metadata, options, callback);
                };
            }
        }
        v1.MsgClient = MsgClient;
    })(v1 = gravity.v1 || (gravity.v1 = {}));
})(gravity = exports.gravity || (exports.gravity = {}));
//# sourceMappingURL=msgs.js.map