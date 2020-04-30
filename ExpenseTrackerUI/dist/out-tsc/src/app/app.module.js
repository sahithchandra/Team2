import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './features/nav-bar/component/nav-bar.component';
import { LoginComponent } from './features/login/component/login.component';
import { LoginService } from './features/login/service/login.service';
import { SignUpComponent } from './features/signup/component/signup.component';
import { SignUpService } from './features/signup/service/signup.service';
import { ExpenseTrackerComponent } from './features/expense-tracker/component/expense-tracker.component';
import { ExpenseTrackerService } from './features/expense-tracker/service/expense-tracker.service';
import { CurrencyPipe } from '@angular/common';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                NavBarComponent,
                LoginComponent,
                SignUpComponent,
                ExpenseTrackerComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule
            ],
            providers: [LoginService, SignUpService, ExpenseTrackerService, CurrencyPipe],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map