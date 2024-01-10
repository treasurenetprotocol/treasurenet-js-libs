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
        var _FieldMask_one_of_decls;
        class FieldMask extends pb_1.Message {
            constructor(data) {
                super();
                _FieldMask_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _FieldMask_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("paths" in data && data.paths != undefined) {
                        this.paths = data.paths;
                    }
                }
            }
            get paths() {
                return pb_1.Message.getFieldWithDefault(this, 1, []);
            }
            set paths(value) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data) {
                const message = new FieldMask({});
                if (data.paths != null) {
                    message.paths = data.paths;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.paths != null) {
                    data.paths = this.paths;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.paths.length)
                    writer.writeRepeatedString(1, this.paths);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FieldMask();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            pb_1.Message.addToRepeatedField(message, 1, reader.readString());
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
                return FieldMask.deserialize(bytes);
            }
        }
        _FieldMask_one_of_decls = new WeakMap();
        protobuf.FieldMask = FieldMask;
    })(protobuf = google.protobuf || (google.protobuf = {}));
})(google = exports.google || (exports.google = {}));
//# sourceMappingURL=field_mask.js.map