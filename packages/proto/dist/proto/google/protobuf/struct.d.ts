import * as pb_1 from "google-protobuf";
export declare namespace google.protobuf {
    enum NullValue {
        NULL_VALUE = 0
    }
    class Struct extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            fields?: Map<string, Value>;
        });
        get fields(): Map<string, Value>;
        set fields(value: Map<string, Value>);
        static fromObject(data: {
            fields?: {
                [key: string]: ReturnType<typeof Value.prototype.toObject>;
            };
        }): Struct;
        toObject(): {
            fields?: {
                [key: string]: {
                    null_value?: NullValue;
                    number_value?: number;
                    string_value?: string;
                    bool_value?: boolean;
                    struct_value?: {
                        fields?: {
                            [key: string]: any;
                        };
                    };
                    list_value?: {
                        values?: any[];
                    };
                };
            };
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Struct;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Struct;
    }
    class Value extends pb_1.Message {
        #private;
        constructor(data?: any[] | ({} & (({
            null_value?: NullValue;
            number_value?: never;
            string_value?: never;
            bool_value?: never;
            struct_value?: never;
            list_value?: never;
        } | {
            null_value?: never;
            number_value?: number;
            string_value?: never;
            bool_value?: never;
            struct_value?: never;
            list_value?: never;
        } | {
            null_value?: never;
            number_value?: never;
            string_value?: string;
            bool_value?: never;
            struct_value?: never;
            list_value?: never;
        } | {
            null_value?: never;
            number_value?: never;
            string_value?: never;
            bool_value?: boolean;
            struct_value?: never;
            list_value?: never;
        } | {
            null_value?: never;
            number_value?: never;
            string_value?: never;
            bool_value?: never;
            struct_value?: Struct;
            list_value?: never;
        } | {
            null_value?: never;
            number_value?: never;
            string_value?: never;
            bool_value?: never;
            struct_value?: never;
            list_value?: ListValue;
        }))));
        get null_value(): NullValue;
        set null_value(value: NullValue);
        get has_null_value(): boolean;
        get number_value(): number;
        set number_value(value: number);
        get has_number_value(): boolean;
        get string_value(): string;
        set string_value(value: string);
        get has_string_value(): boolean;
        get bool_value(): boolean;
        set bool_value(value: boolean);
        get has_bool_value(): boolean;
        get struct_value(): Struct;
        set struct_value(value: Struct);
        get has_struct_value(): boolean;
        get list_value(): ListValue;
        set list_value(value: ListValue);
        get has_list_value(): boolean;
        get kind(): "none" | "string_value" | "null_value" | "number_value" | "bool_value" | "struct_value" | "list_value";
        static fromObject(data: {
            null_value?: NullValue;
            number_value?: number;
            string_value?: string;
            bool_value?: boolean;
            struct_value?: ReturnType<typeof Struct.prototype.toObject>;
            list_value?: ReturnType<typeof ListValue.prototype.toObject>;
        }): Value;
        toObject(): {
            null_value?: NullValue;
            number_value?: number;
            string_value?: string;
            bool_value?: boolean;
            struct_value?: ReturnType<typeof Struct.prototype.toObject>;
            list_value?: ReturnType<typeof ListValue.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Value;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Value;
    }
    class ListValue extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            values?: Value[];
        });
        get values(): Value[];
        set values(value: Value[]);
        static fromObject(data: {
            values?: ReturnType<typeof Value.prototype.toObject>[];
        }): ListValue;
        toObject(): {
            values?: ReturnType<typeof Value.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListValue;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ListValue;
    }
}
//# sourceMappingURL=struct.d.ts.map