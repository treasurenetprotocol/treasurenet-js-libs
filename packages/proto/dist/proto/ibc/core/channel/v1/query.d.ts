import * as dependency_1 from "./../../client/v1/client";
import * as dependency_2 from "./../../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_3 from "./channel";
import * as dependency_5 from "./../../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace ibc.core.channel.v1 {
    export class QueryChannelRequest extends pb_1.Message {
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
        }): QueryChannelRequest;
        toObject(): {
            port_id?: string;
            channel_id?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryChannelRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryChannelRequest;
    }
    export class QueryChannelResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            channel?: dependency_3.ibc.core.channel.v1.Channel;
            proof?: Uint8Array;
            proof_height?: dependency_1.ibc.core.client.v1.Height;
        });
        get channel(): dependency_3.ibc.core.channel.v1.Channel;
        set channel(value: dependency_3.ibc.core.channel.v1.Channel);
        get has_channel(): boolean;
        get proof(): Uint8Array;
        set proof(value: Uint8Array);
        get proof_height(): dependency_1.ibc.core.client.v1.Height;
        set proof_height(value: dependency_1.ibc.core.client.v1.Height);
        get has_proof_height(): boolean;
        static fromObject(data: {
            channel?: ReturnType<typeof dependency_3.ibc.core.channel.v1.Channel.prototype.toObject>;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryChannelResponse;
        toObject(): {
            channel?: ReturnType<typeof dependency_3.ibc.core.channel.v1.Channel.prototype.toObject>;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryChannelResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryChannelResponse;
    }
    export class QueryChannelsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryChannelsRequest;
        toObject(): {
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryChannelsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryChannelsRequest;
    }
    export class QueryChannelsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            channels?: dependency_3.ibc.core.channel.v1.IdentifiedChannel[];
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageResponse;
            height?: dependency_1.ibc.core.client.v1.Height;
        });
        get channels(): dependency_3.ibc.core.channel.v1.IdentifiedChannel[];
        set channels(value: dependency_3.ibc.core.channel.v1.IdentifiedChannel[]);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        get height(): dependency_1.ibc.core.client.v1.Height;
        set height(value: dependency_1.ibc.core.client.v1.Height);
        get has_height(): boolean;
        static fromObject(data: {
            channels?: ReturnType<typeof dependency_3.ibc.core.channel.v1.IdentifiedChannel.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryChannelsResponse;
        toObject(): {
            channels?: ReturnType<typeof dependency_3.ibc.core.channel.v1.IdentifiedChannel.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryChannelsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryChannelsResponse;
    }
    export class QueryConnectionChannelsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            connection?: string;
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageRequest;
        });
        get connection(): string;
        set connection(value: string);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            connection?: string;
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryConnectionChannelsRequest;
        toObject(): {
            connection?: string;
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryConnectionChannelsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryConnectionChannelsRequest;
    }
    export class QueryConnectionChannelsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            channels?: dependency_3.ibc.core.channel.v1.IdentifiedChannel[];
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageResponse;
            height?: dependency_1.ibc.core.client.v1.Height;
        });
        get channels(): dependency_3.ibc.core.channel.v1.IdentifiedChannel[];
        set channels(value: dependency_3.ibc.core.channel.v1.IdentifiedChannel[]);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        get height(): dependency_1.ibc.core.client.v1.Height;
        set height(value: dependency_1.ibc.core.client.v1.Height);
        get has_height(): boolean;
        static fromObject(data: {
            channels?: ReturnType<typeof dependency_3.ibc.core.channel.v1.IdentifiedChannel.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryConnectionChannelsResponse;
        toObject(): {
            channels?: ReturnType<typeof dependency_3.ibc.core.channel.v1.IdentifiedChannel.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryConnectionChannelsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryConnectionChannelsResponse;
    }
    export class QueryChannelClientStateRequest extends pb_1.Message {
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
        }): QueryChannelClientStateRequest;
        toObject(): {
            port_id?: string;
            channel_id?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryChannelClientStateRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryChannelClientStateRequest;
    }
    export class QueryChannelClientStateResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            identified_client_state?: dependency_1.ibc.core.client.v1.IdentifiedClientState;
            proof?: Uint8Array;
            proof_height?: dependency_1.ibc.core.client.v1.Height;
        });
        get identified_client_state(): dependency_1.ibc.core.client.v1.IdentifiedClientState;
        set identified_client_state(value: dependency_1.ibc.core.client.v1.IdentifiedClientState);
        get has_identified_client_state(): boolean;
        get proof(): Uint8Array;
        set proof(value: Uint8Array);
        get proof_height(): dependency_1.ibc.core.client.v1.Height;
        set proof_height(value: dependency_1.ibc.core.client.v1.Height);
        get has_proof_height(): boolean;
        static fromObject(data: {
            identified_client_state?: ReturnType<typeof dependency_1.ibc.core.client.v1.IdentifiedClientState.prototype.toObject>;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryChannelClientStateResponse;
        toObject(): {
            identified_client_state?: ReturnType<typeof dependency_1.ibc.core.client.v1.IdentifiedClientState.prototype.toObject>;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryChannelClientStateResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryChannelClientStateResponse;
    }
    export class QueryChannelConsensusStateRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            revision_number?: number;
            revision_height?: number;
        });
        get port_id(): string;
        set port_id(value: string);
        get channel_id(): string;
        set channel_id(value: string);
        get revision_number(): number;
        set revision_number(value: number);
        get revision_height(): number;
        set revision_height(value: number);
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            revision_number?: number;
            revision_height?: number;
        }): QueryChannelConsensusStateRequest;
        toObject(): {
            port_id?: string;
            channel_id?: string;
            revision_number?: number;
            revision_height?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryChannelConsensusStateRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryChannelConsensusStateRequest;
    }
    export class QueryChannelConsensusStateResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            consensus_state?: dependency_5.google.protobuf.Any;
            client_id?: string;
            proof?: Uint8Array;
            proof_height?: dependency_1.ibc.core.client.v1.Height;
        });
        get consensus_state(): dependency_5.google.protobuf.Any;
        set consensus_state(value: dependency_5.google.protobuf.Any);
        get has_consensus_state(): boolean;
        get client_id(): string;
        set client_id(value: string);
        get proof(): Uint8Array;
        set proof(value: Uint8Array);
        get proof_height(): dependency_1.ibc.core.client.v1.Height;
        set proof_height(value: dependency_1.ibc.core.client.v1.Height);
        get has_proof_height(): boolean;
        static fromObject(data: {
            consensus_state?: ReturnType<typeof dependency_5.google.protobuf.Any.prototype.toObject>;
            client_id?: string;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryChannelConsensusStateResponse;
        toObject(): {
            consensus_state?: ReturnType<typeof dependency_5.google.protobuf.Any.prototype.toObject>;
            client_id?: string;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryChannelConsensusStateResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryChannelConsensusStateResponse;
    }
    export class QueryPacketCommitmentRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            sequence?: number;
        });
        get port_id(): string;
        set port_id(value: string);
        get channel_id(): string;
        set channel_id(value: string);
        get sequence(): number;
        set sequence(value: number);
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            sequence?: number;
        }): QueryPacketCommitmentRequest;
        toObject(): {
            port_id?: string;
            channel_id?: string;
            sequence?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPacketCommitmentRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPacketCommitmentRequest;
    }
    export class QueryPacketCommitmentResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            commitment?: Uint8Array;
            proof?: Uint8Array;
            proof_height?: dependency_1.ibc.core.client.v1.Height;
        });
        get commitment(): Uint8Array;
        set commitment(value: Uint8Array);
        get proof(): Uint8Array;
        set proof(value: Uint8Array);
        get proof_height(): dependency_1.ibc.core.client.v1.Height;
        set proof_height(value: dependency_1.ibc.core.client.v1.Height);
        get has_proof_height(): boolean;
        static fromObject(data: {
            commitment?: Uint8Array;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryPacketCommitmentResponse;
        toObject(): {
            commitment?: Uint8Array;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPacketCommitmentResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPacketCommitmentResponse;
    }
    export class QueryPacketCommitmentsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageRequest;
        });
        get port_id(): string;
        set port_id(value: string);
        get channel_id(): string;
        set channel_id(value: string);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryPacketCommitmentsRequest;
        toObject(): {
            port_id?: string;
            channel_id?: string;
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPacketCommitmentsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPacketCommitmentsRequest;
    }
    export class QueryPacketCommitmentsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            commitments?: dependency_3.ibc.core.channel.v1.PacketState[];
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageResponse;
            height?: dependency_1.ibc.core.client.v1.Height;
        });
        get commitments(): dependency_3.ibc.core.channel.v1.PacketState[];
        set commitments(value: dependency_3.ibc.core.channel.v1.PacketState[]);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        get height(): dependency_1.ibc.core.client.v1.Height;
        set height(value: dependency_1.ibc.core.client.v1.Height);
        get has_height(): boolean;
        static fromObject(data: {
            commitments?: ReturnType<typeof dependency_3.ibc.core.channel.v1.PacketState.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryPacketCommitmentsResponse;
        toObject(): {
            commitments?: ReturnType<typeof dependency_3.ibc.core.channel.v1.PacketState.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPacketCommitmentsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPacketCommitmentsResponse;
    }
    export class QueryPacketReceiptRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            sequence?: number;
        });
        get port_id(): string;
        set port_id(value: string);
        get channel_id(): string;
        set channel_id(value: string);
        get sequence(): number;
        set sequence(value: number);
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            sequence?: number;
        }): QueryPacketReceiptRequest;
        toObject(): {
            port_id?: string;
            channel_id?: string;
            sequence?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPacketReceiptRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPacketReceiptRequest;
    }
    export class QueryPacketReceiptResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            received?: boolean;
            proof?: Uint8Array;
            proof_height?: dependency_1.ibc.core.client.v1.Height;
        });
        get received(): boolean;
        set received(value: boolean);
        get proof(): Uint8Array;
        set proof(value: Uint8Array);
        get proof_height(): dependency_1.ibc.core.client.v1.Height;
        set proof_height(value: dependency_1.ibc.core.client.v1.Height);
        get has_proof_height(): boolean;
        static fromObject(data: {
            received?: boolean;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryPacketReceiptResponse;
        toObject(): {
            received?: boolean;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPacketReceiptResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPacketReceiptResponse;
    }
    export class QueryPacketAcknowledgementRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            sequence?: number;
        });
        get port_id(): string;
        set port_id(value: string);
        get channel_id(): string;
        set channel_id(value: string);
        get sequence(): number;
        set sequence(value: number);
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            sequence?: number;
        }): QueryPacketAcknowledgementRequest;
        toObject(): {
            port_id?: string;
            channel_id?: string;
            sequence?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPacketAcknowledgementRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPacketAcknowledgementRequest;
    }
    export class QueryPacketAcknowledgementResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            acknowledgement?: Uint8Array;
            proof?: Uint8Array;
            proof_height?: dependency_1.ibc.core.client.v1.Height;
        });
        get acknowledgement(): Uint8Array;
        set acknowledgement(value: Uint8Array);
        get proof(): Uint8Array;
        set proof(value: Uint8Array);
        get proof_height(): dependency_1.ibc.core.client.v1.Height;
        set proof_height(value: dependency_1.ibc.core.client.v1.Height);
        get has_proof_height(): boolean;
        static fromObject(data: {
            acknowledgement?: Uint8Array;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryPacketAcknowledgementResponse;
        toObject(): {
            acknowledgement?: Uint8Array;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPacketAcknowledgementResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPacketAcknowledgementResponse;
    }
    export class QueryPacketAcknowledgementsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageRequest;
            packet_commitment_sequences?: number[];
        });
        get port_id(): string;
        set port_id(value: string);
        get channel_id(): string;
        set channel_id(value: string);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        get packet_commitment_sequences(): number[];
        set packet_commitment_sequences(value: number[]);
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
            packet_commitment_sequences?: number[];
        }): QueryPacketAcknowledgementsRequest;
        toObject(): {
            port_id?: string;
            channel_id?: string;
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
            packet_commitment_sequences?: number[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPacketAcknowledgementsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPacketAcknowledgementsRequest;
    }
    export class QueryPacketAcknowledgementsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            acknowledgements?: dependency_3.ibc.core.channel.v1.PacketState[];
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageResponse;
            height?: dependency_1.ibc.core.client.v1.Height;
        });
        get acknowledgements(): dependency_3.ibc.core.channel.v1.PacketState[];
        set acknowledgements(value: dependency_3.ibc.core.channel.v1.PacketState[]);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        get height(): dependency_1.ibc.core.client.v1.Height;
        set height(value: dependency_1.ibc.core.client.v1.Height);
        get has_height(): boolean;
        static fromObject(data: {
            acknowledgements?: ReturnType<typeof dependency_3.ibc.core.channel.v1.PacketState.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryPacketAcknowledgementsResponse;
        toObject(): {
            acknowledgements?: ReturnType<typeof dependency_3.ibc.core.channel.v1.PacketState.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPacketAcknowledgementsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPacketAcknowledgementsResponse;
    }
    export class QueryUnreceivedPacketsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            packet_commitment_sequences?: number[];
        });
        get port_id(): string;
        set port_id(value: string);
        get channel_id(): string;
        set channel_id(value: string);
        get packet_commitment_sequences(): number[];
        set packet_commitment_sequences(value: number[]);
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            packet_commitment_sequences?: number[];
        }): QueryUnreceivedPacketsRequest;
        toObject(): {
            port_id?: string;
            channel_id?: string;
            packet_commitment_sequences?: number[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryUnreceivedPacketsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryUnreceivedPacketsRequest;
    }
    export class QueryUnreceivedPacketsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            sequences?: number[];
            height?: dependency_1.ibc.core.client.v1.Height;
        });
        get sequences(): number[];
        set sequences(value: number[]);
        get height(): dependency_1.ibc.core.client.v1.Height;
        set height(value: dependency_1.ibc.core.client.v1.Height);
        get has_height(): boolean;
        static fromObject(data: {
            sequences?: number[];
            height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryUnreceivedPacketsResponse;
        toObject(): {
            sequences?: number[];
            height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryUnreceivedPacketsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryUnreceivedPacketsResponse;
    }
    export class QueryUnreceivedAcksRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            packet_ack_sequences?: number[];
        });
        get port_id(): string;
        set port_id(value: string);
        get channel_id(): string;
        set channel_id(value: string);
        get packet_ack_sequences(): number[];
        set packet_ack_sequences(value: number[]);
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            packet_ack_sequences?: number[];
        }): QueryUnreceivedAcksRequest;
        toObject(): {
            port_id?: string;
            channel_id?: string;
            packet_ack_sequences?: number[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryUnreceivedAcksRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryUnreceivedAcksRequest;
    }
    export class QueryUnreceivedAcksResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            sequences?: number[];
            height?: dependency_1.ibc.core.client.v1.Height;
        });
        get sequences(): number[];
        set sequences(value: number[]);
        get height(): dependency_1.ibc.core.client.v1.Height;
        set height(value: dependency_1.ibc.core.client.v1.Height);
        get has_height(): boolean;
        static fromObject(data: {
            sequences?: number[];
            height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryUnreceivedAcksResponse;
        toObject(): {
            sequences?: number[];
            height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryUnreceivedAcksResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryUnreceivedAcksResponse;
    }
    export class QueryNextSequenceReceiveRequest extends pb_1.Message {
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
        }): QueryNextSequenceReceiveRequest;
        toObject(): {
            port_id?: string;
            channel_id?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryNextSequenceReceiveRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryNextSequenceReceiveRequest;
    }
    export class QueryNextSequenceReceiveResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            next_sequence_receive?: number;
            proof?: Uint8Array;
            proof_height?: dependency_1.ibc.core.client.v1.Height;
        });
        get next_sequence_receive(): number;
        set next_sequence_receive(value: number);
        get proof(): Uint8Array;
        set proof(value: Uint8Array);
        get proof_height(): dependency_1.ibc.core.client.v1.Height;
        set proof_height(value: dependency_1.ibc.core.client.v1.Height);
        get has_proof_height(): boolean;
        static fromObject(data: {
            next_sequence_receive?: number;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryNextSequenceReceiveResponse;
        toObject(): {
            next_sequence_receive?: number;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_1.ibc.core.client.v1.Height.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryNextSequenceReceiveResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryNextSequenceReceiveResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            Channel: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryChannelRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryChannelRequest;
                responseSerialize: (message: QueryChannelResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryChannelResponse;
            };
            Channels: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryChannelsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryChannelsRequest;
                responseSerialize: (message: QueryChannelsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryChannelsResponse;
            };
            ConnectionChannels: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryConnectionChannelsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryConnectionChannelsRequest;
                responseSerialize: (message: QueryConnectionChannelsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryConnectionChannelsResponse;
            };
            ChannelClientState: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryChannelClientStateRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryChannelClientStateRequest;
                responseSerialize: (message: QueryChannelClientStateResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryChannelClientStateResponse;
            };
            ChannelConsensusState: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryChannelConsensusStateRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryChannelConsensusStateRequest;
                responseSerialize: (message: QueryChannelConsensusStateResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryChannelConsensusStateResponse;
            };
            PacketCommitment: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryPacketCommitmentRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryPacketCommitmentRequest;
                responseSerialize: (message: QueryPacketCommitmentResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryPacketCommitmentResponse;
            };
            PacketCommitments: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryPacketCommitmentsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryPacketCommitmentsRequest;
                responseSerialize: (message: QueryPacketCommitmentsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryPacketCommitmentsResponse;
            };
            PacketReceipt: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryPacketReceiptRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryPacketReceiptRequest;
                responseSerialize: (message: QueryPacketReceiptResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryPacketReceiptResponse;
            };
            PacketAcknowledgement: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryPacketAcknowledgementRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryPacketAcknowledgementRequest;
                responseSerialize: (message: QueryPacketAcknowledgementResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryPacketAcknowledgementResponse;
            };
            PacketAcknowledgements: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryPacketAcknowledgementsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryPacketAcknowledgementsRequest;
                responseSerialize: (message: QueryPacketAcknowledgementsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryPacketAcknowledgementsResponse;
            };
            UnreceivedPackets: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryUnreceivedPacketsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryUnreceivedPacketsRequest;
                responseSerialize: (message: QueryUnreceivedPacketsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryUnreceivedPacketsResponse;
            };
            UnreceivedAcks: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryUnreceivedAcksRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryUnreceivedAcksRequest;
                responseSerialize: (message: QueryUnreceivedAcksResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryUnreceivedAcksResponse;
            };
            NextSequenceReceive: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryNextSequenceReceiveRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryNextSequenceReceiveRequest;
                responseSerialize: (message: QueryNextSequenceReceiveResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryNextSequenceReceiveResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Channel(call: grpc_1.ServerUnaryCall<QueryChannelRequest, QueryChannelResponse>, callback: grpc_1.sendUnaryData<QueryChannelResponse>): void;
        abstract Channels(call: grpc_1.ServerUnaryCall<QueryChannelsRequest, QueryChannelsResponse>, callback: grpc_1.sendUnaryData<QueryChannelsResponse>): void;
        abstract ConnectionChannels(call: grpc_1.ServerUnaryCall<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>, callback: grpc_1.sendUnaryData<QueryConnectionChannelsResponse>): void;
        abstract ChannelClientState(call: grpc_1.ServerUnaryCall<QueryChannelClientStateRequest, QueryChannelClientStateResponse>, callback: grpc_1.sendUnaryData<QueryChannelClientStateResponse>): void;
        abstract ChannelConsensusState(call: grpc_1.ServerUnaryCall<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>, callback: grpc_1.sendUnaryData<QueryChannelConsensusStateResponse>): void;
        abstract PacketCommitment(call: grpc_1.ServerUnaryCall<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>, callback: grpc_1.sendUnaryData<QueryPacketCommitmentResponse>): void;
        abstract PacketCommitments(call: grpc_1.ServerUnaryCall<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>, callback: grpc_1.sendUnaryData<QueryPacketCommitmentsResponse>): void;
        abstract PacketReceipt(call: grpc_1.ServerUnaryCall<QueryPacketReceiptRequest, QueryPacketReceiptResponse>, callback: grpc_1.sendUnaryData<QueryPacketReceiptResponse>): void;
        abstract PacketAcknowledgement(call: grpc_1.ServerUnaryCall<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>, callback: grpc_1.sendUnaryData<QueryPacketAcknowledgementResponse>): void;
        abstract PacketAcknowledgements(call: grpc_1.ServerUnaryCall<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>, callback: grpc_1.sendUnaryData<QueryPacketAcknowledgementsResponse>): void;
        abstract UnreceivedPackets(call: grpc_1.ServerUnaryCall<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>, callback: grpc_1.sendUnaryData<QueryUnreceivedPacketsResponse>): void;
        abstract UnreceivedAcks(call: grpc_1.ServerUnaryCall<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>, callback: grpc_1.sendUnaryData<QueryUnreceivedAcksResponse>): void;
        abstract NextSequenceReceive(call: grpc_1.ServerUnaryCall<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>, callback: grpc_1.sendUnaryData<QueryNextSequenceReceiveResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Channel: GrpcUnaryServiceInterface<QueryChannelRequest, QueryChannelResponse>;
        Channels: GrpcUnaryServiceInterface<QueryChannelsRequest, QueryChannelsResponse>;
        ConnectionChannels: GrpcUnaryServiceInterface<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>;
        ChannelClientState: GrpcUnaryServiceInterface<QueryChannelClientStateRequest, QueryChannelClientStateResponse>;
        ChannelConsensusState: GrpcUnaryServiceInterface<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>;
        PacketCommitment: GrpcUnaryServiceInterface<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>;
        PacketCommitments: GrpcUnaryServiceInterface<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>;
        PacketReceipt: GrpcUnaryServiceInterface<QueryPacketReceiptRequest, QueryPacketReceiptResponse>;
        PacketAcknowledgement: GrpcUnaryServiceInterface<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>;
        PacketAcknowledgements: GrpcUnaryServiceInterface<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>;
        UnreceivedPackets: GrpcUnaryServiceInterface<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>;
        UnreceivedAcks: GrpcUnaryServiceInterface<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>;
        NextSequenceReceive: GrpcUnaryServiceInterface<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>;
    }
    export {};
}
//# sourceMappingURL=query.d.ts.map