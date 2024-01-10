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
const dependency_1 = __importStar(require("./transfer"));
const pb_1 = __importStar(require("google-protobuf"));
var ibc;
(function (ibc) {
    var applications;
    (function (applications) {
        var transfer;
        (function (transfer) {
            var v1;
            (function (v1) {
                var _GenesisState_one_of_decls;
                class GenesisState extends pb_1.Message {
                    constructor(data) {
                        super();
                        _GenesisState_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _GenesisState_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("port_id" in data && data.port_id != undefined) {
                                this.port_id = data.port_id;
                            }
                            if ("denom_traces" in data && data.denom_traces != undefined) {
                                this.denom_traces = data.denom_traces;
                            }
                            if ("params" in data && data.params != undefined) {
                                this.params = data.params;
                            }
                        }
                    }
                    get port_id() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set port_id(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    get denom_traces() {
                        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ibc.applications.transfer.v1.DenomTrace, 2);
                    }
                    set denom_traces(value) {
                        pb_1.Message.setRepeatedWrapperField(this, 2, value);
                    }
                    get params() {
                        return pb_1.Message.getWrapperField(this, dependency_1.ibc.applications.transfer.v1.Params, 3);
                    }
                    set params(value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    }
                    get has_params() {
                        return pb_1.Message.getField(this, 3) != null;
                    }
                    static fromObject(data) {
                        const message = new GenesisState({});
                        if (data.port_id != null) {
                            message.port_id = data.port_id;
                        }
                        if (data.denom_traces != null) {
                            message.denom_traces = data.denom_traces.map(item => dependency_1.ibc.applications.transfer.v1.DenomTrace.fromObject(item));
                        }
                        if (data.params != null) {
                            message.params = dependency_1.ibc.applications.transfer.v1.Params.fromObject(data.params);
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.port_id != null) {
                            data.port_id = this.port_id;
                        }
                        if (this.denom_traces != null) {
                            data.denom_traces = this.denom_traces.map((item) => item.toObject());
                        }
                        if (this.params != null) {
                            data.params = this.params.toObject();
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.port_id.length)
                            writer.writeString(1, this.port_id);
                        if (this.denom_traces.length)
                            writer.writeRepeatedMessage(2, this.denom_traces, (item) => item.serialize(writer));
                        if (this.has_params)
                            writer.writeMessage(3, this.params, () => this.params.serialize(writer));
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.port_id = reader.readString();
                                    break;
                                case 2:
                                    reader.readMessage(message.denom_traces, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.ibc.applications.transfer.v1.DenomTrace.deserialize(reader), dependency_1.ibc.applications.transfer.v1.DenomTrace));
                                    break;
                                case 3:
                                    reader.readMessage(message.params, () => message.params = dependency_1.ibc.applications.transfer.v1.Params.deserialize(reader));
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
                        return GenesisState.deserialize(bytes);
                    }
                }
                _GenesisState_one_of_decls = new WeakMap();
                v1.GenesisState = GenesisState;
            })(v1 = transfer.v1 || (transfer.v1 = {}));
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
})(ibc = exports.ibc || (exports.ibc = {}));
//# sourceMappingURL=genesis.js.map