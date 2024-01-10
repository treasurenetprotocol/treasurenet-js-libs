/// <reference types="node" />
import * as dependency_1 from "./../../base/v1beta1/coin";
import * as dependency_2 from "./gov";
import * as dependency_5 from "./../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.gov.v1beta1 {
    export class MsgSubmitProposal extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            content?: dependency_5.google.protobuf.Any;
            initial_deposit?: dependency_1.cosmos.base.v1beta1.Coin[];
            proposer?: string;
        });
        get content(): dependency_5.google.protobuf.Any;
        set content(value: dependency_5.google.protobuf.Any);
        get has_content(): boolean;
        get initial_deposit(): dependency_1.cosmos.base.v1beta1.Coin[];
        set initial_deposit(value: dependency_1.cosmos.base.v1beta1.Coin[]);
        get proposer(): string;
        set proposer(value: string);
        static fromObject(data: {
            content?: ReturnType<typeof dependency_5.google.protobuf.Any.prototype.toObject>;
            initial_deposit?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            proposer?: string;
        }): MsgSubmitProposal;
        toObject(): {
            content?: ReturnType<typeof dependency_5.google.protobuf.Any.prototype.toObject>;
            initial_deposit?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            proposer?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSubmitProposal;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSubmitProposal;
    }
    export class MsgSubmitProposalResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            proposal_id?: number;
        });
        get proposal_id(): number;
        set proposal_id(value: number);
        static fromObject(data: {
            proposal_id?: number;
        }): MsgSubmitProposalResponse;
        toObject(): {
            proposal_id?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSubmitProposalResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSubmitProposalResponse;
    }
    export class MsgVote extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            proposal_id?: number;
            voter?: string;
            option?: dependency_2.cosmos.gov.v1beta1.VoteOption;
        });
        get proposal_id(): number;
        set proposal_id(value: number);
        get voter(): string;
        set voter(value: string);
        get option(): dependency_2.cosmos.gov.v1beta1.VoteOption;
        set option(value: dependency_2.cosmos.gov.v1beta1.VoteOption);
        static fromObject(data: {
            proposal_id?: number;
            voter?: string;
            option?: dependency_2.cosmos.gov.v1beta1.VoteOption;
        }): MsgVote;
        toObject(): {
            proposal_id?: number;
            voter?: string;
            option?: dependency_2.cosmos.gov.v1beta1.VoteOption;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgVote;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgVote;
    }
    export class MsgVoteResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgVoteResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgVoteResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgVoteResponse;
    }
    export class MsgVoteWeighted extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            proposal_id?: number;
            voter?: string;
            options?: dependency_2.cosmos.gov.v1beta1.WeightedVoteOption[];
        });
        get proposal_id(): number;
        set proposal_id(value: number);
        get voter(): string;
        set voter(value: string);
        get options(): dependency_2.cosmos.gov.v1beta1.WeightedVoteOption[];
        set options(value: dependency_2.cosmos.gov.v1beta1.WeightedVoteOption[]);
        static fromObject(data: {
            proposal_id?: number;
            voter?: string;
            options?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.WeightedVoteOption.prototype.toObject>[];
        }): MsgVoteWeighted;
        toObject(): {
            proposal_id?: number;
            voter?: string;
            options?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.WeightedVoteOption.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgVoteWeighted;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgVoteWeighted;
    }
    export class MsgVoteWeightedResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgVoteWeightedResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgVoteWeightedResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgVoteWeightedResponse;
    }
    export class MsgDeposit extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            proposal_id?: number;
            depositor?: string;
            amount?: dependency_1.cosmos.base.v1beta1.Coin[];
        });
        get proposal_id(): number;
        set proposal_id(value: number);
        get depositor(): string;
        set depositor(value: string);
        get amount(): dependency_1.cosmos.base.v1beta1.Coin[];
        set amount(value: dependency_1.cosmos.base.v1beta1.Coin[]);
        static fromObject(data: {
            proposal_id?: number;
            depositor?: string;
            amount?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): MsgDeposit;
        toObject(): {
            proposal_id?: number;
            depositor?: string;
            amount?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgDeposit;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgDeposit;
    }
    export class MsgDepositResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgDepositResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgDepositResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgDepositResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            SubmitProposal: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgSubmitProposal) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgSubmitProposal;
                responseSerialize: (message: MsgSubmitProposalResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgSubmitProposalResponse;
            };
            Vote: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgVote) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgVote;
                responseSerialize: (message: MsgVoteResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgVoteResponse;
            };
            VoteWeighted: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgVoteWeighted) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgVoteWeighted;
                responseSerialize: (message: MsgVoteWeightedResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgVoteWeightedResponse;
            };
            Deposit: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgDeposit) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgDeposit;
                responseSerialize: (message: MsgDepositResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgDepositResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract SubmitProposal(call: grpc_1.ServerUnaryCall<MsgSubmitProposal, MsgSubmitProposalResponse>, callback: grpc_1.sendUnaryData<MsgSubmitProposalResponse>): void;
        abstract Vote(call: grpc_1.ServerUnaryCall<MsgVote, MsgVoteResponse>, callback: grpc_1.sendUnaryData<MsgVoteResponse>): void;
        abstract VoteWeighted(call: grpc_1.ServerUnaryCall<MsgVoteWeighted, MsgVoteWeightedResponse>, callback: grpc_1.sendUnaryData<MsgVoteWeightedResponse>): void;
        abstract Deposit(call: grpc_1.ServerUnaryCall<MsgDeposit, MsgDepositResponse>, callback: grpc_1.sendUnaryData<MsgDepositResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        SubmitProposal: GrpcUnaryServiceInterface<MsgSubmitProposal, MsgSubmitProposalResponse>;
        Vote: GrpcUnaryServiceInterface<MsgVote, MsgVoteResponse>;
        VoteWeighted: GrpcUnaryServiceInterface<MsgVoteWeighted, MsgVoteWeightedResponse>;
        Deposit: GrpcUnaryServiceInterface<MsgDeposit, MsgDepositResponse>;
    }
    export {};
}
//# sourceMappingURL=tx.d.ts.map