import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var SignUpService = /** @class */ (function () {
    function SignUpService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:9595/ExpenseTracker';
    }
    SignUpService.prototype.login = function (userDTO) {
        //return of({indicator: false, message: 1 });
        return this.http.request('POST', this.baseUrl + "/signup", { body: userDTO });
    };
    SignUpService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SignUpService);
    return SignUpService;
}());
export { SignUpService };
//# sourceMappingURL=signup.service.js.map