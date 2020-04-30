import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, formBuilder, router) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.spinner = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginFormbuilder = this.formBuilder.group({
            email: [null, [Validators.required]],
            password: [null, [Validators.required]]
        });
        this.spinner = false;
        console.log(this.loginFormbuilder.valid);
    };
    LoginComponent.prototype.routeToSignup = function () {
        this.router.navigate(['/SignUp']);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner = true;
        var userDTO = {
            email: this.loginFormbuilder.value.email,
            password: this.loginFormbuilder.value.password
        };
        this.loginService.login(userDTO).subscribe(function (response) {
            _this.spinner = false;
            if (response.indicator) {
                _this.router.navigate(['/ExpenseTracker']);
                window.localStorage.setItem('email', _this.loginFormbuilder.value.email);
            }
            else {
                if (response.message == 3) {
                    alert('The email you enter is not registered with us.');
                }
                else if (response.message == 2) {
                    alert('The password is incorrect.');
                }
            }
        }, function (error) {
            console.log(error);
            alert('The password is incorrect.');
            _this.spinner = false;
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService,
            FormBuilder,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map