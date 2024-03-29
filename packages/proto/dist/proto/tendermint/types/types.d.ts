import * as dependency_2 from "./../../google/protobuf/timestamp";
import * as dependency_3 from "./../crypto/proof";
import * as dependency_4 from "./../version/types";
import * as dependency_5 from "./validator";
import * as pb_1 from "google-protobuf";
export declare namespace tendermint.types {
    enum BlockIDFlag {
        BLOCK_ID_FLAG_UNKNOWN = 0,
        BLOCK_ID_FLAG_ABSENT = 1,
        BLOCK_ID_FLAG_COMMIT = 2,
        BLOCK_ID_FLAG_NIL = 3
    }
    enum SignedMsgType {
        SIGNED_MSG_TYPE_UNKNOWN = 0,
        SIGNED_MSG_TYPE_PREVOTE = 1,
        SIGNED_MSG_TYPE_PRECOMMIT = 2,
        SIGNED_MSG_TYPE_PROPOSAL = 32
    }
    class PartSetHeader extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            total?: number;
            hash?: Uint8Array;
        });
        get total(): number;
        set total(value: number);
        get hash(): Uint8Array;
        set hash(value: Uint8Array);
        static fromObject(data: {
            total?: number;
            hash?: Uint8Array;
        }): PartSetHeader;
        toObject(): {
            total?: number;
            hash?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PartSetHeader;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): PartSetHeader;
    }
    class Part extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            index?: number;
            bytes?: Uint8Array;
            proof?: dependency_3.tendermint.crypto.Proof;
        });
        get index(): number;
        set index(value: number);
        get bytes(): Uint8Array;
        set bytes(value: Uint8Array);
        get proof(): dependency_3.tendermint.crypto.Proof;
        set proof(value: dependency_3.tendermint.crypto.Proof);
        get has_proof(): boolean;
        static fromObject(data: {
            index?: number;
            bytes?: Uint8Array;
            proof?: ReturnType<typeof dependency_3.tendermint.crypto.Proof.prototype.toObject>;
        }): Part;
        toObject(): {
            index?: number;
            bytes?: Uint8Array;
            proof?: ReturnType<typeof dependency_3.tendermint.crypto.Proof.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Part;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Part;
    }
    class BlockID extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            hash?: Uint8Array;
            part_set_header?: PartSetHeader;
        });
        get hash(): Uint8Array;
        set hash(value: Uint8Array);
        get part_set_header(): PartSetHeader;
        set part_set_header(value: PartSetHeader);
        get has_part_set_header(): boolean;
        static fromObject(data: {
            hash?: Uint8Array;
            part_set_header?: ReturnType<typeof PartSetHeader.prototype.toObject>;
        }): BlockID;
        toObject(): {
            hash?: Uint8Array;
            part_set_header?: ReturnType<typeof PartSetHeader.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BlockID;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BlockID;
    }
    class Header extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            version?: dependency_4.tendermint.version.Consensus;
            chain_id?: string;
            height?: number;
            time?: dependency_2.google.protobuf.Timestamp;
            last_block_id?: BlockID;
            last_commit_hash?: Uint8Array;
            data_hash?: Uint8Array;
            validators_hash?: Uint8Array;
            next_validators_hash?: Uint8Array;
            consensus_hash?: Uint8Array;
            app_hash?: Uint8Array;
            last_results_hash?: Uint8Array;
            evidence_hash?: Uint8Array;
            proposer_address?: Uint8Array;
        });
        get version(): dependency_4.tendermint.version.Consensus;
        set version(value: dependency_4.tendermint.version.Consensus);
        get has_version(): boolean;
        get chain_id(): string;
        set chain_id(value: string);
        get height(): number;
        set height(value: number);
        get time(): dependency_2.google.protobuf.Timestamp;
        set time(value: dependency_2.google.protobuf.Timestamp);
        get has_time(): boolean;
        get last_block_id(): BlockID;
        set last_block_id(value: BlockID);
        get has_last_block_id(): boolean;
        get last_commit_hash(): Uint8Array;
        set last_commit_hash(value: Uint8Array);
        get data_hash(): Uint8Array;
        set data_hash(value: Uint8Array);
        get validators_hash(): Uint8Array;
        set validators_hash(value: Uint8Array);
        get next_validators_hash(): Uint8Array;
        set next_validators_hash(value: Uint8Array);
        get consensus_hash(): Uint8Array;
        set consensus_hash(value: Uint8Array);
        get app_hash(): Uint8Array;
        set app_hash(value: Uint8Array);
        get last_results_hash(): Uint8Array;
        set last_results_hash(value: Uint8Array);
        get evidence_hash(): Uint8Array;
        set evidence_hash(value: Uint8Array);
        get proposer_address(): Uint8Array;
        set proposer_address(value: Uint8Array);
        static fromObject(data: {
            version?: ReturnType<typeof dependency_4.tendermint.version.Consensus.prototype.toObject>;
            chain_id?: string;
            height?: number;
            time?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            last_block_id?: ReturnType<typeof BlockID.prototype.toObject>;
            last_commit_hash?: Uint8Array;
            data_hash?: Uint8Array;
            validators_hash?: Uint8Array;
            next_validators_hash?: Uint8Array;
            consensus_hash?: Uint8Array;
            app_hash?: Uint8Array;
            last_results_hash?: Uint8Array;
            evidence_hash?: Uint8Array;
            proposer_address?: Uint8Array;
        }): Header;
        toObject(): {
            version?: ReturnType<typeof dependency_4.tendermint.version.Consensus.prototype.toObject>;
            chain_id?: string;
            height?: number;
            time?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            last_block_id?: ReturnType<typeof BlockID.prototype.toObject>;
            last_commit_hash?: Uint8Array;
            data_hash?: Uint8Array;
            validators_hash?: Uint8Array;
            next_validators_hash?: Uint8Array;
            consensus_hash?: Uint8Array;
            app_hash?: Uint8Array;
            last_results_hash?: Uint8Array;
            evidence_hash?: Uint8Array;
            proposer_address?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Header;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Header;
    }
    class Data extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            txs?: Uint8Array[];
        });
        get txs(): Uint8Array[];
        set txs(value: Uint8Array[]);
        static fromObject(data: {
            txs?: Uint8Array[];
        }): Data;
        toObject(): {
            txs?: Uint8Array[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Data;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Data;
    }
    class Vote extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            type?: SignedMsgType;
            height?: number;
            round?: number;
            block_id?: BlockID;
            timestamp?: dependency_2.google.protobuf.Timestamp;
            validator_address?: Uint8Array;
            validator_index?: number;
            signature?: Uint8Array;
        });
        get type(): SignedMsgType;
        set type(value: SignedMsgType);
        get height(): number;
        set height(value: number);
        get round(): number;
        set round(value: number);
        get block_id(): BlockID;
        set block_id(value: BlockID);
        get has_block_id(): boolean;
        get timestamp(): dependency_2.google.protobuf.Timestamp;
        set timestamp(value: dependency_2.google.protobuf.Timestamp);
        get has_timestamp(): boolean;
        get validator_address(): Uint8Array;
        set validator_address(value: Uint8Array);
        get validator_index(): number;
        set validator_index(value: number);
        get signature(): Uint8Array;
        set signature(value: Uint8Array);
        static fromObject(data: {
            type?: SignedMsgType;
            height?: number;
            round?: number;
            block_id?: ReturnType<typeof BlockID.prototype.toObject>;
            timestamp?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            validator_address?: Uint8Array;
            validator_index?: number;
            signature?: Uint8Array;
        }): Vote;
        toObject(): {
            type?: SignedMsgType;
            height?: number;
            round?: number;
            block_id?: ReturnType<typeof BlockID.prototype.toObject>;
            timestamp?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            validator_address?: Uint8Array;
            validator_index?: number;
            signature?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Vote;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Vote;
    }
    class Commit extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            height?: number;
            round?: number;
            block_id?: BlockID;
            signatures?: CommitSig[];
        });
        get height(): number;
        set height(value: number);
        get round(): number;
        set round(value: number);
        get block_id(): BlockID;
        set block_id(value: BlockID);
        get has_block_id(): boolean;
        get signatures(): CommitSig[];
        set signatures(value: CommitSig[]);
        static fromObject(data: {
            height?: number;
            round?: number;
            block_id?: ReturnType<typeof BlockID.prototype.toObject>;
            signatures?: ReturnType<typeof CommitSig.prototype.toObject>[];
        }): Commit;
        toObject(): {
            height?: number;
            round?: number;
            block_id?: ReturnType<typeof BlockID.prototype.toObject>;
            signatures?: ReturnType<typeof CommitSig.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Commit;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Commit;
    }
    class CommitSig extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            block_id_flag?: BlockIDFlag;
            validator_address?: Uint8Array;
            timestamp?: dependency_2.google.protobuf.Timestamp;
            signature?: Uint8Array;
        });
        get block_id_flag(): BlockIDFlag;
        set block_id_flag(value: BlockIDFlag);
        get validator_address(): Uint8Array;
        set validator_address(value: Uint8Array);
        get timestamp(): dependency_2.google.protobuf.Timestamp;
        set timestamp(value: dependency_2.google.protobuf.Timestamp);
        get has_timestamp(): boolean;
        get signature(): Uint8Array;
        set signature(value: Uint8Array);
        static fromObject(data: {
            block_id_flag?: BlockIDFlag;
            validator_address?: Uint8Array;
            timestamp?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            signature?: Uint8Array;
        }): CommitSig;
        toObject(): {
            block_id_flag?: BlockIDFlag;
            validator_address?: Uint8Array;
            timestamp?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            signature?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CommitSig;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): CommitSig;
    }
    class Proposal extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            type?: SignedMsgType;
            height?: number;
            round?: number;
            pol_round?: number;
            block_id?: BlockID;
            timestamp?: dependency_2.google.protobuf.Timestamp;
            signature?: Uint8Array;
        });
        get type(): SignedMsgType;
        set type(value: SignedMsgType);
        get height(): number;
        set height(value: number);
        get round(): number;
        set round(value: number);
        get pol_round(): number;
        set pol_round(value: number);
        get block_id(): BlockID;
        set block_id(value: BlockID);
        get has_block_id(): boolean;
        get timestamp(): dependency_2.google.protobuf.Timestamp;
        set timestamp(value: dependency_2.google.protobuf.Timestamp);
        get has_timestamp(): boolean;
        get signature(): Uint8Array;
        set signature(value: Uint8Array);
        static fromObject(data: {
            type?: SignedMsgType;
            height?: number;
            round?: number;
            pol_round?: number;
            block_id?: ReturnType<typeof BlockID.prototype.toObject>;
            timestamp?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            signature?: Uint8Array;
        }): Proposal;
        toObject(): {
            type?: SignedMsgType;
            height?: number;
            round?: number;
            pol_round?: number;
            block_id?: ReturnType<typeof BlockID.prototype.toObject>;
            timestamp?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            signature?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Proposal;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Proposal;
    }
    class SignedHeader extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            header?: Header;
            commit?: Commit;
        });
        get header(): Header;
        set header(value: Header);
        get has_header(): boolean;
        get commit(): Commit;
        set commit(value: Commit);
        get has_commit(): boolean;
        static fromObject(data: {
            header?: ReturnType<typeof Header.prototype.toObject>;
            commit?: ReturnType<typeof Commit.prototype.toObject>;
        }): SignedHeader;
        toObject(): {
            header?: ReturnType<typeof Header.prototype.toObject>;
            commit?: ReturnType<typeof Commit.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SignedHeader;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): SignedHeader;
    }
    class LightBlock extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            signed_header?: SignedHeader;
            validator_set?: dependency_5.tendermint.types.ValidatorSet;
        });
        get signed_header(): SignedHeader;
        set signed_header(value: SignedHeader);
        get has_signed_header(): boolean;
        get validator_set(): dependency_5.tendermint.types.ValidatorSet;
        set validator_set(value: dependency_5.tendermint.types.ValidatorSet);
        get has_validator_set(): boolean;
        static fromObject(data: {
            signed_header?: ReturnType<typeof SignedHeader.prototype.toObject>;
            validator_set?: ReturnType<typeof dependency_5.tendermint.types.ValidatorSet.prototype.toObject>;
        }): LightBlock;
        toObject(): {
            signed_header?: ReturnType<typeof SignedHeader.prototype.toObject>;
            validator_set?: ReturnType<typeof dependency_5.tendermint.types.ValidatorSet.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LightBlock;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): LightBlock;
    }
    class BlockMeta extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            block_id?: BlockID;
            block_size?: number;
            header?: Header;
            num_txs?: number;
        });
        get block_id(): BlockID;
        set block_id(value: BlockID);
        get has_block_id(): boolean;
        get block_size(): number;
        set block_size(value: number);
        get header(): Header;
        set header(value: Header);
        get has_header(): boolean;
        get num_txs(): number;
        set num_txs(value: number);
        static fromObject(data: {
            block_id?: ReturnType<typeof BlockID.prototype.toObject>;
            block_size?: number;
            header?: ReturnType<typeof Header.prototype.toObject>;
            num_txs?: number;
        }): BlockMeta;
        toObject(): {
            block_id?: ReturnType<typeof BlockID.prototype.toObject>;
            block_size?: number;
            header?: ReturnType<typeof Header.prototype.toObject>;
            num_txs?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BlockMeta;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BlockMeta;
    }
    class TxProof extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            root_hash?: Uint8Array;
            data?: Uint8Array;
            proof?: dependency_3.tendermint.crypto.Proof;
        });
        get root_hash(): Uint8Array;
        set root_hash(value: Uint8Array);
        get data(): Uint8Array;
        set data(value: Uint8Array);
        get proof(): dependency_3.tendermint.crypto.Proof;
        set proof(value: dependency_3.tendermint.crypto.Proof);
        get has_proof(): boolean;
        static fromObject(data: {
            root_hash?: Uint8Array;
            data?: Uint8Array;
            proof?: ReturnType<typeof dependency_3.tendermint.crypto.Proof.prototype.toObject>;
        }): TxProof;
        toObject(): {
            root_hash?: Uint8Array;
            data?: Uint8Array;
            proof?: ReturnType<typeof dependency_3.tendermint.crypto.Proof.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TxProof;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): TxProof;
    }
}
//# sourceMappingURL=types.d.ts.map