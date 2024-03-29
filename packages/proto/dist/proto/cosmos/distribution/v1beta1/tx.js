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
const dependency_2 = __importStar(require("./../../base/v1beta1/coin"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var distribution;
    (function (distribution) {
        var v1beta1;
        (function (v1beta1) {
            var _MsgSetWithdrawAddress_one_of_decls, _MsgSetWithdrawAddressResponse_one_of_decls, _MsgWithdrawDelegatorReward_one_of_decls, _MsgWithdrawDelegatorRewardResponse_one_of_decls, _MsgWithdrawValidatorCommission_one_of_decls, _MsgWithdrawValidatorCommissionResponse_one_of_decls, _MsgFundCommunityPool_one_of_decls, _MsgFundCommunityPoolResponse_one_of_decls;
            class MsgSetWithdrawAddress extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgSetWithdrawAddress_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSetWithdrawAddress_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("delegator_address" in data && data.delegator_address != undefined) {
                            this.delegator_address = data.delegator_address;
                        }
                        if ("withdraw_address" in data && data.withdraw_address != undefined) {
                            this.withdraw_address = data.withdraw_address;
                        }
                    }
                }
                get delegator_address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set delegator_address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get withdraw_address() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set withdraw_address(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new MsgSetWithdrawAddress({});
                    if (data.delegator_address != null) {
                        message.delegator_address = data.delegator_address;
                    }
                    if (data.withdraw_address != null) {
                        message.withdraw_address = data.withdraw_address;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.delegator_address != null) {
                        data.delegator_address = this.delegator_address;
                    }
                    if (this.withdraw_address != null) {
                        data.withdraw_address = this.withdraw_address;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.delegator_address.length)
                        writer.writeString(1, this.delegator_address);
                    if (this.withdraw_address.length)
                        writer.writeString(2, this.withdraw_address);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSetWithdrawAddress();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.delegator_address = reader.readString();
                                break;
                            case 2:
                                message.withdraw_address = reader.readString();
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
                    return MsgSetWithdrawAddress.deserialize(bytes);
                }
            }
            _MsgSetWithdrawAddress_one_of_decls = new WeakMap();
            v1beta1.MsgSetWithdrawAddress = MsgSetWithdrawAddress;
            class MsgSetWithdrawAddressResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgSetWithdrawAddressResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSetWithdrawAddressResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgSetWithdrawAddressResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSetWithdrawAddressResponse();
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
                    return MsgSetWithdrawAddressResponse.deserialize(bytes);
                }
            }
            _MsgSetWithdrawAddressResponse_one_of_decls = new WeakMap();
            v1beta1.MsgSetWithdrawAddressResponse = MsgSetWithdrawAddressResponse;
            class MsgWithdrawDelegatorReward extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgWithdrawDelegatorReward_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgWithdrawDelegatorReward_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("delegator_address" in data && data.delegator_address != undefined) {
                            this.delegator_address = data.delegator_address;
                        }
                        if ("validator_address" in data && data.validator_address != undefined) {
                            this.validator_address = data.validator_address;
                        }
                    }
                }
                get delegator_address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set delegator_address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get validator_address() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set validator_address(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new MsgWithdrawDelegatorReward({});
                    if (data.delegator_address != null) {
                        message.delegator_address = data.delegator_address;
                    }
                    if (data.validator_address != null) {
                        message.validator_address = data.validator_address;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.delegator_address != null) {
                        data.delegator_address = this.delegator_address;
                    }
                    if (this.validator_address != null) {
                        data.validator_address = this.validator_address;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.delegator_address.length)
                        writer.writeString(1, this.delegator_address);
                    if (this.validator_address.length)
                        writer.writeString(2, this.validator_address);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgWithdrawDelegatorReward();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.delegator_address = reader.readString();
                                break;
                            case 2:
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
                    return MsgWithdrawDelegatorReward.deserialize(bytes);
                }
            }
            _MsgWithdrawDelegatorReward_one_of_decls = new WeakMap();
            v1beta1.MsgWithdrawDelegatorReward = MsgWithdrawDelegatorReward;
            class MsgWithdrawDelegatorRewardResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgWithdrawDelegatorRewardResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgWithdrawDelegatorRewardResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgWithdrawDelegatorRewardResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgWithdrawDelegatorRewardResponse();
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
                    return MsgWithdrawDelegatorRewardResponse.deserialize(bytes);
                }
            }
            _MsgWithdrawDelegatorRewardResponse_one_of_decls = new WeakMap();
            v1beta1.MsgWithdrawDelegatorRewardResponse = MsgWithdrawDelegatorRewardResponse;
            class MsgWithdrawValidatorCommission extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgWithdrawValidatorCommission_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgWithdrawValidatorCommission_one_of_decls, "f"));
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
                    const message = new MsgWithdrawValidatorCommission({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgWithdrawValidatorCommission();
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
                    return MsgWithdrawValidatorCommission.deserialize(bytes);
                }
            }
            _MsgWithdrawValidatorCommission_one_of_decls = new WeakMap();
            v1beta1.MsgWithdrawValidatorCommission = MsgWithdrawValidatorCommission;
            class MsgWithdrawValidatorCommissionResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgWithdrawValidatorCommissionResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgWithdrawValidatorCommissionResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgWithdrawValidatorCommissionResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgWithdrawValidatorCommissionResponse();
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
                    return MsgWithdrawValidatorCommissionResponse.deserialize(bytes);
                }
            }
            _MsgWithdrawValidatorCommissionResponse_one_of_decls = new WeakMap();
            v1beta1.MsgWithdrawValidatorCommissionResponse = MsgWithdrawValidatorCommissionResponse;
            class MsgFundCommunityPool extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgFundCommunityPool_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _MsgFundCommunityPool_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("amount" in data && data.amount != undefined) {
                            this.amount = data.amount;
                        }
                        if ("depositor" in data && data.depositor != undefined) {
                            this.depositor = data.depositor;
                        }
                    }
                }
                get amount() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 1);
                }
                set amount(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                get depositor() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set depositor(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new MsgFundCommunityPool({});
                    if (data.amount != null) {
                        message.amount = data.amount.map(item => dependency_2.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    if (data.depositor != null) {
                        message.depositor = data.depositor;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.amount != null) {
                        data.amount = this.amount.map((item) => item.toObject());
                    }
                    if (this.depositor != null) {
                        data.depositor = this.depositor;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.amount.length)
                        writer.writeRepeatedMessage(1, this.amount, (item) => item.serialize(writer));
                    if (this.depositor.length)
                        writer.writeString(2, this.depositor);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgFundCommunityPool();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.amount, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin));
                                break;
                            case 2:
                                message.depositor = reader.readString();
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
                    return MsgFundCommunityPool.deserialize(bytes);
                }
            }
            _MsgFundCommunityPool_one_of_decls = new WeakMap();
            v1beta1.MsgFundCommunityPool = MsgFundCommunityPool;
            class MsgFundCommunityPoolResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgFundCommunityPoolResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgFundCommunityPoolResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgFundCommunityPoolResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgFundCommunityPoolResponse();
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
                    return MsgFundCommunityPoolResponse.deserialize(bytes);
                }
            }
            _MsgFundCommunityPoolResponse_one_of_decls = new WeakMap();
            v1beta1.MsgFundCommunityPoolResponse = MsgFundCommunityPoolResponse;
            class UnimplementedMsgService {
            }
            UnimplementedMsgService.definition = {
                SetWithdrawAddress: {
                    path: "/cosmos.distribution.v1beta1.Msg/SetWithdrawAddress",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgSetWithdrawAddress.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgSetWithdrawAddressResponse.deserialize(new Uint8Array(bytes))
                },
                WithdrawDelegatorReward: {
                    path: "/cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgWithdrawDelegatorReward.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgWithdrawDelegatorRewardResponse.deserialize(new Uint8Array(bytes))
                },
                WithdrawValidatorCommission: {
                    path: "/cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgWithdrawValidatorCommission.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgWithdrawValidatorCommissionResponse.deserialize(new Uint8Array(bytes))
                },
                FundCommunityPool: {
                    path: "/cosmos.distribution.v1beta1.Msg/FundCommunityPool",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgFundCommunityPool.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgFundCommunityPoolResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1beta1.UnimplementedMsgService = UnimplementedMsgService;
            class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.SetWithdrawAddress = (message, metadata, options, callback) => {
                        return super.SetWithdrawAddress(message, metadata, options, callback);
                    };
                    this.WithdrawDelegatorReward = (message, metadata, options, callback) => {
                        return super.WithdrawDelegatorReward(message, metadata, options, callback);
                    };
                    this.WithdrawValidatorCommission = (message, metadata, options, callback) => {
                        return super.WithdrawValidatorCommission(message, metadata, options, callback);
                    };
                    this.FundCommunityPool = (message, metadata, options, callback) => {
                        return super.FundCommunityPool(message, metadata, options, callback);
                    };
                }
            }
            v1beta1.MsgClient = MsgClient;
        })(v1beta1 = distribution.v1beta1 || (distribution.v1beta1 = {}));
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=tx.js.map