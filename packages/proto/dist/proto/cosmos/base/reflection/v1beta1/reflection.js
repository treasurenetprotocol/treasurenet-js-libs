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
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var cosmos;
(function (cosmos) {
    var base;
    (function (base) {
        var reflection;
        (function (reflection) {
            var v1beta1;
            (function (v1beta1) {
                var _ListAllInterfacesRequest_one_of_decls, _ListAllInterfacesResponse_one_of_decls, _ListImplementationsRequest_one_of_decls, _ListImplementationsResponse_one_of_decls;
                class ListAllInterfacesRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _ListAllInterfacesRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ListAllInterfacesRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") { }
                    }
                    static fromObject(data) {
                        const message = new ListAllInterfacesRequest({});
                        return message;
                    }
                    toObject() {
                        const data = {};
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ListAllInterfacesRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                default: reader.skipField();
                            }
                        }
                        return message;
                    }
                    serializeBinary() {
                        return this.serialize();
                    }
                    static deserializeBinary(bytes) {
                        return ListAllInterfacesRequest.deserialize(bytes);
                    }
                }
                _ListAllInterfacesRequest_one_of_decls = new WeakMap();
                v1beta1.ListAllInterfacesRequest = ListAllInterfacesRequest;
                class ListAllInterfacesResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _ListAllInterfacesResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _ListAllInterfacesResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("interface_names" in data && data.interface_names != undefined) {
                                this.interface_names = data.interface_names;
                            }
                        }
                    }
                    get interface_names() {
                        return pb_1.Message.getFieldWithDefault(this, 1, []);
                    }
                    set interface_names(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new ListAllInterfacesResponse({});
                        if (data.interface_names != null) {
                            message.interface_names = data.interface_names;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.interface_names != null) {
                            data.interface_names = this.interface_names;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.interface_names.length)
                            writer.writeRepeatedString(1, this.interface_names);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ListAllInterfacesResponse();
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
                        return ListAllInterfacesResponse.deserialize(bytes);
                    }
                }
                _ListAllInterfacesResponse_one_of_decls = new WeakMap();
                v1beta1.ListAllInterfacesResponse = ListAllInterfacesResponse;
                class ListImplementationsRequest extends pb_1.Message {
                    constructor(data) {
                        super();
                        _ListImplementationsRequest_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ListImplementationsRequest_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("interface_name" in data && data.interface_name != undefined) {
                                this.interface_name = data.interface_name;
                            }
                        }
                    }
                    get interface_name() {
                        return pb_1.Message.getFieldWithDefault(this, 1, "");
                    }
                    set interface_name(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new ListImplementationsRequest({});
                        if (data.interface_name != null) {
                            message.interface_name = data.interface_name;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.interface_name != null) {
                            data.interface_name = this.interface_name;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.interface_name.length)
                            writer.writeString(1, this.interface_name);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ListImplementationsRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.interface_name = reader.readString();
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
                        return ListImplementationsRequest.deserialize(bytes);
                    }
                }
                _ListImplementationsRequest_one_of_decls = new WeakMap();
                v1beta1.ListImplementationsRequest = ListImplementationsRequest;
                class ListImplementationsResponse extends pb_1.Message {
                    constructor(data) {
                        super();
                        _ListImplementationsResponse_one_of_decls.set(this, []);
                        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _ListImplementationsResponse_one_of_decls, "f"));
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("implementation_message_names" in data && data.implementation_message_names != undefined) {
                                this.implementation_message_names = data.implementation_message_names;
                            }
                        }
                    }
                    get implementation_message_names() {
                        return pb_1.Message.getFieldWithDefault(this, 1, []);
                    }
                    set implementation_message_names(value) {
                        pb_1.Message.setField(this, 1, value);
                    }
                    static fromObject(data) {
                        const message = new ListImplementationsResponse({});
                        if (data.implementation_message_names != null) {
                            message.implementation_message_names = data.implementation_message_names;
                        }
                        return message;
                    }
                    toObject() {
                        const data = {};
                        if (this.implementation_message_names != null) {
                            data.implementation_message_names = this.implementation_message_names;
                        }
                        return data;
                    }
                    serialize(w) {
                        const writer = w || new pb_1.BinaryWriter();
                        if (this.implementation_message_names.length)
                            writer.writeRepeatedString(1, this.implementation_message_names);
                        if (!w)
                            return writer.getResultBuffer();
                    }
                    static deserialize(bytes) {
                        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ListImplementationsResponse();
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
                        return ListImplementationsResponse.deserialize(bytes);
                    }
                }
                _ListImplementationsResponse_one_of_decls = new WeakMap();
                v1beta1.ListImplementationsResponse = ListImplementationsResponse;
                class UnimplementedReflectionServiceService {
                }
                UnimplementedReflectionServiceService.definition = {
                    ListAllInterfaces: {
                        path: "/cosmos.base.reflection.v1beta1.ReflectionService/ListAllInterfaces",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => ListAllInterfacesRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => ListAllInterfacesResponse.deserialize(new Uint8Array(bytes))
                    },
                    ListImplementations: {
                        path: "/cosmos.base.reflection.v1beta1.ReflectionService/ListImplementations",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: (message) => Buffer.from(message.serialize()),
                        requestDeserialize: (bytes) => ListImplementationsRequest.deserialize(new Uint8Array(bytes)),
                        responseSerialize: (message) => Buffer.from(message.serialize()),
                        responseDeserialize: (bytes) => ListImplementationsResponse.deserialize(new Uint8Array(bytes))
                    }
                };
                v1beta1.UnimplementedReflectionServiceService = UnimplementedReflectionServiceService;
                class ReflectionServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedReflectionServiceService.definition, "ReflectionService", {}) {
                    constructor(address, credentials, options) {
                        super(address, credentials, options);
                        this.ListAllInterfaces = (message, metadata, options, callback) => {
                            return super.ListAllInterfaces(message, metadata, options, callback);
                        };
                        this.ListImplementations = (message, metadata, options, callback) => {
                            return super.ListImplementations(message, metadata, options, callback);
                        };
                    }
                }
                v1beta1.ReflectionServiceClient = ReflectionServiceClient;
            })(v1beta1 = reflection.v1beta1 || (reflection.v1beta1 = {}));
        })(reflection = base.reflection || (base.reflection = {}));
    })(base = cosmos.base || (cosmos.base = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
//# sourceMappingURL=reflection.js.map