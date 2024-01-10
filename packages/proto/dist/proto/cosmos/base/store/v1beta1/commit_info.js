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
                var _CommitInfo_one_of_decls, _StoreInfo_one_of_decls, _CommitID_one_of_decls;
                class CommitInfo extends pb_1.Message {
                    constructor(data) {
                        super();
                        _CommitInfo_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _CommitInfo_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("version" in data && data.version != undefined) {
                                this.version = data.version;
                            }
                            if ("store_infos" in data && data.store_infos != undefined) {
                                this.store_infos = data.store_infos;
                            }
                        }
                    }
                    get version() {
                        return pb_1.Message.getFieldWithDefault(this, 1, 0);
                    }
                    set version(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get store_infos() {
                        return pb_1.Message.getRepeatedWrapperField(this, StoreInfo, 2);
                    }
                    set store_infos(value) {
                        pb_1.Message.setRepeatedWrapperField(this, 2, value);
                    }
                    static fromObject(data) {
                        const message = new CommitInfo({});
                        if (data.version != null) {
                            message.version = data.version;
                        }
                        if (data.store_infos != null) {
                            message.store_infos = data.store_infos.map(item => StoreInfo.fromObject(item));
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.version != null) {
                            data.version = this.version;
                        }
                        if (this.store_infos != null) {
                            data.store_infos = this.store_infos.map((item) => item.toObject());
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.version != 0)
                            writer.writeInt64(1, this.version);
                        if (this.store_infos.length)
                            writer.writeRepeatedMessage(2, this.store_infos, (item) => item.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CommitInfo();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.version = reader.readInt64();
                                    break;
                                case 2:
                                    reader.readMessage(message.store_infos, () => pb_1.Message.addToRepeatedWrapperField(message, 2, StoreInfo.deserialize(reader), StoreInfo));
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
                        return CommitInfo.deserialize(bytes);
                    }
                }
                _CommitInfo_one_of_decls = new WeakMap();
                v1beta1.CommitInfo = CommitInfo;
                class StoreInfo extends pb_1.Message {
                    constructor(data) {
                        super();
                        _StoreInfo_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _StoreInfo_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("name" in data && data.name != undefined) {
                                this.name = data.name;
                            }
                            if ("commit_id" in data && data.commit_id != undefined) {
                                this.commit_id = data.commit_id;
                            }
                        }
                    }
                    get name() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set name(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get commit_id() {
                        return pb_1.Message.getWrapperField(this, CommitID, 2);
                    }
                    set commit_id(value) {
                        pb_1.Message.setWrapperField(this, 2, value);
                    }
                    get has_commit_id() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    static fromObject(data) {
                        const message = new StoreInfo({});
                        if (data.name != null) {
                            message.name = data.name;
                        }
                        if (data.commit_id != null) {
                            message.commit_id = CommitID.fromObject(data.commit_id);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.name != null) {
                            data.name = this.name;
                        }
                        if (this.commit_id != null) {
                            data.commit_id = this.commit_id.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.name.length)
                            writer.writeString(1, this.name);
                        if (this.has_commit_id)
                            writer.writeMessage(2, this.commit_id, () => this.commit_id.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StoreInfo();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.name = reader.readString();
                                    break;
                                case 2:
                                    reader.readMessage(message.commit_id, () => message.commit_id = CommitID.deserialize(reader));
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
                        return StoreInfo.deserialize(bytes);
                    }
                }
                _StoreInfo_one_of_decls = new WeakMap();
                v1beta1.StoreInfo = StoreInfo;
                class CommitID extends pb_1.Message {
                    constructor(data) {
                        super();
                        _CommitID_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _CommitID_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("version" in data && data.version != undefined) {
                                this.version = data.version;
                            }
                            if ("hash" in data && data.hash != undefined) {
                                this.hash = data.hash;
                            }
                        }
                    }
                    get version() {
                        return pb_1.Message.getFieldWithDefault(this, 1, 0);
                    }
                    set version(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get hash() {
                        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
                    }
                    set hash(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    static fromObject(data) {
                        const message = new CommitID({});
                        if (data.version != null) {
                            message.version = data.version;
                        }
                        if (data.hash != null) {
                            message.hash = data.hash;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.version != null) {
                            data.version = this.version;
                        }
                        if (this.hash != null) {
                            data.hash = this.hash;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.version != 0)
                            writer.writeInt64(1, this.version);
                        if (this.hash.length)
                            writer.writeBytes(2, this.hash);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CommitID();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.version = reader.readInt64();
                                    break;
                                case 2:
                                    message.hash = reader.readBytes();
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
                        return CommitID.deserialize(bytes);
                    }
                }
                _CommitID_one_of_decls = new WeakMap();
                v1beta1.CommitID = CommitID;
            })(v1beta1 = store.v1beta1 || (store.v1beta1 = {}));
        })(store = base.store || (base.store = {}));
    })(base = cosmos.base || (cosmos.base = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=commit_info.js.map