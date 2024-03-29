import * as dependency_2 from "./../../../cosmos/vesting/v1beta1/vesting";
import * as dependency_3 from "./../../../google/protobuf/timestamp";
import * as pb_1 from "google-protobuf";
export declare namespace evmos.vesting.v1 {
    class ClawbackVestingAccount extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            base_vesting_account?: dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount;
            funder_address?: string;
            start_time?: dependency_3.google.protobuf.Timestamp;
            lockup_periods?: dependency_2.cosmos.vesting.v1beta1.Period[];
            vesting_periods?: dependency_2.cosmos.vesting.v1beta1.Period[];
        });
        get base_vesting_account(): dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount;
        set base_vesting_account(value: dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount);
        get has_base_vesting_account(): boolean;
        get funder_address(): string;
        set funder_address(value: string);
        get start_time(): dependency_3.google.protobuf.Timestamp;
        set start_time(value: dependency_3.google.protobuf.Timestamp);
        get has_start_time(): boolean;
        get lockup_periods(): dependency_2.cosmos.vesting.v1beta1.Period[];
        set lockup_periods(value: dependency_2.cosmos.vesting.v1beta1.Period[]);
        get vesting_periods(): dependency_2.cosmos.vesting.v1beta1.Period[];
        set vesting_periods(value: dependency_2.cosmos.vesting.v1beta1.Period[]);
        static fromObject(data: {
            base_vesting_account?: ReturnType<typeof dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount.prototype.toObject>;
            funder_address?: string;
            start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            lockup_periods?: ReturnType<typeof dependency_2.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
            vesting_periods?: ReturnType<typeof dependency_2.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
        }): ClawbackVestingAccount;
        toObject(): {
            base_vesting_account?: ReturnType<typeof dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount.prototype.toObject>;
            funder_address?: string;
            start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            lockup_periods?: ReturnType<typeof dependency_2.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
            vesting_periods?: ReturnType<typeof dependency_2.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ClawbackVestingAccount;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ClawbackVestingAccount;
    }
}
//# sourceMappingURL=vesting.d.ts.map