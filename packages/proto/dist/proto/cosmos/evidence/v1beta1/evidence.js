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
const dependency_2 = __importStar(require("./../../../google/protobuf/timestamp"));
const pb_1 = __importStar(require("google-protobuf"));
var cosmos;
(function (cosmos) {
    var evidence;
    (function (evidence) {
        var v1beta1;
        (function (v1beta1) {
            var _Equivocation_one_of_decls;
            class Equivocation extends pb_1.Message {
                constructor(data) {
                    super();
                    _Equivocation_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Equivocation_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("height" in data && data.height != undefined) {
                            this.height = data.height;
                        }
                        if ("time" in data && data.time != undefined) {
                            this.time = data.time;
                        }
                        if ("power" in data && data.power != undefined) {
                            this.power = data.power;
                        }
                        if ("consensus_address" in data && data.consensus_address != undefined) {
                            this.consensus_address = data.consensus_address;
                        }
                    }
                }
                get height() {
                    return pb_1.Message.getFieldWithDefault(this, 1, 0);
                }
                set height(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get time() {
                    return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 2);
                }
                set time(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get has_time() {
                    return pb_1.Message.getField(this, 2) != null;
                }
                get power() {
                    return pb_1.Message.getFieldWithDefault(this, 3, 0);
                }
                set power(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                get consensus_address() {
                    return pb_1.Message.getFieldWithDefault(this, 4, "");
                }
                set consensus_address(value) {
                    pb_1.Message.setField(this, 4, value);
                }
                static fromObject(data) {
                    const message = new Equivocation({});
                    if (data.height != null) {
                        message.height = data.height;
                    }
                    if (data.time != null) {
                        message.time = dependency_2.google.protobuf.Timestamp.fromObject(data.time);
                    }
                    if (data.power != null) {
                        message.power = data.power;
                    }
                    if (data.consensus_address != null) {
                        message.consensus_address = data.consensus_address;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.height != null) {
                        data.height = this.height;
                    }
                    if (this.time != null) {
                        data.time = this.time.toObject();
                    }
                    if (this.power != null) {
                        data.power = this.power;
                    }
                    if (this.consensus_address != null) {
                        data.consensus_address = this.consensus_address;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.height != 0)
                        writer.writeInt64(1, this.height);
                    if (this.has_time)
                        writer.writeMessage(2, this.time, () => this.time.serialize(writer));
                    if (this.power != 0)
                        writer.writeInt64(3, this.power);
                    if (this.consensus_address.length)
                        writer.writeString(4, this.consensus_address);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Equivocation();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.height = reader.readInt64();
                                break;
                            case 2:
                                reader.readMessage(message.time, () => message.time = dependency_2.google.protobuf.Timestamp.deserialize(reader));
                                break;
                            case 3:
                                message.power = reader.readInt64();
                                break;
                            case 4:
                                message.consensus_address = reader.readString();
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
                    return Equivocation.deserialize(bytes);
                }
            }
            _Equivocation_one_of_decls = new WeakMap();
            v1beta1.Equivocation = Equivocation;
        })(v1beta1 = evidence.v1beta1 || (evidence.v1beta1 = {}));
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=evidence.js.map