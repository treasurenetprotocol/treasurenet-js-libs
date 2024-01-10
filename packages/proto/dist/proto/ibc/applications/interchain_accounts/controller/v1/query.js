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
const dependency_1 = __importStar(require("./controller"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var ibc;
(function (ibc) {
    var applications;
    (function (applications) {
        var interchain_accounts;
        (function (interchain_accounts) {
            var controller;
            (function (controller) {
                var v1;
                (function (v1) {
                    var _QueryParamsRequest_one_of_decls, _QueryParamsResponse_one_of_decls;
                    class QueryParamsRequest extends pb_1.Message {
                        constructor(data) {
                            super();
                            _QueryParamsRequest_one_of_decls.set(this, []);
                            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryParamsRequest_one_of_decls, "f"));
                            if (!Array.isArray(data) && typeof data == "object") { }
                        }
                        static fromObject(data) {
                            const message = new QueryParamsRequest({});
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
                            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsRequest();
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
                            return QueryParamsRequest.deserialize(bytes);
                        }
                    }
                    _QueryParamsRequest_one_of_decls = new WeakMap();
                    v1.QueryParamsRequest = QueryParamsRequest;
                    class QueryParamsResponse extends pb_1.Message {
                        constructor(data) {
                            super();
                            _QueryParamsResponse_one_of_decls.set(this, []);
                            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryParamsResponse_one_of_decls, "f"));
                            if (!Array.isArray(data) && typeof data == "object") {
                                if ("params" in data && data.params != undefined) {
                                    this.params = data.params;
                                }
                            }
                        }
                        get params() {
                            return pb_1.Message.getWrapperField(this, dependency_1.ibc.applications.interchain_accounts.controller.v1.Params, 1);
                        }
                        set params(value) {
                            pb_1.Message.setWrapperField(this, 1, value);
                        }
                        get has_params() {
                            return pb_1.Message.getField(this, 1) != null;
                        }
                        static fromObject(data) {
                            const message = new QueryParamsResponse({});
                            if (data.params != null) {
                                message.params = dependency_1.ibc.applications.interchain_accounts.controller.v1.Params.fromObject(data.params);
                            }
                            return message;
                        }
                        toObject() {
                            const data = {};
                            if (this.params != null) {
                                data.params = this.params.toObject();
                            }
                            return data;
                        }
                        serialize(w) {
                            const writer = w || new pb_1.BinaryWriter();
                            if (this.has_params)
                                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
                            if (!w)
                                return writer.getResultBuffer();
                        }
                        static deserialize(bytes) {
                            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsResponse();
                            while (reader.nextField()) {
                                if (reader.isEndGroup())
                                    break;
                                switch (reader.getFieldNumber()) {
                                    case 1:
                                        reader.readMessage(message.params, () => message.params = dependency_1.ibc.applications.interchain_accounts.controller.v1.Params.deserialize(reader));
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
                            return QueryParamsResponse.deserialize(bytes);
                        }
                    }
                    _QueryParamsResponse_one_of_decls = new WeakMap();
                    v1.QueryParamsResponse = QueryParamsResponse;
                    class UnimplementedQueryService {
                    }
                    UnimplementedQueryService.definition = {
                        Params: {
                            path: "/ibc.applications.interchain_accounts.controller.v1.Query/Params",
                            requestStream: false,
                            responseStream: false,
                            requestSerialize: (message) => Buffer.from(message.serialize()),
                            requestDeserialize: (bytes) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                            responseSerialize: (message) => Buffer.from(message.serialize()),
                            responseDeserialize: (bytes) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
                        }
                    };
                    v1.UnimplementedQueryService = UnimplementedQueryService;
                    class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                        constructor(address, credentials, options) {
                            super(address, credentials, options);
                            this.Params = (message, metadata, options, callback) => {
                                return super.Params(message, metadata, options, callback);
                            };
                        }
                    }
                    v1.QueryClient = QueryClient;
                })(v1 = controller.v1 || (controller.v1 = {}));
            })(controller = interchain_accounts.controller || (interchain_accounts.controller = {}));
        })(interchain_accounts = applications.interchain_accounts || (applications.interchain_accounts = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
})(ibc = exports.ibc || (exports.ibc = {}));
//# sourceMappingURL=query.js.map