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
                var _SnapshotItem_one_of_decls, _SnapshotStoreItem_one_of_decls, _SnapshotIAVLItem_one_of_decls;
                class SnapshotItem extends pb_1.Message {
                    constructor(data) {
                        super();
                        _SnapshotItem_one_of_decls.set(this, [[1, 2]]);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SnapshotItem_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("store" in data && data.store != undefined) {
                                this.store = data.store;
                            }
                            if ("iavl" in data && data.iavl != undefined) {
                                this.iavl = data.iavl;
                            }
                        }
                    }
                    get store() {
                        return pb_1.Message.getWrapperField(this, SnapshotStoreItem, 1);
                    }
                    set store(value) {
                        pb_1.Message.setOneofWrapperField(this, 1, __classPrivateFieldGet(this, _SnapshotItem_one_of_decls, "f")[0], value);
                    }
                    get has_store() {
                        return pb_1.Message.getField(this, 1) != null;
                    }
                    get iavl() {
                        return pb_1.Message.getWrapperField(this, SnapshotIAVLItem, 2);
                    }
                    set iavl(value) {
                        pb_1.Message.setOneofWrapperField(this, 2, __classPrivateFieldGet(this, _SnapshotItem_one_of_decls, "f")[0], value);
                    }
                    get has_iavl() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    get item() {
                        const cases = {
                            0: "none",
                            1: "store",
                            2: "iavl"
                        };
                        return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
                    }
                    static fromObject(data) {
                        const message = new SnapshotItem({});
                        if (data.store != null) {
                            message.store = SnapshotStoreItem.fromObject(data.store);
                        }
                        if (data.iavl != null) {
                            message.iavl = SnapshotIAVLItem.fromObject(data.iavl);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.store != null) {
                            data.store = this.store.toObject();
                        }
                        if (this.iavl != null) {
                            data.iavl = this.iavl.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.has_store)
                            writer.writeMessage(1, this.store, () => this.store.serialize(writer));
                        if (this.has_iavl)
                            writer.writeMessage(2, this.iavl, () => this.iavl.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SnapshotItem();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    reader.readMessage(message.store, () => message.store = SnapshotStoreItem.deserialize(reader));
                                    break;
                                case 2:
                                    reader.readMessage(message.iavl, () => message.iavl = SnapshotIAVLItem.deserialize(reader));
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
                        return SnapshotItem.deserialize(bytes);
                    }
                }
                _SnapshotItem_one_of_decls = new WeakMap();
                v1beta1.SnapshotItem = SnapshotItem;
                class SnapshotStoreItem extends pb_1.Message {
                    constructor(data) {
                        super();
                        _SnapshotStoreItem_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SnapshotStoreItem_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("name" in data && data.name != undefined) {
                                this.name = data.name;
                            }
                        }
                    }
                    get name() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set name(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new SnapshotStoreItem({});
                        if (data.name != null) {
                            message.name = data.name;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.name != null) {
                            data.name = this.name;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.name.length)
                            writer.writeString(1, this.name);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SnapshotStoreItem();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.name = reader.readString();
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
                        return SnapshotStoreItem.deserialize(bytes);
                    }
                }
                _SnapshotStoreItem_one_of_decls = new WeakMap();
                v1beta1.SnapshotStoreItem = SnapshotStoreItem;
                class SnapshotIAVLItem extends pb_1.Message {
                    constructor(data) {
                        super();
                        _SnapshotIAVLItem_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SnapshotIAVLItem_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("key" in data && data.key != undefined) {
                                this.key = data.key;
                            }
                            if ("value" in data && data.value != undefined) {
                                this.value = data.value;
                            }
                            if ("version" in data && data.version != undefined) {
                                this.version = data.version;
                            }
                            if ("height" in data && data.height != undefined) {
                                this.height = data.height;
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
                    get version() {
                        return pb_1.Message.getFieldWithDefault(this, 3, 0);
                    }
                    set version(value) {
                        pb_1.Message.setField(this, 3, value);
                    }
                    get height() {
                        return pb_1.Message.getFieldWithDefault(this, 4, 0);
                    }
                    set height(value) {
                        pb_1.Message.setField(this, 4, value);
                    }
                    static fromObject(data) {
                        const message = new SnapshotIAVLItem({});
                        if (data.key != null) {
                            message.key = data.key;
                        }
                        if (data.value != null) {
                            message.value = data.value;
                        }
                        if (data.version != null) {
                            message.version = data.version;
                        }
                        if (data.height != null) {
                            message.height = data.height;
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
                        if (this.version != null) {
                            data.version = this.version;
                        }
                        if (this.height != null) {
                            data.height = this.height;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.key.length)
                            writer.writeBytes(1, this.key);
                        if (this.value.length)
                            writer.writeBytes(2, this.value);
                        if (this.version != 0)
                            writer.writeInt64(3, this.version);
                        if (this.height != 0)
                            writer.writeInt32(4, this.height);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SnapshotIAVLItem();
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
                                case 3:
                                    message.version = reader.readInt64();
                                    break;
                                case 4:
                                    message.height = reader.readInt32();
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
                        return SnapshotIAVLItem.deserialize(bytes);
                    }
                }
                _SnapshotIAVLItem_one_of_decls = new WeakMap();
                v1beta1.SnapshotIAVLItem = SnapshotIAVLItem;
            })(v1beta1 = store.v1beta1 || (store.v1beta1 = {}));
        })(store = base.store || (base.store = {}));
    })(base = cosmos.base || (cosmos.base = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=snapshot.js.map