import * as pb_1 from "google-protobuf";
export declare namespace google.protobuf {
    class FieldMask extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            paths?: string[];
        });
        get paths(): string[];
        set paths(value: string[]);
        static fromObject(data: {
            paths?: string[];
        }): FieldMask;
        toObject(): {
            paths?: string[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FieldMask;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): FieldMask;
    }
}
//# sourceMappingURL=field_mask.d.ts.map