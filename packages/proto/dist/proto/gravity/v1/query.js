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
const dependency_1 = __importStar(require("./genesis"));
const dependency_2 = __importStar(require("./types"));
const dependency_3 = __importStar(require("./msgs"));
const dependency_4 = __importStar(require("./pool"));
const dependency_5 = __importStar(require("./batch"));
const dependency_6 = __importStar(require("./attestation"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var gravity;
(function (gravity) {
    var v1;
    (function (v1) {
        var _QueryParamsRequest_one_of_decls, _QueryParamsResponse_one_of_decls, _QueryCurrentValsetRequest_one_of_decls, _QueryCurrentValsetResponse_one_of_decls, _QueryValsetRequestRequest_one_of_decls, _QueryValsetRequestResponse_one_of_decls, _QueryValsetConfirmRequest_one_of_decls, _QueryValsetConfirmResponse_one_of_decls, _QueryValsetConfirmsByNonceRequest_one_of_decls, _QueryValsetConfirmsByNonceResponse_one_of_decls, _QueryLastValsetRequestsRequest_one_of_decls, _QueryLastValsetRequestsResponse_one_of_decls, _QueryLastPendingValsetRequestByAddrRequest_one_of_decls, _QueryLastPendingValsetRequestByAddrResponse_one_of_decls, _QueryBatchFeeRequest_one_of_decls, _QueryBatchFeeResponse_one_of_decls, _QueryLastPendingBatchRequestByAddrRequest_one_of_decls, _QueryLastPendingBatchRequestByAddrResponse_one_of_decls, _QueryLastPendingLogicCallByAddrRequest_one_of_decls, _QueryLastPendingLogicCallByAddrResponse_one_of_decls, _QueryOutgoingTxBatchesRequest_one_of_decls, _QueryOutgoingTxBatchesResponse_one_of_decls, _QueryOutgoingLogicCallsRequest_one_of_decls, _QueryOutgoingLogicCallsResponse_one_of_decls, _QueryBatchRequestByNonceRequest_one_of_decls, _QueryBatchRequestByNonceResponse_one_of_decls, _QueryBatchConfirmsRequest_one_of_decls, _QueryBatchConfirmsResponse_one_of_decls, _QueryLogicConfirmsRequest_one_of_decls, _QueryLogicConfirmsResponse_one_of_decls, _QueryLastEventNonceByAddrRequest_one_of_decls, _QueryLastEventNonceByAddrResponse_one_of_decls, _QueryERC20ToDenomRequest_one_of_decls, _QueryERC20ToDenomResponse_one_of_decls, _QueryDenomToERC20Request_one_of_decls, _QueryDenomToERC20Response_one_of_decls, _QueryAttestationsRequest_one_of_decls, _QueryAttestationsResponse_one_of_decls, _QueryDelegateKeysByValidatorAddress_one_of_decls, _QueryDelegateKeysByValidatorAddressResponse_one_of_decls, _QueryDelegateKeysByEthAddress_one_of_decls, _QueryDelegateKeysByEthAddressResponse_one_of_decls, _QueryDelegateKeysByOrchestratorAddress_one_of_decls, _QueryDelegateKeysByOrchestratorAddressResponse_one_of_decls, _QueryPendingSendToEth_one_of_decls, _QueryPendingSendToEthResponse_one_of_decls;
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
                return pb_1.Message.getWrapperField(this, dependency_1.gravity.v1.Params, 1);
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
                    message.params = dependency_1.gravity.v1.Params.fromObject(data.params);
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
                            reader.readMessage(message.params, () => message.params = dependency_1.gravity.v1.Params.deserialize(reader));
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
        class QueryCurrentValsetRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryCurrentValsetRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryCurrentValsetRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new QueryCurrentValsetRequest({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCurrentValsetRequest();
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
                return QueryCurrentValsetRequest.deserialize(bytes);
            }
        }
        _QueryCurrentValsetRequest_one_of_decls = new WeakMap();
        v1.QueryCurrentValsetRequest = QueryCurrentValsetRequest;
        class QueryCurrentValsetResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryCurrentValsetResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryCurrentValsetResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("valset" in data && data.valset != undefined) {
                        this.valset = data.valset;
                    }
                }
            }
            get valset() {
                return pb_1.Message.getWrapperField(this, dependency_2.gravity.v1.Valset, 1);
            }
            set valset(value) {
                pb_1.Message.setWrapperField(this, 1, value);
            }
            get has_valset() {
                return pb_1.Message.getField(this, 1) != null;
            }
            static fromObject(data) {
                const message = new QueryCurrentValsetResponse({});
                if (data.valset != null) {
                    message.valset = dependency_2.gravity.v1.Valset.fromObject(data.valset);
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.valset != null) {
                    data.valset = this.valset.toObject();
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.has_valset)
                    writer.writeMessage(1, this.valset, () => this.valset.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCurrentValsetResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.valset, () => message.valset = dependency_2.gravity.v1.Valset.deserialize(reader));
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
                return QueryCurrentValsetResponse.deserialize(bytes);
            }
        }
        _QueryCurrentValsetResponse_one_of_decls = new WeakMap();
        v1.QueryCurrentValsetResponse = QueryCurrentValsetResponse;
        class QueryValsetRequestRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryValsetRequestRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryValsetRequestRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                }
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryValsetRequestRequest({});
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
                if (this.nonce != 0)
                    writer.writeUint64(1, this.nonce);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValsetRequestRequest();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.nonce = reader.readUint64();
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
                return QueryValsetRequestRequest.deserialize(bytes);
            }
        }
        _QueryValsetRequestRequest_one_of_decls = new WeakMap();
        v1.QueryValsetRequestRequest = QueryValsetRequestRequest;
        class QueryValsetRequestResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryValsetRequestResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryValsetRequestResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("valset" in data && data.valset != undefined) {
                        this.valset = data.valset;
                    }
                }
            }
            get valset() {
                return pb_1.Message.getWrapperField(this, dependency_2.gravity.v1.Valset, 1);
            }
            set valset(value) {
                pb_1.Message.setWrapperField(this, 1, value);
            }
            get has_valset() {
                return pb_1.Message.getField(this, 1) != null;
            }
            static fromObject(data) {
                const message = new QueryValsetRequestResponse({});
                if (data.valset != null) {
                    message.valset = dependency_2.gravity.v1.Valset.fromObject(data.valset);
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.valset != null) {
                    data.valset = this.valset.toObject();
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.has_valset)
                    writer.writeMessage(1, this.valset, () => this.valset.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValsetRequestResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.valset, () => message.valset = dependency_2.gravity.v1.Valset.deserialize(reader));
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
                return QueryValsetRequestResponse.deserialize(bytes);
            }
        }
        _QueryValsetRequestResponse_one_of_decls = new WeakMap();
        v1.QueryValsetRequestResponse = QueryValsetRequestResponse;
        class QueryValsetConfirmRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryValsetConfirmRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryValsetConfirmRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                    if ("address" in data && data.address != undefined) {
                        this.address = data.address;
                    }
                }
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get address() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set address(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new QueryValsetConfirmRequest({});
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                if (data.address != null) {
                    message.address = data.address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                if (this.address != null) {
                    data.address = this.address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.nonce != 0)
                    writer.writeUint64(1, this.nonce);
                if (this.address.length)
                    writer.writeString(2, this.address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValsetConfirmRequest();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.nonce = reader.readUint64();
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
                return QueryValsetConfirmRequest.deserialize(bytes);
            }
        }
        _QueryValsetConfirmRequest_one_of_decls = new WeakMap();
        v1.QueryValsetConfirmRequest = QueryValsetConfirmRequest;
        class QueryValsetConfirmResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryValsetConfirmResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryValsetConfirmResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("confirm" in data && data.confirm != undefined) {
                        this.confirm = data.confirm;
                    }
                }
            }
            get confirm() {
                return pb_1.Message.getWrapperField(this, dependency_3.gravity.v1.MsgValsetConfirm, 1);
            }
            set confirm(value) {
                pb_1.Message.setWrapperField(this, 1, value);
            }
            get has_confirm() {
                return pb_1.Message.getField(this, 1) != null;
            }
            static fromObject(data) {
                const message = new QueryValsetConfirmResponse({});
                if (data.confirm != null) {
                    message.confirm = dependency_3.gravity.v1.MsgValsetConfirm.fromObject(data.confirm);
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.confirm != null) {
                    data.confirm = this.confirm.toObject();
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.has_confirm)
                    writer.writeMessage(1, this.confirm, () => this.confirm.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValsetConfirmResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.confirm, () => message.confirm = dependency_3.gravity.v1.MsgValsetConfirm.deserialize(reader));
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
                return QueryValsetConfirmResponse.deserialize(bytes);
            }
        }
        _QueryValsetConfirmResponse_one_of_decls = new WeakMap();
        v1.QueryValsetConfirmResponse = QueryValsetConfirmResponse;
        class QueryValsetConfirmsByNonceRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryValsetConfirmsByNonceRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryValsetConfirmsByNonceRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                }
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryValsetConfirmsByNonceRequest({});
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
                if (this.nonce != 0)
                    writer.writeUint64(1, this.nonce);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValsetConfirmsByNonceRequest();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.nonce = reader.readUint64();
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
                return QueryValsetConfirmsByNonceRequest.deserialize(bytes);
            }
        }
        _QueryValsetConfirmsByNonceRequest_one_of_decls = new WeakMap();
        v1.QueryValsetConfirmsByNonceRequest = QueryValsetConfirmsByNonceRequest;
        class QueryValsetConfirmsByNonceResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryValsetConfirmsByNonceResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryValsetConfirmsByNonceResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("confirms" in data && data.confirms != undefined) {
                        this.confirms = data.confirms;
                    }
                }
            }
            get confirms() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_3.gravity.v1.MsgValsetConfirm, 1);
            }
            set confirms(value) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryValsetConfirmsByNonceResponse({});
                if (data.confirms != null) {
                    message.confirms = data.confirms.map(item => dependency_3.gravity.v1.MsgValsetConfirm.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.confirms != null) {
                    data.confirms = this.confirms.map((item) => item.toObject());
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.confirms.length)
                    writer.writeRepeatedMessage(1, this.confirms, (item) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryValsetConfirmsByNonceResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.confirms, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.gravity.v1.MsgValsetConfirm.deserialize(reader), dependency_3.gravity.v1.MsgValsetConfirm));
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
                return QueryValsetConfirmsByNonceResponse.deserialize(bytes);
            }
        }
        _QueryValsetConfirmsByNonceResponse_one_of_decls = new WeakMap();
        v1.QueryValsetConfirmsByNonceResponse = QueryValsetConfirmsByNonceResponse;
        class QueryLastValsetRequestsRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryLastValsetRequestsRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryLastValsetRequestsRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new QueryLastValsetRequestsRequest({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryLastValsetRequestsRequest();
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
                return QueryLastValsetRequestsRequest.deserialize(bytes);
            }
        }
        _QueryLastValsetRequestsRequest_one_of_decls = new WeakMap();
        v1.QueryLastValsetRequestsRequest = QueryLastValsetRequestsRequest;
        class QueryLastValsetRequestsResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryLastValsetRequestsResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryLastValsetRequestsResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("valsets" in data && data.valsets != undefined) {
                        this.valsets = data.valsets;
                    }
                }
            }
            get valsets() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_2.gravity.v1.Valset, 1);
            }
            set valsets(value) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryLastValsetRequestsResponse({});
                if (data.valsets != null) {
                    message.valsets = data.valsets.map(item => dependency_2.gravity.v1.Valset.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.valsets != null) {
                    data.valsets = this.valsets.map((item) => item.toObject());
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.valsets.length)
                    writer.writeRepeatedMessage(1, this.valsets, (item) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryLastValsetRequestsResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.valsets, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.gravity.v1.Valset.deserialize(reader), dependency_2.gravity.v1.Valset));
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
                return QueryLastValsetRequestsResponse.deserialize(bytes);
            }
        }
        _QueryLastValsetRequestsResponse_one_of_decls = new WeakMap();
        v1.QueryLastValsetRequestsResponse = QueryLastValsetRequestsResponse;
        class QueryLastPendingValsetRequestByAddrRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryLastPendingValsetRequestByAddrRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryLastPendingValsetRequestByAddrRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("address" in data && data.address != undefined) {
                        this.address = data.address;
                    }
                }
            }
            get address() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set address(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryLastPendingValsetRequestByAddrRequest({});
                if (data.address != null) {
                    message.address = data.address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.address != null) {
                    data.address = this.address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.address.length)
                    writer.writeString(1, this.address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryLastPendingValsetRequestByAddrRequest();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
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
                return QueryLastPendingValsetRequestByAddrRequest.deserialize(bytes);
            }
        }
        _QueryLastPendingValsetRequestByAddrRequest_one_of_decls = new WeakMap();
        v1.QueryLastPendingValsetRequestByAddrRequest = QueryLastPendingValsetRequestByAddrRequest;
        class QueryLastPendingValsetRequestByAddrResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryLastPendingValsetRequestByAddrResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryLastPendingValsetRequestByAddrResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("valsets" in data && data.valsets != undefined) {
                        this.valsets = data.valsets;
                    }
                }
            }
            get valsets() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_2.gravity.v1.Valset, 1);
            }
            set valsets(value) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryLastPendingValsetRequestByAddrResponse({});
                if (data.valsets != null) {
                    message.valsets = data.valsets.map(item => dependency_2.gravity.v1.Valset.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.valsets != null) {
                    data.valsets = this.valsets.map((item) => item.toObject());
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.valsets.length)
                    writer.writeRepeatedMessage(1, this.valsets, (item) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryLastPendingValsetRequestByAddrResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.valsets, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.gravity.v1.Valset.deserialize(reader), dependency_2.gravity.v1.Valset));
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
                return QueryLastPendingValsetRequestByAddrResponse.deserialize(bytes);
            }
        }
        _QueryLastPendingValsetRequestByAddrResponse_one_of_decls = new WeakMap();
        v1.QueryLastPendingValsetRequestByAddrResponse = QueryLastPendingValsetRequestByAddrResponse;
        class QueryBatchFeeRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryBatchFeeRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryBatchFeeRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new QueryBatchFeeRequest({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBatchFeeRequest();
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
                return QueryBatchFeeRequest.deserialize(bytes);
            }
        }
        _QueryBatchFeeRequest_one_of_decls = new WeakMap();
        v1.QueryBatchFeeRequest = QueryBatchFeeRequest;
        class QueryBatchFeeResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryBatchFeeResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryBatchFeeResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("batch_fees" in data && data.batch_fees != undefined) {
                        this.batch_fees = data.batch_fees;
                    }
                }
            }
            get batch_fees() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_4.gravity.v1.BatchFees, 1);
            }
            set batch_fees(value) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryBatchFeeResponse({});
                if (data.batch_fees != null) {
                    message.batch_fees = data.batch_fees.map(item => dependency_4.gravity.v1.BatchFees.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.batch_fees != null) {
                    data.batch_fees = this.batch_fees.map((item) => item.toObject());
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.batch_fees.length)
                    writer.writeRepeatedMessage(1, this.batch_fees, (item) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBatchFeeResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.batch_fees, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.gravity.v1.BatchFees.deserialize(reader), dependency_4.gravity.v1.BatchFees));
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
                return QueryBatchFeeResponse.deserialize(bytes);
            }
        }
        _QueryBatchFeeResponse_one_of_decls = new WeakMap();
        v1.QueryBatchFeeResponse = QueryBatchFeeResponse;
        class QueryLastPendingBatchRequestByAddrRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryLastPendingBatchRequestByAddrRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryLastPendingBatchRequestByAddrRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("address" in data && data.address != undefined) {
                        this.address = data.address;
                    }
                }
            }
            get address() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set address(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryLastPendingBatchRequestByAddrRequest({});
                if (data.address != null) {
                    message.address = data.address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.address != null) {
                    data.address = this.address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.address.length)
                    writer.writeString(1, this.address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryLastPendingBatchRequestByAddrRequest();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
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
                return QueryLastPendingBatchRequestByAddrRequest.deserialize(bytes);
            }
        }
        _QueryLastPendingBatchRequestByAddrRequest_one_of_decls = new WeakMap();
        v1.QueryLastPendingBatchRequestByAddrRequest = QueryLastPendingBatchRequestByAddrRequest;
        class QueryLastPendingBatchRequestByAddrResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryLastPendingBatchRequestByAddrResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryLastPendingBatchRequestByAddrResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("batch" in data && data.batch != undefined) {
                        this.batch = data.batch;
                    }
                }
            }
            get batch() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_5.gravity.v1.OutgoingTxBatch, 1);
            }
            set batch(value) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryLastPendingBatchRequestByAddrResponse({});
                if (data.batch != null) {
                    message.batch = data.batch.map(item => dependency_5.gravity.v1.OutgoingTxBatch.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.batch != null) {
                    data.batch = this.batch.map((item) => item.toObject());
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.batch.length)
                    writer.writeRepeatedMessage(1, this.batch, (item) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryLastPendingBatchRequestByAddrResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.batch, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.gravity.v1.OutgoingTxBatch.deserialize(reader), dependency_5.gravity.v1.OutgoingTxBatch));
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
                return QueryLastPendingBatchRequestByAddrResponse.deserialize(bytes);
            }
        }
        _QueryLastPendingBatchRequestByAddrResponse_one_of_decls = new WeakMap();
        v1.QueryLastPendingBatchRequestByAddrResponse = QueryLastPendingBatchRequestByAddrResponse;
        class QueryLastPendingLogicCallByAddrRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryLastPendingLogicCallByAddrRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryLastPendingLogicCallByAddrRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("address" in data && data.address != undefined) {
                        this.address = data.address;
                    }
                }
            }
            get address() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set address(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryLastPendingLogicCallByAddrRequest({});
                if (data.address != null) {
                    message.address = data.address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.address != null) {
                    data.address = this.address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.address.length)
                    writer.writeString(1, this.address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryLastPendingLogicCallByAddrRequest();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
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
                return QueryLastPendingLogicCallByAddrRequest.deserialize(bytes);
            }
        }
        _QueryLastPendingLogicCallByAddrRequest_one_of_decls = new WeakMap();
        v1.QueryLastPendingLogicCallByAddrRequest = QueryLastPendingLogicCallByAddrRequest;
        class QueryLastPendingLogicCallByAddrResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryLastPendingLogicCallByAddrResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryLastPendingLogicCallByAddrResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("call" in data && data.call != undefined) {
                        this.call = data.call;
                    }
                }
            }
            get call() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_5.gravity.v1.OutgoingLogicCall, 1);
            }
            set call(value) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryLastPendingLogicCallByAddrResponse({});
                if (data.call != null) {
                    message.call = data.call.map(item => dependency_5.gravity.v1.OutgoingLogicCall.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.call != null) {
                    data.call = this.call.map((item) => item.toObject());
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.call.length)
                    writer.writeRepeatedMessage(1, this.call, (item) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryLastPendingLogicCallByAddrResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.call, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.gravity.v1.OutgoingLogicCall.deserialize(reader), dependency_5.gravity.v1.OutgoingLogicCall));
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
                return QueryLastPendingLogicCallByAddrResponse.deserialize(bytes);
            }
        }
        _QueryLastPendingLogicCallByAddrResponse_one_of_decls = new WeakMap();
        v1.QueryLastPendingLogicCallByAddrResponse = QueryLastPendingLogicCallByAddrResponse;
        class QueryOutgoingTxBatchesRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryOutgoingTxBatchesRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryOutgoingTxBatchesRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new QueryOutgoingTxBatchesRequest({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryOutgoingTxBatchesRequest();
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
                return QueryOutgoingTxBatchesRequest.deserialize(bytes);
            }
        }
        _QueryOutgoingTxBatchesRequest_one_of_decls = new WeakMap();
        v1.QueryOutgoingTxBatchesRequest = QueryOutgoingTxBatchesRequest;
        class QueryOutgoingTxBatchesResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryOutgoingTxBatchesResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryOutgoingTxBatchesResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("batches" in data && data.batches != undefined) {
                        this.batches = data.batches;
                    }
                }
            }
            get batches() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_5.gravity.v1.OutgoingTxBatch, 1);
            }
            set batches(value) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryOutgoingTxBatchesResponse({});
                if (data.batches != null) {
                    message.batches = data.batches.map(item => dependency_5.gravity.v1.OutgoingTxBatch.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.batches != null) {
                    data.batches = this.batches.map((item) => item.toObject());
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.batches.length)
                    writer.writeRepeatedMessage(1, this.batches, (item) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryOutgoingTxBatchesResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.batches, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.gravity.v1.OutgoingTxBatch.deserialize(reader), dependency_5.gravity.v1.OutgoingTxBatch));
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
                return QueryOutgoingTxBatchesResponse.deserialize(bytes);
            }
        }
        _QueryOutgoingTxBatchesResponse_one_of_decls = new WeakMap();
        v1.QueryOutgoingTxBatchesResponse = QueryOutgoingTxBatchesResponse;
        class QueryOutgoingLogicCallsRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryOutgoingLogicCallsRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryOutgoingLogicCallsRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            static fromObject(data) {
                const message = new QueryOutgoingLogicCallsRequest({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryOutgoingLogicCallsRequest();
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
                return QueryOutgoingLogicCallsRequest.deserialize(bytes);
            }
        }
        _QueryOutgoingLogicCallsRequest_one_of_decls = new WeakMap();
        v1.QueryOutgoingLogicCallsRequest = QueryOutgoingLogicCallsRequest;
        class QueryOutgoingLogicCallsResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryOutgoingLogicCallsResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryOutgoingLogicCallsResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("calls" in data && data.calls != undefined) {
                        this.calls = data.calls;
                    }
                }
            }
            get calls() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_5.gravity.v1.OutgoingLogicCall, 1);
            }
            set calls(value) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryOutgoingLogicCallsResponse({});
                if (data.calls != null) {
                    message.calls = data.calls.map(item => dependency_5.gravity.v1.OutgoingLogicCall.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.calls != null) {
                    data.calls = this.calls.map((item) => item.toObject());
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.calls.length)
                    writer.writeRepeatedMessage(1, this.calls, (item) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryOutgoingLogicCallsResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.calls, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.gravity.v1.OutgoingLogicCall.deserialize(reader), dependency_5.gravity.v1.OutgoingLogicCall));
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
                return QueryOutgoingLogicCallsResponse.deserialize(bytes);
            }
        }
        _QueryOutgoingLogicCallsResponse_one_of_decls = new WeakMap();
        v1.QueryOutgoingLogicCallsResponse = QueryOutgoingLogicCallsResponse;
        class QueryBatchRequestByNonceRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryBatchRequestByNonceRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryBatchRequestByNonceRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                    if ("contract_address" in data && data.contract_address != undefined) {
                        this.contract_address = data.contract_address;
                    }
                }
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get contract_address() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set contract_address(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new QueryBatchRequestByNonceRequest({});
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                if (data.contract_address != null) {
                    message.contract_address = data.contract_address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                if (this.contract_address != null) {
                    data.contract_address = this.contract_address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.nonce != 0)
                    writer.writeUint64(1, this.nonce);
                if (this.contract_address.length)
                    writer.writeString(2, this.contract_address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBatchRequestByNonceRequest();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.nonce = reader.readUint64();
                            break;
                        case 2:
                            message.contract_address = reader.readString();
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
                return QueryBatchRequestByNonceRequest.deserialize(bytes);
            }
        }
        _QueryBatchRequestByNonceRequest_one_of_decls = new WeakMap();
        v1.QueryBatchRequestByNonceRequest = QueryBatchRequestByNonceRequest;
        class QueryBatchRequestByNonceResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryBatchRequestByNonceResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryBatchRequestByNonceResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("batch" in data && data.batch != undefined) {
                        this.batch = data.batch;
                    }
                }
            }
            get batch() {
                return pb_1.Message.getWrapperField(this, dependency_5.gravity.v1.OutgoingTxBatch, 1);
            }
            set batch(value) {
                pb_1.Message.setWrapperField(this, 1, value);
            }
            get has_batch() {
                return pb_1.Message.getField(this, 1) != null;
            }
            static fromObject(data) {
                const message = new QueryBatchRequestByNonceResponse({});
                if (data.batch != null) {
                    message.batch = dependency_5.gravity.v1.OutgoingTxBatch.fromObject(data.batch);
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.batch != null) {
                    data.batch = this.batch.toObject();
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.has_batch)
                    writer.writeMessage(1, this.batch, () => this.batch.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBatchRequestByNonceResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.batch, () => message.batch = dependency_5.gravity.v1.OutgoingTxBatch.deserialize(reader));
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
                return QueryBatchRequestByNonceResponse.deserialize(bytes);
            }
        }
        _QueryBatchRequestByNonceResponse_one_of_decls = new WeakMap();
        v1.QueryBatchRequestByNonceResponse = QueryBatchRequestByNonceResponse;
        class QueryBatchConfirmsRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryBatchConfirmsRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryBatchConfirmsRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                    if ("contract_address" in data && data.contract_address != undefined) {
                        this.contract_address = data.contract_address;
                    }
                }
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get contract_address() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set contract_address(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new QueryBatchConfirmsRequest({});
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                if (data.contract_address != null) {
                    message.contract_address = data.contract_address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                if (this.contract_address != null) {
                    data.contract_address = this.contract_address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.nonce != 0)
                    writer.writeUint64(1, this.nonce);
                if (this.contract_address.length)
                    writer.writeString(2, this.contract_address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBatchConfirmsRequest();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.nonce = reader.readUint64();
                            break;
                        case 2:
                            message.contract_address = reader.readString();
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
                return QueryBatchConfirmsRequest.deserialize(bytes);
            }
        }
        _QueryBatchConfirmsRequest_one_of_decls = new WeakMap();
        v1.QueryBatchConfirmsRequest = QueryBatchConfirmsRequest;
        class QueryBatchConfirmsResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryBatchConfirmsResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryBatchConfirmsResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("confirms" in data && data.confirms != undefined) {
                        this.confirms = data.confirms;
                    }
                }
            }
            get confirms() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_3.gravity.v1.MsgConfirmBatch, 1);
            }
            set confirms(value) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryBatchConfirmsResponse({});
                if (data.confirms != null) {
                    message.confirms = data.confirms.map(item => dependency_3.gravity.v1.MsgConfirmBatch.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.confirms != null) {
                    data.confirms = this.confirms.map((item) => item.toObject());
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.confirms.length)
                    writer.writeRepeatedMessage(1, this.confirms, (item) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBatchConfirmsResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.confirms, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.gravity.v1.MsgConfirmBatch.deserialize(reader), dependency_3.gravity.v1.MsgConfirmBatch));
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
                return QueryBatchConfirmsResponse.deserialize(bytes);
            }
        }
        _QueryBatchConfirmsResponse_one_of_decls = new WeakMap();
        v1.QueryBatchConfirmsResponse = QueryBatchConfirmsResponse;
        class QueryLogicConfirmsRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryLogicConfirmsRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryLogicConfirmsRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("invalidation_id" in data && data.invalidation_id != undefined) {
                        this.invalidation_id = data.invalidation_id;
                    }
                    if ("invalidation_nonce" in data && data.invalidation_nonce != undefined) {
                        this.invalidation_nonce = data.invalidation_nonce;
                    }
                }
            }
            get invalidation_id() {
                return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
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
            static fromObject(data) {
                const message = new QueryLogicConfirmsRequest({});
                if (data.invalidation_id != null) {
                    message.invalidation_id = data.invalidation_id;
                }
                if (data.invalidation_nonce != null) {
                    message.invalidation_nonce = data.invalidation_nonce;
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
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.invalidation_id.length)
                    writer.writeBytes(1, this.invalidation_id);
                if (this.invalidation_nonce != 0)
                    writer.writeUint64(2, this.invalidation_nonce);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryLogicConfirmsRequest();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.invalidation_id = reader.readBytes();
                            break;
                        case 2:
                            message.invalidation_nonce = reader.readUint64();
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
                return QueryLogicConfirmsRequest.deserialize(bytes);
            }
        }
        _QueryLogicConfirmsRequest_one_of_decls = new WeakMap();
        v1.QueryLogicConfirmsRequest = QueryLogicConfirmsRequest;
        class QueryLogicConfirmsResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryLogicConfirmsResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryLogicConfirmsResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("confirms" in data && data.confirms != undefined) {
                        this.confirms = data.confirms;
                    }
                }
            }
            get confirms() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_3.gravity.v1.MsgConfirmLogicCall, 1);
            }
            set confirms(value) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryLogicConfirmsResponse({});
                if (data.confirms != null) {
                    message.confirms = data.confirms.map(item => dependency_3.gravity.v1.MsgConfirmLogicCall.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.confirms != null) {
                    data.confirms = this.confirms.map((item) => item.toObject());
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.confirms.length)
                    writer.writeRepeatedMessage(1, this.confirms, (item) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryLogicConfirmsResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.confirms, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.gravity.v1.MsgConfirmLogicCall.deserialize(reader), dependency_3.gravity.v1.MsgConfirmLogicCall));
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
                return QueryLogicConfirmsResponse.deserialize(bytes);
            }
        }
        _QueryLogicConfirmsResponse_one_of_decls = new WeakMap();
        v1.QueryLogicConfirmsResponse = QueryLogicConfirmsResponse;
        class QueryLastEventNonceByAddrRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryLastEventNonceByAddrRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryLastEventNonceByAddrRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("address" in data && data.address != undefined) {
                        this.address = data.address;
                    }
                }
            }
            get address() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set address(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryLastEventNonceByAddrRequest({});
                if (data.address != null) {
                    message.address = data.address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.address != null) {
                    data.address = this.address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.address.length)
                    writer.writeString(1, this.address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryLastEventNonceByAddrRequest();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
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
                return QueryLastEventNonceByAddrRequest.deserialize(bytes);
            }
        }
        _QueryLastEventNonceByAddrRequest_one_of_decls = new WeakMap();
        v1.QueryLastEventNonceByAddrRequest = QueryLastEventNonceByAddrRequest;
        class QueryLastEventNonceByAddrResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryLastEventNonceByAddrResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryLastEventNonceByAddrResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("event_nonce" in data && data.event_nonce != undefined) {
                        this.event_nonce = data.event_nonce;
                    }
                }
            }
            get event_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set event_nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryLastEventNonceByAddrResponse({});
                if (data.event_nonce != null) {
                    message.event_nonce = data.event_nonce;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.event_nonce != null) {
                    data.event_nonce = this.event_nonce;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.event_nonce != 0)
                    writer.writeUint64(1, this.event_nonce);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryLastEventNonceByAddrResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.event_nonce = reader.readUint64();
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
                return QueryLastEventNonceByAddrResponse.deserialize(bytes);
            }
        }
        _QueryLastEventNonceByAddrResponse_one_of_decls = new WeakMap();
        v1.QueryLastEventNonceByAddrResponse = QueryLastEventNonceByAddrResponse;
        class QueryERC20ToDenomRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryERC20ToDenomRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryERC20ToDenomRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("erc20" in data && data.erc20 != undefined) {
                        this.erc20 = data.erc20;
                    }
                }
            }
            get erc20() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set erc20(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryERC20ToDenomRequest({});
                if (data.erc20 != null) {
                    message.erc20 = data.erc20;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.erc20 != null) {
                    data.erc20 = this.erc20;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.erc20.length)
                    writer.writeString(1, this.erc20);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryERC20ToDenomRequest();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.erc20 = reader.readString();
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
                return QueryERC20ToDenomRequest.deserialize(bytes);
            }
        }
        _QueryERC20ToDenomRequest_one_of_decls = new WeakMap();
        v1.QueryERC20ToDenomRequest = QueryERC20ToDenomRequest;
        class QueryERC20ToDenomResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryERC20ToDenomResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryERC20ToDenomResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("denom" in data && data.denom != undefined) {
                        this.denom = data.denom;
                    }
                    if ("cosmos_originated" in data && data.cosmos_originated != undefined) {
                        this.cosmos_originated = data.cosmos_originated;
                    }
                }
            }
            get denom() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set denom(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get cosmos_originated() {
                return pb_1.Message.getFieldWithDefault(this, 2, false);
            }
            set cosmos_originated(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new QueryERC20ToDenomResponse({});
                if (data.denom != null) {
                    message.denom = data.denom;
                }
                if (data.cosmos_originated != null) {
                    message.cosmos_originated = data.cosmos_originated;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.denom != null) {
                    data.denom = this.denom;
                }
                if (this.cosmos_originated != null) {
                    data.cosmos_originated = this.cosmos_originated;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.denom.length)
                    writer.writeString(1, this.denom);
                if (this.cosmos_originated != false)
                    writer.writeBool(2, this.cosmos_originated);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryERC20ToDenomResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.denom = reader.readString();
                            break;
                        case 2:
                            message.cosmos_originated = reader.readBool();
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
                return QueryERC20ToDenomResponse.deserialize(bytes);
            }
        }
        _QueryERC20ToDenomResponse_one_of_decls = new WeakMap();
        v1.QueryERC20ToDenomResponse = QueryERC20ToDenomResponse;
        class QueryDenomToERC20Request extends pb_1.Message {
            constructor(data) {
                super();
                _QueryDenomToERC20Request_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDenomToERC20Request_one_of_decls, "f"));
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
                const message = new QueryDenomToERC20Request({});
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
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDenomToERC20Request();
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
                return QueryDenomToERC20Request.deserialize(bytes);
            }
        }
        _QueryDenomToERC20Request_one_of_decls = new WeakMap();
        v1.QueryDenomToERC20Request = QueryDenomToERC20Request;
        class QueryDenomToERC20Response extends pb_1.Message {
            constructor(data) {
                super();
                _QueryDenomToERC20Response_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDenomToERC20Response_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("erc20" in data && data.erc20 != undefined) {
                        this.erc20 = data.erc20;
                    }
                    if ("cosmos_originated" in data && data.cosmos_originated != undefined) {
                        this.cosmos_originated = data.cosmos_originated;
                    }
                }
            }
            get erc20() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set erc20(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get cosmos_originated() {
                return pb_1.Message.getFieldWithDefault(this, 2, false);
            }
            set cosmos_originated(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new QueryDenomToERC20Response({});
                if (data.erc20 != null) {
                    message.erc20 = data.erc20;
                }
                if (data.cosmos_originated != null) {
                    message.cosmos_originated = data.cosmos_originated;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.erc20 != null) {
                    data.erc20 = this.erc20;
                }
                if (this.cosmos_originated != null) {
                    data.cosmos_originated = this.cosmos_originated;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.erc20.length)
                    writer.writeString(1, this.erc20);
                if (this.cosmos_originated != false)
                    writer.writeBool(2, this.cosmos_originated);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDenomToERC20Response();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.erc20 = reader.readString();
                            break;
                        case 2:
                            message.cosmos_originated = reader.readBool();
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
                return QueryDenomToERC20Response.deserialize(bytes);
            }
        }
        _QueryDenomToERC20Response_one_of_decls = new WeakMap();
        v1.QueryDenomToERC20Response = QueryDenomToERC20Response;
        class QueryAttestationsRequest extends pb_1.Message {
            constructor(data) {
                super();
                _QueryAttestationsRequest_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryAttestationsRequest_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("limit" in data && data.limit != undefined) {
                        this.limit = data.limit;
                    }
                    if ("order_by" in data && data.order_by != undefined) {
                        this.order_by = data.order_by;
                    }
                    if ("claim_type" in data && data.claim_type != undefined) {
                        this.claim_type = data.claim_type;
                    }
                    if ("nonce" in data && data.nonce != undefined) {
                        this.nonce = data.nonce;
                    }
                    if ("height" in data && data.height != undefined) {
                        this.height = data.height;
                    }
                }
            }
            get limit() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set limit(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get order_by() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set order_by(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get claim_type() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set claim_type(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get nonce() {
                return pb_1.Message.getFieldWithDefault(this, 4, 0);
            }
            set nonce(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get height() {
                return pb_1.Message.getFieldWithDefault(this, 5, 0);
            }
            set height(value) {
                pb_1.Message.setField(this, 5, value);
            }
            static fromObject(data) {
                const message = new QueryAttestationsRequest({});
                if (data.limit != null) {
                    message.limit = data.limit;
                }
                if (data.order_by != null) {
                    message.order_by = data.order_by;
                }
                if (data.claim_type != null) {
                    message.claim_type = data.claim_type;
                }
                if (data.nonce != null) {
                    message.nonce = data.nonce;
                }
                if (data.height != null) {
                    message.height = data.height;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.limit != null) {
                    data.limit = this.limit;
                }
                if (this.order_by != null) {
                    data.order_by = this.order_by;
                }
                if (this.claim_type != null) {
                    data.claim_type = this.claim_type;
                }
                if (this.nonce != null) {
                    data.nonce = this.nonce;
                }
                if (this.height != null) {
                    data.height = this.height;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.limit != 0)
                    writer.writeUint64(1, this.limit);
                if (this.order_by.length)
                    writer.writeString(2, this.order_by);
                if (this.claim_type.length)
                    writer.writeString(3, this.claim_type);
                if (this.nonce != 0)
                    writer.writeUint64(4, this.nonce);
                if (this.height != 0)
                    writer.writeUint64(5, this.height);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAttestationsRequest();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.limit = reader.readUint64();
                            break;
                        case 2:
                            message.order_by = reader.readString();
                            break;
                        case 3:
                            message.claim_type = reader.readString();
                            break;
                        case 4:
                            message.nonce = reader.readUint64();
                            break;
                        case 5:
                            message.height = reader.readUint64();
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
                return QueryAttestationsRequest.deserialize(bytes);
            }
        }
        _QueryAttestationsRequest_one_of_decls = new WeakMap();
        v1.QueryAttestationsRequest = QueryAttestationsRequest;
        class QueryAttestationsResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryAttestationsResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryAttestationsResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("attestations" in data && data.attestations != undefined) {
                        this.attestations = data.attestations;
                    }
                }
            }
            get attestations() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_6.gravity.v1.Attestation, 1);
            }
            set attestations(value) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryAttestationsResponse({});
                if (data.attestations != null) {
                    message.attestations = data.attestations.map(item => dependency_6.gravity.v1.Attestation.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.attestations != null) {
                    data.attestations = this.attestations.map((item) => item.toObject());
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.attestations.length)
                    writer.writeRepeatedMessage(1, this.attestations, (item) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAttestationsResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.attestations, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_6.gravity.v1.Attestation.deserialize(reader), dependency_6.gravity.v1.Attestation));
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
                return QueryAttestationsResponse.deserialize(bytes);
            }
        }
        _QueryAttestationsResponse_one_of_decls = new WeakMap();
        v1.QueryAttestationsResponse = QueryAttestationsResponse;
        class QueryDelegateKeysByValidatorAddress extends pb_1.Message {
            constructor(data) {
                super();
                _QueryDelegateKeysByValidatorAddress_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDelegateKeysByValidatorAddress_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("validator_address" in data && data.validator_address != undefined) {
                        this.validator_address = data.validator_address;
                    }
                }
            }
            get validator_address() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set validator_address(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryDelegateKeysByValidatorAddress({});
                if (data.validator_address != null) {
                    message.validator_address = data.validator_address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.validator_address != null) {
                    data.validator_address = this.validator_address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.validator_address.length)
                    writer.writeString(1, this.validator_address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegateKeysByValidatorAddress();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.validator_address = reader.readString();
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
                return QueryDelegateKeysByValidatorAddress.deserialize(bytes);
            }
        }
        _QueryDelegateKeysByValidatorAddress_one_of_decls = new WeakMap();
        v1.QueryDelegateKeysByValidatorAddress = QueryDelegateKeysByValidatorAddress;
        class QueryDelegateKeysByValidatorAddressResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryDelegateKeysByValidatorAddressResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDelegateKeysByValidatorAddressResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("eth_address" in data && data.eth_address != undefined) {
                        this.eth_address = data.eth_address;
                    }
                    if ("orchestrator_address" in data && data.orchestrator_address != undefined) {
                        this.orchestrator_address = data.orchestrator_address;
                    }
                }
            }
            get eth_address() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set eth_address(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get orchestrator_address() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set orchestrator_address(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new QueryDelegateKeysByValidatorAddressResponse({});
                if (data.eth_address != null) {
                    message.eth_address = data.eth_address;
                }
                if (data.orchestrator_address != null) {
                    message.orchestrator_address = data.orchestrator_address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.eth_address != null) {
                    data.eth_address = this.eth_address;
                }
                if (this.orchestrator_address != null) {
                    data.orchestrator_address = this.orchestrator_address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.eth_address.length)
                    writer.writeString(1, this.eth_address);
                if (this.orchestrator_address.length)
                    writer.writeString(2, this.orchestrator_address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegateKeysByValidatorAddressResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.eth_address = reader.readString();
                            break;
                        case 2:
                            message.orchestrator_address = reader.readString();
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
                return QueryDelegateKeysByValidatorAddressResponse.deserialize(bytes);
            }
        }
        _QueryDelegateKeysByValidatorAddressResponse_one_of_decls = new WeakMap();
        v1.QueryDelegateKeysByValidatorAddressResponse = QueryDelegateKeysByValidatorAddressResponse;
        class QueryDelegateKeysByEthAddress extends pb_1.Message {
            constructor(data) {
                super();
                _QueryDelegateKeysByEthAddress_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDelegateKeysByEthAddress_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("eth_address" in data && data.eth_address != undefined) {
                        this.eth_address = data.eth_address;
                    }
                }
            }
            get eth_address() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set eth_address(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryDelegateKeysByEthAddress({});
                if (data.eth_address != null) {
                    message.eth_address = data.eth_address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.eth_address != null) {
                    data.eth_address = this.eth_address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.eth_address.length)
                    writer.writeString(1, this.eth_address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegateKeysByEthAddress();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
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
                return QueryDelegateKeysByEthAddress.deserialize(bytes);
            }
        }
        _QueryDelegateKeysByEthAddress_one_of_decls = new WeakMap();
        v1.QueryDelegateKeysByEthAddress = QueryDelegateKeysByEthAddress;
        class QueryDelegateKeysByEthAddressResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryDelegateKeysByEthAddressResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDelegateKeysByEthAddressResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("validator_address" in data && data.validator_address != undefined) {
                        this.validator_address = data.validator_address;
                    }
                    if ("orchestrator_address" in data && data.orchestrator_address != undefined) {
                        this.orchestrator_address = data.orchestrator_address;
                    }
                }
            }
            get validator_address() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set validator_address(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get orchestrator_address() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set orchestrator_address(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new QueryDelegateKeysByEthAddressResponse({});
                if (data.validator_address != null) {
                    message.validator_address = data.validator_address;
                }
                if (data.orchestrator_address != null) {
                    message.orchestrator_address = data.orchestrator_address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.validator_address != null) {
                    data.validator_address = this.validator_address;
                }
                if (this.orchestrator_address != null) {
                    data.orchestrator_address = this.orchestrator_address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.validator_address.length)
                    writer.writeString(1, this.validator_address);
                if (this.orchestrator_address.length)
                    writer.writeString(2, this.orchestrator_address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegateKeysByEthAddressResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.validator_address = reader.readString();
                            break;
                        case 2:
                            message.orchestrator_address = reader.readString();
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
                return QueryDelegateKeysByEthAddressResponse.deserialize(bytes);
            }
        }
        _QueryDelegateKeysByEthAddressResponse_one_of_decls = new WeakMap();
        v1.QueryDelegateKeysByEthAddressResponse = QueryDelegateKeysByEthAddressResponse;
        class QueryDelegateKeysByOrchestratorAddress extends pb_1.Message {
            constructor(data) {
                super();
                _QueryDelegateKeysByOrchestratorAddress_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDelegateKeysByOrchestratorAddress_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("orchestrator_address" in data && data.orchestrator_address != undefined) {
                        this.orchestrator_address = data.orchestrator_address;
                    }
                }
            }
            get orchestrator_address() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set orchestrator_address(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryDelegateKeysByOrchestratorAddress({});
                if (data.orchestrator_address != null) {
                    message.orchestrator_address = data.orchestrator_address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.orchestrator_address != null) {
                    data.orchestrator_address = this.orchestrator_address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.orchestrator_address.length)
                    writer.writeString(1, this.orchestrator_address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegateKeysByOrchestratorAddress();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.orchestrator_address = reader.readString();
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
                return QueryDelegateKeysByOrchestratorAddress.deserialize(bytes);
            }
        }
        _QueryDelegateKeysByOrchestratorAddress_one_of_decls = new WeakMap();
        v1.QueryDelegateKeysByOrchestratorAddress = QueryDelegateKeysByOrchestratorAddress;
        class QueryDelegateKeysByOrchestratorAddressResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryDelegateKeysByOrchestratorAddressResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDelegateKeysByOrchestratorAddressResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("validator_address" in data && data.validator_address != undefined) {
                        this.validator_address = data.validator_address;
                    }
                    if ("eth_address" in data && data.eth_address != undefined) {
                        this.eth_address = data.eth_address;
                    }
                }
            }
            get validator_address() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set validator_address(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get eth_address() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set eth_address(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new QueryDelegateKeysByOrchestratorAddressResponse({});
                if (data.validator_address != null) {
                    message.validator_address = data.validator_address;
                }
                if (data.eth_address != null) {
                    message.eth_address = data.eth_address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.validator_address != null) {
                    data.validator_address = this.validator_address;
                }
                if (this.eth_address != null) {
                    data.eth_address = this.eth_address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.validator_address.length)
                    writer.writeString(1, this.validator_address);
                if (this.eth_address.length)
                    writer.writeString(2, this.eth_address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDelegateKeysByOrchestratorAddressResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.validator_address = reader.readString();
                            break;
                        case 2:
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
                return QueryDelegateKeysByOrchestratorAddressResponse.deserialize(bytes);
            }
        }
        _QueryDelegateKeysByOrchestratorAddressResponse_one_of_decls = new WeakMap();
        v1.QueryDelegateKeysByOrchestratorAddressResponse = QueryDelegateKeysByOrchestratorAddressResponse;
        class QueryPendingSendToEth extends pb_1.Message {
            constructor(data) {
                super();
                _QueryPendingSendToEth_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryPendingSendToEth_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("sender_address" in data && data.sender_address != undefined) {
                        this.sender_address = data.sender_address;
                    }
                }
            }
            get sender_address() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set sender_address(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new QueryPendingSendToEth({});
                if (data.sender_address != null) {
                    message.sender_address = data.sender_address;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.sender_address != null) {
                    data.sender_address = this.sender_address;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.sender_address.length)
                    writer.writeString(1, this.sender_address);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPendingSendToEth();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.sender_address = reader.readString();
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
                return QueryPendingSendToEth.deserialize(bytes);
            }
        }
        _QueryPendingSendToEth_one_of_decls = new WeakMap();
        v1.QueryPendingSendToEth = QueryPendingSendToEth;
        class QueryPendingSendToEthResponse extends pb_1.Message {
            constructor(data) {
                super();
                _QueryPendingSendToEthResponse_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2], __classPrivateFieldGet(this, _QueryPendingSendToEthResponse_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("transfers_in_batches" in data && data.transfers_in_batches != undefined) {
                        this.transfers_in_batches = data.transfers_in_batches;
                    }
                    if ("unbatched_transfers" in data && data.unbatched_transfers != undefined) {
                        this.unbatched_transfers = data.unbatched_transfers;
                    }
                }
            }
            get transfers_in_batches() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_5.gravity.v1.OutgoingTransferTx, 1);
            }
            set transfers_in_batches(value) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
            get unbatched_transfers() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_5.gravity.v1.OutgoingTransferTx, 2);
            }
            set unbatched_transfers(value) {
                pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
            static fromObject(data) {
                const message = new QueryPendingSendToEthResponse({});
                if (data.transfers_in_batches != null) {
                    message.transfers_in_batches = data.transfers_in_batches.map(item => dependency_5.gravity.v1.OutgoingTransferTx.fromObject(item));
                }
                if (data.unbatched_transfers != null) {
                    message.unbatched_transfers = data.unbatched_transfers.map(item => dependency_5.gravity.v1.OutgoingTransferTx.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.transfers_in_batches != null) {
                    data.transfers_in_batches = this.transfers_in_batches.map((item) => item.toObject());
                }
                if (this.unbatched_transfers != null) {
                    data.unbatched_transfers = this.unbatched_transfers.map((item) => item.toObject());
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.transfers_in_batches.length)
                    writer.writeRepeatedMessage(1, this.transfers_in_batches, (item) => item.serialize(writer));
                if (this.unbatched_transfers.length)
                    writer.writeRepeatedMessage(2, this.unbatched_transfers, (item) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPendingSendToEthResponse();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.transfers_in_batches, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.gravity.v1.OutgoingTransferTx.deserialize(reader), dependency_5.gravity.v1.OutgoingTransferTx));
                            break;
                        case 2:
                            reader.readMessage(message.unbatched_transfers, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_5.gravity.v1.OutgoingTransferTx.deserialize(reader), dependency_5.gravity.v1.OutgoingTransferTx));
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
                return QueryPendingSendToEthResponse.deserialize(bytes);
            }
        }
        _QueryPendingSendToEthResponse_one_of_decls = new WeakMap();
        v1.QueryPendingSendToEthResponse = QueryPendingSendToEthResponse;
        class UnimplementedQueryService {
        }
        UnimplementedQueryService.definition = {
            Params: {
                path: "/gravity.v1.Query/Params",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
            },
            CurrentValset: {
                path: "/gravity.v1.Query/CurrentValset",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryCurrentValsetRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryCurrentValsetResponse.deserialize(new Uint8Array(bytes))
            },
            ValsetRequest: {
                path: "/gravity.v1.Query/ValsetRequest",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryValsetRequestRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryValsetRequestResponse.deserialize(new Uint8Array(bytes))
            },
            ValsetConfirm: {
                path: "/gravity.v1.Query/ValsetConfirm",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryValsetConfirmRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryValsetConfirmResponse.deserialize(new Uint8Array(bytes))
            },
            ValsetConfirmsByNonce: {
                path: "/gravity.v1.Query/ValsetConfirmsByNonce",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryValsetConfirmsByNonceRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryValsetConfirmsByNonceResponse.deserialize(new Uint8Array(bytes))
            },
            LastValsetRequests: {
                path: "/gravity.v1.Query/LastValsetRequests",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryLastValsetRequestsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryLastValsetRequestsResponse.deserialize(new Uint8Array(bytes))
            },
            LastPendingValsetRequestByAddr: {
                path: "/gravity.v1.Query/LastPendingValsetRequestByAddr",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryLastPendingValsetRequestByAddrRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryLastPendingValsetRequestByAddrResponse.deserialize(new Uint8Array(bytes))
            },
            LastPendingBatchRequestByAddr: {
                path: "/gravity.v1.Query/LastPendingBatchRequestByAddr",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryLastPendingBatchRequestByAddrRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryLastPendingBatchRequestByAddrResponse.deserialize(new Uint8Array(bytes))
            },
            LastPendingLogicCallByAddr: {
                path: "/gravity.v1.Query/LastPendingLogicCallByAddr",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryLastPendingLogicCallByAddrRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryLastPendingLogicCallByAddrResponse.deserialize(new Uint8Array(bytes))
            },
            LastEventNonceByAddr: {
                path: "/gravity.v1.Query/LastEventNonceByAddr",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryLastEventNonceByAddrRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryLastEventNonceByAddrResponse.deserialize(new Uint8Array(bytes))
            },
            BatchFees: {
                path: "/gravity.v1.Query/BatchFees",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryBatchFeeRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryBatchFeeResponse.deserialize(new Uint8Array(bytes))
            },
            OutgoingTxBatches: {
                path: "/gravity.v1.Query/OutgoingTxBatches",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryOutgoingTxBatchesRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryOutgoingTxBatchesResponse.deserialize(new Uint8Array(bytes))
            },
            OutgoingLogicCalls: {
                path: "/gravity.v1.Query/OutgoingLogicCalls",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryOutgoingLogicCallsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryOutgoingLogicCallsResponse.deserialize(new Uint8Array(bytes))
            },
            BatchRequestByNonce: {
                path: "/gravity.v1.Query/BatchRequestByNonce",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryBatchRequestByNonceRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryBatchRequestByNonceResponse.deserialize(new Uint8Array(bytes))
            },
            BatchConfirms: {
                path: "/gravity.v1.Query/BatchConfirms",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryBatchConfirmsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryBatchConfirmsResponse.deserialize(new Uint8Array(bytes))
            },
            LogicConfirms: {
                path: "/gravity.v1.Query/LogicConfirms",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryLogicConfirmsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryLogicConfirmsResponse.deserialize(new Uint8Array(bytes))
            },
            ERC20ToDenom: {
                path: "/gravity.v1.Query/ERC20ToDenom",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryERC20ToDenomRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryERC20ToDenomResponse.deserialize(new Uint8Array(bytes))
            },
            DenomToERC20: {
                path: "/gravity.v1.Query/DenomToERC20",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryDenomToERC20Request.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryDenomToERC20Response.deserialize(new Uint8Array(bytes))
            },
            GetAttestations: {
                path: "/gravity.v1.Query/GetAttestations",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryAttestationsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryAttestationsResponse.deserialize(new Uint8Array(bytes))
            },
            GetDelegateKeyByValidator: {
                path: "/gravity.v1.Query/GetDelegateKeyByValidator",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryDelegateKeysByValidatorAddress.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryDelegateKeysByValidatorAddressResponse.deserialize(new Uint8Array(bytes))
            },
            GetDelegateKeyByEth: {
                path: "/gravity.v1.Query/GetDelegateKeyByEth",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryDelegateKeysByEthAddress.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryDelegateKeysByEthAddressResponse.deserialize(new Uint8Array(bytes))
            },
            GetDelegateKeyByOrchestrator: {
                path: "/gravity.v1.Query/GetDelegateKeyByOrchestrator",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryDelegateKeysByOrchestratorAddress.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryDelegateKeysByOrchestratorAddressResponse.deserialize(new Uint8Array(bytes))
            },
            GetPendingSendToEth: {
                path: "/gravity.v1.Query/GetPendingSendToEth",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes) => QueryPendingSendToEth.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes) => QueryPendingSendToEthResponse.deserialize(new Uint8Array(bytes))
            }
        };
        v1.UnimplementedQueryService = UnimplementedQueryService;
        class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
            constructor(address, credentials, options) {
                super(address, credentials, options);
                this.Params = (message, metadata, options, callback) => {
                    return super.Params(message, metadata, options, callback);
                };
                this.CurrentValset = (message, metadata, options, callback) => {
                    return super.CurrentValset(message, metadata, options, callback);
                };
                this.ValsetRequest = (message, metadata, options, callback) => {
                    return super.ValsetRequest(message, metadata, options, callback);
                };
                this.ValsetConfirm = (message, metadata, options, callback) => {
                    return super.ValsetConfirm(message, metadata, options, callback);
                };
                this.ValsetConfirmsByNonce = (message, metadata, options, callback) => {
                    return super.ValsetConfirmsByNonce(message, metadata, options, callback);
                };
                this.LastValsetRequests = (message, metadata, options, callback) => {
                    return super.LastValsetRequests(message, metadata, options, callback);
                };
                this.LastPendingValsetRequestByAddr = (message, metadata, options, callback) => {
                    return super.LastPendingValsetRequestByAddr(message, metadata, options, callback);
                };
                this.LastPendingBatchRequestByAddr = (message, metadata, options, callback) => {
                    return super.LastPendingBatchRequestByAddr(message, metadata, options, callback);
                };
                this.LastPendingLogicCallByAddr = (message, metadata, options, callback) => {
                    return super.LastPendingLogicCallByAddr(message, metadata, options, callback);
                };
                this.LastEventNonceByAddr = (message, metadata, options, callback) => {
                    return super.LastEventNonceByAddr(message, metadata, options, callback);
                };
                this.BatchFees = (message, metadata, options, callback) => {
                    return super.BatchFees(message, metadata, options, callback);
                };
                this.OutgoingTxBatches = (message, metadata, options, callback) => {
                    return super.OutgoingTxBatches(message, metadata, options, callback);
                };
                this.OutgoingLogicCalls = (message, metadata, options, callback) => {
                    return super.OutgoingLogicCalls(message, metadata, options, callback);
                };
                this.BatchRequestByNonce = (message, metadata, options, callback) => {
                    return super.BatchRequestByNonce(message, metadata, options, callback);
                };
                this.BatchConfirms = (message, metadata, options, callback) => {
                    return super.BatchConfirms(message, metadata, options, callback);
                };
                this.LogicConfirms = (message, metadata, options, callback) => {
                    return super.LogicConfirms(message, metadata, options, callback);
                };
                this.ERC20ToDenom = (message, metadata, options, callback) => {
                    return super.ERC20ToDenom(message, metadata, options, callback);
                };
                this.DenomToERC20 = (message, metadata, options, callback) => {
                    return super.DenomToERC20(message, metadata, options, callback);
                };
                this.GetAttestations = (message, metadata, options, callback) => {
                    return super.GetAttestations(message, metadata, options, callback);
                };
                this.GetDelegateKeyByValidator = (message, metadata, options, callback) => {
                    return super.GetDelegateKeyByValidator(message, metadata, options, callback);
                };
                this.GetDelegateKeyByEth = (message, metadata, options, callback) => {
                    return super.GetDelegateKeyByEth(message, metadata, options, callback);
                };
                this.GetDelegateKeyByOrchestrator = (message, metadata, options, callback) => {
                    return super.GetDelegateKeyByOrchestrator(message, metadata, options, callback);
                };
                this.GetPendingSendToEth = (message, metadata, options, callback) => {
                    return super.GetPendingSendToEth(message, metadata, options, callback);
                };
            }
        }
        v1.QueryClient = QueryClient;
    })(v1 = gravity.v1 || (gravity.v1 = {}));
})(gravity = exports.gravity || (exports.gravity = {}));
//# sourceMappingURL=query.js.map