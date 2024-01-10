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
const dependency_2 = __importStar(require("./types"));
const dependency_3 = __importStar(require("./evidence"));
const pb_1 = __importStar(require("google-protobuf"));
var tendermint;
(function (tendermint) {
    var types;
    (function (types) {
        var _Block_one_of_decls;
        class Block extends pb_1.Message {
            constructor(data) {
                super();
                _Block_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Block_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("header" in data && data.header != undefined) {
                        this.header = data.header;
                    }
                    if ("data" in data && data.data != undefined) {
                        this.data = data.data;
                    }
                    if ("evidence" in data && data.evidence != undefined) {
                        this.evidence = data.evidence;
                    }
                    if ("last_commit" in data && data.last_commit != undefined) {
                        this.last_commit = data.last_commit;
                    }
                }
            }
            get header() {
                return pb_1.Message.getWrapperField(this, dependency_2.tendermint.types.Header, 1);
            }
            set header(value) {
                pb_1.Message.setWrapperField(this, 1, value);
            }
            get has_header() {
                return pb_1.Message.getField(this, 1) != null;
            }
            get data() {
                return pb_1.Message.getWrapperField(this, dependency_2.tendermint.types.Data, 2);
            }
            set data(value) {
                pb_1.Message.setWrapperField(this, 2, value);
            }
            get has_data() {
                return pb_1.Message.getField(this, 2) != null;
            }
            get evidence() {
                return pb_1.Message.getWrapperField(this, dependency_3.tendermint.types.EvidenceList, 3);
            }
            set evidence(value) {
                pb_1.Message.setWrapperField(this, 3, value);
            }
            get has_evidence() {
                return pb_1.Message.getField(this, 3) != null;
            }
            get last_commit() {
                return pb_1.Message.getWrapperField(this, dependency_2.tendermint.types.Commit, 4);
            }
            set last_commit(value) {
                pb_1.Message.setWrapperField(this, 4, value);
            }
            get has_last_commit() {
                return pb_1.Message.getField(this, 4) != null;
            }
            static fromObject(data) {
                const message = new Block({});
                if (data.header != null) {
                    message.header = dependency_2.tendermint.types.Header.fromObject(data.header);
                }
                if (data.data != null) {
                    message.data = dependency_2.tendermint.types.Data.fromObject(data.data);
                }
                if (data.evidence != null) {
                    message.evidence = dependency_3.tendermint.types.EvidenceList.fromObject(data.evidence);
                }
                if (data.last_commit != null) {
                    message.last_commit = dependency_2.tendermint.types.Commit.fromObject(data.last_commit);
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.header != null) {
                    data.header = this.header.toObject();
                }
                if (this.data != null) {
                    data.data = this.data.toObject();
                }
                if (this.evidence != null) {
                    data.evidence = this.evidence.toObject();
                }
                if (this.last_commit != null) {
                    data.last_commit = this.last_commit.toObject();
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.has_header)
                    writer.writeMessage(1, this.header, () => this.header.serialize(writer));
                if (this.has_data)
                    writer.writeMessage(2, this.data, () => this.data.serialize(writer));
                if (this.has_evidence)
                    writer.writeMessage(3, this.evidence, () => this.evidence.serialize(writer));
                if (this.has_last_commit)
                    writer.writeMessage(4, this.last_commit, () => this.last_commit.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Block();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.header, () => message.header = dependency_2.tendermint.types.Header.deserialize(reader));
                            break;
                        case 2:
                            reader.readMessage(message.data, () => message.data = dependency_2.tendermint.types.Data.deserialize(reader));
                            break;
                        case 3:
                            reader.readMessage(message.evidence, () => message.evidence = dependency_3.tendermint.types.EvidenceList.deserialize(reader));
                            break;
                        case 4:
                            reader.readMessage(message.last_commit, () => message.last_commit = dependency_2.tendermint.types.Commit.deserialize(reader));
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
                return Block.deserialize(bytes);
            }
        }
        _Block_one_of_decls = new WeakMap();
        types.Block = Block;
    })(types = tendermint.types || (tendermint.types = {}));
})(tendermint = exports.tendermint || (exports.tendermint = {}));
//# sourceMappingURL=block.js.map