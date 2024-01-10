/// <reference types="node" />
import * as dependency_1 from "./../../base/query/v1beta1/pagination";
import * as dependency_4 from "./staking";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.staking.v1beta1 {
    export class QueryValidatorsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            status?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get status(): string;
        set status(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            status?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryValidatorsRequest;
        toObject(): {
            status?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorsRequest;
    }
    export class QueryValidatorsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validators?: dependency_4.cosmos.staking.v1beta1.Validator[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get validators(): dependency_4.cosmos.staking.v1beta1.Validator[];
        set validators(value: dependency_4.cosmos.staking.v1beta1.Validator[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            validators?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.Validator.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryValidatorsResponse;
        toObject(): {
            validators?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.Validator.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorsResponse;
    }
    export class QueryValidatorRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validator_addr?: string;
        });
        get validator_addr(): string;
        set validator_addr(value: string);
        static fromObject(data: {
            validator_addr?: string;
        }): QueryValidatorRequest;
        toObject(): {
            validator_addr?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorRequest;
    }
    export class QueryValidatorResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validator?: dependency_4.cosmos.staking.v1beta1.Validator;
        });
        get validator(): dependency_4.cosmos.staking.v1beta1.Validator;
        set validator(value: dependency_4.cosmos.staking.v1beta1.Validator);
        get has_validator(): boolean;
        static fromObject(data: {
            validator?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.Validator.prototype.toObject>;
        }): QueryValidatorResponse;
        toObject(): {
            validator?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.Validator.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorResponse;
    }
    export class QueryValidatorDelegationsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validator_addr?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get validator_addr(): string;
        set validator_addr(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            validator_addr?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryValidatorDelegationsRequest;
        toObject(): {
            validator_addr?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorDelegationsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorDelegationsRequest;
    }
    export class QueryValidatorDelegationsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegation_responses?: dependency_4.cosmos.staking.v1beta1.DelegationResponse[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get delegation_responses(): dependency_4.cosmos.staking.v1beta1.DelegationResponse[];
        set delegation_responses(value: dependency_4.cosmos.staking.v1beta1.DelegationResponse[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            delegation_responses?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.DelegationResponse.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryValidatorDelegationsResponse;
        toObject(): {
            delegation_responses?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.DelegationResponse.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorDelegationsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorDelegationsResponse;
    }
    export class QueryValidatorUnbondingDelegationsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validator_addr?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get validator_addr(): string;
        set validator_addr(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            validator_addr?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryValidatorUnbondingDelegationsRequest;
        toObject(): {
            validator_addr?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorUnbondingDelegationsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorUnbondingDelegationsRequest;
    }
    export class QueryValidatorUnbondingDelegationsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            unbonding_responses?: dependency_4.cosmos.staking.v1beta1.UnbondingDelegation[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get unbonding_responses(): dependency_4.cosmos.staking.v1beta1.UnbondingDelegation[];
        set unbonding_responses(value: dependency_4.cosmos.staking.v1beta1.UnbondingDelegation[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            unbonding_responses?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryValidatorUnbondingDelegationsResponse;
        toObject(): {
            unbonding_responses?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorUnbondingDelegationsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorUnbondingDelegationsResponse;
    }
    export class QueryDelegationRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegator_addr?: string;
            validator_addr?: string;
        });
        get delegator_addr(): string;
        set delegator_addr(value: string);
        get validator_addr(): string;
        set validator_addr(value: string);
        static fromObject(data: {
            delegator_addr?: string;
            validator_addr?: string;
        }): QueryDelegationRequest;
        toObject(): {
            delegator_addr?: string;
            validator_addr?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegationRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegationRequest;
    }
    export class QueryDelegationResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegation_response?: dependency_4.cosmos.staking.v1beta1.DelegationResponse;
        });
        get delegation_response(): dependency_4.cosmos.staking.v1beta1.DelegationResponse;
        set delegation_response(value: dependency_4.cosmos.staking.v1beta1.DelegationResponse);
        get has_delegation_response(): boolean;
        static fromObject(data: {
            delegation_response?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.DelegationResponse.prototype.toObject>;
        }): QueryDelegationResponse;
        toObject(): {
            delegation_response?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.DelegationResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegationResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegationResponse;
    }
    export class QueryUnbondingDelegationRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegator_addr?: string;
            validator_addr?: string;
        });
        get delegator_addr(): string;
        set delegator_addr(value: string);
        get validator_addr(): string;
        set validator_addr(value: string);
        static fromObject(data: {
            delegator_addr?: string;
            validator_addr?: string;
        }): QueryUnbondingDelegationRequest;
        toObject(): {
            delegator_addr?: string;
            validator_addr?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryUnbondingDelegationRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryUnbondingDelegationRequest;
    }
    export class QueryUnbondingDelegationResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            unbond?: dependency_4.cosmos.staking.v1beta1.UnbondingDelegation;
        });
        get unbond(): dependency_4.cosmos.staking.v1beta1.UnbondingDelegation;
        set unbond(value: dependency_4.cosmos.staking.v1beta1.UnbondingDelegation);
        get has_unbond(): boolean;
        static fromObject(data: {
            unbond?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.prototype.toObject>;
        }): QueryUnbondingDelegationResponse;
        toObject(): {
            unbond?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryUnbondingDelegationResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryUnbondingDelegationResponse;
    }
    export class QueryDelegatorDelegationsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegator_addr?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get delegator_addr(): string;
        set delegator_addr(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            delegator_addr?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryDelegatorDelegationsRequest;
        toObject(): {
            delegator_addr?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegatorDelegationsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegatorDelegationsRequest;
    }
    export class QueryDelegatorDelegationsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegation_responses?: dependency_4.cosmos.staking.v1beta1.DelegationResponse[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get delegation_responses(): dependency_4.cosmos.staking.v1beta1.DelegationResponse[];
        set delegation_responses(value: dependency_4.cosmos.staking.v1beta1.DelegationResponse[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            delegation_responses?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.DelegationResponse.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryDelegatorDelegationsResponse;
        toObject(): {
            delegation_responses?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.DelegationResponse.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegatorDelegationsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegatorDelegationsResponse;
    }
    export class QueryDelegatorUnbondingDelegationsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegator_addr?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get delegator_addr(): string;
        set delegator_addr(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            delegator_addr?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryDelegatorUnbondingDelegationsRequest;
        toObject(): {
            delegator_addr?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegatorUnbondingDelegationsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegatorUnbondingDelegationsRequest;
    }
    export class QueryDelegatorUnbondingDelegationsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            unbonding_responses?: dependency_4.cosmos.staking.v1beta1.UnbondingDelegation[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get unbonding_responses(): dependency_4.cosmos.staking.v1beta1.UnbondingDelegation[];
        set unbonding_responses(value: dependency_4.cosmos.staking.v1beta1.UnbondingDelegation[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            unbonding_responses?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryDelegatorUnbondingDelegationsResponse;
        toObject(): {
            unbonding_responses?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegatorUnbondingDelegationsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegatorUnbondingDelegationsResponse;
    }
    export class QueryRedelegationsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegator_addr?: string;
            src_validator_addr?: string;
            dst_validator_addr?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get delegator_addr(): string;
        set delegator_addr(value: string);
        get src_validator_addr(): string;
        set src_validator_addr(value: string);
        get dst_validator_addr(): string;
        set dst_validator_addr(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            delegator_addr?: string;
            src_validator_addr?: string;
            dst_validator_addr?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryRedelegationsRequest;
        toObject(): {
            delegator_addr?: string;
            src_validator_addr?: string;
            dst_validator_addr?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryRedelegationsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryRedelegationsRequest;
    }
    export class QueryRedelegationsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            redelegation_responses?: dependency_4.cosmos.staking.v1beta1.RedelegationResponse[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get redelegation_responses(): dependency_4.cosmos.staking.v1beta1.RedelegationResponse[];
        set redelegation_responses(value: dependency_4.cosmos.staking.v1beta1.RedelegationResponse[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            redelegation_responses?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.RedelegationResponse.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryRedelegationsResponse;
        toObject(): {
            redelegation_responses?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.RedelegationResponse.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryRedelegationsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryRedelegationsResponse;
    }
    export class QueryDelegatorValidatorsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegator_addr?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get delegator_addr(): string;
        set delegator_addr(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        get has_pagination(): boolean;
        static fromObject(data: {
            delegator_addr?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryDelegatorValidatorsRequest;
        toObject(): {
            delegator_addr?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegatorValidatorsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegatorValidatorsRequest;
    }
    export class QueryDelegatorValidatorsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validators?: dependency_4.cosmos.staking.v1beta1.Validator[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get validators(): dependency_4.cosmos.staking.v1beta1.Validator[];
        set validators(value: dependency_4.cosmos.staking.v1beta1.Validator[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        get has_pagination(): boolean;
        static fromObject(data: {
            validators?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.Validator.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryDelegatorValidatorsResponse;
        toObject(): {
            validators?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.Validator.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegatorValidatorsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegatorValidatorsResponse;
    }
    export class QueryDelegatorValidatorRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            delegator_addr?: string;
            validator_addr?: string;
        });
        get delegator_addr(): string;
        set delegator_addr(value: string);
        get validator_addr(): string;
        set validator_addr(value: string);
        static fromObject(data: {
            delegator_addr?: string;
            validator_addr?: string;
        }): QueryDelegatorValidatorRequest;
        toObject(): {
            delegator_addr?: string;
            validator_addr?: string;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegatorValidatorRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegatorValidatorRequest;
    }
    export class QueryDelegatorValidatorResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            validator?: dependency_4.cosmos.staking.v1beta1.Validator;
        });
        get validator(): dependency_4.cosmos.staking.v1beta1.Validator;
        set validator(value: dependency_4.cosmos.staking.v1beta1.Validator);
        get has_validator(): boolean;
        static fromObject(data: {
            validator?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.Validator.prototype.toObject>;
        }): QueryDelegatorValidatorResponse;
        toObject(): {
            validator?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.Validator.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDelegatorValidatorResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDelegatorValidatorResponse;
    }
    export class QueryHistoricalInfoRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            height?: number;
        });
        get height(): number;
        set height(value: number);
        static fromObject(data: {
            height?: number;
        }): QueryHistoricalInfoRequest;
        toObject(): {
            height?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryHistoricalInfoRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryHistoricalInfoRequest;
    }
    export class QueryHistoricalInfoResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            hist?: dependency_4.cosmos.staking.v1beta1.HistoricalInfo;
        });
        get hist(): dependency_4.cosmos.staking.v1beta1.HistoricalInfo;
        set hist(value: dependency_4.cosmos.staking.v1beta1.HistoricalInfo);
        get has_hist(): boolean;
        static fromObject(data: {
            hist?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.HistoricalInfo.prototype.toObject>;
        }): QueryHistoricalInfoResponse;
        toObject(): {
            hist?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.HistoricalInfo.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryHistoricalInfoResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryHistoricalInfoResponse;
    }
    export class QueryPoolRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryPoolRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPoolRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPoolRequest;
    }
    export class QueryPoolResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            pool?: dependency_4.cosmos.staking.v1beta1.Pool;
        });
        get pool(): dependency_4.cosmos.staking.v1beta1.Pool;
        set pool(value: dependency_4.cosmos.staking.v1beta1.Pool);
        get has_pool(): boolean;
        static fromObject(data: {
            pool?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.Pool.prototype.toObject>;
        }): QueryPoolResponse;
        toObject(): {
            pool?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.Pool.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPoolResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPoolResponse;
    }
    export class QueryParamsRequest extends pb_1.Message {
        #private;
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryParamsRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
    }
    export class QueryParamsResponse extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            params?: dependency_4.cosmos.staking.v1beta1.Params;
        });
        get params(): dependency_4.cosmos.staking.v1beta1.Params;
        set params(value: dependency_4.cosmos.staking.v1beta1.Params);
        get has_params(): boolean;
        static fromObject(data: {
            params?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: ReturnType<typeof dependency_4.cosmos.staking.v1beta1.Params.prototype.toObject>;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            Validators: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryValidatorsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryValidatorsRequest;
                responseSerialize: (message: QueryValidatorsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryValidatorsResponse;
            };
            Validator: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryValidatorRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryValidatorRequest;
                responseSerialize: (message: QueryValidatorResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryValidatorResponse;
            };
            ValidatorDelegations: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryValidatorDelegationsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryValidatorDelegationsRequest;
                responseSerialize: (message: QueryValidatorDelegationsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryValidatorDelegationsResponse;
            };
            ValidatorUnbondingDelegations: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryValidatorUnbondingDelegationsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryValidatorUnbondingDelegationsRequest;
                responseSerialize: (message: QueryValidatorUnbondingDelegationsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryValidatorUnbondingDelegationsResponse;
            };
            Delegation: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDelegationRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDelegationRequest;
                responseSerialize: (message: QueryDelegationResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDelegationResponse;
            };
            UnbondingDelegation: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryUnbondingDelegationRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryUnbondingDelegationRequest;
                responseSerialize: (message: QueryUnbondingDelegationResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryUnbondingDelegationResponse;
            };
            DelegatorDelegations: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDelegatorDelegationsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDelegatorDelegationsRequest;
                responseSerialize: (message: QueryDelegatorDelegationsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDelegatorDelegationsResponse;
            };
            DelegatorUnbondingDelegations: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDelegatorUnbondingDelegationsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDelegatorUnbondingDelegationsRequest;
                responseSerialize: (message: QueryDelegatorUnbondingDelegationsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDelegatorUnbondingDelegationsResponse;
            };
            Redelegations: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryRedelegationsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryRedelegationsRequest;
                responseSerialize: (message: QueryRedelegationsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryRedelegationsResponse;
            };
            DelegatorValidators: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDelegatorValidatorsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDelegatorValidatorsRequest;
                responseSerialize: (message: QueryDelegatorValidatorsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDelegatorValidatorsResponse;
            };
            DelegatorValidator: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDelegatorValidatorRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDelegatorValidatorRequest;
                responseSerialize: (message: QueryDelegatorValidatorResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDelegatorValidatorResponse;
            };
            HistoricalInfo: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryHistoricalInfoRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryHistoricalInfoRequest;
                responseSerialize: (message: QueryHistoricalInfoResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryHistoricalInfoResponse;
            };
            Pool: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryPoolRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryPoolRequest;
                responseSerialize: (message: QueryPoolResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryPoolResponse;
            };
            Params: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryParamsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryParamsRequest;
                responseSerialize: (message: QueryParamsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryParamsResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Validators(call: grpc_1.ServerUnaryCall<QueryValidatorsRequest, QueryValidatorsResponse>, callback: grpc_1.sendUnaryData<QueryValidatorsResponse>): void;
        abstract Validator(call: grpc_1.ServerUnaryCall<QueryValidatorRequest, QueryValidatorResponse>, callback: grpc_1.sendUnaryData<QueryValidatorResponse>): void;
        abstract ValidatorDelegations(call: grpc_1.ServerUnaryCall<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>, callback: grpc_1.sendUnaryData<QueryValidatorDelegationsResponse>): void;
        abstract ValidatorUnbondingDelegations(call: grpc_1.ServerUnaryCall<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>, callback: grpc_1.sendUnaryData<QueryValidatorUnbondingDelegationsResponse>): void;
        abstract Delegation(call: grpc_1.ServerUnaryCall<QueryDelegationRequest, QueryDelegationResponse>, callback: grpc_1.sendUnaryData<QueryDelegationResponse>): void;
        abstract UnbondingDelegation(call: grpc_1.ServerUnaryCall<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>, callback: grpc_1.sendUnaryData<QueryUnbondingDelegationResponse>): void;
        abstract DelegatorDelegations(call: grpc_1.ServerUnaryCall<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>, callback: grpc_1.sendUnaryData<QueryDelegatorDelegationsResponse>): void;
        abstract DelegatorUnbondingDelegations(call: grpc_1.ServerUnaryCall<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>, callback: grpc_1.sendUnaryData<QueryDelegatorUnbondingDelegationsResponse>): void;
        abstract Redelegations(call: grpc_1.ServerUnaryCall<QueryRedelegationsRequest, QueryRedelegationsResponse>, callback: grpc_1.sendUnaryData<QueryRedelegationsResponse>): void;
        abstract DelegatorValidators(call: grpc_1.ServerUnaryCall<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>, callback: grpc_1.sendUnaryData<QueryDelegatorValidatorsResponse>): void;
        abstract DelegatorValidator(call: grpc_1.ServerUnaryCall<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>, callback: grpc_1.sendUnaryData<QueryDelegatorValidatorResponse>): void;
        abstract HistoricalInfo(call: grpc_1.ServerUnaryCall<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>, callback: grpc_1.sendUnaryData<QueryHistoricalInfoResponse>): void;
        abstract Pool(call: grpc_1.ServerUnaryCall<QueryPoolRequest, QueryPoolResponse>, callback: grpc_1.sendUnaryData<QueryPoolResponse>): void;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Validators: GrpcUnaryServiceInterface<QueryValidatorsRequest, QueryValidatorsResponse>;
        Validator: GrpcUnaryServiceInterface<QueryValidatorRequest, QueryValidatorResponse>;
        ValidatorDelegations: GrpcUnaryServiceInterface<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>;
        ValidatorUnbondingDelegations: GrpcUnaryServiceInterface<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>;
        Delegation: GrpcUnaryServiceInterface<QueryDelegationRequest, QueryDelegationResponse>;
        UnbondingDelegation: GrpcUnaryServiceInterface<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>;
        DelegatorDelegations: GrpcUnaryServiceInterface<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>;
        DelegatorUnbondingDelegations: GrpcUnaryServiceInterface<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>;
        Redelegations: GrpcUnaryServiceInterface<QueryRedelegationsRequest, QueryRedelegationsResponse>;
        DelegatorValidators: GrpcUnaryServiceInterface<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>;
        DelegatorValidator: GrpcUnaryServiceInterface<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>;
        HistoricalInfo: GrpcUnaryServiceInterface<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>;
        Pool: GrpcUnaryServiceInterface<QueryPoolRequest, QueryPoolResponse>;
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
    }
    export {};
}
//# sourceMappingURL=query.d.ts.map