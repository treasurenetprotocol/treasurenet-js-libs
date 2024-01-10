import * as dependency_2 from "./../../../google/protobuf/duration";
import * as dependency_3 from "./../../../google/protobuf/timestamp";
import * as pb_1 from "google-protobuf";
export declare namespace evmos.epochs.v1 {
    class EpochInfo extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            identifier?: string;
            start_time?: dependency_3.google.protobuf.Timestamp;
            duration?: dependency_2.google.protobuf.Duration;
            current_epoch?: number;
            current_epoch_start_time?: dependency_3.google.protobuf.Timestamp;
            epoch_counting_started?: boolean;
            current_epoch_start_height?: number;
        });
        get identifier(): string;
        set identifier(value: string);
        get start_time(): dependency_3.google.protobuf.Timestamp;
        set start_time(value: dependency_3.google.protobuf.Timestamp);
        get has_start_time(): boolean;
        get duration(): dependency_2.google.protobuf.Duration;
        set duration(value: dependency_2.google.protobuf.Duration);
        get has_duration(): boolean;
        get current_epoch(): number;
        set current_epoch(value: number);
        get current_epoch_start_time(): dependency_3.google.protobuf.Timestamp;
        set current_epoch_start_time(value: dependency_3.google.protobuf.Timestamp);
        get has_current_epoch_start_time(): boolean;
        get epoch_counting_started(): boolean;
        set epoch_counting_started(value: boolean);
        get current_epoch_start_height(): number;
        set current_epoch_start_height(value: number);
        static fromObject(data: {
            identifier?: string;
            start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            duration?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
            current_epoch?: number;
            current_epoch_start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            epoch_counting_started?: boolean;
            current_epoch_start_height?: number;
        }): EpochInfo;
        toObject(): {
            identifier?: string;
            start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            duration?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
            current_epoch?: number;
            current_epoch_start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            epoch_counting_started?: boolean;
            current_epoch_start_height?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EpochInfo;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EpochInfo;
    }
    class GenesisState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            epochs?: EpochInfo[];
        });
        get epochs(): EpochInfo[];
        set epochs(value: EpochInfo[]);
        static fromObject(data: {
            epochs?: ReturnType<typeof EpochInfo.prototype.toObject>[];
        }): GenesisState;
        toObject(): {
            epochs?: ReturnType<typeof EpochInfo.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
}
//# sourceMappingURL=genesis.d.ts.map