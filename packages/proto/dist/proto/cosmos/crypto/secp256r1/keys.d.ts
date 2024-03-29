import * as pb_1 from "google-protobuf";
export declare namespace cosmos.crypto.secp256r1 {
    class PubKey extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            key?: Uint8Array;
        });
        get key(): Uint8Array;
        set key(value: Uint8Array);
        static fromObject(data: {
            key?: Uint8Array;
        }): PubKey;
        toObject(): {
            key?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PubKey;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): PubKey;
    }
    class PrivKey extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            secret?: Uint8Array;
        });
        get secret(): Uint8Array;
        set secret(value: Uint8Array);
        static fromObject(data: {
            secret?: Uint8Array;
        }): PrivKey;
        toObject(): {
            secret?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PrivKey;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): PrivKey;
    }
}
//# sourceMappingURL=keys.d.ts.map