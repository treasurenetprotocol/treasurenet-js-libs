/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.1
 * source: ethermint/types/v1/indexer.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace ethermint.types.v1 {
    export class TxResult extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            height?: number;
            tx_index?: number;
            msg_index?: number;
            eth_tx_index?: number;
            failed?: boolean;
            gas_used?: number;
            cumulative_gas_used?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("height" in data && data.height != undefined) {
                    this.height = data.height;
                }
                if ("tx_index" in data && data.tx_index != undefined) {
                    this.tx_index = data.tx_index;
                }
                if ("msg_index" in data && data.msg_index != undefined) {
                    this.msg_index = data.msg_index;
                }
                if ("eth_tx_index" in data && data.eth_tx_index != undefined) {
                    this.eth_tx_index = data.eth_tx_index;
                }
                if ("failed" in data && data.failed != undefined) {
                    this.failed = data.failed;
                }
                if ("gas_used" in data && data.gas_used != undefined) {
                    this.gas_used = data.gas_used;
                }
                if ("cumulative_gas_used" in data && data.cumulative_gas_used != undefined) {
                    this.cumulative_gas_used = data.cumulative_gas_used;
                }
            }
        }
        get height() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set height(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get tx_index() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set tx_index(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get msg_index() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set msg_index(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get eth_tx_index() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set eth_tx_index(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get failed() {
            return pb_1.Message.getFieldWithDefault(this, 5, false) as boolean;
        }
        set failed(value: boolean) {
            pb_1.Message.setField(this, 5, value);
        }
        get gas_used() {
            return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
        }
        set gas_used(value: number) {
            pb_1.Message.setField(this, 6, value);
        }
        get cumulative_gas_used() {
            return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
        }
        set cumulative_gas_used(value: number) {
            pb_1.Message.setField(this, 7, value);
        }
        static fromObject(data: {
            height?: number;
            tx_index?: number;
            msg_index?: number;
            eth_tx_index?: number;
            failed?: boolean;
            gas_used?: number;
            cumulative_gas_used?: number;
        }): TxResult {
            const message = new TxResult({});
            if (data.height != null) {
                message.height = data.height;
            }
            if (data.tx_index != null) {
                message.tx_index = data.tx_index;
            }
            if (data.msg_index != null) {
                message.msg_index = data.msg_index;
            }
            if (data.eth_tx_index != null) {
                message.eth_tx_index = data.eth_tx_index;
            }
            if (data.failed != null) {
                message.failed = data.failed;
            }
            if (data.gas_used != null) {
                message.gas_used = data.gas_used;
            }
            if (data.cumulative_gas_used != null) {
                message.cumulative_gas_used = data.cumulative_gas_used;
            }
            return message;
        }
        toObject() {
            const data: {
                height?: number;
                tx_index?: number;
                msg_index?: number;
                eth_tx_index?: number;
                failed?: boolean;
                gas_used?: number;
                cumulative_gas_used?: number;
            } = {};
            if (this.height != null) {
                data.height = this.height;
            }
            if (this.tx_index != null) {
                data.tx_index = this.tx_index;
            }
            if (this.msg_index != null) {
                data.msg_index = this.msg_index;
            }
            if (this.eth_tx_index != null) {
                data.eth_tx_index = this.eth_tx_index;
            }
            if (this.failed != null) {
                data.failed = this.failed;
            }
            if (this.gas_used != null) {
                data.gas_used = this.gas_used;
            }
            if (this.cumulative_gas_used != null) {
                data.cumulative_gas_used = this.cumulative_gas_used;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.height != 0)
                writer.writeInt64(1, this.height);
            if (this.tx_index != 0)
                writer.writeUint32(2, this.tx_index);
            if (this.msg_index != 0)
                writer.writeUint32(3, this.msg_index);
            if (this.eth_tx_index != 0)
                writer.writeInt32(4, this.eth_tx_index);
            if (this.failed != false)
                writer.writeBool(5, this.failed);
            if (this.gas_used != 0)
                writer.writeUint64(6, this.gas_used);
            if (this.cumulative_gas_used != 0)
                writer.writeUint64(7, this.cumulative_gas_used);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TxResult {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TxResult();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.height = reader.readInt64();
                        break;
                    case 2:
                        message.tx_index = reader.readUint32();
                        break;
                    case 3:
                        message.msg_index = reader.readUint32();
                        break;
                    case 4:
                        message.eth_tx_index = reader.readInt32();
                        break;
                    case 5:
                        message.failed = reader.readBool();
                        break;
                    case 6:
                        message.gas_used = reader.readUint64();
                        break;
                    case 7:
                        message.cumulative_gas_used = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): TxResult {
            return TxResult.deserialize(bytes);
        }
    }
}
