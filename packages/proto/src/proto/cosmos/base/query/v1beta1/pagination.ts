/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.1
 * source: cosmos/base/query/v1beta1/pagination.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace cosmos.base.query.v1beta1 {
    export class PageRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            count_total?: boolean;
            reverse?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("key" in data && data.key != undefined) {
                    this.key = data.key;
                }
                if ("offset" in data && data.offset != undefined) {
                    this.offset = data.offset;
                }
                if ("limit" in data && data.limit != undefined) {
                    this.limit = data.limit;
                }
                if ("count_total" in data && data.count_total != undefined) {
                    this.count_total = data.count_total;
                }
                if ("reverse" in data && data.reverse != undefined) {
                    this.reverse = data.reverse;
                }
            }
        }
        get key() {
            return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
        }
        set key(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        get offset() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set offset(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get limit() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set limit(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get count_total() {
            return pb_1.Message.getFieldWithDefault(this, 4, false) as boolean;
        }
        set count_total(value: boolean) {
            pb_1.Message.setField(this, 4, value);
        }
        get reverse() {
            return pb_1.Message.getFieldWithDefault(this, 5, false) as boolean;
        }
        set reverse(value: boolean) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            count_total?: boolean;
            reverse?: boolean;
        }): PageRequest {
            const message = new PageRequest({});
            if (data.key != null) {
                message.key = data.key;
            }
            if (data.offset != null) {
                message.offset = data.offset;
            }
            if (data.limit != null) {
                message.limit = data.limit;
            }
            if (data.count_total != null) {
                message.count_total = data.count_total;
            }
            if (data.reverse != null) {
                message.reverse = data.reverse;
            }
            return message;
        }
        toObject() {
            const data: {
                key?: Uint8Array;
                offset?: number;
                limit?: number;
                count_total?: boolean;
                reverse?: boolean;
            } = {};
            if (this.key != null) {
                data.key = this.key;
            }
            if (this.offset != null) {
                data.offset = this.offset;
            }
            if (this.limit != null) {
                data.limit = this.limit;
            }
            if (this.count_total != null) {
                data.count_total = this.count_total;
            }
            if (this.reverse != null) {
                data.reverse = this.reverse;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.key.length)
                writer.writeBytes(1, this.key);
            if (this.offset != 0)
                writer.writeUint64(2, this.offset);
            if (this.limit != 0)
                writer.writeUint64(3, this.limit);
            if (this.count_total != false)
                writer.writeBool(4, this.count_total);
            if (this.reverse != false)
                writer.writeBool(5, this.reverse);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PageRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PageRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.key = reader.readBytes();
                        break;
                    case 2:
                        message.offset = reader.readUint64();
                        break;
                    case 3:
                        message.limit = reader.readUint64();
                        break;
                    case 4:
                        message.count_total = reader.readBool();
                        break;
                    case 5:
                        message.reverse = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PageRequest {
            return PageRequest.deserialize(bytes);
        }
    }
    export class PageResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            next_key?: Uint8Array;
            total?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("next_key" in data && data.next_key != undefined) {
                    this.next_key = data.next_key;
                }
                if ("total" in data && data.total != undefined) {
                    this.total = data.total;
                }
            }
        }
        get next_key() {
            return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
        }
        set next_key(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        get total() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set total(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            next_key?: Uint8Array;
            total?: number;
        }): PageResponse {
            const message = new PageResponse({});
            if (data.next_key != null) {
                message.next_key = data.next_key;
            }
            if (data.total != null) {
                message.total = data.total;
            }
            return message;
        }
        toObject() {
            const data: {
                next_key?: Uint8Array;
                total?: number;
            } = {};
            if (this.next_key != null) {
                data.next_key = this.next_key;
            }
            if (this.total != null) {
                data.total = this.total;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.next_key.length)
                writer.writeBytes(1, this.next_key);
            if (this.total != 0)
                writer.writeUint64(2, this.total);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PageResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PageResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.next_key = reader.readBytes();
                        break;
                    case 2:
                        message.total = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PageResponse {
            return PageResponse.deserialize(bytes);
        }
    }
}
