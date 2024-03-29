import * as pb_1 from "google-protobuf";
export declare namespace google.protobuf {
    class FileDescriptorSet extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            file: FileDescriptorProto[];
        });
        get file(): FileDescriptorProto[];
        set file(value: FileDescriptorProto[]);
        static fromObject(data: {
            file?: ReturnType<typeof FileDescriptorProto.prototype.toObject>[];
        }): FileDescriptorSet;
        toObject(): {
            file?: ReturnType<typeof FileDescriptorProto.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FileDescriptorSet;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): FileDescriptorSet;
    }
    class FileDescriptorProto extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            package?: string;
            dependency: string[];
            public_dependency: number[];
            weak_dependency: number[];
            message_type: DescriptorProto[];
            enum_type: EnumDescriptorProto[];
            service: ServiceDescriptorProto[];
            extension: FieldDescriptorProto[];
            options?: FileOptions;
            source_code_info?: SourceCodeInfo;
            syntax?: string;
        });
        get name(): string;
        set name(value: string);
        get has_name(): boolean;
        get package(): string;
        set package(value: string);
        get has_package(): boolean;
        get dependency(): string[];
        set dependency(value: string[]);
        get public_dependency(): number[];
        set public_dependency(value: number[]);
        get weak_dependency(): number[];
        set weak_dependency(value: number[]);
        get message_type(): DescriptorProto[];
        set message_type(value: DescriptorProto[]);
        get enum_type(): EnumDescriptorProto[];
        set enum_type(value: EnumDescriptorProto[]);
        get service(): ServiceDescriptorProto[];
        set service(value: ServiceDescriptorProto[]);
        get extension(): FieldDescriptorProto[];
        set extension(value: FieldDescriptorProto[]);
        get options(): FileOptions;
        set options(value: FileOptions);
        get has_options(): boolean;
        get source_code_info(): SourceCodeInfo;
        set source_code_info(value: SourceCodeInfo);
        get has_source_code_info(): boolean;
        get syntax(): string;
        set syntax(value: string);
        get has_syntax(): boolean;
        static fromObject(data: {
            name?: string;
            package?: string;
            dependency: string[];
            public_dependency: number[];
            weak_dependency: number[];
            message_type?: ReturnType<typeof DescriptorProto.prototype.toObject>[];
            enum_type?: ReturnType<typeof EnumDescriptorProto.prototype.toObject>[];
            service?: ReturnType<typeof ServiceDescriptorProto.prototype.toObject>[];
            extension?: ReturnType<typeof FieldDescriptorProto.prototype.toObject>[];
            options?: ReturnType<typeof FileOptions.prototype.toObject>;
            source_code_info?: ReturnType<typeof SourceCodeInfo.prototype.toObject>;
            syntax?: string;
        }): FileDescriptorProto;
        toObject(): {
            name?: string;
            package?: string;
            dependency: string[];
            public_dependency: number[];
            weak_dependency: number[];
            message_type?: ReturnType<typeof DescriptorProto.prototype.toObject>[];
            enum_type?: ReturnType<typeof EnumDescriptorProto.prototype.toObject>[];
            service?: ReturnType<typeof ServiceDescriptorProto.prototype.toObject>[];
            extension?: ReturnType<typeof FieldDescriptorProto.prototype.toObject>[];
            options?: ReturnType<typeof FileOptions.prototype.toObject>;
            source_code_info?: ReturnType<typeof SourceCodeInfo.prototype.toObject>;
            syntax?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FileDescriptorProto;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): FileDescriptorProto;
    }
    class DescriptorProto extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            field: FieldDescriptorProto[];
            extension: FieldDescriptorProto[];
            nested_type: DescriptorProto[];
            enum_type: EnumDescriptorProto[];
            extension_range: DescriptorProto.ExtensionRange[];
            oneof_decl: OneofDescriptorProto[];
            options?: MessageOptions;
            reserved_range: DescriptorProto.ReservedRange[];
            reserved_name: string[];
        });
        get name(): string;
        set name(value: string);
        get has_name(): boolean;
        get field(): FieldDescriptorProto[];
        set field(value: FieldDescriptorProto[]);
        get extension(): FieldDescriptorProto[];
        set extension(value: FieldDescriptorProto[]);
        get nested_type(): DescriptorProto[];
        set nested_type(value: DescriptorProto[]);
        get enum_type(): EnumDescriptorProto[];
        set enum_type(value: EnumDescriptorProto[]);
        get extension_range(): DescriptorProto.ExtensionRange[];
        set extension_range(value: DescriptorProto.ExtensionRange[]);
        get oneof_decl(): OneofDescriptorProto[];
        set oneof_decl(value: OneofDescriptorProto[]);
        get options(): MessageOptions;
        set options(value: MessageOptions);
        get has_options(): boolean;
        get reserved_range(): DescriptorProto.ReservedRange[];
        set reserved_range(value: DescriptorProto.ReservedRange[]);
        get reserved_name(): string[];
        set reserved_name(value: string[]);
        static fromObject(data: {
            name?: string;
            field?: ReturnType<typeof FieldDescriptorProto.prototype.toObject>[];
            extension?: ReturnType<typeof FieldDescriptorProto.prototype.toObject>[];
            nested_type?: ReturnType<typeof DescriptorProto.prototype.toObject>[];
            enum_type?: ReturnType<typeof EnumDescriptorProto.prototype.toObject>[];
            extension_range?: ReturnType<typeof DescriptorProto.ExtensionRange.prototype.toObject>[];
            oneof_decl?: ReturnType<typeof OneofDescriptorProto.prototype.toObject>[];
            options?: ReturnType<typeof MessageOptions.prototype.toObject>;
            reserved_range?: ReturnType<typeof DescriptorProto.ReservedRange.prototype.toObject>[];
            reserved_name: string[];
        }): DescriptorProto;
        toObject(): {
            name?: string;
            field?: ReturnType<typeof FieldDescriptorProto.prototype.toObject>[];
            extension?: ReturnType<typeof FieldDescriptorProto.prototype.toObject>[];
            nested_type?: ReturnType<typeof DescriptorProto.prototype.toObject>[];
            enum_type?: ReturnType<typeof EnumDescriptorProto.prototype.toObject>[];
            extension_range?: ReturnType<typeof DescriptorProto.ExtensionRange.prototype.toObject>[];
            oneof_decl?: ReturnType<typeof OneofDescriptorProto.prototype.toObject>[];
            options?: ReturnType<typeof MessageOptions.prototype.toObject>;
            reserved_range?: ReturnType<typeof DescriptorProto.ReservedRange.prototype.toObject>[];
            reserved_name: string[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DescriptorProto;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): DescriptorProto;
    }
    namespace DescriptorProto {
        class ExtensionRange extends pb_1.Message {
            #private;
            constructor(data?: any[] | {
                start?: number;
                end?: number;
                options?: ExtensionRangeOptions;
            });
            get start(): number;
            set start(value: number);
            get has_start(): boolean;
            get end(): number;
            set end(value: number);
            get has_end(): boolean;
            get options(): ExtensionRangeOptions;
            set options(value: ExtensionRangeOptions);
            get has_options(): boolean;
            static fromObject(data: {
                start?: number;
                end?: number;
                options?: ReturnType<typeof ExtensionRangeOptions.prototype.toObject>;
            }): ExtensionRange;
            toObject(): {
                start?: number;
                end?: number;
                options?: ReturnType<typeof ExtensionRangeOptions.prototype.toObject>;
            };
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ExtensionRange;
            serializeBinary(): Uint8Array;
            static deserializeBinary(bytes: Uint8Array): ExtensionRange;
        }
        class ReservedRange extends pb_1.Message {
            #private;
            constructor(data?: any[] | {
                start?: number;
                end?: number;
            });
            get start(): number;
            set start(value: number);
            get has_start(): boolean;
            get end(): number;
            set end(value: number);
            get has_end(): boolean;
            static fromObject(data: {
                start?: number;
                end?: number;
            }): ReservedRange;
            toObject(): {
                start?: number;
                end?: number;
            };
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ReservedRange;
            serializeBinary(): Uint8Array;
            static deserializeBinary(bytes: Uint8Array): ReservedRange;
        }
    }
    class ExtensionRangeOptions extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            uninterpreted_option: UninterpretedOption[];
        });
        get uninterpreted_option(): UninterpretedOption[];
        set uninterpreted_option(value: UninterpretedOption[]);
        static fromObject(data: {
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        }): ExtensionRangeOptions;
        toObject(): {
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ExtensionRangeOptions;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ExtensionRangeOptions;
    }
    class FieldDescriptorProto extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            number?: number;
            label?: FieldDescriptorProto.Label;
            type?: FieldDescriptorProto.Type;
            type_name?: string;
            extendee?: string;
            default_value?: string;
            oneof_index?: number;
            json_name?: string;
            options?: FieldOptions;
            proto3_optional?: boolean;
        });
        get name(): string;
        set name(value: string);
        get has_name(): boolean;
        get number(): number;
        set number(value: number);
        get has_number(): boolean;
        get label(): FieldDescriptorProto.Label;
        set label(value: FieldDescriptorProto.Label);
        get has_label(): boolean;
        get type(): FieldDescriptorProto.Type;
        set type(value: FieldDescriptorProto.Type);
        get has_type(): boolean;
        get type_name(): string;
        set type_name(value: string);
        get has_type_name(): boolean;
        get extendee(): string;
        set extendee(value: string);
        get has_extendee(): boolean;
        get default_value(): string;
        set default_value(value: string);
        get has_default_value(): boolean;
        get oneof_index(): number;
        set oneof_index(value: number);
        get has_oneof_index(): boolean;
        get json_name(): string;
        set json_name(value: string);
        get has_json_name(): boolean;
        get options(): FieldOptions;
        set options(value: FieldOptions);
        get has_options(): boolean;
        get proto3_optional(): boolean;
        set proto3_optional(value: boolean);
        get has_proto3_optional(): boolean;
        static fromObject(data: {
            name?: string;
            number?: number;
            label?: FieldDescriptorProto.Label;
            type?: FieldDescriptorProto.Type;
            type_name?: string;
            extendee?: string;
            default_value?: string;
            oneof_index?: number;
            json_name?: string;
            options?: ReturnType<typeof FieldOptions.prototype.toObject>;
            proto3_optional?: boolean;
        }): FieldDescriptorProto;
        toObject(): {
            name?: string;
            number?: number;
            label?: FieldDescriptorProto.Label;
            type?: FieldDescriptorProto.Type;
            type_name?: string;
            extendee?: string;
            default_value?: string;
            oneof_index?: number;
            json_name?: string;
            options?: ReturnType<typeof FieldOptions.prototype.toObject>;
            proto3_optional?: boolean;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FieldDescriptorProto;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): FieldDescriptorProto;
    }
    namespace FieldDescriptorProto {
        enum Type {
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
        enum Label {
            LABEL_OPTIONAL = 1,
            LABEL_REQUIRED = 2,
            LABEL_REPEATED = 3
        }
    }
    class OneofDescriptorProto extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            options?: OneofOptions;
        });
        get name(): string;
        set name(value: string);
        get has_name(): boolean;
        get options(): OneofOptions;
        set options(value: OneofOptions);
        get has_options(): boolean;
        static fromObject(data: {
            name?: string;
            options?: ReturnType<typeof OneofOptions.prototype.toObject>;
        }): OneofDescriptorProto;
        toObject(): {
            name?: string;
            options?: ReturnType<typeof OneofOptions.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OneofDescriptorProto;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): OneofDescriptorProto;
    }
    class EnumDescriptorProto extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            value: EnumValueDescriptorProto[];
            options?: EnumOptions;
            reserved_range: EnumDescriptorProto.EnumReservedRange[];
            reserved_name: string[];
        });
        get name(): string;
        set name(value: string);
        get has_name(): boolean;
        get value(): EnumValueDescriptorProto[];
        set value(value: EnumValueDescriptorProto[]);
        get options(): EnumOptions;
        set options(value: EnumOptions);
        get has_options(): boolean;
        get reserved_range(): EnumDescriptorProto.EnumReservedRange[];
        set reserved_range(value: EnumDescriptorProto.EnumReservedRange[]);
        get reserved_name(): string[];
        set reserved_name(value: string[]);
        static fromObject(data: {
            name?: string;
            value?: ReturnType<typeof EnumValueDescriptorProto.prototype.toObject>[];
            options?: ReturnType<typeof EnumOptions.prototype.toObject>;
            reserved_range?: ReturnType<typeof EnumDescriptorProto.EnumReservedRange.prototype.toObject>[];
            reserved_name: string[];
        }): EnumDescriptorProto;
        toObject(): {
            name?: string;
            value?: ReturnType<typeof EnumValueDescriptorProto.prototype.toObject>[];
            options?: ReturnType<typeof EnumOptions.prototype.toObject>;
            reserved_range?: ReturnType<typeof EnumDescriptorProto.EnumReservedRange.prototype.toObject>[];
            reserved_name: string[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EnumDescriptorProto;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EnumDescriptorProto;
    }
    namespace EnumDescriptorProto {
        class EnumReservedRange extends pb_1.Message {
            #private;
            constructor(data?: any[] | {
                start?: number;
                end?: number;
            });
            get start(): number;
            set start(value: number);
            get has_start(): boolean;
            get end(): number;
            set end(value: number);
            get has_end(): boolean;
            static fromObject(data: {
                start?: number;
                end?: number;
            }): EnumReservedRange;
            toObject(): {
                start?: number;
                end?: number;
            };
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EnumReservedRange;
            serializeBinary(): Uint8Array;
            static deserializeBinary(bytes: Uint8Array): EnumReservedRange;
        }
    }
    class EnumValueDescriptorProto extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            number?: number;
            options?: EnumValueOptions;
        });
        get name(): string;
        set name(value: string);
        get has_name(): boolean;
        get number(): number;
        set number(value: number);
        get has_number(): boolean;
        get options(): EnumValueOptions;
        set options(value: EnumValueOptions);
        get has_options(): boolean;
        static fromObject(data: {
            name?: string;
            number?: number;
            options?: ReturnType<typeof EnumValueOptions.prototype.toObject>;
        }): EnumValueDescriptorProto;
        toObject(): {
            name?: string;
            number?: number;
            options?: ReturnType<typeof EnumValueOptions.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EnumValueDescriptorProto;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EnumValueDescriptorProto;
    }
    class ServiceDescriptorProto extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            method: MethodDescriptorProto[];
            options?: ServiceOptions;
        });
        get name(): string;
        set name(value: string);
        get has_name(): boolean;
        get method(): MethodDescriptorProto[];
        set method(value: MethodDescriptorProto[]);
        get options(): ServiceOptions;
        set options(value: ServiceOptions);
        get has_options(): boolean;
        static fromObject(data: {
            name?: string;
            method?: ReturnType<typeof MethodDescriptorProto.prototype.toObject>[];
            options?: ReturnType<typeof ServiceOptions.prototype.toObject>;
        }): ServiceDescriptorProto;
        toObject(): {
            name?: string;
            method?: ReturnType<typeof MethodDescriptorProto.prototype.toObject>[];
            options?: ReturnType<typeof ServiceOptions.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ServiceDescriptorProto;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ServiceDescriptorProto;
    }
    class MethodDescriptorProto extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            input_type?: string;
            output_type?: string;
            options?: MethodOptions;
            client_streaming?: boolean;
            server_streaming?: boolean;
        });
        get name(): string;
        set name(value: string);
        get has_name(): boolean;
        get input_type(): string;
        set input_type(value: string);
        get has_input_type(): boolean;
        get output_type(): string;
        set output_type(value: string);
        get has_output_type(): boolean;
        get options(): MethodOptions;
        set options(value: MethodOptions);
        get has_options(): boolean;
        get client_streaming(): boolean;
        set client_streaming(value: boolean);
        get has_client_streaming(): boolean;
        get server_streaming(): boolean;
        set server_streaming(value: boolean);
        get has_server_streaming(): boolean;
        static fromObject(data: {
            name?: string;
            input_type?: string;
            output_type?: string;
            options?: ReturnType<typeof MethodOptions.prototype.toObject>;
            client_streaming?: boolean;
            server_streaming?: boolean;
        }): MethodDescriptorProto;
        toObject(): {
            name?: string;
            input_type?: string;
            output_type?: string;
            options?: ReturnType<typeof MethodOptions.prototype.toObject>;
            client_streaming?: boolean;
            server_streaming?: boolean;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MethodDescriptorProto;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MethodDescriptorProto;
    }
    class FileOptions extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            java_package?: string;
            java_outer_classname?: string;
            java_multiple_files?: boolean;
            java_generate_equals_and_hash?: boolean;
            java_string_check_utf8?: boolean;
            optimize_for?: FileOptions.OptimizeMode;
            go_package?: string;
            cc_generic_services?: boolean;
            java_generic_services?: boolean;
            py_generic_services?: boolean;
            php_generic_services?: boolean;
            deprecated?: boolean;
            cc_enable_arenas?: boolean;
            objc_class_prefix?: string;
            csharp_namespace?: string;
            swift_prefix?: string;
            php_class_prefix?: string;
            php_namespace?: string;
            php_metadata_namespace?: string;
            ruby_package?: string;
            uninterpreted_option: UninterpretedOption[];
        });
        get java_package(): string;
        set java_package(value: string);
        get has_java_package(): boolean;
        get java_outer_classname(): string;
        set java_outer_classname(value: string);
        get has_java_outer_classname(): boolean;
        get java_multiple_files(): boolean;
        set java_multiple_files(value: boolean);
        get has_java_multiple_files(): boolean;
        get java_generate_equals_and_hash(): boolean;
        set java_generate_equals_and_hash(value: boolean);
        get has_java_generate_equals_and_hash(): boolean;
        get java_string_check_utf8(): boolean;
        set java_string_check_utf8(value: boolean);
        get has_java_string_check_utf8(): boolean;
        get optimize_for(): FileOptions.OptimizeMode;
        set optimize_for(value: FileOptions.OptimizeMode);
        get has_optimize_for(): boolean;
        get go_package(): string;
        set go_package(value: string);
        get has_go_package(): boolean;
        get cc_generic_services(): boolean;
        set cc_generic_services(value: boolean);
        get has_cc_generic_services(): boolean;
        get java_generic_services(): boolean;
        set java_generic_services(value: boolean);
        get has_java_generic_services(): boolean;
        get py_generic_services(): boolean;
        set py_generic_services(value: boolean);
        get has_py_generic_services(): boolean;
        get php_generic_services(): boolean;
        set php_generic_services(value: boolean);
        get has_php_generic_services(): boolean;
        get deprecated(): boolean;
        set deprecated(value: boolean);
        get has_deprecated(): boolean;
        get cc_enable_arenas(): boolean;
        set cc_enable_arenas(value: boolean);
        get has_cc_enable_arenas(): boolean;
        get objc_class_prefix(): string;
        set objc_class_prefix(value: string);
        get has_objc_class_prefix(): boolean;
        get csharp_namespace(): string;
        set csharp_namespace(value: string);
        get has_csharp_namespace(): boolean;
        get swift_prefix(): string;
        set swift_prefix(value: string);
        get has_swift_prefix(): boolean;
        get php_class_prefix(): string;
        set php_class_prefix(value: string);
        get has_php_class_prefix(): boolean;
        get php_namespace(): string;
        set php_namespace(value: string);
        get has_php_namespace(): boolean;
        get php_metadata_namespace(): string;
        set php_metadata_namespace(value: string);
        get has_php_metadata_namespace(): boolean;
        get ruby_package(): string;
        set ruby_package(value: string);
        get has_ruby_package(): boolean;
        get uninterpreted_option(): UninterpretedOption[];
        set uninterpreted_option(value: UninterpretedOption[]);
        static fromObject(data: {
            java_package?: string;
            java_outer_classname?: string;
            java_multiple_files?: boolean;
            java_generate_equals_and_hash?: boolean;
            java_string_check_utf8?: boolean;
            optimize_for?: FileOptions.OptimizeMode;
            go_package?: string;
            cc_generic_services?: boolean;
            java_generic_services?: boolean;
            py_generic_services?: boolean;
            php_generic_services?: boolean;
            deprecated?: boolean;
            cc_enable_arenas?: boolean;
            objc_class_prefix?: string;
            csharp_namespace?: string;
            swift_prefix?: string;
            php_class_prefix?: string;
            php_namespace?: string;
            php_metadata_namespace?: string;
            ruby_package?: string;
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        }): FileOptions;
        toObject(): {
            java_package?: string;
            java_outer_classname?: string;
            java_multiple_files?: boolean;
            java_generate_equals_and_hash?: boolean;
            java_string_check_utf8?: boolean;
            optimize_for?: FileOptions.OptimizeMode;
            go_package?: string;
            cc_generic_services?: boolean;
            java_generic_services?: boolean;
            py_generic_services?: boolean;
            php_generic_services?: boolean;
            deprecated?: boolean;
            cc_enable_arenas?: boolean;
            objc_class_prefix?: string;
            csharp_namespace?: string;
            swift_prefix?: string;
            php_class_prefix?: string;
            php_namespace?: string;
            php_metadata_namespace?: string;
            ruby_package?: string;
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FileOptions;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): FileOptions;
    }
    namespace FileOptions {
        enum OptimizeMode {
            SPEED = 1,
            CODE_SIZE = 2,
            LITE_RUNTIME = 3
        }
    }
    class MessageOptions extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            message_set_wire_format?: boolean;
            no_standard_descriptor_accessor?: boolean;
            deprecated?: boolean;
            map_entry?: boolean;
            uninterpreted_option: UninterpretedOption[];
        });
        get message_set_wire_format(): boolean;
        set message_set_wire_format(value: boolean);
        get has_message_set_wire_format(): boolean;
        get no_standard_descriptor_accessor(): boolean;
        set no_standard_descriptor_accessor(value: boolean);
        get has_no_standard_descriptor_accessor(): boolean;
        get deprecated(): boolean;
        set deprecated(value: boolean);
        get has_deprecated(): boolean;
        get map_entry(): boolean;
        set map_entry(value: boolean);
        get has_map_entry(): boolean;
        get uninterpreted_option(): UninterpretedOption[];
        set uninterpreted_option(value: UninterpretedOption[]);
        static fromObject(data: {
            message_set_wire_format?: boolean;
            no_standard_descriptor_accessor?: boolean;
            deprecated?: boolean;
            map_entry?: boolean;
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        }): MessageOptions;
        toObject(): {
            message_set_wire_format?: boolean;
            no_standard_descriptor_accessor?: boolean;
            deprecated?: boolean;
            map_entry?: boolean;
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MessageOptions;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MessageOptions;
    }
    class FieldOptions extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            ctype?: FieldOptions.CType;
            packed?: boolean;
            jstype?: FieldOptions.JSType;
            lazy?: boolean;
            deprecated?: boolean;
            weak?: boolean;
            uninterpreted_option: UninterpretedOption[];
        });
        get ctype(): FieldOptions.CType;
        set ctype(value: FieldOptions.CType);
        get has_ctype(): boolean;
        get packed(): boolean;
        set packed(value: boolean);
        get has_packed(): boolean;
        get jstype(): FieldOptions.JSType;
        set jstype(value: FieldOptions.JSType);
        get has_jstype(): boolean;
        get lazy(): boolean;
        set lazy(value: boolean);
        get has_lazy(): boolean;
        get deprecated(): boolean;
        set deprecated(value: boolean);
        get has_deprecated(): boolean;
        get weak(): boolean;
        set weak(value: boolean);
        get has_weak(): boolean;
        get uninterpreted_option(): UninterpretedOption[];
        set uninterpreted_option(value: UninterpretedOption[]);
        static fromObject(data: {
            ctype?: FieldOptions.CType;
            packed?: boolean;
            jstype?: FieldOptions.JSType;
            lazy?: boolean;
            deprecated?: boolean;
            weak?: boolean;
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        }): FieldOptions;
        toObject(): {
            ctype?: FieldOptions.CType;
            packed?: boolean;
            jstype?: FieldOptions.JSType;
            lazy?: boolean;
            deprecated?: boolean;
            weak?: boolean;
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FieldOptions;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): FieldOptions;
    }
    namespace FieldOptions {
        enum CType {
            STRING = 0,
            CORD = 1,
            STRING_PIECE = 2
        }
        enum JSType {
            JS_NORMAL = 0,
            JS_STRING = 1,
            JS_NUMBER = 2
        }
    }
    class OneofOptions extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            uninterpreted_option: UninterpretedOption[];
        });
        get uninterpreted_option(): UninterpretedOption[];
        set uninterpreted_option(value: UninterpretedOption[]);
        static fromObject(data: {
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        }): OneofOptions;
        toObject(): {
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OneofOptions;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): OneofOptions;
    }
    class EnumOptions extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            allow_alias?: boolean;
            deprecated?: boolean;
            uninterpreted_option: UninterpretedOption[];
        });
        get allow_alias(): boolean;
        set allow_alias(value: boolean);
        get has_allow_alias(): boolean;
        get deprecated(): boolean;
        set deprecated(value: boolean);
        get has_deprecated(): boolean;
        get uninterpreted_option(): UninterpretedOption[];
        set uninterpreted_option(value: UninterpretedOption[]);
        static fromObject(data: {
            allow_alias?: boolean;
            deprecated?: boolean;
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        }): EnumOptions;
        toObject(): {
            allow_alias?: boolean;
            deprecated?: boolean;
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EnumOptions;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EnumOptions;
    }
    class EnumValueOptions extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            deprecated?: boolean;
            uninterpreted_option: UninterpretedOption[];
        });
        get deprecated(): boolean;
        set deprecated(value: boolean);
        get has_deprecated(): boolean;
        get uninterpreted_option(): UninterpretedOption[];
        set uninterpreted_option(value: UninterpretedOption[]);
        static fromObject(data: {
            deprecated?: boolean;
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        }): EnumValueOptions;
        toObject(): {
            deprecated?: boolean;
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EnumValueOptions;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EnumValueOptions;
    }
    class ServiceOptions extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            deprecated?: boolean;
            uninterpreted_option: UninterpretedOption[];
        });
        get deprecated(): boolean;
        set deprecated(value: boolean);
        get has_deprecated(): boolean;
        get uninterpreted_option(): UninterpretedOption[];
        set uninterpreted_option(value: UninterpretedOption[]);
        static fromObject(data: {
            deprecated?: boolean;
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        }): ServiceOptions;
        toObject(): {
            deprecated?: boolean;
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ServiceOptions;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ServiceOptions;
    }
    class MethodOptions extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            deprecated?: boolean;
            idempotency_level?: MethodOptions.IdempotencyLevel;
            uninterpreted_option: UninterpretedOption[];
        });
        get deprecated(): boolean;
        set deprecated(value: boolean);
        get has_deprecated(): boolean;
        get idempotency_level(): MethodOptions.IdempotencyLevel;
        set idempotency_level(value: MethodOptions.IdempotencyLevel);
        get has_idempotency_level(): boolean;
        get uninterpreted_option(): UninterpretedOption[];
        set uninterpreted_option(value: UninterpretedOption[]);
        static fromObject(data: {
            deprecated?: boolean;
            idempotency_level?: MethodOptions.IdempotencyLevel;
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        }): MethodOptions;
        toObject(): {
            deprecated?: boolean;
            idempotency_level?: MethodOptions.IdempotencyLevel;
            uninterpreted_option?: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MethodOptions;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MethodOptions;
    }
    namespace MethodOptions {
        enum IdempotencyLevel {
            IDEMPOTENCY_UNKNOWN = 0,
            NO_SIDE_EFFECTS = 1,
            IDEMPOTENT = 2
        }
    }
    class UninterpretedOption extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name: UninterpretedOption.NamePart[];
            identifier_value?: string;
            positive_int_value?: number;
            negative_int_value?: number;
            double_value?: number;
            string_value?: Uint8Array;
            aggregate_value?: string;
        });
        get name(): UninterpretedOption.NamePart[];
        set name(value: UninterpretedOption.NamePart[]);
        get identifier_value(): string;
        set identifier_value(value: string);
        get has_identifier_value(): boolean;
        get positive_int_value(): number;
        set positive_int_value(value: number);
        get has_positive_int_value(): boolean;
        get negative_int_value(): number;
        set negative_int_value(value: number);
        get has_negative_int_value(): boolean;
        get double_value(): number;
        set double_value(value: number);
        get has_double_value(): boolean;
        get string_value(): Uint8Array;
        set string_value(value: Uint8Array);
        get has_string_value(): boolean;
        get aggregate_value(): string;
        set aggregate_value(value: string);
        get has_aggregate_value(): boolean;
        static fromObject(data: {
            name?: ReturnType<typeof UninterpretedOption.NamePart.prototype.toObject>[];
            identifier_value?: string;
            positive_int_value?: number;
            negative_int_value?: number;
            double_value?: number;
            string_value?: Uint8Array;
            aggregate_value?: string;
        }): UninterpretedOption;
        toObject(): {
            name?: ReturnType<typeof UninterpretedOption.NamePart.prototype.toObject>[];
            identifier_value?: string;
            positive_int_value?: number;
            negative_int_value?: number;
            double_value?: number;
            string_value?: Uint8Array;
            aggregate_value?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UninterpretedOption;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): UninterpretedOption;
    }
    namespace UninterpretedOption {
        class NamePart extends pb_1.Message {
            #private;
            constructor(data?: any[] | {
                name_part: string;
                is_extension: boolean;
            });
            get name_part(): string;
            set name_part(value: string);
            get has_name_part(): boolean;
            get is_extension(): boolean;
            set is_extension(value: boolean);
            get has_is_extension(): boolean;
            static fromObject(data: {
                name_part?: string;
                is_extension?: boolean;
            }): NamePart;
            toObject(): {
                name_part?: string;
                is_extension?: boolean;
            };
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): NamePart;
            serializeBinary(): Uint8Array;
            static deserializeBinary(bytes: Uint8Array): NamePart;
        }
    }
    class SourceCodeInfo extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            location: SourceCodeInfo.Location[];
        });
        get location(): SourceCodeInfo.Location[];
        set location(value: SourceCodeInfo.Location[]);
        static fromObject(data: {
            location?: ReturnType<typeof SourceCodeInfo.Location.prototype.toObject>[];
        }): SourceCodeInfo;
        toObject(): {
            location?: ReturnType<typeof SourceCodeInfo.Location.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SourceCodeInfo;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): SourceCodeInfo;
    }
    namespace SourceCodeInfo {
        class Location extends pb_1.Message {
            #private;
            constructor(data?: any[] | {
                path: number[];
                span: number[];
                leading_comments?: string;
                trailing_comments?: string;
                leading_detached_comments: string[];
            });
            get path(): number[];
            set path(value: number[]);
            get span(): number[];
            set span(value: number[]);
            get leading_comments(): string;
            set leading_comments(value: string);
            get has_leading_comments(): boolean;
            get trailing_comments(): string;
            set trailing_comments(value: string);
            get has_trailing_comments(): boolean;
            get leading_detached_comments(): string[];
            set leading_detached_comments(value: string[]);
            static fromObject(data: {
                path: number[];
                span: number[];
                leading_comments?: string;
                trailing_comments?: string;
                leading_detached_comments: string[];
            }): Location;
            toObject(): {
                path: number[];
                span: number[];
                leading_comments?: string;
                trailing_comments?: string;
                leading_detached_comments: string[];
            };
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Location;
            serializeBinary(): Uint8Array;
            static deserializeBinary(bytes: Uint8Array): Location;
        }
    }
    class GeneratedCodeInfo extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            annotation: GeneratedCodeInfo.Annotation[];
        });
        get annotation(): GeneratedCodeInfo.Annotation[];
        set annotation(value: GeneratedCodeInfo.Annotation[]);
        static fromObject(data: {
            annotation?: ReturnType<typeof GeneratedCodeInfo.Annotation.prototype.toObject>[];
        }): GeneratedCodeInfo;
        toObject(): {
            annotation?: ReturnType<typeof GeneratedCodeInfo.Annotation.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GeneratedCodeInfo;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GeneratedCodeInfo;
    }
    namespace GeneratedCodeInfo {
        class Annotation extends pb_1.Message {
            #private;
            constructor(data?: any[] | {
                path: number[];
                source_file?: string;
                begin?: number;
                end?: number;
            });
            get path(): number[];
            set path(value: number[]);
            get source_file(): string;
            set source_file(value: string);
            get has_source_file(): boolean;
            get begin(): number;
            set begin(value: number);
            get has_begin(): boolean;
            get end(): number;
            set end(value: number);
            get has_end(): boolean;
            static fromObject(data: {
                path: number[];
                source_file?: string;
                begin?: number;
                end?: number;
            }): Annotation;
            toObject(): {
                path: number[];
                source_file?: string;
                begin?: number;
                end?: number;
            };
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Annotation;
            serializeBinary(): Uint8Array;
            static deserializeBinary(bytes: Uint8Array): Annotation;
        }
    }
}
//# sourceMappingURL=descriptor.d.ts.map