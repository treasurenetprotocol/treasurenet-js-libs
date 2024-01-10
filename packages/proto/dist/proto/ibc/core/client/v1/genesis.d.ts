import * as dependency_1 from "./client";
import * as pb_1 from "google-protobuf";
export declare namespace ibc.core.client.v1 {
    class GenesisState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            clients?: dependency_1.ibc.core.client.v1.IdentifiedClientState[];
            clients_consensus?: dependency_1.ibc.core.client.v1.ClientConsensusStates[];
            clients_metadata?: IdentifiedGenesisMetadata[];
            params?: dependency_1.ibc.core.client.v1.Params;
            create_localhost?: boolean;
            next_client_sequence?: number;
        });
        get clients(): dependency_1.ibc.core.client.v1.IdentifiedClientState[];
        set clients(value: dependency_1.ibc.core.client.v1.IdentifiedClientState[]);
        get clients_consensus(): dependency_1.ibc.core.client.v1.ClientConsensusStates[];
        set clients_consensus(value: dependency_1.ibc.core.client.v1.ClientConsensusStates[]);
        get clients_metadata(): IdentifiedGenesisMetadata[];
        set clients_metadata(value: IdentifiedGenesisMetadata[]);
        get params(): dependency_1.ibc.core.client.v1.Params;
        set params(value: dependency_1.ibc.core.client.v1.Params);
        get has_params(): boolean;
        get create_localhost(): boolean;
        set create_localhost(value: boolean);
        get next_client_sequence(): number;
        set next_client_sequence(value: number);
        static fromObject(data: {
            clients?: ReturnType<typeof dependency_1.ibc.core.client.v1.IdentifiedClientState.prototype.toObject>[];
            clients_consensus?: ReturnType<typeof dependency_1.ibc.core.client.v1.ClientConsensusStates.prototype.toObject>[];
            clients_metadata?: ReturnType<typeof IdentifiedGenesisMetadata.prototype.toObject>[];
            params?: ReturnType<typeof dependency_1.ibc.core.client.v1.Params.prototype.toObject>;
            create_localhost?: boolean;
            next_client_sequence?: number;
        }): GenesisState;
        toObject(): {
            clients?: ReturnType<typeof dependency_1.ibc.core.client.v1.IdentifiedClientState.prototype.toObject>[];
            clients_consensus?: ReturnType<typeof dependency_1.ibc.core.client.v1.ClientConsensusStates.prototype.toObject>[];
            clients_metadata?: ReturnType<typeof IdentifiedGenesisMetadata.prototype.toObject>[];
            params?: ReturnType<typeof dependency_1.ibc.core.client.v1.Params.prototype.toObject>;
            create_localhost?: boolean;
            next_client_sequence?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
    class GenesisMetadata extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            key?: Uint8Array;
            value?: Uint8Array;
        });
        get key(): Uint8Array;
        set key(value: Uint8Array);
        get value(): Uint8Array;
        set value(value: Uint8Array);
        static fromObject(data: {
            key?: Uint8Array;
            value?: Uint8Array;
        }): GenesisMetadata;
        toObject(): {
            key?: Uint8Array;
            value?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisMetadata;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisMetadata;
    }
    class IdentifiedGenesisMetadata extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            client_id?: string;
            client_metadata?: GenesisMetadata[];
        });
        get client_id(): string;
        set client_id(value: string);
        get client_metadata(): GenesisMetadata[];
        set client_metadata(value: GenesisMetadata[]);
        static fromObject(data: {
            client_id?: string;
            client_metadata?: ReturnType<typeof GenesisMetadata.prototype.toObject>[];
        }): IdentifiedGenesisMetadata;
        toObject(): {
            client_id?: string;
            client_metadata?: ReturnType<typeof GenesisMetadata.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IdentifiedGenesisMetadata;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): IdentifiedGenesisMetadata;
    }
}
//# sourceMappingURL=genesis.d.ts.map