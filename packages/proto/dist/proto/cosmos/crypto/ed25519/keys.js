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
    var crypto;
    (function (crypto) {
        var ed25519;
        (function (ed25519) {
            var _PubKey_one_of_decls, _PrivKey_one_of_decls;
            class PubKey extends pb_1.Message {
                constructor(data) {
                    super();
                    _PubKey_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PubKey_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("key" in data && data.key != undefined) {
                            this.key = data.key;
                        }
                    }
                }
                get key() {
                    return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                }
                set key(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new PubKey({});
                    if (data.key != null) {
                        message.key = data.key;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.key != null) {
                        data.key = this.key;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.key.length)
                        writer.writeBytes(1, this.key);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PubKey();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.key = reader.readBytes();
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
                    return PubKey.deserialize(bytes);
                }
            }
            _PubKey_one_of_decls = new WeakMap();
            ed25519.PubKey = PubKey;
            class PrivKey extends pb_1.Message {
                constructor(data) {
                    super();
                    _PrivKey_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PrivKey_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("key" in data && data.key != undefined) {
                            this.key = data.key;
                        }
                    }
                }
                get key() {
                    return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
                }
                set key(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new PrivKey({});
                    if (data.key != null) {
                        message.key = data.key;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.key != null) {
                        data.key = this.key;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.key.length)
                        writer.writeBytes(1, this.key);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PrivKey();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.key = reader.readBytes();
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
                    return PrivKey.deserialize(bytes);
                }
            }
            _PrivKey_one_of_decls = new WeakMap();
            ed25519.PrivKey = PrivKey;
        })(ed25519 = crypto.ed25519 || (crypto.ed25519 = {}));
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=keys.js.map