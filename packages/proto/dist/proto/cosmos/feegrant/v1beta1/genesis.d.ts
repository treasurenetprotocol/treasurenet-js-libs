import * as dependency_2 from "./feegrant";
import * as pb_1 from "google-protobuf";
export declare namespace cosmos.feegrant.v1beta1 {
    class GenesisState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            allowances?: dependency_2.cosmos.feegrant.v1beta1.Grant[];
        });
        get allowances(): dependency_2.cosmos.feegrant.v1beta1.Grant[];
        set allowances(value: dependency_2.cosmos.feegrant.v1beta1.Grant[]);
        static fromObject(data: {
            allowances?: ReturnType<typeof dependency_2.cosmos.feegrant.v1beta1.Grant.prototype.toObject>[];
        }): GenesisState;
        toObject(): {
            allowances?: ReturnType<typeof dependency_2.cosmos.feegrant.v1beta1.Grant.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
}
//# sourceMappingURL=genesis.d.ts.map