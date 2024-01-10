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
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var crisis;
    (function (crisis) {
        var v1beta1;
        (function (v1beta1) {
            var _MsgVerifyInvariant_one_of_decls, _MsgVerifyInvariantResponse_one_of_decls;
            class MsgVerifyInvariant extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgVerifyInvariant_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgVerifyInvariant_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("sender" in data && data.sender != undefined) {
                            this.sender = data.sender;
                        }
                        if ("invariant_module_name" in data && data.invariant_module_name != undefined) {
                            this.invariant_module_name = data.invariant_module_name;
                        }
                        if ("invariant_route" in data && data.invariant_route != undefined) {
                            this.invariant_route = data.invariant_route;
                        }
                    }
                }
                get sender() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set sender(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get invariant_module_name() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set invariant_module_name(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get invariant_route() {
                    return pb_1.Message.getFieldWithDefault(this, 3, "");
                }
                set invariant_route(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new MsgVerifyInvariant({});
                    if (data.sender != null) {
                        message.sender = data.sender;
                    }
                    if (data.invariant_module_name != null) {
                        message.invariant_module_name = data.invariant_module_name;
                    }
                    if (data.invariant_route != null) {
                        message.invariant_route = data.invariant_route;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.sender != null) {
                        data.sender = this.sender;
                    }
                    if (this.invariant_module_name != null) {
                        data.invariant_module_name = this.invariant_module_name;
                    }
                    if (this.invariant_route != null) {
                        data.invariant_route = this.invariant_route;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.sender.length)
                        writer.writeString(1, this.sender);
                    if (this.invariant_module_name.length)
                        writer.writeString(2, this.invariant_module_name);
                    if (this.invariant_route.length)
                        writer.writeString(3, this.invariant_route);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgVerifyInvariant();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.sender = reader.readString();
                                break;
                            case 2:
                                message.invariant_module_name = reader.readString();
                                break;
                            case 3:
                                message.invariant_route = reader.readString();
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
                    return MsgVerifyInvariant.deserialize(bytes);
                }
            }
            _MsgVerifyInvariant_one_of_decls = new WeakMap();
            v1beta1.MsgVerifyInvariant = MsgVerifyInvariant;
            class MsgVerifyInvariantResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgVerifyInvariantResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgVerifyInvariantResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") { }
                }
                static fromObject(data) {
                    const message = new MsgVerifyInvariantResponse({});
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
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgVerifyInvariantResponse();
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
                    return MsgVerifyInvariantResponse.deserialize(bytes);
                }
            }
            _MsgVerifyInvariantResponse_one_of_decls = new WeakMap();
            v1beta1.MsgVerifyInvariantResponse = MsgVerifyInvariantResponse;
            class UnimplementedMsgService {
            }
            UnimplementedMsgService.definition = {
                VerifyInvariant: {
                    path: "/cosmos.crisis.v1beta1.Msg/VerifyInvariant",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgVerifyInvariant.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgVerifyInvariantResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1beta1.UnimplementedMsgService = UnimplementedMsgService;
            class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.VerifyInvariant = (message, metadata, options, callback) => {
                        return super.VerifyInvariant(message, metadata, options, callback);
                    };
                }
            }
            v1beta1.MsgClient = MsgClient;
        })(v1beta1 = crisis.v1beta1 || (crisis.v1beta1 = {}));
    })(crisis = cosmos.crisis || (cosmos.crisis = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=tx.js.map