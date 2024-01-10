import * as dependency_1 from "./../../../crypto/multisig/v1beta1/multisig";
import * as dependency_2 from "./../../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
export declare namespace cosmos.tx.signing.v1beta1 {
    enum SignMode {
        SIGN_MODE_UNSPECIFIED = 0,
        SIGN_MODE_DIRECT = 1,
        SIGN_MODE_TEXTUAL = 2,
        SIGN_MODE_LEGACY_AMINO_JSON = 127,
        SIGN_MODE_EIP_191 = 191
    }
    class SignatureDescriptors extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            signatures?: SignatureDescriptor[];
        });
        get signatures(): SignatureDescriptor[];
        set signatures(value: SignatureDescriptor[]);
        static fromObject(data: {
            signatures?: ReturnType<typeof SignatureDescriptor.prototype.toObject>[];
        }): SignatureDescriptors;
        toObject(): {
            signatures?: ReturnType<typeof SignatureDescriptor.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SignatureDescriptors;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): SignatureDescriptors;
    }
    class SignatureDescriptor extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            public_key?: dependency_2.google.protobuf.Any;
            data?: SignatureDescriptor.Data;
            sequence?: number;
        });
        get public_key(): dependency_2.google.protobuf.Any;
        set public_key(value: dependency_2.google.protobuf.Any);
        get has_public_key(): boolean;
        get data(): SignatureDescriptor.Data;
        set data(value: SignatureDescriptor.Data);
        get has_data(): boolean;
        get sequence(): number;
        set sequence(value: number);
        static fromObject(data: {
            public_key?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            data?: ReturnType<typeof SignatureDescriptor.Data.prototype.toObject>;
            sequence?: number;
        }): SignatureDescriptor;
        toObject(): {
            public_key?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            data?: ReturnType<typeof SignatureDescriptor.Data.prototype.toObject>;
            sequence?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SignatureDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): SignatureDescriptor;
    }
    namespace SignatureDescriptor {
        class Data extends pb_1.Message {
            #private;
            constructor(data?: any[] | ({} & (({
                single?: SignatureDescriptor.Data.Single;
                multi?: never;
            } | {
                single?: never;
                multi?: SignatureDescriptor.Data.Multi;
            }))));
            get single(): SignatureDescriptor.Data.Single;
            set single(value: SignatureDescriptor.Data.Single);
            get has_single(): boolean;
            get multi(): SignatureDescriptor.Data.Multi;
            set multi(value: SignatureDescriptor.Data.Multi);
            get has_multi(): boolean;
            get sum(): "none" | "single" | "multi";
            static fromObject(data: {
                single?: ReturnType<typeof SignatureDescriptor.Data.Single.prototype.toObject>;
                multi?: ReturnType<typeof SignatureDescriptor.Data.Multi.prototype.toObject>;
            }): Data;
            toObject(): {
                single?: ReturnType<typeof SignatureDescriptor.Data.Single.prototype.toObject>;
                multi?: ReturnType<typeof SignatureDescriptor.Data.Multi.prototype.toObject>;
            };
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Data;
            serializeBinary(): Uint8Array;
            static deserializeBinary(bytes: Uint8Array): Data;
        }
        namespace Data {
            class Single extends pb_1.Message {
                #private;
                constructor(data?: any[] | {
                    mode?: SignMode;
                    signature?: Uint8Array;
                });
                get mode(): SignMode;
                set mode(value: SignMode);
                get signature(): Uint8Array;
                set signature(value: Uint8Array);
                static fromObject(data: {
                    mode?: SignMode;
                    signature?: Uint8Array;
                }): Single;
                toObject(): {
                    mode?: SignMode;
                    signature?: Uint8Array;
                };
                serialize(): Uint8Array;
                serialize(w: pb_1.BinaryWriter): void;
                static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Single;
                serializeBinary(): Uint8Array;
                static deserializeBinary(bytes: Uint8Array): Single;
            }
            class Multi extends pb_1.Message {
                #private;
                constructor(data?: any[] | {
                    bitarray?: dependency_1.cosmos.crypto.multisig.v1beta1.CompactBitArray;
                    signatures?: SignatureDescriptor.Data[];
                });
                get bitarray(): dependency_1.cosmos.crypto.multisig.v1beta1.CompactBitArray;
                set bitarray(value: dependency_1.cosmos.crypto.multisig.v1beta1.CompactBitArray);
                get has_bitarray(): boolean;
                get signatures(): SignatureDescriptor.Data[];
                set signatures(value: SignatureDescriptor.Data[]);
                static fromObject(data: {
                    bitarray?: ReturnType<typeof dependency_1.cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.toObject>;
                    signatures?: ReturnType<typeof SignatureDescriptor.Data.prototype.toObject>[];
                }): Multi;
                toObject(): {
                    bitarray?: ReturnType<typeof dependency_1.cosmos.crypto.multisig.v1beta1.CompactBitArray.prototype.toObject>;
                    signatures?: ReturnType<typeof SignatureDescriptor.Data.prototype.toObject>[];
                };
                serialize(): Uint8Array;
                serialize(w: pb_1.BinaryWriter): void;
                static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Multi;
                serializeBinary(): Uint8Array;
                static deserializeBinary(bytes: Uint8Array): Multi;
            }
        }
    }
}
//# sourceMappingURL=signing.d.ts.map