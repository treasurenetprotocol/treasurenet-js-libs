import * as dependency_2 from "./../../google/protobuf/duration";
import * as pb_1 from "google-protobuf";
export declare namespace tendermint.types {
    class ConsensusParams extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            block?: BlockParams;
            evidence?: EvidenceParams;
            validator?: ValidatorParams;
            version?: VersionParams;
        });
        get block(): BlockParams;
        set block(value: BlockParams);
        get has_block(): boolean;
        get evidence(): EvidenceParams;
        set evidence(value: EvidenceParams);
        get has_evidence(): boolean;
        get validator(): ValidatorParams;
        set validator(value: ValidatorParams);
        get has_validator(): boolean;
        get version(): VersionParams;
        set version(value: VersionParams);
        get has_version(): boolean;
        static fromObject(data: {
            block?: ReturnType<typeof BlockParams.prototype.toObject>;
            evidence?: ReturnType<typeof EvidenceParams.prototype.toObject>;
            validator?: ReturnType<typeof ValidatorParams.prototype.toObject>;
            version?: ReturnType<typeof VersionParams.prototype.toObject>;
        }): ConsensusParams;
        toObject(): {
            block?: ReturnType<typeof BlockParams.prototype.toObject>;
            evidence?: ReturnType<typeof EvidenceParams.prototype.toObject>;
            validator?: ReturnType<typeof ValidatorParams.prototype.toObject>;
            version?: ReturnType<typeof VersionParams.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ConsensusParams;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ConsensusParams;
    }
    class BlockParams extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            max_bytes?: number;
            max_gas?: number;
            time_iota_ms?: number;
        });
        get max_bytes(): number;
        set max_bytes(value: number);
        get max_gas(): number;
        set max_gas(value: number);
        get time_iota_ms(): number;
        set time_iota_ms(value: number);
        static fromObject(data: {
            max_bytes?: number;
            max_gas?: number;
            time_iota_ms?: number;
        }): BlockParams;
        toObject(): {
            max_bytes?: number;
            max_gas?: number;
            time_iota_ms?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BlockParams;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BlockParams;
    }
    class EvidenceParams extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            max_age_num_blocks?: number;
            max_age_duration?: dependency_2.google.protobuf.Duration;
            max_bytes?: number;
        });
        get max_age_num_blocks(): number;
        set max_age_num_blocks(value: number);
        get max_age_duration(): dependency_2.google.protobuf.Duration;
        set max_age_duration(value: dependency_2.google.protobuf.Duration);
        get has_max_age_duration(): boolean;
        get max_bytes(): number;
        set max_bytes(value: number);
        static fromObject(data: {
            max_age_num_blocks?: number;
            max_age_duration?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
            max_bytes?: number;
        }): EvidenceParams;
        toObject(): {
            max_age_num_blocks?: number;
            max_age_duration?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
            max_bytes?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EvidenceParams;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EvidenceParams;
    }
    class ValidatorParams extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            pub_key_types?: string[];
        });
        get pub_key_types(): string[];
        set pub_key_types(value: string[]);
        static fromObject(data: {
            pub_key_types?: string[];
        }): ValidatorParams;
        toObject(): {
            pub_key_types?: string[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ValidatorParams;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ValidatorParams;
    }
    class VersionParams extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            app_version?: number;
        });
        get app_version(): number;
        set app_version(value: number);
        static fromObject(data: {
            app_version?: number;
        }): VersionParams;
        toObject(): {
            app_version?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): VersionParams;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): VersionParams;
    }
    class HashedParams extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            block_max_bytes?: number;
            block_max_gas?: number;
        });
        get block_max_bytes(): number;
        set block_max_bytes(value: number);
        get block_max_gas(): number;
        set block_max_gas(value: number);
        static fromObject(data: {
            block_max_bytes?: number;
            block_max_gas?: number;
        }): HashedParams;
        toObject(): {
            block_max_bytes?: number;
            block_max_gas?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HashedParams;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): HashedParams;
    }
}
//# sourceMappingURL=params.d.ts.map