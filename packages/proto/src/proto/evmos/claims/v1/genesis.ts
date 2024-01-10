/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.1
 * source: evmos/claims/v1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../../google/protobuf/duration";
import * as dependency_3 from "./../../../google/protobuf/timestamp";
import * as dependency_4 from "./claims";
import * as pb_1 from "google-protobuf";
export namespace evmos.claims.v1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            params?: Params;
            claims_records?: dependency_4.evmos.claims.v1.ClaimsRecordAddress[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
                if ("claims_records" in data && data.claims_records != undefined) {
                    this.claims_records = data.claims_records;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, Params, 1) as Params;
        }
        set params(value: Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_params() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get claims_records() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.evmos.claims.v1.ClaimsRecordAddress, 2) as dependency_4.evmos.claims.v1.ClaimsRecordAddress[];
        }
        set claims_records(value: dependency_4.evmos.claims.v1.ClaimsRecordAddress[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            params?: ReturnType<typeof Params.prototype.toObject>;
            claims_records?: ReturnType<typeof dependency_4.evmos.claims.v1.ClaimsRecordAddress.prototype.toObject>[];
        }): GenesisState {
            const message = new GenesisState({});
            if (data.params != null) {
                message.params = Params.fromObject(data.params);
            }
            if (data.claims_records != null) {
                message.claims_records = data.claims_records.map(item => dependency_4.evmos.claims.v1.ClaimsRecordAddress.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof Params.prototype.toObject>;
                claims_records?: ReturnType<typeof dependency_4.evmos.claims.v1.ClaimsRecordAddress.prototype.toObject>[];
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            if (this.claims_records != null) {
                data.claims_records = this.claims_records.map((item: dependency_4.evmos.claims.v1.ClaimsRecordAddress) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_params)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (this.claims_records.length)
                writer.writeRepeatedMessage(2, this.claims_records, (item: dependency_4.evmos.claims.v1.ClaimsRecordAddress) => item.serialize(writer));
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
                        reader.readMessage(message.params, () => message.params = Params.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.claims_records, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_4.evmos.claims.v1.ClaimsRecordAddress.deserialize(reader), dependency_4.evmos.claims.v1.ClaimsRecordAddress));
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
    export class Params extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            enable_claims?: boolean;
            airdrop_start_time?: dependency_3.google.protobuf.Timestamp;
            duration_until_decay?: dependency_2.google.protobuf.Duration;
            duration_of_decay?: dependency_2.google.protobuf.Duration;
            claims_denom?: string;
            authorized_channels?: string[];
            evm_channels?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [6, 7], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("enable_claims" in data && data.enable_claims != undefined) {
                    this.enable_claims = data.enable_claims;
                }
                if ("airdrop_start_time" in data && data.airdrop_start_time != undefined) {
                    this.airdrop_start_time = data.airdrop_start_time;
                }
                if ("duration_until_decay" in data && data.duration_until_decay != undefined) {
                    this.duration_until_decay = data.duration_until_decay;
                }
                if ("duration_of_decay" in data && data.duration_of_decay != undefined) {
                    this.duration_of_decay = data.duration_of_decay;
                }
                if ("claims_denom" in data && data.claims_denom != undefined) {
                    this.claims_denom = data.claims_denom;
                }
                if ("authorized_channels" in data && data.authorized_channels != undefined) {
                    this.authorized_channels = data.authorized_channels;
                }
                if ("evm_channels" in data && data.evm_channels != undefined) {
                    this.evm_channels = data.evm_channels;
                }
            }
        }
        get enable_claims() {
            return pb_1.Message.getFieldWithDefault(this, 1, false) as boolean;
        }
        set enable_claims(value: boolean) {
            pb_1.Message.setField(this, 1, value);
        }
        get airdrop_start_time() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 2) as dependency_3.google.protobuf.Timestamp;
        }
        set airdrop_start_time(value: dependency_3.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_airdrop_start_time() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get duration_until_decay() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Duration, 3) as dependency_2.google.protobuf.Duration;
        }
        set duration_until_decay(value: dependency_2.google.protobuf.Duration) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_duration_until_decay() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get duration_of_decay() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Duration, 4) as dependency_2.google.protobuf.Duration;
        }
        set duration_of_decay(value: dependency_2.google.protobuf.Duration) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_duration_of_decay() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get claims_denom() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set claims_denom(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get authorized_channels() {
            return pb_1.Message.getFieldWithDefault(this, 6, []) as string[];
        }
        set authorized_channels(value: string[]) {
            pb_1.Message.setField(this, 6, value);
        }
        get evm_channels() {
            return pb_1.Message.getFieldWithDefault(this, 7, []) as string[];
        }
        set evm_channels(value: string[]) {
            pb_1.Message.setField(this, 7, value);
        }
        static fromObject(data: {
            enable_claims?: boolean;
            airdrop_start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            duration_until_decay?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
            duration_of_decay?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
            claims_denom?: string;
            authorized_channels?: string[];
            evm_channels?: string[];
        }): Params {
            const message = new Params({});
            if (data.enable_claims != null) {
                message.enable_claims = data.enable_claims;
            }
            if (data.airdrop_start_time != null) {
                message.airdrop_start_time = dependency_3.google.protobuf.Timestamp.fromObject(data.airdrop_start_time);
            }
            if (data.duration_until_decay != null) {
                message.duration_until_decay = dependency_2.google.protobuf.Duration.fromObject(data.duration_until_decay);
            }
            if (data.duration_of_decay != null) {
                message.duration_of_decay = dependency_2.google.protobuf.Duration.fromObject(data.duration_of_decay);
            }
            if (data.claims_denom != null) {
                message.claims_denom = data.claims_denom;
            }
            if (data.authorized_channels != null) {
                message.authorized_channels = data.authorized_channels;
            }
            if (data.evm_channels != null) {
                message.evm_channels = data.evm_channels;
            }
            return message;
        }
        toObject() {
            const data: {
                enable_claims?: boolean;
                airdrop_start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
                duration_until_decay?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
                duration_of_decay?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
                claims_denom?: string;
                authorized_channels?: string[];
                evm_channels?: string[];
            } = {};
            if (this.enable_claims != null) {
                data.enable_claims = this.enable_claims;
            }
            if (this.airdrop_start_time != null) {
                data.airdrop_start_time = this.airdrop_start_time.toObject();
            }
            if (this.duration_until_decay != null) {
                data.duration_until_decay = this.duration_until_decay.toObject();
            }
            if (this.duration_of_decay != null) {
                data.duration_of_decay = this.duration_of_decay.toObject();
            }
            if (this.claims_denom != null) {
                data.claims_denom = this.claims_denom;
            }
            if (this.authorized_channels != null) {
                data.authorized_channels = this.authorized_channels;
            }
            if (this.evm_channels != null) {
                data.evm_channels = this.evm_channels;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.enable_claims != false)
                writer.writeBool(1, this.enable_claims);
            if (this.has_airdrop_start_time)
                writer.writeMessage(2, this.airdrop_start_time, () => this.airdrop_start_time.serialize(writer));
            if (this.has_duration_until_decay)
                writer.writeMessage(3, this.duration_until_decay, () => this.duration_until_decay.serialize(writer));
            if (this.has_duration_of_decay)
                writer.writeMessage(4, this.duration_of_decay, () => this.duration_of_decay.serialize(writer));
            if (this.claims_denom.length)
                writer.writeString(5, this.claims_denom);
            if (this.authorized_channels.length)
                writer.writeRepeatedString(6, this.authorized_channels);
            if (this.evm_channels.length)
                writer.writeRepeatedString(7, this.evm_channels);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Params();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.enable_claims = reader.readBool();
                        break;
                    case 2:
                        reader.readMessage(message.airdrop_start_time, () => message.airdrop_start_time = dependency_3.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.duration_until_decay, () => message.duration_until_decay = dependency_2.google.protobuf.Duration.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.duration_of_decay, () => message.duration_of_decay = dependency_2.google.protobuf.Duration.deserialize(reader));
                        break;
                    case 5:
                        message.claims_denom = reader.readString();
                        break;
                    case 6:
                        pb_1.Message.addToRepeatedField(message, 6, reader.readString());
                        break;
                    case 7:
                        pb_1.Message.addToRepeatedField(message, 7, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Params {
            return Params.deserialize(bytes);
        }
    }
}
