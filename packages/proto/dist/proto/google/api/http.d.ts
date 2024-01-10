import * as pb_1 from "google-protobuf";
export declare namespace google.api {
    class Http extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            rules?: HttpRule[];
            fully_decode_reserved_expansion?: boolean;
        });
        get rules(): HttpRule[];
        set rules(value: HttpRule[]);
        get fully_decode_reserved_expansion(): boolean;
        set fully_decode_reserved_expansion(value: boolean);
        static fromObject(data: {
            rules?: ReturnType<typeof HttpRule.prototype.toObject>[];
            fully_decode_reserved_expansion?: boolean;
        }): Http;
        toObject(): {
            rules?: ReturnType<typeof HttpRule.prototype.toObject>[];
            fully_decode_reserved_expansion?: boolean;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Http;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Http;
    }
    class HttpRule extends pb_1.Message {
        #private;
        constructor(data?: any[] | ({
            selector?: string;
            body?: string;
            response_body?: string;
            additional_bindings?: HttpRule[];
        } & (({
            get?: string;
            put?: never;
            post?: never;
            delete?: never;
            patch?: never;
            custom?: never;
        } | {
            get?: never;
            put?: string;
            post?: never;
            delete?: never;
            patch?: never;
            custom?: never;
        } | {
            get?: never;
            put?: never;
            post?: string;
            delete?: never;
            patch?: never;
            custom?: never;
        } | {
            get?: never;
            put?: never;
            post?: never;
            delete?: string;
            patch?: never;
            custom?: never;
        } | {
            get?: never;
            put?: never;
            post?: never;
            delete?: never;
            patch?: string;
            custom?: never;
        } | {
            get?: never;
            put?: never;
            post?: never;
            delete?: never;
            patch?: never;
            custom?: CustomHttpPattern;
        }))));
        get selector(): string;
        set selector(value: string);
        get get(): string;
        set get(value: string);
        get has_get(): boolean;
        get put(): string;
        set put(value: string);
        get has_put(): boolean;
        get post(): string;
        set post(value: string);
        get has_post(): boolean;
        get delete(): string;
        set delete(value: string);
        get has_delete(): boolean;
        get patch(): string;
        set patch(value: string);
        get has_patch(): boolean;
        get custom(): CustomHttpPattern;
        set custom(value: CustomHttpPattern);
        get has_custom(): boolean;
        get body(): string;
        set body(value: string);
        get response_body(): string;
        set response_body(value: string);
        get additional_bindings(): HttpRule[];
        set additional_bindings(value: HttpRule[]);
        get pattern(): "none" | "delete" | "get" | "put" | "post" | "patch" | "custom";
        static fromObject(data: {
            selector?: string;
            get?: string;
            put?: string;
            post?: string;
            delete?: string;
            patch?: string;
            custom?: ReturnType<typeof CustomHttpPattern.prototype.toObject>;
            body?: string;
            response_body?: string;
            additional_bindings?: ReturnType<typeof HttpRule.prototype.toObject>[];
        }): HttpRule;
        toObject(): {
            selector?: string;
            get?: string;
            put?: string;
            post?: string;
            delete?: string;
            patch?: string;
            custom?: ReturnType<typeof CustomHttpPattern.prototype.toObject>;
            body?: string;
            response_body?: string;
            additional_bindings?: ReturnType<typeof HttpRule.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HttpRule;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): HttpRule;
    }
    class CustomHttpPattern extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            kind?: string;
            path?: string;
        });
        get kind(): string;
        set kind(value: string);
        get path(): string;
        set path(value: string);
        static fromObject(data: {
            kind?: string;
            path?: string;
        }): CustomHttpPattern;
        toObject(): {
            kind?: string;
            path?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CustomHttpPattern;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): CustomHttpPattern;
    }
}
//# sourceMappingURL=http.d.ts.map