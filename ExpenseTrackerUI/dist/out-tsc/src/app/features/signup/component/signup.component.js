import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SignUpService } from '../service/signup.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(SignUpService, formBuilder, router) {
        this.SignUpService = SignUpService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.spinner = true;
        this.errorMessage = "";
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.SignUpFormbuilder = this.formBuilder.group({
            email: ['', [Validators.required]],
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
            passwordConfirm: ['', [Validators.required]]
        });
        this.spinner = false;
    };
    SignUpComponent.prototype.routeToSignIn = function () {
        this.router.navigate(['/Login']);
    };
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        this.errorMessage = '';
        if (this.SignUpFormbuilder.value.password == this.SignUpFormbuilder.value.passwordConfirm) {
            this.spinner = true;
            var userDTO = {
                email: this.SignUpFormbuilder.value.email,
                username: this.SignUpFormbuilder.value.username,
                password: this.SignUpFormbuilder.value.password,
                passwordConfirm: this.SignUpFormbuilder.value.passwordConfirm
            };
            console.log(userDTO);
            this.SignUpService.login(userDTO).subscribe(function (response) {
                console.log(response);
                _this.spinner = false;
                if (response.indicator) {
                    alert('SignUp Successful');
                    _this.router.navigate(['/Login']);
                }
                else {
                    if (response.message == 1) {
                        alert('The email you enter is already registered with us.');
                    }
                }
            });
        }
        else {
            this.errorMessage = " Password do not match!";
        }
    };
    SignUpComponent = tslib_1.__decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SignUpService,
            FormBuilder,
            Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
export { SignUpComponent };
//# sourceMappingURL=signup.component.js.map