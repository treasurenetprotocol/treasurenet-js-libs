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
const dependency_3 = __importStar(require("./../../../cosmos/base/v1beta1/coin"));
const dependency_4 = __importStar(require("./genesis"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var evmos;
(function (evmos) {
    var inflation;
    (function (inflation) {
        var v1;
        (function (v1) {
            var _QueryPeriodRequest_one_of_decls, _QueryPeriodResponse_one_of_decls, _QueryEpochMintProvisionRequest_one_of_decls, _QueryEpochMintProvisionResponse_one_of_decls, _QuerySkippedEpochsRequest_one_of_decls, _QuerySkippedEpochsResponse_one_of_decls, _QueryCirculatingSupplyRequest_one_of_decls, _QueryCirculatingSupplyResponse_one_of_decls, _QueryInflationRateRequest_one_of_decls, _QueryInflationRateResponse_one_of_decls, _QueryParamsRequest_one_of_decls, _QueryParamsResponse_one_of_decls;
            class QueryPeriodRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryPeriodRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryPeriodRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new QueryPeriodRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPeriodRequest();
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
                    return QueryPeriodRequest.deserialize(bytes);
                }
            }
            _QueryPeriodRequest_one_of_decls = new WeakMap();
            v1.QueryPeriodRequest = QueryPeriodRequest;
            class QueryPeriodResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryPeriodResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryPeriodResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("period" in data && data.period != undefined) {
                            this.period = data.period;
                        }
                    }
                }
                get period() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set period(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryPeriodResponse({});
                    if (data.period != null) {
                        message.period = data.period;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.period != null) {
                        data.period = this.period;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.period != 0)
                        writer.writeUint64(1, this.period);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPeriodResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.period = reader.readUint64();
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
                    return QueryPeriodResponse.deserialize(bytes);
                }
            }
            _QueryPeriodResponse_one_of_decls = new WeakMap();
            v1.QueryPeriodResponse = QueryPeriodResponse;
            class QueryEpochMintProvisionRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryEpochMintProvisionRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryEpochMintProvisionRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new QueryEpochMintProvisionRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryEpochMintProvisionRequest();
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
                    return QueryEpochMintProvisionRequest.deserialize(bytes);
                }
            }
            _QueryEpochMintProvisionRequest_one_of_decls = new WeakMap();
            v1.QueryEpochMintProvisionRequest = QueryEpochMintProvisionRequest;
            class QueryEpochMintProvisionResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryEpochMintProvisionResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryEpochMintProvisionResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("epoch_mint_provision" in data && data.epoch_mint_provision != undefined) {
                            this.epoch_mint_provision = data.epoch_mint_provision;
                        }
                    }
                }
                get epoch_mint_provision() {
                    return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.v1beta1.DecCoin, 1);
                }
                set epoch_mint_provision(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_epoch_mint_provision() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryEpochMintProvisionResponse({});
                    if (data.epoch_mint_provision != null) {
                        message.epoch_mint_provision = dependency_3.cosmos.base.v1beta1.DecCoin.fromObject(data.epoch_mint_provision);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.epoch_mint_provision != null) {
                        data.epoch_mint_provision = this.epoch_mint_provision.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_epoch_mint_provision)
                        writer.writeMessage(1, this.epoch_mint_provision, () => this.epoch_mint_provision.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryEpochMintProvisionResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.epoch_mint_provision, () => message.epoch_mint_provision = dependency_3.cosmos.base.v1beta1.DecCoin.deserialize(reader));
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
                    return QueryEpochMintProvisionResponse.deserialize(bytes);
                }
            }
            _QueryEpochMintProvisionResponse_one_of_decls = new WeakMap();
            v1.QueryEpochMintProvisionResponse = QueryEpochMintProvisionResponse;
            class QuerySkippedEpochsRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QuerySkippedEpochsRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QuerySkippedEpochsRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new QuerySkippedEpochsRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuerySkippedEpochsRequest();
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
                    return QuerySkippedEpochsRequest.deserialize(bytes);
                }
            }
            _QuerySkippedEpochsRequest_one_of_decls = new WeakMap();
            v1.QuerySkippedEpochsRequest = QuerySkippedEpochsRequest;
            class QuerySkippedEpochsResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QuerySkippedEpochsResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QuerySkippedEpochsResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("skipped_epochs" in data && data.skipped_epochs != undefined) {
                            this.skipped_epochs = data.skipped_epochs;
                        }
                    }
                }
                get skipped_epochs() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set skipped_epochs(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QuerySkippedEpochsResponse({});
                    if (data.skipped_epochs != null) {
                        message.skipped_epochs = data.skipped_epochs;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.skipped_epochs != null) {
                        data.skipped_epochs = this.skipped_epochs;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.skipped_epochs != 0)
                        writer.writeUint64(1, this.skipped_epochs);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuerySkippedEpochsResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.skipped_epochs = reader.readUint64();
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
                    return QuerySkippedEpochsResponse.deserialize(bytes);
                }
            }
            _QuerySkippedEpochsResponse_one_of_decls = new WeakMap();
            v1.QuerySkippedEpochsResponse = QuerySkippedEpochsResponse;
            class QueryCirculatingSupplyRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryCirculatingSupplyRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryCirculatingSupplyRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new QueryCirculatingSupplyRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCirculatingSupplyRequest();
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
                    return QueryCirculatingSupplyRequest.deserialize(bytes);
                }
            }
            _QueryCirculatingSupplyRequest_one_of_decls = new WeakMap();
            v1.QueryCirculatingSupplyRequest = QueryCirculatingSupplyRequest;
            class QueryCirculatingSupplyResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryCirculatingSupplyResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryCirculatingSupplyResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("circulating_supply" in data && data.circulating_supply != undefined) {
                            this.circulating_supply = data.circulating_supply;
                        }
                    }
                }
                get circulating_supply() {
                    return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.v1beta1.DecCoin, 1);
                }
                set circulating_supply(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_circulating_supply() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryCirculatingSupplyResponse({});
                    if (data.circulating_supply != null) {
                        message.circulating_supply = dependency_3.cosmos.base.v1beta1.DecCoin.fromObject(data.circulating_supply);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.circulating_supply != null) {
                        data.circulating_supply = this.circulating_supply.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_circulating_supply)
                        writer.writeMessage(1, this.circulating_supply, () => this.circulating_supply.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCirculatingSupplyResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.circulating_supply, () => message.circulating_supply = dependency_3.cosmos.base.v1beta1.DecCoin.deserialize(reader));
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
                    return QueryCirculatingSupplyResponse.deserialize(bytes);
                }
            }
            _QueryCirculatingSupplyResponse_one_of_decls = new WeakMap();
            v1.QueryCirculatingSupplyResponse = QueryCirculatingSupplyResponse;
            class QueryInflationRateRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryInflationRateRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryInflationRateRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new QueryInflationRateRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryInflationRateRequest();
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
                    return QueryInflationRateRequest.deserialize(bytes);
                }
            }
            _QueryInflationRateRequest_one_of_decls = new WeakMap();
            v1.QueryInflationRateRequest = QueryInflationRateRequest;
            class QueryInflationRateResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryInflationRateResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryInflationRateResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("inflation_rate" in data && data.inflation_rate != undefined) {
                            this.inflation_rate = data.inflation_rate;
                        }
                    }
                }
                get inflation_rate() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set inflation_rate(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryInflationRateResponse({});
                    if (data.inflation_rate != null) {
                        message.inflation_rate = data.inflation_rate;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.inflation_rate != null) {
                        data.inflation_rate = this.inflation_rate;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.inflation_rate.length)
                        writer.writeString(1, this.inflation_rate);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryInflationRateResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.inflation_rate = reader.readString();
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
                    return QueryInflationRateResponse.deserialize(bytes);
                }
            }
            _QueryInflationRateResponse_one_of_decls = new WeakMap();
            v1.QueryInflationRateResponse = QueryInflationRateResponse;
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
                    return pb_1.Message.getWrapperField(this, dependency_4.evmos.inflation.v1.Params, 1);
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
                        message.params = dependency_4.evmos.inflation.v1.Params.fromObject(data.params);
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
                                reader.readMessage(message.params, () => message.params = dependency_4.evmos.inflation.v1.Params.deserialize(reader));
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
                Period: {
                    path: "/evmos.inflation.v1.Query/Period",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryPeriodRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryPeriodResponse.deserialize(new Uint8Array(bytes))
                },
                EpochMintProvision: {
                    path: "/evmos.inflation.v1.Query/EpochMintProvision",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryEpochMintProvisionRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryEpochMintProvisionResponse.deserialize(new Uint8Array(bytes))
                },
                SkippedEpochs: {
                    path: "/evmos.inflation.v1.Query/SkippedEpochs",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QuerySkippedEpochsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QuerySkippedEpochsResponse.deserialize(new Uint8Array(bytes))
                },
                CirculatingSupply: {
                    path: "/evmos.inflation.v1.Query/CirculatingSupply",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryCirculatingSupplyRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryCirculatingSupplyResponse.deserialize(new Uint8Array(bytes))
                },
                InflationRate: {
                    path: "/evmos.inflation.v1.Query/InflationRate",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryInflationRateRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryInflationRateResponse.deserialize(new Uint8Array(bytes))
                },
                Params: {
                    path: "/evmos.inflation.v1.Query/Params",
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
                    this.Period = (message, metadata, options, callback) => {
                        return super.Period(message, metadata, options, callback);
                    };
                    this.EpochMintProvision = (message, metadata, options, callback) => {
                        return super.EpochMintProvision(message, metadata, options, callback);
                    };
                    this.SkippedEpochs = (message, metadata, options, callback) => {
                        return super.SkippedEpochs(message, metadata, options, callback);
                    };
                    this.CirculatingSupply = (message, metadata, options, callback) => {
                        return super.CirculatingSupply(message, metadata, options, callback);
                    };
                    this.InflationRate = (message, metadata, options, callback) => {
                        return super.InflationRate(message, metadata, options, callback);
                    };
                    this.Params = (message, metadata, options, callback) => {
                        return super.Params(message, metadata, options, callback);
                    };
                }
            }
            v1.QueryClient = QueryClient;
        })(v1 = inflation.v1 || (inflation.v1 = {}));
    })(inflation = evmos.inflation || (evmos.inflation = {}));
})(evmos = exports.evmos || (exports.evmos = {}));
//# sourceMappingURL=query.js.map