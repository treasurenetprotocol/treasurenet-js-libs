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
const dependency_4 = __importStar(require("./../../base/v1beta1/coin"));
const dependency_5 = __importStar(require("./bank"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var bank;
    (function (bank) {
        var v1beta1;
        (function (v1beta1) {
            var _QueryBalanceRequest_one_of_decls, _QueryBalanceResponse_one_of_decls, _QueryAllBalancesRequest_one_of_decls, _QueryAllBalancesResponse_one_of_decls, _QuerySpendableBalancesRequest_one_of_decls, _QuerySpendableBalancesResponse_one_of_decls, _QueryTotalSupplyRequest_one_of_decls, _QueryTotalSupplyResponse_one_of_decls, _QuerySupplyOfRequest_one_of_decls, _QuerySupplyOfResponse_one_of_decls, _QueryParamsRequest_one_of_decls, _QueryParamsResponse_one_of_decls, _QueryDenomsMetadataRequest_one_of_decls, _QueryDenomsMetadataResponse_one_of_decls, _QueryDenomMetadataRequest_one_of_decls, _QueryDenomMetadataResponse_one_of_decls;
            class QueryBalanceRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryBalanceRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryBalanceRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("address" in data && data.address != undefined) {
                            this.address = data.address;
                        }
                        if ("denom" in data && data.denom != undefined) {
                            this.denom = data.denom;
                        }
                    }
                }
                get address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get denom() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set denom(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new QueryBalanceRequest({});
                    if (data.address != null) {
                        message.address = data.address;
                    }
                    if (data.denom != null) {
                        message.denom = data.denom;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.address != null) {
                        data.address = this.address;
                    }
                    if (this.denom != null) {
                        data.denom = this.denom;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.address.length)
                        writer.writeString(1, this.address);
                    if (this.denom.length)
                        writer.writeString(2, this.denom);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBalanceRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.address = reader.readString();
                                break;
                            case 2:
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
                    return QueryBalanceRequest.deserialize(bytes);
                }
            }
            _QueryBalanceRequest_one_of_decls = new WeakMap();
            v1beta1.QueryBalanceRequest = QueryBalanceRequest;
            class QueryBalanceResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryBalanceResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryBalanceResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("balance" in data && data.balance != undefined) {
                            this.balance = data.balance;
                        }
                    }
                }
                get balance() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 1);
                }
                set balance(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_balance() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryBalanceResponse({});
                    if (data.balance != null) {
                        message.balance = dependency_4.cosmos.base.v1beta1.Coin.fromObject(data.balance);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.balance != null) {
                        data.balance = this.balance.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_balance)
                        writer.writeMessage(1, this.balance, () => this.balance.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBalanceResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.balance, () => message.balance = dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader));
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
                    return QueryBalanceResponse.deserialize(bytes);
                }
            }
            _QueryBalanceResponse_one_of_decls = new WeakMap();
            v1beta1.QueryBalanceResponse = QueryBalanceResponse;
            class QueryAllBalancesRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAllBalancesRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryAllBalancesRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("address" in data && data.address != undefined) {
                            this.address = data.address;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set address(value) {
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
                    const message = new QueryAllBalancesRequest({});
                    if (data.address != null) {
                        message.address = data.address;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.address != null) {
                        data.address = this.address;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.address.length)
                        writer.writeString(1, this.address);
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllBalancesRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.address = reader.readString();
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
                    return QueryAllBalancesRequest.deserialize(bytes);
                }
            }
            _QueryAllBalancesRequest_one_of_decls = new WeakMap();
            v1beta1.QueryAllBalancesRequest = QueryAllBalancesRequest;
            class QueryAllBalancesResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryAllBalancesResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryAllBalancesResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("balances" in data && data.balances != undefined) {
                            this.balances = data.balances;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get balances() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 1);
                }
                set balances(value) {
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
                    const message = new QueryAllBalancesResponse({});
                    if (data.balances != null) {
                        message.balances = data.balances.map(item => dependency_4.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.balances != null) {
                        data.balances = this.balances.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.balances.length)
                        writer.writeRepeatedMessage(1, this.balances, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllBalancesResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.balances, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_4.cosmos.base.v1beta1.Coin));
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
                    return QueryAllBalancesResponse.deserialize(bytes);
                }
            }
            _QueryAllBalancesResponse_one_of_decls = new WeakMap();
            v1beta1.QueryAllBalancesResponse = QueryAllBalancesResponse;
            class QuerySpendableBalancesRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QuerySpendableBalancesRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QuerySpendableBalancesRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("address" in data && data.address != undefined) {
                            this.address = data.address;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set address(value) {
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
                    const message = new QuerySpendableBalancesRequest({});
                    if (data.address != null) {
                        message.address = data.address;
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.address != null) {
                        data.address = this.address;
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.address.length)
                        writer.writeString(1, this.address);
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuerySpendableBalancesRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.address = reader.readString();
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
                    return QuerySpendableBalancesRequest.deserialize(bytes);
                }
            }
            _QuerySpendableBalancesRequest_one_of_decls = new WeakMap();
            v1beta1.QuerySpendableBalancesRequest = QuerySpendableBalancesRequest;
            class QuerySpendableBalancesResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QuerySpendableBalancesResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QuerySpendableBalancesResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("balances" in data && data.balances != undefined) {
                            this.balances = data.balances;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get balances() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 1);
                }
                set balances(value) {
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
                    const message = new QuerySpendableBalancesResponse({});
                    if (data.balances != null) {
                        message.balances = data.balances.map(item => dependency_4.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.balances != null) {
                        data.balances = this.balances.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.balances.length)
                        writer.writeRepeatedMessage(1, this.balances, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuerySpendableBalancesResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.balances, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_4.cosmos.base.v1beta1.Coin));
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
                    return QuerySpendableBalancesResponse.deserialize(bytes);
                }
            }
            _QuerySpendableBalancesResponse_one_of_decls = new WeakMap();
            v1beta1.QuerySpendableBalancesResponse = QuerySpendableBalancesResponse;
            class QueryTotalSupplyRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTotalSupplyRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryTotalSupplyRequest_one_of_decls, "f"));
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
                    const message = new QueryTotalSupplyRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTotalSupplyRequest();
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
                    return QueryTotalSupplyRequest.deserialize(bytes);
                }
            }
            _QueryTotalSupplyRequest_one_of_decls = new WeakMap();
            v1beta1.QueryTotalSupplyRequest = QueryTotalSupplyRequest;
            class QueryTotalSupplyResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryTotalSupplyResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryTotalSupplyResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("supply" in data && data.supply != undefined) {
                            this.supply = data.supply;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get supply() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 1);
                }
                set supply(value) {
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
                    const message = new QueryTotalSupplyResponse({});
                    if (data.supply != null) {
                        message.supply = data.supply.map(item => dependency_4.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.supply != null) {
                        data.supply = this.supply.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.supply.length)
                        writer.writeRepeatedMessage(1, this.supply, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTotalSupplyResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.supply, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_4.cosmos.base.v1beta1.Coin));
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
                    return QueryTotalSupplyResponse.deserialize(bytes);
                }
            }
            _QueryTotalSupplyResponse_one_of_decls = new WeakMap();
            v1beta1.QueryTotalSupplyResponse = QueryTotalSupplyResponse;
            class QuerySupplyOfRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QuerySupplyOfRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QuerySupplyOfRequest_one_of_decls, "f"));
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
                    const message = new QuerySupplyOfRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuerySupplyOfRequest();
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
                    return QuerySupplyOfRequest.deserialize(bytes);
                }
            }
            _QuerySupplyOfRequest_one_of_decls = new WeakMap();
            v1beta1.QuerySupplyOfRequest = QuerySupplyOfRequest;
            class QuerySupplyOfResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QuerySupplyOfResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QuerySupplyOfResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("amount" in data && data.amount != undefined) {
                            this.amount = data.amount;
                        }
                    }
                }
                get amount() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 1);
                }
                set amount(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_amount() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QuerySupplyOfResponse({});
                    if (data.amount != null) {
                        message.amount = dependency_4.cosmos.base.v1beta1.Coin.fromObject(data.amount);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.amount != null) {
                        data.amount = this.amount.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_amount)
                        writer.writeMessage(1, this.amount, () => this.amount.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuerySupplyOfResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.amount, () => message.amount = dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader));
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
                    return QuerySupplyOfResponse.deserialize(bytes);
                }
            }
            _QuerySupplyOfResponse_one_of_decls = new WeakMap();
            v1beta1.QuerySupplyOfResponse = QuerySupplyOfResponse;
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
                    return pb_1.Message.getWrapperField(this, dependency_5.cosmos.bank.v1beta1.Params, 1);
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
                        message.params = dependency_5.cosmos.bank.v1beta1.Params.fromObject(data.params);
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
                                reader.readMessage(message.params, () => message.params = dependency_5.cosmos.bank.v1beta1.Params.deserialize(reader));
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
            class QueryDenomsMetadataRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDenomsMetadataRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDenomsMetadataRequest_one_of_decls, "f"));
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
                    const message = new QueryDenomsMetadataRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDenomsMetadataRequest();
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
                    return QueryDenomsMetadataRequest.deserialize(bytes);
                }
            }
            _QueryDenomsMetadataRequest_one_of_decls = new WeakMap();
            v1beta1.QueryDenomsMetadataRequest = QueryDenomsMetadataRequest;
            class QueryDenomsMetadataResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDenomsMetadataResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _QueryDenomsMetadataResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("metadatas" in data && data.metadatas != undefined) {
                            this.metadatas = data.metadatas;
                        }
                        if ("pagination" in data && data.pagination != undefined) {
                            this.pagination = data.pagination;
                        }
                    }
                }
                get metadatas() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_5.cosmos.bank.v1beta1.Metadata, 1);
                }
                set metadatas(value) {
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
                    const message = new QueryDenomsMetadataResponse({});
                    if (data.metadatas != null) {
                        message.metadatas = data.metadatas.map(item => dependency_5.cosmos.bank.v1beta1.Metadata.fromObject(item));
                    }
                    if (data.pagination != null) {
                        message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.metadatas != null) {
                        data.metadatas = this.metadatas.map((item) => item.toObject());
                    }
                    if (this.pagination != null) {
                        data.pagination = this.pagination.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.metadatas.length)
                        writer.writeRepeatedMessage(1, this.metadatas, (item) => item.serialize(writer));
                    if (this.has_pagination)
                        writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDenomsMetadataResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.metadatas, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.cosmos.bank.v1beta1.Metadata.deserialize(reader), dependency_5.cosmos.bank.v1beta1.Metadata));
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
                    return QueryDenomsMetadataResponse.deserialize(bytes);
                }
            }
            _QueryDenomsMetadataResponse_one_of_decls = new WeakMap();
            v1beta1.QueryDenomsMetadataResponse = QueryDenomsMetadataResponse;
            class QueryDenomMetadataRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDenomMetadataRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDenomMetadataRequest_one_of_decls, "f"));
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
                    const message = new QueryDenomMetadataRequest({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDenomMetadataRequest();
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
                    return QueryDenomMetadataRequest.deserialize(bytes);
                }
            }
            _QueryDenomMetadataRequest_one_of_decls = new WeakMap();
            v1beta1.QueryDenomMetadataRequest = QueryDenomMetadataRequest;
            class QueryDenomMetadataResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryDenomMetadataResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryDenomMetadataResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("metadata" in data && data.metadata != undefined) {
                            this.metadata = data.metadata;
                        }
                    }
                }
                get metadata() {
                    return pb_1.Message.getWrapperField(this, dependency_5.cosmos.bank.v1beta1.Metadata, 1);
                }
                set metadata(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_metadata() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                static fromObject(data) {
                    const message = new QueryDenomMetadataResponse({});
                    if (data.metadata != null) {
                        message.metadata = dependency_5.cosmos.bank.v1beta1.Metadata.fromObject(data.metadata);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.metadata != null) {
                        data.metadata = this.metadata.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_metadata)
                        writer.writeMessage(1, this.metadata, () => this.metadata.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryDenomMetadataResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.metadata, () => message.metadata = dependency_5.cosmos.bank.v1beta1.Metadata.deserialize(reader));
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
                    return QueryDenomMetadataResponse.deserialize(bytes);
                }
            }
            _QueryDenomMetadataResponse_one_of_decls = new WeakMap();
            v1beta1.QueryDenomMetadataResponse = QueryDenomMetadataResponse;
            class UnimplementedQueryService {
            }
            UnimplementedQueryService.definition = {
                Balance: {
                    path: "/cosmos.bank.v1beta1.Query/Balance",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryBalanceRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryBalanceResponse.deserialize(new Uint8Array(bytes))
                },
                AllBalances: {
                    path: "/cosmos.bank.v1beta1.Query/AllBalances",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryAllBalancesRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryAllBalancesResponse.deserialize(new Uint8Array(bytes))
                },
                SpendableBalances: {
                    path: "/cosmos.bank.v1beta1.Query/SpendableBalances",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QuerySpendableBalancesRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QuerySpendableBalancesResponse.deserialize(new Uint8Array(bytes))
                },
                TotalSupply: {
                    path: "/cosmos.bank.v1beta1.Query/TotalSupply",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryTotalSupplyRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryTotalSupplyResponse.deserialize(new Uint8Array(bytes))
                },
                SupplyOf: {
                    path: "/cosmos.bank.v1beta1.Query/SupplyOf",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QuerySupplyOfRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QuerySupplyOfResponse.deserialize(new Uint8Array(bytes))
                },
                Params: {
                    path: "/cosmos.bank.v1beta1.Query/Params",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
                },
                DenomMetadata: {
                    path: "/cosmos.bank.v1beta1.Query/DenomMetadata",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryDenomMetadataRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryDenomMetadataResponse.deserialize(new Uint8Array(bytes))
                },
                DenomsMetadata: {
                    path: "/cosmos.bank.v1beta1.Query/DenomsMetadata",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryDenomsMetadataRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryDenomsMetadataResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1beta1.UnimplementedQueryService = UnimplementedQueryService;
            class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.Balance = (message, metadata, options, callback) => {
                        return super.Balance(message, metadata, options, callback);
                    };
                    this.AllBalances = (message, metadata, options, callback) => {
                        return super.AllBalances(message, metadata, options, callback);
                    };
                    this.SpendableBalances = (message, metadata, options, callback) => {
                        return super.SpendableBalances(message, metadata, options, callback);
                    };
                    this.TotalSupply = (message, metadata, options, callback) => {
                        return super.TotalSupply(message, metadata, options, callback);
                    };
                    this.SupplyOf = (message, metadata, options, callback) => {
                        return super.SupplyOf(message, metadata, options, callback);
                    };
                    this.Params = (message, metadata, options, callback) => {
                        return super.Params(message, metadata, options, callback);
                    };
                    this.DenomMetadata = (message, metadata, options, callback) => {
                        return super.DenomMetadata(message, metadata, options, callback);
                    };
                    this.DenomsMetadata = (message, metadata, options, callback) => {
                        return super.DenomsMetadata(message, metadata, options, callback);
                    };
                }
            }
            v1beta1.QueryClient = QueryClient;
        })(v1beta1 = bank.v1beta1 || (bank.v1beta1 = {}));
    })(bank = cosmos.bank || (cosmos.bank = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=query.js.map