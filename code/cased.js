"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.upperCase = exports.lowerCase = void 0;
function lowerCase(str) {
    try {
        return str.toLowerCase();
    }
    catch (error) {
        throw new CasedError("lowerCase Method: Please provide a valid string.", error);
    }
}
exports.lowerCase = lowerCase;
function upperCase(str) {
    try {
        return str.toUpperCase();
    }
    catch (error) {
        throw new CasedError("upperCase Method: Please provide a valid string.", error);
    }
}
exports.upperCase = upperCase;
// Our custom error
// See 6.js for usage
var CasedError = /** @class */ (function (_super) {
    __extends(CasedError, _super);
    function CasedError(message, cause) {
        var _this = _super.call(this, message) || this;
        _this.cause = cause;
        _this.name = "CasedError";
        return _this;
    }
    return CasedError;
}(Error));
