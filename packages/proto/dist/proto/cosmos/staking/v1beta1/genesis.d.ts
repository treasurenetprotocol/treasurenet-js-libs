import * as dependency_2 from "./staking";
import * as pb_1 from "google-protobuf";
export declare namespace cosmos.staking.v1beta1 {
    class GenesisState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            params?: dependency_2.cosmos.staking.v1beta1.Params;
            last_total_power?: Uint8Array;
            last_validator_powers?: LastValidatorPower[];
            validators?: dependency_2.cosmos.staking.v1beta1.Validator[];
            delegations?: dependency_2.cosmos.staking.v1beta1.Delegation[];
            unbonding_delegations?: dependency_2.cosmos.staking.v1beta1.UnbondingDelegation[];
            redelegations?: dependency_2.cosmos.staking.v1beta1.Redelegation[];
            exported?: boolean;
        });
        get params(): dependency_2.cosmos.staking.v1beta1.Params;
        set params(value: dependency_2.cosmos.staking.v1beta1.Params);
        get has_params(): boolean;
        get last_total_power(): Uint8Array;
        set last_total_power(value: Uint8Array);
        get last_validator_powers(): LastValidatorPower[];
        set last_validator_powers(value: LastValidatorPower[]);
        get validators(): dependency_2.cosmos.staking.v1beta1.Validator[];
        set validators(value: dependency_2.cosmos.staking.v1beta1.Validator[]);
        get delegations(): dependency_2.cosmos.staking.v1beta1.Delegation[];
        set delegations(value: dependency_2.cosmos.staking.v1beta1.Delegation[]);
        get unbonding_delegations(): dependency_2.cosmos.staking.v1beta1.UnbondingDelegation[];
        set unbonding_delegations(value: dependency_2.cosmos.staking.v1beta1.UnbondingDelegation[]);
        get redelegations(): dependency_2.cosmos.staking.v1beta1.Redelegation[];
        set redelegations(value: dependency_2.cosmos.staking.v1beta1.Redelegation[]);
        get exported(): boolean;
        set exported(value: boolean);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Params.prototype.toObject>;
            last_total_power?: Uint8Array;
            last_validator_powers?: ReturnType<typeof LastValidatorPower.prototype.toObject>[];
            validators?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Validator.prototype.toObject>[];
            delegations?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Delegation.prototype.toObject>[];
            unbonding_delegations?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.UnbondingDelegation.prototype.toObject>[];
            redelegations?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Redelegation.prototype.toObject>[];
            exported?: boolean;
        }): GenesisState;
        toObject(): {
            params?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Params.prototype.toObject>;
            last_total_power?: Uint8Array;
            last_validator_powers?: ReturnType<typeof LastValidatorPower.prototype.toObject>[];
            validators?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Validator.prototype.toObject>[];
            delegations?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Delegation.prototype.toObject>[];
            unbonding_delegations?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.UnbondingDelegation.prototype.toObject>[];
            redelegations?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Redelegation.prototype.toObject>[];
            exported?: boolean;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
    class LastValidatorPower extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            address?: string;
            power?: number;
        });
        get address(): string;
        set address(value: string);
        get power(): number;
        set power(value: number);
        static fromObject(data: {
            address?: string;
            power?: number;
        }): LastValidatorPower;
        toObject(): {
            address?: string;
            power?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LastValidatorPower;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): LastValidatorPower;
    }
}
//# sourceMappingURL=genesis.d.ts.map