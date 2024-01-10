import * as pb_1 from "google-protobuf";
export declare namespace ics23 {
    enum HashOp {
        NO_HASH = 0,
        SHA256 = 1,
        SHA512 = 2,
        KECCAK = 3,
        RIPEMD160 = 4,
        BITCOIN = 5
    }
    enum LengthOp {
        NO_PREFIX = 0,
        VAR_PROTO = 1,
        VAR_RLP = 2,
        FIXED32_BIG = 3,
        FIXED32_LITTLE = 4,
        FIXED64_BIG = 5,
        FIXED64_LITTLE = 6,
        REQUIRE_32_BYTES = 7,
        REQUIRE_64_BYTES = 8
    }
    class ExistenceProof extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: LeafOp;
            path?: InnerOp[];
        });
        get key(): Uint8Array;
        set key(value: Uint8Array);
        get value(): Uint8Array;
        set value(value: Uint8Array);
        get leaf(): LeafOp;
        set leaf(value: LeafOp);
        get has_leaf(): boolean;
        get path(): InnerOp[];
        set path(value: InnerOp[]);
        static fromObject(data: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: ReturnType<typeof LeafOp.prototype.toObject>;
            path?: ReturnType<typeof InnerOp.prototype.toObject>[];
        }): ExistenceProof;
        toObject(): {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: ReturnType<typeof LeafOp.prototype.toObject>;
            path?: ReturnType<typeof InnerOp.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ExistenceProof;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ExistenceProof;
    }
    class NonExistenceProof extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            key?: Uint8Array;
            left?: ExistenceProof;
            right?: ExistenceProof;
        });
        get key(): Uint8Array;
        set key(value: Uint8Array);
        get left(): ExistenceProof;
        set left(value: ExistenceProof);
        get has_left(): boolean;
        get right(): ExistenceProof;
        set right(value: ExistenceProof);
        get has_right(): boolean;
        static fromObject(data: {
            key?: Uint8Array;
            left?: ReturnType<typeof ExistenceProof.prototype.toObject>;
            right?: ReturnType<typeof ExistenceProof.prototype.toObject>;
        }): NonExistenceProof;
        toObject(): {
            key?: Uint8Array;
            left?: ReturnType<typeof ExistenceProof.prototype.toObject>;
            right?: ReturnType<typeof ExistenceProof.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): NonExistenceProof;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): NonExistenceProof;
    }
    class CommitmentProof extends pb_1.Message {
        #private;
        constructor(data?: any[] | ({} & (({
            exist?: ExistenceProof;
            nonexist?: never;
            batch?: never;
            compressed?: never;
        } | {
            exist?: never;
            nonexist?: NonExistenceProof;
            batch?: never;
            compressed?: never;
        } | {
            exist?: never;
            nonexist?: never;
            batch?: BatchProof;
            compressed?: never;
        } | {
            exist?: never;
            nonexist?: never;
            batch?: never;
            compressed?: CompressedBatchProof;
        }))));
        get exist(): ExistenceProof;
        set exist(value: ExistenceProof);
        get has_exist(): boolean;
        get nonexist(): NonExistenceProof;
        set nonexist(value: NonExistenceProof);
        get has_nonexist(): boolean;
        get batch(): BatchProof;
        set batch(value: BatchProof);
        get has_batch(): boolean;
        get compressed(): CompressedBatchProof;
        set compressed(value: CompressedBatchProof);
        get has_compressed(): boolean;
        get proof(): "none" | "exist" | "nonexist" | "batch" | "compressed";
        static fromObject(data: {
            exist?: ReturnType<typeof ExistenceProof.prototype.toObject>;
            nonexist?: ReturnType<typeof NonExistenceProof.prototype.toObject>;
            batch?: ReturnType<typeof BatchProof.prototype.toObject>;
            compressed?: ReturnType<typeof CompressedBatchProof.prototype.toObject>;
        }): CommitmentProof;
        toObject(): {
            exist?: ReturnType<typeof ExistenceProof.prototype.toObject>;
            nonexist?: ReturnType<typeof NonExistenceProof.prototype.toObject>;
            batch?: ReturnType<typeof BatchProof.prototype.toObject>;
            compressed?: ReturnType<typeof CompressedBatchProof.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CommitmentProof;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): CommitmentProof;
    }
    class LeafOp extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            hash?: HashOp;
            prehash_key?: HashOp;
            prehash_value?: HashOp;
            length?: LengthOp;
            prefix?: Uint8Array;
        });
        get hash(): HashOp;
        set hash(value: HashOp);
        get prehash_key(): HashOp;
        set prehash_key(value: HashOp);
        get prehash_value(): HashOp;
        set prehash_value(value: HashOp);
        get length(): LengthOp;
        set length(value: LengthOp);
        get prefix(): Uint8Array;
        set prefix(value: Uint8Array);
        static fromObject(data: {
            hash?: HashOp;
            prehash_key?: HashOp;
            prehash_value?: HashOp;
            length?: LengthOp;
            prefix?: Uint8Array;
        }): LeafOp;
        toObject(): {
            hash?: HashOp;
            prehash_key?: HashOp;
            prehash_value?: HashOp;
            length?: LengthOp;
            prefix?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LeafOp;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): LeafOp;
    }
    class InnerOp extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            hash?: HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        });
        get hash(): HashOp;
        set hash(value: HashOp);
        get prefix(): Uint8Array;
        set prefix(value: Uint8Array);
        get suffix(): Uint8Array;
        set suffix(value: Uint8Array);
        static fromObject(data: {
            hash?: HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): InnerOp;
        toObject(): {
            hash?: HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): InnerOp;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): InnerOp;
    }
    class ProofSpec extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            leaf_spec?: LeafOp;
            inner_spec?: InnerSpec;
            max_depth?: number;
            min_depth?: number;
        });
        get leaf_spec(): LeafOp;
        set leaf_spec(value: LeafOp);
        get has_leaf_spec(): boolean;
        get inner_spec(): InnerSpec;
        set inner_spec(value: InnerSpec);
        get has_inner_spec(): boolean;
        get max_depth(): number;
        set max_depth(value: number);
        get min_depth(): number;
        set min_depth(value: number);
        static fromObject(data: {
            leaf_spec?: ReturnType<typeof LeafOp.prototype.toObject>;
            inner_spec?: ReturnType<typeof InnerSpec.prototype.toObject>;
            max_depth?: number;
            min_depth?: number;
        }): ProofSpec;
        toObject(): {
            leaf_spec?: ReturnType<typeof LeafOp.prototype.toObject>;
            inner_spec?: ReturnType<typeof InnerSpec.prototype.toObject>;
            max_depth?: number;
            min_depth?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProofSpec;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ProofSpec;
    }
    class InnerSpec extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            child_order?: number[];
            child_size?: number;
            min_prefix_length?: number;
            max_prefix_length?: number;
            empty_child?: Uint8Array;
            hash?: HashOp;
        });
        get child_order(): number[];
        set child_order(value: number[]);
        get child_size(): number;
        set child_size(value: number);
        get min_prefix_length(): number;
        set min_prefix_length(value: number);
        get max_prefix_length(): number;
        set max_prefix_length(value: number);
        get empty_child(): Uint8Array;
        set empty_child(value: Uint8Array);
        get hash(): HashOp;
        set hash(value: HashOp);
        static fromObject(data: {
            child_order?: number[];
            child_size?: number;
            min_prefix_length?: number;
            max_prefix_length?: number;
            empty_child?: Uint8Array;
            hash?: HashOp;
        }): InnerSpec;
        toObject(): {
            child_order?: number[];
            child_size?: number;
            min_prefix_length?: number;
            max_prefix_length?: number;
            empty_child?: Uint8Array;
            hash?: HashOp;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): InnerSpec;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): InnerSpec;
    }
    class BatchProof extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            entries?: BatchEntry[];
        });
        get entries(): BatchEntry[];
        set entries(value: BatchEntry[]);
        static fromObject(data: {
            entries?: ReturnType<typeof BatchEntry.prototype.toObject>[];
        }): BatchProof;
        toObject(): {
            entries?: ReturnType<typeof BatchEntry.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BatchProof;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BatchProof;
    }
    class BatchEntry extends pb_1.Message {
        #private;
        constructor(data?: any[] | ({} & (({
            exist?: ExistenceProof;
            nonexist?: never;
        } | {
            exist?: never;
            nonexist?: NonExistenceProof;
        }))));
        get exist(): ExistenceProof;
        set exist(value: ExistenceProof);
        get has_exist(): boolean;
        get nonexist(): NonExistenceProof;
        set nonexist(value: NonExistenceProof);
        get has_nonexist(): boolean;
        get proof(): "none" | "exist" | "nonexist";
        static fromObject(data: {
            exist?: ReturnType<typeof ExistenceProof.prototype.toObject>;
            nonexist?: ReturnType<typeof NonExistenceProof.prototype.toObject>;
        }): BatchEntry;
        toObject(): {
            exist?: ReturnType<typeof ExistenceProof.prototype.toObject>;
            nonexist?: ReturnType<typeof NonExistenceProof.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BatchEntry;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BatchEntry;
    }
    class CompressedBatchProof extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            entries?: CompressedBatchEntry[];
            lookup_inners?: InnerOp[];
        });
        get entries(): CompressedBatchEntry[];
        set entries(value: CompressedBatchEntry[]);
        get lookup_inners(): InnerOp[];
        set lookup_inners(value: InnerOp[]);
        static fromObject(data: {
            entries?: ReturnType<typeof CompressedBatchEntry.prototype.toObject>[];
            lookup_inners?: ReturnType<typeof InnerOp.prototype.toObject>[];
        }): CompressedBatchProof;
        toObject(): {
            entries?: ReturnType<typeof CompressedBatchEntry.prototype.toObject>[];
            lookup_inners?: ReturnType<typeof InnerOp.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CompressedBatchProof;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): CompressedBatchProof;
    }
    class CompressedBatchEntry extends pb_1.Message {
        #private;
        constructor(data?: any[] | ({} & (({
            exist?: CompressedExistenceProof;
            nonexist?: never;
        } | {
            exist?: never;
            nonexist?: CompressedNonExistenceProof;
        }))));
        get exist(): CompressedExistenceProof;
        set exist(value: CompressedExistenceProof);
        get has_exist(): boolean;
        get nonexist(): CompressedNonExistenceProof;
        set nonexist(value: CompressedNonExistenceProof);
        get has_nonexist(): boolean;
        get proof(): "none" | "exist" | "nonexist";
        static fromObject(data: {
            exist?: ReturnType<typeof CompressedExistenceProof.prototype.toObject>;
            nonexist?: ReturnType<typeof CompressedNonExistenceProof.prototype.toObject>;
        }): CompressedBatchEntry;
        toObject(): {
            exist?: ReturnType<typeof CompressedExistenceProof.prototype.toObject>;
            nonexist?: ReturnType<typeof CompressedNonExistenceProof.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CompressedBatchEntry;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): CompressedBatchEntry;
    }
    class CompressedExistenceProof extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: LeafOp;
            path?: number[];
        });
        get key(): Uint8Array;
        set key(value: Uint8Array);
        get value(): Uint8Array;
        set value(value: Uint8Array);
        get leaf(): LeafOp;
        set leaf(value: LeafOp);
        get has_leaf(): boolean;
        get path(): number[];
        set path(value: number[]);
        static fromObject(data: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: ReturnType<typeof LeafOp.prototype.toObject>;
            path?: number[];
        }): CompressedExistenceProof;
        toObject(): {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: ReturnType<typeof LeafOp.prototype.toObject>;
            path?: number[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CompressedExistenceProof;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): CompressedExistenceProof;
    }
    class CompressedNonExistenceProof extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            key?: Uint8Array;
            left?: CompressedExistenceProof;
            right?: CompressedExistenceProof;
        });
        get key(): Uint8Array;
        set key(value: Uint8Array);
        get left(): CompressedExistenceProof;
        set left(value: CompressedExistenceProof);
        get has_left(): boolean;
        get right(): CompressedExistenceProof;
        set right(value: CompressedExistenceProof);
        get has_right(): boolean;
        static fromObject(data: {
            key?: Uint8Array;
            left?: ReturnType<typeof CompressedExistenceProof.prototype.toObject>;
            right?: ReturnType<typeof CompressedExistenceProof.prototype.toObject>;
        }): CompressedNonExistenceProof;
        toObject(): {
            key?: Uint8Array;
            left?: ReturnType<typeof CompressedExistenceProof.prototype.toObject>;
            right?: ReturnType<typeof CompressedExistenceProof.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CompressedNonExistenceProof;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): CompressedNonExistenceProof;
    }
}
//# sourceMappingURL=proofs.d.ts.map