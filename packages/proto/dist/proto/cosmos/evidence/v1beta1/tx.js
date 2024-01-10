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
const dependency_2 = __importStar(require("./../../../google/protobuf/any"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var evidence;
    (function (evidence) {
        var v1beta1;
        (function (v1beta1) {
            var _MsgSubmitEvidence_one_of_decls, _MsgSubmitEvidenceResponse_one_of_decls;
            class MsgSubmitEvidence extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgSubmitEvidence_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSubmitEvidence_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("submitter" in data && data.submitter != undefined) {
                            this.submitter = data.submitter;
                        }
                        if ("evidence" in data && data.evidence != undefined) {
                            this.evidence = data.evidence;
                        }
                    }
                }
                get submitter() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set submitter(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get evidence() {
                    return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2);
                }
                set evidence(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get has_evidence() {
                    return pb_1.Message.getField(this, 2) != null;
                }
                static fromObject(data) {
                    const message = new MsgSubmitEvidence({});
                    if (data.submitter != null) {
                        message.submitter = data.submitter;
                    }
                    if (data.evidence != null) {
                        message.evidence = dependency_2.google.protobuf.Any.fromObject(data.evidence);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.submitter != null) {
                        data.submitter = this.submitter;
                    }
                    if (this.evidence != null) {
                        data.evidence = this.evidence.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.submitter.length)
                        writer.writeString(1, this.submitter);
                    if (this.has_evidence)
                        writer.writeMessage(2, this.evidence, () => this.evidence.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSubmitEvidence();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.submitter = reader.readString();
                                break;
                            case 2:
                                reader.readMessage(message.evidence, () => message.evidence = dependency_2.google.protobuf.Any.deserialize(reader));
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
                    return MsgSubmitEvidence.deserialize(bytes);
                }
            }
            _MsgSubmitEvidence_one_of_decls = new WeakMap();
            v1beta1.MsgSubmitEvidence = MsgSubmitEvidence;
            class MsgSubmitEvidenceResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _MsgSubmitEvidenceResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MsgSubmitEvidenceResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("hash" in data && data.hash != undefined) {
                            this.hash = data.hash;
                        }
                    }
                }
                get hash() {
                    return pb_1.Message.getFieldWithDefault(this, 4, new Uint8Array(0));
                }
                set hash(value) {
                    pb_1.Message.setField(this, 4, value);
                }
                static fromObject(data) {
                    const message = new MsgSubmitEvidenceResponse({});
                    if (data.hash != null) {
                        message.hash = data.hash;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.hash != null) {
                        data.hash = this.hash;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.hash.length)
                        writer.writeBytes(4, this.hash);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSubmitEvidenceResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 4:
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
                    return MsgSubmitEvidenceResponse.deserialize(bytes);
                }
            }
            _MsgSubmitEvidenceResponse_one_of_decls = new WeakMap();
            v1beta1.MsgSubmitEvidenceResponse = MsgSubmitEvidenceResponse;
            class UnimplementedMsgService {
            }
            UnimplementedMsgService.definition = {
                SubmitEvidence: {
                    path: "/cosmos.evidence.v1beta1.Msg/SubmitEvidence",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => MsgSubmitEvidence.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => MsgSubmitEvidenceResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1beta1.UnimplementedMsgService = UnimplementedMsgService;
            class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.SubmitEvidence = (message, metadata, options, callback) => {
                        return super.SubmitEvidence(message, metadata, options, callback);
                    };
                }
            }
            v1beta1.MsgClient = MsgClient;
        })(v1beta1 = evidence.v1beta1 || (evidence.v1beta1 = {}));
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=tx.js.map