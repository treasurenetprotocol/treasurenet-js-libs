import * as dependency_2 from "./connection";
import * as pb_1 from "google-protobuf";
export declare namespace ibc.core.connection.v1 {
    class GenesisState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            connections?: dependency_2.ibc.core.connection.v1.IdentifiedConnection[];
            client_connection_paths?: dependency_2.ibc.core.connection.v1.ConnectionPaths[];
            next_connection_sequence?: number;
            params?: dependency_2.ibc.core.connection.v1.Params;
        });
        get connections(): dependency_2.ibc.core.connection.v1.IdentifiedConnection[];
        set connections(value: dependency_2.ibc.core.connection.v1.IdentifiedConnection[]);
        get client_connection_paths(): dependency_2.ibc.core.connection.v1.ConnectionPaths[];
        set client_connection_paths(value: dependency_2.ibc.core.connection.v1.ConnectionPaths[]);
        get next_connection_sequence(): number;
        set next_connection_sequence(value: number);
        get params(): dependency_2.ibc.core.connection.v1.Params;
        set params(value: dependency_2.ibc.core.connection.v1.Params);
        get has_params(): boolean;
        static fromObject(data: {
            connections?: ReturnType<typeof dependency_2.ibc.core.connection.v1.IdentifiedConnection.prototype.toObject>[];
            client_connection_paths?: ReturnType<typeof dependency_2.ibc.core.connection.v1.ConnectionPaths.prototype.toObject>[];
            next_connection_sequence?: number;
            params?: ReturnType<typeof dependency_2.ibc.core.connection.v1.Params.prototype.toObject>;
        }): GenesisState;
        toObject(): {
            connections?: ReturnType<typeof dependency_2.ibc.core.connection.v1.IdentifiedConnection.prototype.toObject>[];
            client_connection_paths?: ReturnType<typeof dependency_2.ibc.core.connection.v1.ConnectionPaths.prototype.toObject>[];
            next_connection_sequence?: number;
            params?: ReturnType<typeof dependency_2.ibc.core.connection.v1.Params.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
}
//# sourceMappingURL=genesis.d.ts.map