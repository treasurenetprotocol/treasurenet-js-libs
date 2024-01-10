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
        var kv;
        (function (kv) {
            var v1beta1;
            (function (v1beta1) {
                var _Pairs_one_of_decls, _Pair_one_of_decls;
                class Pairs extends pb_1.Message {
                    constructor(data) {
                        super();
                        _Pairs_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _Pairs_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("pairs" in data && data.pairs != undefined) {
                                this.pairs = data.pairs;
                            }
                        }
                    }
                    get pairs() {
                        return pb_1.Message.getRepeatedWrapperField(this, Pair, 1);
                    }
                    set pairs(value) {
                        pb_1.Message.setRepeatedWrapperField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new Pairs({});
                        if (data.pairs != null) {
                            message.pairs = data.pairs.map(item => Pair.fromObject(item));
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.pairs != null) {
                            data.pairs = this.pairs.map((item) => item.toObject());
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.pairs.length)
                            writer.writeRepeatedMessage(1, this.pairs, (item) => item.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Pairs();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.pairs, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Pair.deserialize(reader), Pair));
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
                        return Pairs.deserialize(bytes);
                    }
                }
                _Pairs_one_of_decls = new WeakMap();
                v1beta1.Pairs = Pairs;
                class Pair extends pb_1.Message {
                    constructor(data) {
                        super();
                        _Pair_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Pair_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("key" in data && data.key != undefined) {
                                this.key = data.key;
                            }
                            if ("value" in data && data.value != undefined) {
                                this.value = data.value;
                            }
                        }
                    }
                    get key() {
                        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                    }
                    set key(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get value() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set value(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    static fromObject(data) {
                        const message = new Pair({});
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
                        if (this.key.length)
                            writer.writeBytes(1, this.key);
                        if (this.value.length)
                            writer.writeBytes(2, this.value);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Pair();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.key = reader.readBytes();
                                    break;
                                case 2:
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
                        return Pair.deserialize(bytes);
                    }
                }
                _Pair_one_of_decls = new WeakMap();
                v1beta1.Pair = Pair;
            })(v1beta1 = kv.v1beta1 || (kv.v1beta1 = {}));
        })(kv = base.kv || (base.kv = {}));
    })(base = cosmos.base || (cosmos.base = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=kv.js.map