import * as dependency_2 from "./feemarket";
import * as pb_1 from "google-protobuf";
export declare namespace ethermint.feemarket.v1 {
    class GenesisState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            params?: dependency_2.ethermint.feemarket.v1.Params;
            block_gas?: number;
        });
        get params(): dependency_2.ethermint.feemarket.v1.Params;
        set params(value: dependency_2.ethermint.feemarket.v1.Params);
        get has_params(): boolean;
        get block_gas(): number;
        set block_gas(value: number);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.ethermint.feemarket.v1.Params.prototype.toObject>;
            block_gas?: number;
        }): GenesisState;
        toObject(): {
            params?: ReturnType<typeof dependency_2.ethermint.feemarket.v1.Params.prototype.toObject>;
            block_gas?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
}
//# sourceMappingURL=genesis.d.ts.map