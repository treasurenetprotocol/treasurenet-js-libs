import * as dependency_1 from "./feesplit";
import * as pb_1 from "google-protobuf";
export declare namespace evmos.feesplit.v1 {
    class GenesisState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            params?: Params;
            fee_splits?: dependency_1.evmos.feesplit.v1.FeeSplit[];
        });
        get params(): Params;
        set params(value: Params);
        get has_params(): boolean;
        get fee_splits(): dependency_1.evmos.feesplit.v1.FeeSplit[];
        set fee_splits(value: dependency_1.evmos.feesplit.v1.FeeSplit[]);
        static fromObject(data: {
            params?: ReturnType<typeof Params.prototype.toObject>;
            fee_splits?: ReturnType<typeof dependency_1.evmos.feesplit.v1.FeeSplit.prototype.toObject>[];
        }): GenesisState;
        toObject(): {
            params?: ReturnType<typeof Params.prototype.toObject>;
            fee_splits?: ReturnType<typeof dependency_1.evmos.feesplit.v1.FeeSplit.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
    class Params extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            enable_fee_split?: boolean;
            developer_shares?: string;
            addr_derivation_cost_create?: number;
        });
        get enable_fee_split(): boolean;
        set enable_fee_split(value: boolean);
        get developer_shares(): string;
        set developer_shares(value: string);
        get addr_derivation_cost_create(): number;
        set addr_derivation_cost_create(value: number);
        static fromObject(data: {
            enable_fee_split?: boolean;
            developer_shares?: string;
            addr_derivation_cost_create?: number;
        }): Params;
        toObject(): {
            enable_fee_split?: boolean;
            developer_shares?: string;
            addr_derivation_cost_create?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Params;
    }
}
//# sourceMappingURL=genesis.d.ts.map