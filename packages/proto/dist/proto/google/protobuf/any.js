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
        var _Any_one_of_decls;
        class Any extends pb_1.Message {
            constructor(data) {
                super();
                _Any_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Any_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("type_url" in data && data.type_url != undefined) {
                        this.type_url = data.type_url;
                    }
                    if ("value" in data && data.value != undefined) {
                        this.value = data.value;
                    }
                }
            }
            get type_url() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set type_url(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get value() {
                return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
            }
            set value(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new Any({});
                if (data.type_url != null) {
                    message.type_url = data.type_url;
                }
                if (data.value != null) {
                    message.value = data.value;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.type_url != null) {
                    data.type_url = this.type_url;
                }
                if (this.value != null) {
                    data.value = this.value;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.type_url.length)
                    writer.writeString(1, this.type_url);
                if (this.value.length)
                    writer.writeBytes(2, this.value);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Any();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.type_url = reader.readString();
                            break;
                        case 2:
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
                return Any.deserialize(bytes);
            }
        }
        _Any_one_of_decls = new WeakMap();
        protobuf.Any = Any;
    })(protobuf = google.protobuf || (google.protobuf = {}));
})(google = exports.google || (exports.google = {}));
//# sourceMappingURL=any.js.map