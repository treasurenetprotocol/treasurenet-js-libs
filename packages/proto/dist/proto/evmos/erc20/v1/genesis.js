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
const dependency_1 = __importStar(require("./erc20"));
const pb_1 = __importStar(require("google-protobuf"));
var evmos;
(function (evmos) {
    var erc20;
    (function (erc20) {
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
                        if ("token_pairs" in data && data.token_pairs != undefined) {
                            this.token_pairs = data.token_pairs;
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
                get token_pairs() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_1.evmos.erc20.v1.TokenPair, 2);
                }
                set token_pairs(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new GenesisState({});
                    if (data.params != null) {
                        message.params = Params.fromObject(data.params);
                    }
                    if (data.token_pairs != null) {
                        message.token_pairs = data.token_pairs.map(item => dependency_1.evmos.erc20.v1.TokenPair.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.params != null) {
                        data.params = this.params.toObject();
                    }
                    if (this.token_pairs != null) {
                        data.token_pairs = this.token_pairs.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_params)
                        writer.writeMessage(1, this.params, () => this.params.serialize(writer));
                    if (this.token_pairs.length)
                        writer.writeRepeatedMessage(2, this.token_pairs, (item) => item.serialize(writer));
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
                                reader.readMessage(message.token_pairs, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.evmos.erc20.v1.TokenPair.deserialize(reader), dependency_1.evmos.erc20.v1.TokenPair));
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
                        if ("enable_erc20" in data && data.enable_erc20 != undefined) {
                            this.enable_erc20 = data.enable_erc20;
                        }
                        if ("enable_evm_hook" in data && data.enable_evm_hook != undefined) {
                            this.enable_evm_hook = data.enable_evm_hook;
                        }
                    }
                }
                get enable_erc20() {
                    return pb_1.Message.getFieldWithDefault(this, 1, false);
                }
                set enable_erc20(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get enable_evm_hook() {
                    return pb_1.Message.getFieldWithDefault(this, 2, false);
                }
                set enable_evm_hook(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new Params({});
                    if (data.enable_erc20 != null) {
                        message.enable_erc20 = data.enable_erc20;
                    }
                    if (data.enable_evm_hook != null) {
                        message.enable_evm_hook = data.enable_evm_hook;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.enable_erc20 != null) {
                        data.enable_erc20 = this.enable_erc20;
                    }
                    if (this.enable_evm_hook != null) {
                        data.enable_evm_hook = this.enable_evm_hook;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.enable_erc20 != false)
                        writer.writeBool(1, this.enable_erc20);
                    if (this.enable_evm_hook != false)
                        writer.writeBool(2, this.enable_evm_hook);
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
                                message.enable_erc20 = reader.readBool();
                                break;
                            case 2:
                                message.enable_evm_hook = reader.readBool();
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
        })(v1 = erc20.v1 || (erc20.v1 = {}));
    })(erc20 = evmos.erc20 || (evmos.erc20 = {}));
})(evmos = exports.evmos || (exports.evmos = {}));
//# sourceMappingURL=genesis.js.map