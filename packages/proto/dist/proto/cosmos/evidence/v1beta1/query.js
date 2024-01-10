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
const dependency_3 = __importStar(require("./../../../google/protobuf/any"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var evidence;
    (function (evidence) {
        var v1beta1;
        (function (v1beta1) {
            var _QueryEvidenceRequest_one_of_decls, _QueryEvidenceResponse_one_of_decls, _QueryAllEvidenceRequest_one_of_decls, _QueryAllEvidenceResponse_one_of_decls;
            class QueryEvidenceRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryEvidenceRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryEvidenceRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("evidence_hash" in data && data.evidence_hash != undefined) {
                            this.evidence_hash = data.evidence_hash;
                        }
                    }
                }
                get evidence_hash() {
                    return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                }
                set evidence_hash(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryEvidenceRequest({});
                    if (data.evidence_hash != null) {
                        message.evidence_hash = data.evidence_hash;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.evidence_hash != null) {
                        data.evidence_hash = this.evidence_hash;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.evidence_hash.length)
                        writer.writeBytes(1, this.evidence_hash);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryEvidenceRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.evidence_hash = reader.readBytes();
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
                    return QueryEvidenceRequest.deserialize(bytes);
                }
            }
            _QueryEvidenceRequest_one_of_decls = new WeakMap();
            v1beta1.QueryEvidenceRequest = QueryEvidenceRequest;
            class QueryEvidenceResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryEvidenceResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryEvidenceResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("evidence" in data && data.evidence != undefined) {
                            this.evidence = data.evidence;
                        }
                    }
                }
                get evidence() {
                    return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Any, 1);
                }
                set evidence(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_evidence() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryEvidenceResponse({});
                    if (data.evidence != null) {
                        message.evidence = dependency_3.google.protobuf.Any.fromObject(data.evidence);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.evidence != null) {
                        data.evidence = this.evidence.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_evidence)
                        writer.writeMessage(1, this.evidence, () => this.evidence.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryEvidenceResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.evidence, () => message.evidence = dependency_3.google.protobuf.Any.deserialize(reader));
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
                    return QueryEvidenceResponse.deserialize(bytes);
                }
            }
            _QueryEvidenceResponse_one_of_decls = new WeakMap();
            v1beta1.QueryEvidenceResponse = QueryEvidenceResponse;
            class QueryAllEvidenceRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAllEvidenceRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryAllEvidenceRequest_one_of_decls, "f"));
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
                    const message = new QueryAllEvidenceRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllEvidenceRequest();
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
                    return QueryAllEvidenceRequest.deserialize(bytes);
                }
            }
            _QueryAllEvidenceRequest_one_of_decls = new WeakMap();
            v1beta1.QueryAllEvidenceRequest = QueryAllEvidenceRequest;
            class QueryAllEvidenceResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAllEvidenceResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryAllEvidenceResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("evidence" in data && data.evidence != undefined) {
                            this.evidence = data.evidence;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get evidence() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_3.google.protobuf.Any, 1);
                }
                set evidence(value) {
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
                    const message = new QueryAllEvidenceResponse({});
                    if (data.evidence != null) {
                        message.evidence = data.evidence.map(item => dependency_3.google.protobuf.Any.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.evidence != null) {
                        data.evidence = this.evidence.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.evidence.length)
                        writer.writeRepeatedMessage(1, this.evidence, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllEvidenceResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.evidence, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.google.protobuf.Any.deserialize(reader), dependency_3.google.protobuf.Any));
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
                    return QueryAllEvidenceResponse.deserialize(bytes);
                }
            }
            _QueryAllEvidenceResponse_one_of_decls = new WeakMap();
            v1beta1.QueryAllEvidenceResponse = QueryAllEvidenceResponse;
            class UnimplementedQueryService {
            }
            UnimplementedQueryService.definition = {
                Evidence: {
                    path: "/cosmos.evidence.v1beta1.Query/Evidence",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryEvidenceRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryEvidenceResponse.deserialize(new Uint8Array(bytes))
                },
                AllEvidence: {
                    path: "/cosmos.evidence.v1beta1.Query/AllEvidence",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryAllEvidenceRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryAllEvidenceResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1beta1.UnimplementedQueryService = UnimplementedQueryService;
            class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.Evidence = (message, metadata, options, callback) => {
                        return super.Evidence(message, metadata, options, callback);
                    };
                    this.AllEvidence = (message, metadata, options, callback) => {
                        return super.AllEvidence(message, metadata, options, callback);
                    };
                }
            }
            v1beta1.QueryClient = QueryClient;
        })(v1beta1 = evidence.v1beta1 || (evidence.v1beta1 = {}));
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=query.js.map