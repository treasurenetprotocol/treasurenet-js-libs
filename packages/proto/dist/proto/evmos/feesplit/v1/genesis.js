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
const dependency_1 = __importStar(require("./feesplit"));
const pb_1 = __importStar(require("google-protobuf"));
var evmos;
(function (evmos) {
    var feesplit;
    (function (feesplit) {
        var v1;
        (function (v1) {
            var _GenesisState_one_of_decls, _Params_one_of_decls;
            class GenesisState extends pb_1.Message {
                constructor(data) {
                    super();
                    _GenesisState_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _GenesisState_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("params" in data && data.params != undefined) {
                            this.params = data.params;
                        }
                        if ("fee_splits" in data && data.fee_splits != undefined) {
                            this.fee_splits = data.fee_splits;
                        }
                    }
                }
                get params() {
                    return pb_1.Message.getWrapperField(this, Params, 1);
                }
                set params(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_params() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                get fee_splits() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_1.evmos.feesplit.v1.FeeSplit, 2);
                }
                set fee_splits(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new GenesisState({});
                    if (data.params != null) {
                        message.params = Params.fromObject(data.params);
                    }
                    if (data.fee_splits != null) {
                        message.fee_splits = data.fee_splits.map(item => dependency_1.evmos.feesplit.v1.FeeSplit.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.params != null) {
                        data.params = this.params.toObject();
                    }
                    if (this.fee_splits != null) {
                        data.fee_splits = this.fee_splits.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_params)
                        writer.writeMessage(1, this.params, () => this.params.serialize(writer));
                    if (this.fee_splits.length)
                        writer.writeRepeatedMessage(2, this.fee_splits, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.params, () => message.params = Params.deserialize(reader));
                                break;
                            case 2:
                                reader.readMessage(message.fee_splits, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.evmos.feesplit.v1.FeeSplit.deserialize(reader), dependency_1.evmos.feesplit.v1.FeeSplit));
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
                    return GenesisState.deserialize(bytes);
                }
            }
            _GenesisState_one_of_decls = new WeakMap();
            v1.GenesisState = GenesisState;
            class Params extends pb_1.Message {
                constructor(data) {
                    super();
                    _Params_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Params_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("enable_fee_split" in data && data.enable_fee_split != undefined) {
                            this.enable_fee_split = data.enable_fee_split;
                        }
                        if ("developer_shares" in data && data.developer_shares != undefined) {
                            this.developer_shares = data.developer_shares;
                        }
                        if ("addr_derivation_cost_create" in data && data.addr_derivation_cost_create != undefined) {
                            this.addr_derivation_cost_create = data.addr_derivation_cost_create;
                        }
                    }
                }
                get enable_fee_split() {
                    return pb_1.Message.getFieldWithDefault(this, 1, false);
                }
                set enable_fee_split(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get developer_shares() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set developer_shares(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get addr_derivation_cost_create() {
                    return pb_1.Message.getFieldWithDefault(this, 3, 0);
                }
                set addr_derivation_cost_create(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new Params({});
                    if (data.enable_fee_split != null) {
                        message.enable_fee_split = data.enable_fee_split;
                    }
                    if (data.developer_shares != null) {
                        message.developer_shares = data.developer_shares;
                    }
                    if (data.addr_derivation_cost_create != null) {
                        message.addr_derivation_cost_create = data.addr_derivation_cost_create;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.enable_fee_split != null) {
                        data.enable_fee_split = this.enable_fee_split;
                    }
                    if (this.developer_shares != null) {
                        data.developer_shares = this.developer_shares;
                    }
                    if (this.addr_derivation_cost_create != null) {
                        data.addr_derivation_cost_create = this.addr_derivation_cost_create;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.enable_fee_split != false)
                        writer.writeBool(1, this.enable_fee_split);
                    if (this.developer_shares.length)
                        writer.writeString(2, this.developer_shares);
                    if (this.addr_derivation_cost_create != 0)
                        writer.writeUint64(3, this.addr_derivation_cost_create);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Params();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.enable_fee_split = reader.readBool();
                                break;
                            case 2:
                                message.developer_shares = reader.readString();
                                break;
                            case 3:
                                message.addr_derivation_cost_create = reader.readUint64();
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
                    return Params.deserialize(bytes);
                }
            }
            _Params_one_of_decls = new WeakMap();
            v1.Params = Params;
        })(v1 = feesplit.v1 || (feesplit.v1 = {}));
    })(feesplit = evmos.feesplit || (evmos.feesplit = {}));
})(evmos = exports.evmos || (exports.evmos = {}));
//# sourceMappingURL=genesis.js.map