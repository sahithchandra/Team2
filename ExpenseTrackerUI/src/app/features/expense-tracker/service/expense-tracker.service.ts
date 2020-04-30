import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { ExpenseTracker } from '../model/expense-tracker.model';

@Injectable({
  providedIn: 'root'
})

export class ExpenseTrackerService {

  private baseUrl = 'http://localhost:9595/ExpenseTracker';

  constructor(private http: HttpClient) { }

  public getExpenseCategory() : Observable<any> {
    let categories: string[] = [
        "Entertainment" , "Food", "Health", "Housing", "Insurance", "Miscellaneous","Personal", "Saving", "Transportation", "Utilities"
    ]
    //return of(categories);
     return this.http.request('GET',`${this.baseUrl}/getCategories`);
  }

  public addExpenses(expenseDTO: any) : Observable<any> {
    //return of({indicator: true, message: 1 });
     return this.http.request('POST',`${this.baseUrl}/setBudget`, { body: expenseDTO });
  }

  public getUserExpenses() : Observable<any> {
    let expenseList : ExpenseTracker.ExpenseDTO[] = [
      {name : "Entertainment", budget : 12},
      {name : "Food", budget : 12},
      {name : "Health", budget : 12},
    ];
    //return of(expenseList);
     return this.http.request('GET', `${this.baseUrl}/getUserExpenses`);
  }

}