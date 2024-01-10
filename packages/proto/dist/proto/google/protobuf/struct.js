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
const pb_1 = __importStar(require("google-protobuf"));
var google;
(function (google) {
    var protobuf;
    (function (protobuf) {
        var _Struct_one_of_decls, _Value_one_of_decls, _ListValue_one_of_decls;
        let NullValue;
        (function (NullValue) {
            NullValue[NullValue["NULL_VALUE"] = 0] = "NULL_VALUE";
        })(NullValue = protobuf.NullValue || (protobuf.NullValue = {}));
        class Struct extends pb_1.Message {
            constructor(data) {
                super();
                _Struct_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Struct_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("fields" in data && data.fields != undefined) {
                        this.fields = data.fields;
                    }
                }
                if (!this.fields)
                    this.fields = new Map();
            }
            get fields() {
                return pb_1.Message.getField(this, 1);
            }
            set fields(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new Struct({});
                if (typeof data.fields == "object") {
                    message.fields = new Map(Object.entries(data.fields).map(([key, value]) => [key, Value.fromObject(value)]));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.fields != null) {
                    data.fields = (Object.fromEntries)((Array.from)(this.fields).map(([key, value]) => [key, value.toObject()]));
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                for (const [key, value] of this.fields) {
                    writer.writeMessage(1, this.fields, () => {
                        writer.writeString(1, key);
                        writer.writeMessage(2, value, () => value.serialize(writer));
                    });
                }
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Struct();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.fields, reader, reader.readString, () => {
                                let value;
                                reader.readMessage(message, () => value = Value.deserialize(reader));
                                return value;
                            }));
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
                return Struct.deserialize(bytes);
            }
        }
        _Struct_one_of_decls = new WeakMap();
        protobuf.Struct = Struct;
        class Value extends pb_1.Message {
            constructor(data) {
                super();
                _Value_one_of_decls.set(this, [[1, 2, 3, 4, 5, 6]]);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Value_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("null_value" in data && data.null_value != undefined) {
                        this.null_value = data.null_value;
                    }
                    if ("number_value" in data && data.number_value != undefined) {
                        this.number_value = data.number_value;
                    }
                    if ("string_value" in data && data.string_value != undefined) {
                        this.string_value = data.string_value;
                    }
                    if ("bool_value" in data && data.bool_value != undefined) {
                        this.bool_value = data.bool_value;
                    }
                    if ("struct_value" in data && data.struct_value != undefined) {
                        this.struct_value = data.struct_value;
                    }
                    if ("list_value" in data && data.list_value != undefined) {
                        this.list_value = data.list_value;
                    }
                }
            }
            get null_value() {
                return pb_1.Message.getFieldWithDefault(this, 1, NullValue.NULL_VALUE);
            }
            set null_value(value) {
                pb_1.Message.setOneofField(this, 1, __classPrivateFieldGet(this, _Value_one_of_decls, "f")[0], value);
            }
            get has_null_value() {
                return pb_1.Message.getField(this, 1) != null;
            }
            get number_value() {
                return pb_1.Message.getFieldWithDefault(this, 2, 0);
            }
            set number_value(value) {
                pb_1.Message.setOneofField(this, 2, __classPrivateFieldGet(this, _Value_one_of_decls, "f")[0], value);
            }
            get has_number_value() {
                return pb_1.Message.getField(this, 2) != null;
            }
            get string_value() {
                return pb_1.Message.getFieldWithDefault(this, 3, "");
            }
            set string_value(value) {
                pb_1.Message.setOneofField(this, 3, __classPrivateFieldGet(this, _Value_one_of_decls, "f")[0], value);
            }
            get has_string_value() {
                return pb_1.Message.getField(this, 3) != null;
            }
            get bool_value() {
                return pb_1.Message.getFieldWithDefault(this, 4, false);
            }
            set bool_value(value) {
                pb_1.Message.setOneofField(this, 4, __classPrivateFieldGet(this, _Value_one_of_decls, "f")[0], value);
            }
            get has_bool_value() {
                return pb_1.Message.getField(this, 4) != null;
            }
            get struct_value() {
                return pb_1.Message.getWrapperField(this, Struct, 5);
            }
            set struct_value(value) {
                pb_1.Message.setOneofWrapperField(this, 5, __classPrivateFieldGet(this, _Value_one_of_decls, "f")[0], value);
            }
            get has_struct_value() {
                return pb_1.Message.getField(this, 5) != null;
            }
            get list_value() {
                return pb_1.Message.getWrapperField(this, ListValue, 6);
            }
            set list_value(value) {
                pb_1.Message.setOneofWrapperField(this, 6, __classPrivateFieldGet(this, _Value_one_of_decls, "f")[0], value);
            }
            get has_list_value() {
                return pb_1.Message.getField(this, 6) != null;
            }
            get kind() {
                const cases = {
                    0: "none",
                    1: "null_value",
                    2: "number_value",
                    3: "string_value",
                    4: "bool_value",
                    5: "struct_value",
                    6: "list_value"
                };
                return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3, 4, 5, 6])];
            }
            static fromObject(data) {
                const message = new Value({});
                if (data.null_value != null) {
                    message.null_value = data.null_value;
                }
                if (data.number_value != null) {
                    message.number_value = data.number_value;
                }
                if (data.string_value != null) {
                    message.string_value = data.string_value;
                }
                if (data.bool_value != null) {
                    message.bool_value = data.bool_value;
                }
                if (data.struct_value != null) {
                    message.struct_value = Struct.fromObject(data.struct_value);
                }
                if (data.list_value != null) {
                    message.list_value = ListValue.fromObject(data.list_value);
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.null_value != null) {
                    data.null_value = this.null_value;
                }
                if (this.number_value != null) {
                    data.number_value = this.number_value;
                }
                if (this.string_value != null) {
                    data.string_value = this.string_value;
                }
                if (this.bool_value != null) {
                    data.bool_value = this.bool_value;
                }
                if (this.struct_value != null) {
                    data.struct_value = this.struct_value.toObject();
                }
                if (this.list_value != null) {
                    data.list_value = this.list_value.toObject();
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.has_null_value)
                    writer.writeEnum(1, this.null_value);
                if (this.has_number_value)
                    writer.writeDouble(2, this.number_value);
                if (this.has_string_value)
                    writer.writeString(3, this.string_value);
                if (this.has_bool_value)
                    writer.writeBool(4, this.bool_value);
                if (this.has_struct_value)
                    writer.writeMessage(5, this.struct_value, () => this.struct_value.serialize(writer));
                if (this.has_list_value)
                    writer.writeMessage(6, this.list_value, () => this.list_value.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Value();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.null_value = reader.readEnum();
                            break;
                        case 2:
                            message.number_value = reader.readDouble();
                            break;
                        case 3:
                            message.string_value = reader.readString();
                            break;
                        case 4:
                            message.bool_value = reader.readBool();
                            break;
                        case 5:
                            reader.readMessage(message.struct_value, () => message.struct_value = Struct.deserialize(reader));
                            break;
                        case 6:
                            reader.readMessage(message.list_value, () => message.list_value = ListValue.deserialize(reader));
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
                return Value.deserialize(bytes);
            }
        }
        _Value_one_of_decls = new WeakMap();
        protobuf.Value = Value;
        class ListValue extends pb_1.Message {
            constructor(data) {
                super();
                _ListValue_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _ListValue_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("values" in data && data.values != undefined) {
                        this.values = data.values;
                    }
                }
            }
            get values() {
                return pb_1.Message.getRepeatedWrapperField(this, Value, 1);
            }
            set values(value) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
            static fromObject(data) {
                const message = new ListValue({});
                if (data.values != null) {
                    message.values = data.values.map(item => Value.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.values != null) {
                    data.values = this.values.map((item) => item.toObject());
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.values.length)
                    writer.writeRepeatedMessage(1, this.values, (item) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ListValue();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.values, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Value.deserialize(reader), Value));
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
                return ListValue.deserialize(bytes);
            }
        }
        _ListValue_one_of_decls = new WeakMap();
        protobuf.ListValue = ListValue;
    })(protobuf = google.protobuf || (google.protobuf = {}));
})(google = exports.google || (exports.google = {}));
//# sourceMappingURL=struct.js.map