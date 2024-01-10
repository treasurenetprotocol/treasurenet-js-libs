/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.1
 * source: ibc/applications/interchain_accounts/v1/packet.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../google/protobuf/any";
import * as dependency_2 from "./../../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace ibc.applications.interchain_accounts.v1 {
    export enum Type {
        TYPE_UNSPECIFIED = 0,
        TYPE_EXECUTE_TX = 1
    }
    export class InterchainAccountPacketData extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            type?: Type;
            data?: Uint8Array;
            memo?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("type" in data && data.type != undefined) {
                    this.type = data.type;
                }
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
                if ("memo" in data && data.memo != undefined) {
                    this.memo = data.memo;
                }
            }
        }
        get type() {
            return pb_1.Message.getFieldWithDefault(this, 1, Type.TYPE_UNSPECIFIED) as Type;
        }
        set type(value: Type) {
            pb_1.Message.setField(this, 1, value);
        }
        get data() {
            return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0)) as Uint8Array;
        }
        set data(value: Uint8Array) {
            pb_1.Message.setField(this, 2, value);
        }
        get memo() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set memo(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            type?: Type;
            data?: Uint8Array;
            memo?: string;
        }): InterchainAccountPacketData {
            const message = new InterchainAccountPacketData({});
            if (data.type != null) {
                message.type = data.type;
            }
            if (data.data != null) {
                message.data = data.data;
            }
            if (data.memo != null) {
                message.memo = data.memo;
            }
            return message;
        }
        toObject() {
            const data: {
                type?: Type;
                data?: Uint8Array;
                memo?: string;
            } = {};
            if (this.type != null) {
                data.type = this.type;
            }
            if (this.data != null) {
                data.data = this.data;
            }
            if (this.memo != null) {
                data.memo = this.memo;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.type != Type.TYPE_UNSPECIFIED)
                writer.writeEnum(1, this.type);
            if (this.data.length)
                writer.writeBytes(2, this.data);
            if (this.memo.length)
                writer.writeString(3, this.memo);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): InterchainAccountPacketData {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new InterchainAccountPacketData();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.type = reader.readEnum();
                        break;
                    case 2:
                        message.data = reader.readBytes();
                        break;
                    case 3:
                        message.memo = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): InterchainAccountPacketData {
            return InterchainAccountPacketData.deserialize(bytes);
        }
    }
    export class CosmosTx extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            messages?: dependency_1.google.protobuf.Any[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("messages" in data && data.messages != undefined) {
                    this.messages = data.messages;
                }
            }
        }
        get messages() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.google.protobuf.Any, 1) as dependency_1.google.protobuf.Any[];
        }
        set messages(value: dependency_1.google.protobuf.Any[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            messages?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>[];
        }): CosmosTx {
            const message = new CosmosTx({});
            if (data.messages != null) {
                message.messages = data.messages.map(item => dependency_1.google.protobuf.Any.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                messages?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>[];
            } = {};
            if (this.messages != null) {
                data.messages = this.messages.map((item: dependency_1.google.protobuf.Any) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.messages.length)
                writer.writeRepeatedMessage(1, this.messages, (item: dependency_1.google.protobuf.Any) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CosmosTx {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CosmosTx();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.messages, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.google.protobuf.Any.deserialize(reader), dependency_1.google.protobuf.Any));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): CosmosTx {
            return CosmosTx.deserialize(bytes);
        }
    }
}
