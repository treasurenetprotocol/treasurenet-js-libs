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
const dependency_2 = __importStar(require("./../../../../cosmos/base/v1beta1/coin"));
const dependency_3 = __importStar(require("./../../../core/client/v1/client"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var ibc;
(function (ibc) {
    var applications;
    (function (applications) {
        var transfer;
        (function (transfer) {
            var v1;
            (function (v1) {
                var _MsgTransfer_one_of_decls, _MsgTransferResponse_one_of_decls;
                class MsgTransfer extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgTransfer_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgTransfer_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("source_port" in data && data.source_port != undefined) {
                                this.source_port = data.source_port;
                            }
                            if ("source_channel" in data && data.source_channel != undefined) {
                                this.source_channel = data.source_channel;
                            }
                            if ("token" in data && data.token != undefined) {
                                this.token = data.token;
                            }
                            if ("sender" in data && data.sender != undefined) {
                                this.sender = data.sender;
                            }
                            if ("receiver" in data && data.receiver != undefined) {
                                this.receiver = data.receiver;
                            }
                            if ("timeout_height" in data && data.timeout_height != undefined) {
                                this.timeout_height = data.timeout_height;
                            }
                            if ("timeout_timestamp" in data && data.timeout_timestamp != undefined) {
                                this.timeout_timestamp = data.timeout_timestamp;
                            }
                        }
                    }
                    get source_port() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set source_port(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get source_channel() {
                        return pb_1.Message.getFieldWithDefault(this, 2, "");
                    }
                    set source_channel(value) {
                        pb_1.Message.setField(this, 2, value);
                    }
                    get token() {
                        return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3);
                    }
                    set token(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_token() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    get sender() {
                        return pb_1.Message.getFieldWithDefault(this, 4, "");
                    }
                    set sender(value) {
                        pb_1.Message.setField(this, 4, value);
                    }
                    get receiver() {
                        return pb_1.Message.getFieldWithDefault(this, 5, "");
                    }
                    set receiver(value) {
                        pb_1.Message.setField(this, 5, value);
                    }
                    get timeout_height() {
                        return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 6);
                    }
                    set timeout_height(value) {
                        pb_1.Message.setWrapperField(this, 6, value);
                    }
                    get has_timeout_height() {
                        return pb_1.Message.getField(this, 6) != null;
                    }
                    get timeout_timestamp() {
                        return pb_1.Message.getFieldWithDefault(this, 7, 0);
                    }
                    set timeout_timestamp(value) {
                        pb_1.Message.setField(this, 7, value);
                    }
                    static fromObject(data) {
                        const message = new MsgTransfer({});
                        if (data.source_port != null) {
                            message.source_port = data.source_port;
                        }
                        if (data.source_channel != null) {
                            message.source_channel = data.source_channel;
                        }
                        if (data.token != null) {
                            message.token = dependency_2.cosmos.base.v1beta1.Coin.fromObject(data.token);
                        }
                        if (data.sender != null) {
                            message.sender = data.sender;
                        }
                        if (data.receiver != null) {
                            message.receiver = data.receiver;
                        }
                        if (data.timeout_height != null) {
                            message.timeout_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.timeout_height);
                        }
                        if (data.timeout_timestamp != null) {
                            message.timeout_timestamp = data.timeout_timestamp;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.source_port != null) {
                            data.source_port = this.source_port;
                        }
                        if (this.source_channel != null) {
                            data.source_channel = this.source_channel;
                        }
                        if (this.token != null) {
                            data.token = this.token.toObject();
                        }
                        if (this.sender != null) {
                            data.sender = this.sender;
                        }
                        if (this.receiver != null) {
                            data.receiver = this.receiver;
                        }
                        if (this.timeout_height != null) {
                            data.timeout_height = this.timeout_height.toObject();
                        }
                        if (this.timeout_timestamp != null) {
                            data.timeout_timestamp = this.timeout_timestamp;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.source_port.length)
                            writer.writeString(1, this.source_port);
                        if (this.source_channel.length)
                            writer.writeString(2, this.source_channel);
                        if (this.has_token)
                            writer.writeMessage(3, this.token, () => this.token.serialize(writer));
                        if (this.sender.length)
                            writer.writeString(4, this.sender);
                        if (this.receiver.length)
                            writer.writeString(5, this.receiver);
                        if (this.has_timeout_height)
                            writer.writeMessage(6, this.timeout_height, () => this.timeout_height.serialize(writer));
                        if (this.timeout_timestamp != 0)
                            writer.writeUint64(7, this.timeout_timestamp);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgTransfer();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.source_port = reader.readString();
                                    break;
                                case 2:
                                    message.source_channel = reader.readString();
                                    break;
                                case 3:
                                    reader.readMessage(message.token, () => message.token = dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader));
                                    break;
                                case 4:
                                    message.sender = reader.readString();
                                    break;
                                case 5:
                                    message.receiver = reader.readString();
                                    break;
                                case 6:
                                    reader.readMessage(message.timeout_height, () => message.timeout_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader));
                                    break;
                                case 7:
                                    message.timeout_timestamp = reader.readUint64();
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
                        return MsgTransfer.deserialize(bytes);
                    }
                }
                _MsgTransfer_one_of_decls = new WeakMap();
                v1.MsgTransfer = MsgTransfer;
                class MsgTransferResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _MsgTransferResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgTransferResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new MsgTransferResponse({});
                        return message;
                    }
                    toObject() {
                        const data = {};
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgTransferResponse();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                default: reader.skipField();
                            }
                        }
                        return message;
                    }
                    serializeBinary() {
                        return this.serialize();
                    }
                    static deserializeBinary(bytes) {
                        return MsgTransferResponse.deserialize(bytes);
                    }
                }
                _MsgTransferResponse_one_of_decls = new WeakMap();
                v1.MsgTransferResponse = MsgTransferResponse;
                class UnimplementedMsgService {
                }
                UnimplementedMsgService.definition = {
                    Transfer: {
                        path: "/ibc.applications.transfer.v1.Msg/Transfer",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => MsgTransfer.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => MsgTransferResponse.deserialize(new Uint8Array(bytes))
                    }
                };
                v1.UnimplementedMsgService = UnimplementedMsgService;
                class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
                    constructor(address, credentials, options) {
                        super(address, credentials, options);
                        this.Transfer = (message, metadata, options, callback) => {
                            return super.Transfer(message, metadata, options, callback);
                        };
                    }
                }
                v1.MsgClient = MsgClient;
            })(v1 = transfer.v1 || (transfer.v1 = {}));
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
})(ibc = exports.ibc || (exports.ibc = {}));
//# sourceMappingURL=tx.js.map