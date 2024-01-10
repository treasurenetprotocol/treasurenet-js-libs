import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace evmos.feesplit.v1 {
    export class MsgRegisterFeeSplit extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
            nonces?: number[];
        });
        get contract_address(): string;
        set contract_address(value: string);
        get deployer_address(): string;
        set deployer_address(value: string);
        get withdrawer_address(): string;
        set withdrawer_address(value: string);
        get nonces(): number[];
        set nonces(value: number[]);
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
            nonces?: number[];
        }): MsgRegisterFeeSplit;
        toObject(): {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
            nonces?: number[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterFeeSplit;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRegisterFeeSplit;
    }
    export class MsgRegisterFeeSplitResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgRegisterFeeSplitResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterFeeSplitResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRegisterFeeSplitResponse;
    }
    export class MsgUpdateFeeSplit extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
        });
        get contract_address(): string;
        set contract_address(value: string);
        get deployer_address(): string;
        set deployer_address(value: string);
        get withdrawer_address(): string;
        set withdrawer_address(value: string);
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
        }): MsgUpdateFeeSplit;
        toObject(): {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateFeeSplit;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUpdateFeeSplit;
    }
    export class MsgUpdateFeeSplitResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgUpdateFeeSplitResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateFeeSplitResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUpdateFeeSplitResponse;
    }
    export class MsgCancelFeeSplit extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
        });
        get contract_address(): string;
        set contract_address(value: string);
        get deployer_address(): string;
        set deployer_address(value: string);
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
        }): MsgCancelFeeSplit;
        toObject(): {
            contract_address?: string;
            deployer_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelFeeSplit;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCancelFeeSplit;
    }
    export class MsgCancelFeeSplitResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgCancelFeeSplitResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelFeeSplitResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCancelFeeSplitResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            RegisterFeeSplit: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgRegisterFeeSplit) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgRegisterFeeSplit;
                responseSerialize: (message: MsgRegisterFeeSplitResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgRegisterFeeSplitResponse;
            };
            UpdateFeeSplit: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgUpdateFeeSplit) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgUpdateFeeSplit;
                responseSerialize: (message: MsgUpdateFeeSplitResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgUpdateFeeSplitResponse;
            };
            CancelFeeSplit: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgCancelFeeSplit) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgCancelFeeSplit;
                responseSerialize: (message: MsgCancelFeeSplitResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgCancelFeeSplitResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract RegisterFeeSplit(call: grpc_1.ServerUnaryCall<MsgRegisterFeeSplit, MsgRegisterFeeSplitResponse>, callback: grpc_1.sendUnaryData<MsgRegisterFeeSplitResponse>): void;
        abstract UpdateFeeSplit(call: grpc_1.ServerUnaryCall<MsgUpdateFeeSplit, MsgUpdateFeeSplitResponse>, callback: grpc_1.sendUnaryData<MsgUpdateFeeSplitResponse>): void;
        abstract CancelFeeSplit(call: grpc_1.ServerUnaryCall<MsgCancelFeeSplit, MsgCancelFeeSplitResponse>, callback: grpc_1.sendUnaryData<MsgCancelFeeSplitResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        RegisterFeeSplit: GrpcUnaryServiceInterface<MsgRegisterFeeSplit, MsgRegisterFeeSplitResponse>;
        UpdateFeeSplit: GrpcUnaryServiceInterface<MsgUpdateFeeSplit, MsgUpdateFeeSplitResponse>;
        CancelFeeSplit: GrpcUnaryServiceInterface<MsgCancelFeeSplit, MsgCancelFeeSplitResponse>;
    }
    export {};
}
//# sourceMappingURL=tx.d.ts.map