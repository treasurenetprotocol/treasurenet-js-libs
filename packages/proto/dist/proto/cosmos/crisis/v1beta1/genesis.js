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
var cosmos;
(function (cosmos) {
    var crisis;
    (function (crisis) {
        var v1beta1;
        (function (v1beta1) {
            var _GenesisState_one_of_decls;
            class GenesisState extends pb_1.Message {
                constructor(data) {
                    super();
                    _GenesisState_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GenesisState_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("constant_fee" in data && data.constant_fee != undefined) {
                            this.constant_fee = data.constant_fee;
                        }
                    }
                }
                get constant_fee() {
                    return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3);
                }
                set constant_fee(value) {
                    pb_1.Message.setWrapperField(this, 3, value);
                }
                get has_constant_fee() {
                    return pb_1.Message.getField(this, 3) != null;
                }
                static fromObject(data) {
                    const message = new GenesisState({});
                    if (data.constant_fee != null) {
                        message.constant_fee = dependency_2.cosmos.base.v1beta1.Coin.fromObject(data.constant_fee);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.constant_fee != null) {
                        data.constant_fee = this.constant_fee.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.has_constant_fee)
                        writer.writeMessage(3, this.constant_fee, () => this.constant_fee.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 3:
                                reader.readMessage(message.constant_fee, () => message.constant_fee = dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader));
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
            v1beta1.GenesisState = GenesisState;
        })(v1beta1 = crisis.v1beta1 || (crisis.v1beta1 = {}));
    })(crisis = cosmos.crisis || (cosmos.crisis = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=genesis.js.map