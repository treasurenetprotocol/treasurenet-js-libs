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
const dependency_1 = __importStar(require("./any"));
const dependency_2 = __importStar(require("./source_context"));
const pb_1 = __importStar(require("google-protobuf"));
var google;
(function (google) {
    var protobuf;
    (function (protobuf) {
        var _Type_one_of_decls, _Field_one_of_decls, _Enum_one_of_decls, _EnumValue_one_of_decls, _Option_one_of_decls;
        let Syntax;
        (function (Syntax) {
            Syntax[Syntax["SYNTAX_PROTO2"] = 0] = "SYNTAX_PROTO2";
            Syntax[Syntax["SYNTAX_PROTO3"] = 1] = "SYNTAX_PROTO3";
            Syntax[Syntax["SYNTAX_EDITIONS"] = 2] = "SYNTAX_EDITIONS";
        })(Syntax = protobuf.Syntax || (protobuf.Syntax = {}));
        class Type extends pb_1.Message {
            constructor(data) {
                super();
                _Type_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3, 4], __classPrivateFieldGet(this, _Type_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("name" in data && data.name != undefined) {
                        this.name = data.name;
                    }
                    if ("fields" in data && data.fields != undefined) {
                        this.fields = data.fields;
                    }
                    if ("oneofs" in data && data.oneofs != undefined) {
                        this.oneofs = data.oneofs;
                    }
                    if ("options" in data && data.options != undefined) {
                        this.options = data.options;
                    }
                    if ("source_context" in data && data.source_context != undefined) {
                        this.source_context = data.source_context;
                    }
                    if ("syntax" in data && data.syntax != undefined) {
                        this.syntax = data.syntax;
                    }
                    if ("edition" in data && data.edition != undefined) {
                        this.edition = data.edition;
                    }
                }
            }
            get name() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set name(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get fields() {
                return pb_1.Message.getRepeatedWrapperField(this, Field, 2);
            }
            set fields(value) {
                pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
            get oneofs() {
                return pb_1.Message.getFieldWithDefault(this, 3, []);
            }
            set oneofs(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get options() {
                return pb_1.Message.getRepeatedWrapperField(this, Option, 4);
            }
            set options(value) {
                pb_1.Message.setRepeatedWrapperField(this, 4, value);
            }
            get source_context() {
                return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.SourceContext, 5);
            }
            set source_context(value) {
                pb_1.Message.setWrapperField(this, 5, value);
            }
            get has_source_context() {
                return pb_1.Message.getField(this, 5) != null;
            }
            get syntax() {
                return pb_1.Message.getFieldWithDefault(this, 6, Syntax.SYNTAX_PROTO2);
            }
            set syntax(value) {
                pb_1.Message.setField(this, 6, value);
            }
            get edition() {
                return pb_1.Message.getFieldWithDefault(this, 7, "");
            }
            set edition(value) {
                pb_1.Message.setField(this, 7, value);
            }
            static fromObject(data) {
                const message = new Type({});
                if (data.name != null) {
                    message.name = data.name;
                }
                if (data.fields != null) {
                    message.fields = data.fields.map(item => Field.fromObject(item));
                }
                if (data.oneofs != null) {
                    message.oneofs = data.oneofs;
                }
                if (data.options != null) {
                    message.options = data.options.map(item => Option.fromObject(item));
                }
                if (data.source_context != null) {
                    message.source_context = dependency_2.google.protobuf.SourceContext.fromObject(data.source_context);
                }
                if (data.syntax != null) {
                    message.syntax = data.syntax;
                }
                if (data.edition != null) {
                    message.edition = data.edition;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.fields != null) {
                    data.fields = this.fields.map((item) => item.toObject());
                }
                if (this.oneofs != null) {
                    data.oneofs = this.oneofs;
                }
                if (this.options != null) {
                    data.options = this.options.map((item) => item.toObject());
                }
                if (this.source_context != null) {
                    data.source_context = this.source_context.toObject();
                }
                if (this.syntax != null) {
                    data.syntax = this.syntax;
                }
                if (this.edition != null) {
                    data.edition = this.edition;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.name.length)
                    writer.writeString(1, this.name);
                if (this.fields.length)
                    writer.writeRepeatedMessage(2, this.fields, (item) => item.serialize(writer));
                if (this.oneofs.length)
                    writer.writeRepeatedString(3, this.oneofs);
                if (this.options.length)
                    writer.writeRepeatedMessage(4, this.options, (item) => item.serialize(writer));
                if (this.has_source_context)
                    writer.writeMessage(5, this.source_context, () => this.source_context.serialize(writer));
                if (this.syntax != Syntax.SYNTAX_PROTO2)
                    writer.writeEnum(6, this.syntax);
                if (this.edition.length)
                    writer.writeString(7, this.edition);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Type();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.name = reader.readString();
                            break;
                        case 2:
                            reader.readMessage(message.fields, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Field.deserialize(reader), Field));
                            break;
                        case 3:
                            pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                            break;
                        case 4:
                            reader.readMessage(message.options, () => pb_1.Message.addToRepeatedWrapperField(message, 4, Option.deserialize(reader), Option));
                            break;
                        case 5:
                            reader.readMessage(message.source_context, () => message.source_context = dependency_2.google.protobuf.SourceContext.deserialize(reader));
                            break;
                        case 6:
                            message.syntax = reader.readEnum();
                            break;
                        case 7:
                            message.edition = reader.readString();
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
                return Type.deserialize(bytes);
            }
        }
        _Type_one_of_decls = new WeakMap();
        protobuf.Type = Type;
        class Field extends pb_1.Message {
            constructor(data) {
                super();
                _Field_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [9], __classPrivateFieldGet(this, _Field_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("kind" in data && data.kind != undefined) {
                        this.kind = data.kind;
                    }
                    if ("cardinality" in data && data.cardinality != undefined) {
                        this.cardinality = data.cardinality;
                    }
                    if ("number" in data && data.number != undefined) {
                        this.number = data.number;
                    }
                    if ("name" in data && data.name != undefined) {
                        this.name = data.name;
                    }
                    if ("type_url" in data && data.type_url != undefined) {
                        this.type_url = data.type_url;
                    }
                    if ("oneof_index" in data && data.oneof_index != undefined) {
                        this.oneof_index = data.oneof_index;
                    }
                    if ("packed" in data && data.packed != undefined) {
                        this.packed = data.packed;
                    }
                    if ("options" in data && data.options != undefined) {
                        this.options = data.options;
                    }
                    if ("json_name" in data && data.json_name != undefined) {
                        this.json_name = data.json_name;
                    }
                    if ("default_value" in data && data.default_value != undefined) {
                        this.default_value = data.default_value;
                    }
                }
            }
            get kind() {
                return pb_1.Message.getFieldWithDefault(this, 1, Field.Kind.TYPE_UNKNOWN);
            }
            set kind(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get cardinality() {
                return pb_1.Message.getFieldWithDefault(this, 2, Field.Cardinality.CARDINALITY_UNKNOWN);
            }
            set cardinality(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get number() {
                return pb_1.Message.getFieldWithDefault(this, 3, 0);
            }
            set number(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get name() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set name(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get type_url() {
                return pb_1.Message.getFieldWithDefault(this, 6, "");
            }
            set type_url(value) {
                pb_1.Message.setField(this, 6, value);
            }
            get oneof_index() {
                return pb_1.Message.getFieldWithDefault(this, 7, 0);
            }
            set oneof_index(value) {
                pb_1.Message.setField(this, 7, value);
            }
            get packed() {
                return pb_1.Message.getFieldWithDefault(this, 8, false);
            }
            set packed(value) {
                pb_1.Message.setField(this, 8, value);
            }
            get options() {
                return pb_1.Message.getRepeatedWrapperField(this, Option, 9);
            }
            set options(value) {
                pb_1.Message.setRepeatedWrapperField(this, 9, value);
            }
            get json_name() {
                return pb_1.Message.getFieldWithDefault(this, 10, "");
            }
            set json_name(value) {
                pb_1.Message.setField(this, 10, value);
            }
            get default_value() {
                return pb_1.Message.getFieldWithDefault(this, 11, "");
            }
            set default_value(value) {
                pb_1.Message.setField(this, 11, value);
            }
            static fromObject(data) {
                const message = new Field({});
                if (data.kind != null) {
                    message.kind = data.kind;
                }
                if (data.cardinality != null) {
                    message.cardinality = data.cardinality;
                }
                if (data.number != null) {
                    message.number = data.number;
                }
                if (data.name != null) {
                    message.name = data.name;
                }
                if (data.type_url != null) {
                    message.type_url = data.type_url;
                }
                if (data.oneof_index != null) {
                    message.oneof_index = data.oneof_index;
                }
                if (data.packed != null) {
                    message.packed = data.packed;
                }
                if (data.options != null) {
                    message.options = data.options.map(item => Option.fromObject(item));
                }
                if (data.json_name != null) {
                    message.json_name = data.json_name;
                }
                if (data.default_value != null) {
                    message.default_value = data.default_value;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.kind != null) {
                    data.kind = this.kind;
                }
                if (this.cardinality != null) {
                    data.cardinality = this.cardinality;
                }
                if (this.number != null) {
                    data.number = this.number;
                }
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.type_url != null) {
                    data.type_url = this.type_url;
                }
                if (this.oneof_index != null) {
                    data.oneof_index = this.oneof_index;
                }
                if (this.packed != null) {
                    data.packed = this.packed;
                }
                if (this.options != null) {
                    data.options = this.options.map((item) => item.toObject());
                }
                if (this.json_name != null) {
                    data.json_name = this.json_name;
                }
                if (this.default_value != null) {
                    data.default_value = this.default_value;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.kind != Field.Kind.TYPE_UNKNOWN)
                    writer.writeEnum(1, this.kind);
                if (this.cardinality != Field.Cardinality.CARDINALITY_UNKNOWN)
                    writer.writeEnum(2, this.cardinality);
                if (this.number != 0)
                    writer.writeInt32(3, this.number);
                if (this.name.length)
                    writer.writeString(4, this.name);
                if (this.type_url.length)
                    writer.writeString(6, this.type_url);
                if (this.oneof_index != 0)
                    writer.writeInt32(7, this.oneof_index);
                if (this.packed != false)
                    writer.writeBool(8, this.packed);
                if (this.options.length)
                    writer.writeRepeatedMessage(9, this.options, (item) => item.serialize(writer));
                if (this.json_name.length)
                    writer.writeString(10, this.json_name);
                if (this.default_value.length)
                    writer.writeString(11, this.default_value);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Field();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.kind = reader.readEnum();
                            break;
                        case 2:
                            message.cardinality = reader.readEnum();
                            break;
                        case 3:
                            message.number = reader.readInt32();
                            break;
                        case 4:
                            message.name = reader.readString();
                            break;
                        case 6:
                            message.type_url = reader.readString();
                            break;
                        case 7:
                            message.oneof_index = reader.readInt32();
                            break;
                        case 8:
                            message.packed = reader.readBool();
                            break;
                        case 9:
                            reader.readMessage(message.options, () => pb_1.Message.addToRepeatedWrapperField(message, 9, Option.deserialize(reader), Option));
                            break;
                        case 10:
                            message.json_name = reader.readString();
                            break;
                        case 11:
                            message.default_value = reader.readString();
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
                return Field.deserialize(bytes);
            }
        }
        _Field_one_of_decls = new WeakMap();
        protobuf.Field = Field;
        (function (Field) {
            let Kind;
            (function (Kind) {
                Kind[Kind["TYPE_UNKNOWN"] = 0] = "TYPE_UNKNOWN";
                Kind[Kind["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
                Kind[Kind["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
                Kind[Kind["TYPE_INT64"] = 3] = "TYPE_INT64";
                Kind[Kind["TYPE_UINT64"] = 4] = "TYPE_UINT64";
                Kind[Kind["TYPE_INT32"] = 5] = "TYPE_INT32";
                Kind[Kind["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
                Kind[Kind["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
                Kind[Kind["TYPE_BOOL"] = 8] = "TYPE_BOOL";
                Kind[Kind["TYPE_STRING"] = 9] = "TYPE_STRING";
                Kind[Kind["TYPE_GROUP"] = 10] = "TYPE_GROUP";
                Kind[Kind["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
                Kind[Kind["TYPE_BYTES"] = 12] = "TYPE_BYTES";
                Kind[Kind["TYPE_UINT32"] = 13] = "TYPE_UINT32";
                Kind[Kind["TYPE_ENUM"] = 14] = "TYPE_ENUM";
                Kind[Kind["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
                Kind[Kind["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
                Kind[Kind["TYPE_SINT32"] = 17] = "TYPE_SINT32";
                Kind[Kind["TYPE_SINT64"] = 18] = "TYPE_SINT64";
            })(Kind = Field.Kind || (Field.Kind = {}));
            let Cardinality;
            (function (Cardinality) {
                Cardinality[Cardinality["CARDINALITY_UNKNOWN"] = 0] = "CARDINALITY_UNKNOWN";
                Cardinality[Cardinality["CARDINALITY_OPTIONAL"] = 1] = "CARDINALITY_OPTIONAL";
                Cardinality[Cardinality["CARDINALITY_REQUIRED"] = 2] = "CARDINALITY_REQUIRED";
                Cardinality[Cardinality["CARDINALITY_REPEATED"] = 3] = "CARDINALITY_REPEATED";
            })(Cardinality = Field.Cardinality || (Field.Cardinality = {}));
        })(Field = protobuf.Field || (protobuf.Field = {}));
        class Enum extends pb_1.Message {
            constructor(data) {
                super();
                _Enum_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3], __classPrivateFieldGet(this, _Enum_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("name" in data && data.name != undefined) {
                        this.name = data.name;
                    }
                    if ("enumvalue" in data && data.enumvalue != undefined) {
                        this.enumvalue = data.enumvalue;
                    }
                    if ("options" in data && data.options != undefined) {
                        this.options = data.options;
                    }
                    if ("source_context" in data && data.source_context != undefined) {
                        this.source_context = data.source_context;
                    }
                    if ("syntax" in data && data.syntax != undefined) {
                        this.syntax = data.syntax;
                    }
                    if ("edition" in data && data.edition != undefined) {
                        this.edition = data.edition;
                    }
                }
            }
            get name() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set name(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get enumvalue() {
                return pb_1.Message.getRepeatedWrapperField(this, EnumValue, 2);
            }
            set enumvalue(value) {
                pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
            get options() {
                return pb_1.Message.getRepeatedWrapperField(this, Option, 3);
            }
            set options(value) {
                pb_1.Message.setRepeatedWrapperField(this, 3, value);
            }
            get source_context() {
                return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.SourceContext, 4);
            }
            set source_context(value) {
                pb_1.Message.setWrapperField(this, 4, value);
            }
            get has_source_context() {
                return pb_1.Message.getField(this, 4) != null;
            }
            get syntax() {
                return pb_1.Message.getFieldWithDefault(this, 5, Syntax.SYNTAX_PROTO2);
            }
            set syntax(value) {
                pb_1.Message.setField(this, 5, value);
            }
            get edition() {
                return pb_1.Message.getFieldWithDefault(this, 6, "");
            }
            set edition(value) {
                pb_1.Message.setField(this, 6, value);
            }
            static fromObject(data) {
                const message = new Enum({});
                if (data.name != null) {
                    message.name = data.name;
                }
                if (data.enumvalue != null) {
                    message.enumvalue = data.enumvalue.map(item => EnumValue.fromObject(item));
                }
                if (data.options != null) {
                    message.options = data.options.map(item => Option.fromObject(item));
                }
                if (data.source_context != null) {
                    message.source_context = dependency_2.google.protobuf.SourceContext.fromObject(data.source_context);
                }
                if (data.syntax != null) {
                    message.syntax = data.syntax;
                }
                if (data.edition != null) {
                    message.edition = data.edition;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.enumvalue != null) {
                    data.enumvalue = this.enumvalue.map((item) => item.toObject());
                }
                if (this.options != null) {
                    data.options = this.options.map((item) => item.toObject());
                }
                if (this.source_context != null) {
                    data.source_context = this.source_context.toObject();
                }
                if (this.syntax != null) {
                    data.syntax = this.syntax;
                }
                if (this.edition != null) {
                    data.edition = this.edition;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.name.length)
                    writer.writeString(1, this.name);
                if (this.enumvalue.length)
                    writer.writeRepeatedMessage(2, this.enumvalue, (item) => item.serialize(writer));
                if (this.options.length)
                    writer.writeRepeatedMessage(3, this.options, (item) => item.serialize(writer));
                if (this.has_source_context)
                    writer.writeMessage(4, this.source_context, () => this.source_context.serialize(writer));
                if (this.syntax != Syntax.SYNTAX_PROTO2)
                    writer.writeEnum(5, this.syntax);
                if (this.edition.length)
                    writer.writeString(6, this.edition);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Enum();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.name = reader.readString();
                            break;
                        case 2:
                            reader.readMessage(message.enumvalue, () => pb_1.Message.addToRepeatedWrapperField(message, 2, EnumValue.deserialize(reader), EnumValue));
                            break;
                        case 3:
                            reader.readMessage(message.options, () => pb_1.Message.addToRepeatedWrapperField(message, 3, Option.deserialize(reader), Option));
                            break;
                        case 4:
                            reader.readMessage(message.source_context, () => message.source_context = dependency_2.google.protobuf.SourceContext.deserialize(reader));
                            break;
                        case 5:
                            message.syntax = reader.readEnum();
                            break;
                        case 6:
                            message.edition = reader.readString();
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
                return Enum.deserialize(bytes);
            }
        }
        _Enum_one_of_decls = new WeakMap();
        protobuf.Enum = Enum;
        class EnumValue extends pb_1.Message {
            constructor(data) {
                super();
                _EnumValue_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _EnumValue_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("name" in data && data.name != undefined) {
                        this.name = data.name;
                    }
                    if ("number" in data && data.number != undefined) {
                        this.number = data.number;
                    }
                    if ("options" in data && data.options != undefined) {
                        this.options = data.options;
                    }
                }
            }
            get name() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set name(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get number() {
                return pb_1.Message.getFieldWithDefault(this, 2, 0);
            }
            set number(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get options() {
                return pb_1.Message.getRepeatedWrapperField(this, Option, 3);
            }
            set options(value) {
                pb_1.Message.setRepeatedWrapperField(this, 3, value);
            }
            static fromObject(data) {
                const message = new EnumValue({});
                if (data.name != null) {
                    message.name = data.name;
                }
                if (data.number != null) {
                    message.number = data.number;
                }
                if (data.options != null) {
                    message.options = data.options.map(item => Option.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.number != null) {
                    data.number = this.number;
                }
                if (this.options != null) {
                    data.options = this.options.map((item) => item.toObject());
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.name.length)
                    writer.writeString(1, this.name);
                if (this.number != 0)
                    writer.writeInt32(2, this.number);
                if (this.options.length)
                    writer.writeRepeatedMessage(3, this.options, (item) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EnumValue();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.name = reader.readString();
                            break;
                        case 2:
                            message.number = reader.readInt32();
                            break;
                        case 3:
                            reader.readMessage(message.options, () => pb_1.Message.addToRepeatedWrapperField(message, 3, Option.deserialize(reader), Option));
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
                return EnumValue.deserialize(bytes);
            }
        }
        _EnumValue_one_of_decls = new WeakMap();
        protobuf.EnumValue = EnumValue;
        class Option extends pb_1.Message {
            constructor(data) {
                super();
                _Option_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Option_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("name" in data && data.name != undefined) {
                        this.name = data.name;
                    }
                    if ("value" in data && data.value != undefined) {
                        this.value = data.value;
                    }
                }
            }
            get name() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set name(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get value() {
                return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.Any, 2);
            }
            set value(value) {
                pb_1.Message.setWrapperField(this, 2, value);
            }
            get has_value() {
                return pb_1.Message.getField(this, 2) != null;
            }
            static fromObject(data) {
                const message = new Option({});
                if (data.name != null) {
                    message.name = data.name;
                }
                if (data.value != null) {
                    message.value = dependency_1.google.protobuf.Any.fromObject(data.value);
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.value != null) {
                    data.value = this.value.toObject();
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.name.length)
                    writer.writeString(1, this.name);
                if (this.has_value)
                    writer.writeMessage(2, this.value, () => this.value.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Option();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.name = reader.readString();
                            break;
                        case 2:
                            reader.readMessage(message.value, () => message.value = dependency_1.google.protobuf.Any.deserialize(reader));
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
                return Option.deserialize(bytes);
            }
        }
        _Option_one_of_decls = new WeakMap();
        protobuf.Option = Option;
    })(protobuf = google.protobuf || (google.protobuf = {}));
})(google = exports.google || (exports.google = {}));
//# sourceMappingURL=type.js.map