/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.1
 * source: tendermint/crypto/keys.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace tendermint.crypto {
    export class PublicKey extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2]];
        constructor(data?: any[] | ({} & (({
            ed25519?: Uint8Array;
            secp256k1?: never;
        } | {
            ed25519?: never;
            secp256k1?: Uint8Array;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("ed25519" in data && data.ed25519 != undefined) {
                    this.ed25519 = data.ed25519;
                }
                if ("secp256k1" in data && data.secp256k1 != undefined) {
                    this.secp256k1 = data.secp256k1;
                }
            }
        }
        get ed25519() {
            return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
        }
        set ed25519(value: Uint8Array) {
            pb_1.Message.setOneofField(this, 1, this.#one_of_decls[0], value);
        }
        get has_ed25519() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get secp256k1() {
            return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0)) as Uint8Array;
        }
        set secp256k1(value: Uint8Array) {
            pb_1.Message.setOneofField(this, 2, this.#one_of_decls[0], value);
        }
        get has_secp256k1() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get sum() {
            const cases: {
                [index: number]: "none" | "ed25519" | "secp256k1";
            } = {
                0: "none",
                1: "ed25519",
                2: "secp256k1"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
        }
        static fromObject(data: {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
        }): PublicKey {
            const message = new PublicKey({});
            if (data.ed25519 != null) {
                message.ed25519 = data.ed25519;
            }
            if (data.secp256k1 != null) {
                message.secp256k1 = data.secp256k1;
            }
            return message;
        }
        toObject() {
            const data: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } = {};
            if (this.ed25519 != null) {
                data.ed25519 = this.ed25519;
            }
            if (this.secp256k1 != null) {
                data.secp256k1 = this.secp256k1;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_ed25519)
                writer.writeBytes(1, this.ed25519);
            if (this.has_secp256k1)
                writer.writeBytes(2, this.secp256k1);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PublicKey {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PublicKey();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.ed25519 = reader.readBytes();
                        break;
                    case 2:
                        message.secp256k1 = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PublicKey {
            return PublicKey.deserialize(bytes);
        }
    }
}