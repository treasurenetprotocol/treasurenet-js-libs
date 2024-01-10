import * as pb_1 from "google-protobuf";
export declare namespace google.protobuf {
    class SourceContext extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            file_name?: string;
        });
        get file_name(): string;
        set file_name(value: string);
        static fromObject(data: {
            file_name?: string;
        }): SourceContext;
        toObject(): {
            file_name?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SourceContext;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): SourceContext;
    }
}
//# sourceMappingURL=source_context.d.ts.map