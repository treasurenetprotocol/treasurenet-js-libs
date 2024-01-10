import * as dependency_2 from "./../../client/v1/client";
import * as pb_1 from "google-protobuf";
export declare namespace ibc.core.channel.v1 {
    enum State {
        STATE_UNINITIALIZED_UNSPECIFIED = 0,
        STATE_INIT = 1,
        STATE_TRYOPEN = 2,
        STATE_OPEN = 3,
        STATE_CLOSED = 4
    }
    enum Order {
        ORDER_NONE_UNSPECIFIED = 0,
        ORDER_UNORDERED = 1,
        ORDER_ORDERED = 2
    }
    class Channel extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            state?: State;
            ordering?: Order;
            counterparty?: Counterparty;
            connection_hops?: string[];
            version?: string;
        });
        get state(): State;
        set state(value: State);
        get ordering(): Order;
        set ordering(value: Order);
        get counterparty(): Counterparty;
        set counterparty(value: Counterparty);
        get has_counterparty(): boolean;
        get connection_hops(): string[];
        set connection_hops(value: string[]);
        get version(): string;
        set version(value: string);
        static fromObject(data: {
            state?: State;
            ordering?: Order;
            counterparty?: ReturnType<typeof Counterparty.prototype.toObject>;
            connection_hops?: string[];
            version?: string;
        }): Channel;
        toObject(): {
            state?: State;
            ordering?: Order;
            counterparty?: ReturnType<typeof Counterparty.prototype.toObject>;
            connection_hops?: string[];
            version?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Channel;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Channel;
    }
    class IdentifiedChannel extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            state?: State;
            ordering?: Order;
            counterparty?: Counterparty;
            connection_hops?: string[];
            version?: string;
            port_id?: string;
            channel_id?: string;
        });
        get state(): State;
        set state(value: State);
        get ordering(): Order;
        set ordering(value: Order);
        get counterparty(): Counterparty;
        set counterparty(value: Counterparty);
        get has_counterparty(): boolean;
        get connection_hops(): string[];
        set connection_hops(value: string[]);
        get version(): string;
        set version(value: string);
        get port_id(): string;
        set port_id(value: string);
        get channel_id(): string;
        set channel_id(value: string);
        static fromObject(data: {
            state?: State;
            ordering?: Order;
            counterparty?: ReturnType<typeof Counterparty.prototype.toObject>;
            connection_hops?: string[];
            version?: string;
            port_id?: string;
            channel_id?: string;
        }): IdentifiedChannel;
        toObject(): {
            state?: State;
            ordering?: Order;
            counterparty?: ReturnType<typeof Counterparty.prototype.toObject>;
            connection_hops?: string[];
            version?: string;
            port_id?: string;
            channel_id?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IdentifiedChannel;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): IdentifiedChannel;
    }
    class Counterparty extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
        });
        get port_id(): string;
        set port_id(value: string);
        get channel_id(): string;
        set channel_id(value: string);
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
        }): Counterparty;
        toObject(): {
            port_id?: string;
            channel_id?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Counterparty;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Counterparty;
    }
    class Packet extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            sequence?: number;
            source_port?: string;
            source_channel?: string;
            destination_port?: string;
            destination_channel?: string;
            data?: Uint8Array;
            timeout_height?: dependency_2.ibc.core.client.v1.Height;
            timeout_timestamp?: number;
        });
        get sequence(): number;
        set sequence(value: number);
        get source_port(): string;
        set source_port(value: string);
        get source_channel(): string;
        set source_channel(value: string);
        get destination_port(): string;
        set destination_port(value: string);
        get destination_channel(): string;
        set destination_channel(value: string);
        get data(): Uint8Array;
        set data(value: Uint8Array);
        get timeout_height(): dependency_2.ibc.core.client.v1.Height;
        set timeout_height(value: dependency_2.ibc.core.client.v1.Height);
        get has_timeout_height(): boolean;
        get timeout_timestamp(): number;
        set timeout_timestamp(value: number);
        static fromObject(data: {
            sequence?: number;
            source_port?: string;
            source_channel?: string;
            destination_port?: string;
            destination_channel?: string;
            data?: Uint8Array;
            timeout_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
            timeout_timestamp?: number;
        }): Packet;
        toObject(): {
            sequence?: number;
            source_port?: string;
            source_channel?: string;
            destination_port?: string;
            destination_channel?: string;
            data?: Uint8Array;
            timeout_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
            timeout_timestamp?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Packet;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Packet;
    }
    class PacketState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            sequence?: number;
            data?: Uint8Array;
        });
        get port_id(): string;
        set port_id(value: string);
        get channel_id(): string;
        set channel_id(value: string);
        get sequence(): number;
        set sequence(value: number);
        get data(): Uint8Array;
        set data(value: Uint8Array);
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            sequence?: number;
            data?: Uint8Array;
        }): PacketState;
        toObject(): {
            port_id?: string;
            channel_id?: string;
            sequence?: number;
            data?: Uint8Array;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PacketState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): PacketState;
    }
    class Acknowledgement extends pb_1.Message {
        #private;
        constructor(data?: any[] | ({} & (({
            result?: Uint8Array;
            error?: never;
        } | {
            result?: never;
            error?: string;
        }))));
        get result(): Uint8Array;
        set result(value: Uint8Array);
        get has_result(): boolean;
        get error(): string;
        set error(value: string);
        get has_error(): boolean;
        get response(): "none" | "error" | "result";
        static fromObject(data: {
            result?: Uint8Array;
            error?: string;
        }): Acknowledgement;
        toObject(): {
            result?: Uint8Array;
            error?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Acknowledgement;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Acknowledgement;
    }
}
//# sourceMappingURL=channel.d.ts.map