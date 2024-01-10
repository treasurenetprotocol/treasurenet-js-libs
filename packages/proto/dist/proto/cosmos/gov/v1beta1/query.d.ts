/// <reference types="node" />
import * as dependency_1 from "./../../base/query/v1beta1/pagination";
import * as dependency_4 from "./gov";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.gov.v1beta1 {
    export class QueryProposalRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            proposal_id?: number;
        });
        get proposal_id(): number;
        set proposal_id(value: number);
        static fromObject(data: {
            proposal_id?: number;
        }): QueryProposalRequest;
        toObject(): {
            proposal_id?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryProposalRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryProposalRequest;
    }
    export class QueryProposalResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            proposal?: dependency_4.cosmos.gov.v1beta1.Proposal;
        });
        get proposal(): dependency_4.cosmos.gov.v1beta1.Proposal;
        set proposal(value: dependency_4.cosmos.gov.v1beta1.Proposal);
        get has_proposal(): boolean;
        static fromObject(data: {
            proposal?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.Proposal.prototype.toObject>;
        }): QueryProposalResponse;
        toObject(): {
            proposal?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.Proposal.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryProposalResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryProposalResponse;
    }
    export class QueryProposalsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            proposal_status?: dependency_4.cosmos.gov.v1beta1.ProposalStatus;
            voter?: string;
            depositor?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get proposal_status(): dependency_4.cosmos.gov.v1beta1.ProposalStatus;
        set proposal_status(value: dependency_4.cosmos.gov.v1beta1.ProposalStatus);
        get voter(): string;
        set voter(value: string);
        get depositor(): string;
        set depositor(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            proposal_status?: dependency_4.cosmos.gov.v1beta1.ProposalStatus;
            voter?: string;
            depositor?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryProposalsRequest;
        toObject(): {
            proposal_status?: dependency_4.cosmos.gov.v1beta1.ProposalStatus;
            voter?: string;
            depositor?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryProposalsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryProposalsRequest;
    }
    export class QueryProposalsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            proposals?: dependency_4.cosmos.gov.v1beta1.Proposal[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get proposals(): dependency_4.cosmos.gov.v1beta1.Proposal[];
        set proposals(value: dependency_4.cosmos.gov.v1beta1.Proposal[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            proposals?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.Proposal.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryProposalsResponse;
        toObject(): {
            proposals?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.Proposal.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryProposalsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryProposalsResponse;
    }
    export class QueryVoteRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            proposal_id?: number;
            voter?: string;
        });
        get proposal_id(): number;
        set proposal_id(value: number);
        get voter(): string;
        set voter(value: string);
        static fromObject(data: {
            proposal_id?: number;
            voter?: string;
        }): QueryVoteRequest;
        toObject(): {
            proposal_id?: number;
            voter?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryVoteRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryVoteRequest;
    }
    export class QueryVoteResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            vote?: dependency_4.cosmos.gov.v1beta1.Vote;
        });
        get vote(): dependency_4.cosmos.gov.v1beta1.Vote;
        set vote(value: dependency_4.cosmos.gov.v1beta1.Vote);
        get has_vote(): boolean;
        static fromObject(data: {
            vote?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.Vote.prototype.toObject>;
        }): QueryVoteResponse;
        toObject(): {
            vote?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.Vote.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryVoteResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryVoteResponse;
    }
    export class QueryVotesRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            proposal_id?: number;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get proposal_id(): number;
        set proposal_id(value: number);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            proposal_id?: number;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryVotesRequest;
        toObject(): {
            proposal_id?: number;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryVotesRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryVotesRequest;
    }
    export class QueryVotesResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            votes?: dependency_4.cosmos.gov.v1beta1.Vote[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get votes(): dependency_4.cosmos.gov.v1beta1.Vote[];
        set votes(value: dependency_4.cosmos.gov.v1beta1.Vote[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            votes?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.Vote.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryVotesResponse;
        toObject(): {
            votes?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.Vote.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryVotesResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryVotesResponse;
    }
    export class QueryParamsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            params_type?: string;
        });
        get params_type(): string;
        set params_type(value: string);
        static fromObject(data: {
            params_type?: string;
        }): QueryParamsRequest;
        toObject(): {
            params_type?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
    }
    export class QueryParamsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            voting_params?: dependency_4.cosmos.gov.v1beta1.VotingParams;
            deposit_params?: dependency_4.cosmos.gov.v1beta1.DepositParams;
            tally_params?: dependency_4.cosmos.gov.v1beta1.TallyParams;
        });
        get voting_params(): dependency_4.cosmos.gov.v1beta1.VotingParams;
        set voting_params(value: dependency_4.cosmos.gov.v1beta1.VotingParams);
        get has_voting_params(): boolean;
        get deposit_params(): dependency_4.cosmos.gov.v1beta1.DepositParams;
        set deposit_params(value: dependency_4.cosmos.gov.v1beta1.DepositParams);
        get has_deposit_params(): boolean;
        get tally_params(): dependency_4.cosmos.gov.v1beta1.TallyParams;
        set tally_params(value: dependency_4.cosmos.gov.v1beta1.TallyParams);
        get has_tally_params(): boolean;
        static fromObject(data: {
            voting_params?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.VotingParams.prototype.toObject>;
            deposit_params?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.DepositParams.prototype.toObject>;
            tally_params?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.TallyParams.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            voting_params?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.VotingParams.prototype.toObject>;
            deposit_params?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.DepositParams.prototype.toObject>;
            tally_params?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.TallyParams.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    export class QueryDepositRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            proposal_id?: number;
            depositor?: string;
        });
        get proposal_id(): number;
        set proposal_id(value: number);
        get depositor(): string;
        set depositor(value: string);
        static fromObject(data: {
            proposal_id?: number;
            depositor?: string;
        }): QueryDepositRequest;
        toObject(): {
            proposal_id?: number;
            depositor?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDepositRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDepositRequest;
    }
    export class QueryDepositResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            deposit?: dependency_4.cosmos.gov.v1beta1.Deposit;
        });
        get deposit(): dependency_4.cosmos.gov.v1beta1.Deposit;
        set deposit(value: dependency_4.cosmos.gov.v1beta1.Deposit);
        get has_deposit(): boolean;
        static fromObject(data: {
            deposit?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.Deposit.prototype.toObject>;
        }): QueryDepositResponse;
        toObject(): {
            deposit?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.Deposit.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDepositResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDepositResponse;
    }
    export class QueryDepositsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            proposal_id?: number;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get proposal_id(): number;
        set proposal_id(value: number);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            proposal_id?: number;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryDepositsRequest;
        toObject(): {
            proposal_id?: number;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDepositsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDepositsRequest;
    }
    export class QueryDepositsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            deposits?: dependency_4.cosmos.gov.v1beta1.Deposit[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get deposits(): dependency_4.cosmos.gov.v1beta1.Deposit[];
        set deposits(value: dependency_4.cosmos.gov.v1beta1.Deposit[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            deposits?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.Deposit.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryDepositsResponse;
        toObject(): {
            deposits?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.Deposit.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDepositsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDepositsResponse;
    }
    export class QueryTallyResultRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            proposal_id?: number;
        });
        get proposal_id(): number;
        set proposal_id(value: number);
        static fromObject(data: {
            proposal_id?: number;
        }): QueryTallyResultRequest;
        toObject(): {
            proposal_id?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTallyResultRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTallyResultRequest;
    }
    export class QueryTallyResultResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            tally?: dependency_4.cosmos.gov.v1beta1.TallyResult;
        });
        get tally(): dependency_4.cosmos.gov.v1beta1.TallyResult;
        set tally(value: dependency_4.cosmos.gov.v1beta1.TallyResult);
        get has_tally(): boolean;
        static fromObject(data: {
            tally?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.TallyResult.prototype.toObject>;
        }): QueryTallyResultResponse;
        toObject(): {
            tally?: ReturnType<typeof dependency_4.cosmos.gov.v1beta1.TallyResult.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTallyResultResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTallyResultResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            Proposal: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryProposalRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryProposalRequest;
                responseSerialize: (message: QueryProposalResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryProposalResponse;
            };
            Proposals: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryProposalsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryProposalsRequest;
                responseSerialize: (message: QueryProposalsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryProposalsResponse;
            };
            Vote: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryVoteRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryVoteRequest;
                responseSerialize: (message: QueryVoteResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryVoteResponse;
            };
            Votes: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryVotesRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryVotesRequest;
                responseSerialize: (message: QueryVotesResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryVotesResponse;
            };
            Params: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryParamsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryParamsRequest;
                responseSerialize: (message: QueryParamsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryParamsResponse;
            };
            Deposit: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDepositRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDepositRequest;
                responseSerialize: (message: QueryDepositResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDepositResponse;
            };
            Deposits: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDepositsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDepositsRequest;
                responseSerialize: (message: QueryDepositsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDepositsResponse;
            };
            TallyResult: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryTallyResultRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryTallyResultRequest;
                responseSerialize: (message: QueryTallyResultResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryTallyResultResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Proposal(call: grpc_1.ServerUnaryCall<QueryProposalRequest, QueryProposalResponse>, callback: grpc_1.sendUnaryData<QueryProposalResponse>): void;
        abstract Proposals(call: grpc_1.ServerUnaryCall<QueryProposalsRequest, QueryProposalsResponse>, callback: grpc_1.sendUnaryData<QueryProposalsResponse>): void;
        abstract Vote(call: grpc_1.ServerUnaryCall<QueryVoteRequest, QueryVoteResponse>, callback: grpc_1.sendUnaryData<QueryVoteResponse>): void;
        abstract Votes(call: grpc_1.ServerUnaryCall<QueryVotesRequest, QueryVotesResponse>, callback: grpc_1.sendUnaryData<QueryVotesResponse>): void;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
        abstract Deposit(call: grpc_1.ServerUnaryCall<QueryDepositRequest, QueryDepositResponse>, callback: grpc_1.sendUnaryData<QueryDepositResponse>): void;
        abstract Deposits(call: grpc_1.ServerUnaryCall<QueryDepositsRequest, QueryDepositsResponse>, callback: grpc_1.sendUnaryData<QueryDepositsResponse>): void;
        abstract TallyResult(call: grpc_1.ServerUnaryCall<QueryTallyResultRequest, QueryTallyResultResponse>, callback: grpc_1.sendUnaryData<QueryTallyResultResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Proposal: GrpcUnaryServiceInterface<QueryProposalRequest, QueryProposalResponse>;
        Proposals: GrpcUnaryServiceInterface<QueryProposalsRequest, QueryProposalsResponse>;
        Vote: GrpcUnaryServiceInterface<QueryVoteRequest, QueryVoteResponse>;
        Votes: GrpcUnaryServiceInterface<QueryVotesRequest, QueryVotesResponse>;
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
        Deposit: GrpcUnaryServiceInterface<QueryDepositRequest, QueryDepositResponse>;
        Deposits: GrpcUnaryServiceInterface<QueryDepositsRequest, QueryDepositsResponse>;
        TallyResult: GrpcUnaryServiceInterface<QueryTallyResultRequest, QueryTallyResultResponse>;
    }
    export {};
}
//# sourceMappingURL=query.d.ts.map