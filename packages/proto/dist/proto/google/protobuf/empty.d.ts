import * as pb_1 from "google-protobuf";
export declare namespace google.protobuf {
    class Empty extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): Empty;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Empty;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Empty;
    }
}
//# sourceMappingURL=empty.d.ts.map