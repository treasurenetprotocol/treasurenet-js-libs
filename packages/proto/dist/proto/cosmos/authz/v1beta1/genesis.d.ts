import * as dependency_2 from "./authz";
import * as pb_1 from "google-protobuf";
export declare namespace cosmos.authz.v1beta1 {
    class GenesisState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            authorization?: dependency_2.cosmos.authz.v1beta1.GrantAuthorization[];
        });
        get authorization(): dependency_2.cosmos.authz.v1beta1.GrantAuthorization[];
        set authorization(value: dependency_2.cosmos.authz.v1beta1.GrantAuthorization[]);
        static fromObject(data: {
            authorization?: ReturnType<typeof dependency_2.cosmos.authz.v1beta1.GrantAuthorization.prototype.toObject>[];
        }): GenesisState;
        toObject(): {
            authorization?: ReturnType<typeof dependency_2.cosmos.authz.v1beta1.GrantAuthorization.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
}
//# sourceMappingURL=genesis.d.ts.map