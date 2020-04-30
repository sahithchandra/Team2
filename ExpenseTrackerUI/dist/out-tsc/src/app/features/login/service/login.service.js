import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:9595/ExpenseTracker';
    }
    LoginService.prototype.login = function (userDTO) {
        return of({ indicator: true, message: 0 });
        //return this.http.request('POST',`${this.baseUrl}/signin`, { body: userDTO });
    };
    LoginService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=login.service.js.map