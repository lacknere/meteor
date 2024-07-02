(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../channel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.trigger = void 0;
    const channel_1 = require("../channel");
    /**
     * Trigger the in-app purchase flow modal.
     */
    exports.trigger = (0, channel_1.createSender)('inAppPurchases');
});
//# sourceMappingURL=index.js.map