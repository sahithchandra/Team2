import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './features/nav-bar/component/nav-bar.component';
import { LoginComponent } from './features/login/component/login.component';
import { LoginService } from './features/login/service/login.service';
import { SignUpComponent } from './features/signup/component/signup.component';
import { SignUpService } from './features/signup/service/signup.service';
import { ExpenseTrackerComponent } from './features/expense-tracker/component/expense-tracker.component';
import { ExpenseTrackerService } from './features/expense-tracker/service/expense-tracker.service';
import { SplitExpenseComponent } from './features/split-expense/component/split-expense.component';
import { SplitExpenseService } from './features/split-expense/service/split-expense.service';
import { InviteFriendsComponent } from './features/invite-friends/component/invite-friends.component';
import { InviteFriendsService } from './features/invite-friends/service/invite-friends.service';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    SignUpComponent,
    ExpenseTrackerComponent,
    SplitExpenseComponent,
    InviteFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, SignUpService, ExpenseTrackerService, SplitExpenseService, InviteFriendsService, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
