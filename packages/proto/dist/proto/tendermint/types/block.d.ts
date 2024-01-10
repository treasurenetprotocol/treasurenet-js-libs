import * as dependency_2 from "./types";
import * as dependency_3 from "./evidence";
import * as pb_1 from "google-protobuf";
export declare namespace tendermint.types {
    class Block extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            header?: dependency_2.tendermint.types.Header;
            data?: dependency_2.tendermint.types.Data;
            evidence?: dependency_3.tendermint.types.EvidenceList;
            last_commit?: dependency_2.tendermint.types.Commit;
        });
        get header(): dependency_2.tendermint.types.Header;
        set header(value: dependency_2.tendermint.types.Header);
        get has_header(): boolean;
        get data(): dependency_2.tendermint.types.Data;
        set data(value: dependency_2.tendermint.types.Data);
        get has_data(): boolean;
        get evidence(): dependency_3.tendermint.types.EvidenceList;
        set evidence(value: dependency_3.tendermint.types.EvidenceList);
        get has_evidence(): boolean;
        get last_commit(): dependency_2.tendermint.types.Commit;
        set last_commit(value: dependency_2.tendermint.types.Commit);
        get has_last_commit(): boolean;
        static fromObject(data: {
            header?: ReturnType<typeof dependency_2.tendermint.types.Header.prototype.toObject>;
            data?: ReturnType<typeof dependency_2.tendermint.types.Data.prototype.toObject>;
            evidence?: ReturnType<typeof dependency_3.tendermint.types.EvidenceList.prototype.toObject>;
            last_commit?: ReturnType<typeof dependency_2.tendermint.types.Commit.prototype.toObject>;
        }): Block;
        toObject(): {
            header?: ReturnType<typeof dependency_2.tendermint.types.Header.prototype.toObject>;
            data?: ReturnType<typeof dependency_2.tendermint.types.Data.prototype.toObject>;
            evidence?: ReturnType<typeof dependency_3.tendermint.types.EvidenceList.prototype.toObject>;
            last_commit?: ReturnType<typeof dependency_2.tendermint.types.Commit.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Block;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Block;
    }
}
//# sourceMappingURL=block.d.ts.map