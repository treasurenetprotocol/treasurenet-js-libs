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
exports.tendermint = void 0;
const pb_1 = __importStar(require("google-protobuf"));
var tendermint;
(function (tendermint) {
    var libs;
    (function (libs) {
        var bits;
        (function (bits) {
            var _BitArray_one_of_decls;
            class BitArray extends pb_1.Message {
                constructor(data) {
                    super();
                    _BitArray_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _BitArray_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("bits" in data && data.bits != undefined) {
                            this.bits = data.bits;
                        }
                        if ("elems" in data && data.elems != undefined) {
                            this.elems = data.elems;
                        }
                    }
                }
                get bits() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set bits(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get elems() {
                    return pb_1.Message.getFieldWithDefault(this, 2, []);
                }
                set elems(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                static fromObject(data) {
                    const message = new BitArray({});
                    if (data.bits != null) {
                        message.bits = data.bits;
                    }
                    if (data.elems != null) {
                        message.elems = data.elems;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.bits != null) {
                        data.bits = this.bits;
                    }
                    if (this.elems != null) {
                        data.elems = this.elems;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.bits != 0)
                        writer.writeInt64(1, this.bits);
                    if (this.elems.length)
                        writer.writePackedUint64(2, this.elems);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BitArray();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.bits = reader.readInt64();
                                break;
                            case 2:
                                message.elems = reader.readPackedUint64();
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
                    return BitArray.deserialize(bytes);
                }
            }
            _BitArray_one_of_decls = new WeakMap();
            bits.BitArray = BitArray;
        })(bits = libs.bits || (libs.bits = {}));
    })(libs = tendermint.libs || (tendermint.libs = {}));
})(tendermint = exports.tendermint || (exports.tendermint = {}));
//# sourceMappingURL=types.js.map