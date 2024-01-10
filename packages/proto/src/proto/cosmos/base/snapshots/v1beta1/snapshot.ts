/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.1
 * source: cosmos/base/snapshots/v1beta1/snapshot.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace cosmos.base.snapshots.v1beta1 {
    export class Snapshot extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            height?: number;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Metadata;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("height" in data && data.height != undefined) {
                    this.height = data.height;
                }
                if ("format" in data && data.format != undefined) {
                    this.format = data.format;
                }
                if ("chunks" in data && data.chunks != undefined) {
                    this.chunks = data.chunks;
                }
                if ("hash" in data && data.hash != undefined) {
                    this.hash = data.hash;
                }
                if ("metadata" in data && data.metadata != undefined) {
                    this.metadata = data.metadata;
                }
            }
        }
        get height() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set height(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get format() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set format(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get chunks() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set chunks(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get hash() {
            return pb_1.Message.getFieldWithDefault(this, 4, new Uint8Array(0)) as Uint8Array;
        }
        set hash(value: Uint8Array) {
            pb_1.Message.setField(this, 4, value);
        }
        get metadata() {
            return pb_1.Message.getWrapperField(this, Metadata, 5) as Metadata;
        }
        set metadata(value: Metadata) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get has_metadata() {
            return pb_1.Message.getField(this, 5) != null;
        }
        static fromObject(data: {
            height?: number;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: ReturnType<typeof Metadata.prototype.toObject>;
        }): Snapshot {
            const message = new Snapshot({});
            if (data.height != null) {
                message.height = data.height;
            }
            if (data.format != null) {
                message.format = data.format;
            }
            if (data.chunks != null) {
                message.chunks = data.chunks;
            }
            if (data.hash != null) {
                message.hash = data.hash;
            }
            if (data.metadata != null) {
                message.metadata = Metadata.fromObject(data.metadata);
            }
            return message;
        }
        toObject() {
            const data: {
                height?: number;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: ReturnType<typeof Metadata.prototype.toObject>;
            } = {};
            if (this.height != null) {
                data.height = this.height;
            }
            if (this.format != null) {
                data.format = this.format;
            }
            if (this.chunks != null) {
                data.chunks = this.chunks;
            }
            if (this.hash != null) {
                data.hash = this.hash;
            }
            if (this.metadata != null) {
                data.metadata = this.metadata.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.height != 0)
                writer.writeUint64(1, this.height);
            if (this.format != 0)
                writer.writeUint32(2, this.format);
            if (this.chunks != 0)
                writer.writeUint32(3, this.chunks);
            if (this.hash.length)
                writer.writeBytes(4, this.hash);
            if (this.has_metadata)
                writer.writeMessage(5, this.metadata, () => this.metadata.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Snapshot {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Snapshot();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.height = reader.readUint64();
                        break;
                    case 2:
                        message.format = reader.readUint32();
                        break;
                    case 3:
                        message.chunks = reader.readUint32();
                        break;
                    case 4:
                        message.hash = reader.readBytes();
                        break;
                    case 5:
                        reader.readMessage(message.metadata, () => message.metadata = Metadata.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Snapshot {
            return Snapshot.deserialize(bytes);
        }
    }
    export class Metadata extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            chunk_hashes?: Uint8Array[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("chunk_hashes" in data && data.chunk_hashes != undefined) {
                    this.chunk_hashes = data.chunk_hashes;
                }
            }
        }
        get chunk_hashes() {
            return pb_1.Message.getFieldWithDefault(this, 1, []) as Uint8Array[];
        }
        set chunk_hashes(value: Uint8Array[]) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            chunk_hashes?: Uint8Array[];
        }): Metadata {
            const message = new Metadata({});
            if (data.chunk_hashes != null) {
                message.chunk_hashes = data.chunk_hashes;
            }
            return message;
        }
        toObject() {
            const data: {
                chunk_hashes?: Uint8Array[];
            } = {};
            if (this.chunk_hashes != null) {
                data.chunk_hashes = this.chunk_hashes;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.chunk_hashes.length)
                writer.writeRepeatedBytes(1, this.chunk_hashes);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Metadata {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Metadata();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        pb_1.Message.addToRepeatedField(message, 1, reader.readBytes());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Metadata {
            return Metadata.deserialize(bytes);
        }
    }
    export class SnapshotItem extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2, 3, 4]];
        constructor(data?: any[] | ({} & (({
            store?: SnapshotStoreItem;
            iavl?: never;
            extension?: never;
            extension_payload?: never;
        } | {
            store?: never;
            iavl?: SnapshotIAVLItem;
            extension?: never;
            extension_payload?: never;
        } | {
            store?: never;
            iavl?: never;
            extension?: SnapshotExtensionMeta;
            extension_payload?: never;
        } | {
            store?: never;
            iavl?: never;
            extension?: never;
            extension_payload?: SnapshotExtensionPayload;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("store" in data && data.store != undefined) {
                    this.store = data.store;
                }
                if ("iavl" in data && data.iavl != undefined) {
                    this.iavl = data.iavl;
                }
                if ("extension" in data && data.extension != undefined) {
                    this.extension = data.extension;
                }
                if ("extension_payload" in data && data.extension_payload != undefined) {
                    this.extension_payload = data.extension_payload;
                }
            }
        }
        get store() {
            return pb_1.Message.getWrapperField(this, SnapshotStoreItem, 1) as SnapshotStoreItem;
        }
        set store(value: SnapshotStoreItem) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_store() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get iavl() {
            return pb_1.Message.getWrapperField(this, SnapshotIAVLItem, 2) as SnapshotIAVLItem;
        }
        set iavl(value: SnapshotIAVLItem) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_iavl() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get extension() {
            return pb_1.Message.getWrapperField(this, SnapshotExtensionMeta, 3) as SnapshotExtensionMeta;
        }
        set extension(value: SnapshotExtensionMeta) {
            pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
        }
        get has_extension() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get extension_payload() {
            return pb_1.Message.getWrapperField(this, SnapshotExtensionPayload, 4) as SnapshotExtensionPayload;
        }
        set extension_payload(value: SnapshotExtensionPayload) {
            pb_1.Message.setOneofWrapperField(this, 4, this.#one_of_decls[0], value);
        }
        get has_extension_payload() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get item() {
            const cases: {
                [index: number]: "none" | "store" | "iavl" | "extension" | "extension_payload";
            } = {
                0: "none",
                1: "store",
                2: "iavl",
                3: "extension",
                4: "extension_payload"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3, 4])];
        }
        static fromObject(data: {
            store?: ReturnType<typeof SnapshotStoreItem.prototype.toObject>;
            iavl?: ReturnType<typeof SnapshotIAVLItem.prototype.toObject>;
            extension?: ReturnType<typeof SnapshotExtensionMeta.prototype.toObject>;
            extension_payload?: ReturnType<typeof SnapshotExtensionPayload.prototype.toObject>;
        }): SnapshotItem {
            const message = new SnapshotItem({});
            if (data.store != null) {
                message.store = SnapshotStoreItem.fromObject(data.store);
            }
            if (data.iavl != null) {
                message.iavl = SnapshotIAVLItem.fromObject(data.iavl);
            }
            if (data.extension != null) {
                message.extension = SnapshotExtensionMeta.fromObject(data.extension);
            }
            if (data.extension_payload != null) {
                message.extension_payload = SnapshotExtensionPayload.fromObject(data.extension_payload);
            }
            return message;
        }
        toObject() {
            const data: {
                store?: ReturnType<typeof SnapshotStoreItem.prototype.toObject>;
                iavl?: ReturnType<typeof SnapshotIAVLItem.prototype.toObject>;
                extension?: ReturnType<typeof SnapshotExtensionMeta.prototype.toObject>;
                extension_payload?: ReturnType<typeof SnapshotExtensionPayload.prototype.toObject>;
            } = {};
            if (this.store != null) {
                data.store = this.store.toObject();
            }
            if (this.iavl != null) {
                data.iavl = this.iavl.toObject();
            }
            if (this.extension != null) {
                data.extension = this.extension.toObject();
            }
            if (this.extension_payload != null) {
                data.extension_payload = this.extension_payload.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_store)
                writer.writeMessage(1, this.store, () => this.store.serialize(writer));
            if (this.has_iavl)
                writer.writeMessage(2, this.iavl, () => this.iavl.serialize(writer));
            if (this.has_extension)
                writer.writeMessage(3, this.extension, () => this.extension.serialize(writer));
            if (this.has_extension_payload)
                writer.writeMessage(4, this.extension_payload, () => this.extension_payload.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SnapshotItem {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SnapshotItem();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.store, () => message.store = SnapshotStoreItem.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.iavl, () => message.iavl = SnapshotIAVLItem.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.extension, () => message.extension = SnapshotExtensionMeta.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.extension_payload, () => message.extension_payload = SnapshotExtensionPayload.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SnapshotItem {
            return SnapshotItem.deserialize(bytes);
        }
    }
    export class SnapshotStoreItem extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
            }
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            name?: string;
        }): SnapshotStoreItem {
            const message = new SnapshotStoreItem({});
            if (data.name != null) {
                message.name = data.name;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(1, this.name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SnapshotStoreItem {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SnapshotStoreItem();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SnapshotStoreItem {
            return SnapshotStoreItem.deserialize(bytes);
        }
    }
    export class SnapshotIAVLItem extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            key?: Uint8Array;
            value?: Uint8Array;
            version?: number;
            height?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("key" in data && data.key != undefined) {
                    this.key = data.key;
                }
                if ("value" in data && data.value != undefined) {
                    this.value = data.value;
                }
                if ("version" in data && data.version != undefined) {
                    this.version = data.version;
                }
                if ("height" in data && data.height != undefined) {
                    this.height = data.height;
                }
            }
        }
        get key() {
            return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
        }
        set key(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        get value() {
            return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0)) as Uint8Array;
        }
        set value(value: Uint8Array) {
            pb_1.Message.setField(this, 2, value);
        }
        get version() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set version(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get height() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set height(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            key?: Uint8Array;
            value?: Uint8Array;
            version?: number;
            height?: number;
        }): SnapshotIAVLItem {
            const message = new SnapshotIAVLItem({});
            if (data.key != null) {
                message.key = data.key;
            }
            if (data.value != null) {
                message.value = data.value;
            }
            if (data.version != null) {
                message.version = data.version;
            }
            if (data.height != null) {
                message.height = data.height;
            }
            return message;
        }
        toObject() {
            const data: {
                key?: Uint8Array;
                value?: Uint8Array;
                version?: number;
                height?: number;
            } = {};
            if (this.key != null) {
                data.key = this.key;
            }
            if (this.value != null) {
                data.value = this.value;
            }
            if (this.version != null) {
                data.version = this.version;
            }
            if (this.height != null) {
                data.height = this.height;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.key.length)
                writer.writeBytes(1, this.key);
            if (this.value.length)
                writer.writeBytes(2, this.value);
            if (this.version != 0)
                writer.writeInt64(3, this.version);
            if (this.height != 0)
                writer.writeInt32(4, this.height);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SnapshotIAVLItem {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SnapshotIAVLItem();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.key = reader.readBytes();
                        break;
                    case 2:
                        message.value = reader.readBytes();
                        break;
                    case 3:
                        message.version = reader.readInt64();
                        break;
                    case 4:
                        message.height = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SnapshotIAVLItem {
            return SnapshotIAVLItem.deserialize(bytes);
        }
    }
    export class SnapshotExtensionMeta extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
            format?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("format" in data && data.format != undefined) {
                    this.format = data.format;
                }
            }
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get format() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set format(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            name?: string;
            format?: number;
        }): SnapshotExtensionMeta {
            const message = new SnapshotExtensionMeta({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.format != null) {
                message.format = data.format;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                format?: number;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.format != null) {
                data.format = this.format;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(1, this.name);
            if (this.format != 0)
                writer.writeUint32(2, this.format);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SnapshotExtensionMeta {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SnapshotExtensionMeta();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.format = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SnapshotExtensionMeta {
            return SnapshotExtensionMeta.deserialize(bytes);
        }
    }
    export class SnapshotExtensionPayload extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            payload?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("payload" in data && data.payload != undefined) {
                    this.payload = data.payload;
                }
            }
        }
        get payload() {
            return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
        }
        set payload(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            payload?: Uint8Array;
        }): SnapshotExtensionPayload {
            const message = new SnapshotExtensionPayload({});
            if (data.payload != null) {
                message.payload = data.payload;
            }
            return message;
        }
        toObject() {
            const data: {
                payload?: Uint8Array;
            } = {};
            if (this.payload != null) {
                data.payload = this.payload;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.payload.length)
                writer.writeBytes(1, this.payload);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SnapshotExtensionPayload {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SnapshotExtensionPayload();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.payload = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SnapshotExtensionPayload {
            return SnapshotExtensionPayload.deserialize(bytes);
        }
    }
}
