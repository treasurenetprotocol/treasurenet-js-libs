"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gravity = void 0;
var gravity;
(function (gravity) {
    var v1;
    (function (v1) {
        let SignType;
        (function (SignType) {
            SignType[SignType["SIGN_TYPE_UNSPECIFIED"] = 0] = "SIGN_TYPE_UNSPECIFIED";
            SignType[SignType["SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE"] = 1] = "SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE";
            SignType[SignType["SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH"] = 2] = "SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH";
        })(SignType = v1.SignType || (v1.SignType = {}));
    })(v1 = gravity.v1 || (gravity.v1 = {}));
})(gravity = exports.gravity || (exports.gravity = {}));
//# sourceMappingURL=ethereum_signer.js.map