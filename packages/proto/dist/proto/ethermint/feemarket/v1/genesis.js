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
const dependency_2 = __importStar(require("./feemarket"));
const pb_1 = __importStar(require("google-protobuf"));
var ethermint;
(function (ethermint) {
    var feemarket;
    (function (feemarket) {
        var v1;
        (function (v1) {
            var _GenesisState_one_of_decls;
            class GenesisState extends pb_1.Message {
                constructor(data) {
                    super();
                    _GenesisState_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GenesisState_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("params" in data && data.params != undefined) {
                            this.params = data.params;
                        }
                        if ("block_gas" in data && data.block_gas != undefined) {
                            this.block_gas = data.block_gas;
                        }
                    }
                }
                get params() {
                    return pb_1.Message.getWrapperField(this, dependency_2.ethermint.feemarket.v1.Params, 1);
                }
                set params(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get has_params() {
                    return pb_1.Message.getField(this, 1) != null;
                }
                get block_gas() {
                    return pb_1.Message.getFieldWithDefault(this, 3, 0);
                }
                set block_gas(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new GenesisState({});
                    if (data.params != null) {
                        message.params = dependency_2.ethermint.feemarket.v1.Params.fromObject(data.params);
                    }
                    if (data.block_gas != null) {
                        message.block_gas = data.block_gas;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.params != null) {
                        data.params = this.params.toObject();
                    }
                    if (this.block_gas != null) {
                        data.block_gas = this.block_gas;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_params)
                        writer.writeMessage(1, this.params, () => this.params.serialize(writer));
                    if (this.block_gas != 0)
                        writer.writeUint64(3, this.block_gas);
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
                                reader.readMessage(message.params, () => message.params = dependency_2.ethermint.feemarket.v1.Params.deserialize(reader));
                                break;
                            case 3:
                                message.block_gas = reader.readUint64();
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
        })(v1 = feemarket.v1 || (feemarket.v1 = {}));
    })(feemarket = ethermint.feemarket || (ethermint.feemarket = {}));
})(ethermint = exports.ethermint || (exports.ethermint = {}));
//# sourceMappingURL=genesis.js.map