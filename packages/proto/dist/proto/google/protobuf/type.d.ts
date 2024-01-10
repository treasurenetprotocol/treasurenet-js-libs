import * as dependency_1 from "./any";
import * as dependency_2 from "./source_context";
import * as pb_1 from "google-protobuf";
export declare namespace google.protobuf {
    enum Syntax {
        SYNTAX_PROTO2 = 0,
        SYNTAX_PROTO3 = 1,
        SYNTAX_EDITIONS = 2
    }
    class Type extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            fields?: Field[];
            oneofs?: string[];
            options?: Option[];
            source_context?: dependency_2.google.protobuf.SourceContext;
            syntax?: Syntax;
            edition?: string;
        });
        get name(): string;
        set name(value: string);
        get fields(): Field[];
        set fields(value: Field[]);
        get oneofs(): string[];
        set oneofs(value: string[]);
        get options(): Option[];
        set options(value: Option[]);
        get source_context(): dependency_2.google.protobuf.SourceContext;
        set source_context(value: dependency_2.google.protobuf.SourceContext);
        get has_source_context(): boolean;
        get syntax(): Syntax;
        set syntax(value: Syntax);
        get edition(): string;
        set edition(value: string);
        static fromObject(data: {
            name?: string;
            fields?: ReturnType<typeof Field.prototype.toObject>[];
            oneofs?: string[];
            options?: ReturnType<typeof Option.prototype.toObject>[];
            source_context?: ReturnType<typeof dependency_2.google.protobuf.SourceContext.prototype.toObject>;
            syntax?: Syntax;
            edition?: string;
        }): Type;
        toObject(): {
            name?: string;
            fields?: ReturnType<typeof Field.prototype.toObject>[];
            oneofs?: string[];
            options?: ReturnType<typeof Option.prototype.toObject>[];
            source_context?: ReturnType<typeof dependency_2.google.protobuf.SourceContext.prototype.toObject>;
            syntax?: Syntax;
            edition?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Type;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Type;
    }
    class Field extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            kind?: Field.Kind;
            cardinality?: Field.Cardinality;
            number?: number;
            name?: string;
            type_url?: string;
            oneof_index?: number;
            packed?: boolean;
            options?: Option[];
            json_name?: string;
            default_value?: string;
        });
        get kind(): Field.Kind;
        set kind(value: Field.Kind);
        get cardinality(): Field.Cardinality;
        set cardinality(value: Field.Cardinality);
        get number(): number;
        set number(value: number);
        get name(): string;
        set name(value: string);
        get type_url(): string;
        set type_url(value: string);
        get oneof_index(): number;
        set oneof_index(value: number);
        get packed(): boolean;
        set packed(value: boolean);
        get options(): Option[];
        set options(value: Option[]);
        get json_name(): string;
        set json_name(value: string);
        get default_value(): string;
        set default_value(value: string);
        static fromObject(data: {
            kind?: Field.Kind;
            cardinality?: Field.Cardinality;
            number?: number;
            name?: string;
            type_url?: string;
            oneof_index?: number;
            packed?: boolean;
            options?: ReturnType<typeof Option.prototype.toObject>[];
            json_name?: string;
            default_value?: string;
        }): Field;
        toObject(): {
            kind?: Field.Kind;
            cardinality?: Field.Cardinality;
            number?: number;
            name?: string;
            type_url?: string;
            oneof_index?: number;
            packed?: boolean;
            options?: ReturnType<typeof Option.prototype.toObject>[];
            json_name?: string;
            default_value?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Field;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Field;
    }
    namespace Field {
        enum Kind {
            TYPE_UNKNOWN = 0,
            TYPE_DOUBLE = 1,
            TYPE_FLOAT = 2,
            TYPE_INT64 = 3,
            TYPE_UINT64 = 4,
            TYPE_INT32 = 5,
            TYPE_FIXED64 = 6,
            TYPE_FIXED32 = 7,
            TYPE_BOOL = 8,
            TYPE_STRING = 9,
            TYPE_GROUP = 10,
            TYPE_MESSAGE = 11,
            TYPE_BYTES = 12,
            TYPE_UINT32 = 13,
            TYPE_ENUM = 14,
            TYPE_SFIXED32 = 15,
            TYPE_SFIXED64 = 16,
            TYPE_SINT32 = 17,
            TYPE_SINT64 = 18
        }
        enum Cardinality {
            CARDINALITY_UNKNOWN = 0,
            CARDINALITY_OPTIONAL = 1,
            CARDINALITY_REQUIRED = 2,
            CARDINALITY_REPEATED = 3
        }
    }
    class Enum extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            enumvalue?: EnumValue[];
            options?: Option[];
            source_context?: dependency_2.google.protobuf.SourceContext;
            syntax?: Syntax;
            edition?: string;
        });
        get name(): string;
        set name(value: string);
        get enumvalue(): EnumValue[];
        set enumvalue(value: EnumValue[]);
        get options(): Option[];
        set options(value: Option[]);
        get source_context(): dependency_2.google.protobuf.SourceContext;
        set source_context(value: dependency_2.google.protobuf.SourceContext);
        get has_source_context(): boolean;
        get syntax(): Syntax;
        set syntax(value: Syntax);
        get edition(): string;
        set edition(value: string);
        static fromObject(data: {
            name?: string;
            enumvalue?: ReturnType<typeof EnumValue.prototype.toObject>[];
            options?: ReturnType<typeof Option.prototype.toObject>[];
            source_context?: ReturnType<typeof dependency_2.google.protobuf.SourceContext.prototype.toObject>;
            syntax?: Syntax;
            edition?: string;
        }): Enum;
        toObject(): {
            name?: string;
            enumvalue?: ReturnType<typeof EnumValue.prototype.toObject>[];
            options?: ReturnType<typeof Option.prototype.toObject>[];
            source_context?: ReturnType<typeof dependency_2.google.protobuf.SourceContext.prototype.toObject>;
            syntax?: Syntax;
            edition?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Enum;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Enum;
    }
    class EnumValue extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            number?: number;
            options?: Option[];
        });
        get name(): string;
        set name(value: string);
        get number(): number;
        set number(value: number);
        get options(): Option[];
        set options(value: Option[]);
        static fromObject(data: {
            name?: string;
            number?: number;
            options?: ReturnType<typeof Option.prototype.toObject>[];
        }): EnumValue;
        toObject(): {
            name?: string;
            number?: number;
            options?: ReturnType<typeof Option.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EnumValue;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EnumValue;
    }
    class Option extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            value?: dependency_1.google.protobuf.Any;
        });
        get name(): string;
        set name(value: string);
        get value(): dependency_1.google.protobuf.Any;
        set value(value: dependency_1.google.protobuf.Any);
        get has_value(): boolean;
        static fromObject(data: {
            name?: string;
            value?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
        }): Option;
        toObject(): {
            name?: string;
            value?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Option;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Option;
    }
}
//# sourceMappingURL=type.d.ts.map