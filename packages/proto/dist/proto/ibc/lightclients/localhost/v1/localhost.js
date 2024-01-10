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
exports.ibc = void 0;
const dependency_2 = __importStar(require("./../../../core/client/v1/client"));
const pb_1 = __importStar(require("google-protobuf"));
var ibc;
(function (ibc) {
    var lightclients;
    (function (lightclients) {
        var localhost;
        (function (localhost) {
            var v1;
            (function (v1) {
                var _ClientState_one_of_decls;
                class ClientState extends pb_1.Message {
                    constructor(data) {
                        super();
                        _ClientState_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ClientState_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("chain_id" in data && data.chain_id != undefined) {
                                this.chain_id = data.chain_id;
                            }
                            if ("height" in data && data.height != undefined) {
                                this.height = data.height;
                            }
                        }
                    }
                    get chain_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set chain_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get height() {
                        return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 2);
                    }
                    set height(value) {
                        pb_1.Message.setWrapperField(this, 2, value);
                    }
                    get has_height() {
                        return pb_1.Message.getField(this, 2) != null;
                    }
                    static fromObject(data) {
                        const message = new ClientState({});
                        if (data.chain_id != null) {
                            message.chain_id = data.chain_id;
                        }
                        if (data.height != null) {
                            message.height = dependency_2.ibc.core.client.v1.Height.fromObject(data.height);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.chain_id != null) {
                            data.chain_id = this.chain_id;
                        }
                        if (this.height != null) {
                            data.height = this.height.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.chain_id.length)
                            writer.writeString(1, this.chain_id);
                        if (this.has_height)
                            writer.writeMessage(2, this.height, () => this.height.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClientState();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.chain_id = reader.readString();
                                    break;
                                case 2:
                                    reader.readMessage(message.height, () => message.height = dependency_2.ibc.core.client.v1.Height.deserialize(reader));
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
                        return ClientState.deserialize(bytes);
                    }
                }
                _ClientState_one_of_decls = new WeakMap();
                v1.ClientState = ClientState;
            })(v1 = localhost.v1 || (localhost.v1 = {}));
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
})(ibc = exports.ibc || (exports.ibc = {}));
//# sourceMappingURL=localhost.js.map