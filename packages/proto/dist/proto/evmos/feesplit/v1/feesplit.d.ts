import * as pb_1 from "google-protobuf";
export declare namespace evmos.feesplit.v1 {
    class FeeSplit extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
        });
        get contract_address(): string;
        set contract_address(value: string);
        get deployer_address(): string;
        set deployer_address(value: string);
        get withdrawer_address(): string;
        set withdrawer_address(value: string);
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
        }): FeeSplit;
        toObject(): {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FeeSplit;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): FeeSplit;
    }
}
//# sourceMappingURL=feesplit.d.ts.map