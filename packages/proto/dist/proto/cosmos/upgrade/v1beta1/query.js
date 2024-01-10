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
const dependency_3 = __importStar(require("./upgrade"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var upgrade;
    (function (upgrade) {
        var v1beta1;
        (function (v1beta1) {
            var _QueryCurrentPlanRequest_one_of_decls, _QueryCurrentPlanResponse_one_of_decls, _QueryAppliedPlanRequest_one_of_decls, _QueryAppliedPlanResponse_one_of_decls, _QueryUpgradedConsensusStateRequest_one_of_decls, _QueryUpgradedConsensusStateResponse_one_of_decls, _QueryModuleVersionsRequest_one_of_decls, _QueryModuleVersionsResponse_one_of_decls;
            class QueryCurrentPlanRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryCurrentPlanRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryCurrentPlanRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new QueryCurrentPlanRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCurrentPlanRequest();
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
                    return QueryCurrentPlanRequest.deserialize(bytes);
                }
            }
            _QueryCurrentPlanRequest_one_of_decls = new WeakMap();
            v1beta1.QueryCurrentPlanRequest = QueryCurrentPlanRequest;
            class QueryCurrentPlanResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryCurrentPlanResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryCurrentPlanResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("plan" in data && data.plan != undefined) {
                            this.plan = data.plan;
                        }
                    }
                }
                get plan() {
                    return pb_1.Message.getWrapperField(this, dependency_3.cosmos.upgrade.v1beta1.Plan, 1);
                }
                set plan(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_plan() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryCurrentPlanResponse({});
                    if (data.plan != null) {
                        message.plan = dependency_3.cosmos.upgrade.v1beta1.Plan.fromObject(data.plan);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.plan != null) {
                        data.plan = this.plan.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_plan)
                        writer.writeMessage(1, this.plan, () => this.plan.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCurrentPlanResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.plan, () => message.plan = dependency_3.cosmos.upgrade.v1beta1.Plan.deserialize(reader));
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
                    return QueryCurrentPlanResponse.deserialize(bytes);
                }
            }
            _QueryCurrentPlanResponse_one_of_decls = new WeakMap();
            v1beta1.QueryCurrentPlanResponse = QueryCurrentPlanResponse;
            class QueryAppliedPlanRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAppliedPlanRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryAppliedPlanRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("name" in data && data.name != undefined) {
                            this.name = data.name;
                        }
                    }
                }
                get name() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set name(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryAppliedPlanRequest({});
                    if (data.name != null) {
                        message.name = data.name;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.name != null) {
                        data.name = this.name;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.name.length)
                        writer.writeString(1, this.name);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAppliedPlanRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.name = reader.readString();
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
                    return QueryAppliedPlanRequest.deserialize(bytes);
                }
            }
            _QueryAppliedPlanRequest_one_of_decls = new WeakMap();
            v1beta1.QueryAppliedPlanRequest = QueryAppliedPlanRequest;
            class QueryAppliedPlanResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAppliedPlanResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryAppliedPlanResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("height" in data && data.height != undefined) {
                            this.height = data.height;
                        }
                    }
                }
                get height() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set height(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryAppliedPlanResponse({});
                    if (data.height != null) {
                        message.height = data.height;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.height != null) {
                        data.height = this.height;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.height != 0)
                        writer.writeInt64(1, this.height);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAppliedPlanResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.height = reader.readInt64();
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
                    return QueryAppliedPlanResponse.deserialize(bytes);
                }
            }
            _QueryAppliedPlanResponse_one_of_decls = new WeakMap();
            v1beta1.QueryAppliedPlanResponse = QueryAppliedPlanResponse;
            class QueryUpgradedConsensusStateRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryUpgradedConsensusStateRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryUpgradedConsensusStateRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("last_height" in data && data.last_height != undefined) {
                            this.last_height = data.last_height;
                        }
                    }
                }
                get last_height() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set last_height(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryUpgradedConsensusStateRequest({});
                    if (data.last_height != null) {
                        message.last_height = data.last_height;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.last_height != null) {
                        data.last_height = this.last_height;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.last_height != 0)
                        writer.writeInt64(1, this.last_height);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryUpgradedConsensusStateRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.last_height = reader.readInt64();
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
                    return QueryUpgradedConsensusStateRequest.deserialize(bytes);
                }
            }
            _QueryUpgradedConsensusStateRequest_one_of_decls = new WeakMap();
            v1beta1.QueryUpgradedConsensusStateRequest = QueryUpgradedConsensusStateRequest;
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
                    return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                }
                set upgraded_consensus_state(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new QueryUpgradedConsensusStateResponse({});
                    if (data.upgraded_consensus_state != null) {
                        message.upgraded_consensus_state = data.upgraded_consensus_state;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.upgraded_consensus_state != null) {
                        data.upgraded_consensus_state = this.upgraded_consensus_state;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.upgraded_consensus_state.length)
                        writer.writeBytes(2, this.upgraded_consensus_state);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryUpgradedConsensusStateResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 2:
                                message.upgraded_consensus_state = reader.readBytes();
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
            v1beta1.QueryUpgradedConsensusStateResponse = QueryUpgradedConsensusStateResponse;
            class QueryModuleVersionsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryModuleVersionsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryModuleVersionsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("module_name" in data && data.module_name != undefined) {
                            this.module_name = data.module_name;
                        }
                    }
                }
                get module_name() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set module_name(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryModuleVersionsRequest({});
                    if (data.module_name != null) {
                        message.module_name = data.module_name;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.module_name != null) {
                        data.module_name = this.module_name;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.module_name.length)
                        writer.writeString(1, this.module_name);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryModuleVersionsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.module_name = reader.readString();
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
                    return QueryModuleVersionsRequest.deserialize(bytes);
                }
            }
            _QueryModuleVersionsRequest_one_of_decls = new WeakMap();
            v1beta1.QueryModuleVersionsRequest = QueryModuleVersionsRequest;
            class QueryModuleVersionsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryModuleVersionsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryModuleVersionsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("module_versions" in data && data.module_versions != undefined) {
                            this.module_versions = data.module_versions;
                        }
                    }
                }
                get module_versions() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.upgrade.v1beta1.ModuleVersion, 1);
                }
                set module_versions(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryModuleVersionsResponse({});
                    if (data.module_versions != null) {
                        message.module_versions = data.module_versions.map(item => dependency_3.cosmos.upgrade.v1beta1.ModuleVersion.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.module_versions != null) {
                        data.module_versions = this.module_versions.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.module_versions.length)
                        writer.writeRepeatedMessage(1, this.module_versions, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryModuleVersionsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.module_versions, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.cosmos.upgrade.v1beta1.ModuleVersion.deserialize(reader), dependency_3.cosmos.upgrade.v1beta1.ModuleVersion));
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
                    return QueryModuleVersionsResponse.deserialize(bytes);
                }
            }
            _QueryModuleVersionsResponse_one_of_decls = new WeakMap();
            v1beta1.QueryModuleVersionsResponse = QueryModuleVersionsResponse;
            class UnimplementedQueryService {
            }
            UnimplementedQueryService.definition = {
                CurrentPlan: {
                    path: "/cosmos.upgrade.v1beta1.Query/CurrentPlan",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryCurrentPlanRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryCurrentPlanResponse.deserialize(new Uint8Array(bytes))
                },
                AppliedPlan: {
                    path: "/cosmos.upgrade.v1beta1.Query/AppliedPlan",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryAppliedPlanRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryAppliedPlanResponse.deserialize(new Uint8Array(bytes))
                },
                UpgradedConsensusState: {
                    path: "/cosmos.upgrade.v1beta1.Query/UpgradedConsensusState",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryUpgradedConsensusStateRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryUpgradedConsensusStateResponse.deserialize(new Uint8Array(bytes))
                },
                ModuleVersions: {
                    path: "/cosmos.upgrade.v1beta1.Query/ModuleVersions",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryModuleVersionsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryModuleVersionsResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1beta1.UnimplementedQueryService = UnimplementedQueryService;
            class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.CurrentPlan = (message, metadata, options, callback) => {
                        return super.CurrentPlan(message, metadata, options, callback);
                    };
                    this.AppliedPlan = (message, metadata, options, callback) => {
                        return super.AppliedPlan(message, metadata, options, callback);
                    };
                    this.UpgradedConsensusState = (message, metadata, options, callback) => {
                        return super.UpgradedConsensusState(message, metadata, options, callback);
                    };
                    this.ModuleVersions = (message, metadata, options, callback) => {
                        return super.ModuleVersions(message, metadata, options, callback);
                    };
                }
            }
            v1beta1.QueryClient = QueryClient;
        })(v1beta1 = upgrade.v1beta1 || (upgrade.v1beta1 = {}));
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=query.js.map