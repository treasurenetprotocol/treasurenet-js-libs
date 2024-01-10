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
exports.evmos = void 0;
const dependency_1 = __importStar(require("./../../../cosmos/base/query/v1beta1/pagination"));
const dependency_2 = __importStar(require("./../../../cosmos/base/v1beta1/coin"));
const dependency_3 = __importStar(require("./genesis"));
const dependency_4 = __importStar(require("./incentives"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var evmos;
(function (evmos) {
    var incentives;
    (function (incentives) {
        var v1;
        (function (v1) {
            var _QueryIncentivesRequest_one_of_decls, _QueryIncentivesResponse_one_of_decls, _QueryIncentiveRequest_one_of_decls, _QueryIncentiveResponse_one_of_decls, _QueryGasMetersRequest_one_of_decls, _QueryGasMetersResponse_one_of_decls, _QueryGasMeterRequest_one_of_decls, _QueryGasMeterResponse_one_of_decls, _QueryAllocationMetersRequest_one_of_decls, _QueryAllocationMetersResponse_one_of_decls, _QueryAllocationMeterRequest_one_of_decls, _QueryAllocationMeterResponse_one_of_decls, _QueryParamsRequest_one_of_decls, _QueryParamsResponse_one_of_decls;
            class QueryIncentivesRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryIncentivesRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryIncentivesRequest_one_of_decls, "f"));
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
                    const message = new QueryIncentivesRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryIncentivesRequest();
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
                    return QueryIncentivesRequest.deserialize(bytes);
                }
            }
            _QueryIncentivesRequest_one_of_decls = new WeakMap();
            v1.QueryIncentivesRequest = QueryIncentivesRequest;
            class QueryIncentivesResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryIncentivesResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryIncentivesResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("incentives" in data && data.incentives != undefined) {
                            this.incentives = data.incentives;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get incentives() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.evmos.incentives.v1.Incentive, 1);
                }
                set incentives(value) {
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
                    const message = new QueryIncentivesResponse({});
                    if (data.incentives != null) {
                        message.incentives = data.incentives.map(item => dependency_4.evmos.incentives.v1.Incentive.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.incentives != null) {
                        data.incentives = this.incentives.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.incentives.length)
                        writer.writeRepeatedMessage(1, this.incentives, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryIncentivesResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.incentives, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.evmos.incentives.v1.Incentive.deserialize(reader), dependency_4.evmos.incentives.v1.Incentive));
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
                    return QueryIncentivesResponse.deserialize(bytes);
                }
            }
            _QueryIncentivesResponse_one_of_decls = new WeakMap();
            v1.QueryIncentivesResponse = QueryIncentivesResponse;
            class QueryIncentiveRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryIncentiveRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryIncentiveRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("contract" in data && data.contract != undefined) {
                            this.contract = data.contract;
                        }
                    }
                }
                get contract() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set contract(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryIncentiveRequest({});
                    if (data.contract != null) {
                        message.contract = data.contract;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.contract != null) {
                        data.contract = this.contract;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.contract.length)
                        writer.writeString(1, this.contract);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryIncentiveRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.contract = reader.readString();
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
                    return QueryIncentiveRequest.deserialize(bytes);
                }
            }
            _QueryIncentiveRequest_one_of_decls = new WeakMap();
            v1.QueryIncentiveRequest = QueryIncentiveRequest;
            class QueryIncentiveResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryIncentiveResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryIncentiveResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("incentive" in data && data.incentive != undefined) {
                            this.incentive = data.incentive;
                        }
                    }
                }
                get incentive() {
                    return pb_1.Message.getWrapperField(this, dependency_4.evmos.incentives.v1.Incentive, 1);
                }
                set incentive(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_incentive() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryIncentiveResponse({});
                    if (data.incentive != null) {
                        message.incentive = dependency_4.evmos.incentives.v1.Incentive.fromObject(data.incentive);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.incentive != null) {
                        data.incentive = this.incentive.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_incentive)
                        writer.writeMessage(1, this.incentive, () => this.incentive.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryIncentiveResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.incentive, () => message.incentive = dependency_4.evmos.incentives.v1.Incentive.deserialize(reader));
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
                    return QueryIncentiveResponse.deserialize(bytes);
                }
            }
            _QueryIncentiveResponse_one_of_decls = new WeakMap();
            v1.QueryIncentiveResponse = QueryIncentiveResponse;
            class QueryGasMetersRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryGasMetersRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryGasMetersRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("contract" in data && data.contract != undefined) {
                            this.contract = data.contract;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get contract() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set contract(value) {
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
                    const message = new QueryGasMetersRequest({});
                    if (data.contract != null) {
                        message.contract = data.contract;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.contract != null) {
                        data.contract = this.contract;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.contract.length)
                        writer.writeString(1, this.contract);
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGasMetersRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.contract = reader.readString();
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
                    return QueryGasMetersRequest.deserialize(bytes);
                }
            }
            _QueryGasMetersRequest_one_of_decls = new WeakMap();
            v1.QueryGasMetersRequest = QueryGasMetersRequest;
            class QueryGasMetersResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryGasMetersResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryGasMetersResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("gas_meters" in data && data.gas_meters != undefined) {
                            this.gas_meters = data.gas_meters;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get gas_meters() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.evmos.incentives.v1.GasMeter, 1);
                }
                set gas_meters(value) {
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
                    const message = new QueryGasMetersResponse({});
                    if (data.gas_meters != null) {
                        message.gas_meters = data.gas_meters.map(item => dependency_4.evmos.incentives.v1.GasMeter.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.gas_meters != null) {
                        data.gas_meters = this.gas_meters.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.gas_meters.length)
                        writer.writeRepeatedMessage(1, this.gas_meters, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGasMetersResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.gas_meters, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.evmos.incentives.v1.GasMeter.deserialize(reader), dependency_4.evmos.incentives.v1.GasMeter));
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
                    return QueryGasMetersResponse.deserialize(bytes);
                }
            }
            _QueryGasMetersResponse_one_of_decls = new WeakMap();
            v1.QueryGasMetersResponse = QueryGasMetersResponse;
            class QueryGasMeterRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryGasMeterRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryGasMeterRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("contract" in data && data.contract != undefined) {
                            this.contract = data.contract;
                        }
                        if ("participant" in data && data.participant != undefined) {
                            this.participant = data.participant;
                        }
                    }
                }
                get contract() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set contract(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get participant() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set participant(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new QueryGasMeterRequest({});
                    if (data.contract != null) {
                        message.contract = data.contract;
                    }
                    if (data.participant != null) {
                        message.participant = data.participant;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.contract != null) {
                        data.contract = this.contract;
                    }
                    if (this.participant != null) {
                        data.participant = this.participant;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.contract.length)
                        writer.writeString(1, this.contract);
                    if (this.participant.length)
                        writer.writeString(2, this.participant);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGasMeterRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.contract = reader.readString();
                                break;
                            case 2:
                                message.participant = reader.readString();
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
                    return QueryGasMeterRequest.deserialize(bytes);
                }
            }
            _QueryGasMeterRequest_one_of_decls = new WeakMap();
            v1.QueryGasMeterRequest = QueryGasMeterRequest;
            class QueryGasMeterResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryGasMeterResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryGasMeterResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("gas_meter" in data && data.gas_meter != undefined) {
                            this.gas_meter = data.gas_meter;
                        }
                    }
                }
                get gas_meter() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set gas_meter(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryGasMeterResponse({});
                    if (data.gas_meter != null) {
                        message.gas_meter = data.gas_meter;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.gas_meter != null) {
                        data.gas_meter = this.gas_meter;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.gas_meter != 0)
                        writer.writeUint64(1, this.gas_meter);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGasMeterResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.gas_meter = reader.readUint64();
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
                    return QueryGasMeterResponse.deserialize(bytes);
                }
            }
            _QueryGasMeterResponse_one_of_decls = new WeakMap();
            v1.QueryGasMeterResponse = QueryGasMeterResponse;
            class QueryAllocationMetersRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAllocationMetersRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryAllocationMetersRequest_one_of_decls, "f"));
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
                    const message = new QueryAllocationMetersRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllocationMetersRequest();
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
                    return QueryAllocationMetersRequest.deserialize(bytes);
                }
            }
            _QueryAllocationMetersRequest_one_of_decls = new WeakMap();
            v1.QueryAllocationMetersRequest = QueryAllocationMetersRequest;
            class QueryAllocationMetersResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAllocationMetersResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryAllocationMetersResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("allocation_meters" in data && data.allocation_meters != undefined) {
                            this.allocation_meters = data.allocation_meters;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get allocation_meters() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.DecCoin, 1);
                }
                set allocation_meters(value) {
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
                    const message = new QueryAllocationMetersResponse({});
                    if (data.allocation_meters != null) {
                        message.allocation_meters = data.allocation_meters.map(item => dependency_2.cosmos.base.v1beta1.DecCoin.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.allocation_meters != null) {
                        data.allocation_meters = this.allocation_meters.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.allocation_meters.length)
                        writer.writeRepeatedMessage(1, this.allocation_meters, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllocationMetersResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.allocation_meters, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.cosmos.base.v1beta1.DecCoin.deserialize(reader), dependency_2.cosmos.base.v1beta1.DecCoin));
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
                    return QueryAllocationMetersResponse.deserialize(bytes);
                }
            }
            _QueryAllocationMetersResponse_one_of_decls = new WeakMap();
            v1.QueryAllocationMetersResponse = QueryAllocationMetersResponse;
            class QueryAllocationMeterRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAllocationMeterRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryAllocationMeterRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("denom" in data && data.denom != undefined) {
                            this.denom = data.denom;
                        }
                    }
                }
                get denom() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set denom(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryAllocationMeterRequest({});
                    if (data.denom != null) {
                        message.denom = data.denom;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.denom != null) {
                        data.denom = this.denom;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.denom.length)
                        writer.writeString(1, this.denom);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllocationMeterRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
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
                    return QueryAllocationMeterRequest.deserialize(bytes);
                }
            }
            _QueryAllocationMeterRequest_one_of_decls = new WeakMap();
            v1.QueryAllocationMeterRequest = QueryAllocationMeterRequest;
            class QueryAllocationMeterResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAllocationMeterResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryAllocationMeterResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("allocation_meter" in data && data.allocation_meter != undefined) {
                            this.allocation_meter = data.allocation_meter;
                        }
                    }
                }
                get allocation_meter() {
                    return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.v1beta1.DecCoin, 1);
                }
                set allocation_meter(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_allocation_meter() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryAllocationMeterResponse({});
                    if (data.allocation_meter != null) {
                        message.allocation_meter = dependency_2.cosmos.base.v1beta1.DecCoin.fromObject(data.allocation_meter);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.allocation_meter != null) {
                        data.allocation_meter = this.allocation_meter.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_allocation_meter)
                        writer.writeMessage(1, this.allocation_meter, () => this.allocation_meter.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllocationMeterResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.allocation_meter, () => message.allocation_meter = dependency_2.cosmos.base.v1beta1.DecCoin.deserialize(reader));
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
                    return QueryAllocationMeterResponse.deserialize(bytes);
                }
            }
            _QueryAllocationMeterResponse_one_of_decls = new WeakMap();
            v1.QueryAllocationMeterResponse = QueryAllocationMeterResponse;
            class QueryParamsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryParamsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryParamsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new QueryParamsRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsRequest();
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
                    return QueryParamsRequest.deserialize(bytes);
                }
            }
            _QueryParamsRequest_one_of_decls = new WeakMap();
            v1.QueryParamsRequest = QueryParamsRequest;
            class QueryParamsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryParamsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryParamsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("params" in data && data.params != undefined) {
                            this.params = data.params;
                        }
                    }
                }
                get params() {
                    return pb_1.Message.getWrapperField(this, dependency_3.evmos.incentives.v1.Params, 1);
                }
                set params(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_params() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryParamsResponse({});
                    if (data.params != null) {
                        message.params = dependency_3.evmos.incentives.v1.Params.fromObject(data.params);
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.params, () => message.params = dependency_3.evmos.incentives.v1.Params.deserialize(reader));
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
            v1.QueryParamsResponse = QueryParamsResponse;
            class UnimplementedQueryService {
            }
            UnimplementedQueryService.definition = {
                Incentives: {
                    path: "/evmos.incentives.v1.Query/Incentives",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryIncentivesRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryIncentivesResponse.deserialize(new Uint8Array(bytes))
                },
                Incentive: {
                    path: "/evmos.incentives.v1.Query/Incentive",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryIncentiveRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryIncentiveResponse.deserialize(new Uint8Array(bytes))
                },
                GasMeters: {
                    path: "/evmos.incentives.v1.Query/GasMeters",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryGasMetersRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryGasMetersResponse.deserialize(new Uint8Array(bytes))
                },
                GasMeter: {
                    path: "/evmos.incentives.v1.Query/GasMeter",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryGasMeterRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryGasMeterResponse.deserialize(new Uint8Array(bytes))
                },
                AllocationMeters: {
                    path: "/evmos.incentives.v1.Query/AllocationMeters",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryAllocationMetersRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryAllocationMetersResponse.deserialize(new Uint8Array(bytes))
                },
                AllocationMeter: {
                    path: "/evmos.incentives.v1.Query/AllocationMeter",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryAllocationMeterRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryAllocationMeterResponse.deserialize(new Uint8Array(bytes))
                },
                Params: {
                    path: "/evmos.incentives.v1.Query/Params",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1.UnimplementedQueryService = UnimplementedQueryService;
            class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.Incentives = (message, metadata, options, callback) => {
                        return super.Incentives(message, metadata, options, callback);
                    };
                    this.Incentive = (message, metadata, options, callback) => {
                        return super.Incentive(message, metadata, options, callback);
                    };
                    this.GasMeters = (message, metadata, options, callback) => {
                        return super.GasMeters(message, metadata, options, callback);
                    };
                    this.GasMeter = (message, metadata, options, callback) => {
                        return super.GasMeter(message, metadata, options, callback);
                    };
                    this.AllocationMeters = (message, metadata, options, callback) => {
                        return super.AllocationMeters(message, metadata, options, callback);
                    };
                    this.AllocationMeter = (message, metadata, options, callback) => {
                        return super.AllocationMeter(message, metadata, options, callback);
                    };
                    this.Params = (message, metadata, options, callback) => {
                        return super.Params(message, metadata, options, callback);
                    };
                }
            }
            v1.QueryClient = QueryClient;
        })(v1 = incentives.v1 || (incentives.v1 = {}));
    })(incentives = evmos.incentives || (evmos.incentives = {}));
})(evmos = exports.evmos || (exports.evmos = {}));
//# sourceMappingURL=query.js.map