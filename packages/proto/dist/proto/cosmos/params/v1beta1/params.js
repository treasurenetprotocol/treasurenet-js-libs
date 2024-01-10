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
    var params;
    (function (params) {
        var v1beta1;
        (function (v1beta1) {
            var _ParameterChangeProposal_one_of_decls, _ParamChange_one_of_decls;
            class ParameterChangeProposal extends pb_1.Message {
                constructor(data) {
                    super();
                    _ParameterChangeProposal_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _ParameterChangeProposal_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("title" in data && data.title != undefined) {
                            this.title = data.title;
                        }
                        if ("description" in data && data.description != undefined) {
                            this.description = data.description;
                        }
                        if ("changes" in data && data.changes != undefined) {
                            this.changes = data.changes;
                        }
                    }
                }
                get title() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set title(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get description() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set description(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get changes() {
                    return pb_1.Message.getRepeatedWrapperField(this, ParamChange, 3);
                }
                set changes(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new ParameterChangeProposal({});
                    if (data.title != null) {
                        message.title = data.title;
                    }
                    if (data.description != null) {
                        message.description = data.description;
                    }
                    if (data.changes != null) {
                        message.changes = data.changes.map(item => ParamChange.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.title != null) {
                        data.title = this.title;
                    }
                    if (this.description != null) {
                        data.description = this.description;
                    }
                    if (this.changes != null) {
                        data.changes = this.changes.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.title.length)
                        writer.writeString(1, this.title);
                    if (this.description.length)
                        writer.writeString(2, this.description);
                    if (this.changes.length)
                        writer.writeRepeatedMessage(3, this.changes, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ParameterChangeProposal();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.title = reader.readString();
                                break;
                            case 2:
                                message.description = reader.readString();
                                break;
                            case 3:
                                reader.readMessage(message.changes, () => pb_1.Message.addToRepeatedWrapperField(message, 3, ParamChange.deserialize(reader), ParamChange));
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
                    return ParameterChangeProposal.deserialize(bytes);
                }
            }
            _ParameterChangeProposal_one_of_decls = new WeakMap();
            v1beta1.ParameterChangeProposal = ParameterChangeProposal;
            class ParamChange extends pb_1.Message {
                constructor(data) {
                    super();
                    _ParamChange_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ParamChange_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("subspace" in data && data.subspace != undefined) {
                            this.subspace = data.subspace;
                        }
                        if ("key" in data && data.key != undefined) {
                            this.key = data.key;
                        }
                        if ("value" in data && data.value != undefined) {
                            this.value = data.value;
                        }
                    }
                }
                get subspace() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set subspace(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get key() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set key(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get value() {
                    return pb_1.Message.getFieldWithDefault(this, 3, "");
                }
                set value(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new ParamChange({});
                    if (data.subspace != null) {
                        message.subspace = data.subspace;
                    }
                    if (data.key != null) {
                        message.key = data.key;
                    }
                    if (data.value != null) {
                        message.value = data.value;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.subspace != null) {
                        data.subspace = this.subspace;
                    }
                    if (this.key != null) {
                        data.key = this.key;
                    }
                    if (this.value != null) {
                        data.value = this.value;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.subspace.length)
                        writer.writeString(1, this.subspace);
                    if (this.key.length)
                        writer.writeString(2, this.key);
                    if (this.value.length)
                        writer.writeString(3, this.value);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ParamChange();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.subspace = reader.readString();
                                break;
                            case 2:
                                message.key = reader.readString();
                                break;
                            case 3:
                                message.value = reader.readString();
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
                    return ParamChange.deserialize(bytes);
                }
            }
            _ParamChange_one_of_decls = new WeakMap();
            v1beta1.ParamChange = ParamChange;
        })(v1beta1 = params.v1beta1 || (params.v1beta1 = {}));
    })(params = cosmos.params || (cosmos.params = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=params.js.map