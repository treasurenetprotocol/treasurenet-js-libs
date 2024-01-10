import * as dependency_2 from "./../crypto/keys";
import * as pb_1 from "google-protobuf";
export declare namespace tendermint.types {
    class ValidatorSet extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validators?: Validator[];
            proposer?: Validator;
            total_voting_power?: number;
        });
        get validators(): Validator[];
        set validators(value: Validator[]);
        get proposer(): Validator;
        set proposer(value: Validator);
        get has_proposer(): boolean;
        get total_voting_power(): number;
        set total_voting_power(value: number);
        static fromObject(data: {
            validators?: ReturnType<typeof Validator.prototype.toObject>[];
            proposer?: ReturnType<typeof Validator.prototype.toObject>;
            total_voting_power?: number;
        }): ValidatorSet;
        toObject(): {
            validators?: ReturnType<typeof Validator.prototype.toObject>[];
            proposer?: ReturnType<typeof Validator.prototype.toObject>;
            total_voting_power?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ValidatorSet;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ValidatorSet;
    }
    class Validator extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            address?: Uint8Array;
            pub_key?: dependency_2.tendermint.crypto.PublicKey;
            voting_power?: number;
            proposer_priority?: number;
        });
        get address(): Uint8Array;
        set address(value: Uint8Array);
        get pub_key(): dependency_2.tendermint.crypto.PublicKey;
        set pub_key(value: dependency_2.tendermint.crypto.PublicKey);
        get has_pub_key(): boolean;
        get voting_power(): number;
        set voting_power(value: number);
        get proposer_priority(): number;
        set proposer_priority(value: number);
        static fromObject(data: {
            address?: Uint8Array;
            pub_key?: ReturnType<typeof dependency_2.tendermint.crypto.PublicKey.prototype.toObject>;
            voting_power?: number;
            proposer_priority?: number;
        }): Validator;
        toObject(): {
            address?: Uint8Array;
            pub_key?: ReturnType<typeof dependency_2.tendermint.crypto.PublicKey.prototype.toObject>;
            voting_power?: number;
            proposer_priority?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Validator;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Validator;
    }
    class SimpleValidator extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            pub_key?: dependency_2.tendermint.crypto.PublicKey;
            voting_power?: number;
        });
        get pub_key(): dependency_2.tendermint.crypto.PublicKey;
        set pub_key(value: dependency_2.tendermint.crypto.PublicKey);
        get has_pub_key(): boolean;
        get voting_power(): number;
        set voting_power(value: number);
        static fromObject(data: {
            pub_key?: ReturnType<typeof dependency_2.tendermint.crypto.PublicKey.prototype.toObject>;
            voting_power?: number;
        }): SimpleValidator;
        toObject(): {
            pub_key?: ReturnType<typeof dependency_2.tendermint.crypto.PublicKey.prototype.toObject>;
            voting_power?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SimpleValidator;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): SimpleValidator;
    }
}
//# sourceMappingURL=validator.d.ts.map