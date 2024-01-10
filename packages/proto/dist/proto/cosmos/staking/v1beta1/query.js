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
const dependency_4 = __importStar(require("./staking"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var staking;
    (function (staking) {
        var v1beta1;
        (function (v1beta1) {
            var _QueryValidatorsRequest_one_of_decls, _QueryValidatorsResponse_one_of_decls, _QueryValidatorRequest_one_of_decls, _QueryValidatorResponse_one_of_decls, _QueryValidatorDelegationsRequest_one_of_decls, _QueryValidatorDelegationsResponse_one_of_decls, _QueryValidatorUnbondingDelegationsRequest_one_of_decls, _QueryValidatorUnbondingDelegationsResponse_one_of_decls, _QueryDelegationRequest_one_of_decls, _QueryDelegationResponse_one_of_decls, _QueryUnbondingDelegationRequest_one_of_decls, _QueryUnbondingDelegationResponse_one_of_decls, _QueryDelegatorDelegationsRequest_one_of_decls, _QueryDelegatorDelegationsResponse_one_of_decls, _QueryDelegatorUnbondingDelegationsRequest_one_of_decls, _QueryDelegatorUnbondingDelegationsResponse_one_of_decls, _QueryRedelegationsRequest_one_of_decls, _QueryRedelegationsResponse_one_of_decls, _QueryDelegatorValidatorsRequest_one_of_decls, _QueryDelegatorValidatorsResponse_one_of_decls, _QueryDelegatorValidatorRequest_one_of_decls, _QueryDelegatorValidatorResponse_one_of_decls, _QueryHistoricalInfoRequest_one_of_decls, _QueryHistoricalInfoResponse_one_of_decls, _QueryPoolRequest_one_of_decls, _QueryPoolResponse_one_of_decls, _QueryParamsRequest_one_of_decls, _QueryParamsResponse_one_of_decls;
            class QueryValidatorsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryValidatorsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryValidatorsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("status" in data && data.status != undefined) {
                            this.status = data.status;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get status() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set status(value) {
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
                    const message = new QueryValidatorsRequest({});
                    if (data.status != null) {
                        message.status = data.status;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.status != null) {
                        data.status = this.status;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.status.length)
                        writer.writeString(1, this.status);
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValidatorsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.status = reader.readString();
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
                    return QueryValidatorsRequest.deserialize(bytes);
                }
            }
            _QueryValidatorsRequest_one_of_decls = new WeakMap();
            v1beta1.QueryValidatorsRequest = QueryValidatorsRequest;
            class QueryValidatorsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryValidatorsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryValidatorsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("validators" in data && data.validators != undefined) {
                            this.validators = data.validators;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get validators() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.staking.v1beta1.Validator, 1);
                }
                set validators(value) {
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
                    const message = new QueryValidatorsResponse({});
                    if (data.validators != null) {
                        message.validators = data.validators.map(item => dependency_4.cosmos.staking.v1beta1.Validator.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.validators != null) {
                        data.validators = this.validators.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.validators.length)
                        writer.writeRepeatedMessage(1, this.validators, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValidatorsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.validators, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.staking.v1beta1.Validator.deserialize(reader), dependency_4.cosmos.staking.v1beta1.Validator));
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
                    return QueryValidatorsResponse.deserialize(bytes);
                }
            }
            _QueryValidatorsResponse_one_of_decls = new WeakMap();
            v1beta1.QueryValidatorsResponse = QueryValidatorsResponse;
            class QueryValidatorRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryValidatorRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryValidatorRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("validator_addr" in data && data.validator_addr != undefined) {
                            this.validator_addr = data.validator_addr;
                        }
                    }
                }
                get validator_addr() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set validator_addr(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryValidatorRequest({});
                    if (data.validator_addr != null) {
                        message.validator_addr = data.validator_addr;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.validator_addr != null) {
                        data.validator_addr = this.validator_addr;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.validator_addr.length)
                        writer.writeString(1, this.validator_addr);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValidatorRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.validator_addr = reader.readString();
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
                    return QueryValidatorRequest.deserialize(bytes);
                }
            }
            _QueryValidatorRequest_one_of_decls = new WeakMap();
            v1beta1.QueryValidatorRequest = QueryValidatorRequest;
            class QueryValidatorResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryValidatorResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryValidatorResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("validator" in data && data.validator != undefined) {
                            this.validator = data.validator;
                        }
                    }
                }
                get validator() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.staking.v1beta1.Validator, 1);
                }
                set validator(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_validator() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryValidatorResponse({});
                    if (data.validator != null) {
                        message.validator = dependency_4.cosmos.staking.v1beta1.Validator.fromObject(data.validator);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.validator != null) {
                        data.validator = this.validator.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_validator)
                        writer.writeMessage(1, this.validator, () => this.validator.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValidatorResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.validator, () => message.validator = dependency_4.cosmos.staking.v1beta1.Validator.deserialize(reader));
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
                    return QueryValidatorResponse.deserialize(bytes);
                }
            }
            _QueryValidatorResponse_one_of_decls = new WeakMap();
            v1beta1.QueryValidatorResponse = QueryValidatorResponse;
            class QueryValidatorDelegationsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryValidatorDelegationsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryValidatorDelegationsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("validator_addr" in data && data.validator_addr != undefined) {
                            this.validator_addr = data.validator_addr;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get validator_addr() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set validator_addr(value) {
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
                    const message = new QueryValidatorDelegationsRequest({});
                    if (data.validator_addr != null) {
                        message.validator_addr = data.validator_addr;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.validator_addr != null) {
                        data.validator_addr = this.validator_addr;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.validator_addr.length)
                        writer.writeString(1, this.validator_addr);
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValidatorDelegationsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.validator_addr = reader.readString();
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
                    return QueryValidatorDelegationsRequest.deserialize(bytes);
                }
            }
            _QueryValidatorDelegationsRequest_one_of_decls = new WeakMap();
            v1beta1.QueryValidatorDelegationsRequest = QueryValidatorDelegationsRequest;
            class QueryValidatorDelegationsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryValidatorDelegationsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryValidatorDelegationsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("delegation_responses" in data && data.delegation_responses != undefined) {
                            this.delegation_responses = data.delegation_responses;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get delegation_responses() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.staking.v1beta1.DelegationResponse, 1);
                }
                set delegation_responses(value) {
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
                    const message = new QueryValidatorDelegationsResponse({});
                    if (data.delegation_responses != null) {
                        message.delegation_responses = data.delegation_responses.map(item => dependency_4.cosmos.staking.v1beta1.DelegationResponse.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.delegation_responses != null) {
                        data.delegation_responses = this.delegation_responses.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.delegation_responses.length)
                        writer.writeRepeatedMessage(1, this.delegation_responses, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValidatorDelegationsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.delegation_responses, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.staking.v1beta1.DelegationResponse.deserialize(reader), dependency_4.cosmos.staking.v1beta1.DelegationResponse));
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
                    return QueryValidatorDelegationsResponse.deserialize(bytes);
                }
            }
            _QueryValidatorDelegationsResponse_one_of_decls = new WeakMap();
            v1beta1.QueryValidatorDelegationsResponse = QueryValidatorDelegationsResponse;
            class QueryValidatorUnbondingDelegationsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryValidatorUnbondingDelegationsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryValidatorUnbondingDelegationsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("validator_addr" in data && data.validator_addr != undefined) {
                            this.validator_addr = data.validator_addr;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get validator_addr() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set validator_addr(value) {
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
                    const message = new QueryValidatorUnbondingDelegationsRequest({});
                    if (data.validator_addr != null) {
                        message.validator_addr = data.validator_addr;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.validator_addr != null) {
                        data.validator_addr = this.validator_addr;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.validator_addr.length)
                        writer.writeString(1, this.validator_addr);
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValidatorUnbondingDelegationsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.validator_addr = reader.readString();
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
                    return QueryValidatorUnbondingDelegationsRequest.deserialize(bytes);
                }
            }
            _QueryValidatorUnbondingDelegationsRequest_one_of_decls = new WeakMap();
            v1beta1.QueryValidatorUnbondingDelegationsRequest = QueryValidatorUnbondingDelegationsRequest;
            class QueryValidatorUnbondingDelegationsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryValidatorUnbondingDelegationsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryValidatorUnbondingDelegationsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("unbonding_responses" in data && data.unbonding_responses != undefined) {
                            this.unbonding_responses = data.unbonding_responses;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get unbonding_responses() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.staking.v1beta1.UnbondingDelegation, 1);
                }
                set unbonding_responses(value) {
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
                    const message = new QueryValidatorUnbondingDelegationsResponse({});
                    if (data.unbonding_responses != null) {
                        message.unbonding_responses = data.unbonding_responses.map(item => dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.unbonding_responses != null) {
                        data.unbonding_responses = this.unbonding_responses.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.unbonding_responses.length)
                        writer.writeRepeatedMessage(1, this.unbonding_responses, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValidatorUnbondingDelegationsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.unbonding_responses, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.deserialize(reader), dependency_4.cosmos.staking.v1beta1.UnbondingDelegation));
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
                    return QueryValidatorUnbondingDelegationsResponse.deserialize(bytes);
                }
            }
            _QueryValidatorUnbondingDelegationsResponse_one_of_decls = new WeakMap();
            v1beta1.QueryValidatorUnbondingDelegationsResponse = QueryValidatorUnbondingDelegationsResponse;
            class QueryDelegationRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDelegationRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDelegationRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("delegator_addr" in data && data.delegator_addr != undefined) {
                            this.delegator_addr = data.delegator_addr;
                        }
                        if ("validator_addr" in data && data.validator_addr != undefined) {
                            this.validator_addr = data.validator_addr;
                        }
                    }
                }
                get delegator_addr() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set delegator_addr(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get validator_addr() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set validator_addr(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new QueryDelegationRequest({});
                    if (data.delegator_addr != null) {
                        message.delegator_addr = data.delegator_addr;
                    }
                    if (data.validator_addr != null) {
                        message.validator_addr = data.validator_addr;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.delegator_addr != null) {
                        data.delegator_addr = this.delegator_addr;
                    }
                    if (this.validator_addr != null) {
                        data.validator_addr = this.validator_addr;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.delegator_addr.length)
                        writer.writeString(1, this.delegator_addr);
                    if (this.validator_addr.length)
                        writer.writeString(2, this.validator_addr);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegationRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.delegator_addr = reader.readString();
                                break;
                            case 2:
                                message.validator_addr = reader.readString();
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
                    return QueryDelegationRequest.deserialize(bytes);
                }
            }
            _QueryDelegationRequest_one_of_decls = new WeakMap();
            v1beta1.QueryDelegationRequest = QueryDelegationRequest;
            class QueryDelegationResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDelegationResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDelegationResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("delegation_response" in data && data.delegation_response != undefined) {
                            this.delegation_response = data.delegation_response;
                        }
                    }
                }
                get delegation_response() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.staking.v1beta1.DelegationResponse, 1);
                }
                set delegation_response(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_delegation_response() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryDelegationResponse({});
                    if (data.delegation_response != null) {
                        message.delegation_response = dependency_4.cosmos.staking.v1beta1.DelegationResponse.fromObject(data.delegation_response);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.delegation_response != null) {
                        data.delegation_response = this.delegation_response.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_delegation_response)
                        writer.writeMessage(1, this.delegation_response, () => this.delegation_response.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegationResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.delegation_response, () => message.delegation_response = dependency_4.cosmos.staking.v1beta1.DelegationResponse.deserialize(reader));
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
                    return QueryDelegationResponse.deserialize(bytes);
                }
            }
            _QueryDelegationResponse_one_of_decls = new WeakMap();
            v1beta1.QueryDelegationResponse = QueryDelegationResponse;
            class QueryUnbondingDelegationRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryUnbondingDelegationRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryUnbondingDelegationRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("delegator_addr" in data && data.delegator_addr != undefined) {
                            this.delegator_addr = data.delegator_addr;
                        }
                        if ("validator_addr" in data && data.validator_addr != undefined) {
                            this.validator_addr = data.validator_addr;
                        }
                    }
                }
                get delegator_addr() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set delegator_addr(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get validator_addr() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set validator_addr(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new QueryUnbondingDelegationRequest({});
                    if (data.delegator_addr != null) {
                        message.delegator_addr = data.delegator_addr;
                    }
                    if (data.validator_addr != null) {
                        message.validator_addr = data.validator_addr;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.delegator_addr != null) {
                        data.delegator_addr = this.delegator_addr;
                    }
                    if (this.validator_addr != null) {
                        data.validator_addr = this.validator_addr;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.delegator_addr.length)
                        writer.writeString(1, this.delegator_addr);
                    if (this.validator_addr.length)
                        writer.writeString(2, this.validator_addr);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryUnbondingDelegationRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.delegator_addr = reader.readString();
                                break;
                            case 2:
                                message.validator_addr = reader.readString();
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
                    return QueryUnbondingDelegationRequest.deserialize(bytes);
                }
            }
            _QueryUnbondingDelegationRequest_one_of_decls = new WeakMap();
            v1beta1.QueryUnbondingDelegationRequest = QueryUnbondingDelegationRequest;
            class QueryUnbondingDelegationResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryUnbondingDelegationResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryUnbondingDelegationResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("unbond" in data && data.unbond != undefined) {
                            this.unbond = data.unbond;
                        }
                    }
                }
                get unbond() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.staking.v1beta1.UnbondingDelegation, 1);
                }
                set unbond(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_unbond() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryUnbondingDelegationResponse({});
                    if (data.unbond != null) {
                        message.unbond = dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.fromObject(data.unbond);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.unbond != null) {
                        data.unbond = this.unbond.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_unbond)
                        writer.writeMessage(1, this.unbond, () => this.unbond.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryUnbondingDelegationResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.unbond, () => message.unbond = dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.deserialize(reader));
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
                    return QueryUnbondingDelegationResponse.deserialize(bytes);
                }
            }
            _QueryUnbondingDelegationResponse_one_of_decls = new WeakMap();
            v1beta1.QueryUnbondingDelegationResponse = QueryUnbondingDelegationResponse;
            class QueryDelegatorDelegationsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDelegatorDelegationsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDelegatorDelegationsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("delegator_addr" in data && data.delegator_addr != undefined) {
                            this.delegator_addr = data.delegator_addr;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get delegator_addr() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set delegator_addr(value) {
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
                    const message = new QueryDelegatorDelegationsRequest({});
                    if (data.delegator_addr != null) {
                        message.delegator_addr = data.delegator_addr;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.delegator_addr != null) {
                        data.delegator_addr = this.delegator_addr;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.delegator_addr.length)
                        writer.writeString(1, this.delegator_addr);
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegatorDelegationsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.delegator_addr = reader.readString();
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
                    return QueryDelegatorDelegationsRequest.deserialize(bytes);
                }
            }
            _QueryDelegatorDelegationsRequest_one_of_decls = new WeakMap();
            v1beta1.QueryDelegatorDelegationsRequest = QueryDelegatorDelegationsRequest;
            class QueryDelegatorDelegationsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDelegatorDelegationsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryDelegatorDelegationsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("delegation_responses" in data && data.delegation_responses != undefined) {
                            this.delegation_responses = data.delegation_responses;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get delegation_responses() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.staking.v1beta1.DelegationResponse, 1);
                }
                set delegation_responses(value) {
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
                    const message = new QueryDelegatorDelegationsResponse({});
                    if (data.delegation_responses != null) {
                        message.delegation_responses = data.delegation_responses.map(item => dependency_4.cosmos.staking.v1beta1.DelegationResponse.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.delegation_responses != null) {
                        data.delegation_responses = this.delegation_responses.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.delegation_responses.length)
                        writer.writeRepeatedMessage(1, this.delegation_responses, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegatorDelegationsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.delegation_responses, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.staking.v1beta1.DelegationResponse.deserialize(reader), dependency_4.cosmos.staking.v1beta1.DelegationResponse));
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
                    return QueryDelegatorDelegationsResponse.deserialize(bytes);
                }
            }
            _QueryDelegatorDelegationsResponse_one_of_decls = new WeakMap();
            v1beta1.QueryDelegatorDelegationsResponse = QueryDelegatorDelegationsResponse;
            class QueryDelegatorUnbondingDelegationsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDelegatorUnbondingDelegationsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDelegatorUnbondingDelegationsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("delegator_addr" in data && data.delegator_addr != undefined) {
                            this.delegator_addr = data.delegator_addr;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get delegator_addr() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set delegator_addr(value) {
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
                    const message = new QueryDelegatorUnbondingDelegationsRequest({});
                    if (data.delegator_addr != null) {
                        message.delegator_addr = data.delegator_addr;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.delegator_addr != null) {
                        data.delegator_addr = this.delegator_addr;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.delegator_addr.length)
                        writer.writeString(1, this.delegator_addr);
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegatorUnbondingDelegationsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.delegator_addr = reader.readString();
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
                    return QueryDelegatorUnbondingDelegationsRequest.deserialize(bytes);
                }
            }
            _QueryDelegatorUnbondingDelegationsRequest_one_of_decls = new WeakMap();
            v1beta1.QueryDelegatorUnbondingDelegationsRequest = QueryDelegatorUnbondingDelegationsRequest;
            class QueryDelegatorUnbondingDelegationsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDelegatorUnbondingDelegationsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryDelegatorUnbondingDelegationsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("unbonding_responses" in data && data.unbonding_responses != undefined) {
                            this.unbonding_responses = data.unbonding_responses;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get unbonding_responses() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.staking.v1beta1.UnbondingDelegation, 1);
                }
                set unbonding_responses(value) {
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
                    const message = new QueryDelegatorUnbondingDelegationsResponse({});
                    if (data.unbonding_responses != null) {
                        message.unbonding_responses = data.unbonding_responses.map(item => dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.unbonding_responses != null) {
                        data.unbonding_responses = this.unbonding_responses.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.unbonding_responses.length)
                        writer.writeRepeatedMessage(1, this.unbonding_responses, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegatorUnbondingDelegationsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.unbonding_responses, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.deserialize(reader), dependency_4.cosmos.staking.v1beta1.UnbondingDelegation));
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
                    return QueryDelegatorUnbondingDelegationsResponse.deserialize(bytes);
                }
            }
            _QueryDelegatorUnbondingDelegationsResponse_one_of_decls = new WeakMap();
            v1beta1.QueryDelegatorUnbondingDelegationsResponse = QueryDelegatorUnbondingDelegationsResponse;
            class QueryRedelegationsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryRedelegationsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryRedelegationsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("delegator_addr" in data && data.delegator_addr != undefined) {
                            this.delegator_addr = data.delegator_addr;
                        }
                        if ("src_validator_addr" in data && data.src_validator_addr != undefined) {
                            this.src_validator_addr = data.src_validator_addr;
                        }
                        if ("dst_validator_addr" in data && data.dst_validator_addr != undefined) {
                            this.dst_validator_addr = data.dst_validator_addr;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get delegator_addr() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set delegator_addr(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get src_validator_addr() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set src_validator_addr(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get dst_validator_addr() {
                    return pb_1.Message.getFieldWithDefault(this, 3, "");
                }
                set dst_validator_addr(value) {
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
                    const message = new QueryRedelegationsRequest({});
                    if (data.delegator_addr != null) {
                        message.delegator_addr = data.delegator_addr;
                    }
                    if (data.src_validator_addr != null) {
                        message.src_validator_addr = data.src_validator_addr;
                    }
                    if (data.dst_validator_addr != null) {
                        message.dst_validator_addr = data.dst_validator_addr;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.delegator_addr != null) {
                        data.delegator_addr = this.delegator_addr;
                    }
                    if (this.src_validator_addr != null) {
                        data.src_validator_addr = this.src_validator_addr;
                    }
                    if (this.dst_validator_addr != null) {
                        data.dst_validator_addr = this.dst_validator_addr;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.delegator_addr.length)
                        writer.writeString(1, this.delegator_addr);
                    if (this.src_validator_addr.length)
                        writer.writeString(2, this.src_validator_addr);
                    if (this.dst_validator_addr.length)
                        writer.writeString(3, this.dst_validator_addr);
                    if (this.has_pagination)
                        writer.writeMessage(4, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryRedelegationsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.delegator_addr = reader.readString();
                                break;
                            case 2:
                                message.src_validator_addr = reader.readString();
                                break;
                            case 3:
                                message.dst_validator_addr = reader.readString();
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
                    return QueryRedelegationsRequest.deserialize(bytes);
                }
            }
            _QueryRedelegationsRequest_one_of_decls = new WeakMap();
            v1beta1.QueryRedelegationsRequest = QueryRedelegationsRequest;
            class QueryRedelegationsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryRedelegationsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryRedelegationsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("redelegation_responses" in data && data.redelegation_responses != undefined) {
                            this.redelegation_responses = data.redelegation_responses;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get redelegation_responses() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.staking.v1beta1.RedelegationResponse, 1);
                }
                set redelegation_responses(value) {
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
                    const message = new QueryRedelegationsResponse({});
                    if (data.redelegation_responses != null) {
                        message.redelegation_responses = data.redelegation_responses.map(item => dependency_4.cosmos.staking.v1beta1.RedelegationResponse.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.redelegation_responses != null) {
                        data.redelegation_responses = this.redelegation_responses.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.redelegation_responses.length)
                        writer.writeRepeatedMessage(1, this.redelegation_responses, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryRedelegationsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.redelegation_responses, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.staking.v1beta1.RedelegationResponse.deserialize(reader), dependency_4.cosmos.staking.v1beta1.RedelegationResponse));
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
                    return QueryRedelegationsResponse.deserialize(bytes);
                }
            }
            _QueryRedelegationsResponse_one_of_decls = new WeakMap();
            v1beta1.QueryRedelegationsResponse = QueryRedelegationsResponse;
            class QueryDelegatorValidatorsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDelegatorValidatorsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDelegatorValidatorsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("delegator_addr" in data && data.delegator_addr != undefined) {
                            this.delegator_addr = data.delegator_addr;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get delegator_addr() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set delegator_addr(value) {
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
                    const message = new QueryDelegatorValidatorsRequest({});
                    if (data.delegator_addr != null) {
                        message.delegator_addr = data.delegator_addr;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.delegator_addr != null) {
                        data.delegator_addr = this.delegator_addr;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.delegator_addr.length)
                        writer.writeString(1, this.delegator_addr);
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegatorValidatorsRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.delegator_addr = reader.readString();
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
                    return QueryDelegatorValidatorsRequest.deserialize(bytes);
                }
            }
            _QueryDelegatorValidatorsRequest_one_of_decls = new WeakMap();
            v1beta1.QueryDelegatorValidatorsRequest = QueryDelegatorValidatorsRequest;
            class QueryDelegatorValidatorsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDelegatorValidatorsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryDelegatorValidatorsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("validators" in data && data.validators != undefined) {
                            this.validators = data.validators;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get validators() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.staking.v1beta1.Validator, 1);
                }
                set validators(value) {
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
                    const message = new QueryDelegatorValidatorsResponse({});
                    if (data.validators != null) {
                        message.validators = data.validators.map(item => dependency_4.cosmos.staking.v1beta1.Validator.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.validators != null) {
                        data.validators = this.validators.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.validators.length)
                        writer.writeRepeatedMessage(1, this.validators, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegatorValidatorsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.validators, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.staking.v1beta1.Validator.deserialize(reader), dependency_4.cosmos.staking.v1beta1.Validator));
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
                    return QueryDelegatorValidatorsResponse.deserialize(bytes);
                }
            }
            _QueryDelegatorValidatorsResponse_one_of_decls = new WeakMap();
            v1beta1.QueryDelegatorValidatorsResponse = QueryDelegatorValidatorsResponse;
            class QueryDelegatorValidatorRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDelegatorValidatorRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDelegatorValidatorRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("delegator_addr" in data && data.delegator_addr != undefined) {
                            this.delegator_addr = data.delegator_addr;
                        }
                        if ("validator_addr" in data && data.validator_addr != undefined) {
                            this.validator_addr = data.validator_addr;
                        }
                    }
                }
                get delegator_addr() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set delegator_addr(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get validator_addr() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set validator_addr(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new QueryDelegatorValidatorRequest({});
                    if (data.delegator_addr != null) {
                        message.delegator_addr = data.delegator_addr;
                    }
                    if (data.validator_addr != null) {
                        message.validator_addr = data.validator_addr;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.delegator_addr != null) {
                        data.delegator_addr = this.delegator_addr;
                    }
                    if (this.validator_addr != null) {
                        data.validator_addr = this.validator_addr;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.delegator_addr.length)
                        writer.writeString(1, this.delegator_addr);
                    if (this.validator_addr.length)
                        writer.writeString(2, this.validator_addr);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegatorValidatorRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.delegator_addr = reader.readString();
                                break;
                            case 2:
                                message.validator_addr = reader.readString();
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
                    return QueryDelegatorValidatorRequest.deserialize(bytes);
                }
            }
            _QueryDelegatorValidatorRequest_one_of_decls = new WeakMap();
            v1beta1.QueryDelegatorValidatorRequest = QueryDelegatorValidatorRequest;
            class QueryDelegatorValidatorResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDelegatorValidatorResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDelegatorValidatorResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("validator" in data && data.validator != undefined) {
                            this.validator = data.validator;
                        }
                    }
                }
                get validator() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.staking.v1beta1.Validator, 1);
                }
                set validator(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_validator() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryDelegatorValidatorResponse({});
                    if (data.validator != null) {
                        message.validator = dependency_4.cosmos.staking.v1beta1.Validator.fromObject(data.validator);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.validator != null) {
                        data.validator = this.validator.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_validator)
                        writer.writeMessage(1, this.validator, () => this.validator.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegatorValidatorResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.validator, () => message.validator = dependency_4.cosmos.staking.v1beta1.Validator.deserialize(reader));
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
                    return QueryDelegatorValidatorResponse.deserialize(bytes);
                }
            }
            _QueryDelegatorValidatorResponse_one_of_decls = new WeakMap();
            v1beta1.QueryDelegatorValidatorResponse = QueryDelegatorValidatorResponse;
            class QueryHistoricalInfoRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryHistoricalInfoRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryHistoricalInfoRequest_one_of_decls, "f"));
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
                    const message = new QueryHistoricalInfoRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryHistoricalInfoRequest();
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
                    return QueryHistoricalInfoRequest.deserialize(bytes);
                }
            }
            _QueryHistoricalInfoRequest_one_of_decls = new WeakMap();
            v1beta1.QueryHistoricalInfoRequest = QueryHistoricalInfoRequest;
            class QueryHistoricalInfoResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryHistoricalInfoResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryHistoricalInfoResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("hist" in data && data.hist != undefined) {
                            this.hist = data.hist;
                        }
                    }
                }
                get hist() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.staking.v1beta1.HistoricalInfo, 1);
                }
                set hist(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_hist() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryHistoricalInfoResponse({});
                    if (data.hist != null) {
                        message.hist = dependency_4.cosmos.staking.v1beta1.HistoricalInfo.fromObject(data.hist);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.hist != null) {
                        data.hist = this.hist.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_hist)
                        writer.writeMessage(1, this.hist, () => this.hist.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryHistoricalInfoResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.hist, () => message.hist = dependency_4.cosmos.staking.v1beta1.HistoricalInfo.deserialize(reader));
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
                    return QueryHistoricalInfoResponse.deserialize(bytes);
                }
            }
            _QueryHistoricalInfoResponse_one_of_decls = new WeakMap();
            v1beta1.QueryHistoricalInfoResponse = QueryHistoricalInfoResponse;
            class QueryPoolRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryPoolRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryPoolRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new QueryPoolRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPoolRequest();
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
                    return QueryPoolRequest.deserialize(bytes);
                }
            }
            _QueryPoolRequest_one_of_decls = new WeakMap();
            v1beta1.QueryPoolRequest = QueryPoolRequest;
            class QueryPoolResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryPoolResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryPoolResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("pool" in data && data.pool != undefined) {
                            this.pool = data.pool;
                        }
                    }
                }
                get pool() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.staking.v1beta1.Pool, 1);
                }
                set pool(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_pool() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryPoolResponse({});
                    if (data.pool != null) {
                        message.pool = dependency_4.cosmos.staking.v1beta1.Pool.fromObject(data.pool);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.pool != null) {
                        data.pool = this.pool.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_pool)
                        writer.writeMessage(1, this.pool, () => this.pool.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPoolResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.pool, () => message.pool = dependency_4.cosmos.staking.v1beta1.Pool.deserialize(reader));
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
                    return QueryPoolResponse.deserialize(bytes);
                }
            }
            _QueryPoolResponse_one_of_decls = new WeakMap();
            v1beta1.QueryPoolResponse = QueryPoolResponse;
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
            v1beta1.QueryParamsRequest = QueryParamsRequest;
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
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.staking.v1beta1.Params, 1);
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
                        message.params = dependency_4.cosmos.staking.v1beta1.Params.fromObject(data.params);
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
                                reader.readMessage(message.params, () => message.params = dependency_4.cosmos.staking.v1beta1.Params.deserialize(reader));
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
            class UnimplementedQueryService {
            }
            UnimplementedQueryService.definition = {
                Validators: {
                    path: "/cosmos.staking.v1beta1.Query/Validators",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryValidatorsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryValidatorsResponse.deserialize(new Uint8Array(bytes))
                },
                Validator: {
                    path: "/cosmos.staking.v1beta1.Query/Validator",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryValidatorRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryValidatorResponse.deserialize(new Uint8Array(bytes))
                },
                ValidatorDelegations: {
                    path: "/cosmos.staking.v1beta1.Query/ValidatorDelegations",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryValidatorDelegationsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryValidatorDelegationsResponse.deserialize(new Uint8Array(bytes))
                },
                ValidatorUnbondingDelegations: {
                    path: "/cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryValidatorUnbondingDelegationsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryValidatorUnbondingDelegationsResponse.deserialize(new Uint8Array(bytes))
                },
                Delegation: {
                    path: "/cosmos.staking.v1beta1.Query/Delegation",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryDelegationRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryDelegationResponse.deserialize(new Uint8Array(bytes))
                },
                UnbondingDelegation: {
                    path: "/cosmos.staking.v1beta1.Query/UnbondingDelegation",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryUnbondingDelegationRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryUnbondingDelegationResponse.deserialize(new Uint8Array(bytes))
                },
                DelegatorDelegations: {
                    path: "/cosmos.staking.v1beta1.Query/DelegatorDelegations",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryDelegatorDelegationsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryDelegatorDelegationsResponse.deserialize(new Uint8Array(bytes))
                },
                DelegatorUnbondingDelegations: {
                    path: "/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryDelegatorUnbondingDelegationsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryDelegatorUnbondingDelegationsResponse.deserialize(new Uint8Array(bytes))
                },
                Redelegations: {
                    path: "/cosmos.staking.v1beta1.Query/Redelegations",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryRedelegationsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryRedelegationsResponse.deserialize(new Uint8Array(bytes))
                },
                DelegatorValidators: {
                    path: "/cosmos.staking.v1beta1.Query/DelegatorValidators",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryDelegatorValidatorsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryDelegatorValidatorsResponse.deserialize(new Uint8Array(bytes))
                },
                DelegatorValidator: {
                    path: "/cosmos.staking.v1beta1.Query/DelegatorValidator",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryDelegatorValidatorRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryDelegatorValidatorResponse.deserialize(new Uint8Array(bytes))
                },
                HistoricalInfo: {
                    path: "/cosmos.staking.v1beta1.Query/HistoricalInfo",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryHistoricalInfoRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryHistoricalInfoResponse.deserialize(new Uint8Array(bytes))
                },
                Pool: {
                    path: "/cosmos.staking.v1beta1.Query/Pool",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryPoolRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryPoolResponse.deserialize(new Uint8Array(bytes))
                },
                Params: {
                    path: "/cosmos.staking.v1beta1.Query/Params",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1beta1.UnimplementedQueryService = UnimplementedQueryService;
            class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.Validators = (message, metadata, options, callback) => {
                        return super.Validators(message, metadata, options, callback);
                    };
                    this.Validator = (message, metadata, options, callback) => {
                        return super.Validator(message, metadata, options, callback);
                    };
                    this.ValidatorDelegations = (message, metadata, options, callback) => {
                        return super.ValidatorDelegations(message, metadata, options, callback);
                    };
                    this.ValidatorUnbondingDelegations = (message, metadata, options, callback) => {
                        return super.ValidatorUnbondingDelegations(message, metadata, options, callback);
                    };
                    this.Delegation = (message, metadata, options, callback) => {
                        return super.Delegation(message, metadata, options, callback);
                    };
                    this.UnbondingDelegation = (message, metadata, options, callback) => {
                        return super.UnbondingDelegation(message, metadata, options, callback);
                    };
                    this.DelegatorDelegations = (message, metadata, options, callback) => {
                        return super.DelegatorDelegations(message, metadata, options, callback);
                    };
                    this.DelegatorUnbondingDelegations = (message, metadata, options, callback) => {
                        return super.DelegatorUnbondingDelegations(message, metadata, options, callback);
                    };
                    this.Redelegations = (message, metadata, options, callback) => {
                        return super.Redelegations(message, metadata, options, callback);
                    };
                    this.DelegatorValidators = (message, metadata, options, callback) => {
                        return super.DelegatorValidators(message, metadata, options, callback);
                    };
                    this.DelegatorValidator = (message, metadata, options, callback) => {
                        return super.DelegatorValidator(message, metadata, options, callback);
                    };
                    this.HistoricalInfo = (message, metadata, options, callback) => {
                        return super.HistoricalInfo(message, metadata, options, callback);
                    };
                    this.Pool = (message, metadata, options, callback) => {
                        return super.Pool(message, metadata, options, callback);
                    };
                    this.Params = (message, metadata, options, callback) => {
                        return super.Params(message, metadata, options, callback);
                    };
                }
            }
            v1beta1.QueryClient = QueryClient;
        })(v1beta1 = staking.v1beta1 || (staking.v1beta1 = {}));
    })(staking = cosmos.staking || (cosmos.staking = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=query.js.map