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
const dependency_2 = __importStar(require("./../../base/v1beta1/coin"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var vesting;
    (function (vesting) {
        var v1beta1;
        (function (v1beta1) {
            var _MsgCreateVestingAccount_one_of_decls, _MsgCreateVestingAccountResponse_one_of_decls;
            class MsgCreateVestingAccount extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgCreateVestingAccount_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _MsgCreateVestingAccount_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("from_address" in data && data.from_address != undefined) {
                            this.from_address = data.from_address;
                        }
                        if ("to_address" in data && data.to_address != undefined) {
                            this.to_address = data.to_address;
                        }
                        if ("amount" in data && data.amount != undefined) {
                            this.amount = data.amount;
                        }
                        if ("end_time" in data && data.end_time != undefined) {
                            this.end_time = data.end_time;
                        }
                        if ("delayed" in data && data.delayed != undefined) {
                            this.delayed = data.delayed;
                        }
                    }
                }
                get from_address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set from_address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get to_address() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set to_address(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get amount() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3);
                }
                set amount(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 3, value);
                }
                get end_time() {
                    return pb_1.Message.getFieldWithDefault(this, 4, 0);
                }
                set end_time(value) {
                    pb_1.Message.setField(this, 4, value);
                }
                get delayed() {
                    return pb_1.Message.getFieldWithDefault(this, 5, false);
                }
                set delayed(value) {
                    pb_1.Message.setField(this, 5, value);
                }
                static fromObject(data) {
                    const message = new MsgCreateVestingAccount({});
                    if (data.from_address != null) {
                        message.from_address = data.from_address;
                    }
                    if (data.to_address != null) {
                        message.to_address = data.to_address;
                    }
                    if (data.amount != null) {
                        message.amount = data.amount.map(item => dependency_2.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    if (data.end_time != null) {
                        message.end_time = data.end_time;
                    }
                    if (data.delayed != null) {
                        message.delayed = data.delayed;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.from_address != null) {
                        data.from_address = this.from_address;
                    }
                    if (this.to_address != null) {
                        data.to_address = this.to_address;
                    }
                    if (this.amount != null) {
                        data.amount = this.amount.map((item) => item.toObject());
                    }
                    if (this.end_time != null) {
                        data.end_time = this.end_time;
                    }
                    if (this.delayed != null) {
                        data.delayed = this.delayed;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.from_address.length)
                        writer.writeString(1, this.from_address);
                    if (this.to_address.length)
                        writer.writeString(2, this.to_address);
                    if (this.amount.length)
                        writer.writeRepeatedMessage(3, this.amount, (item) => item.serialize(writer));
                    if (this.end_time != 0)
                        writer.writeInt64(4, this.end_time);
                    if (this.delayed != false)
                        writer.writeBool(5, this.delayed);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreateVestingAccount();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.from_address = reader.readString();
                                break;
                            case 2:
                                message.to_address = reader.readString();
                                break;
                            case 3:
                                reader.readMessage(message.amount, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin));
                                break;
                            case 4:
                                message.end_time = reader.readInt64();
                                break;
                            case 5:
                                message.delayed = reader.readBool();
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
                    return MsgCreateVestingAccount.deserialize(bytes);
                }
            }
            _MsgCreateVestingAccount_one_of_decls = new WeakMap();
            v1beta1.MsgCreateVestingAccount = MsgCreateVestingAccount;
            class MsgCreateVestingAccountResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgCreateVestingAccountResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgCreateVestingAccountResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgCreateVestingAccountResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreateVestingAccountResponse();
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
                    return MsgCreateVestingAccountResponse.deserialize(bytes);
                }
            }
            _MsgCreateVestingAccountResponse_one_of_decls = new WeakMap();
            v1beta1.MsgCreateVestingAccountResponse = MsgCreateVestingAccountResponse;
            class UnimplementedMsgService {
            }
            UnimplementedMsgService.definition = {
                CreateVestingAccount: {
                    path: "/cosmos.vesting.v1beta1.Msg/CreateVestingAccount",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgCreateVestingAccount.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgCreateVestingAccountResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1beta1.UnimplementedMsgService = UnimplementedMsgService;
            class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.CreateVestingAccount = (message, metadata, options, callback) => {
                        return super.CreateVestingAccount(message, metadata, options, callback);
                    };
                }
            }
            v1beta1.MsgClient = MsgClient;
        })(v1beta1 = vesting.v1beta1 || (vesting.v1beta1 = {}));
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=tx.js.map