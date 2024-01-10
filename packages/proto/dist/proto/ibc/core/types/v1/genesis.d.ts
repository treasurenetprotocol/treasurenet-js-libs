import * as dependency_2 from "./../../client/v1/genesis";
import * as dependency_3 from "./../../connection/v1/genesis";
import * as dependency_4 from "./../../channel/v1/genesis";
import * as pb_1 from "google-protobuf";
export declare namespace ibc.core.types.v1 {
    class GenesisState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            client_genesis?: dependency_2.ibc.core.client.v1.GenesisState;
            connection_genesis?: dependency_3.ibc.core.connection.v1.GenesisState;
            channel_genesis?: dependency_4.ibc.core.channel.v1.GenesisState;
        });
        get client_genesis(): dependency_2.ibc.core.client.v1.GenesisState;
        set client_genesis(value: dependency_2.ibc.core.client.v1.GenesisState);
        get has_client_genesis(): boolean;
        get connection_genesis(): dependency_3.ibc.core.connection.v1.GenesisState;
        set connection_genesis(value: dependency_3.ibc.core.connection.v1.GenesisState);
        get has_connection_genesis(): boolean;
        get channel_genesis(): dependency_4.ibc.core.channel.v1.GenesisState;
        set channel_genesis(value: dependency_4.ibc.core.channel.v1.GenesisState);
        get has_channel_genesis(): boolean;
        static fromObject(data: {
            client_genesis?: ReturnType<typeof dependency_2.ibc.core.client.v1.GenesisState.prototype.toObject>;
            connection_genesis?: ReturnType<typeof dependency_3.ibc.core.connection.v1.GenesisState.prototype.toObject>;
            channel_genesis?: ReturnType<typeof dependency_4.ibc.core.channel.v1.GenesisState.prototype.toObject>;
        }): GenesisState;
        toObject(): {
            client_genesis?: ReturnType<typeof dependency_2.ibc.core.client.v1.GenesisState.prototype.toObject>;
            connection_genesis?: ReturnType<typeof dependency_3.ibc.core.connection.v1.GenesisState.prototype.toObject>;
            channel_genesis?: ReturnType<typeof dependency_4.ibc.core.channel.v1.GenesisState.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
}
//# sourceMappingURL=genesis.d.ts.map