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
        var _DoubleValue_one_of_decls, _FloatValue_one_of_decls, _Int64Value_one_of_decls, _UInt64Value_one_of_decls, _Int32Value_one_of_decls, _UInt32Value_one_of_decls, _BoolValue_one_of_decls, _StringValue_one_of_decls, _BytesValue_one_of_decls;
        class DoubleValue extends pb_1.Message {
            constructor(data) {
                super();
                _DoubleValue_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _DoubleValue_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("value" in data && data.value != undefined) {
                        this.value = data.value;
                    }
                }
            }
            get value() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set value(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new DoubleValue({});
                if (data.value != null) {
                    message.value = data.value;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.value != null) {
                    data.value = this.value;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.value != 0)
                    writer.writeDouble(1, this.value);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DoubleValue();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.value = reader.readDouble();
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
                return DoubleValue.deserialize(bytes);
            }
        }
        _DoubleValue_one_of_decls = new WeakMap();
        protobuf.DoubleValue = DoubleValue;
        class FloatValue extends pb_1.Message {
            constructor(data) {
                super();
                _FloatValue_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _FloatValue_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("value" in data && data.value != undefined) {
                        this.value = data.value;
                    }
                }
            }
            get value() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set value(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new FloatValue({});
                if (data.value != null) {
                    message.value = data.value;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.value != null) {
                    data.value = this.value;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.value != 0)
                    writer.writeFloat(1, this.value);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FloatValue();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.value = reader.readFloat();
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
                return FloatValue.deserialize(bytes);
            }
        }
        _FloatValue_one_of_decls = new WeakMap();
        protobuf.FloatValue = FloatValue;
        class Int64Value extends pb_1.Message {
            constructor(data) {
                super();
                _Int64Value_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Int64Value_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("value" in data && data.value != undefined) {
                        this.value = data.value;
                    }
                }
            }
            get value() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set value(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new Int64Value({});
                if (data.value != null) {
                    message.value = data.value;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.value != null) {
                    data.value = this.value;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.value != 0)
                    writer.writeInt64(1, this.value);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Int64Value();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.value = reader.readInt64();
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
                return Int64Value.deserialize(bytes);
            }
        }
        _Int64Value_one_of_decls = new WeakMap();
        protobuf.Int64Value = Int64Value;
        class UInt64Value extends pb_1.Message {
            constructor(data) {
                super();
                _UInt64Value_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _UInt64Value_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("value" in data && data.value != undefined) {
                        this.value = data.value;
                    }
                }
            }
            get value() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set value(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new UInt64Value({});
                if (data.value != null) {
                    message.value = data.value;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.value != null) {
                    data.value = this.value;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.value != 0)
                    writer.writeUint64(1, this.value);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new UInt64Value();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.value = reader.readUint64();
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
                return UInt64Value.deserialize(bytes);
            }
        }
        _UInt64Value_one_of_decls = new WeakMap();
        protobuf.UInt64Value = UInt64Value;
        class Int32Value extends pb_1.Message {
            constructor(data) {
                super();
                _Int32Value_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Int32Value_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("value" in data && data.value != undefined) {
                        this.value = data.value;
                    }
                }
            }
            get value() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set value(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new Int32Value({});
                if (data.value != null) {
                    message.value = data.value;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.value != null) {
                    data.value = this.value;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.value != 0)
                    writer.writeInt32(1, this.value);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Int32Value();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.value = reader.readInt32();
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
                return Int32Value.deserialize(bytes);
            }
        }
        _Int32Value_one_of_decls = new WeakMap();
        protobuf.Int32Value = Int32Value;
        class UInt32Value extends pb_1.Message {
            constructor(data) {
                super();
                _UInt32Value_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _UInt32Value_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("value" in data && data.value != undefined) {
                        this.value = data.value;
                    }
                }
            }
            get value() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set value(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new UInt32Value({});
                if (data.value != null) {
                    message.value = data.value;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.value != null) {
                    data.value = this.value;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.value != 0)
                    writer.writeUint32(1, this.value);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new UInt32Value();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.value = reader.readUint32();
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
                return UInt32Value.deserialize(bytes);
            }
        }
        _UInt32Value_one_of_decls = new WeakMap();
        protobuf.UInt32Value = UInt32Value;
        class BoolValue extends pb_1.Message {
            constructor(data) {
                super();
                _BoolValue_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _BoolValue_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("value" in data && data.value != undefined) {
                        this.value = data.value;
                    }
                }
            }
            get value() {
                return pb_1.Message.getFieldWithDefault(this, 1, false);
            }
            set value(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new BoolValue({});
                if (data.value != null) {
                    message.value = data.value;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.value != null) {
                    data.value = this.value;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.value != false)
                    writer.writeBool(1, this.value);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BoolValue();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.value = reader.readBool();
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
                return BoolValue.deserialize(bytes);
            }
        }
        _BoolValue_one_of_decls = new WeakMap();
        protobuf.BoolValue = BoolValue;
        class StringValue extends pb_1.Message {
            constructor(data) {
                super();
                _StringValue_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _StringValue_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("value" in data && data.value != undefined) {
                        this.value = data.value;
                    }
                }
            }
            get value() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set value(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new StringValue({});
                if (data.value != null) {
                    message.value = data.value;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.value != null) {
                    data.value = this.value;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.value.length)
                    writer.writeString(1, this.value);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StringValue();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
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
                return StringValue.deserialize(bytes);
            }
        }
        _StringValue_one_of_decls = new WeakMap();
        protobuf.StringValue = StringValue;
        class BytesValue extends pb_1.Message {
            constructor(data) {
                super();
                _BytesValue_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _BytesValue_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("value" in data && data.value != undefined) {
                        this.value = data.value;
                    }
                }
            }
            get value() {
                return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
            }
            set value(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new BytesValue({});
                if (data.value != null) {
                    message.value = data.value;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.value != null) {
                    data.value = this.value;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.value.length)
                    writer.writeBytes(1, this.value);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BytesValue();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.value = reader.readBytes();
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
                return BytesValue.deserialize(bytes);
            }
        }
        _BytesValue_one_of_decls = new WeakMap();
        protobuf.BytesValue = BytesValue;
    })(protobuf = google.protobuf || (google.protobuf = {}));
})(google = exports.google || (exports.google = {}));
//# sourceMappingURL=wrappers.js.map