import * as dependency_2 from "./capability";
import * as pb_1 from "google-protobuf";
export declare namespace cosmos.capability.v1beta1 {
    class GenesisOwners extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            index?: number;
            index_owners?: dependency_2.cosmos.capability.v1beta1.CapabilityOwners;
        });
        get index(): number;
        set index(value: number);
        get index_owners(): dependency_2.cosmos.capability.v1beta1.CapabilityOwners;
        set index_owners(value: dependency_2.cosmos.capability.v1beta1.CapabilityOwners);
        get has_index_owners(): boolean;
        static fromObject(data: {
            index?: number;
            index_owners?: ReturnType<typeof dependency_2.cosmos.capability.v1beta1.CapabilityOwners.prototype.toObject>;
        }): GenesisOwners;
        toObject(): {
            index?: number;
            index_owners?: ReturnType<typeof dependency_2.cosmos.capability.v1beta1.CapabilityOwners.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisOwners;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisOwners;
    }
    class GenesisState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            index?: number;
            owners?: GenesisOwners[];
        });
        get index(): number;
        set index(value: number);
        get owners(): GenesisOwners[];
        set owners(value: GenesisOwners[]);
        static fromObject(data: {
            index?: number;
            owners?: ReturnType<typeof GenesisOwners.prototype.toObject>[];
        }): GenesisState;
        toObject(): {
            index?: number;
            owners?: ReturnType<typeof GenesisOwners.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
}
//# sourceMappingURL=genesis.d.ts.map