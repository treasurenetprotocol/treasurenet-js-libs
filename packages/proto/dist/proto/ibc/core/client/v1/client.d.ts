import * as dependency_2 from "./../../../../google/protobuf/any";
import * as dependency_3 from "./../../../../cosmos/upgrade/v1beta1/upgrade";
import * as pb_1 from "google-protobuf";
export declare namespace ibc.core.client.v1 {
    class IdentifiedClientState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            client_id?: string;
            client_state?: dependency_2.google.protobuf.Any;
        });
        get client_id(): string;
        set client_id(value: string);
        get client_state(): dependency_2.google.protobuf.Any;
        set client_state(value: dependency_2.google.protobuf.Any);
        get has_client_state(): boolean;
        static fromObject(data: {
            client_id?: string;
            client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        }): IdentifiedClientState;
        toObject(): {
            client_id?: string;
            client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IdentifiedClientState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): IdentifiedClientState;
    }
    class ConsensusStateWithHeight extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            height?: Height;
            consensus_state?: dependency_2.google.protobuf.Any;
        });
        get height(): Height;
        set height(value: Height);
        get has_height(): boolean;
        get consensus_state(): dependency_2.google.protobuf.Any;
        set consensus_state(value: dependency_2.google.protobuf.Any);
        get has_consensus_state(): boolean;
        static fromObject(data: {
            height?: ReturnType<typeof Height.prototype.toObject>;
            consensus_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        }): ConsensusStateWithHeight;
        toObject(): {
            height?: ReturnType<typeof Height.prototype.toObject>;
            consensus_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ConsensusStateWithHeight;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ConsensusStateWithHeight;
    }
    class ClientConsensusStates extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            client_id?: string;
            consensus_states?: ConsensusStateWithHeight[];
        });
        get client_id(): string;
        set client_id(value: string);
        get consensus_states(): ConsensusStateWithHeight[];
        set consensus_states(value: ConsensusStateWithHeight[]);
        static fromObject(data: {
            client_id?: string;
            consensus_states?: ReturnType<typeof ConsensusStateWithHeight.prototype.toObject>[];
        }): ClientConsensusStates;
        toObject(): {
            client_id?: string;
            consensus_states?: ReturnType<typeof ConsensusStateWithHeight.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ClientConsensusStates;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ClientConsensusStates;
    }
    class ClientUpdateProposal extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            subject_client_id?: string;
            substitute_client_id?: string;
        });
        get title(): string;
        set title(value: string);
        get description(): string;
        set description(value: string);
        get subject_client_id(): string;
        set subject_client_id(value: string);
        get substitute_client_id(): string;
        set substitute_client_id(value: string);
        static fromObject(data: {
            title?: string;
            description?: string;
            subject_client_id?: string;
            substitute_client_id?: string;
        }): ClientUpdateProposal;
        toObject(): {
            title?: string;
            description?: string;
            subject_client_id?: string;
            substitute_client_id?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ClientUpdateProposal;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ClientUpdateProposal;
    }
    class UpgradeProposal extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            plan?: dependency_3.cosmos.upgrade.v1beta1.Plan;
            upgraded_client_state?: dependency_2.google.protobuf.Any;
        });
        get title(): string;
        set title(value: string);
        get description(): string;
        set description(value: string);
        get plan(): dependency_3.cosmos.upgrade.v1beta1.Plan;
        set plan(value: dependency_3.cosmos.upgrade.v1beta1.Plan);
        get has_plan(): boolean;
        get upgraded_client_state(): dependency_2.google.protobuf.Any;
        set upgraded_client_state(value: dependency_2.google.protobuf.Any);
        get has_upgraded_client_state(): boolean;
        static fromObject(data: {
            title?: string;
            description?: string;
            plan?: ReturnType<typeof dependency_3.cosmos.upgrade.v1beta1.Plan.prototype.toObject>;
            upgraded_client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        }): UpgradeProposal;
        toObject(): {
            title?: string;
            description?: string;
            plan?: ReturnType<typeof dependency_3.cosmos.upgrade.v1beta1.Plan.prototype.toObject>;
            upgraded_client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UpgradeProposal;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): UpgradeProposal;
    }
    class Height extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            revision_number?: number;
            revision_height?: number;
        });
        get revision_number(): number;
        set revision_number(value: number);
        get revision_height(): number;
        set revision_height(value: number);
        static fromObject(data: {
            revision_number?: number;
            revision_height?: number;
        }): Height;
        toObject(): {
            revision_number?: number;
            revision_height?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Height;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Height;
    }
    class Params extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            allowed_clients?: string[];
        });
        get allowed_clients(): string[];
        set allowed_clients(value: string[]);
        static fromObject(data: {
            allowed_clients?: string[];
        }): Params;
        toObject(): {
            allowed_clients?: string[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Params;
    }
}
//# sourceMappingURL=client.d.ts.map