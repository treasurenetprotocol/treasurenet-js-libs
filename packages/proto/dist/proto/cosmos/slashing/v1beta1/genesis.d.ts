import * as dependency_2 from "./slashing";
import * as pb_1 from "google-protobuf";
export declare namespace cosmos.slashing.v1beta1 {
    class GenesisState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            params?: dependency_2.cosmos.slashing.v1beta1.Params;
            signing_infos?: SigningInfo[];
            missed_blocks?: ValidatorMissedBlocks[];
        });
        get params(): dependency_2.cosmos.slashing.v1beta1.Params;
        set params(value: dependency_2.cosmos.slashing.v1beta1.Params);
        get has_params(): boolean;
        get signing_infos(): SigningInfo[];
        set signing_infos(value: SigningInfo[]);
        get missed_blocks(): ValidatorMissedBlocks[];
        set missed_blocks(value: ValidatorMissedBlocks[]);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.cosmos.slashing.v1beta1.Params.prototype.toObject>;
            signing_infos?: ReturnType<typeof SigningInfo.prototype.toObject>[];
            missed_blocks?: ReturnType<typeof ValidatorMissedBlocks.prototype.toObject>[];
        }): GenesisState;
        toObject(): {
            params?: ReturnType<typeof dependency_2.cosmos.slashing.v1beta1.Params.prototype.toObject>;
            signing_infos?: ReturnType<typeof SigningInfo.prototype.toObject>[];
            missed_blocks?: ReturnType<typeof ValidatorMissedBlocks.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
    class SigningInfo extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            address?: string;
            validator_signing_info?: dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo;
        });
        get address(): string;
        set address(value: string);
        get validator_signing_info(): dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo;
        set validator_signing_info(value: dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo);
        get has_validator_signing_info(): boolean;
        static fromObject(data: {
            address?: string;
            validator_signing_info?: ReturnType<typeof dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo.prototype.toObject>;
        }): SigningInfo;
        toObject(): {
            address?: string;
            validator_signing_info?: ReturnType<typeof dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SigningInfo;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): SigningInfo;
    }
    class ValidatorMissedBlocks extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            address?: string;
            missed_blocks?: MissedBlock[];
        });
        get address(): string;
        set address(value: string);
        get missed_blocks(): MissedBlock[];
        set missed_blocks(value: MissedBlock[]);
        static fromObject(data: {
            address?: string;
            missed_blocks?: ReturnType<typeof MissedBlock.prototype.toObject>[];
        }): ValidatorMissedBlocks;
        toObject(): {
            address?: string;
            missed_blocks?: ReturnType<typeof MissedBlock.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ValidatorMissedBlocks;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ValidatorMissedBlocks;
    }
    class MissedBlock extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            index?: number;
            missed?: boolean;
        });
        get index(): number;
        set index(value: number);
        get missed(): boolean;
        set missed(value: boolean);
        static fromObject(data: {
            index?: number;
            missed?: boolean;
        }): MissedBlock;
        toObject(): {
            index?: number;
            missed?: boolean;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MissedBlock;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MissedBlock;
    }
}
//# sourceMappingURL=genesis.d.ts.map