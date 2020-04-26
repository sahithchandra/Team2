import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './features/login/component/login.component';
import { SignUpComponent } from './features/signup/component/signup.component';
import { ExpenseTrackerComponent } from './features/expense-tracker/component/expense-tracker.component';

const routes: Routes = [
  {path: '', redirectTo: 'Login', pathMatch: 'full'},
  {path: 'Login', component: LoginComponent},
  {path: 'SignUp', component: SignUpComponent},
  {path: 'ExpenseTracker', component: ExpenseTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
