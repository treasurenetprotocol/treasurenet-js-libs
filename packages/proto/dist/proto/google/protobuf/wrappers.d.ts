import * as pb_1 from "google-protobuf";
export declare namespace google.protobuf {
    class DoubleValue extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            value?: number;
        });
        get value(): number;
        set value(value: number);
        static fromObject(data: {
            value?: number;
        }): DoubleValue;
        toObject(): {
            value?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DoubleValue;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): DoubleValue;
    }
    class FloatValue extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            value?: number;
        });
        get value(): number;
        set value(value: number);
        static fromObject(data: {
            value?: number;
        }): FloatValue;
        toObject(): {
            value?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FloatValue;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): FloatValue;
    }
    class Int64Value extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            value?: number;
        });
        get value(): number;
        set value(value: number);
        static fromObject(data: {
            value?: number;
        }): Int64Value;
        toObject(): {
            value?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Int64Value;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Int64Value;
    }
    class UInt64Value extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            value?: number;
        });
        get value(): number;
        set value(value: number);
        static fromObject(data: {
            value?: number;
        }): UInt64Value;
        toObject(): {
            value?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UInt64Value;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): UInt64Value;
    }
    class Int32Value extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            value?: number;
        });
        get value(): number;
        set value(value: number);
        static fromObject(data: {
            value?: number;
        }): Int32Value;
        toObject(): {
            value?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Int32Value;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Int32Value;
    }
    class UInt32Value extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            value?: number;
        });
        get value(): number;
        set value(value: number);
        static fromObject(data: {
            value?: number;
        }): UInt32Value;
        toObject(): {
            value?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UInt32Value;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): UInt32Value;
    }
    class BoolValue extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            value?: boolean;
        });
        get value(): boolean;
        set value(value: boolean);
        static fromObject(data: {
            value?: boolean;
        }): BoolValue;
        toObject(): {
            value?: boolean;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BoolValue;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BoolValue;
    }
    class StringValue extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            value?: string;
        });
        get value(): string;
        set value(value: string);
        static fromObject(data: {
            value?: string;
        }): StringValue;
        toObject(): {
            value?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StringValue;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): StringValue;
    }
    class BytesValue extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            value?: Uint8Array;
        });
        get value(): Uint8Array;
        set value(value: Uint8Array);
        static fromObject(data: {
            value?: Uint8Array;
        }): BytesValue;
        toObject(): {
            value?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BytesValue;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BytesValue;
    }
}
//# sourceMappingURL=wrappers.d.ts.map