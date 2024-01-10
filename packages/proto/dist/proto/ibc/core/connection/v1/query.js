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
const dependency_2 = __importStar(require("./../../../../cosmos/base/query/v1beta1/pagination"));
const dependency_3 = __importStar(require("./../../client/v1/client"));
const dependency_4 = __importStar(require("./connection"));
const dependency_6 = __importStar(require("./../../../../google/protobuf/any"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var ibc;
(function (ibc) {
    var core;
    (function (core) {
        var connection;
        (function (connection) {
            var v1;
            (function (v1) {
                var _QueryConnectionRequest_one_of_decls, _QueryConnectionResponse_one_of_decls, _QueryConnectionsRequest_one_of_decls, _QueryConnectionsResponse_one_of_decls, _QueryClientConnectionsRequest_one_of_decls, _QueryClientConnectionsResponse_one_of_decls, _QueryConnectionClientStateRequest_one_of_decls, _QueryConnectionClientStateResponse_one_of_decls, _QueryConnectionConsensusStateRequest_one_of_decls, _QueryConnectionConsensusStateResponse_one_of_decls;
                class QueryConnectionRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryConnectionRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryConnectionRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("connection_id" in data && data.connection_id != undefined) {
                                this.connection_id = data.connection_id;
                            }
                        }
                    }
                    get connection_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set connection_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new QueryConnectionRequest({});
                        if (data.connection_id != null) {
                            message.connection_id = data.connection_id;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.connection_id != null) {
                            data.connection_id = this.connection_id;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.connection_id.length)
                            writer.writeString(1, this.connection_id);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryConnectionRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.connection_id = reader.readString();
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
                        return QueryConnectionRequest.deserialize(bytes);
                    }
                }
                _QueryConnectionRequest_one_of_decls = new WeakMap();
                v1.QueryConnectionRequest = QueryConnectionRequest;
                class QueryConnectionResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryConnectionResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryConnectionResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("connection" in data && data.connection != undefined) {
                                this.connection = data.connection;
                            }
                            if ("proof" in data && data.proof != undefined) {
                                this.proof = data.proof;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                        }
                    }
                    get connection() {
                        return pb_1.Message.getWrapperField(this, dependency_4.ibc.core.connection.v1.ConnectionEnd, 1);
                    }
                    set connection(value) {
                        pb_1.Message.setWrapperField(this, 1, value);
                    }
                    get has_connection() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    get proof() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set proof(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 3);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryConnectionResponse({});
                        if (data.connection != null) {
                            message.connection = dependency_4.ibc.core.connection.v1.ConnectionEnd.fromObject(data.connection);
                        }
                        if (data.proof != null) {
                            message.proof = data.proof;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.connection != null) {
                            data.connection = this.connection.toObject();
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
                        if (this.has_connection)
                            writer.writeMessage(1, this.connection, () => this.connection.serialize(writer));
                        if (this.proof.length)
                            writer.writeBytes(2, this.proof);
                        if (this.has_proof_height)
                            writer.writeMessage(3, this.proof_height, () => this.proof_height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryConnectionResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.connection, () => message.connection = dependency_4.ibc.core.connection.v1.ConnectionEnd.deserialize(reader));
                                    break;
                                case 2:
                                    message.proof = reader.readBytes();
                                    break;
                                case 3:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryConnectionResponse.deserialize(bytes);
                    }
                }
                _QueryConnectionResponse_one_of_decls = new WeakMap();
                v1.QueryConnectionResponse = QueryConnectionResponse;
                class QueryConnectionsRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryConnectionsRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryConnectionsRequest_one_of_decls, "f"));
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
                        const message = new QueryConnectionsRequest({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryConnectionsRequest();
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
                        return QueryConnectionsRequest.deserialize(bytes);
                    }
                }
                _QueryConnectionsRequest_one_of_decls = new WeakMap();
                v1.QueryConnectionsRequest = QueryConnectionsRequest;
                class QueryConnectionsResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryConnectionsResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryConnectionsResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("connections" in data && data.connections != undefined) {
                                this.connections = data.connections;
                            }
                            if ("pagination" in data && data.pagination != undefined) {
                                this.pagination = data.pagination;
                            }
                            if ("height" in data && data.height != undefined) {
                                this.height = data.height;
                            }
                        }
                    }
                    get connections() {
                        return pb_1.Message.getRepeatedWrapperField(this, dependency_4.ibc.core.connection.v1.IdentifiedConnection, 1);
                    }
                    set connections(value) {
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
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 3);
                    }
                    set height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryConnectionsResponse({});
                        if (data.connections != null) {
                            message.connections = data.connections.map(item => dependency_4.ibc.core.connection.v1.IdentifiedConnection.fromObject(item));
                        }
                        if (data.pagination != null) {
                            message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                        }
                        if (data.height != null) {
                            message.height = dependency_3.ibc.core.client.v1.Height.fromObject(data.height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.connections != null) {
                            data.connections = this.connections.map((item) => item.toObject());
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
                        if (this.connections.length)
                            writer.writeRepeatedMessage(1, this.connections, (item) => item.serialize(writer));
                        if (this.has_pagination)
                            writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                        if (this.has_height)
                            writer.writeMessage(3, this.height, () => this.height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryConnectionsResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.connections, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.ibc.core.connection.v1.IdentifiedConnection.deserialize(reader), dependency_4.ibc.core.connection.v1.IdentifiedConnection));
                                    break;
                                case 2:
                                    reader.readMessage(message.pagination, () => message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
                                    break;
                                case 3:
                                    reader.readMessage(message.height, () => message.height = dependency_3.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryConnectionsResponse.deserialize(bytes);
                    }
                }
                _QueryConnectionsResponse_one_of_decls = new WeakMap();
                v1.QueryConnectionsResponse = QueryConnectionsResponse;
                class QueryClientConnectionsRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryClientConnectionsRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryClientConnectionsRequest_one_of_decls, "f"));
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
                        const message = new QueryClientConnectionsRequest({});
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClientConnectionsRequest();
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
                        return QueryClientConnectionsRequest.deserialize(bytes);
                    }
                }
                _QueryClientConnectionsRequest_one_of_decls = new WeakMap();
                v1.QueryClientConnectionsRequest = QueryClientConnectionsRequest;
                class QueryClientConnectionsResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryClientConnectionsResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryClientConnectionsResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("connection_paths" in data && data.connection_paths != undefined) {
                                this.connection_paths = data.connection_paths;
                            }
                            if ("proof" in data && data.proof != undefined) {
                                this.proof = data.proof;
                            }
                            if ("proof_height" in data && data.proof_height != undefined) {
                                this.proof_height = data.proof_height;
                            }
                        }
                    }
                    get connection_paths() {
                        return pb_1.Message.getFieldWithDefault(this, 1, []);
                    }
                    set connection_paths(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get proof() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set proof(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get proof_height() {
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 3);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryClientConnectionsResponse({});
                        if (data.connection_paths != null) {
                            message.connection_paths = data.connection_paths;
                        }
                        if (data.proof != null) {
                            message.proof = data.proof;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.proof_height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.connection_paths != null) {
                            data.connection_paths = this.connection_paths;
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
                        if (this.connection_paths.length)
                            writer.writeRepeatedString(1, this.connection_paths);
                        if (this.proof.length)
                            writer.writeBytes(2, this.proof);
                        if (this.has_proof_height)
                            writer.writeMessage(3, this.proof_height, () => this.proof_height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClientConnectionsResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                                    break;
                                case 2:
                                    message.proof = reader.readBytes();
                                    break;
                                case 3:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryClientConnectionsResponse.deserialize(bytes);
                    }
                }
                _QueryClientConnectionsResponse_one_of_decls = new WeakMap();
                v1.QueryClientConnectionsResponse = QueryClientConnectionsResponse;
                class QueryConnectionClientStateRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryConnectionClientStateRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryConnectionClientStateRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("connection_id" in data && data.connection_id != undefined) {
                                this.connection_id = data.connection_id;
                            }
                        }
                    }
                    get connection_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set connection_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new QueryConnectionClientStateRequest({});
                        if (data.connection_id != null) {
                            message.connection_id = data.connection_id;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.connection_id != null) {
                            data.connection_id = this.connection_id;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.connection_id.length)
                            writer.writeString(1, this.connection_id);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryConnectionClientStateRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.connection_id = reader.readString();
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
                        return QueryConnectionClientStateRequest.deserialize(bytes);
                    }
                }
                _QueryConnectionClientStateRequest_one_of_decls = new WeakMap();
                v1.QueryConnectionClientStateRequest = QueryConnectionClientStateRequest;
                class QueryConnectionClientStateResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryConnectionClientStateResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryConnectionClientStateResponse_one_of_decls, "f"));
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
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.IdentifiedClientState, 1);
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
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 3);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryConnectionClientStateResponse({});
                        if (data.identified_client_state != null) {
                            message.identified_client_state = dependency_3.ibc.core.client.v1.IdentifiedClientState.fromObject(data.identified_client_state);
                        }
                        if (data.proof != null) {
                            message.proof = data.proof;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.proof_height);
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryConnectionClientStateResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.identified_client_state, () => message.identified_client_state = dependency_3.ibc.core.client.v1.IdentifiedClientState.deserialize(reader));
                                    break;
                                case 2:
                                    message.proof = reader.readBytes();
                                    break;
                                case 3:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryConnectionClientStateResponse.deserialize(bytes);
                    }
                }
                _QueryConnectionClientStateResponse_one_of_decls = new WeakMap();
                v1.QueryConnectionClientStateResponse = QueryConnectionClientStateResponse;
                class QueryConnectionConsensusStateRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryConnectionConsensusStateRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryConnectionConsensusStateRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("connection_id" in data && data.connection_id != undefined) {
                                this.connection_id = data.connection_id;
                            }
                            if ("revision_number" in data && data.revision_number != undefined) {
                                this.revision_number = data.revision_number;
                            }
                            if ("revision_height" in data && data.revision_height != undefined) {
                                this.revision_height = data.revision_height;
                            }
                        }
                    }
                    get connection_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set connection_id(value) {
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
                    static fromObject(data) {
                        const message = new QueryConnectionConsensusStateRequest({});
                        if (data.connection_id != null) {
                            message.connection_id = data.connection_id;
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
                        if (this.connection_id != null) {
                            data.connection_id = this.connection_id;
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
                        if (this.connection_id.length)
                            writer.writeString(1, this.connection_id);
                        if (this.revision_number != 0)
                            writer.writeUint64(2, this.revision_number);
                        if (this.revision_height != 0)
                            writer.writeUint64(3, this.revision_height);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryConnectionConsensusStateRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.connection_id = reader.readString();
                                    break;
                                case 2:
                                    message.revision_number = reader.readUint64();
                                    break;
                                case 3:
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
                        return QueryConnectionConsensusStateRequest.deserialize(bytes);
                    }
                }
                _QueryConnectionConsensusStateRequest_one_of_decls = new WeakMap();
                v1.QueryConnectionConsensusStateRequest = QueryConnectionConsensusStateRequest;
                class QueryConnectionConsensusStateResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _QueryConnectionConsensusStateResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryConnectionConsensusStateResponse_one_of_decls, "f"));
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
                        return pb_1.Message.getWrapperField(this, dependency_6.google.protobuf.Any, 1);
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
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 4);
                    }
                    set proof_height(value) {
                        pb_1.Message.setWrapperField(this, 4, value);
                    }
                    get has_proof_height() {
                        return pb_1.Message.getField(this, 4) != null;
                    }
                    static fromObject(data) {
                        const message = new QueryConnectionConsensusStateResponse({});
                        if (data.consensus_state != null) {
                            message.consensus_state = dependency_6.google.protobuf.Any.fromObject(data.consensus_state);
                        }
                        if (data.client_id != null) {
                            message.client_id = data.client_id;
                        }
                        if (data.proof != null) {
                            message.proof = data.proof;
                        }
                        if (data.proof_height != null) {
                            message.proof_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.proof_height);
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
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryConnectionConsensusStateResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.consensus_state, () => message.consensus_state = dependency_6.google.protobuf.Any.deserialize(reader));
                                    break;
                                case 2:
                                    message.client_id = reader.readString();
                                    break;
                                case 3:
                                    message.proof = reader.readBytes();
                                    break;
                                case 4:
                                    reader.readMessage(message.proof_height, () => message.proof_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader));
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
                        return QueryConnectionConsensusStateResponse.deserialize(bytes);
                    }
                }
                _QueryConnectionConsensusStateResponse_one_of_decls = new WeakMap();
                v1.QueryConnectionConsensusStateResponse = QueryConnectionConsensusStateResponse;
                class UnimplementedQueryService {
                }
                UnimplementedQueryService.definition = {
                    Connection: {
                        path: "/ibc.core.connection.v1.Query/Connection",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryConnectionRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryConnectionResponse.deserialize(new Uint8Array(bytes))
                    },
                    Connections: {
                        path: "/ibc.core.connection.v1.Query/Connections",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryConnectionsRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryConnectionsResponse.deserialize(new Uint8Array(bytes))
                    },
                    ClientConnections: {
                        path: "/ibc.core.connection.v1.Query/ClientConnections",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryClientConnectionsRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryClientConnectionsResponse.deserialize(new Uint8Array(bytes))
                    },
                    ConnectionClientState: {
                        path: "/ibc.core.connection.v1.Query/ConnectionClientState",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryConnectionClientStateRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryConnectionClientStateResponse.deserialize(new Uint8Array(bytes))
                    },
                    ConnectionConsensusState: {
                        path: "/ibc.core.connection.v1.Query/ConnectionConsensusState",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => QueryConnectionConsensusStateRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => QueryConnectionConsensusStateResponse.deserialize(new Uint8Array(bytes))
                    }
                };
                v1.UnimplementedQueryService = UnimplementedQueryService;
                class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                    constructor(address, credentials, options) {
                        super(address, credentials, options);
                        this.Connection = (message, metadata, options, callback) => {
                            return super.Connection(message, metadata, options, callback);
                        };
                        this.Connections = (message, metadata, options, callback) => {
                            return super.Connections(message, metadata, options, callback);
                        };
                        this.ClientConnections = (message, metadata, options, callback) => {
                            return super.ClientConnections(message, metadata, options, callback);
                        };
                        this.ConnectionClientState = (message, metadata, options, callback) => {
                            return super.ConnectionClientState(message, metadata, options, callback);
                        };
                        this.ConnectionConsensusState = (message, metadata, options, callback) => {
                            return super.ConnectionConsensusState(message, metadata, options, callback);
                        };
                    }
                }
                v1.QueryClient = QueryClient;
            })(v1 = connection.v1 || (connection.v1 = {}));
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
})(ibc = exports.ibc || (exports.ibc = {}));
//# sourceMappingURL=query.js.map