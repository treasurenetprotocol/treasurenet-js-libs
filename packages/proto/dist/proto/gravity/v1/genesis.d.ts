import * as dependency_2 from "./types";
import * as dependency_3 from "./msgs";
import * as dependency_4 from "./batch";
import * as dependency_5 from "./attestation";
import * as dependency_6 from "./../../cosmos/base/v1beta1/coin";
import * as pb_1 from "google-protobuf";
export declare namespace gravity.v1 {
    class Params extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            gravity_id?: string;
            contract_source_hash?: string;
            bridge_ethereum_address?: string;
            bridge_chain_id?: number;
            signed_valsets_window?: number;
            signed_batches_window?: number;
            signed_logic_calls_window?: number;
            target_batch_timeout?: number;
            average_block_time?: number;
            average_ethereum_block_time?: number;
            slash_fraction_valset?: Uint8Array;
            slash_fraction_batch?: Uint8Array;
            slash_fraction_logic_call?: Uint8Array;
            unbond_slashing_valsets_window?: number;
            slash_fraction_bad_eth_signature?: Uint8Array;
            valset_reward?: dependency_6.cosmos.base.v1beta1.Coin;
            bridge_active?: boolean;
            ethereum_blacklist?: string[];
        });
        get gravity_id(): string;
        set gravity_id(value: string);
        get contract_source_hash(): string;
        set contract_source_hash(value: string);
        get bridge_ethereum_address(): string;
        set bridge_ethereum_address(value: string);
        get bridge_chain_id(): number;
        set bridge_chain_id(value: number);
        get signed_valsets_window(): number;
        set signed_valsets_window(value: number);
        get signed_batches_window(): number;
        set signed_batches_window(value: number);
        get signed_logic_calls_window(): number;
        set signed_logic_calls_window(value: number);
        get target_batch_timeout(): number;
        set target_batch_timeout(value: number);
        get average_block_time(): number;
        set average_block_time(value: number);
        get average_ethereum_block_time(): number;
        set average_ethereum_block_time(value: number);
        get slash_fraction_valset(): Uint8Array;
        set slash_fraction_valset(value: Uint8Array);
        get slash_fraction_batch(): Uint8Array;
        set slash_fraction_batch(value: Uint8Array);
        get slash_fraction_logic_call(): Uint8Array;
        set slash_fraction_logic_call(value: Uint8Array);
        get unbond_slashing_valsets_window(): number;
        set unbond_slashing_valsets_window(value: number);
        get slash_fraction_bad_eth_signature(): Uint8Array;
        set slash_fraction_bad_eth_signature(value: Uint8Array);
        get valset_reward(): dependency_6.cosmos.base.v1beta1.Coin;
        set valset_reward(value: dependency_6.cosmos.base.v1beta1.Coin);
        get has_valset_reward(): boolean;
        get bridge_active(): boolean;
        set bridge_active(value: boolean);
        get ethereum_blacklist(): string[];
        set ethereum_blacklist(value: string[]);
        static fromObject(data: {
            gravity_id?: string;
            contract_source_hash?: string;
            bridge_ethereum_address?: string;
            bridge_chain_id?: number;
            signed_valsets_window?: number;
            signed_batches_window?: number;
            signed_logic_calls_window?: number;
            target_batch_timeout?: number;
            average_block_time?: number;
            average_ethereum_block_time?: number;
            slash_fraction_valset?: Uint8Array;
            slash_fraction_batch?: Uint8Array;
            slash_fraction_logic_call?: Uint8Array;
            unbond_slashing_valsets_window?: number;
            slash_fraction_bad_eth_signature?: Uint8Array;
            valset_reward?: ReturnType<typeof dependency_6.cosmos.base.v1beta1.Coin.prototype.toObject>;
            bridge_active?: boolean;
            ethereum_blacklist?: string[];
        }): Params;
        toObject(): {
            gravity_id?: string;
            contract_source_hash?: string;
            bridge_ethereum_address?: string;
            bridge_chain_id?: number;
            signed_valsets_window?: number;
            signed_batches_window?: number;
            signed_logic_calls_window?: number;
            target_batch_timeout?: number;
            average_block_time?: number;
            average_ethereum_block_time?: number;
            slash_fraction_valset?: Uint8Array;
            slash_fraction_batch?: Uint8Array;
            slash_fraction_logic_call?: Uint8Array;
            unbond_slashing_valsets_window?: number;
            slash_fraction_bad_eth_signature?: Uint8Array;
            valset_reward?: ReturnType<typeof dependency_6.cosmos.base.v1beta1.Coin.prototype.toObject>;
            bridge_active?: boolean;
            ethereum_blacklist?: string[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Params;
    }
    class GenesisState extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            params?: Params;
            gravity_nonces?: GravityNonces;
            valsets?: dependency_2.gravity.v1.Valset[];
            valset_confirms?: dependency_3.gravity.v1.MsgValsetConfirm[];
            batches?: dependency_4.gravity.v1.OutgoingTxBatch[];
            batch_confirms?: dependency_3.gravity.v1.MsgConfirmBatch[];
            logic_calls?: dependency_4.gravity.v1.OutgoingLogicCall[];
            logic_call_confirms?: dependency_3.gravity.v1.MsgConfirmLogicCall[];
            attestations?: dependency_5.gravity.v1.Attestation[];
            delegate_keys?: dependency_3.gravity.v1.MsgSetOrchestratorAddress[];
            erc20_to_denoms?: dependency_2.gravity.v1.ERC20ToDenom[];
            unbatched_transfers?: dependency_4.gravity.v1.OutgoingTransferTx[];
        });
        get params(): Params;
        set params(value: Params);
        get has_params(): boolean;
        get gravity_nonces(): GravityNonces;
        set gravity_nonces(value: GravityNonces);
        get has_gravity_nonces(): boolean;
        get valsets(): dependency_2.gravity.v1.Valset[];
        set valsets(value: dependency_2.gravity.v1.Valset[]);
        get valset_confirms(): dependency_3.gravity.v1.MsgValsetConfirm[];
        set valset_confirms(value: dependency_3.gravity.v1.MsgValsetConfirm[]);
        get batches(): dependency_4.gravity.v1.OutgoingTxBatch[];
        set batches(value: dependency_4.gravity.v1.OutgoingTxBatch[]);
        get batch_confirms(): dependency_3.gravity.v1.MsgConfirmBatch[];
        set batch_confirms(value: dependency_3.gravity.v1.MsgConfirmBatch[]);
        get logic_calls(): dependency_4.gravity.v1.OutgoingLogicCall[];
        set logic_calls(value: dependency_4.gravity.v1.OutgoingLogicCall[]);
        get logic_call_confirms(): dependency_3.gravity.v1.MsgConfirmLogicCall[];
        set logic_call_confirms(value: dependency_3.gravity.v1.MsgConfirmLogicCall[]);
        get attestations(): dependency_5.gravity.v1.Attestation[];
        set attestations(value: dependency_5.gravity.v1.Attestation[]);
        get delegate_keys(): dependency_3.gravity.v1.MsgSetOrchestratorAddress[];
        set delegate_keys(value: dependency_3.gravity.v1.MsgSetOrchestratorAddress[]);
        get erc20_to_denoms(): dependency_2.gravity.v1.ERC20ToDenom[];
        set erc20_to_denoms(value: dependency_2.gravity.v1.ERC20ToDenom[]);
        get unbatched_transfers(): dependency_4.gravity.v1.OutgoingTransferTx[];
        set unbatched_transfers(value: dependency_4.gravity.v1.OutgoingTransferTx[]);
        static fromObject(data: {
            params?: ReturnType<typeof Params.prototype.toObject>;
            gravity_nonces?: ReturnType<typeof GravityNonces.prototype.toObject>;
            valsets?: ReturnType<typeof dependency_2.gravity.v1.Valset.prototype.toObject>[];
            valset_confirms?: ReturnType<typeof dependency_3.gravity.v1.MsgValsetConfirm.prototype.toObject>[];
            batches?: ReturnType<typeof dependency_4.gravity.v1.OutgoingTxBatch.prototype.toObject>[];
            batch_confirms?: ReturnType<typeof dependency_3.gravity.v1.MsgConfirmBatch.prototype.toObject>[];
            logic_calls?: ReturnType<typeof dependency_4.gravity.v1.OutgoingLogicCall.prototype.toObject>[];
            logic_call_confirms?: ReturnType<typeof dependency_3.gravity.v1.MsgConfirmLogicCall.prototype.toObject>[];
            attestations?: ReturnType<typeof dependency_5.gravity.v1.Attestation.prototype.toObject>[];
            delegate_keys?: ReturnType<typeof dependency_3.gravity.v1.MsgSetOrchestratorAddress.prototype.toObject>[];
            erc20_to_denoms?: ReturnType<typeof dependency_2.gravity.v1.ERC20ToDenom.prototype.toObject>[];
            unbatched_transfers?: ReturnType<typeof dependency_4.gravity.v1.OutgoingTransferTx.prototype.toObject>[];
        }): GenesisState;
        toObject(): {
            params?: ReturnType<typeof Params.prototype.toObject>;
            gravity_nonces?: ReturnType<typeof GravityNonces.prototype.toObject>;
            valsets?: ReturnType<typeof dependency_2.gravity.v1.Valset.prototype.toObject>[];
            valset_confirms?: ReturnType<typeof dependency_3.gravity.v1.MsgValsetConfirm.prototype.toObject>[];
            batches?: ReturnType<typeof dependency_4.gravity.v1.OutgoingTxBatch.prototype.toObject>[];
            batch_confirms?: ReturnType<typeof dependency_3.gravity.v1.MsgConfirmBatch.prototype.toObject>[];
            logic_calls?: ReturnType<typeof dependency_4.gravity.v1.OutgoingLogicCall.prototype.toObject>[];
            logic_call_confirms?: ReturnType<typeof dependency_3.gravity.v1.MsgConfirmLogicCall.prototype.toObject>[];
            attestations?: ReturnType<typeof dependency_5.gravity.v1.Attestation.prototype.toObject>[];
            delegate_keys?: ReturnType<typeof dependency_3.gravity.v1.MsgSetOrchestratorAddress.prototype.toObject>[];
            erc20_to_denoms?: ReturnType<typeof dependency_2.gravity.v1.ERC20ToDenom.prototype.toObject>[];
            unbatched_transfers?: ReturnType<typeof dependency_4.gravity.v1.OutgoingTransferTx.prototype.toObject>[];
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
    class GravityNonces extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            latest_valset_nonce?: number;
            last_observed_nonce?: number;
            last_slashed_valset_nonce?: number;
            last_slashed_batch_block?: number;
            last_slashed_logic_call_block?: number;
            last_tx_pool_id?: number;
            last_batch_id?: number;
        });
        get latest_valset_nonce(): number;
        set latest_valset_nonce(value: number);
        get last_observed_nonce(): number;
        set last_observed_nonce(value: number);
        get last_slashed_valset_nonce(): number;
        set last_slashed_valset_nonce(value: number);
        get last_slashed_batch_block(): number;
        set last_slashed_batch_block(value: number);
        get last_slashed_logic_call_block(): number;
        set last_slashed_logic_call_block(value: number);
        get last_tx_pool_id(): number;
        set last_tx_pool_id(value: number);
        get last_batch_id(): number;
        set last_batch_id(value: number);
        static fromObject(data: {
            latest_valset_nonce?: number;
            last_observed_nonce?: number;
            last_slashed_valset_nonce?: number;
            last_slashed_batch_block?: number;
            last_slashed_logic_call_block?: number;
            last_tx_pool_id?: number;
            last_batch_id?: number;
        }): GravityNonces;
        toObject(): {
            latest_valset_nonce?: number;
            last_observed_nonce?: number;
            last_slashed_valset_nonce?: number;
            last_slashed_batch_block?: number;
            last_slashed_logic_call_block?: number;
            last_tx_pool_id?: number;
            last_batch_id?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GravityNonces;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GravityNonces;
    }
}
//# sourceMappingURL=genesis.d.ts.map