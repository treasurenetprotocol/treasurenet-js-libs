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
exports.evmos = void 0;
const pb_1 = __importStar(require("google-protobuf"));
var evmos;
(function (evmos) {
    var feesplit;
    (function (feesplit) {
        var v1;
        (function (v1) {
            var _FeeSplit_one_of_decls;
            class FeeSplit extends pb_1.Message {
                constructor(data) {
                    super();
                    _FeeSplit_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _FeeSplit_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("contract_address" in data && data.contract_address != undefined) {
                            this.contract_address = data.contract_address;
                        }
                        if ("deployer_address" in data && data.deployer_address != undefined) {
                            this.deployer_address = data.deployer_address;
                        }
                        if ("withdrawer_address" in data && data.withdrawer_address != undefined) {
                            this.withdrawer_address = data.withdrawer_address;
                        }
                    }
                }
                get contract_address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set contract_address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get deployer_address() {
                    return pb_1.Message.getFieldWithDefault(this, 2, "");
                }
                set deployer_address(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get withdrawer_address() {
                    return pb_1.Message.getFieldWithDefault(this, 3, "");
                }
                set withdrawer_address(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new FeeSplit({});
                    if (data.contract_address != null) {
                        message.contract_address = data.contract_address;
                    }
                    if (data.deployer_address != null) {
                        message.deployer_address = data.deployer_address;
                    }
                    if (data.withdrawer_address != null) {
                        message.withdrawer_address = data.withdrawer_address;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.contract_address != null) {
                        data.contract_address = this.contract_address;
                    }
                    if (this.deployer_address != null) {
                        data.deployer_address = this.deployer_address;
                    }
                    if (this.withdrawer_address != null) {
                        data.withdrawer_address = this.withdrawer_address;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.contract_address.length)
                        writer.writeString(1, this.contract_address);
                    if (this.deployer_address.length)
                        writer.writeString(2, this.deployer_address);
                    if (this.withdrawer_address.length)
                        writer.writeString(3, this.withdrawer_address);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FeeSplit();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.contract_address = reader.readString();
                                break;
                            case 2:
                                message.deployer_address = reader.readString();
                                break;
                            case 3:
                                message.withdrawer_address = reader.readString();
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
                    return FeeSplit.deserialize(bytes);
                }
            }
            _FeeSplit_one_of_decls = new WeakMap();
            v1.FeeSplit = FeeSplit;
        })(v1 = feesplit.v1 || (feesplit.v1 = {}));
    })(feesplit = evmos.feesplit || (evmos.feesplit = {}));
})(evmos = exports.evmos || (exports.evmos = {}));
//# sourceMappingURL=feesplit.js.map