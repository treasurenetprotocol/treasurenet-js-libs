/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.1
 * source: gravity/v1/batch.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../gogoproto/gogo";
import * as dependency_2 from "./attestation";
import * as pb_1 from "google-protobuf";
export namespace gravity.v1 {
    export class OutgoingTxBatch extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            batch_nonce?: number;
            batch_timeout?: number;
            transactions?: OutgoingTransferTx[];
            token_contract?: string;
            block?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("batch_nonce" in data && data.batch_nonce != undefined) {
                    this.batch_nonce = data.batch_nonce;
                }
                if ("batch_timeout" in data && data.batch_timeout != undefined) {
                    this.batch_timeout = data.batch_timeout;
                }
                if ("transactions" in data && data.transactions != undefined) {
                    this.transactions = data.transactions;
                }
                if ("token_contract" in data && data.token_contract != undefined) {
                    this.token_contract = data.token_contract;
                }
                if ("block" in data && data.block != undefined) {
                    this.block = data.block;
                }
            }
        }
        get batch_nonce() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set batch_nonce(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get batch_timeout() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set batch_timeout(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get transactions() {
            return pb_1.Message.getRepeatedWrapperField(this, OutgoingTransferTx, 3) as OutgoingTransferTx[];
        }
        set transactions(value: OutgoingTransferTx[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get token_contract() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set token_contract(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get block() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set block(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            batch_nonce?: number;
            batch_timeout?: number;
            transactions?: ReturnType<typeof OutgoingTransferTx.prototype.toObject>[];
            token_contract?: string;
            block?: number;
        }): OutgoingTxBatch {
            const message = new OutgoingTxBatch({});
            if (data.batch_nonce != null) {
                message.batch_nonce = data.batch_nonce;
            }
            if (data.batch_timeout != null) {
                message.batch_timeout = data.batch_timeout;
            }
            if (data.transactions != null) {
                message.transactions = data.transactions.map(item => OutgoingTransferTx.fromObject(item));
            }
            if (data.token_contract != null) {
                message.token_contract = data.token_contract;
            }
            if (data.block != null) {
                message.block = data.block;
            }
            return message;
        }
        toObject() {
            const data: {
                batch_nonce?: number;
                batch_timeout?: number;
                transactions?: ReturnType<typeof OutgoingTransferTx.prototype.toObject>[];
                token_contract?: string;
                block?: number;
            } = {};
            if (this.batch_nonce != null) {
                data.batch_nonce = this.batch_nonce;
            }
            if (this.batch_timeout != null) {
                data.batch_timeout = this.batch_timeout;
            }
            if (this.transactions != null) {
                data.transactions = this.transactions.map((item: OutgoingTransferTx) => item.toObject());
            }
            if (this.token_contract != null) {
                data.token_contract = this.token_contract;
            }
            if (this.block != null) {
                data.block = this.block;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.batch_nonce != 0)
                writer.writeUint64(1, this.batch_nonce);
            if (this.batch_timeout != 0)
                writer.writeUint64(2, this.batch_timeout);
            if (this.transactions.length)
                writer.writeRepeatedMessage(3, this.transactions, (item: OutgoingTransferTx) => item.serialize(writer));
            if (this.token_contract.length)
                writer.writeString(4, this.token_contract);
            if (this.block != 0)
                writer.writeUint64(5, this.block);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OutgoingTxBatch {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OutgoingTxBatch();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.batch_nonce = reader.readUint64();
                        break;
                    case 2:
                        message.batch_timeout = reader.readUint64();
                        break;
                    case 3:
                        reader.readMessage(message.transactions, () => pb_1.Message.addToRepeatedWrapperField(message, 3, OutgoingTransferTx.deserialize(reader), OutgoingTransferTx));
                        break;
                    case 4:
                        message.token_contract = reader.readString();
                        break;
                    case 5:
                        message.block = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): OutgoingTxBatch {
            return OutgoingTxBatch.deserialize(bytes);
        }
    }
    export class OutgoingTransferTx extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: number;
            sender?: string;
            dest_address?: string;
            erc20_token?: dependency_2.gravity.v1.ERC20Token;
            erc20_fee?: dependency_2.gravity.v1.ERC20Token;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("sender" in data && data.sender != undefined) {
                    this.sender = data.sender;
                }
                if ("dest_address" in data && data.dest_address != undefined) {
                    this.dest_address = data.dest_address;
                }
                if ("erc20_token" in data && data.erc20_token != undefined) {
                    this.erc20_token = data.erc20_token;
                }
                if ("erc20_fee" in data && data.erc20_fee != undefined) {
                    this.erc20_fee = data.erc20_fee;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get sender() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set sender(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get dest_address() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set dest_address(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get erc20_token() {
            return pb_1.Message.getWrapperField(this, dependency_2.gravity.v1.ERC20Token, 4) as dependency_2.gravity.v1.ERC20Token;
        }
        set erc20_token(value: dependency_2.gravity.v1.ERC20Token) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_erc20_token() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get erc20_fee() {
            return pb_1.Message.getWrapperField(this, dependency_2.gravity.v1.ERC20Token, 5) as dependency_2.gravity.v1.ERC20Token;
        }
        set erc20_fee(value: dependency_2.gravity.v1.ERC20Token) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get has_erc20_fee() {
            return pb_1.Message.getField(this, 5) != null;
        }
        static fromObject(data: {
            id?: number;
            sender?: string;
            dest_address?: string;
            erc20_token?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>;
            erc20_fee?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>;
        }): OutgoingTransferTx {
            const message = new OutgoingTransferTx({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.sender != null) {
                message.sender = data.sender;
            }
            if (data.dest_address != null) {
                message.dest_address = data.dest_address;
            }
            if (data.erc20_token != null) {
                message.erc20_token = dependency_2.gravity.v1.ERC20Token.fromObject(data.erc20_token);
            }
            if (data.erc20_fee != null) {
                message.erc20_fee = dependency_2.gravity.v1.ERC20Token.fromObject(data.erc20_fee);
            }
            return message;
        }
        toObject() {
            const data: {
                id?: number;
                sender?: string;
                dest_address?: string;
                erc20_token?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>;
                erc20_fee?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.sender != null) {
                data.sender = this.sender;
            }
            if (this.dest_address != null) {
                data.dest_address = this.dest_address;
            }
            if (this.erc20_token != null) {
                data.erc20_token = this.erc20_token.toObject();
            }
            if (this.erc20_fee != null) {
                data.erc20_fee = this.erc20_fee.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id != 0)
                writer.writeUint64(1, this.id);
            if (this.sender.length)
                writer.writeString(2, this.sender);
            if (this.dest_address.length)
                writer.writeString(3, this.dest_address);
            if (this.has_erc20_token)
                writer.writeMessage(4, this.erc20_token, () => this.erc20_token.serialize(writer));
            if (this.has_erc20_fee)
                writer.writeMessage(5, this.erc20_fee, () => this.erc20_fee.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OutgoingTransferTx {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OutgoingTransferTx();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readUint64();
                        break;
                    case 2:
                        message.sender = reader.readString();
                        break;
                    case 3:
                        message.dest_address = reader.readString();
                        break;
                    case 4:
                        reader.readMessage(message.erc20_token, () => message.erc20_token = dependency_2.gravity.v1.ERC20Token.deserialize(reader));
                        break;
                    case 5:
                        reader.readMessage(message.erc20_fee, () => message.erc20_fee = dependency_2.gravity.v1.ERC20Token.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): OutgoingTransferTx {
            return OutgoingTransferTx.deserialize(bytes);
        }
    }
    export class OutgoingLogicCall extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            transfers?: dependency_2.gravity.v1.ERC20Token[];
            fees?: dependency_2.gravity.v1.ERC20Token[];
            logic_contract_address?: string;
            payload?: Uint8Array;
            timeout?: number;
            invalidation_id?: Uint8Array;
            invalidation_nonce?: number;
            block?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("transfers" in data && data.transfers != undefined) {
                    this.transfers = data.transfers;
                }
                if ("fees" in data && data.fees != undefined) {
                    this.fees = data.fees;
                }
                if ("logic_contract_address" in data && data.logic_contract_address != undefined) {
                    this.logic_contract_address = data.logic_contract_address;
                }
                if ("payload" in data && data.payload != undefined) {
                    this.payload = data.payload;
                }
                if ("timeout" in data && data.timeout != undefined) {
                    this.timeout = data.timeout;
                }
                if ("invalidation_id" in data && data.invalidation_id != undefined) {
                    this.invalidation_id = data.invalidation_id;
                }
                if ("invalidation_nonce" in data && data.invalidation_nonce != undefined) {
                    this.invalidation_nonce = data.invalidation_nonce;
                }
                if ("block" in data && data.block != undefined) {
                    this.block = data.block;
                }
            }
        }
        get transfers() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.gravity.v1.ERC20Token, 1) as dependency_2.gravity.v1.ERC20Token[];
        }
        set transfers(value: dependency_2.gravity.v1.ERC20Token[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get fees() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.gravity.v1.ERC20Token, 2) as dependency_2.gravity.v1.ERC20Token[];
        }
        set fees(value: dependency_2.gravity.v1.ERC20Token[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get logic_contract_address() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set logic_contract_address(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get payload() {
            return pb_1.Message.getFieldWithDefault(this, 4, new Uint8Array(0)) as Uint8Array;
        }
        set payload(value: Uint8Array) {
            pb_1.Message.setField(this, 4, value);
        }
        get timeout() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set timeout(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        get invalidation_id() {
            return pb_1.Message.getFieldWithDefault(this, 6, new Uint8Array(0)) as Uint8Array;
        }
        set invalidation_id(value: Uint8Array) {
            pb_1.Message.setField(this, 6, value);
        }
        get invalidation_nonce() {
            return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
        }
        set invalidation_nonce(value: number) {
            pb_1.Message.setField(this, 7, value);
        }
        get block() {
            return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
        }
        set block(value: number) {
            pb_1.Message.setField(this, 8, value);
        }
        static fromObject(data: {
            transfers?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>[];
            fees?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>[];
            logic_contract_address?: string;
            payload?: Uint8Array;
            timeout?: number;
            invalidation_id?: Uint8Array;
            invalidation_nonce?: number;
            block?: number;
        }): OutgoingLogicCall {
            const message = new OutgoingLogicCall({});
            if (data.transfers != null) {
                message.transfers = data.transfers.map(item => dependency_2.gravity.v1.ERC20Token.fromObject(item));
            }
            if (data.fees != null) {
                message.fees = data.fees.map(item => dependency_2.gravity.v1.ERC20Token.fromObject(item));
            }
            if (data.logic_contract_address != null) {
                message.logic_contract_address = data.logic_contract_address;
            }
            if (data.payload != null) {
                message.payload = data.payload;
            }
            if (data.timeout != null) {
                message.timeout = data.timeout;
            }
            if (data.invalidation_id != null) {
                message.invalidation_id = data.invalidation_id;
            }
            if (data.invalidation_nonce != null) {
                message.invalidation_nonce = data.invalidation_nonce;
            }
            if (data.block != null) {
                message.block = data.block;
            }
            return message;
        }
        toObject() {
            const data: {
                transfers?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>[];
                fees?: ReturnType<typeof dependency_2.gravity.v1.ERC20Token.prototype.toObject>[];
                logic_contract_address?: string;
                payload?: Uint8Array;
                timeout?: number;
                invalidation_id?: Uint8Array;
                invalidation_nonce?: number;
                block?: number;
            } = {};
            if (this.transfers != null) {
                data.transfers = this.transfers.map((item: dependency_2.gravity.v1.ERC20Token) => item.toObject());
            }
            if (this.fees != null) {
                data.fees = this.fees.map((item: dependency_2.gravity.v1.ERC20Token) => item.toObject());
            }
            if (this.logic_contract_address != null) {
                data.logic_contract_address = this.logic_contract_address;
            }
            if (this.payload != null) {
                data.payload = this.payload;
            }
            if (this.timeout != null) {
                data.timeout = this.timeout;
            }
            if (this.invalidation_id != null) {
                data.invalidation_id = this.invalidation_id;
            }
            if (this.invalidation_nonce != null) {
                data.invalidation_nonce = this.invalidation_nonce;
            }
            if (this.block != null) {
                data.block = this.block;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.transfers.length)
                writer.writeRepeatedMessage(1, this.transfers, (item: dependency_2.gravity.v1.ERC20Token) => item.serialize(writer));
            if (this.fees.length)
                writer.writeRepeatedMessage(2, this.fees, (item: dependency_2.gravity.v1.ERC20Token) => item.serialize(writer));
            if (this.logic_contract_address.length)
                writer.writeString(3, this.logic_contract_address);
            if (this.payload.length)
                writer.writeBytes(4, this.payload);
            if (this.timeout != 0)
                writer.writeUint64(5, this.timeout);
            if (this.invalidation_id.length)
                writer.writeBytes(6, this.invalidation_id);
            if (this.invalidation_nonce != 0)
                writer.writeUint64(7, this.invalidation_nonce);
            if (this.block != 0)
                writer.writeUint64(8, this.block);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OutgoingLogicCall {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OutgoingLogicCall();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.transfers, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.gravity.v1.ERC20Token.deserialize(reader), dependency_2.gravity.v1.ERC20Token));
                        break;
                    case 2:
                        reader.readMessage(message.fees, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.gravity.v1.ERC20Token.deserialize(reader), dependency_2.gravity.v1.ERC20Token));
                        break;
                    case 3:
                        message.logic_contract_address = reader.readString();
                        break;
                    case 4:
                        message.payload = reader.readBytes();
                        break;
                    case 5:
                        message.timeout = reader.readUint64();
                        break;
                    case 6:
                        message.invalidation_id = reader.readBytes();
                        break;
                    case 7:
                        message.invalidation_nonce = reader.readUint64();
                        break;
                    case 8:
                        message.block = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): OutgoingLogicCall {
            return OutgoingLogicCall.deserialize(bytes);
        }
    }
    export class EventOutgoingBatchCanceled extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            bridge_contract?: string;
            bridge_chain_id?: string;
            batch_id?: string;
            nonce?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("bridge_contract" in data && data.bridge_contract != undefined) {
                    this.bridge_contract = data.bridge_contract;
                }
                if ("bridge_chain_id" in data && data.bridge_chain_id != undefined) {
                    this.bridge_chain_id = data.bridge_chain_id;
                }
                if ("batch_id" in data && data.batch_id != undefined) {
                    this.batch_id = data.batch_id;
                }
                if ("nonce" in data && data.nonce != undefined) {
                    this.nonce = data.nonce;
                }
            }
        }
        get bridge_contract() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set bridge_contract(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get bridge_chain_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set bridge_chain_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get batch_id() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set batch_id(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get nonce() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set nonce(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            bridge_contract?: string;
            bridge_chain_id?: string;
            batch_id?: string;
            nonce?: string;
        }): EventOutgoingBatchCanceled {
            const message = new EventOutgoingBatchCanceled({});
            if (data.bridge_contract != null) {
                message.bridge_contract = data.bridge_contract;
            }
            if (data.bridge_chain_id != null) {
                message.bridge_chain_id = data.bridge_chain_id;
            }
            if (data.batch_id != null) {
                message.batch_id = data.batch_id;
            }
            if (data.nonce != null) {
                message.nonce = data.nonce;
            }
            return message;
        }
        toObject() {
            const data: {
                bridge_contract?: string;
                bridge_chain_id?: string;
                batch_id?: string;
                nonce?: string;
            } = {};
            if (this.bridge_contract != null) {
                data.bridge_contract = this.bridge_contract;
            }
            if (this.bridge_chain_id != null) {
                data.bridge_chain_id = this.bridge_chain_id;
            }
            if (this.batch_id != null) {
                data.batch_id = this.batch_id;
            }
            if (this.nonce != null) {
                data.nonce = this.nonce;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.bridge_contract.length)
                writer.writeString(1, this.bridge_contract);
            if (this.bridge_chain_id.length)
                writer.writeString(2, this.bridge_chain_id);
            if (this.batch_id.length)
                writer.writeString(3, this.batch_id);
            if (this.nonce.length)
                writer.writeString(4, this.nonce);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventOutgoingBatchCanceled {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventOutgoingBatchCanceled();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.bridge_contract = reader.readString();
                        break;
                    case 2:
                        message.bridge_chain_id = reader.readString();
                        break;
                    case 3:
                        message.batch_id = reader.readString();
                        break;
                    case 4:
                        message.nonce = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventOutgoingBatchCanceled {
            return EventOutgoingBatchCanceled.deserialize(bytes);
        }
    }
    export class EventOutgoingBatch extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            bridge_contract?: string;
            bridge_chain_id?: string;
            batch_id?: string;
            nonce?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("bridge_contract" in data && data.bridge_contract != undefined) {
                    this.bridge_contract = data.bridge_contract;
                }
                if ("bridge_chain_id" in data && data.bridge_chain_id != undefined) {
                    this.bridge_chain_id = data.bridge_chain_id;
                }
                if ("batch_id" in data && data.batch_id != undefined) {
                    this.batch_id = data.batch_id;
                }
                if ("nonce" in data && data.nonce != undefined) {
                    this.nonce = data.nonce;
                }
            }
        }
        get bridge_contract() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set bridge_contract(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get bridge_chain_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set bridge_chain_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get batch_id() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set batch_id(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get nonce() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set nonce(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            bridge_contract?: string;
            bridge_chain_id?: string;
            batch_id?: string;
            nonce?: string;
        }): EventOutgoingBatch {
            const message = new EventOutgoingBatch({});
            if (data.bridge_contract != null) {
                message.bridge_contract = data.bridge_contract;
            }
            if (data.bridge_chain_id != null) {
                message.bridge_chain_id = data.bridge_chain_id;
            }
            if (data.batch_id != null) {
                message.batch_id = data.batch_id;
            }
            if (data.nonce != null) {
                message.nonce = data.nonce;
            }
            return message;
        }
        toObject() {
            const data: {
                bridge_contract?: string;
                bridge_chain_id?: string;
                batch_id?: string;
                nonce?: string;
            } = {};
            if (this.bridge_contract != null) {
                data.bridge_contract = this.bridge_contract;
            }
            if (this.bridge_chain_id != null) {
                data.bridge_chain_id = this.bridge_chain_id;
            }
            if (this.batch_id != null) {
                data.batch_id = this.batch_id;
            }
            if (this.nonce != null) {
                data.nonce = this.nonce;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.bridge_contract.length)
                writer.writeString(1, this.bridge_contract);
            if (this.bridge_chain_id.length)
                writer.writeString(2, this.bridge_chain_id);
            if (this.batch_id.length)
                writer.writeString(3, this.batch_id);
            if (this.nonce.length)
                writer.writeString(4, this.nonce);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventOutgoingBatch {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventOutgoingBatch();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.bridge_contract = reader.readString();
                        break;
                    case 2:
                        message.bridge_chain_id = reader.readString();
                        break;
                    case 3:
                        message.batch_id = reader.readString();
                        break;
                    case 4:
                        message.nonce = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventOutgoingBatch {
            return EventOutgoingBatch.deserialize(bytes);
        }
    }
}
