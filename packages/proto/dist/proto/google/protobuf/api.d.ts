import * as dependency_1 from "./source_context";
import * as dependency_2 from "./type";
import * as pb_1 from "google-protobuf";
export declare namespace google.protobuf {
    class Api extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            methods?: Method[];
            options?: dependency_2.google.protobuf.Option[];
            version?: string;
            source_context?: dependency_1.google.protobuf.SourceContext;
            mixins?: Mixin[];
            syntax?: dependency_2.google.protobuf.Syntax;
        });
        get name(): string;
        set name(value: string);
        get methods(): Method[];
        set methods(value: Method[]);
        get options(): dependency_2.google.protobuf.Option[];
        set options(value: dependency_2.google.protobuf.Option[]);
        get version(): string;
        set version(value: string);
        get source_context(): dependency_1.google.protobuf.SourceContext;
        set source_context(value: dependency_1.google.protobuf.SourceContext);
        get has_source_context(): boolean;
        get mixins(): Mixin[];
        set mixins(value: Mixin[]);
        get syntax(): dependency_2.google.protobuf.Syntax;
        set syntax(value: dependency_2.google.protobuf.Syntax);
        static fromObject(data: {
            name?: string;
            methods?: ReturnType<typeof Method.prototype.toObject>[];
            options?: ReturnType<typeof dependency_2.google.protobuf.Option.prototype.toObject>[];
            version?: string;
            source_context?: ReturnType<typeof dependency_1.google.protobuf.SourceContext.prototype.toObject>;
            mixins?: ReturnType<typeof Mixin.prototype.toObject>[];
            syntax?: dependency_2.google.protobuf.Syntax;
        }): Api;
        toObject(): {
            name?: string;
            methods?: ReturnType<typeof Method.prototype.toObject>[];
            options?: ReturnType<typeof dependency_2.google.protobuf.Option.prototype.toObject>[];
            version?: string;
            source_context?: ReturnType<typeof dependency_1.google.protobuf.SourceContext.prototype.toObject>;
            mixins?: ReturnType<typeof Mixin.prototype.toObject>[];
            syntax?: dependency_2.google.protobuf.Syntax;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Api;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Api;
    }
    class Method extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            request_type_url?: string;
            request_streaming?: boolean;
            response_type_url?: string;
            response_streaming?: boolean;
            options?: dependency_2.google.protobuf.Option[];
            syntax?: dependency_2.google.protobuf.Syntax;
        });
        get name(): string;
        set name(value: string);
        get request_type_url(): string;
        set request_type_url(value: string);
        get request_streaming(): boolean;
        set request_streaming(value: boolean);
        get response_type_url(): string;
        set response_type_url(value: string);
        get response_streaming(): boolean;
        set response_streaming(value: boolean);
        get options(): dependency_2.google.protobuf.Option[];
        set options(value: dependency_2.google.protobuf.Option[]);
        get syntax(): dependency_2.google.protobuf.Syntax;
        set syntax(value: dependency_2.google.protobuf.Syntax);
        static fromObject(data: {
            name?: string;
            request_type_url?: string;
            request_streaming?: boolean;
            response_type_url?: string;
            response_streaming?: boolean;
            options?: ReturnType<typeof dependency_2.google.protobuf.Option.prototype.toObject>[];
            syntax?: dependency_2.google.protobuf.Syntax;
        }): Method;
        toObject(): {
            name?: string;
            request_type_url?: string;
            request_streaming?: boolean;
            response_type_url?: string;
            response_streaming?: boolean;
            options?: ReturnType<typeof dependency_2.google.protobuf.Option.prototype.toObject>[];
            syntax?: dependency_2.google.protobuf.Syntax;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Method;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Method;
    }
    class Mixin extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            root?: string;
        });
        get name(): string;
        set name(value: string);
        get root(): string;
        set root(value: string);
        static fromObject(data: {
            name?: string;
            root?: string;
        }): Mixin;
        toObject(): {
            name?: string;
            root?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Mixin;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Mixin;
    }
}
//# sourceMappingURL=api.d.ts.map