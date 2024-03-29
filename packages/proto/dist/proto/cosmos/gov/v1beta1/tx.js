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
const dependency_1 = __importStar(require("./../../base/v1beta1/coin"));
const dependency_2 = __importStar(require("./gov"));
const dependency_5 = __importStar(require("./../../../google/protobuf/any"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var gov;
    (function (gov) {
        var v1beta1;
        (function (v1beta1) {
            var _MsgSubmitProposal_one_of_decls, _MsgSubmitProposalResponse_one_of_decls, _MsgVote_one_of_decls, _MsgVoteResponse_one_of_decls, _MsgVoteWeighted_one_of_decls, _MsgVoteWeightedResponse_one_of_decls, _MsgDeposit_one_of_decls, _MsgDepositResponse_one_of_decls;
            class MsgSubmitProposal extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgSubmitProposal_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _MsgSubmitProposal_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("content" in data && data.content != undefined) {
                            this.content = data.content;
                        }
                        if ("initial_deposit" in data && data.initial_deposit != undefined) {
                            this.initial_deposit = data.initial_deposit;
                        }
                        if ("proposer" in data && data.proposer != undefined) {
                            this.proposer = data.proposer;
                        }
                    }
                }
                get content() {
                    return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Any, 1);
                }
                set content(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_content() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                get initial_deposit() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 2);
                }
                set initial_deposit(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                }
                get proposer() {
                    return pb_1.Message.getFieldWithDefault(this, 3, "");
                }
                set proposer(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgSubmitProposal({});
                    if (data.content != null) {
                        message.content = dependency_5.google.protobuf.Any.fromObject(data.content);
                    }
                    if (data.initial_deposit != null) {
                        message.initial_deposit = data.initial_deposit.map(item => dependency_1.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    if (data.proposer != null) {
                        message.proposer = data.proposer;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.content != null) {
                        data.content = this.content.toObject();
                    }
                    if (this.initial_deposit != null) {
                        data.initial_deposit = this.initial_deposit.map((item) => item.toObject());
                    }
                    if (this.proposer != null) {
                        data.proposer = this.proposer;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_content)
                        writer.writeMessage(1, this.content, () => this.content.serialize(writer));
                    if (this.initial_deposit.length)
                        writer.writeRepeatedMessage(2, this.initial_deposit, (item) => item.serialize(writer));
                    if (this.proposer.length)
                        writer.writeString(3, this.proposer);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSubmitProposal();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.content, () => message.content = dependency_5.google.protobuf.Any.deserialize(reader));
                                break;
                            case 2:
                                reader.readMessage(message.initial_deposit, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_1.cosmos.base.v1beta1.Coin));
                                break;
                            case 3:
                                message.proposer = reader.readString();
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
                    return MsgSubmitProposal.deserialize(bytes);
                }
            }
            _MsgSubmitProposal_one_of_decls = new WeakMap();
            v1beta1.MsgSubmitProposal = MsgSubmitProposal;
            class MsgSubmitProposalResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgSubmitProposalResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSubmitProposalResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("proposal_id" in data && data.proposal_id != undefined) {
                            this.proposal_id = data.proposal_id;
                        }
                    }
                }
                get proposal_id() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set proposal_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new MsgSubmitProposalResponse({});
                    if (data.proposal_id != null) {
                        message.proposal_id = data.proposal_id;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.proposal_id != null) {
                        data.proposal_id = this.proposal_id;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.proposal_id != 0)
                        writer.writeUint64(1, this.proposal_id);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSubmitProposalResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.proposal_id = reader.readUint64();
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
                    return MsgSubmitProposalResponse.deserialize(bytes);
                }
            }
            _MsgSubmitProposalResponse_one_of_decls = new WeakMap();
            v1beta1.MsgSubmitProposalResponse = MsgSubmitProposalResponse;
            class MsgVote extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgVote_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgVote_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("proposal_id" in data && data.proposal_id != undefined) {
                            this.proposal_id = data.proposal_id;
                        }
                        if ("voter" in data && data.voter != undefined) {
                            this.voter = data.voter;
                        }
                        if ("option" in data && data.option != undefined) {
                            this.option = data.option;
                        }
                    }
                }
                get proposal_id() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set proposal_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get voter() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set voter(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get option() {
                    return pb_1.Message.getFieldWithDefault(this, 3, dependency_2.cosmos.gov.v1beta1.VoteOption.VOTE_OPTION_UNSPECIFIED);
                }
                set option(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgVote({});
                    if (data.proposal_id != null) {
                        message.proposal_id = data.proposal_id;
                    }
                    if (data.voter != null) {
                        message.voter = data.voter;
                    }
                    if (data.option != null) {
                        message.option = data.option;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.proposal_id != null) {
                        data.proposal_id = this.proposal_id;
                    }
                    if (this.voter != null) {
                        data.voter = this.voter;
                    }
                    if (this.option != null) {
                        data.option = this.option;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.proposal_id != 0)
                        writer.writeUint64(1, this.proposal_id);
                    if (this.voter.length)
                        writer.writeString(2, this.voter);
                    if (this.option != dependency_2.cosmos.gov.v1beta1.VoteOption.VOTE_OPTION_UNSPECIFIED)
                        writer.writeEnum(3, this.option);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgVote();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.proposal_id = reader.readUint64();
                                break;
                            case 2:
                                message.voter = reader.readString();
                                break;
                            case 3:
                                message.option = reader.readEnum();
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
                    return MsgVote.deserialize(bytes);
                }
            }
            _MsgVote_one_of_decls = new WeakMap();
            v1beta1.MsgVote = MsgVote;
            class MsgVoteResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgVoteResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgVoteResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgVoteResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgVoteResponse();
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
                    return MsgVoteResponse.deserialize(bytes);
                }
            }
            _MsgVoteResponse_one_of_decls = new WeakMap();
            v1beta1.MsgVoteResponse = MsgVoteResponse;
            class MsgVoteWeighted extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgVoteWeighted_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _MsgVoteWeighted_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("proposal_id" in data && data.proposal_id != undefined) {
                            this.proposal_id = data.proposal_id;
                        }
                        if ("voter" in data && data.voter != undefined) {
                            this.voter = data.voter;
                        }
                        if ("options" in data && data.options != undefined) {
                            this.options = data.options;
                        }
                    }
                }
                get proposal_id() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set proposal_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get voter() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set voter(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get options() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.gov.v1beta1.WeightedVoteOption, 3);
                }
                set options(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgVoteWeighted({});
                    if (data.proposal_id != null) {
                        message.proposal_id = data.proposal_id;
                    }
                    if (data.voter != null) {
                        message.voter = data.voter;
                    }
                    if (data.options != null) {
                        message.options = data.options.map(item => dependency_2.cosmos.gov.v1beta1.WeightedVoteOption.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.proposal_id != null) {
                        data.proposal_id = this.proposal_id;
                    }
                    if (this.voter != null) {
                        data.voter = this.voter;
                    }
                    if (this.options != null) {
                        data.options = this.options.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.proposal_id != 0)
                        writer.writeUint64(1, this.proposal_id);
                    if (this.voter.length)
                        writer.writeString(2, this.voter);
                    if (this.options.length)
                        writer.writeRepeatedMessage(3, this.options, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgVoteWeighted();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.proposal_id = reader.readUint64();
                                break;
                            case 2:
                                message.voter = reader.readString();
                                break;
                            case 3:
                                reader.readMessage(message.options, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.gov.v1beta1.WeightedVoteOption.deserialize(reader), dependency_2.cosmos.gov.v1beta1.WeightedVoteOption));
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
                    return MsgVoteWeighted.deserialize(bytes);
                }
            }
            _MsgVoteWeighted_one_of_decls = new WeakMap();
            v1beta1.MsgVoteWeighted = MsgVoteWeighted;
            class MsgVoteWeightedResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgVoteWeightedResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgVoteWeightedResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgVoteWeightedResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgVoteWeightedResponse();
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
                    return MsgVoteWeightedResponse.deserialize(bytes);
                }
            }
            _MsgVoteWeightedResponse_one_of_decls = new WeakMap();
            v1beta1.MsgVoteWeightedResponse = MsgVoteWeightedResponse;
            class MsgDeposit extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgDeposit_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _MsgDeposit_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("proposal_id" in data && data.proposal_id != undefined) {
                            this.proposal_id = data.proposal_id;
                        }
                        if ("depositor" in data && data.depositor != undefined) {
                            this.depositor = data.depositor;
                        }
                        if ("amount" in data && data.amount != undefined) {
                            this.amount = data.amount;
                        }
                    }
                }
                get proposal_id() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set proposal_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get depositor() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set depositor(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get amount() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 3);
                }
                set amount(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgDeposit({});
                    if (data.proposal_id != null) {
                        message.proposal_id = data.proposal_id;
                    }
                    if (data.depositor != null) {
                        message.depositor = data.depositor;
                    }
                    if (data.amount != null) {
                        message.amount = data.amount.map(item => dependency_1.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.proposal_id != null) {
                        data.proposal_id = this.proposal_id;
                    }
                    if (this.depositor != null) {
                        data.depositor = this.depositor;
                    }
                    if (this.amount != null) {
                        data.amount = this.amount.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.proposal_id != 0)
                        writer.writeUint64(1, this.proposal_id);
                    if (this.depositor.length)
                        writer.writeString(2, this.depositor);
                    if (this.amount.length)
                        writer.writeRepeatedMessage(3, this.amount, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgDeposit();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.proposal_id = reader.readUint64();
                                break;
                            case 2:
                                message.depositor = reader.readString();
                                break;
                            case 3:
                                reader.readMessage(message.amount, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_1.cosmos.base.v1beta1.Coin));
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
                    return MsgDeposit.deserialize(bytes);
                }
            }
            _MsgDeposit_one_of_decls = new WeakMap();
            v1beta1.MsgDeposit = MsgDeposit;
            class MsgDepositResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgDepositResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgDepositResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgDepositResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgDepositResponse();
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
                    return MsgDepositResponse.deserialize(bytes);
                }
            }
            _MsgDepositResponse_one_of_decls = new WeakMap();
            v1beta1.MsgDepositResponse = MsgDepositResponse;
            class UnimplementedMsgService {
            }
            UnimplementedMsgService.definition = {
                SubmitProposal: {
                    path: "/cosmos.gov.v1beta1.Msg/SubmitProposal",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgSubmitProposal.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgSubmitProposalResponse.deserialize(new Uint8Array(bytes))
                },
                Vote: {
                    path: "/cosmos.gov.v1beta1.Msg/Vote",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgVote.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgVoteResponse.deserialize(new Uint8Array(bytes))
                },
                VoteWeighted: {
                    path: "/cosmos.gov.v1beta1.Msg/VoteWeighted",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgVoteWeighted.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgVoteWeightedResponse.deserialize(new Uint8Array(bytes))
                },
                Deposit: {
                    path: "/cosmos.gov.v1beta1.Msg/Deposit",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgDeposit.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgDepositResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1beta1.UnimplementedMsgService = UnimplementedMsgService;
            class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.SubmitProposal = (message, metadata, options, callback) => {
                        return super.SubmitProposal(message, metadata, options, callback);
                    };
                    this.Vote = (message, metadata, options, callback) => {
                        return super.Vote(message, metadata, options, callback);
                    };
                    this.VoteWeighted = (message, metadata, options, callback) => {
                        return super.VoteWeighted(message, metadata, options, callback);
                    };
                    this.Deposit = (message, metadata, options, callback) => {
                        return super.Deposit(message, metadata, options, callback);
                    };
                }
            }
            v1beta1.MsgClient = MsgClient;
        })(v1beta1 = gov.v1beta1 || (gov.v1beta1 = {}));
    })(gov = cosmos.gov || (cosmos.gov = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=tx.js.map