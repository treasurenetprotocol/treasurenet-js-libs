import * as dependency_2 from "./../../base/v1beta1/coin";
import * as dependency_3 from "./bank";
import * as pb_1 from "google-protobuf";
export declare namespace cosmos.bank.v1beta1 {
    class GenesisState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            params?: dependency_3.cosmos.bank.v1beta1.Params;
            balances?: Balance[];
            supply?: dependency_2.cosmos.base.v1beta1.Coin[];
            denom_metadata?: dependency_3.cosmos.bank.v1beta1.Metadata[];
        });
        get params(): dependency_3.cosmos.bank.v1beta1.Params;
        set params(value: dependency_3.cosmos.bank.v1beta1.Params);
        get has_params(): boolean;
        get balances(): Balance[];
        set balances(value: Balance[]);
        get supply(): dependency_2.cosmos.base.v1beta1.Coin[];
        set supply(value: dependency_2.cosmos.base.v1beta1.Coin[]);
        get denom_metadata(): dependency_3.cosmos.bank.v1beta1.Metadata[];
        set denom_metadata(value: dependency_3.cosmos.bank.v1beta1.Metadata[]);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Params.prototype.toObject>;
            balances?: ReturnType<typeof Balance.prototype.toObject>[];
            supply?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            denom_metadata?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Metadata.prototype.toObject>[];
        }): GenesisState;
        toObject(): {
            params?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Params.prototype.toObject>;
            balances?: ReturnType<typeof Balance.prototype.toObject>[];
            supply?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            denom_metadata?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Metadata.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
    class Balance extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            address?: string;
            coins?: dependency_2.cosmos.base.v1beta1.Coin[];
        });
        get address(): string;
        set address(value: string);
        get coins(): dependency_2.cosmos.base.v1beta1.Coin[];
        set coins(value: dependency_2.cosmos.base.v1beta1.Coin[]);
        static fromObject(data: {
            address?: string;
            coins?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): Balance;
        toObject(): {
            address?: string;
            coins?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Balance;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Balance;
    }
}
//# sourceMappingURL=genesis.d.ts.map