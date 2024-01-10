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
exports.ethermint = void 0;
const dependency_2 = __importStar(require("./evm"));
const pb_1 = __importStar(require("google-protobuf"));
var ethermint;
(function (ethermint) {
    var evm;
    (function (evm) {
        var v1;
        (function (v1) {
            var _GenesisState_one_of_decls, _GenesisAccount_one_of_decls;
            class GenesisState extends pb_1.Message {
                constructor(data) {
                    super();
                    _GenesisState_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _GenesisState_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("accounts" in data && data.accounts != undefined) {
                            this.accounts = data.accounts;
                        }
                        if ("params" in data && data.params != undefined) {
                            this.params = data.params;
                        }
                    }
                }
                get accounts() {
                    return pb_1.Message.getRepeatedWrapperField(this, GenesisAccount, 1);
                }
                set accounts(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                get params() {
                    return pb_1.Message.getWrapperField(this, dependency_2.ethermint.evm.v1.Params, 2);
                }
                set params(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get has_params() {
                    return pb_1.Message.getField(this, 2) != null;
                }
                static fromObject(data) {
                    const message = new GenesisState({});
                    if (data.accounts != null) {
                        message.accounts = data.accounts.map(item => GenesisAccount.fromObject(item));
                    }
                    if (data.params != null) {
                        message.params = dependency_2.ethermint.evm.v1.Params.fromObject(data.params);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.accounts != null) {
                        data.accounts = this.accounts.map((item) => item.toObject());
                    }
                    if (this.params != null) {
                        data.params = this.params.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.accounts.length)
                        writer.writeRepeatedMessage(1, this.accounts, (item) => item.serialize(writer));
                    if (this.has_params)
                        writer.writeMessage(2, this.params, () => this.params.serialize(writer));
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
                                reader.readMessage(message.accounts, () => pb_1.Message.addToRepeatedWrapperField(message, 1, GenesisAccount.deserialize(reader), GenesisAccount));
                                break;
                            case 2:
                                reader.readMessage(message.params, () => message.params = dependency_2.ethermint.evm.v1.Params.deserialize(reader));
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
            class GenesisAccount extends pb_1.Message {
                constructor(data) {
                    super();
                    _GenesisAccount_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _GenesisAccount_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("address" in data && data.address != undefined) {
                            this.address = data.address;
                        }
                        if ("code" in data && data.code != undefined) {
                            this.code = data.code;
                        }
                        if ("storage" in data && data.storage != undefined) {
                            this.storage = data.storage;
                        }
                    }
                }
                get address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get code() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set code(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get storage() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ethermint.evm.v1.State, 3);
                }
                set storage(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new GenesisAccount({});
                    if (data.address != null) {
                        message.address = data.address;
                    }
                    if (data.code != null) {
                        message.code = data.code;
                    }
                    if (data.storage != null) {
                        message.storage = data.storage.map(item => dependency_2.ethermint.evm.v1.State.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.address != null) {
                        data.address = this.address;
                    }
                    if (this.code != null) {
                        data.code = this.code;
                    }
                    if (this.storage != null) {
                        data.storage = this.storage.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.address.length)
                        writer.writeString(1, this.address);
                    if (this.code.length)
                        writer.writeString(2, this.code);
                    if (this.storage.length)
                        writer.writeRepeatedMessage(3, this.storage, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisAccount();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.address = reader.readString();
                                break;
                            case 2:
                                message.code = reader.readString();
                                break;
                            case 3:
                                reader.readMessage(message.storage, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.ethermint.evm.v1.State.deserialize(reader), dependency_2.ethermint.evm.v1.State));
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
                    return GenesisAccount.deserialize(bytes);
                }
            }
            _GenesisAccount_one_of_decls = new WeakMap();
            v1.GenesisAccount = GenesisAccount;
        })(v1 = evm.v1 || (evm.v1 = {}));
    })(evm = ethermint.evm || (ethermint.evm = {}));
})(ethermint = exports.ethermint || (exports.ethermint = {}));
//# sourceMappingURL=genesis.js.map