import * as dependency_1 from "./../../../../tendermint/types/validator";
import * as dependency_2 from "./../../../../tendermint/types/types";
import * as dependency_3 from "./../../../../proofs";
import * as dependency_4 from "./../../../../google/protobuf/duration";
import * as dependency_5 from "./../../../../google/protobuf/timestamp";
import * as dependency_6 from "./../../../core/client/v1/client";
import * as dependency_7 from "./../../../core/commitment/v1/commitment";
import * as pb_1 from "google-protobuf";
export declare namespace ibc.lightclients.tendermint.v1 {
    class ClientState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            chain_id?: string;
            trust_level?: Fraction;
            trusting_period?: dependency_4.google.protobuf.Duration;
            unbonding_period?: dependency_4.google.protobuf.Duration;
            max_clock_drift?: dependency_4.google.protobuf.Duration;
            frozen_height?: dependency_6.ibc.core.client.v1.Height;
            latest_height?: dependency_6.ibc.core.client.v1.Height;
            proof_specs?: dependency_3.ics23.ProofSpec[];
            upgrade_path?: string[];
            allow_update_after_expiry?: boolean;
            allow_update_after_misbehaviour?: boolean;
        });
        get chain_id(): string;
        set chain_id(value: string);
        get trust_level(): Fraction;
        set trust_level(value: Fraction);
        get has_trust_level(): boolean;
        get trusting_period(): dependency_4.google.protobuf.Duration;
        set trusting_period(value: dependency_4.google.protobuf.Duration);
        get has_trusting_period(): boolean;
        get unbonding_period(): dependency_4.google.protobuf.Duration;
        set unbonding_period(value: dependency_4.google.protobuf.Duration);
        get has_unbonding_period(): boolean;
        get max_clock_drift(): dependency_4.google.protobuf.Duration;
        set max_clock_drift(value: dependency_4.google.protobuf.Duration);
        get has_max_clock_drift(): boolean;
        get frozen_height(): dependency_6.ibc.core.client.v1.Height;
        set frozen_height(value: dependency_6.ibc.core.client.v1.Height);
        get has_frozen_height(): boolean;
        get latest_height(): dependency_6.ibc.core.client.v1.Height;
        set latest_height(value: dependency_6.ibc.core.client.v1.Height);
        get has_latest_height(): boolean;
        get proof_specs(): dependency_3.ics23.ProofSpec[];
        set proof_specs(value: dependency_3.ics23.ProofSpec[]);
        get upgrade_path(): string[];
        set upgrade_path(value: string[]);
        get allow_update_after_expiry(): boolean;
        set allow_update_after_expiry(value: boolean);
        get allow_update_after_misbehaviour(): boolean;
        set allow_update_after_misbehaviour(value: boolean);
        static fromObject(data: {
            chain_id?: string;
            trust_level?: ReturnType<typeof Fraction.prototype.toObject>;
            trusting_period?: ReturnType<typeof dependency_4.google.protobuf.Duration.prototype.toObject>;
            unbonding_period?: ReturnType<typeof dependency_4.google.protobuf.Duration.prototype.toObject>;
            max_clock_drift?: ReturnType<typeof dependency_4.google.protobuf.Duration.prototype.toObject>;
            frozen_height?: ReturnType<typeof dependency_6.ibc.core.client.v1.Height.prototype.toObject>;
            latest_height?: ReturnType<typeof dependency_6.ibc.core.client.v1.Height.prototype.toObject>;
            proof_specs?: ReturnType<typeof dependency_3.ics23.ProofSpec.prototype.toObject>[];
            upgrade_path?: string[];
            allow_update_after_expiry?: boolean;
            allow_update_after_misbehaviour?: boolean;
        }): ClientState;
        toObject(): {
            chain_id?: string;
            trust_level?: ReturnType<typeof Fraction.prototype.toObject>;
            trusting_period?: ReturnType<typeof dependency_4.google.protobuf.Duration.prototype.toObject>;
            unbonding_period?: ReturnType<typeof dependency_4.google.protobuf.Duration.prototype.toObject>;
            max_clock_drift?: ReturnType<typeof dependency_4.google.protobuf.Duration.prototype.toObject>;
            frozen_height?: ReturnType<typeof dependency_6.ibc.core.client.v1.Height.prototype.toObject>;
            latest_height?: ReturnType<typeof dependency_6.ibc.core.client.v1.Height.prototype.toObject>;
            proof_specs?: ReturnType<typeof dependency_3.ics23.ProofSpec.prototype.toObject>[];
            upgrade_path?: string[];
            allow_update_after_expiry?: boolean;
            allow_update_after_misbehaviour?: boolean;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ClientState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ClientState;
    }
    class ConsensusState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            timestamp?: dependency_5.google.protobuf.Timestamp;
            root?: dependency_7.ibc.core.commitment.v1.MerkleRoot;
            next_validators_hash?: Uint8Array;
        });
        get timestamp(): dependency_5.google.protobuf.Timestamp;
        set timestamp(value: dependency_5.google.protobuf.Timestamp);
        get has_timestamp(): boolean;
        get root(): dependency_7.ibc.core.commitment.v1.MerkleRoot;
        set root(value: dependency_7.ibc.core.commitment.v1.MerkleRoot);
        get has_root(): boolean;
        get next_validators_hash(): Uint8Array;
        set next_validators_hash(value: Uint8Array);
        static fromObject(data: {
            timestamp?: ReturnType<typeof dependency_5.google.protobuf.Timestamp.prototype.toObject>;
            root?: ReturnType<typeof dependency_7.ibc.core.commitment.v1.MerkleRoot.prototype.toObject>;
            next_validators_hash?: Uint8Array;
        }): ConsensusState;
        toObject(): {
            timestamp?: ReturnType<typeof dependency_5.google.protobuf.Timestamp.prototype.toObject>;
            root?: ReturnType<typeof dependency_7.ibc.core.commitment.v1.MerkleRoot.prototype.toObject>;
            next_validators_hash?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ConsensusState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ConsensusState;
    }
    class Misbehaviour extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            client_id?: string;
            header_1?: Header;
            header_2?: Header;
        });
        get client_id(): string;
        set client_id(value: string);
        get header_1(): Header;
        set header_1(value: Header);
        get has_header_1(): boolean;
        get header_2(): Header;
        set header_2(value: Header);
        get has_header_2(): boolean;
        static fromObject(data: {
            client_id?: string;
            header_1?: ReturnType<typeof Header.prototype.toObject>;
            header_2?: ReturnType<typeof Header.prototype.toObject>;
        }): Misbehaviour;
        toObject(): {
            client_id?: string;
            header_1?: ReturnType<typeof Header.prototype.toObject>;
            header_2?: ReturnType<typeof Header.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Misbehaviour;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Misbehaviour;
    }
    class Header extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            signed_header?: dependency_2.tendermint.types.SignedHeader;
            validator_set?: dependency_1.tendermint.types.ValidatorSet;
            trusted_height?: dependency_6.ibc.core.client.v1.Height;
            trusted_validators?: dependency_1.tendermint.types.ValidatorSet;
        });
        get signed_header(): dependency_2.tendermint.types.SignedHeader;
        set signed_header(value: dependency_2.tendermint.types.SignedHeader);
        get has_signed_header(): boolean;
        get validator_set(): dependency_1.tendermint.types.ValidatorSet;
        set validator_set(value: dependency_1.tendermint.types.ValidatorSet);
        get has_validator_set(): boolean;
        get trusted_height(): dependency_6.ibc.core.client.v1.Height;
        set trusted_height(value: dependency_6.ibc.core.client.v1.Height);
        get has_trusted_height(): boolean;
        get trusted_validators(): dependency_1.tendermint.types.ValidatorSet;
        set trusted_validators(value: dependency_1.tendermint.types.ValidatorSet);
        get has_trusted_validators(): boolean;
        static fromObject(data: {
            signed_header?: ReturnType<typeof dependency_2.tendermint.types.SignedHeader.prototype.toObject>;
            validator_set?: ReturnType<typeof dependency_1.tendermint.types.ValidatorSet.prototype.toObject>;
            trusted_height?: ReturnType<typeof dependency_6.ibc.core.client.v1.Height.prototype.toObject>;
            trusted_validators?: ReturnType<typeof dependency_1.tendermint.types.ValidatorSet.prototype.toObject>;
        }): Header;
        toObject(): {
            signed_header?: ReturnType<typeof dependency_2.tendermint.types.SignedHeader.prototype.toObject>;
            validator_set?: ReturnType<typeof dependency_1.tendermint.types.ValidatorSet.prototype.toObject>;
            trusted_height?: ReturnType<typeof dependency_6.ibc.core.client.v1.Height.prototype.toObject>;
            trusted_validators?: ReturnType<typeof dependency_1.tendermint.types.ValidatorSet.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Header;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Header;
    }
    class Fraction extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            numerator?: number;
            denominator?: number;
        });
        get numerator(): number;
        set numerator(value: number);
        get denominator(): number;
        set denominator(value: number);
        static fromObject(data: {
            numerator?: number;
            denominator?: number;
        }): Fraction;
        toObject(): {
            numerator?: number;
            denominator?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Fraction;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Fraction;
    }
}
//# sourceMappingURL=tendermint.d.ts.map