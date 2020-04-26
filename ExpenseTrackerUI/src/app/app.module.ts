import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './features/login/component/login.component';
import { LoginService } from './features/login/service/login.service';
import { SignUpComponent } from './features/signup/component/signup.component';
import { SignUpService } from './features/signup/service/signup.service';
import { ExpenseTrackerComponent } from './features/expense-tracker/component/expense-tracker.component';
import { ExpenseTrackerService } from './features/expense-tracker/service/expense-tracker.service';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
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
export class AppModule {
}
