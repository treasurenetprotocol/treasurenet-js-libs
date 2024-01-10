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
const dependency_1 = __importStar(require("./../../../../cosmos/base/query/v1beta1/pagination"));
const dependency_2 = __importStar(require("./client"));
const dependency_3 = __importStar(require("./../../../../google/protobuf/any"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var ibc;
(function (ibc) {
    var core;
    (function (core) {
        var client;
        (function (client) {
            var v1;
            (function (v1) {
                var _QueryClientStateRequest_one_of_decls, _QueryClientStateResponse_one_of_decls, _QueryClientStatesRequest_one_of_decls, _QueryClientStatesResponse_one_of_decls, _QueryConsensusStateRequest_one_of_decls, _QueryConsensusStateResponse_one_of_decls, _QueryConsensusStatesRequest_one_of_decls, _QueryConsensusStatesResponse_one_of_decls, _QueryClientStatusRequest_one_of_decls, _QueryClientStatusResponse_one_of_decls, _QueryClientParamsRequest_one_of_decls, _QueryClientParamsResponse_one_of_decls, _QueryUpgradedClientStateRequest_one_of_decls, _QueryUpgradedClientStateResponse_one_of_decls, _QueryUpgradedConsensusStateRequest_one_of_decls, _QueryUpgradedConsensusStateResponse_one_of_decls;
                class QueryClientStateRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryClientStateRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryClientStateRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("client_id" in data && data.client_id != undefined) {
                                this.client_id = data.client_id;
                            }
                        }
                    }
                    get client_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set client_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new QueryClientStateRequest({});
                        if (data.client_id != null) {
                            message.client_id = data.client_id;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.client_id != null) {
                            data.client_id = this.client_id;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.client_id.length)
                            writer.writeString(1, this.client_id);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClientStateRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.client_id = reader.readString();
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
                        return QueryClientStateRequest.deserialize(bytes);
                    }
                }
                _QueryClientStateRequest_one_of_decls = new WeakMap();
                v1.QueryClientStateRequest = QueryClientStateRequest;
                class QueryClientStateResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryClientStateResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryClientStateResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("client_state" in data && data.client_state != undefined) {
                                this.client_state = data.client_state;
                            }
                            if ("proof" in data && data.proof != undefined) {
                                this.proof = data.proof;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                        }
                    }
                    get client_state() {
                        return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Any, 1);
                    }
                    set client_state(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_client_state() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    get proof() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set proof(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 3);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryClientStateResponse({});
                        if (data.client_state != null) {
                            message.client_state = dependency_3.google.protobuf.Any.fromObject(data.client_state);
                        }
                        if (data.proof != null) {
                            message.proof = data.proof;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.client_state != null) {
                            data.client_state = this.client_state.toObject();
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
                        if (this.has_client_state)
                            writer.writeMessage(1, this.client_state, () => this.client_state.serialize(writer));
                        if (this.proof.length)
                            writer.writeBytes(2, this.proof);
                        if (this.has_proof_height)
                            writer.writeMessage(3, this.proof_height, () => this.proof_height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClientStateResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.client_state, () => message.client_state = dependency_3.google.protobuf.Any.deserialize(reader));
                                    break;
                                case 2:
                                    message.proof = reader.readBytes();
                                    break;
                                case 3:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryClientStateResponse.deserialize(bytes);
                    }
                }
                _QueryClientStateResponse_one_of_decls = new WeakMap();
                v1.QueryClientStateResponse = QueryClientStateResponse;
                class QueryClientStatesRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryClientStatesRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryClientStatesRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("pagination" in data && data.pagination != undefined) {
                                this.pagination = data.pagination;
                            }
                        }
                    }
                    get pagination() {
                        return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 1);
                    }
                    set pagination(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_pagination() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryClientStatesRequest({});
                        if (data.pagination != null) {
                            message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClientStatesRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
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
                        return QueryClientStatesRequest.deserialize(bytes);
                    }
                }
                _QueryClientStatesRequest_one_of_decls = new WeakMap();
                v1.QueryClientStatesRequest = QueryClientStatesRequest;
                class QueryClientStatesResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryClientStatesResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryClientStatesResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("client_states" in data && data.client_states != undefined) {
                                this.client_states = data.client_states;
                            }
                            if ("pagination" in data && data.pagination != undefined) {
                                this.pagination = data.pagination;
                            }
                        }
                    }
                    get client_states() {
                        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ibc.core.client.v1.IdentifiedClientState, 1);
                    }
                    set client_states(value) {
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
                        const message = new QueryClientStatesResponse({});
                        if (data.client_states != null) {
                            message.client_states = data.client_states.map(item => dependency_2.ibc.core.client.v1.IdentifiedClientState.fromObject(item));
                        }
                        if (data.pagination != null) {
                            message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.client_states != null) {
                            data.client_states = this.client_states.map((item) => item.toObject());
                        }
                        if (this.pagination != null) {
                            data.pagination = this.pagination.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.client_states.length)
                            writer.writeRepeatedMessage(1, this.client_states, (item) => item.serialize(writer));
                        if (this.has_pagination)
                            writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClientStatesResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.client_states, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.ibc.core.client.v1.IdentifiedClientState.deserialize(reader), dependency_2.ibc.core.client.v1.IdentifiedClientState));
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
                        return QueryClientStatesResponse.deserialize(bytes);
                    }
                }
                _QueryClientStatesResponse_one_of_decls = new WeakMap();
                v1.QueryClientStatesResponse = QueryClientStatesResponse;
                class QueryConsensusStateRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryConsensusStateRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryConsensusStateRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("client_id" in data && data.client_id != undefined) {
                                this.client_id = data.client_id;
                            }
                            if ("revision_number" in data && data.revision_number != undefined) {
                                this.revision_number = data.revision_number;
                            }
                            if ("revision_height" in data && data.revision_height != undefined) {
                                this.revision_height = data.revision_height;
                            }
                            if ("latest_height" in data && data.latest_height != undefined) {
                                this.latest_height = data.latest_height;
                            }
                        }
                    }
                    get client_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set client_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get revision_number() {
                        return pb_1.Message.getFieldWithDefault(this, 2, 0);
                    }
                    set revision_number(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get revision_height() {
                        return pb_1.Message.getFieldWithDefault(this, 3, 0);
                    }
                    set revision_height(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    get latest_height() {
                        return pb_1.Message.getFieldWithDefault(this, 4, false);
                    }
                    set latest_height(value) {
                        pb_1.Message.setField(this, 4, value);
                    }
                    static fromObject(data) {
                        const message = new QueryConsensusStateRequest({});
                        if (data.client_id != null) {
                            message.client_id = data.client_id;
                        }
                        if (data.revision_number != null) {
                            message.revision_number = data.revision_number;
                        }
                        if (data.revision_height != null) {
                            message.revision_height = data.revision_height;
                        }
                        if (data.latest_height != null) {
                            message.latest_height = data.latest_height;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.client_id != null) {
                            data.client_id = this.client_id;
                        }
                        if (this.revision_number != null) {
                            data.revision_number = this.revision_number;
                        }
                        if (this.revision_height != null) {
                            data.revision_height = this.revision_height;
                        }
                        if (this.latest_height != null) {
                            data.latest_height = this.latest_height;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.client_id.length)
                            writer.writeString(1, this.client_id);
                        if (this.revision_number != 0)
                            writer.writeUint64(2, this.revision_number);
                        if (this.revision_height != 0)
                            writer.writeUint64(3, this.revision_height);
                        if (this.latest_height != false)
                            writer.writeBool(4, this.latest_height);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryConsensusStateRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.client_id = reader.readString();
                                    break;
                                case 2:
                                    message.revision_number = reader.readUint64();
                                    break;
                                case 3:
                                    message.revision_height = reader.readUint64();
                                    break;
                                case 4:
                                    message.latest_height = reader.readBool();
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
                        return QueryConsensusStateRequest.deserialize(bytes);
                    }
                }
                _QueryConsensusStateRequest_one_of_decls = new WeakMap();
                v1.QueryConsensusStateRequest = QueryConsensusStateRequest;
                class QueryConsensusStateResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryConsensusStateResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryConsensusStateResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("consensus_state" in data && data.consensus_state != undefined) {
                                this.consensus_state = data.consensus_state;
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
                        return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Any, 1);
                    }
                    set consensus_state(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_consensus_state() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    get proof() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set proof(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 3);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryConsensusStateResponse({});
                        if (data.consensus_state != null) {
                            message.consensus_state = dependency_3.google.protobuf.Any.fromObject(data.consensus_state);
                        }
                        if (data.proof != null) {
                            message.proof = data.proof;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.consensus_state != null) {
                            data.consensus_state = this.consensus_state.toObject();
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
                        if (this.proof.length)
                            writer.writeBytes(2, this.proof);
                        if (this.has_proof_height)
                            writer.writeMessage(3, this.proof_height, () => this.proof_height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryConsensusStateResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.consensus_state, () => message.consensus_state = dependency_3.google.protobuf.Any.deserialize(reader));
                                    break;
                                case 2:
                                    message.proof = reader.readBytes();
                                    break;
                                case 3:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryConsensusStateResponse.deserialize(bytes);
                    }
                }
                _QueryConsensusStateResponse_one_of_decls = new WeakMap();
                v1.QueryConsensusStateResponse = QueryConsensusStateResponse;
                class QueryConsensusStatesRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryConsensusStatesRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryConsensusStatesRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("client_id" in data && data.client_id != undefined) {
                                this.client_id = data.client_id;
                            }
                            if ("pagination" in data && data.pagination != undefined) {
                                this.pagination = data.pagination;
                            }
                        }
                    }
                    get client_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set client_id(value) {
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
                        const message = new QueryConsensusStatesRequest({});
                        if (data.client_id != null) {
                            message.client_id = data.client_id;
                        }
                        if (data.pagination != null) {
                            message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.client_id != null) {
                            data.client_id = this.client_id;
                        }
                        if (this.pagination != null) {
                            data.pagination = this.pagination.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.client_id.length)
                            writer.writeString(1, this.client_id);
                        if (this.has_pagination)
                            writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryConsensusStatesRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.client_id = reader.readString();
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
                        return QueryConsensusStatesRequest.deserialize(bytes);
                    }
                }
                _QueryConsensusStatesRequest_one_of_decls = new WeakMap();
                v1.QueryConsensusStatesRequest = QueryConsensusStatesRequest;
                class QueryConsensusStatesResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryConsensusStatesResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryConsensusStatesResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("consensus_states" in data && data.consensus_states != undefined) {
                                this.consensus_states = data.consensus_states;
                            }
                            if ("pagination" in data && data.pagination != undefined) {
                                this.pagination = data.pagination;
                            }
                        }
                    }
                    get consensus_states() {
                        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ibc.core.client.v1.ConsensusStateWithHeight, 1);
                    }
                    set consensus_states(value) {
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
                        const message = new QueryConsensusStatesResponse({});
                        if (data.consensus_states != null) {
                            message.consensus_states = data.consensus_states.map(item => dependency_2.ibc.core.client.v1.ConsensusStateWithHeight.fromObject(item));
                        }
                        if (data.pagination != null) {
                            message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.consensus_states != null) {
                            data.consensus_states = this.consensus_states.map((item) => item.toObject());
                        }
                        if (this.pagination != null) {
                            data.pagination = this.pagination.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.consensus_states.length)
                            writer.writeRepeatedMessage(1, this.consensus_states, (item) => item.serialize(writer));
                        if (this.has_pagination)
                            writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryConsensusStatesResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.consensus_states, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.ibc.core.client.v1.ConsensusStateWithHeight.deserialize(reader), dependency_2.ibc.core.client.v1.ConsensusStateWithHeight));
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
                        return QueryConsensusStatesResponse.deserialize(bytes);
                    }
                }
                _QueryConsensusStatesResponse_one_of_decls = new WeakMap();
                v1.QueryConsensusStatesResponse = QueryConsensusStatesResponse;
                class QueryClientStatusRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryClientStatusRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryClientStatusRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("client_id" in data && data.client_id != undefined) {
                                this.client_id = data.client_id;
                            }
                        }
                    }
                    get client_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set client_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new QueryClientStatusRequest({});
                        if (data.client_id != null) {
                            message.client_id = data.client_id;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.client_id != null) {
                            data.client_id = this.client_id;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.client_id.length)
                            writer.writeString(1, this.client_id);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClientStatusRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.client_id = reader.readString();
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
                        return QueryClientStatusRequest.deserialize(bytes);
                    }
                }
                _QueryClientStatusRequest_one_of_decls = new WeakMap();
                v1.QueryClientStatusRequest = QueryClientStatusRequest;
                class QueryClientStatusResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryClientStatusResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryClientStatusResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("status" in data && data.status != undefined) {
                                this.status = data.status;
                            }
                        }
                    }
                    get status() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set status(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new QueryClientStatusResponse({});
                        if (data.status != null) {
                            message.status = data.status;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.status != null) {
                            data.status = this.status;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.status.length)
                            writer.writeString(1, this.status);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClientStatusResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.status = reader.readString();
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
                        return QueryClientStatusResponse.deserialize(bytes);
                    }
                }
                _QueryClientStatusResponse_one_of_decls = new WeakMap();
                v1.QueryClientStatusResponse = QueryClientStatusResponse;
                class QueryClientParamsRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryClientParamsRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryClientParamsRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new QueryClientParamsRequest({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClientParamsRequest();
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
                        return QueryClientParamsRequest.deserialize(bytes);
                    }
                }
                _QueryClientParamsRequest_one_of_decls = new WeakMap();
                v1.QueryClientParamsRequest = QueryClientParamsRequest;
                class QueryClientParamsResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryClientParamsResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryClientParamsResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("params" in data && data.params != undefined) {
                                this.params = data.params;
                            }
                        }
                    }
                    get params() {
                        return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Params, 1);
                    }
                    set params(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_params() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryClientParamsResponse({});
                        if (data.params != null) {
                            message.params = dependency_2.ibc.core.client.v1.Params.fromObject(data.params);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.params != null) {
                            data.params = this.params.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_params)
                            writer.writeMessage(1, this.params, () => this.params.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClientParamsResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.params, () => message.params = dependency_2.ibc.core.client.v1.Params.deserialize(reader));
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
                        return QueryClientParamsResponse.deserialize(bytes);
                    }
                }
                _QueryClientParamsResponse_one_of_decls = new WeakMap();
                v1.QueryClientParamsResponse = QueryClientParamsResponse;
                class QueryUpgradedClientStateRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryUpgradedClientStateRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryUpgradedClientStateRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new QueryUpgradedClientStateRequest({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryUpgradedClientStateRequest();
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
                        return QueryUpgradedClientStateRequest.deserialize(bytes);
                    }
                }
                _QueryUpgradedClientStateRequest_one_of_decls = new WeakMap();
                v1.QueryUpgradedClientStateRequest = QueryUpgradedClientStateRequest;
                class QueryUpgradedClientStateResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryUpgradedClientStateResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryUpgradedClientStateResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("upgraded_client_state" in data && data.upgraded_client_state != undefined) {
                                this.upgraded_client_state = data.upgraded_client_state;
                            }
                        }
                    }
                    get upgraded_client_state() {
                        return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Any, 1);
                    }
                    set upgraded_client_state(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_upgraded_client_state() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryUpgradedClientStateResponse({});
                        if (data.upgraded_client_state != null) {
                            message.upgraded_client_state = dependency_3.google.protobuf.Any.fromObject(data.upgraded_client_state);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.upgraded_client_state != null) {
                            data.upgraded_client_state = this.upgraded_client_state.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_upgraded_client_state)
                            writer.writeMessage(1, this.upgraded_client_state, () => this.upgraded_client_state.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryUpgradedClientStateResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.upgraded_client_state, () => message.upgraded_client_state = dependency_3.google.protobuf.Any.deserialize(reader));
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
                        return QueryUpgradedClientStateResponse.deserialize(bytes);
                    }
                }
                _QueryUpgradedClientStateResponse_one_of_decls = new WeakMap();
                v1.QueryUpgradedClientStateResponse = QueryUpgradedClientStateResponse;
                class QueryUpgradedConsensusStateRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryUpgradedConsensusStateRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryUpgradedConsensusStateRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new QueryUpgradedConsensusStateRequest({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryUpgradedConsensusStateRequest();
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
                        return QueryUpgradedConsensusStateRequest.deserialize(bytes);
                    }
                }
                _QueryUpgradedConsensusStateRequest_one_of_decls = new WeakMap();
                v1.QueryUpgradedConsensusStateRequest = QueryUpgradedConsensusStateRequest;
                class QueryUpgradedConsensusStateResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryUpgradedConsensusStateResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryUpgradedConsensusStateResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("upgraded_consensus_state" in data && data.upgraded_consensus_state != undefined) {
                                this.upgraded_consensus_state = data.upgraded_consensus_state;
                            }
                        }
                    }
                    get upgraded_consensus_state() {
                        return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Any, 1);
                    }
                    set upgraded_consensus_state(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_upgraded_consensus_state() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryUpgradedConsensusStateResponse({});
                        if (data.upgraded_consensus_state != null) {
                            message.upgraded_consensus_state = dependency_3.google.protobuf.Any.fromObject(data.upgraded_consensus_state);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.upgraded_consensus_state != null) {
                            data.upgraded_consensus_state = this.upgraded_consensus_state.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_upgraded_consensus_state)
                            writer.writeMessage(1, this.upgraded_consensus_state, () => this.upgraded_consensus_state.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryUpgradedConsensusStateResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.upgraded_consensus_state, () => message.upgraded_consensus_state = dependency_3.google.protobuf.Any.deserialize(reader));
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
                        return QueryUpgradedConsensusStateResponse.deserialize(bytes);
                    }
                }
                _QueryUpgradedConsensusStateResponse_one_of_decls = new WeakMap();
                v1.QueryUpgradedConsensusStateResponse = QueryUpgradedConsensusStateResponse;
                class UnimplementedQueryService {
                }
                UnimplementedQueryService.definition = {
                    ClientState: {
                        path: "/ibc.core.client.v1.Query/ClientState",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryClientStateRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryClientStateResponse.deserialize(new Uint8Array(bytes))
                    },
                    ClientStates: {
                        path: "/ibc.core.client.v1.Query/ClientStates",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryClientStatesRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryClientStatesResponse.deserialize(new Uint8Array(bytes))
                    },
                    ConsensusState: {
                        path: "/ibc.core.client.v1.Query/ConsensusState",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryConsensusStateRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryConsensusStateResponse.deserialize(new Uint8Array(bytes))
                    },
                    ConsensusStates: {
                        path: "/ibc.core.client.v1.Query/ConsensusStates",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryConsensusStatesRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryConsensusStatesResponse.deserialize(new Uint8Array(bytes))
                    },
                    ClientStatus: {
                        path: "/ibc.core.client.v1.Query/ClientStatus",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryClientStatusRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryClientStatusResponse.deserialize(new Uint8Array(bytes))
                    },
                    ClientParams: {
                        path: "/ibc.core.client.v1.Query/ClientParams",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryClientParamsRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryClientParamsResponse.deserialize(new Uint8Array(bytes))
                    },
                    UpgradedClientState: {
                        path: "/ibc.core.client.v1.Query/UpgradedClientState",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryUpgradedClientStateRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryUpgradedClientStateResponse.deserialize(new Uint8Array(bytes))
                    },
                    UpgradedConsensusState: {
                        path: "/ibc.core.client.v1.Query/UpgradedConsensusState",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryUpgradedConsensusStateRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryUpgradedConsensusStateResponse.deserialize(new Uint8Array(bytes))
                    }
                };
                v1.UnimplementedQueryService = UnimplementedQueryService;
                class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                    constructor(address, credentials, options) {
                        super(address, credentials, options);
                        this.ClientState = (message, metadata, options, callback) => {
                            return super.ClientState(message, metadata, options, callback);
                        };
                        this.ClientStates = (message, metadata, options, callback) => {
                            return super.ClientStates(message, metadata, options, callback);
                        };
                        this.ConsensusState = (message, metadata, options, callback) => {
                            return super.ConsensusState(message, metadata, options, callback);
                        };
                        this.ConsensusStates = (message, metadata, options, callback) => {
                            return super.ConsensusStates(message, metadata, options, callback);
                        };
                        this.ClientStatus = (message, metadata, options, callback) => {
                            return super.ClientStatus(message, metadata, options, callback);
                        };
                        this.ClientParams = (message, metadata, options, callback) => {
                            return super.ClientParams(message, metadata, options, callback);
                        };
                        this.UpgradedClientState = (message, metadata, options, callback) => {
                            return super.UpgradedClientState(message, metadata, options, callback);
                        };
                        this.UpgradedConsensusState = (message, metadata, options, callback) => {
                            return super.UpgradedConsensusState(message, metadata, options, callback);
                        };
                    }
                }
                v1.QueryClient = QueryClient;
            })(v1 = client.v1 || (client.v1 = {}));
        })(client = core.client || (core.client = {}));
    })(core = ibc.core || (ibc.core = {}));
})(ibc = exports.ibc || (exports.ibc = {}));
//# sourceMappingURL=query.js.map