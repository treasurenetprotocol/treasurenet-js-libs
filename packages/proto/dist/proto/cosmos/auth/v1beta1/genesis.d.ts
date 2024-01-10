import * as dependency_1 from "./../../../google/protobuf/any";
import * as dependency_3 from "./auth";
import * as pb_1 from "google-protobuf";
export declare namespace cosmos.auth.v1beta1 {
    class GenesisState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            params?: dependency_3.cosmos.auth.v1beta1.Params;
            accounts?: dependency_1.google.protobuf.Any[];
        });
        get params(): dependency_3.cosmos.auth.v1beta1.Params;
        set params(value: dependency_3.cosmos.auth.v1beta1.Params);
        get has_params(): boolean;
        get accounts(): dependency_1.google.protobuf.Any[];
        set accounts(value: dependency_1.google.protobuf.Any[]);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_3.cosmos.auth.v1beta1.Params.prototype.toObject>;
            accounts?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>[];
        }): GenesisState;
        toObject(): {
            params?: ReturnType<typeof dependency_3.cosmos.auth.v1beta1.Params.prototype.toObject>;
            accounts?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
}
//# sourceMappingURL=genesis.d.ts.map