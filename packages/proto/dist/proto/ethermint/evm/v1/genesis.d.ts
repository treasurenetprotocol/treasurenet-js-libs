import * as dependency_2 from "./evm";
import * as pb_1 from "google-protobuf";
export declare namespace ethermint.evm.v1 {
    class GenesisState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            accounts?: GenesisAccount[];
            params?: dependency_2.ethermint.evm.v1.Params;
        });
        get accounts(): GenesisAccount[];
        set accounts(value: GenesisAccount[]);
        get params(): dependency_2.ethermint.evm.v1.Params;
        set params(value: dependency_2.ethermint.evm.v1.Params);
        get has_params(): boolean;
        static fromObject(data: {
            accounts?: ReturnType<typeof GenesisAccount.prototype.toObject>[];
            params?: ReturnType<typeof dependency_2.ethermint.evm.v1.Params.prototype.toObject>;
        }): GenesisState;
        toObject(): {
            accounts?: ReturnType<typeof GenesisAccount.prototype.toObject>[];
            params?: ReturnType<typeof dependency_2.ethermint.evm.v1.Params.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
    class GenesisAccount extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            address?: string;
            code?: string;
            storage?: dependency_2.ethermint.evm.v1.State[];
        });
        get address(): string;
        set address(value: string);
        get code(): string;
        set code(value: string);
        get storage(): dependency_2.ethermint.evm.v1.State[];
        set storage(value: dependency_2.ethermint.evm.v1.State[]);
        static fromObject(data: {
            address?: string;
            code?: string;
            storage?: ReturnType<typeof dependency_2.ethermint.evm.v1.State.prototype.toObject>[];
        }): GenesisAccount;
        toObject(): {
            address?: string;
            code?: string;
            storage?: ReturnType<typeof dependency_2.ethermint.evm.v1.State.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisAccount;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisAccount;
    }
}
//# sourceMappingURL=genesis.d.ts.map