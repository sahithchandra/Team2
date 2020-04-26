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
    return of(categories);
    // return this.http.request('GET',`${this.baseUrl}/getCategories`);
  }


  public addExpenses(expenseDTO: any) : Observable<any> {
    //return of(true);
    return this.http.request('POST',`${this.baseUrl}/setBudget`, { body: expenseDTO });
  }

}