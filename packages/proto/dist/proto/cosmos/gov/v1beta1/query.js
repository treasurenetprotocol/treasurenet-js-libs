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
const dependency_1 = __importStar(require("./../../base/query/v1beta1/pagination"));
const dependency_4 = __importStar(require("./gov"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var gov;
    (function (gov) {
        var v1beta1;
        (function (v1beta1) {
            var _QueryProposalRequest_one_of_decls, _QueryProposalResponse_one_of_decls, _QueryProposalsRequest_one_of_decls, _QueryProposalsResponse_one_of_decls, _QueryVoteRequest_one_of_decls, _QueryVoteResponse_one_of_decls, _QueryVotesRequest_one_of_decls, _QueryVotesResponse_one_of_decls, _QueryParamsRequest_one_of_decls, _QueryParamsResponse_one_of_decls, _QueryDepositRequest_one_of_decls, _QueryDepositResponse_one_of_decls, _QueryDepositsRequest_one_of_decls, _QueryDepositsResponse_one_of_decls, _QueryTallyResultRequest_one_of_decls, _QueryTallyResultResponse_one_of_decls;
            class QueryProposalRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryProposalRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryProposalRequest_one_of_decls, "f"));
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
                    const message = new QueryProposalRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryProposalRequest();
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
                    return QueryProposalRequest.deserialize(bytes);
                }
            }
            _QueryProposalRequest_one_of_decls = new WeakMap();
            v1beta1.QueryProposalRequest = QueryProposalRequest;
            class QueryProposalResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryProposalResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryProposalResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("proposal" in data && data.proposal != undefined) {
                            this.proposal = data.proposal;
                        }
                    }
                }
                get proposal() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.gov.v1beta1.Proposal, 1);
                }
                set proposal(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_proposal() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryProposalResponse({});
                    if (data.proposal != null) {
                        message.proposal = dependency_4.cosmos.gov.v1beta1.Proposal.fromObject(data.proposal);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.proposal != null) {
                        data.proposal = this.proposal.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_proposal)
                        writer.writeMessage(1, this.proposal, () => this.proposal.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryProposalResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.proposal, () => message.proposal = dependency_4.cosmos.gov.v1beta1.Proposal.deserialize(reader));
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
                    return QueryProposalResponse.deserialize(bytes);
                }
            }
            _QueryProposalResponse_one_of_decls = new WeakMap();
            v1beta1.QueryProposalResponse = QueryProposalResponse;
            class QueryProposalsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryProposalsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryProposalsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("proposal_status" in data && data.proposal_status != undefined) {
                            this.proposal_status = data.proposal_status;
                        }
                        if ("voter" in data && data.voter != undefined) {
                            this.voter = data.voter;
                        }
                        if ("depositor" in data && data.depositor != undefined) {
                            this.depositor = data.depositor;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get proposal_status() {
                    return pb_1.Message.getFieldWithDefault(this, 1, dependency_4.cosmos.gov.v1beta1.ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED);
                }
                set proposal_status(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get voter() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set voter(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get depositor() {
                    return pb_1.Message.getFieldWithDefault(this, 3, "");
                }
                set depositor(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 4);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 4, value);
                }
                get has_pagination() {
                    return pb_1.Message.getField(this, 4) != null;
                }
                static fromObject(data) {
                    const message = new QueryProposalsRequest({});
                    if (data.proposal_status != null) {
                        message.proposal_status = data.proposal_status;
                    }
                    if (data.voter != null) {
                        message.voter = data.voter;
                    }
                    if (data.depositor != null) {
                        message.depositor = data.depositor;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.proposal_status != null) {
                        data.proposal_status = this.proposal_status;
                    }
                    if (this.voter != null) {
                        data.voter = this.voter;
                    }
                    if (this.depositor != null) {
                        data.depositor = this.depositor;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.proposal_status != dependency_4.cosmos.gov.v1beta1.ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED)
                        writer.writeEnum(1, this.proposal_status);
                    if (this.voter.length)
                        writer.writeString(2, this.voter);
                    if (this.depositor.length)
                        writer.writeString(3, this.depositor);
                    if (this.has_pagination)
                        writer.writeMessage(4, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryProposalsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.proposal_status = reader.readEnum();
                                break;
                            case 2:
                                message.voter = reader.readString();
                                break;
                            case 3:
                                message.depositor = reader.readString();
                                break;
                            case 4:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
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
                    return QueryProposalsRequest.deserialize(bytes);
                }
            }
            _QueryProposalsRequest_one_of_decls = new WeakMap();
            v1beta1.QueryProposalsRequest = QueryProposalsRequest;
            class QueryProposalsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryProposalsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryProposalsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("proposals" in data && data.proposals != undefined) {
                            this.proposals = data.proposals;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get proposals() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.gov.v1beta1.Proposal, 1);
                }
                set proposals(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageResponse, 2);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get has_pagination() {
                    return pb_1.Message.getField(this, 2) != null;
                }
                static fromObject(data) {
                    const message = new QueryProposalsResponse({});
                    if (data.proposals != null) {
                        message.proposals = data.proposals.map(item => dependency_4.cosmos.gov.v1beta1.Proposal.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.proposals != null) {
                        data.proposals = this.proposals.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.proposals.length)
                        writer.writeRepeatedMessage(1, this.proposals, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryProposalsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.proposals, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.gov.v1beta1.Proposal.deserialize(reader), dependency_4.cosmos.gov.v1beta1.Proposal));
                                break;
                            case 2:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
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
                    return QueryProposalsResponse.deserialize(bytes);
                }
            }
            _QueryProposalsResponse_one_of_decls = new WeakMap();
            v1beta1.QueryProposalsResponse = QueryProposalsResponse;
            class QueryVoteRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryVoteRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryVoteRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("proposal_id" in data && data.proposal_id != undefined) {
                            this.proposal_id = data.proposal_id;
                        }
                        if ("voter" in data && data.voter != undefined) {
                            this.voter = data.voter;
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
                static fromObject(data) {
                    const message = new QueryVoteRequest({});
                    if (data.proposal_id != null) {
                        message.proposal_id = data.proposal_id;
                    }
                    if (data.voter != null) {
                        message.voter = data.voter;
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
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.proposal_id != 0)
                        writer.writeUint64(1, this.proposal_id);
                    if (this.voter.length)
                        writer.writeString(2, this.voter);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryVoteRequest();
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
                            default: reader.skipField();
                        }
                    }
                    return message;
                }
                serializeBinary() {
                    return this.serialize();
                }
                static deserializeBinary(bytes) {
                    return QueryVoteRequest.deserialize(bytes);
                }
            }
            _QueryVoteRequest_one_of_decls = new WeakMap();
            v1beta1.QueryVoteRequest = QueryVoteRequest;
            class QueryVoteResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryVoteResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryVoteResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("vote" in data && data.vote != undefined) {
                            this.vote = data.vote;
                        }
                    }
                }
                get vote() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.gov.v1beta1.Vote, 1);
                }
                set vote(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_vote() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryVoteResponse({});
                    if (data.vote != null) {
                        message.vote = dependency_4.cosmos.gov.v1beta1.Vote.fromObject(data.vote);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.vote != null) {
                        data.vote = this.vote.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_vote)
                        writer.writeMessage(1, this.vote, () => this.vote.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryVoteResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.vote, () => message.vote = dependency_4.cosmos.gov.v1beta1.Vote.deserialize(reader));
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
                    return QueryVoteResponse.deserialize(bytes);
                }
            }
            _QueryVoteResponse_one_of_decls = new WeakMap();
            v1beta1.QueryVoteResponse = QueryVoteResponse;
            class QueryVotesRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryVotesRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryVotesRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("proposal_id" in data && data.proposal_id != undefined) {
                            this.proposal_id = data.proposal_id;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get proposal_id() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set proposal_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 2);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get has_pagination() {
                    return pb_1.Message.getField(this, 2) != null;
                }
                static fromObject(data) {
                    const message = new QueryVotesRequest({});
                    if (data.proposal_id != null) {
                        message.proposal_id = data.proposal_id;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.proposal_id != null) {
                        data.proposal_id = this.proposal_id;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.proposal_id != 0)
                        writer.writeUint64(1, this.proposal_id);
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryVotesRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.proposal_id = reader.readUint64();
                                break;
                            case 2:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
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
                    return QueryVotesRequest.deserialize(bytes);
                }
            }
            _QueryVotesRequest_one_of_decls = new WeakMap();
            v1beta1.QueryVotesRequest = QueryVotesRequest;
            class QueryVotesResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryVotesResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryVotesResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("votes" in data && data.votes != undefined) {
                            this.votes = data.votes;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get votes() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.gov.v1beta1.Vote, 1);
                }
                set votes(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageResponse, 2);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get has_pagination() {
                    return pb_1.Message.getField(this, 2) != null;
                }
                static fromObject(data) {
                    const message = new QueryVotesResponse({});
                    if (data.votes != null) {
                        message.votes = data.votes.map(item => dependency_4.cosmos.gov.v1beta1.Vote.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.votes != null) {
                        data.votes = this.votes.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.votes.length)
                        writer.writeRepeatedMessage(1, this.votes, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryVotesResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.votes, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.gov.v1beta1.Vote.deserialize(reader), dependency_4.cosmos.gov.v1beta1.Vote));
                                break;
                            case 2:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
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
                    return QueryVotesResponse.deserialize(bytes);
                }
            }
            _QueryVotesResponse_one_of_decls = new WeakMap();
            v1beta1.QueryVotesResponse = QueryVotesResponse;
            class QueryParamsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryParamsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryParamsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("params_type" in data && data.params_type != undefined) {
                            this.params_type = data.params_type;
                        }
                    }
                }
                get params_type() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set params_type(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryParamsRequest({});
                    if (data.params_type != null) {
                        message.params_type = data.params_type;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.params_type != null) {
                        data.params_type = this.params_type;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.params_type.length)
                        writer.writeString(1, this.params_type);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.params_type = reader.readString();
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
                    return QueryParamsRequest.deserialize(bytes);
                }
            }
            _QueryParamsRequest_one_of_decls = new WeakMap();
            v1beta1.QueryParamsRequest = QueryParamsRequest;
            class QueryParamsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryParamsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryParamsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("voting_params" in data && data.voting_params != undefined) {
                            this.voting_params = data.voting_params;
                        }
                        if ("deposit_params" in data && data.deposit_params != undefined) {
                            this.deposit_params = data.deposit_params;
                        }
                        if ("tally_params" in data && data.tally_params != undefined) {
                            this.tally_params = data.tally_params;
                        }
                    }
                }
                get voting_params() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.gov.v1beta1.VotingParams, 1);
                }
                set voting_params(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_voting_params() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                get deposit_params() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.gov.v1beta1.DepositParams, 2);
                }
                set deposit_params(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get has_deposit_params() {
                    return pb_1.Message.getField(this, 2) != null;
                }
                get tally_params() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.gov.v1beta1.TallyParams, 3);
                }
                set tally_params(value) {
                    pb_1.Message.setWrapperField(this, 3, value);
                }
                get has_tally_params() {
                    return pb_1.Message.getField(this, 3) != null;
                }
                static fromObject(data) {
                    const message = new QueryParamsResponse({});
                    if (data.voting_params != null) {
                        message.voting_params = dependency_4.cosmos.gov.v1beta1.VotingParams.fromObject(data.voting_params);
                    }
                    if (data.deposit_params != null) {
                        message.deposit_params = dependency_4.cosmos.gov.v1beta1.DepositParams.fromObject(data.deposit_params);
                    }
                    if (data.tally_params != null) {
                        message.tally_params = dependency_4.cosmos.gov.v1beta1.TallyParams.fromObject(data.tally_params);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.voting_params != null) {
                        data.voting_params = this.voting_params.toObject();
                    }
                    if (this.deposit_params != null) {
                        data.deposit_params = this.deposit_params.toObject();
                    }
                    if (this.tally_params != null) {
                        data.tally_params = this.tally_params.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_voting_params)
                        writer.writeMessage(1, this.voting_params, () => this.voting_params.serialize(writer));
                    if (this.has_deposit_params)
                        writer.writeMessage(2, this.deposit_params, () => this.deposit_params.serialize(writer));
                    if (this.has_tally_params)
                        writer.writeMessage(3, this.tally_params, () => this.tally_params.serialize(writer));
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
                                reader.readMessage(message.voting_params, () => message.voting_params = dependency_4.cosmos.gov.v1beta1.VotingParams.deserialize(reader));
                                break;
                            case 2:
                                reader.readMessage(message.deposit_params, () => message.deposit_params = dependency_4.cosmos.gov.v1beta1.DepositParams.deserialize(reader));
                                break;
                            case 3:
                                reader.readMessage(message.tally_params, () => message.tally_params = dependency_4.cosmos.gov.v1beta1.TallyParams.deserialize(reader));
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
            v1beta1.QueryParamsResponse = QueryParamsResponse;
            class QueryDepositRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDepositRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDepositRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("proposal_id" in data && data.proposal_id != undefined) {
                            this.proposal_id = data.proposal_id;
                        }
                        if ("depositor" in data && data.depositor != undefined) {
                            this.depositor = data.depositor;
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
                static fromObject(data) {
                    const message = new QueryDepositRequest({});
                    if (data.proposal_id != null) {
                        message.proposal_id = data.proposal_id;
                    }
                    if (data.depositor != null) {
                        message.depositor = data.depositor;
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
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.proposal_id != 0)
                        writer.writeUint64(1, this.proposal_id);
                    if (this.depositor.length)
                        writer.writeString(2, this.depositor);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDepositRequest();
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
                            default: reader.skipField();
                        }
                    }
                    return message;
                }
                serializeBinary() {
                    return this.serialize();
                }
                static deserializeBinary(bytes) {
                    return QueryDepositRequest.deserialize(bytes);
                }
            }
            _QueryDepositRequest_one_of_decls = new WeakMap();
            v1beta1.QueryDepositRequest = QueryDepositRequest;
            class QueryDepositResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDepositResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDepositResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("deposit" in data && data.deposit != undefined) {
                            this.deposit = data.deposit;
                        }
                    }
                }
                get deposit() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.gov.v1beta1.Deposit, 1);
                }
                set deposit(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_deposit() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryDepositResponse({});
                    if (data.deposit != null) {
                        message.deposit = dependency_4.cosmos.gov.v1beta1.Deposit.fromObject(data.deposit);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.deposit != null) {
                        data.deposit = this.deposit.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_deposit)
                        writer.writeMessage(1, this.deposit, () => this.deposit.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDepositResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.deposit, () => message.deposit = dependency_4.cosmos.gov.v1beta1.Deposit.deserialize(reader));
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
                    return QueryDepositResponse.deserialize(bytes);
                }
            }
            _QueryDepositResponse_one_of_decls = new WeakMap();
            v1beta1.QueryDepositResponse = QueryDepositResponse;
            class QueryDepositsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDepositsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDepositsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("proposal_id" in data && data.proposal_id != undefined) {
                            this.proposal_id = data.proposal_id;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get proposal_id() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set proposal_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 2);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get has_pagination() {
                    return pb_1.Message.getField(this, 2) != null;
                }
                static fromObject(data) {
                    const message = new QueryDepositsRequest({});
                    if (data.proposal_id != null) {
                        message.proposal_id = data.proposal_id;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.proposal_id != null) {
                        data.proposal_id = this.proposal_id;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.proposal_id != 0)
                        writer.writeUint64(1, this.proposal_id);
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDepositsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.proposal_id = reader.readUint64();
                                break;
                            case 2:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
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
                    return QueryDepositsRequest.deserialize(bytes);
                }
            }
            _QueryDepositsRequest_one_of_decls = new WeakMap();
            v1beta1.QueryDepositsRequest = QueryDepositsRequest;
            class QueryDepositsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDepositsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryDepositsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("deposits" in data && data.deposits != undefined) {
                            this.deposits = data.deposits;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get deposits() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.gov.v1beta1.Deposit, 1);
                }
                set deposits(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                get pagination() {
                    return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageResponse, 2);
                }
                set pagination(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get has_pagination() {
                    return pb_1.Message.getField(this, 2) != null;
                }
                static fromObject(data) {
                    const message = new QueryDepositsResponse({});
                    if (data.deposits != null) {
                        message.deposits = data.deposits.map(item => dependency_4.cosmos.gov.v1beta1.Deposit.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.deposits != null) {
                        data.deposits = this.deposits.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.deposits.length)
                        writer.writeRepeatedMessage(1, this.deposits, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDepositsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.deposits, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.gov.v1beta1.Deposit.deserialize(reader), dependency_4.cosmos.gov.v1beta1.Deposit));
                                break;
                            case 2:
                                reader.readMessage(message.pagination, () => message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
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
                    return QueryDepositsResponse.deserialize(bytes);
                }
            }
            _QueryDepositsResponse_one_of_decls = new WeakMap();
            v1beta1.QueryDepositsResponse = QueryDepositsResponse;
            class QueryTallyResultRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTallyResultRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryTallyResultRequest_one_of_decls, "f"));
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
                    const message = new QueryTallyResultRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTallyResultRequest();
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
                    return QueryTallyResultRequest.deserialize(bytes);
                }
            }
            _QueryTallyResultRequest_one_of_decls = new WeakMap();
            v1beta1.QueryTallyResultRequest = QueryTallyResultRequest;
            class QueryTallyResultResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTallyResultResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryTallyResultResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("tally" in data && data.tally != undefined) {
                            this.tally = data.tally;
                        }
                    }
                }
                get tally() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.gov.v1beta1.TallyResult, 1);
                }
                set tally(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_tally() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryTallyResultResponse({});
                    if (data.tally != null) {
                        message.tally = dependency_4.cosmos.gov.v1beta1.TallyResult.fromObject(data.tally);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.tally != null) {
                        data.tally = this.tally.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_tally)
                        writer.writeMessage(1, this.tally, () => this.tally.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTallyResultResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.tally, () => message.tally = dependency_4.cosmos.gov.v1beta1.TallyResult.deserialize(reader));
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
                    return QueryTallyResultResponse.deserialize(bytes);
                }
            }
            _QueryTallyResultResponse_one_of_decls = new WeakMap();
            v1beta1.QueryTallyResultResponse = QueryTallyResultResponse;
            class UnimplementedQueryService {
            }
            UnimplementedQueryService.definition = {
                Proposal: {
                    path: "/cosmos.gov.v1beta1.Query/Proposal",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryProposalRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryProposalResponse.deserialize(new Uint8Array(bytes))
                },
                Proposals: {
                    path: "/cosmos.gov.v1beta1.Query/Proposals",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryProposalsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryProposalsResponse.deserialize(new Uint8Array(bytes))
                },
                Vote: {
                    path: "/cosmos.gov.v1beta1.Query/Vote",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryVoteRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryVoteResponse.deserialize(new Uint8Array(bytes))
                },
                Votes: {
                    path: "/cosmos.gov.v1beta1.Query/Votes",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryVotesRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryVotesResponse.deserialize(new Uint8Array(bytes))
                },
                Params: {
                    path: "/cosmos.gov.v1beta1.Query/Params",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
                },
                Deposit: {
                    path: "/cosmos.gov.v1beta1.Query/Deposit",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryDepositRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryDepositResponse.deserialize(new Uint8Array(bytes))
                },
                Deposits: {
                    path: "/cosmos.gov.v1beta1.Query/Deposits",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryDepositsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryDepositsResponse.deserialize(new Uint8Array(bytes))
                },
                TallyResult: {
                    path: "/cosmos.gov.v1beta1.Query/TallyResult",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryTallyResultRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryTallyResultResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1beta1.UnimplementedQueryService = UnimplementedQueryService;
            class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.Proposal = (message, metadata, options, callback) => {
                        return super.Proposal(message, metadata, options, callback);
                    };
                    this.Proposals = (message, metadata, options, callback) => {
                        return super.Proposals(message, metadata, options, callback);
                    };
                    this.Vote = (message, metadata, options, callback) => {
                        return super.Vote(message, metadata, options, callback);
                    };
                    this.Votes = (message, metadata, options, callback) => {
                        return super.Votes(message, metadata, options, callback);
                    };
                    this.Params = (message, metadata, options, callback) => {
                        return super.Params(message, metadata, options, callback);
                    };
                    this.Deposit = (message, metadata, options, callback) => {
                        return super.Deposit(message, metadata, options, callback);
                    };
                    this.Deposits = (message, metadata, options, callback) => {
                        return super.Deposits(message, metadata, options, callback);
                    };
                    this.TallyResult = (message, metadata, options, callback) => {
                        return super.TallyResult(message, metadata, options, callback);
                    };
                }
            }
            v1beta1.QueryClient = QueryClient;
        })(v1beta1 = gov.v1beta1 || (gov.v1beta1 = {}));
    })(gov = cosmos.gov || (cosmos.gov = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=query.js.map