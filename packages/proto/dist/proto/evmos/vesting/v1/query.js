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
const dependency_1 = __importStar(require("./../../../cosmos/base/v1beta1/coin"));
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
var evmos;
(function (evmos) {
    var vesting;
    (function (vesting) {
        var v1;
        (function (v1) {
            var _QueryBalancesRequest_one_of_decls, _QueryBalancesResponse_one_of_decls;
            class QueryBalancesRequest extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryBalancesRequest_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryBalancesRequest_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("address" in data && data.address != undefined) {
                            this.address = data.address;
                        }
                    }
                }
                get address() {
                    return pb_1.Message.getFieldWithDefault(this, 1, "");
                }
                set address(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new QueryBalancesRequest({});
                    if (data.address != null) {
                        message.address = data.address;
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.address != null) {
                        data.address = this.address;
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.address.length)
                        writer.writeString(1, this.address);
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBalancesRequest();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.address = reader.readString();
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
                    return QueryBalancesRequest.deserialize(bytes);
                }
            }
            _QueryBalancesRequest_one_of_decls = new WeakMap();
            v1.QueryBalancesRequest = QueryBalancesRequest;
            class QueryBalancesResponse extends pb_1.Message {
                constructor(data) {
                    super();
                    _QueryBalancesResponse_one_of_decls.set(this, []);
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2, 3], __classPrivateFieldGet(this, _QueryBalancesResponse_one_of_decls, "f"));
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("locked" in data && data.locked != undefined) {
                            this.locked = data.locked;
                        }
                        if ("unvested" in data && data.unvested != undefined) {
                            this.unvested = data.unvested;
                        }
                        if ("vested" in data && data.vested != undefined) {
                            this.vested = data.vested;
                        }
                    }
                }
                get locked() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 1);
                }
                set locked(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                get unvested() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 2);
                }
                set unvested(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                }
                get vested() {
                    return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 3);
                }
                set vested(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 3, value);
                }
                static fromObject(data) {
                    const message = new QueryBalancesResponse({});
                    if (data.locked != null) {
                        message.locked = data.locked.map(item => dependency_1.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    if (data.unvested != null) {
                        message.unvested = data.unvested.map(item => dependency_1.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    if (data.vested != null) {
                        message.vested = data.vested.map(item => dependency_1.cosmos.base.v1beta1.Coin.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.locked != null) {
                        data.locked = this.locked.map((item) => item.toObject());
                    }
                    if (this.unvested != null) {
                        data.unvested = this.unvested.map((item) => item.toObject());
                    }
                    if (this.vested != null) {
                        data.vested = this.vested.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.locked.length)
                        writer.writeRepeatedMessage(1, this.locked, (item) => item.serialize(writer));
                    if (this.unvested.length)
                        writer.writeRepeatedMessage(2, this.unvested, (item) => item.serialize(writer));
                    if (this.vested.length)
                        writer.writeRepeatedMessage(3, this.vested, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBalancesResponse();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.locked, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_1.cosmos.base.v1beta1.Coin));
                                break;
                            case 2:
                                reader.readMessage(message.unvested, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_1.cosmos.base.v1beta1.Coin));
                                break;
                            case 3:
                                reader.readMessage(message.vested, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_1.cosmos.base.v1beta1.Coin));
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
                    return QueryBalancesResponse.deserialize(bytes);
                }
            }
            _QueryBalancesResponse_one_of_decls = new WeakMap();
            v1.QueryBalancesResponse = QueryBalancesResponse;
            class UnimplementedQueryService {
            }
            UnimplementedQueryService.definition = {
                Balances: {
                    path: "/evmos.vesting.v1.Query/Balances",
                    requestStream: false,
                    responseStream: false,
                    requestSerialize: (message) => Buffer.from(message.serialize()),
                    requestDeserialize: (bytes) => QueryBalancesRequest.deserialize(new Uint8Array(bytes)),
                    responseSerialize: (message) => Buffer.from(message.serialize()),
                    responseDeserialize: (bytes) => QueryBalancesResponse.deserialize(new Uint8Array(bytes))
                }
            };
            v1.UnimplementedQueryService = UnimplementedQueryService;
            class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
                constructor(address, credentials, options) {
                    super(address, credentials, options);
                    this.Balances = (message, metadata, options, callback) => {
                        return super.Balances(message, metadata, options, callback);
                    };
                }
            }
            v1.QueryClient = QueryClient;
        })(v1 = vesting.v1 || (vesting.v1 = {}));
    })(vesting = evmos.vesting || (evmos.vesting = {}));
})(evmos = exports.evmos || (exports.evmos = {}));
//# sourceMappingURL=query.js.map