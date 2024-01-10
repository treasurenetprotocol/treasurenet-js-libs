/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.1
 * source: cosmos/capability/v1beta1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./capability";
import * as pb_1 from "google-protobuf";
export namespace cosmos.capability.v1beta1 {
    export class GenesisOwners extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            index?: number;
            index_owners?: dependency_2.cosmos.capability.v1beta1.CapabilityOwners;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("index" in data && data.index != undefined) {
                    this.index = data.index;
                }
                if ("index_owners" in data && data.index_owners != undefined) {
                    this.index_owners = data.index_owners;
                }
            }
        }
        get index() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set index(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get index_owners() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.capability.v1beta1.CapabilityOwners, 2) as dependency_2.cosmos.capability.v1beta1.CapabilityOwners;
        }
        set index_owners(value: dependency_2.cosmos.capability.v1beta1.CapabilityOwners) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_index_owners() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            index?: number;
            index_owners?: ReturnType<typeof dependency_2.cosmos.capability.v1beta1.CapabilityOwners.prototype.toObject>;
        }): GenesisOwners {
            const message = new GenesisOwners({});
            if (data.index != null) {
                message.index = data.index;
            }
            if (data.index_owners != null) {
                message.index_owners = dependency_2.cosmos.capability.v1beta1.CapabilityOwners.fromObject(data.index_owners);
            }
            return message;
        }
        toObject() {
            const data: {
                index?: number;
                index_owners?: ReturnType<typeof dependency_2.cosmos.capability.v1beta1.CapabilityOwners.prototype.toObject>;
            } = {};
            if (this.index != null) {
                data.index = this.index;
            }
            if (this.index_owners != null) {
                data.index_owners = this.index_owners.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.index != 0)
                writer.writeUint64(1, this.index);
            if (this.has_index_owners)
                writer.writeMessage(2, this.index_owners, () => this.index_owners.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisOwners {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisOwners();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.index = reader.readUint64();
                        break;
                    case 2:
                        reader.readMessage(message.index_owners, () => message.index_owners = dependency_2.cosmos.capability.v1beta1.CapabilityOwners.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenesisOwners {
            return GenesisOwners.deserialize(bytes);
        }
    }
    export class GenesisState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            index?: number;
            owners?: GenesisOwners[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("index" in data && data.index != undefined) {
                    this.index = data.index;
                }
                if ("owners" in data && data.owners != undefined) {
                    this.owners = data.owners;
                }
            }
        }
        get index() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set index(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get owners() {
            return pb_1.Message.getRepeatedWrapperField(this, GenesisOwners, 2) as GenesisOwners[];
        }
        set owners(value: GenesisOwners[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            index?: number;
            owners?: ReturnType<typeof GenesisOwners.prototype.toObject>[];
        }): GenesisState {
            const message = new GenesisState({});
            if (data.index != null) {
                message.index = data.index;
            }
            if (data.owners != null) {
                message.owners = data.owners.map(item => GenesisOwners.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                index?: number;
                owners?: ReturnType<typeof GenesisOwners.prototype.toObject>[];
            } = {};
            if (this.index != null) {
                data.index = this.index;
            }
            if (this.owners != null) {
                data.owners = this.owners.map((item: GenesisOwners) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.index != 0)
                writer.writeUint64(1, this.index);
            if (this.owners.length)
                writer.writeRepeatedMessage(2, this.owners, (item: GenesisOwners) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.index = reader.readUint64();
                        break;
                    case 2:
                        reader.readMessage(message.owners, () => pb_1.Message.addToRepeatedWrapperField(message, 2, GenesisOwners.deserialize(reader), GenesisOwners));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenesisState {
            return GenesisState.deserialize(bytes);
        }
    }
}
