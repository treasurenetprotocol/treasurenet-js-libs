"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gravity = void 0;
const dependency_2 = __importStar(require("./types"));
const dependency_3 = __importStar(require("./msgs"));
const dependency_4 = __importStar(require("./batch"));
const dependency_5 = __importStar(require("./attestation"));
const dependency_6 = __importStar(require("./../../cosmos/base/v1beta1/coin"));
const pb_1 = __importStar(require("google-protobuf"));
var gravity;
(function (gravity) {
    var v1;
    (function (v1) {
        var _Params_one_of_decls, _GenesisState_one_of_decls, _GravityNonces_one_of_decls;
        class Params extends pb_1.Message {
            constructor(data) {
                super();
                _Params_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [19], __classPrivateFieldGet(this, _Params_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("gravity_id" in data && data.gravity_id != undefined) {
                        this.gravity_id = data.gravity_id;
                    }
                    if ("contract_source_hash" in data && data.contract_source_hash != undefined) {
                        this.contract_source_hash = data.contract_source_hash;
                    }
                    if ("bridge_ethereum_address" in data && data.bridge_ethereum_address != undefined) {
                        this.bridge_ethereum_address = data.bridge_ethereum_address;
                    }
                    if ("bridge_chain_id" in data && data.bridge_chain_id != undefined) {
                        this.bridge_chain_id = data.bridge_chain_id;
                    }
                    if ("signed_valsets_window" in data && data.signed_valsets_window != undefined) {
                        this.signed_valsets_window = data.signed_valsets_window;
                    }
                    if ("signed_batches_window" in data && data.signed_batches_window != undefined) {
                        this.signed_batches_window = data.signed_batches_window;
                    }
                    if ("signed_logic_calls_window" in data && data.signed_logic_calls_window != undefined) {
                        this.signed_logic_calls_window = data.signed_logic_calls_window;
                    }
                    if ("target_batch_timeout" in data && data.target_batch_timeout != undefined) {
                        this.target_batch_timeout = data.target_batch_timeout;
                    }
                    if ("average_block_time" in data && data.average_block_time != undefined) {
                        this.average_block_time = data.average_block_time;
                    }
                    if ("average_ethereum_block_time" in data && data.average_ethereum_block_time != undefined) {
                        this.average_ethereum_block_time = data.average_ethereum_block_time;
                    }
                    if ("slash_fraction_valset" in data && data.slash_fraction_valset != undefined) {
                        this.slash_fraction_valset = data.slash_fraction_valset;
                    }
                    if ("slash_fraction_batch" in data && data.slash_fraction_batch != undefined) {
                        this.slash_fraction_batch = data.slash_fraction_batch;
                    }
                    if ("slash_fraction_logic_call" in data && data.slash_fraction_logic_call != undefined) {
                        this.slash_fraction_logic_call = data.slash_fraction_logic_call;
                    }
                    if ("unbond_slashing_valsets_window" in data && data.unbond_slashing_valsets_window != undefined) {
                        this.unbond_slashing_valsets_window = data.unbond_slashing_valsets_window;
                    }
                    if ("slash_fraction_bad_eth_signature" in data && data.slash_fraction_bad_eth_signature != undefined) {
                        this.slash_fraction_bad_eth_signature = data.slash_fraction_bad_eth_signature;
                    }
                    if ("valset_reward" in data && data.valset_reward != undefined) {
                        this.valset_reward = data.valset_reward;
                    }
                    if ("bridge_active" in data && data.bridge_active != undefined) {
                        this.bridge_active = data.bridge_active;
                    }
                    if ("ethereum_blacklist" in data && data.ethereum_blacklist != undefined) {
                        this.ethereum_blacklist = data.ethereum_blacklist;
                    }
                }
            }
            get gravity_id() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set gravity_id(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get contract_source_hash() {
                return pb_1.Message.getFieldWithDefault(this, 2, "");
            }
            set contract_source_hash(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get bridge_ethereum_address() {
                return pb_1.Message.getFieldWithDefault(this, 4, "");
            }
            set bridge_ethereum_address(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get bridge_chain_id() {
                return pb_1.Message.getFieldWithDefault(this, 5, 0);
            }
            set bridge_chain_id(value) {
                pb_1.Message.setField(this, 5, value);
            }
            get signed_valsets_window() {
                return pb_1.Message.getFieldWithDefault(this, 6, 0);
            }
            set signed_valsets_window(value) {
                pb_1.Message.setField(this, 6, value);
            }
            get signed_batches_window() {
                return pb_1.Message.getFieldWithDefault(this, 7, 0);
            }
            set signed_batches_window(value) {
                pb_1.Message.setField(this, 7, value);
            }
            get signed_logic_calls_window() {
                return pb_1.Message.getFieldWithDefault(this, 8, 0);
            }
            set signed_logic_calls_window(value) {
                pb_1.Message.setField(this, 8, value);
            }
            get target_batch_timeout() {
                return pb_1.Message.getFieldWithDefault(this, 9, 0);
            }
            set target_batch_timeout(value) {
                pb_1.Message.setField(this, 9, value);
            }
            get average_block_time() {
                return pb_1.Message.getFieldWithDefault(this, 10, 0);
            }
            set average_block_time(value) {
                pb_1.Message.setField(this, 10, value);
            }
            get average_ethereum_block_time() {
                return pb_1.Message.getFieldWithDefault(this, 11, 0);
            }
            set average_ethereum_block_time(value) {
                pb_1.Message.setField(this, 11, value);
            }
            get slash_fraction_valset() {
                return pb_1.Message.getFieldWithDefault(this, 12, new Uint8Array(0));
            }
            set slash_fraction_valset(value) {
                pb_1.Message.setField(this, 12, value);
            }
            get slash_fraction_batch() {
                return pb_1.Message.getFieldWithDefault(this, 13, new Uint8Array(0));
            }
            set slash_fraction_batch(value) {
                pb_1.Message.setField(this, 13, value);
            }
            get slash_fraction_logic_call() {
                return pb_1.Message.getFieldWithDefault(this, 14, new Uint8Array(0));
            }
            set slash_fraction_logic_call(value) {
                pb_1.Message.setField(this, 14, value);
            }
            get unbond_slashing_valsets_window() {
                return pb_1.Message.getFieldWithDefault(this, 15, 0);
            }
            set unbond_slashing_valsets_window(value) {
                pb_1.Message.setField(this, 15, value);
            }
            get slash_fraction_bad_eth_signature() {
                return pb_1.Message.getFieldWithDefault(this, 16, new Uint8Array(0));
            }
            set slash_fraction_bad_eth_signature(value) {
                pb_1.Message.setField(this, 16, value);
            }
            get valset_reward() {
                return pb_1.Message.getWrapperField(this, dependency_6.cosmos.base.v1beta1.Coin, 17);
            }
            set valset_reward(value) {
                pb_1.Message.setWrapperField(this, 17, value);
            }
            get has_valset_reward() {
                return pb_1.Message.getField(this, 17) != null;
            }
            get bridge_active() {
                return pb_1.Message.getFieldWithDefault(this, 18, false);
            }
            set bridge_active(value) {
                pb_1.Message.setField(this, 18, value);
            }
            get ethereum_blacklist() {
                return pb_1.Message.getFieldWithDefault(this, 19, []);
            }
            set ethereum_blacklist(value) {
                pb_1.Message.setField(this, 19, value);
            }
            static fromObject(data) {
                const message = new Params({});
                if (data.gravity_id != null) {
                    message.gravity_id = data.gravity_id;
                }
                if (data.contract_source_hash != null) {
                    message.contract_source_hash = data.contract_source_hash;
                }
                if (data.bridge_ethereum_address != null) {
                    message.bridge_ethereum_address = data.bridge_ethereum_address;
                }
                if (data.bridge_chain_id != null) {
                    message.bridge_chain_id = data.bridge_chain_id;
                }
                if (data.signed_valsets_window != null) {
                    message.signed_valsets_window = data.signed_valsets_window;
                }
                if (data.signed_batches_window != null) {
                    message.signed_batches_window = data.signed_batches_window;
                }
                if (data.signed_logic_calls_window != null) {
                    message.signed_logic_calls_window = data.signed_logic_calls_window;
                }
                if (data.target_batch_timeout != null) {
                    message.target_batch_timeout = data.target_batch_timeout;
                }
                if (data.average_block_time != null) {
                    message.average_block_time = data.average_block_time;
                }
                if (data.average_ethereum_block_time != null) {
                    message.average_ethereum_block_time = data.average_ethereum_block_time;
                }
                if (data.slash_fraction_valset != null) {
                    message.slash_fraction_valset = data.slash_fraction_valset;
                }
                if (data.slash_fraction_batch != null) {
                    message.slash_fraction_batch = data.slash_fraction_batch;
                }
                if (data.slash_fraction_logic_call != null) {
                    message.slash_fraction_logic_call = data.slash_fraction_logic_call;
                }
                if (data.unbond_slashing_valsets_window != null) {
                    message.unbond_slashing_valsets_window = data.unbond_slashing_valsets_window;
                }
                if (data.slash_fraction_bad_eth_signature != null) {
                    message.slash_fraction_bad_eth_signature = data.slash_fraction_bad_eth_signature;
                }
                if (data.valset_reward != null) {
                    message.valset_reward = dependency_6.cosmos.base.v1beta1.Coin.fromObject(data.valset_reward);
                }
                if (data.bridge_active != null) {
                    message.bridge_active = data.bridge_active;
                }
                if (data.ethereum_blacklist != null) {
                    message.ethereum_blacklist = data.ethereum_blacklist;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.gravity_id != null) {
                    data.gravity_id = this.gravity_id;
                }
                if (this.contract_source_hash != null) {
                    data.contract_source_hash = this.contract_source_hash;
                }
                if (this.bridge_ethereum_address != null) {
                    data.bridge_ethereum_address = this.bridge_ethereum_address;
                }
                if (this.bridge_chain_id != null) {
                    data.bridge_chain_id = this.bridge_chain_id;
                }
                if (this.signed_valsets_window != null) {
                    data.signed_valsets_window = this.signed_valsets_window;
                }
                if (this.signed_batches_window != null) {
                    data.signed_batches_window = this.signed_batches_window;
                }
                if (this.signed_logic_calls_window != null) {
                    data.signed_logic_calls_window = this.signed_logic_calls_window;
                }
                if (this.target_batch_timeout != null) {
                    data.target_batch_timeout = this.target_batch_timeout;
                }
                if (this.average_block_time != null) {
                    data.average_block_time = this.average_block_time;
                }
                if (this.average_ethereum_block_time != null) {
                    data.average_ethereum_block_time = this.average_ethereum_block_time;
                }
                if (this.slash_fraction_valset != null) {
                    data.slash_fraction_valset = this.slash_fraction_valset;
                }
                if (this.slash_fraction_batch != null) {
                    data.slash_fraction_batch = this.slash_fraction_batch;
                }
                if (this.slash_fraction_logic_call != null) {
                    data.slash_fraction_logic_call = this.slash_fraction_logic_call;
                }
                if (this.unbond_slashing_valsets_window != null) {
                    data.unbond_slashing_valsets_window = this.unbond_slashing_valsets_window;
                }
                if (this.slash_fraction_bad_eth_signature != null) {
                    data.slash_fraction_bad_eth_signature = this.slash_fraction_bad_eth_signature;
                }
                if (this.valset_reward != null) {
                    data.valset_reward = this.valset_reward.toObject();
                }
                if (this.bridge_active != null) {
                    data.bridge_active = this.bridge_active;
                }
                if (this.ethereum_blacklist != null) {
                    data.ethereum_blacklist = this.ethereum_blacklist;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.gravity_id.length)
                    writer.writeString(1, this.gravity_id);
                if (this.contract_source_hash.length)
                    writer.writeString(2, this.contract_source_hash);
                if (this.bridge_ethereum_address.length)
                    writer.writeString(4, this.bridge_ethereum_address);
                if (this.bridge_chain_id != 0)
                    writer.writeUint64(5, this.bridge_chain_id);
                if (this.signed_valsets_window != 0)
                    writer.writeUint64(6, this.signed_valsets_window);
                if (this.signed_batches_window != 0)
                    writer.writeUint64(7, this.signed_batches_window);
                if (this.signed_logic_calls_window != 0)
                    writer.writeUint64(8, this.signed_logic_calls_window);
                if (this.target_batch_timeout != 0)
                    writer.writeUint64(9, this.target_batch_timeout);
                if (this.average_block_time != 0)
                    writer.writeUint64(10, this.average_block_time);
                if (this.average_ethereum_block_time != 0)
                    writer.writeUint64(11, this.average_ethereum_block_time);
                if (this.slash_fraction_valset.length)
                    writer.writeBytes(12, this.slash_fraction_valset);
                if (this.slash_fraction_batch.length)
                    writer.writeBytes(13, this.slash_fraction_batch);
                if (this.slash_fraction_logic_call.length)
                    writer.writeBytes(14, this.slash_fraction_logic_call);
                if (this.unbond_slashing_valsets_window != 0)
                    writer.writeUint64(15, this.unbond_slashing_valsets_window);
                if (this.slash_fraction_bad_eth_signature.length)
                    writer.writeBytes(16, this.slash_fraction_bad_eth_signature);
                if (this.has_valset_reward)
                    writer.writeMessage(17, this.valset_reward, () => this.valset_reward.serialize(writer));
                if (this.bridge_active != false)
                    writer.writeBool(18, this.bridge_active);
                if (this.ethereum_blacklist.length)
                    writer.writeRepeatedString(19, this.ethereum_blacklist);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Params();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.gravity_id = reader.readString();
                            break;
                        case 2:
                            message.contract_source_hash = reader.readString();
                            break;
                        case 4:
                            message.bridge_ethereum_address = reader.readString();
                            break;
                        case 5:
                            message.bridge_chain_id = reader.readUint64();
                            break;
                        case 6:
                            message.signed_valsets_window = reader.readUint64();
                            break;
                        case 7:
                            message.signed_batches_window = reader.readUint64();
                            break;
                        case 8:
                            message.signed_logic_calls_window = reader.readUint64();
                            break;
                        case 9:
                            message.target_batch_timeout = reader.readUint64();
                            break;
                        case 10:
                            message.average_block_time = reader.readUint64();
                            break;
                        case 11:
                            message.average_ethereum_block_time = reader.readUint64();
                            break;
                        case 12:
                            message.slash_fraction_valset = reader.readBytes();
                            break;
                        case 13:
                            message.slash_fraction_batch = reader.readBytes();
                            break;
                        case 14:
                            message.slash_fraction_logic_call = reader.readBytes();
                            break;
                        case 15:
                            message.unbond_slashing_valsets_window = reader.readUint64();
                            break;
                        case 16:
                            message.slash_fraction_bad_eth_signature = reader.readBytes();
                            break;
                        case 17:
                            reader.readMessage(message.valset_reward, () => message.valset_reward = dependency_6.cosmos.base.v1beta1.Coin.deserialize(reader));
                            break;
                        case 18:
                            message.bridge_active = reader.readBool();
                            break;
                        case 19:
                            pb_1.Message.addToRepeatedField(message, 19, reader.readString());
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary() {
                return this.serialize();
            }
            static deserializeBinary(bytes) {
                return Params.deserialize(bytes);
            }
        }
        _Params_one_of_decls = new WeakMap();
        v1.Params = Params;
        class GenesisState extends pb_1.Message {
            constructor(data) {
                super();
                _GenesisState_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3, 4, 5, 6, 7, 8, 9, 10, 11, 12], __classPrivateFieldGet(this, _GenesisState_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("params" in data && data.params != undefined) {
                        this.params = data.params;
                    }
                    if ("gravity_nonces" in data && data.gravity_nonces != undefined) {
                        this.gravity_nonces = data.gravity_nonces;
                    }
                    if ("valsets" in data && data.valsets != undefined) {
                        this.valsets = data.valsets;
                    }
                    if ("valset_confirms" in data && data.valset_confirms != undefined) {
                        this.valset_confirms = data.valset_confirms;
                    }
                    if ("batches" in data && data.batches != undefined) {
                        this.batches = data.batches;
                    }
                    if ("batch_confirms" in data && data.batch_confirms != undefined) {
                        this.batch_confirms = data.batch_confirms;
                    }
                    if ("logic_calls" in data && data.logic_calls != undefined) {
                        this.logic_calls = data.logic_calls;
                    }
                    if ("logic_call_confirms" in data && data.logic_call_confirms != undefined) {
                        this.logic_call_confirms = data.logic_call_confirms;
                    }
                    if ("attestations" in data && data.attestations != undefined) {
                        this.attestations = data.attestations;
                    }
                    if ("delegate_keys" in data && data.delegate_keys != undefined) {
                        this.delegate_keys = data.delegate_keys;
                    }
                    if ("erc20_to_denoms" in data && data.erc20_to_denoms != undefined) {
                        this.erc20_to_denoms = data.erc20_to_denoms;
                    }
                    if ("unbatched_transfers" in data && data.unbatched_transfers != undefined) {
                        this.unbatched_transfers = data.unbatched_transfers;
                    }
                }
            }
            get params() {
                return pb_1.Message.getWrapperField(this, Params, 1);
            }
            set params(value) {
                pb_1.Message.setWrapperField(this, 1, value);
            }
            get has_params() {
                return pb_1.Message.getField(this, 1) != null;
            }
            get gravity_nonces() {
                return pb_1.Message.getWrapperField(this, GravityNonces, 2);
            }
            set gravity_nonces(value) {
                pb_1.Message.setWrapperField(this, 2, value);
            }
            get has_gravity_nonces() {
                return pb_1.Message.getField(this, 2) != null;
            }
            get valsets() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_2.gravity.v1.Valset, 3);
            }
            set valsets(value) {
                pb_1.Message.setRepeatedWrapperField(this, 3, value);
            }
            get valset_confirms() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_3.gravity.v1.MsgValsetConfirm, 4);
            }
            set valset_confirms(value) {
                pb_1.Message.setRepeatedWrapperField(this, 4, value);
            }
            get batches() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_4.gravity.v1.OutgoingTxBatch, 5);
            }
            set batches(value) {
                pb_1.Message.setRepeatedWrapperField(this, 5, value);
            }
            get batch_confirms() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_3.gravity.v1.MsgConfirmBatch, 6);
            }
            set batch_confirms(value) {
                pb_1.Message.setRepeatedWrapperField(this, 6, value);
            }
            get logic_calls() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_4.gravity.v1.OutgoingLogicCall, 7);
            }
            set logic_calls(value) {
                pb_1.Message.setRepeatedWrapperField(this, 7, value);
            }
            get logic_call_confirms() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_3.gravity.v1.MsgConfirmLogicCall, 8);
            }
            set logic_call_confirms(value) {
                pb_1.Message.setRepeatedWrapperField(this, 8, value);
            }
            get attestations() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_5.gravity.v1.Attestation, 9);
            }
            set attestations(value) {
                pb_1.Message.setRepeatedWrapperField(this, 9, value);
            }
            get delegate_keys() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_3.gravity.v1.MsgSetOrchestratorAddress, 10);
            }
            set delegate_keys(value) {
                pb_1.Message.setRepeatedWrapperField(this, 10, value);
            }
            get erc20_to_denoms() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_2.gravity.v1.ERC20ToDenom, 11);
            }
            set erc20_to_denoms(value) {
                pb_1.Message.setRepeatedWrapperField(this, 11, value);
            }
            get unbatched_transfers() {
                return pb_1.Message.getRepeatedWrapperField(this, dependency_4.gravity.v1.OutgoingTransferTx, 12);
            }
            set unbatched_transfers(value) {
                pb_1.Message.setRepeatedWrapperField(this, 12, value);
            }
            static fromObject(data) {
                const message = new GenesisState({});
                if (data.params != null) {
                    message.params = Params.fromObject(data.params);
                }
                if (data.gravity_nonces != null) {
                    message.gravity_nonces = GravityNonces.fromObject(data.gravity_nonces);
                }
                if (data.valsets != null) {
                    message.valsets = data.valsets.map(item => dependency_2.gravity.v1.Valset.fromObject(item));
                }
                if (data.valset_confirms != null) {
                    message.valset_confirms = data.valset_confirms.map(item => dependency_3.gravity.v1.MsgValsetConfirm.fromObject(item));
                }
                if (data.batches != null) {
                    message.batches = data.batches.map(item => dependency_4.gravity.v1.OutgoingTxBatch.fromObject(item));
                }
                if (data.batch_confirms != null) {
                    message.batch_confirms = data.batch_confirms.map(item => dependency_3.gravity.v1.MsgConfirmBatch.fromObject(item));
                }
                if (data.logic_calls != null) {
                    message.logic_calls = data.logic_calls.map(item => dependency_4.gravity.v1.OutgoingLogicCall.fromObject(item));
                }
                if (data.logic_call_confirms != null) {
                    message.logic_call_confirms = data.logic_call_confirms.map(item => dependency_3.gravity.v1.MsgConfirmLogicCall.fromObject(item));
                }
                if (data.attestations != null) {
                    message.attestations = data.attestations.map(item => dependency_5.gravity.v1.Attestation.fromObject(item));
                }
                if (data.delegate_keys != null) {
                    message.delegate_keys = data.delegate_keys.map(item => dependency_3.gravity.v1.MsgSetOrchestratorAddress.fromObject(item));
                }
                if (data.erc20_to_denoms != null) {
                    message.erc20_to_denoms = data.erc20_to_denoms.map(item => dependency_2.gravity.v1.ERC20ToDenom.fromObject(item));
                }
                if (data.unbatched_transfers != null) {
                    message.unbatched_transfers = data.unbatched_transfers.map(item => dependency_4.gravity.v1.OutgoingTransferTx.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.params != null) {
                    data.params = this.params.toObject();
                }
                if (this.gravity_nonces != null) {
                    data.gravity_nonces = this.gravity_nonces.toObject();
                }
                if (this.valsets != null) {
                    data.valsets = this.valsets.map((item) => item.toObject());
                }
                if (this.valset_confirms != null) {
                    data.valset_confirms = this.valset_confirms.map((item) => item.toObject());
                }
                if (this.batches != null) {
                    data.batches = this.batches.map((item) => item.toObject());
                }
                if (this.batch_confirms != null) {
                    data.batch_confirms = this.batch_confirms.map((item) => item.toObject());
                }
                if (this.logic_calls != null) {
                    data.logic_calls = this.logic_calls.map((item) => item.toObject());
                }
                if (this.logic_call_confirms != null) {
                    data.logic_call_confirms = this.logic_call_confirms.map((item) => item.toObject());
                }
                if (this.attestations != null) {
                    data.attestations = this.attestations.map((item) => item.toObject());
                }
                if (this.delegate_keys != null) {
                    data.delegate_keys = this.delegate_keys.map((item) => item.toObject());
                }
                if (this.erc20_to_denoms != null) {
                    data.erc20_to_denoms = this.erc20_to_denoms.map((item) => item.toObject());
                }
                if (this.unbatched_transfers != null) {
                    data.unbatched_transfers = this.unbatched_transfers.map((item) => item.toObject());
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.has_params)
                    writer.writeMessage(1, this.params, () => this.params.serialize(writer));
                if (this.has_gravity_nonces)
                    writer.writeMessage(2, this.gravity_nonces, () => this.gravity_nonces.serialize(writer));
                if (this.valsets.length)
                    writer.writeRepeatedMessage(3, this.valsets, (item) => item.serialize(writer));
                if (this.valset_confirms.length)
                    writer.writeRepeatedMessage(4, this.valset_confirms, (item) => item.serialize(writer));
                if (this.batches.length)
                    writer.writeRepeatedMessage(5, this.batches, (item) => item.serialize(writer));
                if (this.batch_confirms.length)
                    writer.writeRepeatedMessage(6, this.batch_confirms, (item) => item.serialize(writer));
                if (this.logic_calls.length)
                    writer.writeRepeatedMessage(7, this.logic_calls, (item) => item.serialize(writer));
                if (this.logic_call_confirms.length)
                    writer.writeRepeatedMessage(8, this.logic_call_confirms, (item) => item.serialize(writer));
                if (this.attestations.length)
                    writer.writeRepeatedMessage(9, this.attestations, (item) => item.serialize(writer));
                if (this.delegate_keys.length)
                    writer.writeRepeatedMessage(10, this.delegate_keys, (item) => item.serialize(writer));
                if (this.erc20_to_denoms.length)
                    writer.writeRepeatedMessage(11, this.erc20_to_denoms, (item) => item.serialize(writer));
                if (this.unbatched_transfers.length)
                    writer.writeRepeatedMessage(12, this.unbatched_transfers, (item) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.params, () => message.params = Params.deserialize(reader));
                            break;
                        case 2:
                            reader.readMessage(message.gravity_nonces, () => message.gravity_nonces = GravityNonces.deserialize(reader));
                            break;
                        case 3:
                            reader.readMessage(message.valsets, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.gravity.v1.Valset.deserialize(reader), dependency_2.gravity.v1.Valset));
                            break;
                        case 4:
                            reader.readMessage(message.valset_confirms, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_3.gravity.v1.MsgValsetConfirm.deserialize(reader), dependency_3.gravity.v1.MsgValsetConfirm));
                            break;
                        case 5:
                            reader.readMessage(message.batches, () => pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_4.gravity.v1.OutgoingTxBatch.deserialize(reader), dependency_4.gravity.v1.OutgoingTxBatch));
                            break;
                        case 6:
                            reader.readMessage(message.batch_confirms, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_3.gravity.v1.MsgConfirmBatch.deserialize(reader), dependency_3.gravity.v1.MsgConfirmBatch));
                            break;
                        case 7:
                            reader.readMessage(message.logic_calls, () => pb_1.Message.addToRepeatedWrapperField(message, 7, dependency_4.gravity.v1.OutgoingLogicCall.deserialize(reader), dependency_4.gravity.v1.OutgoingLogicCall));
                            break;
                        case 8:
                            reader.readMessage(message.logic_call_confirms, () => pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_3.gravity.v1.MsgConfirmLogicCall.deserialize(reader), dependency_3.gravity.v1.MsgConfirmLogicCall));
                            break;
                        case 9:
                            reader.readMessage(message.attestations, () => pb_1.Message.addToRepeatedWrapperField(message, 9, dependency_5.gravity.v1.Attestation.deserialize(reader), dependency_5.gravity.v1.Attestation));
                            break;
                        case 10:
                            reader.readMessage(message.delegate_keys, () => pb_1.Message.addToRepeatedWrapperField(message, 10, dependency_3.gravity.v1.MsgSetOrchestratorAddress.deserialize(reader), dependency_3.gravity.v1.MsgSetOrchestratorAddress));
                            break;
                        case 11:
                            reader.readMessage(message.erc20_to_denoms, () => pb_1.Message.addToRepeatedWrapperField(message, 11, dependency_2.gravity.v1.ERC20ToDenom.deserialize(reader), dependency_2.gravity.v1.ERC20ToDenom));
                            break;
                        case 12:
                            reader.readMessage(message.unbatched_transfers, () => pb_1.Message.addToRepeatedWrapperField(message, 12, dependency_4.gravity.v1.OutgoingTransferTx.deserialize(reader), dependency_4.gravity.v1.OutgoingTransferTx));
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary() {
                return this.serialize();
            }
            static deserializeBinary(bytes) {
                return GenesisState.deserialize(bytes);
            }
        }
        _GenesisState_one_of_decls = new WeakMap();
        v1.GenesisState = GenesisState;
        class GravityNonces extends pb_1.Message {
            constructor(data) {
                super();
                _GravityNonces_one_of_decls.set(this, []);
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GravityNonces_one_of_decls, "f"));
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("latest_valset_nonce" in data && data.latest_valset_nonce != undefined) {
                        this.latest_valset_nonce = data.latest_valset_nonce;
                    }
                    if ("last_observed_nonce" in data && data.last_observed_nonce != undefined) {
                        this.last_observed_nonce = data.last_observed_nonce;
                    }
                    if ("last_slashed_valset_nonce" in data && data.last_slashed_valset_nonce != undefined) {
                        this.last_slashed_valset_nonce = data.last_slashed_valset_nonce;
                    }
                    if ("last_slashed_batch_block" in data && data.last_slashed_batch_block != undefined) {
                        this.last_slashed_batch_block = data.last_slashed_batch_block;
                    }
                    if ("last_slashed_logic_call_block" in data && data.last_slashed_logic_call_block != undefined) {
                        this.last_slashed_logic_call_block = data.last_slashed_logic_call_block;
                    }
                    if ("last_tx_pool_id" in data && data.last_tx_pool_id != undefined) {
                        this.last_tx_pool_id = data.last_tx_pool_id;
                    }
                    if ("last_batch_id" in data && data.last_batch_id != undefined) {
                        this.last_batch_id = data.last_batch_id;
                    }
                }
            }
            get latest_valset_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set latest_valset_nonce(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get last_observed_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 2, 0);
            }
            set last_observed_nonce(value) {
                pb_1.Message.setField(this, 2, value);
            }
            get last_slashed_valset_nonce() {
                return pb_1.Message.getFieldWithDefault(this, 3, 0);
            }
            set last_slashed_valset_nonce(value) {
                pb_1.Message.setField(this, 3, value);
            }
            get last_slashed_batch_block() {
                return pb_1.Message.getFieldWithDefault(this, 4, 0);
            }
            set last_slashed_batch_block(value) {
                pb_1.Message.setField(this, 4, value);
            }
            get last_slashed_logic_call_block() {
                return pb_1.Message.getFieldWithDefault(this, 5, 0);
            }
            set last_slashed_logic_call_block(value) {
                pb_1.Message.setField(this, 5, value);
            }
            get last_tx_pool_id() {
                return pb_1.Message.getFieldWithDefault(this, 6, 0);
            }
            set last_tx_pool_id(value) {
                pb_1.Message.setField(this, 6, value);
            }
            get last_batch_id() {
                return pb_1.Message.getFieldWithDefault(this, 7, 0);
            }
            set last_batch_id(value) {
                pb_1.Message.setField(this, 7, value);
            }
            static fromObject(data) {
                const message = new GravityNonces({});
                if (data.latest_valset_nonce != null) {
                    message.latest_valset_nonce = data.latest_valset_nonce;
                }
                if (data.last_observed_nonce != null) {
                    message.last_observed_nonce = data.last_observed_nonce;
                }
                if (data.last_slashed_valset_nonce != null) {
                    message.last_slashed_valset_nonce = data.last_slashed_valset_nonce;
                }
                if (data.last_slashed_batch_block != null) {
                    message.last_slashed_batch_block = data.last_slashed_batch_block;
                }
                if (data.last_slashed_logic_call_block != null) {
                    message.last_slashed_logic_call_block = data.last_slashed_logic_call_block;
                }
                if (data.last_tx_pool_id != null) {
                    message.last_tx_pool_id = data.last_tx_pool_id;
                }
                if (data.last_batch_id != null) {
                    message.last_batch_id = data.last_batch_id;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.latest_valset_nonce != null) {
                    data.latest_valset_nonce = this.latest_valset_nonce;
                }
                if (this.last_observed_nonce != null) {
                    data.last_observed_nonce = this.last_observed_nonce;
                }
                if (this.last_slashed_valset_nonce != null) {
                    data.last_slashed_valset_nonce = this.last_slashed_valset_nonce;
                }
                if (this.last_slashed_batch_block != null) {
                    data.last_slashed_batch_block = this.last_slashed_batch_block;
                }
                if (this.last_slashed_logic_call_block != null) {
                    data.last_slashed_logic_call_block = this.last_slashed_logic_call_block;
                }
                if (this.last_tx_pool_id != null) {
                    data.last_tx_pool_id = this.last_tx_pool_id;
                }
                if (this.last_batch_id != null) {
                    data.last_batch_id = this.last_batch_id;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.latest_valset_nonce != 0)
                    writer.writeUint64(1, this.latest_valset_nonce);
                if (this.last_observed_nonce != 0)
                    writer.writeUint64(2, this.last_observed_nonce);
                if (this.last_slashed_valset_nonce != 0)
                    writer.writeUint64(3, this.last_slashed_valset_nonce);
                if (this.last_slashed_batch_block != 0)
                    writer.writeUint64(4, this.last_slashed_batch_block);
                if (this.last_slashed_logic_call_block != 0)
                    writer.writeUint64(5, this.last_slashed_logic_call_block);
                if (this.last_tx_pool_id != 0)
                    writer.writeUint64(6, this.last_tx_pool_id);
                if (this.last_batch_id != 0)
                    writer.writeUint64(7, this.last_batch_id);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GravityNonces();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.latest_valset_nonce = reader.readUint64();
                            break;
                        case 2:
                            message.last_observed_nonce = reader.readUint64();
                            break;
                        case 3:
                            message.last_slashed_valset_nonce = reader.readUint64();
                            break;
                        case 4:
                            message.last_slashed_batch_block = reader.readUint64();
                            break;
                        case 5:
                            message.last_slashed_logic_call_block = reader.readUint64();
                            break;
                        case 6:
                            message.last_tx_pool_id = reader.readUint64();
                            break;
                        case 7:
                            message.last_batch_id = reader.readUint64();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary() {
                return this.serialize();
            }
            static deserializeBinary(bytes) {
                return GravityNonces.deserialize(bytes);
            }
        }
        _GravityNonces_one_of_decls = new WeakMap();
        v1.GravityNonces = GravityNonces;
    })(v1 = gravity.v1 || (gravity.v1 = {}));
})(gravity = exports.gravity || (exports.gravity = {}));
//# sourceMappingURL=genesis.js.map