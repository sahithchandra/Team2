import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/component/login.component';
import { SignUpComponent } from './features/signup/component/signup.component';
import { ExpenseTrackerComponent } from './features/expense-tracker/component/expense-tracker.component';
var routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: LoginComponent },
    { path: 'SignUp', component: SignUpComponent },
    { path: 'ExpenseTracker', component: ExpenseTrackerComponent },
    { path: 'SplitExpense', component: SignUpComponent },
    { path: 'InviteFriends', component: LoginComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map