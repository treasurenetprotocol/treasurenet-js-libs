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
const pb_1 = __importStar(require("google-protobuf"));
var cosmos;
(function (cosmos) {
    var base;
    (function (base) {
        var store;
        (function (store) {
            var v1beta1;
            (function (v1beta1) {
                var _StoreKVPair_one_of_decls;
                class StoreKVPair extends pb_1.Message {
                    constructor(data) {
                        super();
                        _StoreKVPair_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _StoreKVPair_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("store_key" in data && data.store_key != undefined) {
                                this.store_key = data.store_key;
                            }
                            if ("delete" in data && data.delete != undefined) {
                                this.delete = data.delete;
                            }
                            if ("key" in data && data.key != undefined) {
                                this.key = data.key;
                            }
                            if ("value" in data && data.value != undefined) {
                                this.value = data.value;
                            }
                        }
                    }
                    get store_key() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set store_key(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get delete() {
                        return pb_1.Message.getFieldWithDefault(this, 2, false);
                    }
                    set delete(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get key() {
                        return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
                    }
                    set key(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    get value() {
                        return pb_1.Message.getFieldWithDefault(this, 4, new Uint8Array(0));
                    }
                    set value(value) {
                        pb_1.Message.setField(this, 4, value);
                    }
                    static fromObject(data) {
                        const message = new StoreKVPair({});
                        if (data.store_key != null) {
                            message.store_key = data.store_key;
                        }
                        if (data.delete != null) {
                            message.delete = data.delete;
                        }
                        if (data.key != null) {
                            message.key = data.key;
                        }
                        if (data.value != null) {
                            message.value = data.value;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.store_key != null) {
                            data.store_key = this.store_key;
                        }
                        if (this.delete != null) {
                            data.delete = this.delete;
                        }
                        if (this.key != null) {
                            data.key = this.key;
                        }
                        if (this.value != null) {
                            data.value = this.value;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.store_key.length)
                            writer.writeString(1, this.store_key);
                        if (this.delete != false)
                            writer.writeBool(2, this.delete);
                        if (this.key.length)
                            writer.writeBytes(3, this.key);
                        if (this.value.length)
                            writer.writeBytes(4, this.value);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StoreKVPair();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.store_key = reader.readString();
                                    break;
                                case 2:
                                    message.delete = reader.readBool();
                                    break;
                                case 3:
                                    message.key = reader.readBytes();
                                    break;
                                case 4:
                                    message.value = reader.readBytes();
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
                        return StoreKVPair.deserialize(bytes);
                    }
                }
                _StoreKVPair_one_of_decls = new WeakMap();
                v1beta1.StoreKVPair = StoreKVPair;
            })(v1beta1 = store.v1beta1 || (store.v1beta1 = {}));
        })(store = base.store || (base.store = {}));
    })(base = cosmos.base || (cosmos.base = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=listening.js.map