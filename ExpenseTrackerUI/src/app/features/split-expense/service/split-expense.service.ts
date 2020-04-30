import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { SplitExpenseModule } from '../model/split-expense.model';

@Injectable({
  providedIn: 'root'
})

export class SplitExpenseService {

  private baseUrl = 'http://localhost:9595/ExpenseTracker';

  constructor(private http: HttpClient) { }

  public getExpenseCategory() : Observable<any> {
    let categories: string[] = [
        "Entertainment" , "Food", "Health", "Housing", "Insurance", "Miscellaneous","Personal", "Saving", "Transportation", "Utilities"
    ]
    //return of(categories);
     return this.http.request('GET',`${this.baseUrl}/getCategories`);
  }

  public splitExpenses(splitExpenseObj: any) : Observable<any> {
   // return of({indicator: true, message: 0});
     return this.http.request('POST', `${this.baseUrl}/splitExpenses`, { body: splitExpenseObj });
  }

}