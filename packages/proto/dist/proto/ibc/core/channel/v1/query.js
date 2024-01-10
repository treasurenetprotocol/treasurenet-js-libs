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
const dependency_1 = __importStar(require("./../../client/v1/client"));
const dependency_2 = __importStar(require("./../../../../cosmos/base/query/v1beta1/pagination"));
const dependency_3 = __importStar(require("./channel"));
const dependency_5 = __importStar(require("./../../../../google/protobuf/any"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var ibc;
(function (ibc) {
    var core;
    (function (core) {
        var channel;
        (function (channel) {
            var v1;
            (function (v1) {
                var _QueryChannelRequest_one_of_decls, _QueryChannelResponse_one_of_decls, _QueryChannelsRequest_one_of_decls, _QueryChannelsResponse_one_of_decls, _QueryConnectionChannelsRequest_one_of_decls, _QueryConnectionChannelsResponse_one_of_decls, _QueryChannelClientStateRequest_one_of_decls, _QueryChannelClientStateResponse_one_of_decls, _QueryChannelConsensusStateRequest_one_of_decls, _QueryChannelConsensusStateResponse_one_of_decls, _QueryPacketCommitmentRequest_one_of_decls, _QueryPacketCommitmentResponse_one_of_decls, _QueryPacketCommitmentsRequest_one_of_decls, _QueryPacketCommitmentsResponse_one_of_decls, _QueryPacketReceiptRequest_one_of_decls, _QueryPacketReceiptResponse_one_of_decls, _QueryPacketAcknowledgementRequest_one_of_decls, _QueryPacketAcknowledgementResponse_one_of_decls, _QueryPacketAcknowledgementsRequest_one_of_decls, _QueryPacketAcknowledgementsResponse_one_of_decls, _QueryUnreceivedPacketsRequest_one_of_decls, _QueryUnreceivedPacketsResponse_one_of_decls, _QueryUnreceivedAcksRequest_one_of_decls, _QueryUnreceivedAcksResponse_one_of_decls, _QueryNextSequenceReceiveRequest_one_of_decls, _QueryNextSequenceReceiveResponse_one_of_decls;
                class QueryChannelRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryChannelRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryChannelRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    static fromObject(data) {
                        const message = new QueryChannelRequest({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.channel_id.length)
                            writer.writeString(2, this.channel_id);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryChannelRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.channel_id = reader.readString();
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
                        return QueryChannelRequest.deserialize(bytes);
                    }
                }
                _QueryChannelRequest_one_of_decls = new WeakMap();
                v1.QueryChannelRequest = QueryChannelRequest;
                class QueryChannelResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryChannelResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryChannelResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("channel" in data && data.channel != undefined) {
                                this.channel = data.channel;
                            }
                            if ("proof" in data && data.proof != undefined) {
                                this.proof = data.proof;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                        }
                    }
                    get channel() {
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.Channel, 1);
                    }
                    set channel(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_channel() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    get proof() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set proof(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryChannelResponse({});
                        if (data.channel != null) {
                            message.channel = dependency_3.ibc.core.channel.v1.Channel.fromObject(data.channel);
                        }
                        if (data.proof != null) {
                            message.proof = data.proof;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_1.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.channel != null) {
                            data.channel = this.channel.toObject();
                        }
                        if (this.proof != null) {
                            data.proof = this.proof;
                        }
                        if (this.proof_height != null) {
                            data.proof_height = this.proof_height.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_channel)
                            writer.writeMessage(1, this.channel, () => this.channel.serialize(writer));
                        if (this.proof.length)
                            writer.writeBytes(2, this.proof);
                        if (this.has_proof_height)
                            writer.writeMessage(3, this.proof_height, () => this.proof_height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryChannelResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.channel, () => message.channel = dependency_3.ibc.core.channel.v1.Channel.deserialize(reader));
                                    break;
                                case 2:
                                    message.proof = reader.readBytes();
                                    break;
                                case 3:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_1.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryChannelResponse.deserialize(bytes);
                    }
                }
                _QueryChannelResponse_one_of_decls = new WeakMap();
                v1.QueryChannelResponse = QueryChannelResponse;
                class QueryChannelsRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryChannelsRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryChannelsRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("pagination" in data && data.pagination != undefined) {
                                this.pagination = data.pagination;
                            }
                        }
                    }
                    get pagination() {
                        return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageRequest, 1);
                    }
                    set pagination(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_pagination() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryChannelsRequest({});
                        if (data.pagination != null) {
                            message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.pagination != null) {
                            data.pagination = this.pagination.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_pagination)
                            writer.writeMessage(1, this.pagination, () => this.pagination.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryChannelsRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
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
                        return QueryChannelsRequest.deserialize(bytes);
                    }
                }
                _QueryChannelsRequest_one_of_decls = new WeakMap();
                v1.QueryChannelsRequest = QueryChannelsRequest;
                class QueryChannelsResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryChannelsResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryChannelsResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("channels" in data && data.channels != undefined) {
                                this.channels = data.channels;
                            }
                            if ("pagination" in data && data.pagination != undefined) {
                                this.pagination = data.pagination;
                            }
                            if ("height" in data && data.height != undefined) {
                                this.height = data.height;
                            }
                        }
                    }
                    get channels() {
                        return pb_1.Message.getRepeatedWrapperField(this, dependency_3.ibc.core.channel.v1.IdentifiedChannel, 1);
                    }
                    set channels(value) {
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
                    get height() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
                    }
                    set height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryChannelsResponse({});
                        if (data.channels != null) {
                            message.channels = data.channels.map(item => dependency_3.ibc.core.channel.v1.IdentifiedChannel.fromObject(item));
                        }
                        if (data.pagination != null) {
                            message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                        }
                        if (data.height != null) {
                            message.height = dependency_1.ibc.core.client.v1.Height.fromObject(data.height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.channels != null) {
                            data.channels = this.channels.map((item) => item.toObject());
                        }
                        if (this.pagination != null) {
                            data.pagination = this.pagination.toObject();
                        }
                        if (this.height != null) {
                            data.height = this.height.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.channels.length)
                            writer.writeRepeatedMessage(1, this.channels, (item) => item.serialize(writer));
                        if (this.has_pagination)
                            writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                        if (this.has_height)
                            writer.writeMessage(3, this.height, () => this.height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryChannelsResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.channels, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.ibc.core.channel.v1.IdentifiedChannel.deserialize(reader), dependency_3.ibc.core.channel.v1.IdentifiedChannel));
                                    break;
                                case 2:
                                    reader.readMessage(message.pagination, () => message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
                                    break;
                                case 3:
                                    reader.readMessage(message.height, () => message.height = dependency_1.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryChannelsResponse.deserialize(bytes);
                    }
                }
                _QueryChannelsResponse_one_of_decls = new WeakMap();
                v1.QueryChannelsResponse = QueryChannelsResponse;
                class QueryConnectionChannelsRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryConnectionChannelsRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryConnectionChannelsRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("connection" in data && data.connection != undefined) {
                                this.connection = data.connection;
                            }
                            if ("pagination" in data && data.pagination != undefined) {
                                this.pagination = data.pagination;
                            }
                        }
                    }
                    get connection() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set connection(value) {
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
                        const message = new QueryConnectionChannelsRequest({});
                        if (data.connection != null) {
                            message.connection = data.connection;
                        }
                        if (data.pagination != null) {
                            message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.connection != null) {
                            data.connection = this.connection;
                        }
                        if (this.pagination != null) {
                            data.pagination = this.pagination.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.connection.length)
                            writer.writeString(1, this.connection);
                        if (this.has_pagination)
                            writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryConnectionChannelsRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.connection = reader.readString();
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
                        return QueryConnectionChannelsRequest.deserialize(bytes);
                    }
                }
                _QueryConnectionChannelsRequest_one_of_decls = new WeakMap();
                v1.QueryConnectionChannelsRequest = QueryConnectionChannelsRequest;
                class QueryConnectionChannelsResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryConnectionChannelsResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryConnectionChannelsResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("channels" in data && data.channels != undefined) {
                                this.channels = data.channels;
                            }
                            if ("pagination" in data && data.pagination != undefined) {
                                this.pagination = data.pagination;
                            }
                            if ("height" in data && data.height != undefined) {
                                this.height = data.height;
                            }
                        }
                    }
                    get channels() {
                        return pb_1.Message.getRepeatedWrapperField(this, dependency_3.ibc.core.channel.v1.IdentifiedChannel, 1);
                    }
                    set channels(value) {
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
                    get height() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
                    }
                    set height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryConnectionChannelsResponse({});
                        if (data.channels != null) {
                            message.channels = data.channels.map(item => dependency_3.ibc.core.channel.v1.IdentifiedChannel.fromObject(item));
                        }
                        if (data.pagination != null) {
                            message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                        }
                        if (data.height != null) {
                            message.height = dependency_1.ibc.core.client.v1.Height.fromObject(data.height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.channels != null) {
                            data.channels = this.channels.map((item) => item.toObject());
                        }
                        if (this.pagination != null) {
                            data.pagination = this.pagination.toObject();
                        }
                        if (this.height != null) {
                            data.height = this.height.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.channels.length)
                            writer.writeRepeatedMessage(1, this.channels, (item) => item.serialize(writer));
                        if (this.has_pagination)
                            writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                        if (this.has_height)
                            writer.writeMessage(3, this.height, () => this.height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryConnectionChannelsResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.channels, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.ibc.core.channel.v1.IdentifiedChannel.deserialize(reader), dependency_3.ibc.core.channel.v1.IdentifiedChannel));
                                    break;
                                case 2:
                                    reader.readMessage(message.pagination, () => message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
                                    break;
                                case 3:
                                    reader.readMessage(message.height, () => message.height = dependency_1.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryConnectionChannelsResponse.deserialize(bytes);
                    }
                }
                _QueryConnectionChannelsResponse_one_of_decls = new WeakMap();
                v1.QueryConnectionChannelsResponse = QueryConnectionChannelsResponse;
                class QueryChannelClientStateRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryChannelClientStateRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryChannelClientStateRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    static fromObject(data) {
                        const message = new QueryChannelClientStateRequest({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.channel_id.length)
                            writer.writeString(2, this.channel_id);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryChannelClientStateRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.channel_id = reader.readString();
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
                        return QueryChannelClientStateRequest.deserialize(bytes);
                    }
                }
                _QueryChannelClientStateRequest_one_of_decls = new WeakMap();
                v1.QueryChannelClientStateRequest = QueryChannelClientStateRequest;
                class QueryChannelClientStateResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryChannelClientStateResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryChannelClientStateResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("identified_client_state" in data && data.identified_client_state != undefined) {
                                this.identified_client_state = data.identified_client_state;
                            }
                            if ("proof" in data && data.proof != undefined) {
                                this.proof = data.proof;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                        }
                    }
                    get identified_client_state() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.IdentifiedClientState, 1);
                    }
                    set identified_client_state(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_identified_client_state() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    get proof() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set proof(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryChannelClientStateResponse({});
                        if (data.identified_client_state != null) {
                            message.identified_client_state = dependency_1.ibc.core.client.v1.IdentifiedClientState.fromObject(data.identified_client_state);
                        }
                        if (data.proof != null) {
                            message.proof = data.proof;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_1.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.identified_client_state != null) {
                            data.identified_client_state = this.identified_client_state.toObject();
                        }
                        if (this.proof != null) {
                            data.proof = this.proof;
                        }
                        if (this.proof_height != null) {
                            data.proof_height = this.proof_height.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_identified_client_state)
                            writer.writeMessage(1, this.identified_client_state, () => this.identified_client_state.serialize(writer));
                        if (this.proof.length)
                            writer.writeBytes(2, this.proof);
                        if (this.has_proof_height)
                            writer.writeMessage(3, this.proof_height, () => this.proof_height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryChannelClientStateResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.identified_client_state, () => message.identified_client_state = dependency_1.ibc.core.client.v1.IdentifiedClientState.deserialize(reader));
                                    break;
                                case 2:
                                    message.proof = reader.readBytes();
                                    break;
                                case 3:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_1.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryChannelClientStateResponse.deserialize(bytes);
                    }
                }
                _QueryChannelClientStateResponse_one_of_decls = new WeakMap();
                v1.QueryChannelClientStateResponse = QueryChannelClientStateResponse;
                class QueryChannelConsensusStateRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryChannelConsensusStateRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryChannelConsensusStateRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                            if ("revision_number" in data && data.revision_number != undefined) {
                                this.revision_number = data.revision_number;
                            }
                            if ("revision_height" in data && data.revision_height != undefined) {
                                this.revision_height = data.revision_height;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get revision_number() {
                        return pb_1.Message.getFieldWithDefault(this, 3, 0);
                    }
                    set revision_number(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    get revision_height() {
                        return pb_1.Message.getFieldWithDefault(this, 4, 0);
                    }
                    set revision_height(value) {
                        pb_1.Message.setField(this, 4, value);
                    }
                    static fromObject(data) {
                        const message = new QueryChannelConsensusStateRequest({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        if (data.revision_number != null) {
                            message.revision_number = data.revision_number;
                        }
                        if (data.revision_height != null) {
                            message.revision_height = data.revision_height;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        if (this.revision_number != null) {
                            data.revision_number = this.revision_number;
                        }
                        if (this.revision_height != null) {
                            data.revision_height = this.revision_height;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.channel_id.length)
                            writer.writeString(2, this.channel_id);
                        if (this.revision_number != 0)
                            writer.writeUint64(3, this.revision_number);
                        if (this.revision_height != 0)
                            writer.writeUint64(4, this.revision_height);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryChannelConsensusStateRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.channel_id = reader.readString();
                                    break;
                                case 3:
                                    message.revision_number = reader.readUint64();
                                    break;
                                case 4:
                                    message.revision_height = reader.readUint64();
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
                        return QueryChannelConsensusStateRequest.deserialize(bytes);
                    }
                }
                _QueryChannelConsensusStateRequest_one_of_decls = new WeakMap();
                v1.QueryChannelConsensusStateRequest = QueryChannelConsensusStateRequest;
                class QueryChannelConsensusStateResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryChannelConsensusStateResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryChannelConsensusStateResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("consensus_state" in data && data.consensus_state != undefined) {
                                this.consensus_state = data.consensus_state;
                            }
                            if ("client_id" in data && data.client_id != undefined) {
                                this.client_id = data.client_id;
                            }
                            if ("proof" in data && data.proof != undefined) {
                                this.proof = data.proof;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                        }
                    }
                    get consensus_state() {
                        return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Any, 1);
                    }
                    set consensus_state(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_consensus_state() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    get client_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set client_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof() {
                        return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
                    }
                    set proof(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 4);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 4, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 4) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryChannelConsensusStateResponse({});
                        if (data.consensus_state != null) {
                            message.consensus_state = dependency_5.google.protobuf.Any.fromObject(data.consensus_state);
                        }
                        if (data.client_id != null) {
                            message.client_id = data.client_id;
                        }
                        if (data.proof != null) {
                            message.proof = data.proof;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_1.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.consensus_state != null) {
                            data.consensus_state = this.consensus_state.toObject();
                        }
                        if (this.client_id != null) {
                            data.client_id = this.client_id;
                        }
                        if (this.proof != null) {
                            data.proof = this.proof;
                        }
                        if (this.proof_height != null) {
                            data.proof_height = this.proof_height.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_consensus_state)
                            writer.writeMessage(1, this.consensus_state, () => this.consensus_state.serialize(writer));
                        if (this.client_id.length)
                            writer.writeString(2, this.client_id);
                        if (this.proof.length)
                            writer.writeBytes(3, this.proof);
                        if (this.has_proof_height)
                            writer.writeMessage(4, this.proof_height, () => this.proof_height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryChannelConsensusStateResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.consensus_state, () => message.consensus_state = dependency_5.google.protobuf.Any.deserialize(reader));
                                    break;
                                case 2:
                                    message.client_id = reader.readString();
                                    break;
                                case 3:
                                    message.proof = reader.readBytes();
                                    break;
                                case 4:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_1.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryChannelConsensusStateResponse.deserialize(bytes);
                    }
                }
                _QueryChannelConsensusStateResponse_one_of_decls = new WeakMap();
                v1.QueryChannelConsensusStateResponse = QueryChannelConsensusStateResponse;
                class QueryPacketCommitmentRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryPacketCommitmentRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryPacketCommitmentRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                            if ("sequence" in data && data.sequence != undefined) {
                                this.sequence = data.sequence;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get sequence() {
                        return pb_1.Message.getFieldWithDefault(this, 3, 0);
                    }
                    set sequence(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    static fromObject(data) {
                        const message = new QueryPacketCommitmentRequest({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        if (data.sequence != null) {
                            message.sequence = data.sequence;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        if (this.sequence != null) {
                            data.sequence = this.sequence;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.channel_id.length)
                            writer.writeString(2, this.channel_id);
                        if (this.sequence != 0)
                            writer.writeUint64(3, this.sequence);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPacketCommitmentRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.channel_id = reader.readString();
                                    break;
                                case 3:
                                    message.sequence = reader.readUint64();
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
                        return QueryPacketCommitmentRequest.deserialize(bytes);
                    }
                }
                _QueryPacketCommitmentRequest_one_of_decls = new WeakMap();
                v1.QueryPacketCommitmentRequest = QueryPacketCommitmentRequest;
                class QueryPacketCommitmentResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryPacketCommitmentResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryPacketCommitmentResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("commitment" in data && data.commitment != undefined) {
                                this.commitment = data.commitment;
                            }
                            if ("proof" in data && data.proof != undefined) {
                                this.proof = data.proof;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                        }
                    }
                    get commitment() {
                        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                    }
                    set commitment(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get proof() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set proof(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryPacketCommitmentResponse({});
                        if (data.commitment != null) {
                            message.commitment = data.commitment;
                        }
                        if (data.proof != null) {
                            message.proof = data.proof;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_1.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.commitment != null) {
                            data.commitment = this.commitment;
                        }
                        if (this.proof != null) {
                            data.proof = this.proof;
                        }
                        if (this.proof_height != null) {
                            data.proof_height = this.proof_height.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.commitment.length)
                            writer.writeBytes(1, this.commitment);
                        if (this.proof.length)
                            writer.writeBytes(2, this.proof);
                        if (this.has_proof_height)
                            writer.writeMessage(3, this.proof_height, () => this.proof_height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPacketCommitmentResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.commitment = reader.readBytes();
                                    break;
                                case 2:
                                    message.proof = reader.readBytes();
                                    break;
                                case 3:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_1.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryPacketCommitmentResponse.deserialize(bytes);
                    }
                }
                _QueryPacketCommitmentResponse_one_of_decls = new WeakMap();
                v1.QueryPacketCommitmentResponse = QueryPacketCommitmentResponse;
                class QueryPacketCommitmentsRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryPacketCommitmentsRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryPacketCommitmentsRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                            if ("pagination" in data && data.pagination != undefined) {
                                this.pagination = data.pagination;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get pagination() {
                        return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageRequest, 3);
                    }
                    set pagination(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_pagination() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryPacketCommitmentsRequest({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        if (data.pagination != null) {
                            message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        if (this.pagination != null) {
                            data.pagination = this.pagination.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.channel_id.length)
                            writer.writeString(2, this.channel_id);
                        if (this.has_pagination)
                            writer.writeMessage(3, this.pagination, () => this.pagination.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPacketCommitmentsRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.channel_id = reader.readString();
                                    break;
                                case 3:
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
                        return QueryPacketCommitmentsRequest.deserialize(bytes);
                    }
                }
                _QueryPacketCommitmentsRequest_one_of_decls = new WeakMap();
                v1.QueryPacketCommitmentsRequest = QueryPacketCommitmentsRequest;
                class QueryPacketCommitmentsResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryPacketCommitmentsResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryPacketCommitmentsResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("commitments" in data && data.commitments != undefined) {
                                this.commitments = data.commitments;
                            }
                            if ("pagination" in data && data.pagination != undefined) {
                                this.pagination = data.pagination;
                            }
                            if ("height" in data && data.height != undefined) {
                                this.height = data.height;
                            }
                        }
                    }
                    get commitments() {
                        return pb_1.Message.getRepeatedWrapperField(this, dependency_3.ibc.core.channel.v1.PacketState, 1);
                    }
                    set commitments(value) {
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
                    get height() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
                    }
                    set height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryPacketCommitmentsResponse({});
                        if (data.commitments != null) {
                            message.commitments = data.commitments.map(item => dependency_3.ibc.core.channel.v1.PacketState.fromObject(item));
                        }
                        if (data.pagination != null) {
                            message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                        }
                        if (data.height != null) {
                            message.height = dependency_1.ibc.core.client.v1.Height.fromObject(data.height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.commitments != null) {
                            data.commitments = this.commitments.map((item) => item.toObject());
                        }
                        if (this.pagination != null) {
                            data.pagination = this.pagination.toObject();
                        }
                        if (this.height != null) {
                            data.height = this.height.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.commitments.length)
                            writer.writeRepeatedMessage(1, this.commitments, (item) => item.serialize(writer));
                        if (this.has_pagination)
                            writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                        if (this.has_height)
                            writer.writeMessage(3, this.height, () => this.height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPacketCommitmentsResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.commitments, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.ibc.core.channel.v1.PacketState.deserialize(reader), dependency_3.ibc.core.channel.v1.PacketState));
                                    break;
                                case 2:
                                    reader.readMessage(message.pagination, () => message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
                                    break;
                                case 3:
                                    reader.readMessage(message.height, () => message.height = dependency_1.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryPacketCommitmentsResponse.deserialize(bytes);
                    }
                }
                _QueryPacketCommitmentsResponse_one_of_decls = new WeakMap();
                v1.QueryPacketCommitmentsResponse = QueryPacketCommitmentsResponse;
                class QueryPacketReceiptRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryPacketReceiptRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryPacketReceiptRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                            if ("sequence" in data && data.sequence != undefined) {
                                this.sequence = data.sequence;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get sequence() {
                        return pb_1.Message.getFieldWithDefault(this, 3, 0);
                    }
                    set sequence(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    static fromObject(data) {
                        const message = new QueryPacketReceiptRequest({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        if (data.sequence != null) {
                            message.sequence = data.sequence;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        if (this.sequence != null) {
                            data.sequence = this.sequence;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.channel_id.length)
                            writer.writeString(2, this.channel_id);
                        if (this.sequence != 0)
                            writer.writeUint64(3, this.sequence);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPacketReceiptRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.channel_id = reader.readString();
                                    break;
                                case 3:
                                    message.sequence = reader.readUint64();
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
                        return QueryPacketReceiptRequest.deserialize(bytes);
                    }
                }
                _QueryPacketReceiptRequest_one_of_decls = new WeakMap();
                v1.QueryPacketReceiptRequest = QueryPacketReceiptRequest;
                class QueryPacketReceiptResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryPacketReceiptResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryPacketReceiptResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("received" in data && data.received != undefined) {
                                this.received = data.received;
                            }
                            if ("proof" in data && data.proof != undefined) {
                                this.proof = data.proof;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                        }
                    }
                    get received() {
                        return pb_1.Message.getFieldWithDefault(this, 2, false);
                    }
                    set received(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof() {
                        return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
                    }
                    set proof(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 4);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 4, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 4) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryPacketReceiptResponse({});
                        if (data.received != null) {
                            message.received = data.received;
                        }
                        if (data.proof != null) {
                            message.proof = data.proof;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_1.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.received != null) {
                            data.received = this.received;
                        }
                        if (this.proof != null) {
                            data.proof = this.proof;
                        }
                        if (this.proof_height != null) {
                            data.proof_height = this.proof_height.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.received != false)
                            writer.writeBool(2, this.received);
                        if (this.proof.length)
                            writer.writeBytes(3, this.proof);
                        if (this.has_proof_height)
                            writer.writeMessage(4, this.proof_height, () => this.proof_height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPacketReceiptResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 2:
                                    message.received = reader.readBool();
                                    break;
                                case 3:
                                    message.proof = reader.readBytes();
                                    break;
                                case 4:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_1.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryPacketReceiptResponse.deserialize(bytes);
                    }
                }
                _QueryPacketReceiptResponse_one_of_decls = new WeakMap();
                v1.QueryPacketReceiptResponse = QueryPacketReceiptResponse;
                class QueryPacketAcknowledgementRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryPacketAcknowledgementRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryPacketAcknowledgementRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                            if ("sequence" in data && data.sequence != undefined) {
                                this.sequence = data.sequence;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get sequence() {
                        return pb_1.Message.getFieldWithDefault(this, 3, 0);
                    }
                    set sequence(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    static fromObject(data) {
                        const message = new QueryPacketAcknowledgementRequest({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        if (data.sequence != null) {
                            message.sequence = data.sequence;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        if (this.sequence != null) {
                            data.sequence = this.sequence;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.channel_id.length)
                            writer.writeString(2, this.channel_id);
                        if (this.sequence != 0)
                            writer.writeUint64(3, this.sequence);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPacketAcknowledgementRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.channel_id = reader.readString();
                                    break;
                                case 3:
                                    message.sequence = reader.readUint64();
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
                        return QueryPacketAcknowledgementRequest.deserialize(bytes);
                    }
                }
                _QueryPacketAcknowledgementRequest_one_of_decls = new WeakMap();
                v1.QueryPacketAcknowledgementRequest = QueryPacketAcknowledgementRequest;
                class QueryPacketAcknowledgementResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryPacketAcknowledgementResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryPacketAcknowledgementResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("acknowledgement" in data && data.acknowledgement != undefined) {
                                this.acknowledgement = data.acknowledgement;
                            }
                            if ("proof" in data && data.proof != undefined) {
                                this.proof = data.proof;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                        }
                    }
                    get acknowledgement() {
                        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                    }
                    set acknowledgement(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get proof() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set proof(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryPacketAcknowledgementResponse({});
                        if (data.acknowledgement != null) {
                            message.acknowledgement = data.acknowledgement;
                        }
                        if (data.proof != null) {
                            message.proof = data.proof;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_1.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.acknowledgement != null) {
                            data.acknowledgement = this.acknowledgement;
                        }
                        if (this.proof != null) {
                            data.proof = this.proof;
                        }
                        if (this.proof_height != null) {
                            data.proof_height = this.proof_height.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.acknowledgement.length)
                            writer.writeBytes(1, this.acknowledgement);
                        if (this.proof.length)
                            writer.writeBytes(2, this.proof);
                        if (this.has_proof_height)
                            writer.writeMessage(3, this.proof_height, () => this.proof_height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPacketAcknowledgementResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.acknowledgement = reader.readBytes();
                                    break;
                                case 2:
                                    message.proof = reader.readBytes();
                                    break;
                                case 3:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_1.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryPacketAcknowledgementResponse.deserialize(bytes);
                    }
                }
                _QueryPacketAcknowledgementResponse_one_of_decls = new WeakMap();
                v1.QueryPacketAcknowledgementResponse = QueryPacketAcknowledgementResponse;
                class QueryPacketAcknowledgementsRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryPacketAcknowledgementsRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], __classPrivateFieldGet(this, _QueryPacketAcknowledgementsRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                            if ("pagination" in data && data.pagination != undefined) {
                                this.pagination = data.pagination;
                            }
                            if ("packet_commitment_sequences" in data && data.packet_commitment_sequences != undefined) {
                                this.packet_commitment_sequences = data.packet_commitment_sequences;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get pagination() {
                        return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageRequest, 3);
                    }
                    set pagination(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_pagination() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    get packet_commitment_sequences() {
                        return pb_1.Message.getFieldWithDefault(this, 4, []);
                    }
                    set packet_commitment_sequences(value) {
                        pb_1.Message.setField(this, 4, value);
                    }
                    static fromObject(data) {
                        const message = new QueryPacketAcknowledgementsRequest({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        if (data.pagination != null) {
                            message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                        }
                        if (data.packet_commitment_sequences != null) {
                            message.packet_commitment_sequences = data.packet_commitment_sequences;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        if (this.pagination != null) {
                            data.pagination = this.pagination.toObject();
                        }
                        if (this.packet_commitment_sequences != null) {
                            data.packet_commitment_sequences = this.packet_commitment_sequences;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.channel_id.length)
                            writer.writeString(2, this.channel_id);
                        if (this.has_pagination)
                            writer.writeMessage(3, this.pagination, () => this.pagination.serialize(writer));
                        if (this.packet_commitment_sequences.length)
                            writer.writePackedUint64(4, this.packet_commitment_sequences);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPacketAcknowledgementsRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.channel_id = reader.readString();
                                    break;
                                case 3:
                                    reader.readMessage(message.pagination, () => message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
                                    break;
                                case 4:
                                    message.packet_commitment_sequences = reader.readPackedUint64();
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
                        return QueryPacketAcknowledgementsRequest.deserialize(bytes);
                    }
                }
                _QueryPacketAcknowledgementsRequest_one_of_decls = new WeakMap();
                v1.QueryPacketAcknowledgementsRequest = QueryPacketAcknowledgementsRequest;
                class QueryPacketAcknowledgementsResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryPacketAcknowledgementsResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryPacketAcknowledgementsResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("acknowledgements" in data && data.acknowledgements != undefined) {
                                this.acknowledgements = data.acknowledgements;
                            }
                            if ("pagination" in data && data.pagination != undefined) {
                                this.pagination = data.pagination;
                            }
                            if ("height" in data && data.height != undefined) {
                                this.height = data.height;
                            }
                        }
                    }
                    get acknowledgements() {
                        return pb_1.Message.getRepeatedWrapperField(this, dependency_3.ibc.core.channel.v1.PacketState, 1);
                    }
                    set acknowledgements(value) {
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
                    get height() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
                    }
                    set height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryPacketAcknowledgementsResponse({});
                        if (data.acknowledgements != null) {
                            message.acknowledgements = data.acknowledgements.map(item => dependency_3.ibc.core.channel.v1.PacketState.fromObject(item));
                        }
                        if (data.pagination != null) {
                            message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                        }
                        if (data.height != null) {
                            message.height = dependency_1.ibc.core.client.v1.Height.fromObject(data.height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.acknowledgements != null) {
                            data.acknowledgements = this.acknowledgements.map((item) => item.toObject());
                        }
                        if (this.pagination != null) {
                            data.pagination = this.pagination.toObject();
                        }
                        if (this.height != null) {
                            data.height = this.height.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.acknowledgements.length)
                            writer.writeRepeatedMessage(1, this.acknowledgements, (item) => item.serialize(writer));
                        if (this.has_pagination)
                            writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                        if (this.has_height)
                            writer.writeMessage(3, this.height, () => this.height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPacketAcknowledgementsResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.acknowledgements, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.ibc.core.channel.v1.PacketState.deserialize(reader), dependency_3.ibc.core.channel.v1.PacketState));
                                    break;
                                case 2:
                                    reader.readMessage(message.pagination, () => message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
                                    break;
                                case 3:
                                    reader.readMessage(message.height, () => message.height = dependency_1.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryPacketAcknowledgementsResponse.deserialize(bytes);
                    }
                }
                _QueryPacketAcknowledgementsResponse_one_of_decls = new WeakMap();
                v1.QueryPacketAcknowledgementsResponse = QueryPacketAcknowledgementsResponse;
                class QueryUnreceivedPacketsRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryUnreceivedPacketsRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _QueryUnreceivedPacketsRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                            if ("packet_commitment_sequences" in data && data.packet_commitment_sequences != undefined) {
                                this.packet_commitment_sequences = data.packet_commitment_sequences;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get packet_commitment_sequences() {
                        return pb_1.Message.getFieldWithDefault(this, 3, []);
                    }
                    set packet_commitment_sequences(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    static fromObject(data) {
                        const message = new QueryUnreceivedPacketsRequest({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        if (data.packet_commitment_sequences != null) {
                            message.packet_commitment_sequences = data.packet_commitment_sequences;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        if (this.packet_commitment_sequences != null) {
                            data.packet_commitment_sequences = this.packet_commitment_sequences;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.channel_id.length)
                            writer.writeString(2, this.channel_id);
                        if (this.packet_commitment_sequences.length)
                            writer.writePackedUint64(3, this.packet_commitment_sequences);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryUnreceivedPacketsRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.channel_id = reader.readString();
                                    break;
                                case 3:
                                    message.packet_commitment_sequences = reader.readPackedUint64();
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
                        return QueryUnreceivedPacketsRequest.deserialize(bytes);
                    }
                }
                _QueryUnreceivedPacketsRequest_one_of_decls = new WeakMap();
                v1.QueryUnreceivedPacketsRequest = QueryUnreceivedPacketsRequest;
                class QueryUnreceivedPacketsResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryUnreceivedPacketsResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryUnreceivedPacketsResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("sequences" in data && data.sequences != undefined) {
                                this.sequences = data.sequences;
                            }
                            if ("height" in data && data.height != undefined) {
                                this.height = data.height;
                            }
                        }
                    }
                    get sequences() {
                        return pb_1.Message.getFieldWithDefault(this, 1, []);
                    }
                    set sequences(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get height() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 2);
                    }
                    set height(value) {
                        pb_1.Message.setWrapperField(this, 2, value);
                    }
                    get has_height() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryUnreceivedPacketsResponse({});
                        if (data.sequences != null) {
                            message.sequences = data.sequences;
                        }
                        if (data.height != null) {
                            message.height = dependency_1.ibc.core.client.v1.Height.fromObject(data.height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.sequences != null) {
                            data.sequences = this.sequences;
                        }
                        if (this.height != null) {
                            data.height = this.height.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.sequences.length)
                            writer.writePackedUint64(1, this.sequences);
                        if (this.has_height)
                            writer.writeMessage(2, this.height, () => this.height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryUnreceivedPacketsResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.sequences = reader.readPackedUint64();
                                    break;
                                case 2:
                                    reader.readMessage(message.height, () => message.height = dependency_1.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryUnreceivedPacketsResponse.deserialize(bytes);
                    }
                }
                _QueryUnreceivedPacketsResponse_one_of_decls = new WeakMap();
                v1.QueryUnreceivedPacketsResponse = QueryUnreceivedPacketsResponse;
                class QueryUnreceivedAcksRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryUnreceivedAcksRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _QueryUnreceivedAcksRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                            if ("packet_ack_sequences" in data && data.packet_ack_sequences != undefined) {
                                this.packet_ack_sequences = data.packet_ack_sequences;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get packet_ack_sequences() {
                        return pb_1.Message.getFieldWithDefault(this, 3, []);
                    }
                    set packet_ack_sequences(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    static fromObject(data) {
                        const message = new QueryUnreceivedAcksRequest({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        if (data.packet_ack_sequences != null) {
                            message.packet_ack_sequences = data.packet_ack_sequences;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        if (this.packet_ack_sequences != null) {
                            data.packet_ack_sequences = this.packet_ack_sequences;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.channel_id.length)
                            writer.writeString(2, this.channel_id);
                        if (this.packet_ack_sequences.length)
                            writer.writePackedUint64(3, this.packet_ack_sequences);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryUnreceivedAcksRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.channel_id = reader.readString();
                                    break;
                                case 3:
                                    message.packet_ack_sequences = reader.readPackedUint64();
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
                        return QueryUnreceivedAcksRequest.deserialize(bytes);
                    }
                }
                _QueryUnreceivedAcksRequest_one_of_decls = new WeakMap();
                v1.QueryUnreceivedAcksRequest = QueryUnreceivedAcksRequest;
                class QueryUnreceivedAcksResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryUnreceivedAcksResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryUnreceivedAcksResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("sequences" in data && data.sequences != undefined) {
                                this.sequences = data.sequences;
                            }
                            if ("height" in data && data.height != undefined) {
                                this.height = data.height;
                            }
                        }
                    }
                    get sequences() {
                        return pb_1.Message.getFieldWithDefault(this, 1, []);
                    }
                    set sequences(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get height() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 2);
                    }
                    set height(value) {
                        pb_1.Message.setWrapperField(this, 2, value);
                    }
                    get has_height() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryUnreceivedAcksResponse({});
                        if (data.sequences != null) {
                            message.sequences = data.sequences;
                        }
                        if (data.height != null) {
                            message.height = dependency_1.ibc.core.client.v1.Height.fromObject(data.height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.sequences != null) {
                            data.sequences = this.sequences;
                        }
                        if (this.height != null) {
                            data.height = this.height.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.sequences.length)
                            writer.writePackedUint64(1, this.sequences);
                        if (this.has_height)
                            writer.writeMessage(2, this.height, () => this.height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryUnreceivedAcksResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.sequences = reader.readPackedUint64();
                                    break;
                                case 2:
                                    reader.readMessage(message.height, () => message.height = dependency_1.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryUnreceivedAcksResponse.deserialize(bytes);
                    }
                }
                _QueryUnreceivedAcksResponse_one_of_decls = new WeakMap();
                v1.QueryUnreceivedAcksResponse = QueryUnreceivedAcksResponse;
                class QueryNextSequenceReceiveRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryNextSequenceReceiveRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryNextSequenceReceiveRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("channel_id" in data && data.channel_id != undefined) {
                                this.channel_id = data.channel_id;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get channel_id() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set channel_id(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    static fromObject(data) {
                        const message = new QueryNextSequenceReceiveRequest({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.channel_id != null) {
                            message.channel_id = data.channel_id;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.channel_id != null) {
                            data.channel_id = this.channel_id;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.channel_id.length)
                            writer.writeString(2, this.channel_id);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryNextSequenceReceiveRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    message.channel_id = reader.readString();
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
                        return QueryNextSequenceReceiveRequest.deserialize(bytes);
                    }
                }
                _QueryNextSequenceReceiveRequest_one_of_decls = new WeakMap();
                v1.QueryNextSequenceReceiveRequest = QueryNextSequenceReceiveRequest;
                class QueryNextSequenceReceiveResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryNextSequenceReceiveResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryNextSequenceReceiveResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("next_sequence_receive" in data && data.next_sequence_receive != undefined) {
                                this.next_sequence_receive = data.next_sequence_receive;
                            }
                            if ("proof" in data && data.proof != undefined) {
                                this.proof = data.proof;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                        }
                    }
                    get next_sequence_receive() {
                        return pb_1.Message.getFieldWithDefault(this, 1, 0);
                    }
                    set next_sequence_receive(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get proof() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set proof(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryNextSequenceReceiveResponse({});
                        if (data.next_sequence_receive != null) {
                            message.next_sequence_receive = data.next_sequence_receive;
                        }
                        if (data.proof != null) {
                            message.proof = data.proof;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_1.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.next_sequence_receive != null) {
                            data.next_sequence_receive = this.next_sequence_receive;
                        }
                        if (this.proof != null) {
                            data.proof = this.proof;
                        }
                        if (this.proof_height != null) {
                            data.proof_height = this.proof_height.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.next_sequence_receive != 0)
                            writer.writeUint64(1, this.next_sequence_receive);
                        if (this.proof.length)
                            writer.writeBytes(2, this.proof);
                        if (this.has_proof_height)
                            writer.writeMessage(3, this.proof_height, () => this.proof_height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryNextSequenceReceiveResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.next_sequence_receive = reader.readUint64();
                                    break;
                                case 2:
                                    message.proof = reader.readBytes();
                                    break;
                                case 3:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_1.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryNextSequenceReceiveResponse.deserialize(bytes);
                    }
                }
                _QueryNextSequenceReceiveResponse_one_of_decls = new WeakMap();
                v1.QueryNextSequenceReceiveResponse = QueryNextSequenceReceiveResponse;
                class UnimplementedQueryService {
                }
                UnimplementedQueryService.definition = {
                    Channel: {
                        path: "/ibc.core.channel.v1.Query/Channel",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryChannelRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryChannelResponse.deserialize(new Uint8Array(bytes))
                    },
                    Channels: {
                        path: "/ibc.core.channel.v1.Query/Channels",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryChannelsRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryChannelsResponse.deserialize(new Uint8Array(bytes))
                    },
                    ConnectionChannels: {
                        path: "/ibc.core.channel.v1.Query/ConnectionChannels",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryConnectionChannelsRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryConnectionChannelsResponse.deserialize(new Uint8Array(bytes))
                    },
                    ChannelClientState: {
                        path: "/ibc.core.channel.v1.Query/ChannelClientState",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryChannelClientStateRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryChannelClientStateResponse.deserialize(new Uint8Array(bytes))
                    },
                    ChannelConsensusState: {
                        path: "/ibc.core.channel.v1.Query/ChannelConsensusState",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryChannelConsensusStateRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryChannelConsensusStateResponse.deserialize(new Uint8Array(bytes))
                    },
                    PacketCommitment: {
                        path: "/ibc.core.channel.v1.Query/PacketCommitment",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryPacketCommitmentRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryPacketCommitmentResponse.deserialize(new Uint8Array(bytes))
                    },
                    PacketCommitments: {
                        path: "/ibc.core.channel.v1.Query/PacketCommitments",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryPacketCommitmentsRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryPacketCommitmentsResponse.deserialize(new Uint8Array(bytes))
                    },
                    PacketReceipt: {
                        path: "/ibc.core.channel.v1.Query/PacketReceipt",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryPacketReceiptRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryPacketReceiptResponse.deserialize(new Uint8Array(bytes))
                    },
                    PacketAcknowledgement: {
                        path: "/ibc.core.channel.v1.Query/PacketAcknowledgement",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryPacketAcknowledgementRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryPacketAcknowledgementResponse.deserialize(new Uint8Array(bytes))
                    },
                    PacketAcknowledgements: {
                        path: "/ibc.core.channel.v1.Query/PacketAcknowledgements",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryPacketAcknowledgementsRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryPacketAcknowledgementsResponse.deserialize(new Uint8Array(bytes))
                    },
                    UnreceivedPackets: {
                        path: "/ibc.core.channel.v1.Query/UnreceivedPackets",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryUnreceivedPacketsRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryUnreceivedPacketsResponse.deserialize(new Uint8Array(bytes))
                    },
                    UnreceivedAcks: {
                        path: "/ibc.core.channel.v1.Query/UnreceivedAcks",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryUnreceivedAcksRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryUnreceivedAcksResponse.deserialize(new Uint8Array(bytes))
                    },
                    NextSequenceReceive: {
                        path: "/ibc.core.channel.v1.Query/NextSequenceReceive",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryNextSequenceReceiveRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryNextSequenceReceiveResponse.deserialize(new Uint8Array(bytes))
                    }
                };
                v1.UnimplementedQueryService = UnimplementedQueryService;
                class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                    constructor(address, credentials, options) {
                        super(address, credentials, options);
                        this.Channel = (message, metadata, options, callback) => {
                            return super.Channel(message, metadata, options, callback);
                        };
                        this.Channels = (message, metadata, options, callback) => {
                            return super.Channels(message, metadata, options, callback);
                        };
                        this.ConnectionChannels = (message, metadata, options, callback) => {
                            return super.ConnectionChannels(message, metadata, options, callback);
                        };
                        this.ChannelClientState = (message, metadata, options, callback) => {
                            return super.ChannelClientState(message, metadata, options, callback);
                        };
                        this.ChannelConsensusState = (message, metadata, options, callback) => {
                            return super.ChannelConsensusState(message, metadata, options, callback);
                        };
                        this.PacketCommitment = (message, metadata, options, callback) => {
                            return super.PacketCommitment(message, metadata, options, callback);
                        };
                        this.PacketCommitments = (message, metadata, options, callback) => {
                            return super.PacketCommitments(message, metadata, options, callback);
                        };
                        this.PacketReceipt = (message, metadata, options, callback) => {
                            return super.PacketReceipt(message, metadata, options, callback);
                        };
                        this.PacketAcknowledgement = (message, metadata, options, callback) => {
                            return super.PacketAcknowledgement(message, metadata, options, callback);
                        };
                        this.PacketAcknowledgements = (message, metadata, options, callback) => {
                            return super.PacketAcknowledgements(message, metadata, options, callback);
                        };
                        this.UnreceivedPackets = (message, metadata, options, callback) => {
                            return super.UnreceivedPackets(message, metadata, options, callback);
                        };
                        this.UnreceivedAcks = (message, metadata, options, callback) => {
                            return super.UnreceivedAcks(message, metadata, options, callback);
                        };
                        this.NextSequenceReceive = (message, metadata, options, callback) => {
                            return super.NextSequenceReceive(message, metadata, options, callback);
                        };
                    }
                }
                v1.QueryClient = QueryClient;
            })(v1 = channel.v1 || (channel.v1 = {}));
        })(channel = core.channel || (core.channel = {}));
    })(core = ibc.core || (ibc.core = {}));
})(ibc = exports.ibc || (exports.ibc = {}));
//# sourceMappingURL=query.js.map