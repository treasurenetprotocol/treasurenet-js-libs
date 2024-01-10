/// <reference types="node" />
import * as dependency_1 from "./../crypto/proof";
import * as dependency_2 from "./../types/types";
import * as dependency_3 from "./../crypto/keys";
import * as dependency_4 from "./../types/params";
import * as dependency_5 from "./../../google/protobuf/timestamp";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace tendermint.abci {
    export enum CheckTxType {
        NEW = 0,
        RECHECK = 1
    }
    export enum EvidenceType {
        UNKNOWN = 0,
        DUPLICATE_VOTE = 1,
        LIGHT_CLIENT_ATTACK = 2
    }
    export class Request extends pb_1.Message {
        #private;
        constructor(data?: any[] | ({} & (({
            echo?: RequestEcho;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            echo?: never;
            flush?: RequestFlush;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            echo?: never;
            flush?: never;
            info?: RequestInfo;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: RequestSetOption;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: RequestInitChain;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: RequestQuery;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: RequestBeginBlock;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: RequestCheckTx;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: RequestDeliverTx;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: RequestEndBlock;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: RequestCommit;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: RequestListSnapshots;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: RequestOfferSnapshot;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: RequestLoadSnapshotChunk;
            apply_snapshot_chunk?: never;
        } | {
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: RequestApplySnapshotChunk;
        }))));
        get echo(): RequestEcho;
        set echo(value: RequestEcho);
        get has_echo(): boolean;
        get flush(): RequestFlush;
        set flush(value: RequestFlush);
        get has_flush(): boolean;
        get info(): RequestInfo;
        set info(value: RequestInfo);
        get has_info(): boolean;
        get set_option(): RequestSetOption;
        set set_option(value: RequestSetOption);
        get has_set_option(): boolean;
        get init_chain(): RequestInitChain;
        set init_chain(value: RequestInitChain);
        get has_init_chain(): boolean;
        get query(): RequestQuery;
        set query(value: RequestQuery);
        get has_query(): boolean;
        get begin_block(): RequestBeginBlock;
        set begin_block(value: RequestBeginBlock);
        get has_begin_block(): boolean;
        get check_tx(): RequestCheckTx;
        set check_tx(value: RequestCheckTx);
        get has_check_tx(): boolean;
        get deliver_tx(): RequestDeliverTx;
        set deliver_tx(value: RequestDeliverTx);
        get has_deliver_tx(): boolean;
        get end_block(): RequestEndBlock;
        set end_block(value: RequestEndBlock);
        get has_end_block(): boolean;
        get commit(): RequestCommit;
        set commit(value: RequestCommit);
        get has_commit(): boolean;
        get list_snapshots(): RequestListSnapshots;
        set list_snapshots(value: RequestListSnapshots);
        get has_list_snapshots(): boolean;
        get offer_snapshot(): RequestOfferSnapshot;
        set offer_snapshot(value: RequestOfferSnapshot);
        get has_offer_snapshot(): boolean;
        get load_snapshot_chunk(): RequestLoadSnapshotChunk;
        set load_snapshot_chunk(value: RequestLoadSnapshotChunk);
        get has_load_snapshot_chunk(): boolean;
        get apply_snapshot_chunk(): RequestApplySnapshotChunk;
        set apply_snapshot_chunk(value: RequestApplySnapshotChunk);
        get has_apply_snapshot_chunk(): boolean;
        get value(): "none" | "commit" | "echo" | "flush" | "info" | "set_option" | "init_chain" | "query" | "begin_block" | "check_tx" | "deliver_tx" | "end_block" | "list_snapshots" | "offer_snapshot" | "load_snapshot_chunk" | "apply_snapshot_chunk";
        static fromObject(data: {
            echo?: ReturnType<typeof RequestEcho.prototype.toObject>;
            flush?: ReturnType<typeof RequestFlush.prototype.toObject>;
            info?: ReturnType<typeof RequestInfo.prototype.toObject>;
            set_option?: ReturnType<typeof RequestSetOption.prototype.toObject>;
            init_chain?: ReturnType<typeof RequestInitChain.prototype.toObject>;
            query?: ReturnType<typeof RequestQuery.prototype.toObject>;
            begin_block?: ReturnType<typeof RequestBeginBlock.prototype.toObject>;
            check_tx?: ReturnType<typeof RequestCheckTx.prototype.toObject>;
            deliver_tx?: ReturnType<typeof RequestDeliverTx.prototype.toObject>;
            end_block?: ReturnType<typeof RequestEndBlock.prototype.toObject>;
            commit?: ReturnType<typeof RequestCommit.prototype.toObject>;
            list_snapshots?: ReturnType<typeof RequestListSnapshots.prototype.toObject>;
            offer_snapshot?: ReturnType<typeof RequestOfferSnapshot.prototype.toObject>;
            load_snapshot_chunk?: ReturnType<typeof RequestLoadSnapshotChunk.prototype.toObject>;
            apply_snapshot_chunk?: ReturnType<typeof RequestApplySnapshotChunk.prototype.toObject>;
        }): Request;
        toObject(): {
            echo?: ReturnType<typeof RequestEcho.prototype.toObject>;
            flush?: ReturnType<typeof RequestFlush.prototype.toObject>;
            info?: ReturnType<typeof RequestInfo.prototype.toObject>;
            set_option?: ReturnType<typeof RequestSetOption.prototype.toObject>;
            init_chain?: ReturnType<typeof RequestInitChain.prototype.toObject>;
            query?: ReturnType<typeof RequestQuery.prototype.toObject>;
            begin_block?: ReturnType<typeof RequestBeginBlock.prototype.toObject>;
            check_tx?: ReturnType<typeof RequestCheckTx.prototype.toObject>;
            deliver_tx?: ReturnType<typeof RequestDeliverTx.prototype.toObject>;
            end_block?: ReturnType<typeof RequestEndBlock.prototype.toObject>;
            commit?: ReturnType<typeof RequestCommit.prototype.toObject>;
            list_snapshots?: ReturnType<typeof RequestListSnapshots.prototype.toObject>;
            offer_snapshot?: ReturnType<typeof RequestOfferSnapshot.prototype.toObject>;
            load_snapshot_chunk?: ReturnType<typeof RequestLoadSnapshotChunk.prototype.toObject>;
            apply_snapshot_chunk?: ReturnType<typeof RequestApplySnapshotChunk.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Request;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Request;
    }
    export class RequestEcho extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            message?: string;
        });
        get message(): string;
        set message(value: string);
        static fromObject(data: {
            message?: string;
        }): RequestEcho;
        toObject(): {
            message?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestEcho;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): RequestEcho;
    }
    export class RequestFlush extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): RequestFlush;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestFlush;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): RequestFlush;
    }
    export class RequestInfo extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            version?: string;
            block_version?: number;
            p2p_version?: number;
        });
        get version(): string;
        set version(value: string);
        get block_version(): number;
        set block_version(value: number);
        get p2p_version(): number;
        set p2p_version(value: number);
        static fromObject(data: {
            version?: string;
            block_version?: number;
            p2p_version?: number;
        }): RequestInfo;
        toObject(): {
            version?: string;
            block_version?: number;
            p2p_version?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestInfo;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): RequestInfo;
    }
    export class RequestSetOption extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            key?: string;
            value?: string;
        });
        get key(): string;
        set key(value: string);
        get value(): string;
        set value(value: string);
        static fromObject(data: {
            key?: string;
            value?: string;
        }): RequestSetOption;
        toObject(): {
            key?: string;
            value?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestSetOption;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): RequestSetOption;
    }
    export class RequestInitChain extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            time?: dependency_5.google.protobuf.Timestamp;
            chain_id?: string;
            consensus_params?: ConsensusParams;
            validators?: ValidatorUpdate[];
            app_state_bytes?: Uint8Array;
            initial_height?: number;
        });
        get time(): dependency_5.google.protobuf.Timestamp;
        set time(value: dependency_5.google.protobuf.Timestamp);
        get has_time(): boolean;
        get chain_id(): string;
        set chain_id(value: string);
        get consensus_params(): ConsensusParams;
        set consensus_params(value: ConsensusParams);
        get has_consensus_params(): boolean;
        get validators(): ValidatorUpdate[];
        set validators(value: ValidatorUpdate[]);
        get app_state_bytes(): Uint8Array;
        set app_state_bytes(value: Uint8Array);
        get initial_height(): number;
        set initial_height(value: number);
        static fromObject(data: {
            time?: ReturnType<typeof dependency_5.google.protobuf.Timestamp.prototype.toObject>;
            chain_id?: string;
            consensus_params?: ReturnType<typeof ConsensusParams.prototype.toObject>;
            validators?: ReturnType<typeof ValidatorUpdate.prototype.toObject>[];
            app_state_bytes?: Uint8Array;
            initial_height?: number;
        }): RequestInitChain;
        toObject(): {
            time?: ReturnType<typeof dependency_5.google.protobuf.Timestamp.prototype.toObject>;
            chain_id?: string;
            consensus_params?: ReturnType<typeof ConsensusParams.prototype.toObject>;
            validators?: ReturnType<typeof ValidatorUpdate.prototype.toObject>[];
            app_state_bytes?: Uint8Array;
            initial_height?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestInitChain;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): RequestInitChain;
    }
    export class RequestQuery extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            data?: Uint8Array;
            path?: string;
            height?: number;
            prove?: boolean;
        });
        get data(): Uint8Array;
        set data(value: Uint8Array);
        get path(): string;
        set path(value: string);
        get height(): number;
        set height(value: number);
        get prove(): boolean;
        set prove(value: boolean);
        static fromObject(data: {
            data?: Uint8Array;
            path?: string;
            height?: number;
            prove?: boolean;
        }): RequestQuery;
        toObject(): {
            data?: Uint8Array;
            path?: string;
            height?: number;
            prove?: boolean;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestQuery;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): RequestQuery;
    }
    export class RequestBeginBlock extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            hash?: Uint8Array;
            header?: dependency_2.tendermint.types.Header;
            last_commit_info?: LastCommitInfo;
            byzantine_validators?: Evidence[];
        });
        get hash(): Uint8Array;
        set hash(value: Uint8Array);
        get header(): dependency_2.tendermint.types.Header;
        set header(value: dependency_2.tendermint.types.Header);
        get has_header(): boolean;
        get last_commit_info(): LastCommitInfo;
        set last_commit_info(value: LastCommitInfo);
        get has_last_commit_info(): boolean;
        get byzantine_validators(): Evidence[];
        set byzantine_validators(value: Evidence[]);
        static fromObject(data: {
            hash?: Uint8Array;
            header?: ReturnType<typeof dependency_2.tendermint.types.Header.prototype.toObject>;
            last_commit_info?: ReturnType<typeof LastCommitInfo.prototype.toObject>;
            byzantine_validators?: ReturnType<typeof Evidence.prototype.toObject>[];
        }): RequestBeginBlock;
        toObject(): {
            hash?: Uint8Array;
            header?: ReturnType<typeof dependency_2.tendermint.types.Header.prototype.toObject>;
            last_commit_info?: ReturnType<typeof LastCommitInfo.prototype.toObject>;
            byzantine_validators?: ReturnType<typeof Evidence.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestBeginBlock;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): RequestBeginBlock;
    }
    export class RequestCheckTx extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            tx?: Uint8Array;
            type?: CheckTxType;
        });
        get tx(): Uint8Array;
        set tx(value: Uint8Array);
        get type(): CheckTxType;
        set type(value: CheckTxType);
        static fromObject(data: {
            tx?: Uint8Array;
            type?: CheckTxType;
        }): RequestCheckTx;
        toObject(): {
            tx?: Uint8Array;
            type?: CheckTxType;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestCheckTx;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): RequestCheckTx;
    }
    export class RequestDeliverTx extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            tx?: Uint8Array;
        });
        get tx(): Uint8Array;
        set tx(value: Uint8Array);
        static fromObject(data: {
            tx?: Uint8Array;
        }): RequestDeliverTx;
        toObject(): {
            tx?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestDeliverTx;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): RequestDeliverTx;
    }
    export class RequestEndBlock extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            height?: number;
        });
        get height(): number;
        set height(value: number);
        static fromObject(data: {
            height?: number;
        }): RequestEndBlock;
        toObject(): {
            height?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestEndBlock;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): RequestEndBlock;
    }
    export class RequestCommit extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): RequestCommit;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestCommit;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): RequestCommit;
    }
    export class RequestListSnapshots extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): RequestListSnapshots;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestListSnapshots;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): RequestListSnapshots;
    }
    export class RequestOfferSnapshot extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            snapshot?: Snapshot;
            app_hash?: Uint8Array;
        });
        get snapshot(): Snapshot;
        set snapshot(value: Snapshot);
        get has_snapshot(): boolean;
        get app_hash(): Uint8Array;
        set app_hash(value: Uint8Array);
        static fromObject(data: {
            snapshot?: ReturnType<typeof Snapshot.prototype.toObject>;
            app_hash?: Uint8Array;
        }): RequestOfferSnapshot;
        toObject(): {
            snapshot?: ReturnType<typeof Snapshot.prototype.toObject>;
            app_hash?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestOfferSnapshot;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): RequestOfferSnapshot;
    }
    export class RequestLoadSnapshotChunk extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            height?: number;
            format?: number;
            chunk?: number;
        });
        get height(): number;
        set height(value: number);
        get format(): number;
        set format(value: number);
        get chunk(): number;
        set chunk(value: number);
        static fromObject(data: {
            height?: number;
            format?: number;
            chunk?: number;
        }): RequestLoadSnapshotChunk;
        toObject(): {
            height?: number;
            format?: number;
            chunk?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestLoadSnapshotChunk;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): RequestLoadSnapshotChunk;
    }
    export class RequestApplySnapshotChunk extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            index?: number;
            chunk?: Uint8Array;
            sender?: string;
        });
        get index(): number;
        set index(value: number);
        get chunk(): Uint8Array;
        set chunk(value: Uint8Array);
        get sender(): string;
        set sender(value: string);
        static fromObject(data: {
            index?: number;
            chunk?: Uint8Array;
            sender?: string;
        }): RequestApplySnapshotChunk;
        toObject(): {
            index?: number;
            chunk?: Uint8Array;
            sender?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestApplySnapshotChunk;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): RequestApplySnapshotChunk;
    }
    export class Response extends pb_1.Message {
        #private;
        constructor(data?: any[] | ({} & (({
            exception?: ResponseException;
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            exception?: never;
            echo?: ResponseEcho;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            exception?: never;
            echo?: never;
            flush?: ResponseFlush;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            exception?: never;
            echo?: never;
            flush?: never;
            info?: ResponseInfo;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            exception?: never;
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: ResponseSetOption;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            exception?: never;
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: ResponseInitChain;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            exception?: never;
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: ResponseQuery;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            exception?: never;
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: ResponseBeginBlock;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            exception?: never;
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: ResponseCheckTx;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            exception?: never;
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: ResponseDeliverTx;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            exception?: never;
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: ResponseEndBlock;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            exception?: never;
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: ResponseCommit;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            exception?: never;
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: ResponseListSnapshots;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            exception?: never;
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: ResponseOfferSnapshot;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: never;
        } | {
            exception?: never;
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: ResponseLoadSnapshotChunk;
            apply_snapshot_chunk?: never;
        } | {
            exception?: never;
            echo?: never;
            flush?: never;
            info?: never;
            set_option?: never;
            init_chain?: never;
            query?: never;
            begin_block?: never;
            check_tx?: never;
            deliver_tx?: never;
            end_block?: never;
            commit?: never;
            list_snapshots?: never;
            offer_snapshot?: never;
            load_snapshot_chunk?: never;
            apply_snapshot_chunk?: ResponseApplySnapshotChunk;
        }))));
        get exception(): ResponseException;
        set exception(value: ResponseException);
        get has_exception(): boolean;
        get echo(): ResponseEcho;
        set echo(value: ResponseEcho);
        get has_echo(): boolean;
        get flush(): ResponseFlush;
        set flush(value: ResponseFlush);
        get has_flush(): boolean;
        get info(): ResponseInfo;
        set info(value: ResponseInfo);
        get has_info(): boolean;
        get set_option(): ResponseSetOption;
        set set_option(value: ResponseSetOption);
        get has_set_option(): boolean;
        get init_chain(): ResponseInitChain;
        set init_chain(value: ResponseInitChain);
        get has_init_chain(): boolean;
        get query(): ResponseQuery;
        set query(value: ResponseQuery);
        get has_query(): boolean;
        get begin_block(): ResponseBeginBlock;
        set begin_block(value: ResponseBeginBlock);
        get has_begin_block(): boolean;
        get check_tx(): ResponseCheckTx;
        set check_tx(value: ResponseCheckTx);
        get has_check_tx(): boolean;
        get deliver_tx(): ResponseDeliverTx;
        set deliver_tx(value: ResponseDeliverTx);
        get has_deliver_tx(): boolean;
        get end_block(): ResponseEndBlock;
        set end_block(value: ResponseEndBlock);
        get has_end_block(): boolean;
        get commit(): ResponseCommit;
        set commit(value: ResponseCommit);
        get has_commit(): boolean;
        get list_snapshots(): ResponseListSnapshots;
        set list_snapshots(value: ResponseListSnapshots);
        get has_list_snapshots(): boolean;
        get offer_snapshot(): ResponseOfferSnapshot;
        set offer_snapshot(value: ResponseOfferSnapshot);
        get has_offer_snapshot(): boolean;
        get load_snapshot_chunk(): ResponseLoadSnapshotChunk;
        set load_snapshot_chunk(value: ResponseLoadSnapshotChunk);
        get has_load_snapshot_chunk(): boolean;
        get apply_snapshot_chunk(): ResponseApplySnapshotChunk;
        set apply_snapshot_chunk(value: ResponseApplySnapshotChunk);
        get has_apply_snapshot_chunk(): boolean;
        get value(): "none" | "commit" | "echo" | "flush" | "info" | "set_option" | "init_chain" | "query" | "begin_block" | "check_tx" | "deliver_tx" | "end_block" | "list_snapshots" | "offer_snapshot" | "load_snapshot_chunk" | "apply_snapshot_chunk" | "exception";
        static fromObject(data: {
            exception?: ReturnType<typeof ResponseException.prototype.toObject>;
            echo?: ReturnType<typeof ResponseEcho.prototype.toObject>;
            flush?: ReturnType<typeof ResponseFlush.prototype.toObject>;
            info?: ReturnType<typeof ResponseInfo.prototype.toObject>;
            set_option?: ReturnType<typeof ResponseSetOption.prototype.toObject>;
            init_chain?: ReturnType<typeof ResponseInitChain.prototype.toObject>;
            query?: ReturnType<typeof ResponseQuery.prototype.toObject>;
            begin_block?: ReturnType<typeof ResponseBeginBlock.prototype.toObject>;
            check_tx?: ReturnType<typeof ResponseCheckTx.prototype.toObject>;
            deliver_tx?: ReturnType<typeof ResponseDeliverTx.prototype.toObject>;
            end_block?: ReturnType<typeof ResponseEndBlock.prototype.toObject>;
            commit?: ReturnType<typeof ResponseCommit.prototype.toObject>;
            list_snapshots?: ReturnType<typeof ResponseListSnapshots.prototype.toObject>;
            offer_snapshot?: ReturnType<typeof ResponseOfferSnapshot.prototype.toObject>;
            load_snapshot_chunk?: ReturnType<typeof ResponseLoadSnapshotChunk.prototype.toObject>;
            apply_snapshot_chunk?: ReturnType<typeof ResponseApplySnapshotChunk.prototype.toObject>;
        }): Response;
        toObject(): {
            exception?: ReturnType<typeof ResponseException.prototype.toObject>;
            echo?: ReturnType<typeof ResponseEcho.prototype.toObject>;
            flush?: ReturnType<typeof ResponseFlush.prototype.toObject>;
            info?: ReturnType<typeof ResponseInfo.prototype.toObject>;
            set_option?: ReturnType<typeof ResponseSetOption.prototype.toObject>;
            init_chain?: ReturnType<typeof ResponseInitChain.prototype.toObject>;
            query?: ReturnType<typeof ResponseQuery.prototype.toObject>;
            begin_block?: ReturnType<typeof ResponseBeginBlock.prototype.toObject>;
            check_tx?: ReturnType<typeof ResponseCheckTx.prototype.toObject>;
            deliver_tx?: ReturnType<typeof ResponseDeliverTx.prototype.toObject>;
            end_block?: ReturnType<typeof ResponseEndBlock.prototype.toObject>;
            commit?: ReturnType<typeof ResponseCommit.prototype.toObject>;
            list_snapshots?: ReturnType<typeof ResponseListSnapshots.prototype.toObject>;
            offer_snapshot?: ReturnType<typeof ResponseOfferSnapshot.prototype.toObject>;
            load_snapshot_chunk?: ReturnType<typeof ResponseLoadSnapshotChunk.prototype.toObject>;
            apply_snapshot_chunk?: ReturnType<typeof ResponseApplySnapshotChunk.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Response;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Response;
    }
    export class ResponseException extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            error?: string;
        });
        get error(): string;
        set error(value: string);
        static fromObject(data: {
            error?: string;
        }): ResponseException;
        toObject(): {
            error?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseException;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseException;
    }
    export class ResponseEcho extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            message?: string;
        });
        get message(): string;
        set message(value: string);
        static fromObject(data: {
            message?: string;
        }): ResponseEcho;
        toObject(): {
            message?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseEcho;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseEcho;
    }
    export class ResponseFlush extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): ResponseFlush;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseFlush;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseFlush;
    }
    export class ResponseInfo extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            data?: string;
            version?: string;
            app_version?: number;
            last_block_height?: number;
            last_block_app_hash?: Uint8Array;
        });
        get data(): string;
        set data(value: string);
        get version(): string;
        set version(value: string);
        get app_version(): number;
        set app_version(value: number);
        get last_block_height(): number;
        set last_block_height(value: number);
        get last_block_app_hash(): Uint8Array;
        set last_block_app_hash(value: Uint8Array);
        static fromObject(data: {
            data?: string;
            version?: string;
            app_version?: number;
            last_block_height?: number;
            last_block_app_hash?: Uint8Array;
        }): ResponseInfo;
        toObject(): {
            data?: string;
            version?: string;
            app_version?: number;
            last_block_height?: number;
            last_block_app_hash?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseInfo;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseInfo;
    }
    export class ResponseSetOption extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            code?: number;
            log?: string;
            info?: string;
        });
        get code(): number;
        set code(value: number);
        get log(): string;
        set log(value: string);
        get info(): string;
        set info(value: string);
        static fromObject(data: {
            code?: number;
            log?: string;
            info?: string;
        }): ResponseSetOption;
        toObject(): {
            code?: number;
            log?: string;
            info?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseSetOption;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseSetOption;
    }
    export class ResponseInitChain extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            consensus_params?: ConsensusParams;
            validators?: ValidatorUpdate[];
            app_hash?: Uint8Array;
        });
        get consensus_params(): ConsensusParams;
        set consensus_params(value: ConsensusParams);
        get has_consensus_params(): boolean;
        get validators(): ValidatorUpdate[];
        set validators(value: ValidatorUpdate[]);
        get app_hash(): Uint8Array;
        set app_hash(value: Uint8Array);
        static fromObject(data: {
            consensus_params?: ReturnType<typeof ConsensusParams.prototype.toObject>;
            validators?: ReturnType<typeof ValidatorUpdate.prototype.toObject>[];
            app_hash?: Uint8Array;
        }): ResponseInitChain;
        toObject(): {
            consensus_params?: ReturnType<typeof ConsensusParams.prototype.toObject>;
            validators?: ReturnType<typeof ValidatorUpdate.prototype.toObject>[];
            app_hash?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseInitChain;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseInitChain;
    }
    export class ResponseQuery extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            code?: number;
            log?: string;
            info?: string;
            index?: number;
            key?: Uint8Array;
            value?: Uint8Array;
            proof_ops?: dependency_1.tendermint.crypto.ProofOps;
            height?: number;
            codespace?: string;
        });
        get code(): number;
        set code(value: number);
        get log(): string;
        set log(value: string);
        get info(): string;
        set info(value: string);
        get index(): number;
        set index(value: number);
        get key(): Uint8Array;
        set key(value: Uint8Array);
        get value(): Uint8Array;
        set value(value: Uint8Array);
        get proof_ops(): dependency_1.tendermint.crypto.ProofOps;
        set proof_ops(value: dependency_1.tendermint.crypto.ProofOps);
        get has_proof_ops(): boolean;
        get height(): number;
        set height(value: number);
        get codespace(): string;
        set codespace(value: string);
        static fromObject(data: {
            code?: number;
            log?: string;
            info?: string;
            index?: number;
            key?: Uint8Array;
            value?: Uint8Array;
            proof_ops?: ReturnType<typeof dependency_1.tendermint.crypto.ProofOps.prototype.toObject>;
            height?: number;
            codespace?: string;
        }): ResponseQuery;
        toObject(): {
            code?: number;
            log?: string;
            info?: string;
            index?: number;
            key?: Uint8Array;
            value?: Uint8Array;
            proof_ops?: ReturnType<typeof dependency_1.tendermint.crypto.ProofOps.prototype.toObject>;
            height?: number;
            codespace?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseQuery;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseQuery;
    }
    export class ResponseBeginBlock extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            events?: Event[];
        });
        get events(): Event[];
        set events(value: Event[]);
        static fromObject(data: {
            events?: ReturnType<typeof Event.prototype.toObject>[];
        }): ResponseBeginBlock;
        toObject(): {
            events?: ReturnType<typeof Event.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseBeginBlock;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseBeginBlock;
    }
    export class ResponseCheckTx extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gas_wanted?: number;
            gas_used?: number;
            events?: Event[];
            codespace?: string;
        });
        get code(): number;
        set code(value: number);
        get data(): Uint8Array;
        set data(value: Uint8Array);
        get log(): string;
        set log(value: string);
        get info(): string;
        set info(value: string);
        get gas_wanted(): number;
        set gas_wanted(value: number);
        get gas_used(): number;
        set gas_used(value: number);
        get events(): Event[];
        set events(value: Event[]);
        get codespace(): string;
        set codespace(value: string);
        static fromObject(data: {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gas_wanted?: number;
            gas_used?: number;
            events?: ReturnType<typeof Event.prototype.toObject>[];
            codespace?: string;
        }): ResponseCheckTx;
        toObject(): {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gas_wanted?: number;
            gas_used?: number;
            events?: ReturnType<typeof Event.prototype.toObject>[];
            codespace?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseCheckTx;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseCheckTx;
    }
    export class ResponseDeliverTx extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gas_wanted?: number;
            gas_used?: number;
            events?: Event[];
            codespace?: string;
        });
        get code(): number;
        set code(value: number);
        get data(): Uint8Array;
        set data(value: Uint8Array);
        get log(): string;
        set log(value: string);
        get info(): string;
        set info(value: string);
        get gas_wanted(): number;
        set gas_wanted(value: number);
        get gas_used(): number;
        set gas_used(value: number);
        get events(): Event[];
        set events(value: Event[]);
        get codespace(): string;
        set codespace(value: string);
        static fromObject(data: {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gas_wanted?: number;
            gas_used?: number;
            events?: ReturnType<typeof Event.prototype.toObject>[];
            codespace?: string;
        }): ResponseDeliverTx;
        toObject(): {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gas_wanted?: number;
            gas_used?: number;
            events?: ReturnType<typeof Event.prototype.toObject>[];
            codespace?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseDeliverTx;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseDeliverTx;
    }
    export class ResponseEndBlock extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validator_updates?: ValidatorUpdate[];
            consensus_param_updates?: ConsensusParams;
            events?: Event[];
        });
        get validator_updates(): ValidatorUpdate[];
        set validator_updates(value: ValidatorUpdate[]);
        get consensus_param_updates(): ConsensusParams;
        set consensus_param_updates(value: ConsensusParams);
        get has_consensus_param_updates(): boolean;
        get events(): Event[];
        set events(value: Event[]);
        static fromObject(data: {
            validator_updates?: ReturnType<typeof ValidatorUpdate.prototype.toObject>[];
            consensus_param_updates?: ReturnType<typeof ConsensusParams.prototype.toObject>;
            events?: ReturnType<typeof Event.prototype.toObject>[];
        }): ResponseEndBlock;
        toObject(): {
            validator_updates?: ReturnType<typeof ValidatorUpdate.prototype.toObject>[];
            consensus_param_updates?: ReturnType<typeof ConsensusParams.prototype.toObject>;
            events?: ReturnType<typeof Event.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseEndBlock;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseEndBlock;
    }
    export class ResponseCommit extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            data?: Uint8Array;
            retain_height?: number;
        });
        get data(): Uint8Array;
        set data(value: Uint8Array);
        get retain_height(): number;
        set retain_height(value: number);
        static fromObject(data: {
            data?: Uint8Array;
            retain_height?: number;
        }): ResponseCommit;
        toObject(): {
            data?: Uint8Array;
            retain_height?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseCommit;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseCommit;
    }
    export class ResponseListSnapshots extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            snapshots?: Snapshot[];
        });
        get snapshots(): Snapshot[];
        set snapshots(value: Snapshot[]);
        static fromObject(data: {
            snapshots?: ReturnType<typeof Snapshot.prototype.toObject>[];
        }): ResponseListSnapshots;
        toObject(): {
            snapshots?: ReturnType<typeof Snapshot.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseListSnapshots;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseListSnapshots;
    }
    export class ResponseOfferSnapshot extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            result?: ResponseOfferSnapshot.Result;
        });
        get result(): ResponseOfferSnapshot.Result;
        set result(value: ResponseOfferSnapshot.Result);
        static fromObject(data: {
            result?: ResponseOfferSnapshot.Result;
        }): ResponseOfferSnapshot;
        toObject(): {
            result?: ResponseOfferSnapshot.Result;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseOfferSnapshot;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseOfferSnapshot;
    }
    export namespace ResponseOfferSnapshot {
        enum Result {
            UNKNOWN = 0,
            ACCEPT = 1,
            ABORT = 2,
            REJECT = 3,
            REJECT_FORMAT = 4,
            REJECT_SENDER = 5
        }
    }
    export class ResponseLoadSnapshotChunk extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            chunk?: Uint8Array;
        });
        get chunk(): Uint8Array;
        set chunk(value: Uint8Array);
        static fromObject(data: {
            chunk?: Uint8Array;
        }): ResponseLoadSnapshotChunk;
        toObject(): {
            chunk?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseLoadSnapshotChunk;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseLoadSnapshotChunk;
    }
    export class ResponseApplySnapshotChunk extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            result?: ResponseApplySnapshotChunk.Result;
            refetch_chunks?: number[];
            reject_senders?: string[];
        });
        get result(): ResponseApplySnapshotChunk.Result;
        set result(value: ResponseApplySnapshotChunk.Result);
        get refetch_chunks(): number[];
        set refetch_chunks(value: number[]);
        get reject_senders(): string[];
        set reject_senders(value: string[]);
        static fromObject(data: {
            result?: ResponseApplySnapshotChunk.Result;
            refetch_chunks?: number[];
            reject_senders?: string[];
        }): ResponseApplySnapshotChunk;
        toObject(): {
            result?: ResponseApplySnapshotChunk.Result;
            refetch_chunks?: number[];
            reject_senders?: string[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResponseApplySnapshotChunk;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ResponseApplySnapshotChunk;
    }
    export namespace ResponseApplySnapshotChunk {
        enum Result {
            UNKNOWN = 0,
            ACCEPT = 1,
            ABORT = 2,
            RETRY = 3,
            RETRY_SNAPSHOT = 4,
            REJECT_SNAPSHOT = 5
        }
    }
    export class ConsensusParams extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            block?: BlockParams;
            evidence?: dependency_4.tendermint.types.EvidenceParams;
            validator?: dependency_4.tendermint.types.ValidatorParams;
            version?: dependency_4.tendermint.types.VersionParams;
        });
        get block(): BlockParams;
        set block(value: BlockParams);
        get has_block(): boolean;
        get evidence(): dependency_4.tendermint.types.EvidenceParams;
        set evidence(value: dependency_4.tendermint.types.EvidenceParams);
        get has_evidence(): boolean;
        get validator(): dependency_4.tendermint.types.ValidatorParams;
        set validator(value: dependency_4.tendermint.types.ValidatorParams);
        get has_validator(): boolean;
        get version(): dependency_4.tendermint.types.VersionParams;
        set version(value: dependency_4.tendermint.types.VersionParams);
        get has_version(): boolean;
        static fromObject(data: {
            block?: ReturnType<typeof BlockParams.prototype.toObject>;
            evidence?: ReturnType<typeof dependency_4.tendermint.types.EvidenceParams.prototype.toObject>;
            validator?: ReturnType<typeof dependency_4.tendermint.types.ValidatorParams.prototype.toObject>;
            version?: ReturnType<typeof dependency_4.tendermint.types.VersionParams.prototype.toObject>;
        }): ConsensusParams;
        toObject(): {
            block?: ReturnType<typeof BlockParams.prototype.toObject>;
            evidence?: ReturnType<typeof dependency_4.tendermint.types.EvidenceParams.prototype.toObject>;
            validator?: ReturnType<typeof dependency_4.tendermint.types.ValidatorParams.prototype.toObject>;
            version?: ReturnType<typeof dependency_4.tendermint.types.VersionParams.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ConsensusParams;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ConsensusParams;
    }
    export class BlockParams extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            max_bytes?: number;
            max_gas?: number;
        });
        get max_bytes(): number;
        set max_bytes(value: number);
        get max_gas(): number;
        set max_gas(value: number);
        static fromObject(data: {
            max_bytes?: number;
            max_gas?: number;
        }): BlockParams;
        toObject(): {
            max_bytes?: number;
            max_gas?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BlockParams;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BlockParams;
    }
    export class LastCommitInfo extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            round?: number;
            votes?: VoteInfo[];
        });
        get round(): number;
        set round(value: number);
        get votes(): VoteInfo[];
        set votes(value: VoteInfo[]);
        static fromObject(data: {
            round?: number;
            votes?: ReturnType<typeof VoteInfo.prototype.toObject>[];
        }): LastCommitInfo;
        toObject(): {
            round?: number;
            votes?: ReturnType<typeof VoteInfo.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LastCommitInfo;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): LastCommitInfo;
    }
    export class Event extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            type?: string;
            attributes?: EventAttribute[];
        });
        get type(): string;
        set type(value: string);
        get attributes(): EventAttribute[];
        set attributes(value: EventAttribute[]);
        static fromObject(data: {
            type?: string;
            attributes?: ReturnType<typeof EventAttribute.prototype.toObject>[];
        }): Event;
        toObject(): {
            type?: string;
            attributes?: ReturnType<typeof EventAttribute.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Event;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Event;
    }
    export class EventAttribute extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            key?: Uint8Array;
            value?: Uint8Array;
            index?: boolean;
        });
        get key(): Uint8Array;
        set key(value: Uint8Array);
        get value(): Uint8Array;
        set value(value: Uint8Array);
        get index(): boolean;
        set index(value: boolean);
        static fromObject(data: {
            key?: Uint8Array;
            value?: Uint8Array;
            index?: boolean;
        }): EventAttribute;
        toObject(): {
            key?: Uint8Array;
            value?: Uint8Array;
            index?: boolean;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventAttribute;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EventAttribute;
    }
    export class TxResult extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            height?: number;
            index?: number;
            tx?: Uint8Array;
            result?: ResponseDeliverTx;
        });
        get height(): number;
        set height(value: number);
        get index(): number;
        set index(value: number);
        get tx(): Uint8Array;
        set tx(value: Uint8Array);
        get result(): ResponseDeliverTx;
        set result(value: ResponseDeliverTx);
        get has_result(): boolean;
        static fromObject(data: {
            height?: number;
            index?: number;
            tx?: Uint8Array;
            result?: ReturnType<typeof ResponseDeliverTx.prototype.toObject>;
        }): TxResult;
        toObject(): {
            height?: number;
            index?: number;
            tx?: Uint8Array;
            result?: ReturnType<typeof ResponseDeliverTx.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TxResult;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): TxResult;
    }
    export class Validator extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            address?: Uint8Array;
            power?: number;
        });
        get address(): Uint8Array;
        set address(value: Uint8Array);
        get power(): number;
        set power(value: number);
        static fromObject(data: {
            address?: Uint8Array;
            power?: number;
        }): Validator;
        toObject(): {
            address?: Uint8Array;
            power?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Validator;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Validator;
    }
    export class ValidatorUpdate extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            pub_key?: dependency_3.tendermint.crypto.PublicKey;
            power?: number;
        });
        get pub_key(): dependency_3.tendermint.crypto.PublicKey;
        set pub_key(value: dependency_3.tendermint.crypto.PublicKey);
        get has_pub_key(): boolean;
        get power(): number;
        set power(value: number);
        static fromObject(data: {
            pub_key?: ReturnType<typeof dependency_3.tendermint.crypto.PublicKey.prototype.toObject>;
            power?: number;
        }): ValidatorUpdate;
        toObject(): {
            pub_key?: ReturnType<typeof dependency_3.tendermint.crypto.PublicKey.prototype.toObject>;
            power?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ValidatorUpdate;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ValidatorUpdate;
    }
    export class VoteInfo extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validator?: Validator;
            signed_last_block?: boolean;
        });
        get validator(): Validator;
        set validator(value: Validator);
        get has_validator(): boolean;
        get signed_last_block(): boolean;
        set signed_last_block(value: boolean);
        static fromObject(data: {
            validator?: ReturnType<typeof Validator.prototype.toObject>;
            signed_last_block?: boolean;
        }): VoteInfo;
        toObject(): {
            validator?: ReturnType<typeof Validator.prototype.toObject>;
            signed_last_block?: boolean;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): VoteInfo;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): VoteInfo;
    }
    export class Evidence extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            type?: EvidenceType;
            validator?: Validator;
            height?: number;
            time?: dependency_5.google.protobuf.Timestamp;
            total_voting_power?: number;
        });
        get type(): EvidenceType;
        set type(value: EvidenceType);
        get validator(): Validator;
        set validator(value: Validator);
        get has_validator(): boolean;
        get height(): number;
        set height(value: number);
        get time(): dependency_5.google.protobuf.Timestamp;
        set time(value: dependency_5.google.protobuf.Timestamp);
        get has_time(): boolean;
        get total_voting_power(): number;
        set total_voting_power(value: number);
        static fromObject(data: {
            type?: EvidenceType;
            validator?: ReturnType<typeof Validator.prototype.toObject>;
            height?: number;
            time?: ReturnType<typeof dependency_5.google.protobuf.Timestamp.prototype.toObject>;
            total_voting_power?: number;
        }): Evidence;
        toObject(): {
            type?: EvidenceType;
            validator?: ReturnType<typeof Validator.prototype.toObject>;
            height?: number;
            time?: ReturnType<typeof dependency_5.google.protobuf.Timestamp.prototype.toObject>;
            total_voting_power?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Evidence;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Evidence;
    }
    export class Snapshot extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            height?: number;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Uint8Array;
        });
        get height(): number;
        set height(value: number);
        get format(): number;
        set format(value: number);
        get chunks(): number;
        set chunks(value: number);
        get hash(): Uint8Array;
        set hash(value: Uint8Array);
        get metadata(): Uint8Array;
        set metadata(value: Uint8Array);
        static fromObject(data: {
            height?: number;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Uint8Array;
        }): Snapshot;
        toObject(): {
            height?: number;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Snapshot;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Snapshot;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedABCIApplicationService {
        static definition: {
            Echo: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: RequestEcho) => Buffer;
                requestDeserialize: (bytes: Buffer) => RequestEcho;
                responseSerialize: (message: ResponseEcho) => Buffer;
                responseDeserialize: (bytes: Buffer) => ResponseEcho;
            };
            Flush: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: RequestFlush) => Buffer;
                requestDeserialize: (bytes: Buffer) => RequestFlush;
                responseSerialize: (message: ResponseFlush) => Buffer;
                responseDeserialize: (bytes: Buffer) => ResponseFlush;
            };
            Info: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: RequestInfo) => Buffer;
                requestDeserialize: (bytes: Buffer) => RequestInfo;
                responseSerialize: (message: ResponseInfo) => Buffer;
                responseDeserialize: (bytes: Buffer) => ResponseInfo;
            };
            SetOption: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: RequestSetOption) => Buffer;
                requestDeserialize: (bytes: Buffer) => RequestSetOption;
                responseSerialize: (message: ResponseSetOption) => Buffer;
                responseDeserialize: (bytes: Buffer) => ResponseSetOption;
            };
            DeliverTx: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: RequestDeliverTx) => Buffer;
                requestDeserialize: (bytes: Buffer) => RequestDeliverTx;
                responseSerialize: (message: ResponseDeliverTx) => Buffer;
                responseDeserialize: (bytes: Buffer) => ResponseDeliverTx;
            };
            CheckTx: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: RequestCheckTx) => Buffer;
                requestDeserialize: (bytes: Buffer) => RequestCheckTx;
                responseSerialize: (message: ResponseCheckTx) => Buffer;
                responseDeserialize: (bytes: Buffer) => ResponseCheckTx;
            };
            Query: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: RequestQuery) => Buffer;
                requestDeserialize: (bytes: Buffer) => RequestQuery;
                responseSerialize: (message: ResponseQuery) => Buffer;
                responseDeserialize: (bytes: Buffer) => ResponseQuery;
            };
            Commit: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: RequestCommit) => Buffer;
                requestDeserialize: (bytes: Buffer) => RequestCommit;
                responseSerialize: (message: ResponseCommit) => Buffer;
                responseDeserialize: (bytes: Buffer) => ResponseCommit;
            };
            InitChain: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: RequestInitChain) => Buffer;
                requestDeserialize: (bytes: Buffer) => RequestInitChain;
                responseSerialize: (message: ResponseInitChain) => Buffer;
                responseDeserialize: (bytes: Buffer) => ResponseInitChain;
            };
            BeginBlock: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: RequestBeginBlock) => Buffer;
                requestDeserialize: (bytes: Buffer) => RequestBeginBlock;
                responseSerialize: (message: ResponseBeginBlock) => Buffer;
                responseDeserialize: (bytes: Buffer) => ResponseBeginBlock;
            };
            EndBlock: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: RequestEndBlock) => Buffer;
                requestDeserialize: (bytes: Buffer) => RequestEndBlock;
                responseSerialize: (message: ResponseEndBlock) => Buffer;
                responseDeserialize: (bytes: Buffer) => ResponseEndBlock;
            };
            ListSnapshots: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: RequestListSnapshots) => Buffer;
                requestDeserialize: (bytes: Buffer) => RequestListSnapshots;
                responseSerialize: (message: ResponseListSnapshots) => Buffer;
                responseDeserialize: (bytes: Buffer) => ResponseListSnapshots;
            };
            OfferSnapshot: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: RequestOfferSnapshot) => Buffer;
                requestDeserialize: (bytes: Buffer) => RequestOfferSnapshot;
                responseSerialize: (message: ResponseOfferSnapshot) => Buffer;
                responseDeserialize: (bytes: Buffer) => ResponseOfferSnapshot;
            };
            LoadSnapshotChunk: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: RequestLoadSnapshotChunk) => Buffer;
                requestDeserialize: (bytes: Buffer) => RequestLoadSnapshotChunk;
                responseSerialize: (message: ResponseLoadSnapshotChunk) => Buffer;
                responseDeserialize: (bytes: Buffer) => ResponseLoadSnapshotChunk;
            };
            ApplySnapshotChunk: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: RequestApplySnapshotChunk) => Buffer;
                requestDeserialize: (bytes: Buffer) => RequestApplySnapshotChunk;
                responseSerialize: (message: ResponseApplySnapshotChunk) => Buffer;
                responseDeserialize: (bytes: Buffer) => ResponseApplySnapshotChunk;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Echo(call: grpc_1.ServerUnaryCall<RequestEcho, ResponseEcho>, callback: grpc_1.sendUnaryData<ResponseEcho>): void;
        abstract Flush(call: grpc_1.ServerUnaryCall<RequestFlush, ResponseFlush>, callback: grpc_1.sendUnaryData<ResponseFlush>): void;
        abstract Info(call: grpc_1.ServerUnaryCall<RequestInfo, ResponseInfo>, callback: grpc_1.sendUnaryData<ResponseInfo>): void;
        abstract SetOption(call: grpc_1.ServerUnaryCall<RequestSetOption, ResponseSetOption>, callback: grpc_1.sendUnaryData<ResponseSetOption>): void;
        abstract DeliverTx(call: grpc_1.ServerUnaryCall<RequestDeliverTx, ResponseDeliverTx>, callback: grpc_1.sendUnaryData<ResponseDeliverTx>): void;
        abstract CheckTx(call: grpc_1.ServerUnaryCall<RequestCheckTx, ResponseCheckTx>, callback: grpc_1.sendUnaryData<ResponseCheckTx>): void;
        abstract Query(call: grpc_1.ServerUnaryCall<RequestQuery, ResponseQuery>, callback: grpc_1.sendUnaryData<ResponseQuery>): void;
        abstract Commit(call: grpc_1.ServerUnaryCall<RequestCommit, ResponseCommit>, callback: grpc_1.sendUnaryData<ResponseCommit>): void;
        abstract InitChain(call: grpc_1.ServerUnaryCall<RequestInitChain, ResponseInitChain>, callback: grpc_1.sendUnaryData<ResponseInitChain>): void;
        abstract BeginBlock(call: grpc_1.ServerUnaryCall<RequestBeginBlock, ResponseBeginBlock>, callback: grpc_1.sendUnaryData<ResponseBeginBlock>): void;
        abstract EndBlock(call: grpc_1.ServerUnaryCall<RequestEndBlock, ResponseEndBlock>, callback: grpc_1.sendUnaryData<ResponseEndBlock>): void;
        abstract ListSnapshots(call: grpc_1.ServerUnaryCall<RequestListSnapshots, ResponseListSnapshots>, callback: grpc_1.sendUnaryData<ResponseListSnapshots>): void;
        abstract OfferSnapshot(call: grpc_1.ServerUnaryCall<RequestOfferSnapshot, ResponseOfferSnapshot>, callback: grpc_1.sendUnaryData<ResponseOfferSnapshot>): void;
        abstract LoadSnapshotChunk(call: grpc_1.ServerUnaryCall<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk>, callback: grpc_1.sendUnaryData<ResponseLoadSnapshotChunk>): void;
        abstract ApplySnapshotChunk(call: grpc_1.ServerUnaryCall<RequestApplySnapshotChunk, ResponseApplySnapshotChunk>, callback: grpc_1.sendUnaryData<ResponseApplySnapshotChunk>): void;
    }
    const ABCIApplicationClient_base: grpc_1.ServiceClientConstructor;
    export class ABCIApplicationClient extends ABCIApplicationClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Echo: GrpcUnaryServiceInterface<RequestEcho, ResponseEcho>;
        Flush: GrpcUnaryServiceInterface<RequestFlush, ResponseFlush>;
        Info: GrpcUnaryServiceInterface<RequestInfo, ResponseInfo>;
        SetOption: GrpcUnaryServiceInterface<RequestSetOption, ResponseSetOption>;
        DeliverTx: GrpcUnaryServiceInterface<RequestDeliverTx, ResponseDeliverTx>;
        CheckTx: GrpcUnaryServiceInterface<RequestCheckTx, ResponseCheckTx>;
        Query: GrpcUnaryServiceInterface<RequestQuery, ResponseQuery>;
        Commit: GrpcUnaryServiceInterface<RequestCommit, ResponseCommit>;
        InitChain: GrpcUnaryServiceInterface<RequestInitChain, ResponseInitChain>;
        BeginBlock: GrpcUnaryServiceInterface<RequestBeginBlock, ResponseBeginBlock>;
        EndBlock: GrpcUnaryServiceInterface<RequestEndBlock, ResponseEndBlock>;
        ListSnapshots: GrpcUnaryServiceInterface<RequestListSnapshots, ResponseListSnapshots>;
        OfferSnapshot: GrpcUnaryServiceInterface<RequestOfferSnapshot, ResponseOfferSnapshot>;
        LoadSnapshotChunk: GrpcUnaryServiceInterface<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk>;
        ApplySnapshotChunk: GrpcUnaryServiceInterface<RequestApplySnapshotChunk, ResponseApplySnapshotChunk>;
    }
    export {};
}
//# sourceMappingURL=types.d.ts.map