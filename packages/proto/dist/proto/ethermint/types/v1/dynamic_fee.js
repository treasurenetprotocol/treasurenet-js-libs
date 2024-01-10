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
const pb_1 = __importStar(require("google-protobuf"));
var ethermint;
(function (ethermint) {
    var types;
    (function (types) {
        var v1;
        (function (v1) {
            var _ExtensionOptionDynamicFeeTx_one_of_decls;
            class ExtensionOptionDynamicFeeTx extends pb_1.Message {
                constructor(data) {
                    super();
                    _ExtensionOptionDynamicFeeTx_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ExtensionOptionDynamicFeeTx_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("max_priority_price" in data && data.max_priority_price != undefined) {
                            this.max_priority_price = data.max_priority_price;
                        }
                    }
                }
                get max_priority_price() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set max_priority_price(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new ExtensionOptionDynamicFeeTx({});
                    if (data.max_priority_price != null) {
                        message.max_priority_price = data.max_priority_price;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.max_priority_price != null) {
                        data.max_priority_price = this.max_priority_price;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.max_priority_price.length)
                        writer.writeString(1, this.max_priority_price);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ExtensionOptionDynamicFeeTx();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.max_priority_price = reader.readString();
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
                    return ExtensionOptionDynamicFeeTx.deserialize(bytes);
                }
            }
            _ExtensionOptionDynamicFeeTx_one_of_decls = new WeakMap();
            v1.ExtensionOptionDynamicFeeTx = ExtensionOptionDynamicFeeTx;
        })(v1 = types.v1 || (types.v1 = {}));
    })(types = ethermint.types || (ethermint.types = {}));
})(ethermint = exports.ethermint || (exports.ethermint = {}));
//# sourceMappingURL=dynamic_fee.js.map