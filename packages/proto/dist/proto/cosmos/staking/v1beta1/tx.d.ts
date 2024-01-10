/// <reference types="node" />
import * as dependency_1 from "./../../../google/protobuf/any";
import * as dependency_2 from "./../../../google/protobuf/timestamp";
import * as dependency_5 from "./../../base/v1beta1/coin";
import * as dependency_6 from "./staking";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.staking.v1beta1 {
    export class MsgCreateValidator extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            description?: dependency_6.cosmos.staking.v1beta1.Description;
            commission?: dependency_6.cosmos.staking.v1beta1.CommissionRates;
            min_self_delegation?: string;
            delegator_address?: string;
            validator_address?: string;
            pubkey?: dependency_1.google.protobuf.Any;
            value?: dependency_5.cosmos.base.v1beta1.Coin;
        });
        get description(): dependency_6.cosmos.staking.v1beta1.Description;
        set description(value: dependency_6.cosmos.staking.v1beta1.Description);
        get has_description(): boolean;
        get commission(): dependency_6.cosmos.staking.v1beta1.CommissionRates;
        set commission(value: dependency_6.cosmos.staking.v1beta1.CommissionRates);
        get has_commission(): boolean;
        get min_self_delegation(): string;
        set min_self_delegation(value: string);
        get delegator_address(): string;
        set delegator_address(value: string);
        get validator_address(): string;
        set validator_address(value: string);
        get pubkey(): dependency_1.google.protobuf.Any;
        set pubkey(value: dependency_1.google.protobuf.Any);
        get has_pubkey(): boolean;
        get value(): dependency_5.cosmos.base.v1beta1.Coin;
        set value(value: dependency_5.cosmos.base.v1beta1.Coin);
        get has_value(): boolean;
        static fromObject(data: {
            description?: ReturnType<typeof dependency_6.cosmos.staking.v1beta1.Description.prototype.toObject>;
            commission?: ReturnType<typeof dependency_6.cosmos.staking.v1beta1.CommissionRates.prototype.toObject>;
            min_self_delegation?: string;
            delegator_address?: string;
            validator_address?: string;
            pubkey?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
            value?: ReturnType<typeof dependency_5.cosmos.base.v1beta1.Coin.prototype.toObject>;
        }): MsgCreateValidator;
        toObject(): {
            description?: ReturnType<typeof dependency_6.cosmos.staking.v1beta1.Description.prototype.toObject>;
            commission?: ReturnType<typeof dependency_6.cosmos.staking.v1beta1.CommissionRates.prototype.toObject>;
            min_self_delegation?: string;
            delegator_address?: string;
            validator_address?: string;
            pubkey?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
            value?: ReturnType<typeof dependency_5.cosmos.base.v1beta1.Coin.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateValidator;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCreateValidator;
    }
    export class MsgCreateValidatorResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgCreateValidatorResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateValidatorResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCreateValidatorResponse;
    }
    export class MsgEditValidator extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            description?: dependency_6.cosmos.staking.v1beta1.Description;
            validator_address?: string;
            commission_rate?: string;
            min_self_delegation?: string;
        });
        get description(): dependency_6.cosmos.staking.v1beta1.Description;
        set description(value: dependency_6.cosmos.staking.v1beta1.Description);
        get has_description(): boolean;
        get validator_address(): string;
        set validator_address(value: string);
        get commission_rate(): string;
        set commission_rate(value: string);
        get min_self_delegation(): string;
        set min_self_delegation(value: string);
        static fromObject(data: {
            description?: ReturnType<typeof dependency_6.cosmos.staking.v1beta1.Description.prototype.toObject>;
            validator_address?: string;
            commission_rate?: string;
            min_self_delegation?: string;
        }): MsgEditValidator;
        toObject(): {
            description?: ReturnType<typeof dependency_6.cosmos.staking.v1beta1.Description.prototype.toObject>;
            validator_address?: string;
            commission_rate?: string;
            min_self_delegation?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgEditValidator;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgEditValidator;
    }
    export class MsgEditValidatorResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgEditValidatorResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgEditValidatorResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgEditValidatorResponse;
    }
    export class MsgDelegate extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegator_address?: string;
            validator_address?: string;
            amount?: dependency_5.cosmos.base.v1beta1.Coin;
        });
        get delegator_address(): string;
        set delegator_address(value: string);
        get validator_address(): string;
        set validator_address(value: string);
        get amount(): dependency_5.cosmos.base.v1beta1.Coin;
        set amount(value: dependency_5.cosmos.base.v1beta1.Coin);
        get has_amount(): boolean;
        static fromObject(data: {
            delegator_address?: string;
            validator_address?: string;
            amount?: ReturnType<typeof dependency_5.cosmos.base.v1beta1.Coin.prototype.toObject>;
        }): MsgDelegate;
        toObject(): {
            delegator_address?: string;
            validator_address?: string;
            amount?: ReturnType<typeof dependency_5.cosmos.base.v1beta1.Coin.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgDelegate;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgDelegate;
    }
    export class MsgDelegateResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgDelegateResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgDelegateResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgDelegateResponse;
    }
    export class MsgBeginRedelegate extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegator_address?: string;
            validator_src_address?: string;
            validator_dst_address?: string;
            amount?: dependency_5.cosmos.base.v1beta1.Coin;
        });
        get delegator_address(): string;
        set delegator_address(value: string);
        get validator_src_address(): string;
        set validator_src_address(value: string);
        get validator_dst_address(): string;
        set validator_dst_address(value: string);
        get amount(): dependency_5.cosmos.base.v1beta1.Coin;
        set amount(value: dependency_5.cosmos.base.v1beta1.Coin);
        get has_amount(): boolean;
        static fromObject(data: {
            delegator_address?: string;
            validator_src_address?: string;
            validator_dst_address?: string;
            amount?: ReturnType<typeof dependency_5.cosmos.base.v1beta1.Coin.prototype.toObject>;
        }): MsgBeginRedelegate;
        toObject(): {
            delegator_address?: string;
            validator_src_address?: string;
            validator_dst_address?: string;
            amount?: ReturnType<typeof dependency_5.cosmos.base.v1beta1.Coin.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgBeginRedelegate;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgBeginRedelegate;
    }
    export class MsgBeginRedelegateResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            completion_time?: dependency_2.google.protobuf.Timestamp;
        });
        get completion_time(): dependency_2.google.protobuf.Timestamp;
        set completion_time(value: dependency_2.google.protobuf.Timestamp);
        get has_completion_time(): boolean;
        static fromObject(data: {
            completion_time?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
        }): MsgBeginRedelegateResponse;
        toObject(): {
            completion_time?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgBeginRedelegateResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgBeginRedelegateResponse;
    }
    export class MsgUndelegate extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegator_address?: string;
            validator_address?: string;
            amount?: dependency_5.cosmos.base.v1beta1.Coin;
        });
        get delegator_address(): string;
        set delegator_address(value: string);
        get validator_address(): string;
        set validator_address(value: string);
        get amount(): dependency_5.cosmos.base.v1beta1.Coin;
        set amount(value: dependency_5.cosmos.base.v1beta1.Coin);
        get has_amount(): boolean;
        static fromObject(data: {
            delegator_address?: string;
            validator_address?: string;
            amount?: ReturnType<typeof dependency_5.cosmos.base.v1beta1.Coin.prototype.toObject>;
        }): MsgUndelegate;
        toObject(): {
            delegator_address?: string;
            validator_address?: string;
            amount?: ReturnType<typeof dependency_5.cosmos.base.v1beta1.Coin.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUndelegate;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUndelegate;
    }
    export class MsgUndelegateResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            completion_time?: dependency_2.google.protobuf.Timestamp;
        });
        get completion_time(): dependency_2.google.protobuf.Timestamp;
        set completion_time(value: dependency_2.google.protobuf.Timestamp);
        get has_completion_time(): boolean;
        static fromObject(data: {
            completion_time?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
        }): MsgUndelegateResponse;
        toObject(): {
            completion_time?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUndelegateResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUndelegateResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            CreateValidator: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgCreateValidator) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgCreateValidator;
                responseSerialize: (message: MsgCreateValidatorResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgCreateValidatorResponse;
            };
            EditValidator: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgEditValidator) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgEditValidator;
                responseSerialize: (message: MsgEditValidatorResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgEditValidatorResponse;
            };
            Delegate: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgDelegate) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgDelegate;
                responseSerialize: (message: MsgDelegateResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgDelegateResponse;
            };
            BeginRedelegate: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgBeginRedelegate) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgBeginRedelegate;
                responseSerialize: (message: MsgBeginRedelegateResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgBeginRedelegateResponse;
            };
            Undelegate: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgUndelegate) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgUndelegate;
                responseSerialize: (message: MsgUndelegateResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgUndelegateResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract CreateValidator(call: grpc_1.ServerUnaryCall<MsgCreateValidator, MsgCreateValidatorResponse>, callback: grpc_1.sendUnaryData<MsgCreateValidatorResponse>): void;
        abstract EditValidator(call: grpc_1.ServerUnaryCall<MsgEditValidator, MsgEditValidatorResponse>, callback: grpc_1.sendUnaryData<MsgEditValidatorResponse>): void;
        abstract Delegate(call: grpc_1.ServerUnaryCall<MsgDelegate, MsgDelegateResponse>, callback: grpc_1.sendUnaryData<MsgDelegateResponse>): void;
        abstract BeginRedelegate(call: grpc_1.ServerUnaryCall<MsgBeginRedelegate, MsgBeginRedelegateResponse>, callback: grpc_1.sendUnaryData<MsgBeginRedelegateResponse>): void;
        abstract Undelegate(call: grpc_1.ServerUnaryCall<MsgUndelegate, MsgUndelegateResponse>, callback: grpc_1.sendUnaryData<MsgUndelegateResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        CreateValidator: GrpcUnaryServiceInterface<MsgCreateValidator, MsgCreateValidatorResponse>;
        EditValidator: GrpcUnaryServiceInterface<MsgEditValidator, MsgEditValidatorResponse>;
        Delegate: GrpcUnaryServiceInterface<MsgDelegate, MsgDelegateResponse>;
        BeginRedelegate: GrpcUnaryServiceInterface<MsgBeginRedelegate, MsgBeginRedelegateResponse>;
        Undelegate: GrpcUnaryServiceInterface<MsgUndelegate, MsgUndelegateResponse>;
    }
    export {};
}
//# sourceMappingURL=tx.d.ts.map