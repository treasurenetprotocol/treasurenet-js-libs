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
exports.google = void 0;
const dependency_1 = __importStar(require("./source_context"));
const dependency_2 = __importStar(require("./type"));
const pb_1 = __importStar(require("google-protobuf"));
var google;
(function (google) {
    var protobuf;
    (function (protobuf) {
        var _Api_one_of_decls, _Method_one_of_decls, _Mixin_one_of_decls;
        class Api extends pb_1.Message {
            constructor(data) {
                super();
                _Api_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3, 6], __classPrivateFieldGet(this, _Api_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("name" in data && data.name != undefined) {
                        this.name = data.name;
                    }
                    if ("methods" in data && data.methods != undefined) {
                        this.methods = data.methods;
                    }
                    if ("options" in data && data.options != undefined) {
                        this.options = data.options;
                    }
                    if ("version" in data && data.version != undefined) {
                        this.version = data.version;
                    }
                    if ("source_context" in data && data.source_context != undefined) {
                        this.source_context = data.source_context;
                    }
                    if ("mixins" in data && data.mixins != undefined) {
                        this.mixins = data.mixins;
                    }
                    if ("syntax" in data && data.syntax != undefined) {
                        this.syntax = data.syntax;
                    }
                }
            }
            get name() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set name(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get methods() {
                return pb_1.Message.getRepeatedWrapperField(this, Method, 2);
            }
            set methods(value) {
                pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
            get options() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_2.google.protobuf.Option, 3);
            }
            set options(value) {
                pb_1.Message.setRepeatedWrapperField(this, 3, value);
            }
            get version() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set version(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get source_context() {
                return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.SourceContext, 5);
            }
            set source_context(value) {
                pb_1.Message.setWrapperField(this, 5, value);
            }
            get has_source_context() {
                return pb_1.Message.getField(this, 5) != null;
            }
            get mixins() {
                return pb_1.Message.getRepeatedWrapperField(this, Mixin, 6);
            }
            set mixins(value) {
                pb_1.Message.setRepeatedWrapperField(this, 6, value);
            }
            get syntax() {
                return pb_1.Message.getFieldWithDefault(this, 7, dependency_2.google.protobuf.Syntax.SYNTAX_PROTO2);
            }
            set syntax(value) {
                pb_1.Message.setField(this, 7, value);
            }
            static fromObject(data) {
                const message = new Api({});
                if (data.name != null) {
                    message.name = data.name;
                }
                if (data.methods != null) {
                    message.methods = data.methods.map(item => Method.fromObject(item));
                }
                if (data.options != null) {
                    message.options = data.options.map(item => dependency_2.google.protobuf.Option.fromObject(item));
                }
                if (data.version != null) {
                    message.version = data.version;
                }
                if (data.source_context != null) {
                    message.source_context = dependency_1.google.protobuf.SourceContext.fromObject(data.source_context);
                }
                if (data.mixins != null) {
                    message.mixins = data.mixins.map(item => Mixin.fromObject(item));
                }
                if (data.syntax != null) {
                    message.syntax = data.syntax;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.methods != null) {
                    data.methods = this.methods.map((item) => item.toObject());
                }
                if (this.options != null) {
                    data.options = this.options.map((item) => item.toObject());
                }
                if (this.version != null) {
                    data.version = this.version;
                }
                if (this.source_context != null) {
                    data.source_context = this.source_context.toObject();
                }
                if (this.mixins != null) {
                    data.mixins = this.mixins.map((item) => item.toObject());
                }
                if (this.syntax != null) {
                    data.syntax = this.syntax;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.name.length)
                    writer.writeString(1, this.name);
                if (this.methods.length)
                    writer.writeRepeatedMessage(2, this.methods, (item) => item.serialize(writer));
                if (this.options.length)
                    writer.writeRepeatedMessage(3, this.options, (item) => item.serialize(writer));
                if (this.version.length)
                    writer.writeString(4, this.version);
                if (this.has_source_context)
                    writer.writeMessage(5, this.source_context, () => this.source_context.serialize(writer));
                if (this.mixins.length)
                    writer.writeRepeatedMessage(6, this.mixins, (item) => item.serialize(writer));
                if (this.syntax != dependency_2.google.protobuf.Syntax.SYNTAX_PROTO2)
                    writer.writeEnum(7, this.syntax);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Api();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.name = reader.readString();
                            break;
                        case 2:
                            reader.readMessage(message.methods, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Method.deserialize(reader), Method));
                            break;
                        case 3:
                            reader.readMessage(message.options, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.google.protobuf.Option.deserialize(reader), dependency_2.google.protobuf.Option));
                            break;
                        case 4:
                            message.version = reader.readString();
                            break;
                        case 5:
                            reader.readMessage(message.source_context, () => message.source_context = dependency_1.google.protobuf.SourceContext.deserialize(reader));
                            break;
                        case 6:
                            reader.readMessage(message.mixins, () => pb_1.Message.addToRepeatedWrapperField(message, 6, Mixin.deserialize(reader), Mixin));
                            break;
                        case 7:
                            message.syntax = reader.readEnum();
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
                return Api.deserialize(bytes);
            }
        }
        _Api_one_of_decls = new WeakMap();
        protobuf.Api = Api;
        class Method extends pb_1.Message {
            constructor(data) {
                super();
                _Method_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [6], __classPrivateFieldGet(this, _Method_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("name" in data && data.name != undefined) {
                        this.name = data.name;
                    }
                    if ("request_type_url" in data && data.request_type_url != undefined) {
                        this.request_type_url = data.request_type_url;
                    }
                    if ("request_streaming" in data && data.request_streaming != undefined) {
                        this.request_streaming = data.request_streaming;
                    }
                    if ("response_type_url" in data && data.response_type_url != undefined) {
                        this.response_type_url = data.response_type_url;
                    }
                    if ("response_streaming" in data && data.response_streaming != undefined) {
                        this.response_streaming = data.response_streaming;
                    }
                    if ("options" in data && data.options != undefined) {
                        this.options = data.options;
                    }
                    if ("syntax" in data && data.syntax != undefined) {
                        this.syntax = data.syntax;
                    }
                }
            }
            get name() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set name(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get request_type_url() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set request_type_url(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get request_streaming() {
                return pb_1.Message.getFieldWithDefault(this, 3, false);
            }
            set request_streaming(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get response_type_url() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set response_type_url(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get response_streaming() {
                return pb_1.Message.getFieldWithDefault(this, 5, false);
            }
            set response_streaming(value) {
                pb_1.Message.setField(this, 5, value);
            }
            get options() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_2.google.protobuf.Option, 6);
            }
            set options(value) {
                pb_1.Message.setRepeatedWrapperField(this, 6, value);
            }
            get syntax() {
                return pb_1.Message.getFieldWithDefault(this, 7, dependency_2.google.protobuf.Syntax.SYNTAX_PROTO2);
            }
            set syntax(value) {
                pb_1.Message.setField(this, 7, value);
            }
            static fromObject(data) {
                const message = new Method({});
                if (data.name != null) {
                    message.name = data.name;
                }
                if (data.request_type_url != null) {
                    message.request_type_url = data.request_type_url;
                }
                if (data.request_streaming != null) {
                    message.request_streaming = data.request_streaming;
                }
                if (data.response_type_url != null) {
                    message.response_type_url = data.response_type_url;
                }
                if (data.response_streaming != null) {
                    message.response_streaming = data.response_streaming;
                }
                if (data.options != null) {
                    message.options = data.options.map(item => dependency_2.google.protobuf.Option.fromObject(item));
                }
                if (data.syntax != null) {
                    message.syntax = data.syntax;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.request_type_url != null) {
                    data.request_type_url = this.request_type_url;
                }
                if (this.request_streaming != null) {
                    data.request_streaming = this.request_streaming;
                }
                if (this.response_type_url != null) {
                    data.response_type_url = this.response_type_url;
                }
                if (this.response_streaming != null) {
                    data.response_streaming = this.response_streaming;
                }
                if (this.options != null) {
                    data.options = this.options.map((item) => item.toObject());
                }
                if (this.syntax != null) {
                    data.syntax = this.syntax;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.name.length)
                    writer.writeString(1, this.name);
                if (this.request_type_url.length)
                    writer.writeString(2, this.request_type_url);
                if (this.request_streaming != false)
                    writer.writeBool(3, this.request_streaming);
                if (this.response_type_url.length)
                    writer.writeString(4, this.response_type_url);
                if (this.response_streaming != false)
                    writer.writeBool(5, this.response_streaming);
                if (this.options.length)
                    writer.writeRepeatedMessage(6, this.options, (item) => item.serialize(writer));
                if (this.syntax != dependency_2.google.protobuf.Syntax.SYNTAX_PROTO2)
                    writer.writeEnum(7, this.syntax);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Method();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.name = reader.readString();
                            break;
                        case 2:
                            message.request_type_url = reader.readString();
                            break;
                        case 3:
                            message.request_streaming = reader.readBool();
                            break;
                        case 4:
                            message.response_type_url = reader.readString();
                            break;
                        case 5:
                            message.response_streaming = reader.readBool();
                            break;
                        case 6:
                            reader.readMessage(message.options, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_2.google.protobuf.Option.deserialize(reader), dependency_2.google.protobuf.Option));
                            break;
                        case 7:
                            message.syntax = reader.readEnum();
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
                return Method.deserialize(bytes);
            }
        }
        _Method_one_of_decls = new WeakMap();
        protobuf.Method = Method;
        class Mixin extends pb_1.Message {
            constructor(data) {
                super();
                _Mixin_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Mixin_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("name" in data && data.name != undefined) {
                        this.name = data.name;
                    }
                    if ("root" in data && data.root != undefined) {
                        this.root = data.root;
                    }
                }
            }
            get name() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set name(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get root() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set root(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new Mixin({});
                if (data.name != null) {
                    message.name = data.name;
                }
                if (data.root != null) {
                    message.root = data.root;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.root != null) {
                    data.root = this.root;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.name.length)
                    writer.writeString(1, this.name);
                if (this.root.length)
                    writer.writeString(2, this.root);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Mixin();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.name = reader.readString();
                            break;
                        case 2:
                            message.root = reader.readString();
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
                return Mixin.deserialize(bytes);
            }
        }
        _Mixin_one_of_decls = new WeakMap();
        protobuf.Mixin = Mixin;
    })(protobuf = google.protobuf || (google.protobuf = {}));
})(google = exports.google || (exports.google = {}));
//# sourceMappingURL=api.js.map